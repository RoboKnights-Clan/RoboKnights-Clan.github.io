import { useState, useEffect, useRef } from "react";

// --- Seed Data ---
const INITIAL_MEMBERS = [
  { id: 1, name: "Aryan Mehta", role: "Drive Train Lead" },
  { id: 2, name: "Priya Sharma", role: "Sensors & Vision" },
  { id: 3, name: "Rohan Das", role: "Mechanical Design" },
  { id: 4, name: "Nisha Kapoor", role: "Software Lead" },
  { id: 5, name: "Dev Patel", role: "Electrical" },
];

const INITIAL_PARTS = [
  { id: 1, name: "Arduino Mega 2560", category: "Microcontroller", qty: 3, ownerId: 1, available: 2 },
  { id: 2, name: "Servo Motor MG996R", category: "Actuator", qty: 6, ownerId: 2, available: 4 },
  { id: 3, name: "LiDAR Sensor RPLidar A1", category: "Sensor", qty: 2, ownerId: 2, available: 1 },
  { id: 4, name: "DC Motor 12V 200RPM", category: "Actuator", qty: 8, ownerId: 3, available: 5 },
  { id: 5, name: "L298N Motor Driver", category: "Driver", qty: 4, ownerId: 5, available: 3 },
  { id: 6, name: "Raspberry Pi 4B", category: "Microcontroller", qty: 2, ownerId: 4, available: 1 },
  { id: 7, name: "Ultrasonic Sensor HC-SR04", category: "Sensor", qty: 10, ownerId: 2, available: 7 },
  { id: 8, name: "Aluminum Extrusion 2020 (1m)", category: "Structural", qty: 12, ownerId: 3, available: 9 },
  { id: 9, name: "Lipo Battery 11.1V 5000mAh", category: "Power", qty: 3, ownerId: 5, available: 2 },
  { id: 10, name: "Nema 17 Stepper Motor", category: "Actuator", qty: 4, ownerId: 1, available: 2 },
  { id: 11, name: "ESP32 Dev Module", category: "Microcontroller", qty: 5, ownerId: 4, available: 4 },
  { id: 12, name: "IMU MPU-6050", category: "Sensor", qty: 6, ownerId: 2, available: 5 },
];

const INITIAL_REQUESTS = [
  { id: 1, partId: 3, requesterId: 4, ownerId: 2, qty: 1, purpose: "Testing autonomous navigation module", status: "pending", date: "2026-04-15" },
  { id: 2, partId: 6, requesterId: 1, ownerId: 4, qty: 1, purpose: "Drive system brain upgrade", status: "approved", date: "2026-04-14" },
  { id: 3, partId: 9, requesterId: 3, ownerId: 5, qty: 1, purpose: "Chassis power testing", status: "pending", date: "2026-04-16" },
];

const CATEGORIES = ["All", "Microcontroller", "Actuator", "Sensor", "Driver", "Structural", "Power"];

// --- AI Backend Call ---
async function callAI(systemPrompt, userMessage) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    }),
  });
  const data = await res.json();
  return data.content?.[0]?.text || "";
}

// --- App ---
export default function App() {
  const [view, setView] = useState("inventory");
  const [parts, setParts] = useState(INITIAL_PARTS);
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [filterCat, setFilterCat] = useState("All");
  const [search, setSearch] = useState("");
  const [requestModal, setRequestModal] = useState(null);
  const [addPartModal, setAddPartModal] = useState(false);
  const [aiPanel, setAiPanel] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    { role: "assistant", content: "Hello. I am the Robotics Club AI assistant. I can help you find parts, suggest what to borrow, or analyze your inventory. What do you need?" }
  ]);
  const [aiInput, setAiInput] = useState("");
  const [currentUser] = useState(members[3]); // Nisha Kapoor is logged in
  const [notification, setNotification] = useState(null);
  const [newPart, setNewPart] = useState({ name: "", category: "Sensor", qty: 1, ownerId: currentUser.id });
  const aiEndRef = useRef(null);

  useEffect(() => {
    if (aiEndRef.current) aiEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [aiMessages]);

  const showNotification = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredParts = parts.filter(p => {
    const matchCat = filterCat === "All" || p.category === filterCat;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const getMember = (id) => members.find(m => m.id === id);

  const submitRequest = (partId, qty, purpose) => {
    const part = parts.find(p => p.id === partId);
    if (!part || qty > part.available) {
      showNotification("Insufficient availability.", "error");
      return;
    }
    const req = {
      id: Date.now(),
      partId,
      requesterId: currentUser.id,
      ownerId: part.ownerId,
      qty,
      purpose,
      status: "pending",
      date: new Date().toISOString().split("T")[0],
    };
    setRequests(prev => [req, ...prev]);
    showNotification("Request submitted successfully.");
    setRequestModal(null);
  };

  const updateRequestStatus = (reqId, status) => {
    setRequests(prev => prev.map(r => r.id === reqId ? { ...r, status } : r));
    if (status === "approved") {
      const req = requests.find(r => r.id === reqId);
      if (req) {
        setParts(prev => prev.map(p => p.id === req.partId
          ? { ...p, available: p.available - req.qty }
          : p));
      }
    }
    showNotification(`Request ${status}.`);
  };

  const addPart = () => {
    if (!newPart.name.trim()) return;
    const part = { id: Date.now(), ...newPart, available: parseInt(newPart.qty) };
    setParts(prev => [...prev, part]);
    setAddPartModal(false);
    setNewPart({ name: "", category: "Sensor", qty: 1, ownerId: currentUser.id });
    showNotification("Part added to inventory.");
  };

  const sendAiMessage = async () => {
    if (!aiInput.trim()) return;
    const userMsg = aiInput.trim();
    setAiInput("");
    setAiMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setAiLoading(true);

    const inventoryContext = parts.map(p => {
      const owner = getMember(p.ownerId);
      return `- ${p.name} (${p.category}): ${p.available}/${p.qty} available, held by ${owner?.name} (${owner?.role})`;
    }).join("\n");

    const requestContext = requests.map(r => {
      const part = parts.find(p => p.id === r.partId);
      const requester = getMember(r.requesterId);
      return `- ${requester?.name} requested ${r.qty}x ${part?.name} — Status: ${r.status}`;
    }).join("\n");

    const system = `You are the AI assistant for a robotics club parts management system. You are concise, technical, and helpful. 
Current inventory:\n${inventoryContext}
\nActive requests:\n${requestContext}
\nLogged in user: ${currentUser.name} (${currentUser.role})
Respond in plain text only. No markdown formatting. No bullet symbols. Keep responses under 120 words.`;

    try {
      const reply = await callAI(system, userMsg);
      setAiMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setAiMessages(prev => [...prev, { role: "assistant", content: "Unable to connect. Please try again." }]);
    }
    setAiLoading(false);
  };

  const myRequests = requests.filter(r => r.requesterId === currentUser.id);
  const incomingRequests = requests.filter(r => r.ownerId === currentUser.id);
  const pendingCount = incomingRequests.filter(r => r.status === "pending").length;

  return (
    <div style={styles.root}>
      <style>{globalStyles}</style>

      {/* Notification */}
      {notification && (
        <div style={{ ...styles.notification, background: notification.type === "error" ? "#000" : "#111", borderLeft: notification.type === "error" ? "3px solid #666" : "3px solid #fff" }}>
          {notification.msg}
        </div>
      )}

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.logo}>
            <span style={styles.logoMark}>R</span>
            <div>
              <div style={styles.logoTitle}>ROBOTICS CLUB</div>
              <div style={styles.logoSub}>PARTS REGISTRY</div>
            </div>
          </div>
        </div>
        <nav style={styles.nav}>
          {[
            { id: "inventory", label: "Inventory" },
            { id: "requests", label: `Requests${pendingCount > 0 ? ` (${pendingCount})` : ""}` },
            { id: "members", label: "Members" },
          ].map(item => (
            <button key={item.id} style={{ ...styles.navBtn, ...(view === item.id ? styles.navBtnActive : {}) }}
              onClick={() => setView(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <div style={styles.headerRight}>
          <button style={styles.aiBtn} onClick={() => setAiPanel(p => !p)}>
            AI ASSISTANT
          </button>
          <div style={styles.userBadge}>
            <div style={styles.userDot} />
            <div>
              <div style={styles.userName}>{currentUser.name}</div>
              <div style={styles.userRole}>{currentUser.role}</div>
            </div>
          </div>
        </div>
      </header>

      <div style={styles.layout}>
        {/* Main Content */}
        <main style={styles.main}>

          {/* INVENTORY VIEW */}
          {view === "inventory" && (
            <div style={styles.fadeIn}>
              <div style={styles.pageHeader}>
                <div>
                  <h1 style={styles.pageTitle}>PARTS INVENTORY</h1>
                  <p style={styles.pageSub}>{filteredParts.length} of {parts.length} parts</p>
                </div>
                <button style={styles.primaryBtn} onClick={() => setAddPartModal(true)}>+ ADD PART</button>
              </div>

              {/* Filters */}
              <div style={styles.filterRow}>
                <input
                  style={styles.searchInput}
                  placeholder="Search parts..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <div style={styles.catFilters}>
                  {CATEGORIES.map(cat => (
                    <button key={cat}
                      style={{ ...styles.catBtn, ...(filterCat === cat ? styles.catBtnActive : {}) }}
                      onClick={() => setFilterCat(cat)}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parts Table */}
              <div style={styles.tableWrap}>
                <table style={styles.table}>
                  <thead>
                    <tr style={styles.tableHead}>
                      <th style={styles.th}>PART NAME</th>
                      <th style={styles.th}>CATEGORY</th>
                      <th style={styles.th}>HELD BY</th>
                      <th style={styles.th}>AVAILABLE</th>
                      <th style={styles.th}>TOTAL</th>
                      <th style={styles.th}>STATUS</th>
                      <th style={styles.th}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredParts.map((part, i) => {
                      const owner = getMember(part.ownerId);
                      const avail = part.available;
                      return (
                        <tr key={part.id} style={{ ...styles.tr, animationDelay: `${i * 30}ms` }} className="table-row">
                          <td style={styles.td}>
                            <span style={styles.partName}>{part.name}</span>
                          </td>
                          <td style={styles.td}>
                            <span style={styles.catTag}>{part.category}</span>
                          </td>
                          <td style={styles.td}>
                            <span style={styles.memberName}>{owner?.name}</span>
                          </td>
                          <td style={styles.td}>
                            <span style={{ ...styles.availCount, color: avail === 0 ? "#555" : "#fff" }}>
                              {avail}
                            </span>
                          </td>
                          <td style={{ ...styles.td, color: "#555" }}>{part.qty}</td>
                          <td style={styles.td}>
                            <div style={{ ...styles.statusDot, background: avail === 0 ? "#333" : avail <= 1 ? "#666" : "#fff" }} />
                          </td>
                          <td style={styles.td}>
                            <button
                              style={{ ...styles.requestBtn, opacity: avail === 0 ? 0.3 : 1, cursor: avail === 0 ? "not-allowed" : "pointer" }}
                              disabled={avail === 0}
                              onClick={() => setRequestModal(part)}>
                              REQUEST
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* REQUESTS VIEW */}
          {view === "requests" && (
            <div style={styles.fadeIn}>
              <div style={styles.pageHeader}>
                <div>
                  <h1 style={styles.pageTitle}>BORROW REQUESTS</h1>
                  <p style={styles.pageSub}>Manage incoming and outgoing requests</p>
                </div>
              </div>

              <div style={styles.reqGrid}>
                {/* Incoming */}
                <div style={styles.reqColumn}>
                  <div style={styles.reqColHeader}>
                    <span>INCOMING</span>
                    {pendingCount > 0 && <span style={styles.badge}>{pendingCount}</span>}
                  </div>
                  {incomingRequests.length === 0 && <p style={styles.empty}>No incoming requests.</p>}
                  {incomingRequests.map(req => {
                    const part = parts.find(p => p.id === req.partId);
                    const requester = getMember(req.requesterId);
                    return (
                      <div key={req.id} style={styles.reqCard}>
                        <div style={styles.reqCardTop}>
                          <span style={styles.reqPartName}>{part?.name}</span>
                          <span style={{ ...styles.statusPill, ...getStatusStyle(req.status) }}>{req.status.toUpperCase()}</span>
                        </div>
                        <div style={styles.reqMeta}>Requested by {requester?.name} — qty {req.qty}</div>
                        <div style={styles.reqPurpose}>"{req.purpose}"</div>
                        <div style={styles.reqDate}>{req.date}</div>
                        {req.status === "pending" && (
                          <div style={styles.reqActions}>
                            <button style={styles.approveBtn} onClick={() => updateRequestStatus(req.id, "approved")}>APPROVE</button>
                            <button style={styles.denyBtn} onClick={() => updateRequestStatus(req.id, "denied")}>DENY</button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Outgoing */}
                <div style={styles.reqColumn}>
                  <div style={styles.reqColHeader}>OUTGOING</div>
                  {myRequests.length === 0 && <p style={styles.empty}>No outgoing requests.</p>}
                  {myRequests.map(req => {
                    const part = parts.find(p => p.id === req.partId);
                    const owner = getMember(req.ownerId);
                    return (
                      <div key={req.id} style={styles.reqCard}>
                        <div style={styles.reqCardTop}>
                          <span style={styles.reqPartName}>{part?.name}</span>
                          <span style={{ ...styles.statusPill, ...getStatusStyle(req.status) }}>{req.status.toUpperCase()}</span>
                        </div>
                        <div style={styles.reqMeta}>From {owner?.name} — qty {req.qty}</div>
                        <div style={styles.reqPurpose}>"{req.purpose}"</div>
                        <div style={styles.reqDate}>{req.date}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* MEMBERS VIEW */}
          {view === "members" && (
            <div style={styles.fadeIn}>
              <div style={styles.pageHeader}>
                <div>
                  <h1 style={styles.pageTitle}>CLUB MEMBERS</h1>
                  <p style={styles.pageSub}>{members.length} members</p>
                </div>
              </div>
              <div style={styles.memberGrid}>
                {members.map(member => {
                  const memberParts = parts.filter(p => p.ownerId === member.id);
                  const totalParts = memberParts.reduce((a, p) => a + p.qty, 0);
                  const totalAvail = memberParts.reduce((a, p) => a + p.available, 0);
                  return (
                    <div key={member.id} style={{ ...styles.memberCard, ...(member.id === currentUser.id ? styles.memberCardSelf : {}) }}>
                      <div style={styles.memberAvatar}>{member.name.split(" ").map(n => n[0]).join("")}</div>
                      <div style={styles.memberInfo}>
                        <div style={styles.memberCardName}>{member.name}
                          {member.id === currentUser.id && <span style={styles.youTag}>YOU</span>}
                        </div>
                        <div style={styles.memberCardRole}>{member.role}</div>
                      </div>
                      <div style={styles.memberStats}>
                        <div style={styles.memberStat}>
                          <span style={styles.memberStatNum}>{memberParts.length}</span>
                          <span style={styles.memberStatLabel}>TYPES</span>
                        </div>
                        <div style={styles.memberStat}>
                          <span style={styles.memberStatNum}>{totalParts}</span>
                          <span style={styles.memberStatLabel}>TOTAL</span>
                        </div>
                        <div style={styles.memberStat}>
                          <span style={styles.memberStatNum}>{totalAvail}</span>
                          <span style={styles.memberStatLabel}>FREE</span>
                        </div>
                      </div>
                      <div style={styles.memberPartsList}>
                        {memberParts.slice(0, 3).map(p => (
                          <span key={p.id} style={styles.miniPartTag}>{p.name}</span>
                        ))}
                        {memberParts.length > 3 && <span style={styles.miniPartTag}>+{memberParts.length - 3} more</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>

        {/* AI Panel */}
        {aiPanel && (
          <aside style={styles.aiSidebar}>
            <div style={styles.aiHeader}>
              <div style={styles.aiTitle}>AI ASSISTANT</div>
              <div style={styles.aiPulse} />
            </div>
            <div style={styles.aiMessages}>
              {aiMessages.map((msg, i) => (
                <div key={i} style={{ ...styles.aiMsg, ...(msg.role === "user" ? styles.aiMsgUser : styles.aiMsgBot) }}>
                  {msg.role === "assistant" && <div style={styles.aiMsgLabel}>AI</div>}
                  <div style={styles.aiMsgText}>{msg.content}</div>
                </div>
              ))}
              {aiLoading && (
                <div style={styles.aiMsg}>
                  <div style={styles.aiMsgLabel}>AI</div>
                  <div style={styles.aiTyping}>
                    <span style={styles.dot1} />
                    <span style={styles.dot2} />
                    <span style={styles.dot3} />
                  </div>
                </div>
              )}
              <div ref={aiEndRef} />
            </div>
            <div style={styles.aiInputRow}>
              <input
                style={styles.aiInput}
                placeholder="Ask about inventory..."
                value={aiInput}
                onChange={e => setAiInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendAiMessage()}
              />
              <button style={styles.aiSendBtn} onClick={sendAiMessage}>SEND</button>
            </div>
          </aside>
        )}
      </div>

      {/* Request Modal */}
      {requestModal && (
        <RequestModal
          part={requestModal}
          members={members}
          onClose={() => setRequestModal(null)}
          onSubmit={submitRequest}
          currentUser={currentUser}
        />
      )}

      {/* Add Part Modal */}
      {addPartModal && (
        <div style={styles.modalOverlay} onClick={() => setAddPartModal(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <div style={styles.modalTitle}>ADD NEW PART</div>
            <label style={styles.label}>Part Name</label>
            <input style={styles.input} value={newPart.name} onChange={e => setNewPart(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Servo Motor SG90" />
            <label style={styles.label}>Category</label>
            <select style={styles.input} value={newPart.category} onChange={e => setNewPart(p => ({ ...p, category: e.target.value }))}>
              {CATEGORIES.slice(1).map(c => <option key={c}>{c}</option>)}
            </select>
            <label style={styles.label}>Quantity</label>
            <input style={styles.input} type="number" min={1} value={newPart.qty} onChange={e => setNewPart(p => ({ ...p, qty: parseInt(e.target.value) || 1 }))} />
            <div style={styles.modalActions}>
              <button style={styles.secondaryBtn} onClick={() => setAddPartModal(false)}>CANCEL</button>
              <button style={styles.primaryBtn} onClick={addPart}>ADD PART</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RequestModal({ part, onClose, onSubmit, currentUser, members }) {
  const [qty, setQty] = useState(1);
  const [purpose, setPurpose] = useState("");
  const [aiSuggesting, setAiSuggesting] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState("");

  const suggestPurpose = async () => {
    setAiSuggesting(true);
    const prompt = `A robotics club member named ${currentUser.name} (${currentUser.role}) wants to borrow a ${part.name} (category: ${part.category}). Write a concise 1-sentence borrow request purpose (under 15 words). Plain text only.`;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 100,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "";
      setAiSuggestion(text);
      setPurpose(text);
    } catch { }
    setAiSuggesting(false);
  };

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <div style={styles.modalTitle}>REQUEST PART</div>
        <div style={styles.requestPartInfo}>
          <div style={styles.requestPartName}>{part.name}</div>
          <div style={styles.requestPartMeta}>{part.category} — {part.available} available</div>
        </div>
        <label style={styles.label}>Quantity</label>
        <input style={styles.input} type="number" min={1} max={part.available} value={qty}
          onChange={e => setQty(Math.min(part.available, Math.max(1, parseInt(e.target.value) || 1)))} />
        <label style={styles.label}>Purpose</label>
        <textarea style={{ ...styles.input, height: 80, resize: "none" }}
          placeholder="Describe why you need this part..."
          value={purpose}
          onChange={e => setPurpose(e.target.value)} />
        <button style={styles.aiSuggestBtn} onClick={suggestPurpose} disabled={aiSuggesting}>
          {aiSuggesting ? "GENERATING..." : "AI: SUGGEST PURPOSE"}
        </button>
        {aiSuggestion && <div style={styles.aiSuggestionNote}>AI suggested the above text. Edit as needed.</div>}
        <div style={styles.modalActions}>
          <button style={styles.secondaryBtn} onClick={onClose}>CANCEL</button>
          <button style={styles.primaryBtn} disabled={!purpose.trim()} onClick={() => onSubmit(part.id, qty, purpose)}>SUBMIT REQUEST</button>
        </div>
      </div>
    </div>
  );
}

function getStatusStyle(status) {
  if (status === "approved") return { background: "#fff", color: "#000" };
  if (status === "denied") return { background: "#222", color: "#666" };
  return { background: "#111", color: "#aaa", border: "1px solid #333" };
}

// --- Styles ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #000; }
  ::-webkit-scrollbar-thumb { background: #333; }
  .table-row { animation: rowIn 0.2s ease both; }
  @keyframes rowIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: none; } }
  .table-row:hover td { background: #0d0d0d !important; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
  @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
  @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
`;

const styles = {
  root: { background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "'IBM Plex Mono', monospace", fontSize: 13 },
  notification: { position: "fixed", top: 20, right: 20, padding: "12px 20px", color: "#fff", fontSize: 12, letterSpacing: "0.08em", zIndex: 9999, animation: "fadeIn 0.2s ease" },
  header: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", height: 64, borderBottom: "1px solid #1a1a1a", position: "sticky", top: 0, background: "#000", zIndex: 100 },
  headerLeft: { display: "flex", alignItems: "center" },
  logo: { display: "flex", alignItems: "center", gap: 12 },
  logoMark: { width: 36, height: 36, background: "#fff", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 18, flexShrink: 0 },
  logoTitle: { fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", lineHeight: 1 },
  logoSub: { fontSize: 9, color: "#555", letterSpacing: "0.15em", marginTop: 2 },
  nav: { display: "flex", gap: 4 },
  navBtn: { background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.1em", padding: "6px 16px", transition: "color 0.15s" },
  navBtnActive: { color: "#fff", background: "#111" },
  headerRight: { display: "flex", alignItems: "center", gap: 16 },
  aiBtn: { background: "none", border: "1px solid #333", color: "#888", cursor: "pointer", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.1em", padding: "6px 14px", transition: "all 0.15s" },
  userBadge: { display: "flex", alignItems: "center", gap: 8 },
  userDot: { width: 6, height: 6, background: "#fff", borderRadius: "50%" },
  userName: { fontSize: 11, fontWeight: 600, lineHeight: 1.2 },
  userRole: { fontSize: 9, color: "#555", letterSpacing: "0.05em" },
  layout: { display: "flex", height: "calc(100vh - 64px)" },
  main: { flex: 1, padding: "32px 40px", overflowY: "auto" },
  fadeIn: { animation: "fadeIn 0.25s ease" },
  pageHeader: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 },
  pageTitle: { fontSize: 22, fontWeight: 700, letterSpacing: "0.1em", lineHeight: 1 },
  pageSub: { fontSize: 11, color: "#444", marginTop: 6, letterSpacing: "0.05em" },
  filterRow: { display: "flex", gap: 16, alignItems: "center", marginBottom: 20, flexWrap: "wrap" },
  searchInput: { background: "#0d0d0d", border: "1px solid #222", color: "#fff", padding: "8px 14px", fontSize: 12, fontFamily: "'IBM Plex Mono', monospace", width: 240, outline: "none" },
  catFilters: { display: "flex", gap: 4, flexWrap: "wrap" },
  catBtn: { background: "none", border: "1px solid #222", color: "#555", cursor: "pointer", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", padding: "5px 12px", letterSpacing: "0.08em", transition: "all 0.15s" },
  catBtnActive: { background: "#fff", color: "#000", border: "1px solid #fff" },
  tableWrap: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse" },
  tableHead: { borderBottom: "1px solid #1a1a1a" },
  th: { padding: "10px 16px", textAlign: "left", fontSize: 10, color: "#444", letterSpacing: "0.15em", fontWeight: 600 },
  tr: { borderBottom: "1px solid #0d0d0d", transition: "background 0.1s" },
  td: { padding: "14px 16px", verticalAlign: "middle" },
  partName: { fontSize: 13, fontWeight: 500 },
  catTag: { fontSize: 10, color: "#666", background: "#0d0d0d", padding: "3px 8px", letterSpacing: "0.08em" },
  memberName: { fontSize: 12, color: "#888" },
  availCount: { fontSize: 15, fontWeight: 700 },
  statusDot: { width: 8, height: 8, borderRadius: "50%" },
  requestBtn: { background: "none", border: "1px solid #333", color: "#888", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", padding: "5px 12px", letterSpacing: "0.08em", transition: "all 0.15s" },
  primaryBtn: { background: "#fff", color: "#000", border: "none", cursor: "pointer", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", padding: "10px 20px", letterSpacing: "0.1em", fontWeight: 700 },
  secondaryBtn: { background: "none", color: "#666", border: "1px solid #333", cursor: "pointer", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", padding: "10px 20px", letterSpacing: "0.1em" },
  reqGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 },
  reqColumn: { display: "flex", flexDirection: "column", gap: 12 },
  reqColHeader: { fontSize: 11, letterSpacing: "0.2em", color: "#555", borderBottom: "1px solid #1a1a1a", paddingBottom: 10, marginBottom: 4, display: "flex", alignItems: "center", gap: 8 },
  badge: { background: "#fff", color: "#000", fontSize: 10, fontWeight: 700, padding: "1px 6px" },
  reqCard: { background: "#0a0a0a", border: "1px solid #1a1a1a", padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8 },
  reqCardTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
  reqPartName: { fontWeight: 600, fontSize: 13 },
  statusPill: { fontSize: 9, padding: "3px 8px", letterSpacing: "0.1em" },
  reqMeta: { fontSize: 11, color: "#555" },
  reqPurpose: { fontSize: 11, color: "#888", fontStyle: "italic" },
  reqDate: { fontSize: 10, color: "#333" },
  reqActions: { display: "flex", gap: 8, marginTop: 4 },
  approveBtn: { background: "#fff", color: "#000", border: "none", cursor: "pointer", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", padding: "6px 14px", letterSpacing: "0.08em", fontWeight: 700 },
  denyBtn: { background: "none", color: "#555", border: "1px solid #222", cursor: "pointer", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", padding: "6px 14px", letterSpacing: "0.08em" },
  empty: { color: "#333", fontSize: 12, padding: "20px 0" },
  memberGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 },
  memberCard: { background: "#0a0a0a", border: "1px solid #1a1a1a", padding: 20, display: "flex", flexDirection: "column", gap: 14 },
  memberCardSelf: { border: "1px solid #333" },
  memberAvatar: { width: 40, height: 40, background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, letterSpacing: "0.05em" },
  memberInfo: {},
  memberCardName: { fontWeight: 600, fontSize: 13, display: "flex", alignItems: "center", gap: 8 },
  youTag: { fontSize: 9, background: "#fff", color: "#000", padding: "1px 5px", fontWeight: 700 },
  memberCardRole: { fontSize: 11, color: "#555", marginTop: 3, letterSpacing: "0.05em" },
  memberStats: { display: "flex", gap: 20 },
  memberStat: { display: "flex", flexDirection: "column", gap: 2 },
  memberStatNum: { fontSize: 18, fontWeight: 700, lineHeight: 1 },
  memberStatLabel: { fontSize: 9, color: "#444", letterSpacing: "0.1em" },
  memberPartsList: { display: "flex", flexWrap: "wrap", gap: 4 },
  miniPartTag: { fontSize: 9, color: "#555", background: "#111", padding: "2px 7px", letterSpacing: "0.05em" },
  aiSidebar: { width: 320, borderLeft: "1px solid #1a1a1a", display: "flex", flexDirection: "column", background: "#020202" },
  aiHeader: { padding: "16px 20px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "space-between" },
  aiTitle: { fontSize: 11, letterSpacing: "0.2em", color: "#888" },
  aiPulse: { width: 6, height: 6, borderRadius: "50%", background: "#fff", animation: "pulse 2s infinite" },
  aiMessages: { flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 16 },
  aiMsg: { display: "flex", flexDirection: "column", gap: 4 },
  aiMsgUser: { alignItems: "flex-end" },
  aiMsgBot: { alignItems: "flex-start" },
  aiMsgLabel: { fontSize: 9, color: "#333", letterSpacing: "0.1em" },
  aiMsgText: { fontSize: 12, lineHeight: 1.6, color: "#ccc", maxWidth: "90%" },
  aiTyping: { display: "flex", gap: 4, padding: "8px 0" },
  dot1: { width: 5, height: 5, background: "#444", borderRadius: "50%", animation: "bounce 1s 0s infinite" },
  dot2: { width: 5, height: 5, background: "#444", borderRadius: "50%", animation: "bounce 1s 0.15s infinite" },
  dot3: { width: 5, height: 5, background: "#444", borderRadius: "50%", animation: "bounce 1s 0.3s infinite" },
  aiInputRow: { padding: 16, borderTop: "1px solid #1a1a1a", display: "flex", gap: 8 },
  aiInput: { flex: 1, background: "#0d0d0d", border: "1px solid #222", color: "#fff", padding: "8px 12px", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", outline: "none" },
  aiSendBtn: { background: "#fff", color: "#000", border: "none", cursor: "pointer", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", padding: "8px 14px", letterSpacing: "0.08em", fontWeight: 700 },
  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 },
  modal: { background: "#060606", border: "1px solid #222", padding: 32, width: 440, display: "flex", flexDirection: "column", gap: 14 },
  modalTitle: { fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", marginBottom: 4 },
  label: { fontSize: 10, color: "#555", letterSpacing: "0.1em" },
  input: { background: "#0d0d0d", border: "1px solid #1a1a1a", color: "#fff", padding: "10px 14px", fontSize: 12, fontFamily: "'IBM Plex Mono', monospace", outline: "none", width: "100%" },
  modalActions: { display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 8 },
  requestPartInfo: { background: "#0d0d0d", padding: "14px 16px", borderLeft: "2px solid #fff" },
  requestPartName: { fontSize: 14, fontWeight: 600 },
  requestPartMeta: { fontSize: 11, color: "#555", marginTop: 4 },
  aiSuggestBtn: { background: "none", border: "1px solid #333", color: "#666", cursor: "pointer", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", padding: "7px 14px", letterSpacing: "0.08em", alignSelf: "flex-start" },
  aiSuggestionNote: { fontSize: 10, color: "#444", marginTop: -8 },
};
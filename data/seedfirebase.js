// ---------------------------------------------------------------------------
// seedFirebase.js  —  run ONCE to populate your Firebase Realtime Database
// Usage: node seedFirebase.js`
// Requires: npm install firebase
// Replace firebaseConfig below with your actual project values first.
// ---------------------------------------------------------------------------

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAddcLqGKIxXD-NEJbHEoswZpcroBY7T9M",
  authDomain: "partsdb-e1965.firebaseapp.com",
  projectId: "partsdb-e1965",
  storageBucket: "partsdb-e1965.firebasestorage.app",
  messagingSenderId: "56233607292",
  appId: "1:56233607292:web:d3d6ad050841abf67089f9",
  measurementId: "G-0759CYXW1X"
};


const app = initializeApp(firebaseConfig);
const db  = getDatabase(app);

const data = {
  members: {
    member_1: { name: "Aryan Mehta",   role: "Drive Train Lead"   },
    member_2: { name: "Priya Sharma",  role: "Sensors & Vision"   },
    member_3: { name: "Rohan Das",     role: "Mechanical Design"  },
    member_4: { name: "Nisha Kapoor",  role: "Software Lead"      },
    member_5: { name: "Dev Patel",     role: "Electrical"         },
  },
  parts: {
    part_1:  { name: "Arduino Mega 2560",          category: "Microcontroller", qty: 3,  available: 2, ownerId: "member_1" },
    part_2:  { name: "Servo Motor MG996R",          category: "Actuator",        qty: 6,  available: 4, ownerId: "member_2" },
    part_3:  { name: "LiDAR Sensor RPLidar A1",    category: "Sensor",          qty: 2,  available: 1, ownerId: "member_2" },
    part_4:  { name: "DC Motor 12V 200RPM",         category: "Actuator",        qty: 8,  available: 5, ownerId: "member_3" },
    part_5:  { name: "L298N Motor Driver",          category: "Driver",          qty: 4,  available: 3, ownerId: "member_5" },
    part_6:  { name: "Raspberry Pi 4B",             category: "Microcontroller", qty: 2,  available: 1, ownerId: "member_4" },
    part_7:  { name: "Ultrasonic Sensor HC-SR04",   category: "Sensor",          qty: 10, available: 7, ownerId: "member_2" },
    part_8:  { name: "Aluminum Extrusion 2020 (1m)",category: "Structural",      qty: 12, available: 9, ownerId: "member_3" },
    part_9:  { name: "Lipo Battery 11.1V 5000mAh",  category: "Power",           qty: 3,  available: 2, ownerId: "member_5" },
    part_10: { name: "Nema 17 Stepper Motor",       category: "Actuator",        qty: 4,  available: 2, ownerId: "member_1" },
    part_11: { name: "ESP32 Dev Module",            category: "Microcontroller", qty: 5,  available: 4, ownerId: "member_4" },
    part_12: { name: "IMU MPU-6050",                category: "Sensor",          qty: 6,  available: 5, ownerId: "member_2" },
  },
  requests: {
    request_1: { partId: "part_3", requesterId: "member_4", ownerId: "member_2", qty: 1, purpose: "Testing autonomous navigation module", status: "pending",  date: "2026-04-15", timestamp: 1744675200000 },
    request_2: { partId: "part_6", requesterId: "member_1", ownerId: "member_4", qty: 1, purpose: "Drive system brain upgrade",           status: "approved", date: "2026-04-14", timestamp: 1744588800000 },
    request_3: { partId: "part_9", requesterId: "member_3", ownerId: "member_5", qty: 1, purpose: "Chassis power testing",                status: "pending",  date: "2026-04-16", timestamp: 1744761600000 },
  },
};

await set(ref(db, "/"), data);
console.log("Database seeded successfully.");
process.exit(0);
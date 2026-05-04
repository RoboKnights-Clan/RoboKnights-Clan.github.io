$filePath = "C:\Users\gogof\Documents\GitHub\RoboKnights-Clan.github.io\data\achievements.ts"
$content = Get-Content $filePath -Raw

# Handle multiline entries where prize is before closing brace/bracket
# This regex finds prize followed by optional whitespace/newline then closing brace
$content = $content -replace '(prize:\s*"[^"]*")(\s*\n\s*)(}[,]?)', '$1,`n    members: []`n$3'

# Handle single-line entries where prize is before closing brace
$content = $content -replace '(prize:\s*"[^"]*")\s+(})', '$1,`n  members: []`n$2'

# Handle entries where prize and year are on same line
$content = $content -replace '(year:\s*"[0-9]*",\s+prize:\s*"[^"]*")(\s*\n\s*})', '$1,`n    members: []$2'

# Handle single-line entries with year and prize on same line
$content = $content -replace '(year:\s*"[0-9]*",\s*prize:\s*"[^"]*")\s+(})', '$1,`n    members: []`n$2'

Set-Content -Path $filePath -Value $content
Write-Output "✅ Successfully added members: [] to all achievements!"

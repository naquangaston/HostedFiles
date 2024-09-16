@echo off
setlocal

:: Define paths
set "desktop=%UserProfile%\Desktop"
set "autoShortsFolder=%desktop%\Auto Shorts"
set "hellowFolder=%autoShortsFolder%\hellow"

:: Create directories
if not exist "%autoShortsFolder%" mkdir "%autoShortsFolder%"
if not exist "%hellowFolder%" mkdir "%hellowFolder%"


REM Define the URL for the Node.js MSI package
set "NODE_MSI_URL=https://nodejs.org/dist/v20.17.0/node-v20.17.0-x64.msi"

REM Define the local filename for the downloaded MSI package
set "NODE_MSI_FILE=node-v20.17.0-x64.msi"

REM Define the installation command
set "INSTALL_CMD=MsiExec.exe /i %NODE_MSI_FILE% /quiet /norestart"

REM Download the MSI package
echo Downloading Node.js MSI package...
powershell -Command "Invoke-WebRequest -Uri %NODE_MSI_URL% -OutFile %NODE_MSI_FILE%"

REM Check if the download was successful
if not exist "%NODE_MSI_FILE%" (
    echo Download failed.
    exit /b 1
)

REM Install Node.js
echo Installing Node.js...
%INSTALL_CMD%

REM Verify the installation
echo Verifying Node.js installation...
node -v
npm -v

REM Clean up
del "%NODE_MSI_FILE%"

echo Node.js installation completed.
pause

:: Initialize npm project
echo Initializing npm project...
npm init -1
cd "%autoShortsFolder%"


:: Install Node.js modules
echo Installing Node.js modules...
npm install readline express cors fs-extra playwright

:: Install Playwright browsers
npx playwright install

:: Download the PowerShell script
echo Downloading the PowerShell script...
curl -o "%autoShortsFolder%\check_and_install.ps1" "https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/check_and_install.ps1"

:: Check and install browsers using PowerShell
echo Checking and installing browsers...
powershell -ExecutionPolicy Bypass -File "%autoShortsFolder%\check_and_install.ps1" -id "Google.Chrome.Dev" -install $true
powershell -ExecutionPolicy Bypass -File "%autoShortsFolder%\check_and_install.ps1" -id "Mozilla.Firefox" -install $true

:: Schedule the self-deletion
echo Scheduling self-deletion...
(
echo @echo off
echo timeout /t 5 /nobreak >nul
echo del "%~f0"
echo del "%autoShortsFolder%\check_and_install.ps1"
) > "%autoShortsFolder%\delete_after.bat"

:: Execute the deletion script
start "" "%autoShortsFolder%\delete_after.bat"

echo All tasks completed successfully!
pause

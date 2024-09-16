@echo off
setlocal

:: Define paths
set "desktop=%UserProfile%\Desktop"
set "autoShortsFolder=%desktop%\Auto Shorts"
set "hellowFolder=%autoShortsFolder%\hellow"

:: Create directories if they do not exist
if not exist "%autoShortsFolder%" mkdir "%autoShortsFolder%"
if not exist "%hellowFolder%" mkdir "%hellowFolder%"

:: Check Node.js installation
echo Checking for Node.js installation...
node -v >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Installing Node.js...
    winget install OpenJS.NodeJS     
    echo Node.js installation completed. Re-running script...
    :: Re-launch the script to ensure Node.js is recognized
    powershell -Command "Start-Process cmd -ArgumentList '/c \"%~f0\"' -NoNewWindow -Wait"
    exit /b
) else (
    echo Node.js is already installed.
)

:: Initialize npm project
echo Initializing npm project...
cd /d "%autoShortsFolder%"
::npm init -y


:: Install Node.js modules
:: Download the PowerShell script and CMD file
echo Downloading the PowerShell script...
curl -o "%autoShortsFolder%\check_and_install.ps1" "https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/check_and_install.ps1"
curl -o "%autoShortsFolder%\Start.cmd" "https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/start.cmd"
curl -o "%autoShortsFolder%\autoShorts.js" "https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/autoShort.js"
echo Installing Node.js modules...
echo test2
npm install readline express cors fs-extra playwright && npx playwright install && start "" "%autoShortsFolder%"

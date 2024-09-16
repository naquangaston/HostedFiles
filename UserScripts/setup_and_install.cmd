@echo off
setlocal

:: Define paths
set "desktop=%UserProfile%\Desktop"
set "autoShortsFolder=%desktop%\Auto Shorts"
set "hellowFolder=%autoShortsFolder%\hellow"

:: Create directories
if not exist "%autoShortsFolder%" mkdir "%autoShortsFolder%"
if not exist "%hellowFolder%" mkdir "%hellowFolder%"

REM installs fnm (Fast Node Manager)
winget install Schniz.fnm

REM configure fnm environment
fnm env --use-on-cd > temp_env.bat
call temp_env.bat
del temp_env.bat

REM download and install Node.js
fnm use --install-if-missing 20

REM verifies the right Node.js version is in the environment
node -v

REM verifies the right npm version is in the environment
npm -v

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

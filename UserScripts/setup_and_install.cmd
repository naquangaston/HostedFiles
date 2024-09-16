@echo off
setlocal

:: Define paths
set "desktop=%UserProfile%\Desktop"
set "autoShortsFolder=%desktop%\Auto Shorts"
set "hellowFolder=%autoShortsFolder%\hellow"

:: Create directories
if not exist "%autoShortsFolder%" mkdir "%autoShortsFolder%"
if not exist "%hellowFolder%" mkdir "%hellowFolder%"

:: Initialize npm project
echo Initializing npm project...
cd "%autoShortsFolder%"
npm init -y
echo NPM project initialized with name 'Auto Shorts'.

:: Install Node.js modules
echo Installing Node.js modules...
npm install readline express cors fs-extra playwright

:: Install Playwright browsers
npx playwright install

:: Check and install browsers using PowerShell
echo Checking and installing browsers...
powershell -ExecutionPolicy Bypass -File "%~dp0check_and_install.ps1" -id "Google.Chrome.Dev" -install $true
powershell -ExecutionPolicy Bypass -File "%~dp0check_and_install.ps1" -id "Mozilla.Firefox" -install $true

echo All tasks completed successfully!
timeout /t 5 /nobreak >nul


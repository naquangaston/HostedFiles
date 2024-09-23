@echo off
setlocal
@echo off
setlocal

:: Check for Python Installation
python --version 3>NUL
if errorlevel 1 goto errorNoPython

:: Reaching here means Python is installed.
echo Python is already installed. Version: 
python --version
:: Execute additional stuff here...
echo Executing additional tasks...
:: Add your additional commands here

:: Once done, exit the batch file -- skips executing the errorNoPython section
goto:eof

:errorNoPython
echo.
echo Error: Python not installed. Installing now...

:: Check if winget is available
winget --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo winget is not available. Proceeding with manual installation.

    :: Download Python Installer
    echo Downloading Python installer...
    curl -o python-installer.exe https://www.python.org/ftp/python/3.11.5/python-3.11.5-amd64.exe

    :: Install Python
    echo Installing Python...
    start /wait python-installer.exe /quiet InstallAllUsers=1 PrependPath=1

    echo Python installation completed.
) else (
    echo winget is available. Installing Python using winget...
    winget install Python.Python

    echo Python installation completed using winget.
)

:: Restart the script to check for Python again
echo Restarting the script...
start /wait cmd /c "%~f0"
exit /b

:eof
endlocal

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
curl -o "%autoShortsFolder%\uploadShorts.py" "https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/uploadShorts.py"
powershell -ExecutionPolicy Bypass -File "%autoShortsFolder%\check_and_install.ps1" -id "Google.Chrome.Dev" -install $true
powershell -ExecutionPolicy Bypass -File "%autoShortsFolder%\check_and_install.ps1" -id "Mozilla.Firefox" -install $true

echo Installing Node.js modules...
echo test2
pip install pyperclip pygetwindow pyautogui
start "" "%autoShortsFolder%"
npm install readline express cors fs-extra playwright && npx playwright install

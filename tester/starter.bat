echo off
RMDIR /S /Q ok
git clone https://github.com/naquangaston/VRChatB ok
notepad ok/README.md
:A
    cls
    echo.
    echo Question?...
    echo.
    set /p menu="Are you able to get admin perms? (Y/N): "
    if %menu%==Y goto Yes
    if %menu%==y goto Yes
    if %menu%==N goto No
    if %menu%==n goto No
    cls
    echo.
    echo Mmm try again...
    echo.
    set /p pause="Press any key to continue!... "
    goto A

:No
echo This may take a few minutes
start ok/webv.html
pause
RMDIR /S /Q ok
start /b "" cmd /c del "%~f0"&exit /b
exit

:Yes
node -v
IF %ERRORLEVEL% NEQ 0 goto install
IF %ERRORLEVEL% EQU 0 goto run

:run
echo installing requirments
npm i fs -g > nul
echo "Install done"
echo Generating file
ok\node index
Run_me.cmd
pause
RMDIR /S /Q ok
exit
:install
title downloading node-v16.13.0-x64.msi
powershell -Command "Invoke-webRequest https://nodejs.org/dist/v16.13.0/node-v16.13.0-x64.msi -Outfile node.msi
echo downloading node-v16.13.0-x64.msi
echo
node.msi
pause
goto run
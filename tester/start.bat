git clone https://github.com/naquangaston/modpckinstaller mods
cd mods
notepad README.md
:A
    cls
    echo.
    echo Question?...
    echo.
    set /p menu="Do you want to restart your game? (Y/N): "
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

No:
echo Save and run the file that is downloaded
mods/webv.html
pause
exit
Yes:
node -v
IF %ERRORLEVEL% NEQ 0 goto install
IF %ERRORLEVEL% EQU 0 goto run

run:
npm i dns -g
npm i http -g
npm i got -g
npm i fs -g
npm i url-exists -g
npm i path -g
npm i perf_hooks -g
npm i https -g
echo "Install done"
node index
pause

install:
title downloading node-v16.13.0-x64.msi
powershell -Command "Invoke-webRequest https://nodejs.org/dist/v16.13.0/node-v16.13.0-x64.msi -Outfile node.msi
echo downloading node-v16.13.0-x64.msi
echo
node.msi
pause
goto run
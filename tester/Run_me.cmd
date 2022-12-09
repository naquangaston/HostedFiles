
    @echo off
    echo "Welcome,"
    set /p id=Enter the dir vrchat is installed on : 
    echo %id%
    cd /d %id%
    mkdir mods
    powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/245/PrivateInstanceIcon.dll' -OutFile 'mods/PrivateInstanceIcon.dll'" & echo downloaded PrivateInstanceIcon.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/173/BetterSteadycam.dll' -OutFile 'mods/BetterSteadycam.dll'" & echo downloaded BetterSteadycam.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/83/RememberMe.dll' -OutFile 'mods/RememberMe.dll'" & echo downloaded RememberMe.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/216/BetterDirections.dll' -OutFile 'mods/BetterDirections.dll'" & echo downloaded BetterDirections.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/192/ActiveBackground.dll' -OutFile 'mods/ActiveBackground.dll'" & echo downloaded ActiveBackground.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/115/ToggleMicIcon.dll' -OutFile 'mods/ToggleMicIcon.dll'" & echo downloaded ToggleMicIcon.dll

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
    
    :Yes
    cls
    taskkill /F /IM "vrchat.exe" /T
    title stopping vrchat.exe
    killall VRChat.exe
    echo.
    echo Okay, Starting game...
    echo.
    pause
    set /p menu="Do want to start your game in vr mode? (Y/N): "
    if %menu%==Y goto Yess
    if %menu%==y goto Yess
    if %menu%==N goto Nos
    if %menu%==n goto Nos
    :No
    cls
    echo.
    echo Okay, let's exit...
    echo.
    pause
    start /b "" cmd /c del "%~f0"&exit /b
    :Yess
    taskkill /F /IM "vrchat.exe" /T
    title stopping vrchat.exe
    killall VRChat.exe
    echo.
    echo Okay, Starting game...
    echo.
    
    start vrchat://launch --no-vr
    start vrchat://launch
    start /b "" cmd /c del "%~f0"&exit /b
    :Nos
    taskkill /F /IM "vrchat.exe" /T
    title stopping vrchat.exe
    killall VRChat.exe
    echo.
    echo Okay, Starting game...
    echo.
    
    start vrchat://launch --no-vr
    start vrchat://launch --no-vr
    start /b "" cmd /c del "%~f0"&exit /b
    
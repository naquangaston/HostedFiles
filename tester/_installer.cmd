
@echo off
title Searching for game files
:startp
set gamePath=c:\
set gameFound=0

FOR %%G IN (c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) DO (
    echo checking %%G: drive
    if EXIST %%G: if not gameFound==1 (
        cd /d "%%G:\"
        FOR /F "tokens=* USEBACKQ" %%F IN (`dir VRChat /s /b /A:D /A:-H /A:-A /A:-S`) DO (
            cls
            echo Drive:%%G
            echo ...
            echo File:%%F
            echo ...
            SET str=%%F
            echo %%F|find "steamapps" >nul
            echo %%F|find "VRChat" >nul
            echo %%F|find "common" >nul
            if not errorlevel 1 (
                echo is game :true
                @echo on
                set gameFound=1
                set gamePath="%%F"
                echo found game
                @echo off
                goto foundG
            ) ELSE (
                echo is game :false
            )
        )
        if not gameFound==0 ECHO game not found on drive:$$G
    ) ELSE (
        if not gameFound==1 (echo drive %%G not found) 
    )
)
if not gameFound==1 (
    set /p id="Cant find game path please enter the gamepath to vrchat remove quotes"
    goto conT
)
:foundG
if not gameFound==0 (
    echo Game found at %gamePath%
    goto conT
)
:conT
cls
echo "Welcome,"
set id=%gamePath%
cd /d %id%
mkdir mods
if exist "mods/IKTweaks.dll" (
        echo IKTweaks.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/155/IKTweaks.dll' -OutFile 'mods/IKTweaks.dll'" & echo downloaded IKTweaks.dll
    )

if exist "mods/DragFix.dll" (
        echo DragFix.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/292/DragFix.dll' -OutFile 'mods/DragFix.dll'" & echo downloaded DragFix.dll
    )

if exist "mods/CameraAnimation.dll" (
        echo CameraAnimation.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/256/CameraAnimation.dll' -OutFile 'mods/CameraAnimation.dll'" & echo downloaded CameraAnimation.dll
    )

if exist "mods/UserHistory.dll" (
        echo UserHistory.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/236/UserHistory.dll' -OutFile 'mods/UserHistory.dll'" & echo downloaded UserHistory.dll
    )

if exist "mods/VRCX-Companion.dll" (
        echo VRCX-Companion.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/293/VRCX-Companion.dll' -OutFile 'mods/VRCX-Companion.dll'" & echo downloaded VRCX-Companion.dll
    )

if exist "mods/MltnWorldTweaks.dll" (
        echo MltnWorldTweaks.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/296/MltnWorldTweaks.dll' -OutFile 'mods/MltnWorldTweaks.dll'" & echo downloaded MltnWorldTweaks.dll
    )

if exist "mods/BetterLocomotion.dll" (
        echo BetterLocomotion.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/295/BetterLocomotion.dll' -OutFile 'mods/BetterLocomotion.dll'" & echo downloaded BetterLocomotion.dll
    )

if exist "mods/Mic_Hider.dll" (
        echo Mic_Hider.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/291/Mic_Hider.dll' -OutFile 'mods/Mic_Hider.dll'" & echo downloaded Mic_Hider.dll
    )

if exist "mods/CrawlSpeedToggle.dll" (
        echo CrawlSpeedToggle.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/294/CrawlSpeedToggle.dll' -OutFile 'mods/CrawlSpeedToggle.dll'" & echo downloaded CrawlSpeedToggle.dll
    )

if exist "mods/NetworkSanity.dll" (
        echo NetworkSanity.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/255/NetworkSanity.dll' -OutFile 'mods/NetworkSanity.dll'" & echo downloaded NetworkSanity.dll
    )

if exist "mods/BetterSteadycam.dll" (
        echo BetterSteadycam.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/173/BetterSteadycam.dll' -OutFile 'mods/BetterSteadycam.dll'" & echo downloaded BetterSteadycam.dll
    )

if exist "mods/VRCFaceTracking.dll" (
        echo VRCFaceTracking.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://github.com/benaclejames/VRCFaceTracking/releases/download/v2.5.1/VRCFaceTracking.dll' -OutFile 'mods/VRCFaceTracking.dll'" & echo downloaded VRCFaceTracking.dll
    )

if exist "mods/CameraAnimation.dll" (
        echo CameraAnimation.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/256/CameraAnimation.dll' -OutFile 'mods/CameraAnimation.dll'" & echo downloaded CameraAnimation.dll
    )

if exist "mods/ml_alg.dll" (
        echo ml_alg.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/247/ml_alg.dll' -OutFile 'mods/ml_alg.dll'" & echo downloaded ml_alg.dll
    )

if exist "mods/emmVRCLoader.dll" (
        echo emmVRCLoader.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://dl.emmvrc.com/downloads/emmVRCLoader.dll' -OutFile 'mods/emmVRCLoader.dll'" & echo downloaded emmVRCLoader.dll
    )

if exist "mods/AskToPortal.dll" (
        echo AskToPortal.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/152/AskToPortal.dll' -OutFile 'mods/AskToPortal.dll'" & echo downloaded AskToPortal.dll
    )

if exist "mods/UserInfoExtensions.dll" (
        echo UserInfoExtensions.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/145/UserInfoExtensions.dll' -OutFile 'mods/UserInfoExtensions.dll'" & echo downloaded UserInfoExtensions.dll
    )

if exist "mods/ReModCE.Loader.dll" (
        echo ReModCE.Loader.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://cdn.discordapp.com/attachments/898965007247765604/899010243646865439/ReModCE.Loader.dll' -OutFile 'mods/ReModCE.Loader.dll'" & echo downloaded ReModCE.Loader.dll
    )

if exist "mods/MuteTTS.dll" (
        echo MuteTTS.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/264/MuteTTS.dll' -OutFile 'mods/MuteTTS.dll'" & echo downloaded MuteTTS.dll
    )

if exist "mods/VRChatUtilityKit.dll" (
        echo VRChatUtilityKit.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/231/VRChatUtilityKit.dll' -OutFile 'mods/VRChatUtilityKit.dll'" & echo downloaded VRChatUtilityKit.dll
    )

if exist "mods/AdvancedSafety.dll" (
        echo AdvancedSafety.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/89/AdvancedSafety.dll' -OutFile 'mods/AdvancedSafety.dll'" & echo downloaded AdvancedSafety.dll
    )

if exist "mods/RPCSanity.dll" (
        echo RPCSanity.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/255/RPCSanity.dll' -OutFile 'mods/RPCSanity.dll'" & echo downloaded RPCSanity.dll
    )

if exist "mods/ml_clv.dll" (
        echo ml_clv.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/214/ml_clv.dll' -OutFile 'mods/ml_clv.dll'" & echo downloaded ml_clv.dll
    )

if exist "mods/ViewPointTweaker.dll" (
        echo ViewPointTweaker.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/157/ViewPointTweaker.dll' -OutFile 'mods/ViewPointTweaker.dll'" & echo downloaded ViewPointTweaker.dll
    )

if exist "mods/CameraMinus.dll" (
        echo CameraMinus.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/82/CameraMinus.dll' -OutFile 'mods/CameraMinus.dll'" & echo downloaded CameraMinus.dll
    )

if exist "mods/JoinNotifier.dll" (
        echo JoinNotifier.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/52/JoinNotifier.dll' -OutFile 'mods/JoinNotifier.dll'" & echo downloaded JoinNotifier.dll
    )

if exist "mods/ImmersiveTouch.dll" (
        echo ImmersiveTouch.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/183/ImmersiveTouch.dll' -OutFile 'mods/ImmersiveTouch.dll'" & echo downloaded ImmersiveTouch.dll
    )

if exist "mods/UpdateChecker.dll" (
        echo UpdateChecker.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/249/UpdateChecker.dll' -OutFile 'mods/UpdateChecker.dll'" & echo downloaded UpdateChecker.dll
    )

if exist "mods/PlayerRotater.dll" (
        echo PlayerRotater.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/121/PlayerRotater.dll' -OutFile 'mods/PlayerRotater.dll'" & echo downloaded PlayerRotater.dll
    )

if exist "mods/UIExpansionKit.dll" (
        echo UIExpansionKit.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/55/UIExpansionKit.dll' -OutFile 'mods/UIExpansionKit.dll'" & echo downloaded UIExpansionKit.dll
    )

if exist "mods/TrueShaderAntiCrash.dll" (
        echo TrueShaderAntiCrash.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/171/TrueShaderAntiCrash.dll' -OutFile 'mods/TrueShaderAntiCrash.dll'" & echo downloaded TrueShaderAntiCrash.dll
    )

if exist "mods/ScreenshotManager.dll" (
        echo ScreenshotManager.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/239/ScreenshotManager.dll' -OutFile 'mods/ScreenshotManager.dll'" & echo downloaded ScreenshotManager.dll
    )

if exist "mods/MultiplayerDynamicBonesMod.dll" (
        echo MultiplayerDynamicBonesMod.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://github.com/9E4ECDDE/MultiplayerDynamicBonesMod/releases/download/1043.2/MultiplayerDynamicBonesMod.dll' -OutFile 'mods/MultiplayerDynamicBonesMod.dll'" & echo downloaded MultiplayerDynamicBonesMod.dll
    )

if exist "mods/DoubleTapRunner.dll" (
        echo DoubleTapRunner.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/112/DoubleTapRunner.dll' -OutFile 'mods/DoubleTapRunner.dll'" & echo downloaded DoubleTapRunner.dll
    )

if exist "mods/BTKSAGestureMod.dll" (
        echo BTKSAGestureMod.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/102/BTKSAGestureMod.dll' -OutFile 'mods/BTKSAGestureMod.dll'" & echo downloaded BTKSAGestureMod.dll
    )

if exist "mods/NoOutlines.dll" (
        echo NoOutlines.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/221/NoOutlines.dll' -OutFile 'mods/NoOutlines.dll'" & echo downloaded NoOutlines.dll
    )

if exist "mods/PanicButtonRework.dll" (
        echo PanicButtonRework.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/218/PanicButtonRework.dll' -OutFile 'mods/PanicButtonRework.dll'" & echo downloaded PanicButtonRework.dll
    )

if exist "mods/BetterSteadycam.dll" (
        echo BetterSteadycam.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/173/BetterSteadycam.dll' -OutFile 'mods/BetterSteadycam.dll'" & echo downloaded BetterSteadycam.dll
    )

if exist "mods/OGTrustRanks.dll" (
        echo OGTrustRanks.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/106/OGTrustRanks.dll' -OutFile 'mods/OGTrustRanks.dll'" & echo downloaded OGTrustRanks.dll
    )

if exist "mods/DesktopCamera.dll" (
        echo DesktopCamera.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/42/DesktopCamera.dll' -OutFile 'mods/DesktopCamera.dll'" & echo downloaded DesktopCamera.dll
    )

if exist "mods/CloningBeGone.dll" (
        echo CloningBeGone.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/148/CloningBeGone.dll' -OutFile 'mods/CloningBeGone.dll'" & echo downloaded CloningBeGone.dll
    )

if exist "mods/RuntimeGraphicsSettings.dll" (
        echo RuntimeGraphicsSettings.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/65/RuntimeGraphicsSettings.dll' -OutFile 'mods/RuntimeGraphicsSettings.dll'" & echo downloaded RuntimeGraphicsSettings.dll
    )

if exist "mods/HWIDPatch.dll" (
        echo HWIDPatch.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/62/HWIDPatch.dll' -OutFile 'mods/HWIDPatch.dll'" & echo downloaded HWIDPatch.dll
    )

if exist "mods/BTKSASelfPortrait.dll" (
        echo BTKSASelfPortrait.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/119/BTKSASelfPortrait.dll' -OutFile 'mods/BTKSASelfPortrait.dll'" & echo downloaded BTKSASelfPortrait.dll
    )

if exist "mods/FinalIKSanity.dll" (
        echo FinalIKSanity.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/133/FinalIKSanity.dll' -OutFile 'mods/FinalIKSanity.dll'" & echo downloaded FinalIKSanity.dll
    )

if exist "mods/MirrorResolutionUnlimiter.dll" (
        echo MirrorResolutionUnlimiter.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/56/MirrorResolutionUnlimiter.dll' -OutFile 'mods/MirrorResolutionUnlimiter.dll'" & echo downloaded MirrorResolutionUnlimiter.dll
    )

if exist "mods/SettingsRestart.dll" (
        echo SettingsRestart.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/210/SettingsRestart.dll' -OutFile 'mods/SettingsRestart.dll'" & echo downloaded SettingsRestart.dll
    )

if exist "mods/PostProcessing.dll" (
        echo PostProcessing.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/114/PostProcessing.dll' -OutFile 'mods/PostProcessing.dll'" & echo downloaded PostProcessing.dll
    )

if exist "mods/ToggleMicIcon.dll" (
        echo ToggleMicIcon.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/115/ToggleMicIcon.dll' -OutFile 'mods/ToggleMicIcon.dll'" & echo downloaded ToggleMicIcon.dll
    )

if exist "mods/UniversalGamePriorityMod.dll" (
        echo UniversalGamePriorityMod.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/77/UniversalGamePriorityMod.dll' -OutFile 'mods/UniversalGamePriorityMod.dll'" & echo downloaded UniversalGamePriorityMod.dll
    )

if exist "mods/TeleportCameraToYou.dll" (
        echo TeleportCameraToYou.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/211/TeleportCameraToYou.dll' -OutFile 'mods/TeleportCameraToYou.dll'" & echo downloaded TeleportCameraToYou.dll
    )

if exist "mods/VRCQR.dll" (
        echo VRCQR.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/272/VRCQR.dll' -OutFile 'mods/VRCQR.dll'" & echo downloaded VRCQR.dll
    )

if exist "mods/LocalHeadLightMod.dll" (
        echo LocalHeadLightMod.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/278/LocalHeadLightMod.dll' -OutFile 'mods/LocalHeadLightMod.dll'" & echo downloaded LocalHeadLightMod.dll
    )

if exist "mods/CameraFlashMod.dll" (
        echo CameraFlashMod.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/281/CameraFlashMod.dll' -OutFile 'mods/CameraFlashMod.dll'" & echo downloaded CameraFlashMod.dll
    )

if exist "mods/VRChatUtilityKit.dll" (
        echo VRChatUtilityKit.dll alreasy exist
    ) else (
        powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/231/VRChatUtilityKit.dll' -OutFile 'mods/VRChatUtilityKit.dll'" & echo downloaded VRChatUtilityKit.dll
    )


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
start /b "" cmd /c del "%~f0"&exit /b
:Yess
taskkill /F /IM "vrchat.exe" /T
title stopping vrchat.exe
killall VRChat.exe
echo.
echo Okay, Starting game...
echo.
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
start /b "" cmd /c del "%~f0"&exit /b

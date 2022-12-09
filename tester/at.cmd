
    @echo off
    cd /d %userprofile%
npm i dns -g
npm i http -g
npm i got -g
npm i fs -g
npm i url-exists -g
npm i path -g
npm i perf_hooks -g
npm i https -g
echo "Install done"
pause
    set /p id=Enter the dir vrchat is installed on : 
    echo %id%
    cd /d %id%
    mkdir mods
    powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/256/CameraAnimation.dll' -OutFile 'mods/CameraAnimation.dll'" & echo downloaded CameraAnimation.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/247/ml_alg.dll' -OutFile 'mods/ml_alg.dll'" & echo downloaded ml_alg.dll
powershell -c "Invoke-WebRequest -Uri 'https://dl.emmvrc.com/downloads/emmVRCLoader.dll' -OutFile 'mods/emmVRCLoader.dll'" & echo downloaded emmVRCLoader.dll
powershell -c "Invoke-WebRequest -Uri 'https://cdn.discordapp.com/attachments/898965007247765604/899010243646865439/ReModCE.Loader.dll' -OutFile 'mods/ReModCE.Loader.dll'" & echo downloaded ReModCE.Loader.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/264/MuteTTS.dll' -OutFile 'mods/MuteTTS.dll'" & echo downloaded MuteTTS.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/231/VRChatUtilityKit.dll' -OutFile 'mods/VRChatUtilityKit.dll'" & echo downloaded VRChatUtilityKit.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/89/AdvancedSafety.dll' -OutFile 'mods/AdvancedSafety.dll'" & echo downloaded AdvancedSafety.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/255/RPCSanity.dll' -OutFile 'mods/RPCSanity.dll'" & echo downloaded RPCSanity.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/214/ml_clv.dll' -OutFile 'mods/ml_clv.dll'" & echo downloaded ml_clv.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/157/ViewPointTweaker.dll' -OutFile 'mods/ViewPointTweaker.dll'" & echo downloaded ViewPointTweaker.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/82/CameraMinus.dll' -OutFile 'mods/CameraMinus.dll'" & echo downloaded CameraMinus.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/52/JoinNotifier.dll' -OutFile 'mods/JoinNotifier.dll'" & echo downloaded JoinNotifier.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/183/ImmersiveTouch.dll' -OutFile 'mods/ImmersiveTouch.dll'" & echo downloaded ImmersiveTouch.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/249/UpdateChecker.dll' -OutFile 'mods/UpdateChecker.dll'" & echo downloaded UpdateChecker.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/121/PlayerRotater.dll' -OutFile 'mods/PlayerRotater.dll'" & echo downloaded PlayerRotater.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/55/UIExpansionKit.dll' -OutFile 'mods/UIExpansionKit.dll'" & echo downloaded UIExpansionKit.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/171/TrueShaderAntiCrash.dll' -OutFile 'mods/TrueShaderAntiCrash.dll'" & echo downloaded TrueShaderAntiCrash.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/165/MultiplayerDynamicBonesMod.dll' -OutFile 'mods/MultiplayerDynamicBonesMod.dll'" & echo downloaded MultiplayerDynamicBonesMod.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/245/PrivateInstanceIcon.dll' -OutFile 'mods/PrivateInstanceIcon.dll'" & echo downloaded PrivateInstanceIcon.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/239/ScreenshotManager.dll' -OutFile 'mods/ScreenshotManager.dll'" & echo downloaded ScreenshotManager.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/122/VRCFaceTracking.dll' -OutFile 'mods/VRCFaceTracking.dll'" & echo downloaded VRCFaceTracking.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/243/NotOptifine.dll' -OutFile 'mods/NotOptifine.dll'" & echo downloaded NotOptifine.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/226/Turbones.dll' -OutFile 'mods/Turbones.dll'" & echo downloaded Turbones.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/202/VRCBonesController.dll' -OutFile 'mods/VRCBonesController.dll'" & echo downloaded VRCBonesController.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/112/DoubleTapRunner.dll' -OutFile 'mods/DoubleTapRunner.dll'" & echo downloaded DoubleTapRunner.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/213/BetterPortalPlacement.dll' -OutFile 'mods/BetterPortalPlacement.dll'" & echo downloaded BetterPortalPlacement.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/102/BTKSAGestureMod.dll' -OutFile 'mods/BTKSAGestureMod.dll'" & echo downloaded BTKSAGestureMod.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/129/DynamicBonesSafety.dll' -OutFile 'mods/DynamicBonesSafety.dll'" & echo downloaded DynamicBonesSafety.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/221/NoOutlines.dll' -OutFile 'mods/NoOutlines.dll'" & echo downloaded NoOutlines.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/218/PanicButtonRework.dll' -OutFile 'mods/PanicButtonRework.dll'" & echo downloaded PanicButtonRework.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/173/BetterSteadycam.dll' -OutFile 'mods/BetterSteadycam.dll'" & echo downloaded BetterSteadycam.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/106/OGTrustRanks.dll' -OutFile 'mods/OGTrustRanks.dll'" & echo downloaded OGTrustRanks.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/42/DesktopCamera.dll' -OutFile 'mods/DesktopCamera.dll'" & echo downloaded DesktopCamera.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/148/CloningBeGone.dll' -OutFile 'mods/CloningBeGone.dll'" & echo downloaded CloningBeGone.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/65/RuntimeGraphicsSettings.dll' -OutFile 'mods/RuntimeGraphicsSettings.dll'" & echo downloaded RuntimeGraphicsSettings.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/62/HWIDPatch.dll' -OutFile 'mods/HWIDPatch.dll'" & echo downloaded HWIDPatch.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/119/BTKSASelfPortrait.dll' -OutFile 'mods/BTKSASelfPortrait.dll'" & echo downloaded BTKSASelfPortrait.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/133/FinalIKSanity.dll' -OutFile 'mods/FinalIKSanity.dll'" & echo downloaded FinalIKSanity.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/56/MirrorResolutionUnlimiter.dll' -OutFile 'mods/MirrorResolutionUnlimiter.dll'" & echo downloaded MirrorResolutionUnlimiter.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/83/RememberMe.dll' -OutFile 'mods/RememberMe.dll'" & echo downloaded RememberMe.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/216/BetterDirections.dll' -OutFile 'mods/BetterDirections.dll'" & echo downloaded BetterDirections.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/139/VRCBhapticsIntegration.dll' -OutFile 'mods/VRCBhapticsIntegration.dll'" & echo downloaded VRCBhapticsIntegration.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/210/SettingsRestart.dll' -OutFile 'mods/SettingsRestart.dll'" & echo downloaded SettingsRestart.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/192/ActiveBackground.dll' -OutFile 'mods/ActiveBackground.dll'" & echo downloaded ActiveBackground.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/114/PostProcessing.dll' -OutFile 'mods/PostProcessing.dll'" & echo downloaded PostProcessing.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/115/ToggleMicIcon.dll' -OutFile 'mods/ToggleMicIcon.dll'" & echo downloaded ToggleMicIcon.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/77/UniversalGamePriorityMod.dll' -OutFile 'mods/UniversalGamePriorityMod.dll'" & echo downloaded UniversalGamePriorityMod.dll
powershell -c "Invoke-WebRequest -Uri 'https://api.vrcmg.com/v0/mods/211/TeleportCameraToYou.dll' -OutFile 'mods/TeleportCameraToYou.dll'" & echo downloaded TeleportCameraToYou.dll

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
    echo.
    echo Okay, Starting game...
    echo.
    set /p pause="Press any key to continue!... "
    start steam://rungameid/438100
    start /b "" cmd /c del "%~f0"&exit /b
    :No
    cls
    echo.
    echo Okay, let's exit...
    echo.
    set /p pause="Press any key to continue!... "
    start /b "" cmd /c del "%~f0"&exit /b
// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 7.0
// @description Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @author gaston1799
// @match *://www.youtube.com/*
// @match *://www.instagram.com/*
// @match *://music.youtube.com/*
// @match *://y2mate.nu/*
// @match *://www.twitch.tv/*
// @match *://loader.to/*
// @match *://onlymp3.app/*
// @match *://qdownloader.cc/*
// @match *://tubemp4.is/*
// @match *://snapsave.io/*
// @match *://clips.twitch.tv/*
// @match *://twitch.tv/*
// @match *://onlymp3.to/*
// @match *://fastdl.app/*
// @match *://en.onlymp3.app/*
// @match *://clipr.xyz/*
// @match *://studio.youtube.com/*
// @match *://www.yt2conv.com/*
// @match *://soundcloud.com/*
// @match *://sclouddownloader.net/*
// @match *://www.tiktok.com/*
// @match *://en3.onlinevideoconverter.pro/*
// @match *://savetik.co/*
// @match *://yt5s.biz/*
// @match *://sss.instasaverpro.com/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @grant GM_info
// @grant GM_xmlhttpRequest
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @name:ja 
// @name:es 
// @name:zh Gaston's - Video/Image Downloader
// @name:en Gaston's - Video/Image Downloader
// @name:ru Gaston's - Video/Image Скачатель Gaston's - Video/Image Skachatel'
// @name:fr Gaston's - téléchargeur vidéo / image
// @name:pt Gaston's - Downloader de vídeo/imagem
// @name:de Gaston's - Video/Image Downloader
// @name:ar Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:hi गैस्टन - वीडियो/छवि डाउनलोडर gaistan - veediyo/chhavi daunalodar
// @name:pl Gaston - pobierca wideo/obrazu
// @name:vi Gaston's - Trình tải xuống video/hình ảnh
// @name:ko Gaston 's- 비디오/이미지 다운로더 Gaston 's- bidio/imiji daunlodeo
// @name:it Gaston's - Downloader di video/immagine
// @name:uk GASTON'S - Відео/зображення завантажувача GASTON'S - Video/zobrazhennya zavantazhuvacha
// @name:tr Gaston's - Video/Resim İndirici
// @name:id Gaston's - Video/Image Downloader
// @name:th Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:ro Gaston's - descărcător video/imagini
// @name:nl Gaston's - Video/Image Downloader
// @name:fi Gaston's - Video/kuvan lataaja
// @name:sv Gaston's - Video/Image Downloader
// @name:hu Gaston's - Videó/kép letöltő
// @name:da Gastons - Video/Image Downloader
// @name:he Gaston's - הורדת וידאו/תמונה Gastontavs - hordet video/tmona
// @name:cs Gaston's - Video/Image Downloader
// @name:no Gaston's - Video/Image Downloader
// @name:sk Gaston's - Video/Image Downloader
// @name:el Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:bg Gaston's - видео/изтегляне на изображения Gaston's - video/izteglyane na izobrazheniya
// @description:zh Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:en Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:de Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (häufig aktualisiert)
// @description:ja Instagram/Twitch/YouTube/Tiktokビデオ/オーディオダウンローダー（頻繁に更新） Instagram/ Twitch/ yūchūbu/ Tiktok bideo/ ōdiodaunrōdā (hinpan ni kōshin)
// @description:ar Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (تم تحديثه بشكل متكرر) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (tama tahdithuh bishakl mutakariri)
// @description:hi Instagram/Twitch/YouTube/Tiktok वीडियो/ऑडियो डाउनलोडर (अक्सर अपडेट किया गया) instagram/twitchh/youtubai/tiktok veediyo/odiyo daunalodar (aksar apadet kiya gaya)
// @description:es Instagram/Twitch/YouTube/Tiktok Video/Audio Descarger (frecuentemente actualizado)
// @description:pt Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (atualizado com frequência)
// @description:ru Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (часто обновляется) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (chasto obnovlyayetsya)
// @description:fr Instagram / twitch / youtube / tiktok vidéo / téléchargeur audio (fréquemment mis à jour)
// @description:it Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (frequentemente aggiornato)
// @description:nl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (vaak bijgewerkt)
// @description:vi Instagram/twitch/youtube/tiktok video/trình tải xuống âm thanh (thường xuyên được cập nhật)
// @description:id Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sering diperbarui)
// @description:uk Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (часто оновлений) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (chasto onovlenyy)
// @description:tr Instagram/Twitch/YouTube/Tiktok Video/Ses Downloader (sıklıkla güncellendi)
// @description:ko Instagram/Twitch/YouTube/Tiktok 비디오/오디오 다운로더 (자주 업데이트) Instagram/Twitch/YouTube/Tiktok bidio/odio daunlodeo (jaju eobdeiteu)
// @description:ro Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (actualizat frecvent)
// @description:th Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (อัปเดตบ่อยครั้ง) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (xạpdet b̀xy khrậng)
// @description:pl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (często aktualizowany)
// @description:bg Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (често актуализиран) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (chesto aktualiziran)
// @description:sv Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofta uppdaterad)
// @description:no Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte oppdatert)
// @description:hu Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (gyakran frissítve)
// @description:el Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (συχνά ενημερωμένο) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sychná enimeroméno)
// @description:he אינסטגרם/טוויץ '/YouTube/Tiktok וידאו/הורדת שמע (מעודכן לעתים קרובות) instegram/twich tav/YouTube/Tiktok video/hordet shma (meudken le'atim krovot)
// @description:fi Instagram/twitch/youtube/tiktok video/äänen lataus (päivitetty usein)
// @description:sk Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizované)
// @description:cs Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizováno)
// @description:da Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte opdateret)
// @license MIT
// ==/UserScript==

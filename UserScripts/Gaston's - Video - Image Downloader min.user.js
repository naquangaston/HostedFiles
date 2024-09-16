// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net/
// @version 6.5
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
// @name:fr Gaston's - téléchargeur vidéo / image
// @name:ru Gaston's - Video/Image Скачатель Gaston's - Video/Image Skachatel'
// @name:es Gaston's - Video/Image Descarger
// @name:pt Gaston's - Downloader de vídeo/imagem
// @name:ar Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:en Gaston's - Video/Image Downloader
// @name:ja Gaston's -Video/Image Downloader Gaston' s - vu~ideo/ Image daunrōdā
// @name:hi गैस्टन - वीडियो/छवि डाउनलोडर gaistan - veediyo/chhavi daunalodar
// @name:de Gaston's - Video/Image Downloader
// @name:zh Gaston's - Video/Image Downloader
// @name:tr Gaston's - Video/Resim İndirici
// @name:it Gaston's - Downloader di video/immagine
// @name:ro Gaston's - descărcător video/imagini
// @name:ko Gaston 's- 비디오/이미지 다운로더 Gaston 's- bidio/imiji daunlodeo
// @name:uk GASTON'S - Відео/зображення завантажувача GASTON'S - Video/zobrazhennya zavantazhuvacha
// @name:vi Gaston's - Trình tải xuống video/hình ảnh
// @name:id Gaston's - Video/Image Downloader
// @name:nl Gaston's - Video/Image Downloader
// @name:th Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:pl Gaston - pobierca wideo/obrazu
// @name:sk Gaston's - Video/Image Downloader
// @name:cs Gaston's - Video/Image Downloader
// @name:no Gaston's - Video/Image Downloader
// @name:bg Gaston's - видео/изтегляне на изображения Gaston's - video/izteglyane na izobrazheniya
// @name:da Gastons - Video/Image Downloader
// @name:el Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:sv Gaston's - Video/Image Downloader
// @name:hu Gaston's - Videó/kép letöltő
// @name:he Gaston's - הורדת וידאו/תמונה
// @name:fi Gaston's - Video/kuvan lataaja
// @description:pt Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (atualizado com frequência)
// @description:hi Instagram/Twitch/YouTube/Tiktok वीडियो/ऑडियो डाउनलोडर (अक्सर अपडेट किया गया) instagram/twitchh/youtubai/tiktok veediyo/odiyo daunalodar (aksar apadet kiya gaya)
// @description:ru Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (часто обновляется) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (chasto obnovlyayetsya)
// @description:en Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:ja Instagram/Twitch/YouTube/Tiktokビデオ/オーディオダウンローダー（頻繁に更新） Instagram/ Twitch/ yūchūbu/ Tiktok bideo/ ōdio daunrōdā (hinpan ni kōshin)
// @description:fr Instagram / twitch / youtube / tiktok vidéo / téléchargeur audio (fréquemment mis à jour)
// @description:zh Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:ar Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (تم تحديثه بشكل متكرر) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (tama tahdithuh bishakl mutakariri)
// @description:de Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (häufig aktualisiert)
// @description:es Instagram/Twitch/YouTube/Tiktok Video/Audio Descarger (frecuentemente actualizado)
// @description:tr Instagram/Twitch/YouTube/Tiktok Video/Ses Downloader (sıklıkla güncellendi)
// @description:nl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (vaak bijgewerkt)
// @description:id Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sering diperbarui)
// @description:th Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (อัปเดตบ่อยครั้ง) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (xạpdet b̀xy khrậng)
// @description:vi Instagram/twitch/youtube/tiktok video/trình tải xuống âm thanh (thường xuyên được cập nhật)
// @description:it Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (frequentemente aggiornato)
// @description:uk Instagram/twitch/youtube/tiktok відео/аудіо завантажувач (часто оновлений) Instagram/twitch/youtube/tiktok video/audio zavantazhuvach (chasto onovlenyy)
// @description:pl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (często aktualizowany)
// @description:ko Instagram/Twitch/YouTube/Tiktok 비디오/오디오 다운로더 (자주 업데이트) Instagram/Twitch/YouTube/Tiktok bidio/odio daunlodeo (jaju eobdeiteu)
// @description:ro Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (actualizat frecvent)
// @description:hu Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (gyakran frissítve)
// @description:sk Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizované)
// @description:el Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (συχνά ενημερωμένο) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sychná enimeroméno)
// @description:cs Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizováno)
// @description:sv Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofta uppdaterad)
// @description:da Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte opdateret)
// @description:bg Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (често актуализиран) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (chesto aktualiziran)
// @description:no Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte oppdatert)
// @description:fi Instagram/twitch/youtube/tiktok video/äänen lataus (päivitetty usein)
// @description:he אינסטגרם/טוויץ '/YouTube/Tiktok וידאו/הורדת שמע (מעודכן לעתים קרובות)
// @license MIT
// ==/UserScript==

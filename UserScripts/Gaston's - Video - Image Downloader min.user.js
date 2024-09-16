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
// @name:en Gaston's - Video/Image Downloader
// @name:de Gaston's - Video/Image Downloader
// @name:zh Gaston's - Video/Image Downloader
// @name:ar Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:ja Gaston's -Video/Image Downloader Gaston' s - vu~ideo/ Image daunrōdā
// @name:ru Gaston's - Video/Image Скачатель Gaston's - Video/Image Skachatel'
// @name:pt Gaston's - Downloader de vídeo/imagem
// @name:hi गैस्टन - वीडियो/छवि डाउनलोडर gaistan - veediyo/chhavi daunalodar
// @name:fr Gaston's - téléchargeur vidéo / image
// @name:es Gaston's - Video/Image Descarger
// @name:it Gaston's - Downloader di video/immagine
// @name:uk GASTON'S - Відео/зображення завантажувача GASTON'S - Video/zobrazhennya zavantazhuvacha
// @name:th Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @name:ko Gaston 's- 비디오/이미지 다운로더 Gaston 's- bidio/imiji daunlodeo
// @name:tr Gaston's - Video/Resim İndirici
// @name:vi Gaston's - Trình tải xuống video/hình ảnh
// @name:ro Gaston's - descărcător video/imagini
// @name:nl Gaston's - Video/Image Downloader
// @name:pl Gaston - pobierca wideo/obrazu
// @name:id Gaston's - Video/Image Downloader
// @name:da Gastons - Video/Image Downloader
// @name:bg Gaston's - видео/изтегляне на изображения Gaston's - video/izteglyane na izobrazheniya
// @name:cs Gaston's - Video/Image Downloader
// @name:no Gaston's - Video/Image Downloader
// @name:fi Gaston's - Video/kuvan lataaja
// @name:he Gaston's - הורדת וידאו/תמונה
// @name:hu Gaston's - Videó/kép letöltő
// @name:sk Gaston's - Video/Image Downloader
// @name:sv Gaston's - Video/Image Downloader
// @name:el Gaston's - Video/Image Downloader Gaston's - Video/Image Downloader
// @description:ja Instagram/Twitch/YouTube/Tiktokビデオ/オーディオダウンローダー（頻繁に更新） Instagram/ Twitch/ yūchūbu/ Tiktok bideo/ ōdio daunrōdā (hinpan ni kōshin)
// @description:zh Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:de Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (häufig aktualisiert)
// @description:fr Instagram / twitch / youtube / tiktok vidéo / téléchargeur audio (fréquemment mis à jour)
// @description:en Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated)
// @description:es Instagram/Twitch/YouTube/Tiktok Video/Audio Descarger (frecuentemente actualizado)
// @description:hi Instagram/Twitch/YouTube/Tiktok वीडियो/ऑडियो डाउनलोडर (अक्सर अपडेट किया गया) instagram/twitchh/youtubai/tiktok veediyo/odiyo daunalodar (aksar apadet kiya gaya)
// @description:ar Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (تم تحديثه بشكل متكرر) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (tama tahdithuh bishakl mutakariri)
// @description:pt Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (atualizado com frequência)
// @description:ru Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (часто обновляется) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (chasto obnovlyayetsya)
// @description:tr Instagram/Twitch/YouTube/Tiktok Video/Ses Downloader (sıklıkla güncellendi)
// @description:ko Instagram/Twitch/YouTube/Tiktok 비디오/오디오 다운로더 (자주 업데이트) Instagram/Twitch/YouTube/Tiktok bidio/odio daunlodeo (jaju eobdeiteu)
// @description:it Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (frequentemente aggiornato)
// @description:id Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sering diperbarui)
// @description:pl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (często aktualizowany)
// @description:th Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (อัปเดตบ่อยครั้ง) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (xạpdet b̀xy khrậng)
// @description:vi Instagram/twitch/youtube/tiktok video/trình tải xuống âm thanh (thường xuyên được cập nhật)
// @description:nl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (vaak bijgewerkt)
// @description:ro Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (actualizat frecvent)
// @description:uk Instagram/twitch/youtube/tiktok відео/аудіо завантажувач (часто оновлений) Instagram/twitch/youtube/tiktok video/audio zavantazhuvach (chasto onovlenyy)
// @description:hu Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (gyakran frissítve)
// @description:el Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (συχνά ενημερωμένο) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sychná enimeroméno)
// @description:sv Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofta uppdaterad)
// @description:fi Instagram/twitch/youtube/tiktok video/äänen lataus (päivitetty usein)
// @description:sk Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizované)
// @description:da Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte opdateret)
// @description:bg Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (често актуализиран) Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (chesto aktualiziran)
// @description:cs Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizováno)
// @description:he אינסטגרם/טוויץ '/YouTube/Tiktok וידאו/הורדת שמע (מעודכן לעתים קרובות)
// @description:no Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte oppdatert)
// @license MIT
// ==/UserScript==

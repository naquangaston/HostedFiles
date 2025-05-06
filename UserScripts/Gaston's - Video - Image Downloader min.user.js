// ==UserScript==
// @name Gaston's - Video/Image Downloader
// @namespace http://tampermonkey.net
// @version 10.3
// @supportURL https://greasyfork.org/en/scripts/496975-gaston-s-video-image-downloader/feedback
// @homepageURL https://greasyfork.org/en/users/689441-gaston
// @description Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @author gaston1799
// @match *://www.youtube.com/*
// @match *://yt.savetube.me/*
// @match *://production.assets.clips.twitchcdn.net/*
// @match *://www.instagram.com/*
// @match *://music.youtube.com/*
// @match *://y2mate.nu/*
// @match *://www.twitch.tv/*
// @match *://www.socialplug.io/*
// @match *://snapinst.app/*
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
// @grant GM_info
// @grant GM_xmlhttpRequest
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_addStyle
// @grant GM_registerMenuCommand
// @grant GM_xmlhttpRequest
// @grant GM_deleteValue
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @require https://update.greasyfork.org/scripts/439099/1203718/MonkeyConfig%20Modern%20Reloaded.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@main/UserScripts/Updater.js
// @run-at document-start
// @name:en Gaston's - Video/Image Downloader
// @name:bg Gaston's - видео/изтегляне на изображения
// @name:ar Gaston's - Video/Image Downloader
// @name:de Gaston's - Video/Image Downloader
// @name:cs Gaston's - Video/Image Downloader
// @name:el Gaston's - Video/Image Downloader
// @name:da Gastons - Video/Image Downloader
// @name:fi Gaston's - Video/kuvan lataaja
// @name:eo Gaston's - Video/Bildo -Elŝutilo
// @name:es Gaston's - Video/Image Descarger
// @name:it Gaston's - Downloader di video/immagine
// @name:ko Gaston 's- 비디오/이미지 다운로더
// @name:fr Gaston's - téléchargeur vidéo / image
// @name:hu Gaston's - Videó/kép letöltő
// @name:id Gaston's - Video/Image Downloader
// @name:hr Gaston's - Download Video/Image
// @name:mr गॅस्टनचा - व्हिडिओ/प्रतिमा डाउनलोडर
// @name:ja Gaston's -Video/Image Downloader
// @name:he Gaston's - הורדת וידאו/תמונה
// @name:ka გასტონის - ვიდეო/გამოსახულების ჩამოტვირთვა
// @name:nb Gaston's - Video/Image Downloader
// @name:pt-BR Gaston's - Video/Image Downloader
// @name:th Gaston's - Video/Image Downloader
// @name:ro Gaston's - descărcător video/imagini
// @name:nl Gaston's - Video/Image Downloader
// @name:sr Гастон'с - Видео / Имаге Довнлоадер
// @name:sk Gaston's - Video/Image Downloader
// @name:sv Gaston's - Video/Image Downloader
// @name:ru Gaston's - Video/Image Скачатель
// @name:pl Gaston - pobierca wideo/obrazu
// @name:es-419 Gaston's - Video/Image Downloader
// @name:zh-CN 加斯顿的 - 视频/图像下载器
// @name:vi Gaston's - Trình tải xuống video/hình ảnh
// @name:zh-TW 加斯頓的 - 視頻/圖像下載器
// @name:tr Gaston's - Video/Resim İndirici
// @name:ckb GASTON'S - DOCHOVDLOUNDER
// @name:uk GASTON'S - Відео/зображення завантажувача
// @name:fr-CA Gaston's - téléchargeur vidéo / image
// @name:ug Gaston's - سىن / رەسىم چۈشۈرۈش
// @name:aa Gaston's- Vidiyo/Gaddat oobise
// @name:ae Gaston's - Video/Image Downloader
// @name:ast Gaston's - Video/Image Downloader
// @name:af Gaston's - Video/Image Downloader More actions
// @name:ab Гастон - Авидео/Асахьа Ахҩага
// @name:ay Gaston's - Video/Image Ukax mä jach'a uñacht'äwiwa.
// @name:am ነዳጅ - ቪዲዮ / ምስል ማውረድ
// @name:ak Gaston's - video/mfonini a wɔtwe mfonini .
// @name:av Гастон - Видео/Имаж Скачать
// @name:as Gaston's - Video/Image Downloader
// @name:az Gaston's - Video / Şəkil Yükləyicisi
// @name:bi Gaston's - Video/Image Downloader
// @name:bh Gaston's - Video/Image Downloader
// @name:ca Gaston's - Descàrrega de vídeo/imatge
// @name:bm Gaston's - Video/Image Téléchargeur .
// @name:bs Gaston's - Video / Image Downloadower
// @name:bn গ্যাস্টনের - ভিডিও/চিত্র ডাউনলোডার
// @name:be Gaston's - Загрузка відэа/малюнка
// @name:bo Gaston’s Video/Image Downloader More actions
// @name:ba Гастон - Видео/Һүрәт Скачатель
// @name:br Gaston - Video/Skeudenn Pellgargañ .
// @name:chr Gaston's - Video/Image Downloader
// @name:cr Gaston's - Video/Image Downloader
// @name:cu Gaston's - Video/Image Downloader
// @name:ce Гастон - Видео/Имаж Скачать еш верг More actions
// @name:dv ގޭސްޓަންގެ - ވީޑިއޯ/އިމޭޖް ޑައުންލޯޑަރ
// @name:cv Гастон - Видео/Сăн ÿкерчĕк скачать
// @name:ceb Gaston's - Video / I-imahen nga Downloader
// @name:cy Gaston's - Downloader Fideo/Delwedd
// @name:co Scaricamentu Video / Image di Gaston
// @name:ch Gaston Gaston - Videt/Inagof
// @name:fa Gaston's - Downloader Video/Image
// @name:fy Gaston's - Video / image Downloader
// @name:dz གཱསི་ཊོན་གྱི་ - བརྙན་འཕྲིན་/པར་རིས་ཕབ་ལེན་པ།
// @name:fj Gaston ni Gastos - Video/Image Lavetaki
// @name:ee Gaston ƒe - Video/Nɔnɔmetata ƒe Ðeɖefiamɔ̃ .
// @name:et Gastoni - video/pildi allalaadija
// @name:eu Gaston's - Video / Image Downloader
// @name:fil Gaston's - Video/Image Downloader
// @name:fo Gaston's - Video/Mynd Downloader
// @name:ff Gaston's - Video/Imageer Natal
// @name:gsw-berne Gaston's - Video/Image Downloader
// @name:gl Gaston's - Video/Image Downloader
// @name:gv Gaston - Ta'n Lught-thie Video/Image
// @name:gu ગેસ્ટન - વિડિઓ/ઇમેજ ડાઉનલોડર
// @name:gn Gaston's - vídeo/Ta'angamýi .
// @name:hmn Gaston's - Yees duab / Duab Downloader
// @name:ha Gaston's - Bidiyo / Download Video / Download
// @name:ga Gaston's - Íoslódáil Físeáin/Íomhá
// @name:gd Luchdaich sìos bhidio / ìomhaigh Gaston
// @name:hi गैस्टन - वीडियो/छवि डाउनलोडर
// @name:ia Gaston's - Video/Image Downloader
// @name:ik Gaston's - Video/Image Downloader
// @name:ho Gaston's - Video/Image Downloader
// @name:ie Gaston's - Video/Image Downloader
// @name:hz Gaston's - Video/Image Downloader
// @name:ht Gaston's - Videyo/Imaj Downloader
// @name:hy Գաստոն - տեսանյութ / պատկերի ներբեռնիչ
// @name:iu ᒑᔅᑕᓐ - ᑕᕐᕆᔭᓕᐊᖅ/ᐊᔾᔨᙳᐊᖅ ᖃᕆᑕᐅᔭᒃᑯᑦ ᑎᒍᓯᔾᔪᑎ
// @name:ig Gaston - Video / Imase Downlown
// @name:is Gaston's - Video/Image Downloader
// @name:ki Gaston's - Video/Image Downloader
// @name:kj Gaston's - Video/Image Downloader
// @name:ks Gaston's - Video/Image Downloader
// @name:jv Download Gaston - Video / Gambar Downloader
// @name:kl Gaston's - Video/Assilisassiaq
// @name:kg Ba Gaston - Video/Kupesa bifwanisu
// @name:kn ಗ್ಯಾಸ್ಟನ್ - ವಿಡಿಯೋ/ಇಮೇಜ್ ಡೌನ್‌ಲೋಡರ್
// @name:kr Gastonbe - Video/Sura Downloader
// @name:km Gaston's - ទាញយកវីដេអូ / រូបភាព
// @name:kk Гастонның - бейне / image жүктеушісі
// @name:kw Gaston's - Video/Image Downloader
// @name:lif Gaston's - Video/Image Downloader
// @name:la Gasto - Video / Image Download
// @name:kv Гастон - Видео/Серпас Скачать .
// @name:lg Gaston's - Video/Ekifaananyi ekiwanula .
// @name:lb Gaston's - Video / Bild Downloader More actions
// @name:ln Gaston's - Vidéo/Image Téléchargeur
// @name:ky Гастон - Видео / Сүрөт жүктөөчү
// @name:lo Gaston's - ດາວໂຫລດວິດີໂອ / ຮູບພາບ / ຮູບພາບ
// @name:ku Gaston's - Video / image Downloader
// @name:mo Gaston's - Video/Image Downloader
// @name:mg Gaston's - Video / Sary Downloader
// @name:ml ഗാസ്റ്റൺസ് - വീഡിയോ / ഇമേജ് ഡ download ൺലോഡർ
// @name:mk Гастон - преземач на видео/слика
// @name:mh Gaston - Vidio/Pija
// @name:lv Gaston's - video/attēlu lejupielādētājs More actions
// @name:mi Gaston's - Kaihoko / Whakaahua Whakaahua
// @name:mn Гастоны - видео / зураг татаж авагч
// @name:ms Gaston's - Video/Image Downloader
// @name:lt „Gaston's“ - vaizdo/vaizdo atsisiuntimo priemonė
// @name:nv Gaston's - Video/Image Downloader
// @name:na Gaston's - Video/Image Downloader
// @name:ng Gaston's - Video/Image Downloader
// @name:nn Gaston's - Video/Image Downloader
// @name:nd Gaston's - Video/Image Downloader
// @name:my Gaston ၏ - ဗွီဒီယို / image downloader
// @name:nr 10 U-Ama 1000 .
// @name:mt Gaston's - Video / Image Downloader
// @name:ny Mapata a gaston - kanema / chithunzi More actions
// @name:ne Gaston - भिडियो / छवि डाउनलोडर
// @name:pi Gaston's - Video/Image Downloader
// @name:pt-PT Gaston's - Downloader de vídeo/imagem
// @name:pt Gaston's - Downloader de vídeo/imagem
// @name:os Гастоны - Видео/Ныв скачать
// @name:oc Gaston's - Video/Déleagés d'Image
// @name:ps د ګاسټن - ویډیو / عکس ډاونلوډر
// @name:or ଗ୍ୟାଷ୍ଟନ୍ ର - ଭିଡିଓ / ଇମେଜ୍ ଡାଉନଲୋଡର୍ |
// @name:pa GABTons ਦਾ - ਵੀਡੀਓ / ਚਿੱਤਰ ਡਾ er ਡਰਰ
// @name:om Gaston's - viidiyoo/fakkii downloader .
// @name:qu Gaston's - Video/Imagen Descargar .
// @name:sc Gaston's - Video/Image Downloader
// @name:sco Gaston's - Video/Image Downloader
// @name:sh Gaston's - Video/Image Downloader More actions
// @name:rm Gaston's - Video/Image Downloader
// @name:sg Gaston’s - Vidéo/Mime Télécharger
// @name:rw Gaston's - Video / Ishusho
// @name:se Gaston's - Video/govva.
// @name:sa Gaston's - Video/Image Downloader
// @name:rn Gaston - Video/Ishusho y'Ivyiyumviro
// @name:sd گيسٽن جي - وڊيو / تصويري ڊائون لوڊ ڪندڙ
// @name:sw Gaston's - video/picha ya kupakua
// @name:sn Gaston's - Vhidhiyo / Mufananidzo Downloader
// @name:sq Gaston's - Shkarkues i Video/Imazhit
// @name:si ගැස්ටන්ස් - වීඩියෝ / රූප බාගත කරන්නා
// @name:ss Gaston's - Ividiyo/Sitfombe Umlandziso
// @name:st Gaston's - Download Download Morekisi oa Video
// @name:sl Gaston's - Video/Image Downloader
// @name:so Gaston's - Video / imsit Downloader
// @name:sm Gastton's - Vitio / Ata Downloader
// @name:su Gaston - pidéo / pidéo / gambar
// @name:syr Gaston's - Video/Image Downloader
// @name:tl Gaston's - Video/Image Downloader
// @name:tk Gadon's - Wideo / surat ýükleýjisi
// @name:te గాస్టన్స్ - వీడియో/ఇమేజ్ డౌన్‌లోడ్
// @name:tg Гаста - Видео / зеркашӣ
// @name:ti ጋስቶን - ቪድዮ/ስእሊ ዳውንሎደር
// @name:ts Gaston's - Xifaniso xa vhidiyo/xifaniso .
// @name:to Gaston's - Vitio/'Imisi Downloader
// @name:ta காஸ்டனின் - வீடியோ/பட பதிவிறக்குபவர்
// @name:tn Gaston ya - Video/Setshwantsho sa Ditshwantsho
// @name:tw Gaston's - Video/Image Downloader
// @name:xh I-Gageton-ividiyo / umxholo wokukhuphela
// @name:ur گیسٹن کا - ویڈیو/تصویری ڈاؤن لوڈر
// @name:ty Te mau hoho'a - Te hoho'a/te hoho'a i te mau hoho'a
// @name:yo GASTON - Fidio / Download aworan
// @name:yi Gaston ס - ווידעא / בילד דאָוונלאָאַדער
// @name:uz Gaston's - video / rasmni yuklab olish
// @name:wo Gaston - Video/New-xew
// @name:ve Gaston - Video/Tshifanyiso.
// @name:tt Гастонның - видео / Рәсем йөкләүче
// @name:za Gaston's - Video/Image Downloader
// @name:zu Gaston's - Video / Image Downloader
// @description:ar Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (تم تحديثه بشكل متكرر) يتضمن كتلة yt ad
// @description:en Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:es Instagram/Twitch/YouTube/Tiktok Video/Audio Descarger (actualizado con frecuencia) incluye el bloque de anuncios YT
// @description:cs Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizované) zahrnuje YT AD Block
// @description:bg Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (често актуализиран) Включва YT рекламен блок
// @description:eo Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte ĝisdatigita) inkluzivas YT Ad -blokon
// @description:el Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (συχνά ενημερωμένο)
// @description:de Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (häufig aktualisiert) enthält YT -Anzeigenblock Explain More actions
// @description:da Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofte opdateret) Inkluderer YT AD -blokken
// @description:fi Instagram/twitch/youtube/tiktok video/audio lataaja (usein päivitetty) sisältää YT -mainoslohkon
// @description:fr Instagram / twitch / youtube / tiktok vidéo / téléchargeur audio (fréquemment mis à jour) comprend un bloc d'annonce YT
// @description:ja Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader（頻繁に更新）には、YT広告ブロックが含まれています
// @description:ko Instagram/Twitch/YouTube/Tiktok 비디오/오디오 다운로더 (자주 업데이트)에는 YT AD 블록이 포함됩니다
// @description:it Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (frequentemente aggiornato) include YT Ad Block
// @description:id Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (sering diperbarui) Termasuk blok iklan YT
// @description:hr Instagram/Twitch/YouTube/Tiktok Video/Audio Download (često ažurirano) uključuje YT AD Block
// @description:he אינסטגרם/טוויץ
// @description:mr इन्स्टाग्राम/ट्विच/यूट्यूब/टिकटोक व्हिडिओ/ऑडिओ डाउनलोडर (वारंवार अद्यतनित) वायटी अ‍ॅड ब्लॉक समाविष्ट करते More actions
// @description:ka Instagram/Twitch/YouTube/Tiktok ვიდეო/აუდიო ჩამოტვირთვა (ხშირად განახლებულია) მოიცავს YT სარეკლამო ბლოკს
// @description:hu Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (gyakran frissítve) tartalmazza az YT hirdetési blokkot
// @description:pt-BR Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block More actions
// @description:nl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (vaak bijgewerkt) bevat YT -advertentieblok More actions
// @description:nb Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block More actions
// @description:pl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (często aktualizowany) zawiera blok reklam YT
// @description:th Instagram/Twitch/YouTube/Tiktok วิดีโอ/เสียงดาวน์โหลด (อัปเดตบ่อยครั้ง) รวมถึงบล็อกโฆษณา yt
// @description:ru Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (часто обновляется) включает в себя объявление YT
// @description:sr Инстаграм / Твитцх / ИоуТубе / Тикток Видео / Аудио Довнлоадер (Често ажуриран) укључује ит Ад Ад More actions
// @description:ro Instagram/Twitch/YouTube/Tiktok Video/Downloader audio (actualizat frecvent) include blocul de anunțuri YT
// @description:sk Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (často aktualizované) Zahŕňa blok YT AD
// @description:sv Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (ofta uppdaterad) Inkluderar YT AD -block
// @description:es-419 Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:zh-CN Instagram/Twitch/YouTube/tiktok视频/音频下载器（经常更新）包括YT广告块
// @description:zh-TW Instagram/Twitch/YouTube/tiktok視頻/音頻下載器（經常更新）包括YT廣告塊
// @description:fr-CA Instagram / twitch / youtube / tiktok vidéo / téléchargeur audio (fréquemment mis à jour) comprend un bloc d'annonce YT
// @description:tr Instagram/Twitch/YouTube/Tiktok Video/Ses Downloader (sıklıkla güncellendi) YT reklam bloğunu içerir
// @description:vi Instagram/twitch/youtube/tiktok video/trình tải xuống âm thanh (được cập nhật thường xuyên) bao gồm khối quảng cáo YT
// @description:uk Instagram/twitch/youtube/tiktok відео/аудіо завантажувач (часто оновлений) включає блок yt ad
// @description:ckb Instagram/Twitch/Youtube/Tiktok Video/Audio Downloader (زۆر نوێکراوەتەوە) بلۆکی ڕێکلامەکانی YT لەخۆدەگرێت
// @description:ug Instagram / twitch / YouTube / Tiktok Video / Audio چۈشۈرۈش (دائىم يېڭىلىنىدۇ) YT ئېلاننى ئۆز ئىچىگە ئالىدۇ
// @description:aa Institushin/YouToobe/Tiktook video/Audio downio oobise ( kaxxam asqassaabe)
// @description:ae Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:ast Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:ay Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (Sapa kutiw machaqar tukuyapxi) YT anuncio bloque ukaw utji
// @description:av Инстаграм/YouTube/TikTok Video/Audio Downloader (постоянно обновляется) Включает в себя блок Ad
// @description:af Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (gereeld bygewerk) bevat YT AD -blok
// @description:az Instagram / Twitch / YouTube / Tiktok video / audio yükləyicisi (tez-tez yenilənən) YT reklam blokunu ehtiva edir
// @description:ak Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (wɔtaa yɛ no foforo) YT ad Block ka ho
// @description:am Instagram / Twitch / YouTube / Toutube / Toutube / Touty ማውጫ (ኦዲዮ ማውረድ) የ YT ማስታወቂያ አግድንም ያካትታል
// @description:ab Instagram/Twitch/YouTube/TikTok Авидео/Аудио Алаҟәра (лассы-лассы иҿыцхоит) Иаҵанакуеит YT Ad аблок More actions
// @description:as ইনস্টাগ্ৰাম/Twitch/YouTube/Tiktok Video/Audio Downloader (সঘনাই আপডেট কৰা হৈছে)
// @description:bh Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:bi Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:bn ইনস্টাগ্রাম/টুইচ/ইউটিউব/টিকটোক ভিডিও/অডিও ডাউনলোডার (প্রায়শই আপডেট হওয়া) ওয়াইটি অ্যাড ব্লক অন্তর্ভুক্ত
// @description:bs Instagram / Twitch / YouTube / Tiktok Video / Audio Downloader (često ažurirano) uključuje YT blok oglasa
// @description:bo Instagram/Twitch/YouTube/TikTok བརྙན་འཕྲིན། More actions
// @description:bm Instagram/Twitch/Youtube/Tiktok Video/Audio Downloader (a ka ca a la) yt annonce bloc
// @description:br Instagram/Tritch/YouTube/TikTok Video/Pellgargañ son (hizivaet alies) Blok Ad YT
// @description:ba Instagram/Twitch/YouTube/TikTok видео/Аудио Скачатьс More actions
// @description:be Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (часта абнаўляецца) уключае ў сябе блок аб'яў YT
// @description:ca Instagram/Twitch/YouTube/Tiktok Video/Descàrrega d'àudio (freqüentment actualitzat) inclou el bloc d'anuncis YT More actions
// @description:cu Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:cr Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:chr Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:cy Mae Instagram/Twitch/YouTube/Tiktok Fideo/Downloader Audio (wedi'i ddiweddaru'n aml) yn cynnwys YT Ad Block
// @description:ceb Instagram / twitch / Youtube / Tiktok video / Audio Downloader (kanunay nga gi-update) naglakip sa YT AD Block
// @description:co Instagram / Twitch / Youtube / Tiktok Video / Tiktok Downloader (aghjurnatu spessu) include blocu di l'annunziu YT
// @description:ce Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (кест-кеста карладаьккхина) YT Ad блок юкъаяккха
// @description:dv އިންސްޓަގްރާމް/twitch/youtube/tiktok video/audio downlower (ގިނައިން އަޕްޑޭޓް ކުރެވޭ) YoT AD AD Block
// @description:cv Instagram/Twitch/YouTube/TikTok видео/Audio Downloader (час-часах çĕнетнĕ)
// @description:ch I manma'gås-ta gi i Instagram I Tikeo.
// @description:ff Instagram/Twitch/TikTokTokTok Video/Audio Downloader (ina hesɗitinee no feewi) Ina jeyaa heen blok YT Ad
// @description:ee Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (wowɔa yeyee zi geɖe) lɔ YT ƒe boblododo ƒe mɔxenu ɖe ​​eme
// @description:fj Instagram/Tube/Bok Tok Video/Otio Laveter (vouiliutaki) E oka kina na YT buloko .
// @description:eu Instagram / Twitch / YouTube / Tiktok Video / Audio Downloader (maiz eguneratzen da) yt iragarki blokea biltzen du
// @description:dz ཨིན་ཊར་ནེཊ་/ཊི་ཝིཆ་/ཡུ་ཊུབ་/ཊིཀ་ཊོག་བརྙན་འཕྲིན་/ཨའུ་ཌིའོ་ཕབ་ལེན་འབད་མི་ (འཕྲལ་འཕྲལ་རང་དུས་མཐུན་བཟོ་ཡོདཔ་) གིས་ ཝའི་ཊི་ཨེ་ཌི་བཀག་ཆ་ཚུ་ཚུདཔ་ཨིན།
// @description:fa اینستاگرام/Twitch/YouTube/Tiktok Video/Audio Downloader (که اغلب به روز می شود) شامل YT AD BLOCK است
// @description:fy Instagram / Twitch / Youtube / Tiktok Video / Audio Downloader (Faak bywurke) omfettet YT-ad-blok
// @description:et Instagram/Twitch/YouTube/Tiktok Video/Audio allalaadija (sageli värskendatud) sisaldab YT reklaamiplokki More actions
// @description:fo Instagram/Sknút/Youeibe/TikTok Video/Ljóðdegnloader (ofta dagført) fevnir um YT Ad blokkin
// @description:fil Ang Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (madalas na na -update) ay may kasamang yt ad block
// @description:gsw-berne Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:gl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (actualizado con frecuencia) Inclúe YT AD Block
// @description:gv Instagram/Twitch/TuTube/TikTok/TikTok Downloader (Reeshey ry-gheddyn) Ta'n block YT Ad Ad Ad Ad Ad Switch
// @description:hi Instagram/Twitch/YouTube/Tiktok वीडियो/ऑडियो डाउनलोडर (अक्सर अपडेट किया गया) में yt विज्ञापन ब्लॉक शामिल है
// @description:ha Instagram / Batunna / Youtube / Tiktok video / Tiktok
// @description:gd Tha Ostagram / Twitch / YouTube / Siktobie Wadeilge / Clisgeadh Fuaim a-nuas (ùrachadh gu tric) a 'toirt a-steach bloc yt ad
// @description:gu ઇન્સ્ટાગ્રામ/ટ્વિચ/યુટ્યુબ/ટિકટોક વિડિઓ/audio ડિઓ ડાઉનલોડર (વારંવાર અપડેટ) માં વાયટી એડ બ્લોક શામેલ છે
// @description:ga Instagram/Twitch/YouTube/Tiktok Video/Downloader Audio (Nuashonraithe go minic) Áirítear Bloc Ad YT
// @description:gn Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (Oñembopyahu jepi) Oike YT AD Bloque More actions
// @description:hmn Instagram / Twitch / Youtube / TikTok video / audio downloader (nquag tshiab) suav nrog yt ad block
// @description:hz Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:ie Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block More actions
// @description:ia Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:hy Instagram / Twitch / YouTube / Tiktok Video / Աուդիո ներբեռնիչ (հաճախ թարմացված) ներառում է YT AD Block
// @description:ik Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:is Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (oft uppfært) Inniheldur YT AD blokk
// @description:ho Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:ht Instagram/Twitch/YouTube/Tiktok Videyo/Audio Downloader (souvan mete ajou) gen ladan yt blòk anons
// @description:iu Instagram/Twitch/YouTube/TikTok ᑕᕐᕆᔭᓕᐊᖅ/ᓂᐱᓕᐅᕐᕕᒃ ᖃᕆᑕᐅᔭᒃᑯᑦ ᑎᒍᓯᔾᔪᑎ (ᓄᑖᖑᓂᖅᓴᖅ ᓄᑖᙳᕆᐊᖅᑕᐅᓯᒪᔪᖅ) ᐃᓚᖃᖅᑐᖅ YT Ad lons .
// @description:ig Instagram / twebe / TIKTOK / Tiktok Video / Audio Downlown (Ugboro ugboro emelitere) gụnyere yt
// @description:kj Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block More actions
// @description:ki Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:ks Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:jv Instagram / twitch / YouTube / Tiktok Video / Audio Downloader (asring dianyari) kalebu blok iklan YT
// @description:kl Instagram/Twitch/YouTube/TikTok-imik Video/Audio Downloader (arlaleriarlugu nutarterneqartoq) YT Adblokkimik ilaqarpoq
// @description:kr Instagram/Twitch/Yiwo/Nyi/TikTok Video/Audio Downloader (nguwusoro bəlintəgəna) Surodən YT Ad block
// @description:kg Instagram/Twing/YouTube/TikTok Video/Downloadeur ya Audite (yina bo ke tulaka mbala mingi na zulu) Yo ke vandaka ti bloque ya Ad Ad .
// @description:kk Instagram / trick / Youtube / Tiktok Video / Audio Downloader (Жиі жаңартылатын)
// @description:km កម្មវិធីទាញយកវីដេអូ / ទាញយកអូឌីយ៉ូ / youtube / youtube / youtube / tiktok
// @description:kn Instagram/Twitch/YouTube/Tiktok video/Ondio downloather (ಆಗಾಗ್ಗೆ ನವೀಕರಿಸಲಾಗುತ್ತದೆ) YT AD ಬ್ಲಾಕ್ ಅನ್ನು ಒಳಗೊಂಡಿದೆ
// @description:lif Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:kw Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:ln Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (mise à jour mbala mingi) Ezali na Bloc ya ba publicités ya YT
// @description:lb Instagram / Twitch / YouTube / Tiktok Video / Audio Downloader (dacks aktualiséiert) enthält YT Ad Block
// @description:la Instagram / Twitch / YouTube / Tiktok Video / Audio Download (Saepe Updated) includit YT ad obstructionum
// @description:kv Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (тшӧкыда выльмӧдӧм) пыртӧ YT Реклама блок
// @description:lg Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (etera okutereezebwa) Mulimu YT Ad Block
// @description:lo Instagram / Twitch / YouTube / Tiktok Video / Audio Downloader (ໄດ້ຮັບການປັບປຸງເລື້ອຍໆ) ລວມມີ PROD AD
// @description:ky Инстаграм / Twitch / YouTube / Tiktok Video / Аудио жүктөөчү (тез-тез жаңыртылган) YT AD блогун камтыйт
// @description:ku Instagram / Twitch / YouTube / Tiktok Video / Audio Downloader (Bi gelemperî nûvekirin) Block YT Ad
// @description:mo Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:lt „Instagram“/„Twitch“/„YouTube“/„Tiktok Video/Audio Downloader“ (dažnai atnaujinami) apima „YT“ skelbimų bloką
// @description:ml Instagram / Twitch / YouTube / tiktok വീഡിയോ / ഓഡിയോ ഡ download ൺലോഡർ (പതിവായി അപ്ഡേറ്റുചെയ്തത്) yt പരസ്യ ബ്ലോക്ക് ഉൾപ്പെടുന്നു
// @description:mg Instagram / twitch / YouTube / Tiktok Video / Audio Downloader (Nohavaozina matetika) dia misy ny YT Ad Block
// @description:mn Instagram / Twitch / Twitch / Twitch / Tiktok / Tiktok видео / аудио татаж авах (байнга шинэчлэгддэг) yt шинэчилсэн зар сурталчилгаа орно
// @description:ms Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (kerap dikemas kini) termasuk blok iklan YT
// @description:mk Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (често ажурирано) Вклучува блок за рекламирање YT
// @description:mh Jerbal/Kaju
// @description:lv Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (bieži atjaunināts) Ietver YT AD bloku
// @description:mi Instagram / Twitch / YouTube / Tiktok Video / Tikiake Audio (Ka whakahoutia tonu) Kei roto i te poraka YT Ad
// @description:na Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:nv Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:nd Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block More actions
// @description:nn Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block More actions
// @description:ng Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:mt Instagram / Twitch / YouTube / Tiktok Video / Audio Downloader (Aġġornat ta 'spiss) Jinkludi YT AD Block
// @description:nr • 100 10.
// @description:ne इन्स्टाग्राम / ट्विच / यूट्यूब / टिकिओक भिडियो / अडियो डाउनलोडर (अक्सर अपडेट) YT विज्ञापन ब्लक समावेश गर्दछ
// @description:my Instagram / Twitch / Tiktok / Tiktok / Tiktok ဗီဒီယို / အသံဒေါင်းလုပ် (မကြာခဏ update လုပ်ခြင်း) တွင် YT ad ကြော်ငြာပိတ်ဆို့ခြင်းပါဝင်သည်
// @description:ny Instagram / Great / Yotube / Tiktok Video / Audio Duvier (pafupipafupi) imaphatikizapo YT Ad block
// @description:pi Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:pt Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (freqüentemente atualizado) Inclui YT AD Block More actions
// @description:pt-PT Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (freqüentemente atualizado) Inclui YT AD Block
// @description:om Instagram/Twitch/YouTube/Tiktok Viidiyoo/Audio Downloader (yeroo baay'ee kan haaromfame) yt ad block of keessaa qaba
// @description:qu Instagram/twitch/youtube/tiktok video/audio descargador (sapa kuti musuqyachisqa) incluye yt bloque de anuncios
// @description:or ଇନଷ୍ଟାଗ୍ରାମ / ଟ୍ୱିଚ୍ / ୟୁଟ୍ୟୁବ୍ / ଟିକ୍ ଡୁଅ / ଅଡିଓ ଡାଉନଲୋଡର୍ (ବାରମ୍ବାର ଅଦ୍ୟତନ) 3t ବିଜ୍ଞାପନ ବ୍ଲକ ଅନ୍ତର୍ଭୂକ୍ତ କରେ |
// @description:ps انسټاګرم / ټویټ / یوټیوب / ټیک کټک ویډیو / آډیو ډاونلوډر (ډیری ځله تازه شوی د YT AD بلاک شامل دی
// @description:pa ਇੰਸਟਾਗ੍ਰਾਮ / ਟਵਿਚ / ਯੂਟਿ? ਬ / ਟਿੱਕਰੋਕ ਵੀਡੀਓ / ਆਡੀਓ ਡਾਉਨਲੋਡਰ (ਅਕਸਰ ਅਪਡੇਟ ਕੀਤੇ) ਵਿੱਚ YT ਵਿਗਿਆਪਨ ਬਲਾਕ ਵਿੱਚ ਸ਼ਾਮਲ ਹੁੰਦਾ ਹੈ
// @description:oc Instagram/Twitt/YouTube/TikTok Video/Deleacteur audio (féctionnée fréquemment) Inclus Bloc d'anóncia YT
// @description:os Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (арæх ноггонд) Æмæ йæм хауы YT Ad блок More actions
// @description:rm Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:sco Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:sh Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:sc Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:rn Instagram/Guhindura/YouTube/TikTok video/Audio Downloader (akenshi yahinduwe) Irimwo na YT Ad block
// @description:se Instagram/Twitch/YouTube/TikTok-video/Juovlaládden (dávjá ođasmahttojuvvon) Sisdoallá YT Ad-lohkki
// @description:sg Instagram/Twibe/YouTube/TikTok Vidéo/Tivertier ti Audio (so a sara ni fani mingi) A yeke wara na yâ ti ni bloc ti YT.
// @description:rw Instagram / Twitch / YouTube / Tiktok Video / Audio Gukuramo (Kuvugurura kenshi) birimo YT Ad Block
// @description:sd انٽامام / ٽوچ / يوٽيوب / ٽڪيٽڪ وڊيو / آڊيو ڊائون لوڊ ڪندڙ (اڪثر تازه ڪاري) يو ٽي ايڊ بلاڪ شامل آهي
// @description:sa Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (प्रायः अद्यतनम्) YT विज्ञापन ब्लॉक शामिल हैं
// @description:sw Instagram/twitch/YouTube/Tiktok Video/Sauti Download (iliyosasishwa mara kwa mara) ni pamoja na block ya tangazo la YT
// @description:sq Instagram/Twitch/YouTube/Tiktok Video/Shkarkues Audio (i azhurnuar shpesh) Përfshinë bllokun e reklamave YT
// @description:si Instagram / twith / youtube / tictok වීඩියෝ / ඕඩියෝ බාගත කරන්නා (නිතර යාවත්කාලීන කිරීම) yt දැන්වීම් වාරණය ඇතුළත් වේ
// @description:su Instagram / Twitch / YouTube / Tiktok Video / Downloader / record
// @description:sn Instagram / Twitch
// @description:ss Instagram/Kufaka/Umuhla/Umutsi/TikTok Video/Audio Downloader (lovame kuvuselelwa) Ufaka ekhatsi i-YT Ad block
// @description:sl Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (pogosto posodobljen) vključuje Blok oglas YT
// @description:st Instagram / Twitch / YouTube / YouTube / Tiktok Video / Audio Download Vedi tsa Audio (e ntlafalitsoeng khafetsa) e kenyeletsa block More actions
// @description:sm Instagram / Twitch / YouTube / Tiktok Vitio / Audio Dicker (masani ona toe faafou) aofia ai YTS Add More actions
// @description:so Instagram / spitch / youtube / tiktok fiidiyowga video / Audio-ka (inta badan la cusbooneysiiyay) waxaa ka mid ah xayeysiiska yt xayeysiiska More actions
// @description:syr Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:tl Ang Instagram/Twitch/YouTube/Tiktok Video/Audio Downloader (madalas na na -update) ay may kasamang yt ad block
// @description:ti Instagram/Twitch/YouTube/TIKTOK ቪድዮ/Audio Downloader (ብተደጋጋሚ ዝተመሓየሸ) YT Ad Block ዘጠቓልል
// @description:tg Instagram / Thewube / YouTube / Tiktuk Videcker / Audio зеркашӣ (зуд-зуд навсозӣ) блоки YT-ро дар бар мегирад
// @description:to Instagram/Taute/ToiTube/Toime'a Vitio/Audio Downloader ('oku toutou fakafo'ou) 'Oku kau ai 'a e poloka YT Ad
// @description:ta Instagram/twitch/youtube/tiktok வீடியோ/ஆடியோ டவுன்லோடர் (அடிக்கடி புதுப்பிக்கப்படுகிறது) yt விளம்பரத் தொகுதியை உள்ளடக்கியது
// @description:tn Instagram/Twitch/YouTube/Vidio yaTokTok/Modumo wa Modumo (e e tlhabolotsweng kgapetsakgapetsa) E akaretsa boloko jwa YT Ad
// @description:ts Instagram/Twitch/YouTube/Tiktok Video/Audio download (nkarhi na nkarhi yi pfuxetiwile) yi katsa na yt ad block
// @description:te Instagram/twitch/youtube/TikTok వీడియో/ఆడియో డౌన్‌లోడ్ (తరచుగా నవీకరించబడింది) YT AD బ్లాక్ కలిగి ఉంటుంది
// @description:tk Instagram / twitch / tikteca
// @description:tw Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:ur انسٹاگرام/ٹویو/یوٹیوب/ٹیکٹوک ویڈیو/آڈیو ڈاؤن لوڈر (کثرت سے تازہ کاری) میں YT AD بلاک شامل ہے
// @description:yi ינסטאַגראַם / טוויטטש / יאָוטובע / טיקטאָק ווידעא / אַודיאָ דאָוונלאָאַדער (אָפט דערהייַנטיקט) כולל יט אַד בלאָק
// @description:tt Инстаграм / Твитт / Youtube / Tiktok Vide / Auio йөкләүче (еш яңартылган) YT реклама блокын үз эченә ала
// @description:ty Te faatupu nei te mau YT A'e i te hoê fare
// @description:wo Instagram/Tube/YouTok/TikTok Video/Audio Downloader (ñu yeesal ko ci anam wu yees) dafay boole YT Adup
// @description:yo Instagram / Twitch / YouTube Fidio / Olumulo Audio (imudojuiwọn nigbagbogbo) pẹlu Dndod Ipolowo YT
// @description:uz Instagram / twitch / YouTube / Tiktok video / Audio dasturxon (tez-tez yangilanadi) YT reklama blokini o'z ichiga oladi
// @description:ve Instagram/Twitch/YouTube/TikTok Video/Audio Downloading (ine ya dzulela u khwiniswa) I katela buḽoko ya YT Ad
// @description:xh I-Instagram / i-witch / i-youtube / i-tiktok ividiyo / i-audio yokukhuphela (ukuhlaziywa rhoqo) kubandakanya ibhloko ye-yt
// @description:za Instagram/Twitch/YouTube/TikTok Video/Audio Downloader (frequently updated) Includes YT Ad block
// @description:zu I-Instagram / Twitch / YouTube / TIKTOK Video / Twiktok Video / Umsindo Wokulanda (Kuvuselelwa njalo) kufaka i-YT AD BLOCK
// ==/UserScript==
! function() {
    function onElementReady(e, t) {
        new MutationObserver(((o, n) => {
            document.querySelectorAll(e).forEach((e => {
                t(e), n.disconnect()
            }))
        })).observe(document.body, {
            childList: !0,
            subtree: !0
        })
    }
    class videoPlayer {
#e = function() {
            return this.isFullScreen
        };
#t = function() {
            return this.isTheater
        };
#o = function() {
            return this.isMini
        };
        set isMini(e) {
            e && !this.#o() ? document.querySelector('[title="Miniplayer (i)"]').click() : !e && this.#o() && document.querySelector('[title="Expand (i)"]').click()
        }
        get isMini() {
            return !document.querySelector('[title="Miniplayer (i)"]')
        }
        set isTheater(e) {
            !e && this.#t() ? document.querySelector('[title="Default view (t)"]').click() : e && !this.#t() && document.querySelector('[title="Theater mode (t)"]').click()
        }
        get isTheater() {
            return !document.querySelector('[title="Theater mode (t)"]')
        }
        set isFullScreen(e = this.#e()) {
            e && !this.#e() ? document.querySelector('[title="Full screen (f)"]').click() : !e && this.#e() && document.querySelector('[title="Exit full screen (f)"]').click()
        }
        get isFullScreen() {
            return !document.querySelector('[title="Full screen (f)"]')
        }
    }
    class element {
        static get br() {
            return new element("br")
        }
        constructor(e, t = {}) {
            if (e instanceof HTMLElement) this.element = e;
            else {
                this.element = document.createElement(e);
                for (let e in t) "className" === e ? this.element.className = t[e] : this.element.setAttribute(e, t[e])
            }
        }
        style(e) {
            for (let t in e) this.element.style[t] = e[t];
            return this
        }
        append(e, ...t) {
            this.element.append(e.element || e);
            for (let e = 0; e < t.length; e++) this.element.append(t[e].element || t[e]);
            return this
        }
        appendTo(e) {
            return (e.element || ("string" == typeof e ? document.querySelector(e) : e)).append(this.element), this
        }
        on(e, t) {
            return this.element.addEventListener(e, t), this
        }
        set(e, t) {
            return "className" === e ? ("string" == typeof t && t.startsWith(".") && (t = t.substring(1)), this.element.className = t) : this.element[e] = t, this
        }
        remove() {
            return this.element.remove(), this
        }
        get(e) {
            return this.element[e]
        }
        get children() {
            return Array.from(this.element.children)
        }
    }

    function dispatchAllInputEvents(e, t) {
        ["focus", "input", "change", "blur"].forEach((o => {
            let n = new Event(o, {
                bubbles: !0,
                isTrusted: !0
            });
            e[`on${o}`] && e[`on${o}`](n), "input" === o && (e.value = t), e.dispatchEvent(n)
        }))
    }

    function downloadFileAsTitle(e, t) {
        const o = document.createElement("a");
        o.href = e, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
    }
    _element = _e = element,
        function() {
            Object.assign(this || arguments[0], {
                CustomLog: class {
                    constructor(e) {
                        this.title = {
                            body: e || "---",
                            color: "darkgrey",
                            size: "1rem"
                        }, this.body = {
                            color: "#008f68",
                            size: "1rem"
                        }
                    }
                    setTitleBody(e) {
                        return this.title.body = e, this
                    }
                    setTitleStyle({
                        color: e,
                        size: t
                    }) {
                        return void 0 !== e && (this.title.color = e), void 0 !== t && (this.title.size = t), this
                    }
                    setBodyStyle({
                        color: e,
                        size: t
                    }) {
                        return void 0 !== e && (this.body.color = e), void 0 !== t && (this.body.size = t), this
                    }
                    log(e = "") {
                        console.log(`%c${this.title.body} | %c${e}`, `color: ${this.title.color}; font-weight: bold; font-size: ${this.title.size};`, `color: ${this.body.color}; font-weight: bold; font-size: ${this.body.size}; text-shadow: 0 0 5px rgba(0,0,0,0.2);`)
                    }
                }
            })
        }(top), console.log("ok");
    var CurrentPlayingSymbol = "▶",
        adev, set_;

    function getV(e, t) {
        return GM_getValue(e) || (GM_setValue(e, t), t)
    }

    function setV(e, t) {
        GM_setValue(e, t)
    }
    async function getFinalUrlFromServer(e) {
        try {
            const t = await fetch("http://localhost:3000/get-final-url", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: e
                })
            });
            if (!t.ok) throw new Error("Failed to fetch final URL");
            return (await t.json()).finalUrl
        } catch (e) {
            return console.error("Error:", e), null
        }
    }

    function getCurrentVideoID() {
        var e;
        return [...document.getElementsByClassName("ytp-video-menu-item ytp-button")].forEach(((t, o) => {
            t.innerText.startsWith(CurrentPlayingSymbol) && (e = new URL(t.href).searchParams.get("v"))
        })), !e && document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0] ? (console.log("Opening"), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), getCurrentVideoID()) : e ? (console.log("Closiung"), document.getElementsByClassName("ytp-playlist-menu-button ytp-button")[0].click(), e) : console.warn("Not Found!")
    }
    _getV = getV, _setV = setV, Number.prototype.decimal = function(e) {
        return Number(this.toFixed(e))
    }, getSoundCloudUrl = () => {
        try {
            return findhref2(document.querySelector("#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"))[0].href
        } catch {
            return
        }
    }, downloadSC = function() {
        GM_setValue("SCinfo", null), GM_setValue("sc", getSoundCloudUrl()), !set_ && (set_ = 1, GM_addValueChangeListener("SCinfo", (function(e, t, o, n) {
            console.log({
                a: e,
                b: t,
                c: o,
                d: n
            }), o && o.name && _downloadFileAsTitle(o.href, o.name)
        }))), open("https://sclouddownloader.net/")
    };
    const sleep = e => new Promise((t => setTimeout(t, e)));
    window.sleep = sleep, GM_setValue_ = GM_setValue, GM_getValue_ = GM_getValue, GM_info_ = GM_info;
    var UnmutePath = "M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z",
        mutePath = "M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z";

    function downloadFile_(e, t) {
        const o = document.createElement("a");
        o.href = e, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
    }
    _downloadFileAsTitle = async function(e, t, o, n) {
        const l = document.createElement("a");
        return l.style.display = "none", document.body.appendChild(l), fetch(e).then((e => e.blob())).then((i => {
            const r = URL.createObjectURL(i);
            l.href = r, l.download = t, l.target = "_blank", l.click(), URL.revokeObjectURL(r), (o || opener || window).postMessage({
                url: e,
                title: t,
                s: !0
            }, "*"), (typeof n).includes("function") && n()
        })).catch((n => {
            console.error("Error downloading file:", n), (o || opener || window).postMessage({
                url: e,
                title: t,
                s: !1
            }, "*")
        }))
    }, _downloadFile_ = downloadFile_;
    const query = function(e, t) {
        try {
            let n = "undefined" != typeof $ ? $ : document.querySelectorAll;
            return t ? [...document.querySelectorAll(e)].filter((e => !(null === el.offsetParent)))[0] : (o = n(e) ? n(e).length ? n(e)[0] : n(e) : null, Object.keys(o).length ? o : null)
        } catch {}
        var o
    };
    async function downloadVideo(e, t) {
        try {
            const o = await fetch(e);
            if (!o.ok) throw new Error(`HTTP error! Status: ${o.status}`);
            const n = o.url,
                l = await o.blob(),
                i = window.URL.createObjectURL(l),
                r = document.createElement("a");
            r.href = i, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r), window.URL.revokeObjectURL(i), console.log(`Video downloaded from: ${n}`)
        } catch (e) {
            console.error("Failed to download video:", e)
        }
    }
    getElementByAttribute = function(e, t = "aria-label", o = document.body) {
            var n = [];
            return function o(l) {
                l.getAttribute(t) == e ? n.push(l) : l.children.length && ((l = l.children).forEach = [].forEach, l.forEach((e => {
                    o(e)
                })))
            }(o), 1 == n.length ? n[0] : n || !1
        }, get_aria_label = function(e, t = document.body) {
            var o = [];
            return function t(n) {
                n.getAttribute("aria-label") == e ? o.push(n) : n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((e => {
                    t(e)
                })))
            }(t), o[0] || !1
        }, getClass = function(e) {
            return document.getElementsByClassName("ehlq8k34")[0]
        }, async function() {
            async function e(e, t = 3e4) {
                var o;
                for (sleep(t).then((e => o = !0)); !document.querySelector(e) && (await sleep(0), !o););
                return document.querySelector(e)
            }
            return location.href.includes("/embed/") ? (console.log("Attaching to embeder >:]"), e(".ytp-right-controls").then((async e => {
                let t = new _e("button", {
                    id: "embedMP3"
                }).appendTo(e).set("innerText", "MP3").on("click", (function() {
                    let e = getCurrentVideoID() || setElement(location.href);
                    downloadT(e, !1, !0, !1, !0)
                })).style({
                    position: "fixed",
                    right: "50%",
                    top: "80%"
                });
                for (; !document.getElementById("embedMP3") && document.querySelector(".ytp-right-controls");) console.log("Appended"), t.appendTo(".ytp-right-controls")
            }))) : (document.querySelector(".ytp-right-controls"), await e(".playbackSoundBadge__actions", 5e3).then((async t => {
                let o = new _e("button", {
                    id: "GetAudio"
                }).appendTo(t).set("innerText", "Download MP3").on("click", (function() {
                    downloadSC()
                }), (e => e));
                for (;;) !document.getElementById("GetAudio") && await e(".playbackSoundBadge__actions", 5e3) && await e(".playbackSoundBadge__actions", 5e3).then((e => {
                    o.appendTo(e), console.log("Added Button")
                })), await sleep(0)
            })))
        }().then(console.log, console.warn),
        function() {
            const actions = [{
                    test: e => e.includes("onlymp3.app") || e.includes("onlymp3.to"),
                    action: async() => {
                        console.log("Executing onlymp3 action!"), console.log("onlymp3.app");
                        setInterval((() => {
                            document.getElementById("error-text").innerText.length > 5 && location.reload()
                        }), 2e4), console.log("Getting MP3"), tF((function(e = function() {}) {
                            ! function() {
                                var [e, t] = name.split(",");
                                txtUrl.value = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`, getListFormats()
                            }(), tF((function(e = function() {}) {
                                ! function() {
                                    var e = videoTitle.innerText.split("\n"),
                                        t = e.map((e => e.match(/[:\d]+/gi))).filter((e => !!e)).pop().pop(),
                                        o = e[0].split("Title: ")[1],
                                        n = findhref2(videoTitle.parentNode)[0].href,
                                        l = {
                                            id: setElement(location.href),
                                            href: n,
                                            title: o,
                                            length: t
                                        };
                                    (opener || window).postMessage(l, "*"), console.log("Poasted")
                                }()
                            }), {
                                callback: close
                            })
                        }), {
                            callback: function() {}
                        })
                    }
                }, {
                    test: e => new URL(e).host.includes("tiktok"),
                    action() {
                        console.log("OK, let's go2"), addEventListener("load", (function() {
                            function e() {
                                const e = abc_("browse-copy", "data-e2e") || abc_("browse-user-avatar", "data-e2e") ? (abc_("browse-copy", "data-e2e") || abc_("browse-user-avatar", "data-e2e")).parentNode : null;
                                e ? e.querySelector(".tt1") ? console.log("Buttons already exist, chillin'.") : (console.log("Buttons not found, appending now."), e.append(tiktokButton.element), e.append(tiktokButton2.element)) : console.log("Target element not found, fam.")
                            }
                            console.log("OK, let's go"), e(), setInterval(e, 4e3)
                        }))
                    },
                    action2() {
                        console.log("OK lets go2"), addEventListener("load", (function() {
                            console.log("OK lets go")
                        }))
                    }
                }, {
                    test: e => new URL(e).host.includes("youtube"),
                    action() {
                        tF((function() {
                            if (_ex_(), !_ex_()) throw "Cant append buttons yet";
                            return console.log("Posting"), appendButtons()
                        }), {
                            callback: function() {}
                        })
                    }
                }, {
                    test: e => new URL(e).host.includes("music"),
                    action() {
                        console.log("Added MiniPlayer Toggle with I"), addEventListener("keypress", (function({
                            isTrusted: e,
                            ctrlKey: t,
                            shiftKey: o,
                            code: n,
                            target: l,
                            target: {
                                tagName: i
                            }
                        }) {
                            ["INPUT", "TEXTAREA"].includes(i) || t || o || !e || "KeyI" != n || (abc_("Close player page") || abc_("Open player page")[1]).click()
                        }))
                    }
                }, {
                    test: e => new URL(e).host.includes("laoder.to") && location.href.includes("/api/"),
                    action() {
                        console.warn("using loader.to api")
                    }
                }],
                domainActions = {
                    "qdownloader.cc": async() => {
                        async function e(e, t = 2e4) {
                            let o = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), o = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, o), await sleep(500), !o););
                            if (console.log(e, o), o) throw "NotFound";
                            return document.querySelector(e)
                        }! function() {
                            const e = document.createElement;
                            document._createElement = function(t, o) {
                                const n = e.call(document, t, o);
                                return n._click = n.click, n.click = function() {
                                    if (console.log(n, "was clicked", n.tagName), "A" === n.tagName) {
                                        console.log("Caught", n);
                                        const e = n.download,
                                            t = n.href;
                                        f = {
                                            id: new URL(location.href).searchParams.get("v"),
                                            href: t,
                                            title: e
                                        }
                                    } else n._click.apply(n);
                                    return console.log(n, "was created", n.tagName), n
                                }, console.log(n, "was created", n.tagName), n
                            }
                        }();
                        try {
                            await async function() {
                                if (location.href.includes("vidbutton")) throw "vidbutton";
                                var t = !1;
                                GM_setValue("dlbutton", ""), GM_addValueChangeListener("dlbutton", (async function(e, t, o, n) {
                                    console.log({
                                        a: e,
                                        b: t,
                                        c: o,
                                        d: n
                                    }), o.includes("video download successful\ncheck downloads folder") && (await sleep(1e3), close())
                                }));
                                const o = await e("#url"),
                                    n = await e("#downloadBtn"),
                                    l = new URL(location.href).searchParams.get("v");
                                ! function(e, t) {
                                    ["focus", "input", "change", "blur"].forEach((o => {
                                        const n = new Event(o, {
                                            bubbles: !0,
                                            isTrusted: !0
                                        });
                                        e[`on${o}`] && e[`on${o}`](n), "input" === o && (e.value = t), e.dispatchEvent(n)
                                    }))
                                }(o, `https://www.youtube.com/watch?v=${l}`);
                                let i = `started_${l}`;
                                for (GM_addValueChangeListener(i, (async function(e, o, n, l) {
                                        console.log("Started", {
                                            a: e,
                                            b: o,
                                            c: n,
                                            d: l
                                        }), t = n
                                    })), GM_setValue(i, !1), alert(i + " not start"), n.click(); !t;) await sleep(5e3), n.click();
                                GM_deleteValue(i)
                            }()
                        } catch (t) {
                            "vidbutton" === t ? await async function() {
                                console.log("Best Quality Video");
                                let t = `started_${new URL(new URL(location.href).searchParams.get("url")).searchParams.get("v")}`;
                                GM_setValue(t, !0), await e("#height").then((o => {
                                    GM_setValue(t, !0), height.selectedIndex = height.options.length - 1, dlbutton.click(), window.open = function(e, t, o) {
                                        console.log({
                                            a: e,
                                            b: t,
                                            c: o
                                        })
                                    }, e("#dlbutton").then((e => {
                                        let t = "";
                                        setInterval((() => {
                                            t !== e.innerText && (t = e.innerText, GM_setValue("dlbutton", t))
                                        }), 100)
                                    }))
                                }))
                            }() : console.error(t)
                        }
                    },
                    "snapsave.io": async() => {
                        async function e(e, t = 2e4) {
                            let o = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), o = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, o), await sleep(500), !o););
                            if (console.log(e, o), o) throw "NotFound";
                            return document.querySelector(e)
                        }
                        _wfs = e;
                        var t = await e("#s_input", 3e4);
                        if (t) {
                            console.log("Converting"), id_ = new URL(location.href).searchParams.get("v"), t.value = `https://www.youtube.com/watch?v=${id_}`, ksearchvideo(), setTimeout(ksearchvideo(), 1e3);
                            var o = await e("#formatSelect");
                            await e("#btn-action");
                            o.selectedIndex = 0, o.options[0].selected = !0;
                            for (var n = await e("#asuccess"); !(n = await e("#asuccess"));) await sleep(0);
                            for (convertFile(0);
                                "#" == n.getAttribute("href");) await sleep(0), n = await e("#asuccess");
                            console.log(n.href);
                            var l = (await _wfs(".clearfix")).querySelector("h3").innerText,
                                i = {
                                    id: id_,
                                    href: n.href,
                                    title: l,
                                    length: {}
                                };
                            console.log("Posted", i), (opener || window).postMessage(i, "*")
                        } else alert("Input was not Found"), console.warn("?!!")
                    },
                    "soundcloud.com": async() => {
                        getSoundCloadI = function() {
                            _setV("SC", getSoundCloudUrl()), open("https://sclouddownloader.net/", "SC").onclose = function(e) {
                                console.log("Win closed")
                            }
                        }
                    },
                    "sclouddownloader.net": async function() {
                        var e = _getV("sc");
                        async function t(e, t) {
                            return await new Promise((async(o, n) => {
                                var l = !1;
                                setTimeout((() => (l = 0, n())), t);
                                for (; !document.querySelector(e);)
                                    if (await sleep(), l) {
                                        n();
                                        break
                                    }
                                return o(document.querySelector(e))
                            })).then((e => !0), (e => !1))
                        }
                        if ("/download-sound-track" == location.pathname) {
                            for (await t("#trackTitle"); !trackTitle.innerText.length;) await sleep(0);
                            for (await t("#trackLink"); !trackLink.href.length;) await sleep(0);
                            var o = {
                                name: trackTitle.innerText,
                                href: trackLink.href
                            };
                            console.log(o), _setV("SCinfo", o), close()
                        } else {
                            if (!_getV("SC")) throw "Bruv";
                            var n = "#urlInput";
                            if (await t(n, 2e3), await t(n, 2e3)) {
                                for (document.querySelector(n).value = e, console.log("EZ url", !!window.formSubmit);
                                    "undefined" == typeof formSubmit;) {
                                    document.querySelector(n).value = e;
                                    try {
                                        await sleep(0), console.log("EZ url", formSubmit), formSubmit()
                                    } catch {}
                                }
                                console.log("EZ url", formSubmit), formSubmit(), console.warn("Got"), setInterval((() => {
                                    document.querySelector(n).value = e, formSubmit()
                                }), 1e3)
                            }
                        }
                    },
                    "studio.youtube.com": async() => {
                        var e;
                        setInterval((() => {
                            var t;
                            try {
                                [...[...document.querySelectorAll("#video-list")].map((e => [e, [...e.classList]])).filter((e => e[1].includes("ytcp-video-section")))[0][0].children[1].children].map((e => [e, [...e.classList], e.tagName])).filter((e => "YTCP-VIDEO-ROW" == e[2])).filter((e => "Public" == e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0].innerText)).map((e => e[0].children[0].querySelectorAll(".cell-body.tablecell-visibility.style-scope.ytcp-video-row")[0])).forEach((e => {
                                    console.log(e), e.append(new _e("br").element);
                                    new _e("button").set("innerText", "MP3").on("click", (function(e) {
                                        let t = e.target.parentElement.parentElement.querySelector("#hover-items").children[3];
                                        console.log(t);
                                        const {
                                            id: o,
                                            href: n,
                                            short: l
                                        } = {
                                            href: t.href,
                                            short: t.href.includes("/short"),
                                            id: setElement(t.href)
                                        };
                                        console.log({
                                            id: o,
                                            href: n,
                                            short: l
                                        }), downloadT(o, !1, !0, !1, !1, new URL(n))
                                    }));
                                    var t = new _e("button").set("innerText", "MP4").on("click", (function(e) {
                                        let t = e.target.parentElement.parentElement.querySelector("#hover-items").children[3];
                                        console.log(t);
                                        const {
                                            id: o,
                                            href: n,
                                            short: l
                                        } = {
                                            href: t.href,
                                            short: t.href.includes("/short"),
                                            id: setElement(t.href)
                                        };
                                        console.log({
                                            id: o,
                                            href: n,
                                            short: l
                                        }), downloadT(o, !1, !0, !0, !1, new URL(n))
                                    }));
                                    e.prepend(t.element)
                                })), t = !0
                            } catch {
                                t = !1
                            }
                            e != t && (e = t, console.log("Change?", t ? "Found" : "Not FOund"))
                        }), 0)
                    },
                    "www.socialplug.io": async() => {
                        async function e(e, t = 5e3) {
                            let o = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), o = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, o), await sleep(500), !o););
                            if (console.log(e, o), o) throw "NotFound";
                            return document.querySelector(e)
                        }
                        location.pathname.split("/")[1] != GM_getValue(document.domain) && (GM_setValue(document.domain, location.pathname.split("/")[1]), console.warn("updated"));
                        let [t, o] = name.split(",");
                        if (!t.length || !o.length) return console.warn("No info Preset");
                        var n = `https://www.youtube.com/${"1"==o?"shorts/":"watch?v="}${t}`;
                        for (await e("#video-url"), console.log("Input Loaded"), document.querySelector("#video-url").value = n, await e("#get-video-button"), console.log("GEtting res"), await sleep(100), document.querySelector("#get-video-button").click(), await e("#quality-options", 2e4); !document.getElementById("quality-options").children.length;) await sleep(100);
                        for (document.getElementById("quality-options").children[document.getElementById("quality-options").children.length - 1].click(), console.log("Stating Download"); Number(document.querySelector(".indicator").style.width.replace("%", "")) < 100;) await sleep(10), "An error occurred while starting the download" == error.innerText && (document.getElementById("quality-options").children[document.getElementById("quality-options").children.length - 1].click(), console.warn("Stating Download again"), error.innerText = "", await sleep(1e3));
                        for (console.log("Done Loading"), console.log("Unloading video"); Number(document.querySelector(".indicator").style.width.replace("%", ""));) await sleep(10);
                        close()
                    },
                    "y2mate.nu": async() => {
                        location.pathname.split("/")[1] != GM_getValue("y2mate.nu") && (GM_setValue("y2mate.nu", location.pathname.split("/")[1]), console.warn("updated"), close());
                        let id_ = new URL(location.href).searchParams.get("v"),
                            IsShort = 1 == new URL(location.href).searchParams.get("s"),
                            mp4 = new URL(location.href).searchParams.get("mp4"),
                            useT = new URL(location.href).searchParams.get("useT"),
                            _ = id_ + mp4 + useT;
                        for (id_ || ([id_, IsShort, mp4, useT] = name.split(",").map((e => {
                                try {
                                    return !!eval(e)
                                } catch {
                                    return String(e)
                                }
                            }))); typeof gB == typeof nonexistent;) await sleep(1);
                        async function wfs(e, t = 5e3) {
                            let o = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), o = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, o), await sleep(500), !o););
                            if (console.log(e, o), o) throw "NotFound";
                            return document.querySelector(e)
                        }
                        let cr = document.createElement;
                        for (window.openN = window.open, window.open = function(...e) {
                                console.log(document.domain, "wants to open", e)
                            }, document.createElement = function(e, t) {
                                let o = cr.call(document, e, t);
                                return o._click = o.click, o.click = function() {
                                    if (console.log(o, "was clicked", o.tagName), "A" == o.tagName) {
                                        console.log("Caught", o);
                                        let e = o.download,
                                            t = o.href;
                                        f = {
                                            id: id_,
                                            href: t,
                                            title: e
                                        }, (opener || window).postMessage(f, "*")
                                    } else o._click.apply(o)
                                }, console.log(o, "was created", o.tagName), o
                            };
                            "complete" != document.readyState;) await sleep(0);
                        var initRes = await fetch(`https://d.${gB}/api/v1/init?a=${authorization()}&_=${Math.random()}`),
                            {
                                convertURL: convertURL
                            } = await initRes.json();
                        let _title;
                        console.log({
                            id_: id_,
                            mp4: mp4,
                            useT: useT,
                            IsShort: IsShort
                        });
                        let post = async(e, t) => {
                            console.log("a", e);
                            var o = {
                                _: _,
                                id: id_,
                                href: e,
                                title: t,
                                length: {}
                            };
                            console.log("Posted", o), (opener || window.parent).postMessage(o, "*"), close()
                        };
                        async function getInfo(e) {
                            var t = await fetch(e || `${convertURL}&v=${id_}&f=mp3&_=${Math.random()}`).then((e => e.json())),
                                {
                                    downloadURL: o,
                                    redirectURL: n,
                                    redirect: l,
                                    title: i,
                                    error: r
                                } = await t;
                            return i && i.length && (_title = i), l ? (await sleep(1e3), console.log("Got redirected"), await getInfo(n)) : r ? (await sleep(1e3), console.log("retrying again"), await getInfo()) : o && o.length ? {
                                _title: _title,
                                downloadURL: o
                            } : void 0
                        }
                        let s = await getInfo();
                        console.log(s), await post(s.downloadURL, s._title)
                    },
                    "tubemp4.is": async() => {
                        async function e(e, t = 3e4) {
                            var o;
                            for (sleep(t).then((e => o = !0)); !document.querySelector(e) && (await sleep(0), !o););
                            return document.querySelector(e)
                        }
                        console.log("ok"), e("#u").then((async t => {
                            t.value = `https://www.youtube.com/watch?v=${new URL(location.href).searchParams.get("v")}`, convert.click(), await sleep(200), (await e("#convert")).click(), (await e(".process-button")).click(), e(".download-button").then((e => {
                                let t = document.createElement;
                                document.createElement = function(e, o) {
                                    let n = t.call(document, e, o);
                                    return n._click = n.click, n.click = function() {
                                        if (console.log(n, "was clicked", n.tagName), "A" == n.tagName) {
                                            console.log("Caught", n);
                                            let e = n.download,
                                                t = n.href;
                                            f = {
                                                id: new URL(location.href).searchParams.get("v"),
                                                href: t,
                                                title: e
                                            }, (opener || window).postMessage(f, "*"), close()
                                        } else n._click.apply(n)
                                    }, console.log(n, "was created", n.tagName), n
                                }, e.click(), console.log("clicked"), setTimeout((() => e.click()), 1e3)
                            }))
                        })).then(console.log, console.warn)
                    },
                    "www.yt2conv.com": async() => {
                        console.log("Getting MP4");
                        let [e, t] = name.split(",");
                        tF((function(o = function() {}) {
                            document.getElementById("search_txt").value = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`, document.getElementById("btn-submit").click(), console.log(e, t)
                        }), {
                            callback: function() {}
                        }), tF((function(e = function() {}) {
                            if (console.log(result.children.length), !result.children.length) throw document.getElementById("btn-submit").click(), "no there"
                        }), {
                            int: 1e3,
                            callback: function() {}
                        }), tF((function() {
                            document.getElementById("btn-download").click()
                        }), {
                            callback: function() {}
                        }), tF((function() {
                            var t = $(".media-heading")[0].innerText,
                                o = downloadbtn.href,
                                n = {
                                    id: e,
                                    href: o,
                                    title: t,
                                    length: {}
                                };
                            console.log("Posted"), (opener || window).postMessage(n, "*")
                        }), {
                            callback: close
                        })
                    },
                    "yt5s.biz": async() => {
                        async function e(e) {
                            for (; !document.querySelector(e);) await sleep(0);
                            return !0
                        }
                        let [t, o] = name.split(",");
                        if (!t.length || !o.length) return console.warn("No info Preset");
                        var n = `https://www.youtube.com/${"1"==o?"shorts/":"watch?v="}${t}`;
                        await e("#txt-url"), console.log("Input Loaded"), document.querySelector("#txt-url").value = n, await e("#btn-submit"), console.log("GEtting res"), await sleep(100), document.querySelector("#btn-submit").click(), await e("#video_title"), console.log("Got Res");
                        var l = document.querySelector("#video_title").innerText,
                            i = [0];
                        [...document.querySelector("#result").querySelector("table").querySelectorAll("tr")].forEach((e => {
                            var t = e.innerText.match(/(?<res>\d+)(p|P)/i) || {};
                            t.groups && (t = Number(t.groups.res), i[0] < t && (i[0] = t, i[1] = findhref2(e)[0].href, i[2] = e))
                        }));
                        let r = {
                            id: t,
                            title: l,
                            href: i[1],
                            mp4: !0,
                            res: i[0]
                        };
                        (opener || window).postMessage(r, "*"), location.href = r.href
                    },
                    "en3.onlinevideoconverter.pro": async() => {
                        let [e, t] = name.split(",");
                        if (!e.length || !t.length) return console.Warn("NO info Preset");
                        let o = function() {};
                        tF((function(o = function() {}) {
                            document.getElementById("texturl").value = `https://www.youtube.com/${"1"==t?"shorts/":"watch?v="}${e}`, document.getElementById("convert1").click(), console.log("Searched")
                        }), {
                            callback: o
                        }), tF((function() {
                            if ("none" == stepProcess.style.display) throw document.getElementById("convert1").click(), "this";
                            console.log("Searching")
                        }), {
                            callback: o
                        }), tF((function() {
                            if (0 == document.getElementById("form-app-root").children.length) throw "";
                            console.log("loaded");
                            var {
                                title: t,
                                href: o
                            } = $("#download-720-MP4") && $("#download-720-MP4")[0] ? $("#download-720-MP4")[0] : $("#download-720-MP4"), n = {
                                id: e,
                                href: o,
                                title: t,
                                length: {}
                            };
                            console.log("Posted"), (opener || window).postMessage(n, "*")
                        }), {
                            callback: close
                        })
                    },
                    "production.assets.clips.twitchcdn.net": async() => {
                        let e = new element("a", {
                            href: document.querySelector('[type="video/mp4"]').src,
                            download: document.querySelector('[type="video/mp4"]').src.split("/")[5] + ".mp4"
                        });
                        document.body.append(e.element), e.element.click(), sleep(500).then((t => {
                            e.element.remove(), sleep(500).then((e => {
                                close()
                            }))
                        }))
                    },
                    "clips.twitch.tv": async() => {
                        if ("create" === location.pathname.split("/")[1]) return;
                        const e = e => new Promise((t => setTimeout(t, e)));
                        _wfs = async function(t, o = 2e4) {
                            let n = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", t), n = !0
                                }), o); !document.querySelector(t) && (console.log("_", t, n), await e(500), !n););
                            if (console.log(t, n), n) throw "NotFound";
                            return document.querySelector(t)
                        }, _copyElm = function(e) {
                            if (!(e instanceof Element)) throw new Error("Provided argument is not a DOM element.");
                            const t = document.createElement(e.tagName);
                            for (let o of e.attributes) t.setAttribute(o.name, o.value);
                            return t.style.cssText = e.style.cssText, t.className = e.className, t.innerHTML = e.innerHTML, t
                        };
                        location.href;
                        let t = ".ScCoreButtonLabel-sc-s7h2b7-0",
                            o = (await _wfs(".ScCoreButtonLabel-sc-s7h2b7-0")).parentElement.parentElement.parentElement.parentElement;
                        async function n(e, t) {
                            return await fetch(e).then((e => !0), (e => !1)) ? (new _e("iframe", {
                                src: e,
                                width: "100%",
                                height: "600px",
                                frameborder: "0"
                            }).appendTo(document.body), console.log(`Embedded ${t} iframe: `, e)) : (console.warn("Embed failed"), open(e, t))
                        }[{
                            label: "1080P",
                            resolution: "1080"
                        }, {
                            label: "720P",
                            resolution: "720"
                        }, {
                            label: "480P",
                            resolution: "480"
                        }, {
                            label: "360P",
                            resolution: "360"
                        }, {
                            label: "VOD",
                            resolution: "VOD"
                        }].forEach((({
                            label: e,
                            resolution: l
                        }) => {
                            let i = new _e(_copyElm(o)).on("click", (function() {
                                i.element.querySelector(t).innerText;
                                var o;
                                i.element.querySelector(t).innerText = "Please wait...", n((e => e.href)(((o = new URL(location.href)).host = "clipr.xyz", o)), l).then((o => i.element.querySelector(t).innerText = e))
                            })).appendTo(o.parentNode);
                            i.element.querySelector(t).innerText = e
                        }))
                    },
                    "www.twitch.tv": async() => {
                        async function e() {
                            const t = await async function(e, t = 3e4) {
                                const o = e => new Promise((t => setTimeout(t, e)));
                                var n;
                                for (o(t).then((e => n = !0)); !document.querySelector(e) && (await o(0), !n););
                                return document.querySelector(e)
                            }(".rewards-list", 3e3);
                            return t || (get_aria_label("Bits and Points Balances") && get_aria_label("Bits and Points Balances").click(), e())
                        }
                        let t = {};
                        async function o() {
                            let [, e, t, o] = location.pathname.split("/");
                            if ("clip" !== t) return console.warn("User isnt wathcing a clip");
                            console.log("User is Watching a CLip");
                            const n = e => new Promise((t => setTimeout(t, e)));
                            async function l(e, t = 2e4) {
                                let o = !1;
                                for (setTimeout((() => {
                                        console.log("TimeOut for", e), o = !0
                                    }), t); !document.querySelector(e) && (console.log("_", e, o), await n(500), !o););
                                if (console.log(e, o), o) throw "NotFound";
                                return document.querySelector(e)
                            }
                            _wfs = l, _wfs_ = l, _copyElm = function(e) {
                                if (!(e instanceof Element)) throw new Error("Provided argument is not a DOM element.");
                                const t = document.createElement(e.tagName);
                                for (let o of e.attributes) t.setAttribute(o.name, o.value);
                                return t.style.cssText = e.style.cssText, t.className = e.className, t.innerHTML = e.innerHTML, t
                            }, await async function() {
                                location.href;
                                await _wfs(".Layout-sc-1xcs6mc-0.bMOhzu");
                                let n = [...document.querySelectorAll(".Layout-sc-1xcs6mc-0 .bMOhzu")].filter((e => e.querySelector("button") && !e.querySelector("button").disabled))[0],
                                    l = ".bFxzAY";
                                [{
                                    label: "1080P",
                                    resolution: "1080"
                                }, {
                                    label: "720P",
                                    resolution: "720"
                                }, {
                                    label: "480P",
                                    resolution: "480"
                                }, {
                                    label: "360P",
                                    resolution: "360"
                                }, {
                                    label: "VOD",
                                    resolution: "VOD"
                                }].forEach((({
                                    label: i,
                                    resolution: r
                                }) => {
                                    let a = new _e(_copyElm(n)).on("click", (function() {
                                        a.element.querySelector(l).innerText;
                                        var n;
                                        a.element.querySelector(l).innerText = "Please wait...", [, e, t, o] = location.pathname.split("/"), async function(e, t, o, n) {
                                            return await fetch(e).then((e => !0), (e => !1)) ? (new _e("iframe", {
                                                src: e,
                                                width: "100%",
                                                height: "600px",
                                                frameborder: "0"
                                            }).appendTo(document.body), console.log(`Embedded ${t} iframe: `, e)) : (console.warn("Embed failed"), open(e, t))
                                        }((e => e.href)(((n = new URL(location.href)).host = "clipr.xyz", n)), r).then((e => a.element.querySelector(l).innerText = i))
                                    })).appendTo(document.querySelector(".Layout-sc-1xcs6mc-0.hZUoPp"));
                                    "VOD" === r ? a.element.querySelector(".ScCoreButtonLabel-sc-s7h2b7-0").innerText = i : a.element.querySelector(l).innerText = i
                                }))
                            }().catch(console.warn)
                        }
                        var n;
                        setRwards = async function() {
                            t = {
                                bitItems: {},
                                rewardItems: {}
                            }, [...(await e()).querySelectorAll(".bitsRewardListItem--yx4rk")].forEach((e => {
                                let o = e.children[0].children[1].children[1].innerText,
                                    n = e.children[0],
                                    l = e.children[0].children[1].children[0].innerText,
                                    i = () => {
                                        n.click()
                                    };
                                i.name = l, i.cost = o, i.button = n, t.bitItems[l] = i
                            })), [...document.querySelectorAll(".reward-list-item")].forEach((e => {
                                let o = e.querySelector("button"),
                                    [n, l] = [...e.querySelectorAll(".CoreText-sc-1txzju1-0")].map((e => e.innerText)),
                                    i = () => {
                                        o.click()
                                    };
                                console.log(n, l), i.name = l, i.cost = n, i.button = o, t.rewardItems[l] = i
                            }))
                        }, unlockALLRNG = async function() {
                            for (;
                                "string" != typeof await unlockRNG(););
                            console.log("Done")
                        }, unlockRNG = async function() {
                            const e = e => new Promise((t => setTimeout(t, e)));
                            await setRwards();
                            let o = document.querySelector('[data-test-selector="bits-balance-string"]') ? document.querySelector('[data-test-selector="bits-balance-string"]').innerText : 0,
                                n = document.querySelector('[data-test-selector="copo-balance-string"') ? document.querySelector('[data-test-selector="copo-balance-string"').innerText : 0;
                            if (console.log({
                                    totalPoints: n,
                                    totalBits: o
                                }), !t.rewardItems["Unlock a Random Sub Emote"]) return "Doesnt exist";
                            if (!(t.rewardItems["Unlock a Random Sub Emote"].cost <= n)) return "Broke";
                            for (t.rewardItems["Unlock a Random Sub Emote"](); !document.getElementById("channel-points-reward-center-body").querySelector(".ScCoreButton-sc-ocjdkq-0");) await e(1e3);
                            if (document.getElementById("channel-points-reward-center-body").querySelector(".ScCoreButton-sc-ocjdkq-0").disabled) return get_aria_label("Back") && get_aria_label("Back").click(), "disabled";
                            for (; document.getElementById("channel-points-reward-center-body").querySelector(".ScCoreButton-sc-ocjdkq-0");) document.getElementById("channel-points-reward-center-body").querySelector(".ScCoreButton-sc-ocjdkq-0").click(), await e(1e3)
                        }, console.log("running points"), async function() {
                            let e = !1;
                            for (0;;) try {
                                document.querySelector('[aria-label="Claim Bonus"]') && (console.log("Bonus claimed"), document.querySelector('[aria-label="Claim Bonus"]').click()), a, get_aria_label("Leave feedback for this Ad") ? (console.log("AdFound"), document.querySelector("video").muted || e || (document.querySelector("video").muted = !0, e = !0)) : get_aria_label("Ad") && e && (document.querySelector("video").muted = !1), await sleep(100)
                            } catch {}
                        }(), setInterval((() => {
                            n != location.href && o(), n = location.href
                        }), 100)
                    },
                    "clipr.xyz": async() => {
                        let e = name;
                        await async function() {
                            for (;
                                "complete" != document.readyState;) await sleep(0);
                            return !0
                        }(), logger.log("Loaded");
                        let t = ((e = {}) => ([...document.querySelectorAll(".flex.items-center.space-x-4")].filter((e => findhref2(e)[0])).filter((e => findhref2(e)[0].href.includes("clips.twitchcdn.net"))).forEach((t => {
                            e[t.querySelector(".space-x-1").innerText.replace("p", "")] = findhref2(t)[0].href
                        })), e))()[e];
                        logger.log(1);
                        let o = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)").innerText;
                        logger.log(2);
                        let n = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2").innerText;
                        logger.log(3);
                        let l = `@${o} on Twitch | ${n} - ${e}P.mp4`;
                        logger.log(`Downloading file as: ${l}`), open(t), logger.log(4), await sleep(4e3), close()
                    },
                    "snapinst.app": async function() {
                        async function e(e, t = 2e4) {
                            let o = !1;
                            for (setTimeout((() => {
                                    console.log("TimeOut for", e), o = !0
                                }), t); !document.querySelector(e) && (console.log("_", e, o), await sleep(500), !o););
                            if (console.log(e, o), o) throw "NotFound";
                            return document.querySelector(e)
                        }!async function() {
                            await e("body");
                            const t = document.createElement("canvas");
                            t.id = "blackCanvas", Object.assign(t.style, {
                                position: "fixed",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                backgroundColor: "black",
                                zIndex: "9999",
                                pointerEvents: "none"
                            }), document.body.appendChild(t);
                            const o = () => {
                                t.width = window.innerWidth, t.height = window.innerHeight
                            };
                            o(), window.addEventListener("resize", o);
                            const n = t.getContext("2d");
                            n.fillStyle = "black", n.fillRect(0, 0, t.width, t.height), console.log("Black overlay canvas created.")
                        }();
                        let [t, o] = name.split("\n");
                        t && o ? (console.warn("Test2"), e("#url").then((n => {
                            console.warn("Test3"), n.value = `https://www.instagram.com/${t}/${o}/`, e("#btn-submit").then((t => {
                                t.click(), e(".download-bottom").then((async() => {
                                    await sleep(1e3);
                                    let e = [...document.querySelectorAll('[class="download-bottom"]')].map((e => findhref2(e)[0])).map((({
                                        href: e,
                                        download: t,
                                        target: o
                                    }) => ({
                                        href: e,
                                        download: t,
                                        target: o
                                    })));
                                    (opener || window).postMessage(e, "*"), close()
                                }))
                            }))
                        }))) : console.warn("no")
                    },
                    "fastdl.app": async() => {
                        onload = async function() {
                            const e = {
                                url: name,
                                input: null
                            };
                            var t = !1;
                            for (setTimeout((() => {
                                    t = !0
                                }), 2e4); !document.querySelector("#search-form-input");)
                                if (await sleep(0), t) throw "Cant find input";
                            e.input = document.querySelector("#search-form-input"), console.log("Found a"),
                                function(e, t) {
                                    ["focus", "input", "change", "blur"].forEach((o => {
                                        let n = new Event(o, {
                                            bubbles: !0,
                                            isTrusted: !0
                                        });
                                        e[`on${o}`] && e[`on${o}`](n), "input" === o && (e.value = t), e.dispatchEvent(n)
                                    }))
                                }(e.input, e.url), document.querySelector(".search-form__button").click(), GM_setValue("instaURL", await async function(e) {
                                    for (; !document.querySelector(e);) await sleep(0);
                                    return document.querySelector(e)
                                }(".button--filled").then((e => e.href)))
                        }
                    },
                    "www.instagram.com": async() => {
                        var e;
                        let t = () => (e = function(e) {
                            const t = e.match(/https?:\/\/(?:www\.)?instagram\.com\/(?:([^\/]+)\/)?(p|reels|reel)\/([^\/?]+)/);
                            return t ? {
                                username: t[1] || null,
                                a: t[2],
                                id: t[3]
                            } : null
                        }(location.href), open("https://snapinst.app/", `${e.a}\n${e.id}`));
                        if (onmessage = async function(e) {
                                if ("https://snapinst.app" != e.origin) return void console.log("UNhandled", e);
                                let t = e.data;
                                for (let e = 0; e < t.length; e++) {
                                    let {
                                        href: o,
                                        download: n,
                                        target: l
                                    } = t[e];
                                    console.log("Got", {
                                        href: o,
                                        download: n,
                                        target: l
                                    });
                                    let i = new element("a", {
                                        href: o,
                                        download: n,
                                        target: l
                                    });
                                    document.body.append(i.element), i.element.click(), await sleep(500), i.element.remove()
                                }
                            }, "/call/" == location.pathname) {
                            ! function() {
                                Object.assign(this || arguments[0], {
                                    _0x2c68c3: class {
                                        constructor(e) {
                                            this._0x2dcc16 = {
                                                body: e || "---",
                                                color: "darkgrey",
                                                size: "1rem"
                                            }, this._0x2603ce = {
                                                color: "#008f68",
                                                size: "1rem"
                                            }
                                        }
                                        _0x54181c(e) {
                                            return this._0x2dcc16.body = e, this
                                        }
                                        _0x40a387({
                                            _0x4e4744: e,
                                            _0x2fbd8f: t
                                        }) {
                                            return void 0 !== e && (this._0x2dcc16.color = e), void 0 !== t && (this._0x2dcc16.size = t), this
                                        }
                                        _0x235d03({
                                            _0x14e09d: e,
                                            _0x506311: t
                                        }) {
                                            return void 0 !== e && (this._0x2603ce.color = e), void 0 !== t && (this._0x2603ce.size = t), this
                                        }
                                        _0x52dfbf(e = "") {
                                            console.log(`%c${this._0x2dcc16.body} | %c${e}`, `color:${this._0x2dcc16.color}; font-weight:bold; font-size:${this._0x2dcc16.size};`, `color:${this._0x2603ce.color}; font-weight:bold; font-size:${this._0x2603ce.size}; text-shadow: 0 0 5px rgba(0,0,0,0.2);`)
                                        }
                                    }
                                })
                            }(globalThis);
                            const e = new _0x2c68c3("InfiniteLoop");
                            e._0x52dfbf("Starting infinite loop..."), async function t() {
                                await sleep(1e3), async function(e, t) {
                                    return await new Promise((async(o, n) => {
                                        var l = !1;
                                        for (setTimeout((() => (l = 0, n())), t); !document.querySelector(e);)
                                            if (await sleep(), l) {
                                                n();
                                                break
                                            }
                                        return o(document.querySelector(e))
                                    })).then((e => e), (e => !1))
                                }(".x6s0dn4 .x78zum5 .x5yr21d .xl56j7k.xh8yej3", 1e5).then((() => {
                                    [...document.querySelectorAll(".x6s0dn4 .x78zum5 .x5yr21d .xl56j7k.xh8yej3")].forEach((e => e.style.backgroundColor = "green")), e._0x52dfbf("Iteration complete. Next iteration..."), t()
                                })).catch((o => {
                                    e._0x52dfbf(`Error: ${o.message}`), t()
                                }))
                            }()
                        }

                        function o() {
                            console.log("Appended buttons man");
                            var e = new element(document.querySelectorAll(".xh8yej3.x1iyjqo2")[0]),
                                o = new element("button", {
                                    id: "MediaButton"
                                }).set("innerText", "Get Media").on("click", t);
                            e.append(o)
                        }
                        tF((function() {
                            document.querySelectorAll(".xh8yej3.x1iyjqo2")[0].children
                        }), {
                            callback: function() {
                                o(), setInterval((() => {
                                    ! function() {
                                        const e = document.getElementsByTagName("article");
                                        var o = new element("button", {
                                            id: "MediaButton"
                                        }).set("innerText", "Get Media").on("click", t);
                                        for (const t of e) t.querySelector("#MediaButton") || t.prepend(o.element)
                                    }(), document.querySelector("#MediaButton") || o(), document.querySelector("._aaqy") && !document.querySelector("._aaqy").querySelector("#MediaButton") && function() {
                                        var e = new element(document.querySelector("._aaqy")),
                                            o = new element("button", {
                                                id: "MediaButton"
                                            }).set("innerText", "Get Media").on("click", t);
                                        e.append(o)
                                    }()
                                }))
                            }
                        }), console.log("Insta ballz")
                    },
                    "sss.instasaverpro.com": async() => {
                        for (await async function(e) {
                                for (; !document.querySelector(e);) await sleep(0);
                                return !0
                            }("#A_downloadUrl"); !document.querySelector("#A_downloadUrl").href.length;) await sleep(0);
                        console.log("Done");
                        var e = document.querySelector("#myModalLabel").innerText,
                            t = {
                                href: document.querySelector("#A_downloadUrl").href,
                                title: e
                            };
                        (opener || window).postMessage(t, "*")
                    },
                    "savetik.co": async() => {
                        location.pathname.split("/")[1] != GM_getValue("savetik.co") && GM_setValue("savetik.co", location.pathname.split("/")[1]);
                        var [e, t] = name.split(",");
                        addEventListener("load", (function() {
                            tF((function() {
                                s_input.value = e, ksearchvideo(), setTimeout(ksearchvideo, 1e3)
                            }), {
                                callback() {}
                            })
                        })), GM_addValueChangeListener(e, (async function(t, o, n, l) {
                            console.log({
                                a: t,
                                b: o,
                                c: n,
                                d: l
                            }), n != o && n && (GM_deleteValue(e), await sleep(5e3), close())
                        })), tF((function() {
                            document.getElementsByClassName("clearfix")[0].innerText,
                                function() {
                                    console.log("Found");
                                    let o = document.getElementsByClassName("clearfix")[0].innerText,
                                        n = findhref2(document.getElementsByClassName("tik-video")[0]).map((e => e.href)),
                                        l = {
                                            id: e,
                                            title: o,
                                            links: n,
                                            mp4: 1 == t,
                                            info: setElement2(e)
                                        };
                                    onmessage = function(e) {
                                        if ("https://www.tiktok.com" == e.origin) {
                                            var {
                                                data: {
                                                    s: t,
                                                    url: o,
                                                    title: n
                                                }
                                            } = e;
                                            console.log("Handled", {
                                                s: t,
                                                url: o,
                                                title: n
                                            }, e), t ? setTimeout(close, 100) : downloadFileAsTitle(o, n, null, close)
                                        } else console.log("Unhandled Post", e)
                                    }, (opener || window).postMessage(l, "*")
                                }()
                        }), {
                            callback() {}
                        })
                    }
                };

            function getTikTokTittle() {
                try {
                    return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace("Replying to ", "")
                } catch {
                    try {
                        return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace("Replying to ", "")
                    } catch (e) {
                        return abc("browse-video-desc", "data-e2e") ? abc("browse-video-desc", "data-e2e").innerText : document.querySelector("#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1").innerText.replace("Replying to ", "")
                    }
                }
            }

            function sk() {
                get_aria_label("Why this ad?").click(), setTimeout((() => {
                    document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button").click(), setTimeout((() => {
                        document.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click()
                    }), 1e3)
                }), 1e3)
            }
            setElement2 = function(e) {
                return e.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups
            };
            var Porigin = "https://onlymp3.app",
                Ppath = "/watch?=",
                ev, tiktikWin;

            function ad(e, t, o = !1) {
                var n = addEventListener(e, ((...e) => {
                    t(...e), o && removeEventListener(n)
                }), !0);
                return n
            }

            function isElementInViewport(e) {
                "function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
                var t = e.getBoundingClientRect();
                return t.top >= 0 - (window.innerHeight || document.documentElement.clientHeight) / 2 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) + (window.innerHeight || document.documentElement.clientHeight) / 2 && t.right <= (window.innerWidth || document.documentElement.clientWidth)
            }

            function tF(e, {
                callback: t,
                int: o
            }) {
                !t && (t = function() {}), !o && (o = 100), console.log({
                    f: e,
                    callback: t,
                    int: o
                });
                try {
                    return e(), void t()
                } catch (e) {}
                var n = setInterval((() => {
                    try {
                        e(), t(), clearInterval(n)
                    } catch (e) {}
                }), o || 100);
                return n
            }

            function isHidden(e) {
                return null === e.offsetParent
            }

            function parent(e) {
                return e.parentNode
            }

            function GP() {
                return get_aria_label("Go back") && get_aria_label("Go back").click ? get_aria_label("Go back") : document.querySelector("._afxv")
            }

            function GN() {
                return get_aria_label("Next") && get_aria_label("Next").click ? get_aria_label("Next") : document.querySelector("._afxw")
            }

            function getTitle() {
                try {
                    return document.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split("\n")[1]
                } catch {
                    return [...document.querySelectorAll(".xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj")].pop().innerText.split("\n")[0]
                }
            }

            function DIV() {
                if (location.href.includes("reel")) {
                    let t = open("https://fastdl.app/en", location.href, "width=400,height=500");
                    var e = GM_addValueChangeListener("instaURL", (function(o, n, l, i) {
                        l && (console.log("Got", {
                            a: o,
                            b: n,
                            c: l,
                            d: i
                        }), t.close(), GM_removeValueChangeListener(e), downloadFile_(l, document.title + ".mp4"), GM_setValue("instaURL", null))
                    }))
                }
            }
            async function DII_() {
                for (var e = e => new Promise((t => setTimeout(t, e))), t = new Set, o = {}; GP();) {
                    if (await e(100), !GP()) {
                        await e(1e3);
                        break
                    }
                    GP().click()
                }[...getInstalImages()].forEach((e => {
                    let o = findhref2(e, "img")[0];
                    t.add([o.src, o.getAttribute("alt")])
                })), GN().click();
                try {
                    GN().click()
                } catch (e) {}
                for (; GN();) {
                    await e(300), [...getInstalImages()].forEach((e => {
                        let o = findhref2(e, "img")[0];
                        t.add([o.src, o.getAttribute("alt")])
                    }));
                    try {
                        GN().click()
                    } catch (e) {}[...t].length
                }
                for (; await e(100), GP();) GP().click();
                [...t].forEach((e => {
                    o[e[0]] = e[1]
                })), (t = Object.keys(o).map((e => ({
                    src: e,
                    name: o[e]
                })))).forEach((e => {
                    var t = new URL(e.src).pathname.split(".").pop();
                    downloadFileAsTitle(e.src, `${e.name}.${t}`)
                })), console.log("done", t)
            }

            function DII() {
                DII_().then(console.log, console.warn)
            }

            function getIds() {
                if (document.domain.includes("music")) throw alert("These button dont work on youtube music yet"), ".";
                var e = [...document.getElementsByTagName("ytd-playlist-panel-renderer")].filter(isElementInViewport).filter((e => !isHidden(e)))[0];
                return findhref2(e, "span").filter((e => !isHidden(e))).filter(isElementInViewport).filter((e => "video-title" == e.id)).map(parent).map(parent).map((e => ({
                    id: setElement(findhref2(parent(e))[0].href),
                    e: e
                })))
            }

            function downloadFileAsTitle(e, t) {
                const o = document.createElement("a");
                o.href = e, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
            }
            async function waitTT() {
                for (; tiktikWin && !tiktikWin.closed;) await sleep(0);
                return 1
            }

            function abc(e, t = "aria-label", o = document.body) {
                var n = [];
                return function o(l) {
                    var i = !1;
                    t ? l.getAttribute(t) == e && (n.push(l), i = 1) : [...l.attributes].map((e => {
                        const {
                            name: t,
                            value: o
                        } = e;
                        return {
                            name: t,
                            value: o
                        }
                    })).filter((t => t.value == e)).length && (n.push(l), i = 1), l.children.length && !i && ((l = l.children).forEach = [].forEach, l.forEach((e => {
                        o(e)
                    })))
                }(o), n.length ? 1 == n.length ? n[0] : n || !1 : null
            }

            function getElementByAttribute(e, t = "aria-label", o = document.body) {
                var n = [];
                return function o(l) {
                    l.getAttribute(t) == e ? n.push(l) : l.children.length && ((l = l.children).forEach = [].forEach, l.forEach((e => {
                        o(e)
                    })))
                }(o), 1 == n.length ? n[0] : n || !1
            }

            function mtoggle() {
                document.querySelector(".ytp-volume-area > .ytp-mute-button").click()
            }

            function Mute() {
                (abc("Mute", "title") && abc("Mute", "title")[0] || abc("Mute (m)", "title")).click()
            }

            function Unmute() {
                (query("#right-controls") && query("#right-controls").querySelectorAll("path")[0].getAttribute("d") == UnmutePath && abc("Mute", "title")[0] || abc("Unmute", "title") || abc("Unmute (m)", "title")).click()
            }
            setElement = function(e) {
                return !(!String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || 11 != String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length) && String(e).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]
            }, findhref2 = function(e, t) {
                var o = [];
                return function e(n) {
                    n.tagName.toLowerCase() == (t || "a") ? (o.push(n), n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((t => {
                        e(t)
                    })))) : n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((t => {
                        e(t)
                    })))
                }(e), o
            }, getInstalImages = function() {
                return document.querySelectorAll("._acaz")
            }, getInstaVideo = function() {
                return document.querySelector("video.x1lliihq")
            }, downloadVideoFromBlob = function(e, t) {
                if (e && e.src && e.src.startsWith("blob:")) {
                    const o = e.captureStream(),
                        n = new MediaRecorder(o),
                        l = [];
                    n.ondataavailable = e => {
                        e.data.size > 0 && (l.push(e.data), console.log(e.data))
                    }, n.onstop = () => {
                        const e = new Blob(l, {
                                type: "video/mp4"
                            }),
                            o = URL.createObjectURL(e),
                            n = document.createElement("a");
                        n.style.display = "none", n.href = o, n.download = t + ".mp4", document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(o)
                    }, n.start(), setTimeout((() => {
                        n.stop()
                    }), 1e3 * e.duration)
                } else console.error("Invalid video element or source.")
            }, _getIds = getIds, info = {}, downloadT = function(e, t = !1, o = !0, n = !1, l = !1, i = "") {
                let r = e + (n ? "mp4" : "mp3") + o;
                if ((e => {
                        e && e.remove()
                    })(document.getElementById(r)), localStorage[r] && !t && (!l || !confirm(`You have already download this video as .${n?"mp4":"mp3"}\nStill download?`))) return;
                let a = i || location;
                var c = new URL(a.href);
                c.host = c.host.replace(".com", "mz.com"), console.log("o", c);
                let s = ["https://y2mate.nu/" + (GM_getValue("y2mate.nu") || "en1") + "/", "?v=", e, "&s=", c.pathname.startsWith("/shorts/") ? 1 : 0, "&mp4=", n ? "mp4" : "mp3", "&useT=", o];
                console.log(r, s);
                ad("unload", (function() {
                    info[e].close()
                }), !0), onmessage = function(e) {
                    if (e.origin == Porigin || e.origin.match(/https?:\/{2}onlymp3\.to/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://sss.instasaverpro.com" == e.origin || "https://y2mate.nu" == e.origin || "https://snapsave.io" == e.origin || "https://www.socialplug.io" == e.origin || "https://tubemp4.is" == e.origin) {
                        const {
                            data: {
                                href: t,
                                title: l,
                                length: i,
                                id: r,
                                _: a
                            }
                        } = e;
                        let c = l + (n ? ".mp4" : ".mp3");
                        (e => {
                            e && e.remove()
                        })(document.getElementById(a)), console.log("Handled", {
                            href: t,
                            title: l,
                            length: i,
                            id: r,
                            _: a
                        }, e, document.getElementById(a), document.getElementById(a) && document.getElementById(a).remove()), button.set("innerText", "Get MP3"), button.set("disabled", !1), o ? (console.log("Getting video"), downloadFileAsTitle(t, c)) : open(t), localStorage[a] = t
                    } else console.log("Unhandled Post", e)
                };
                let d = a.pathname.startsWith("/shorts/") ? "https://www.socialplug.io/free-tools/youtube-video-downloader" : `https://qdownloader.cc/youtube-video-downloader.html?v=${e}`;
                return info[e] = n ? open(d, [e, a.pathname.startsWith("/shorts/") ? 1 : 0, n + !1], "width=400,height=500") : !async function() {
                    if (info[e] = n) {
                        return await fetch(d.join("")).then((e => !0), (e => !1)) ? ((t = new _e("iframe", {
                            src: d.join(""),
                            id: r,
                            useT: o,
                            loading: "lazy",
                            referrerpolicy: "no-referrer",
                            allowfullscreen: !0,
                            sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
                            allow: "autoplay; fullscreen; geolocation; microphone; camera"
                        }).style({
                            border: 0,
                            position: "absolute",
                            width: 1920,
                            height: 1080,
                            "pointer-events": "none",
                            opacity: 1
                        })).appendTo(document.body), t.closed = !1, t) : open(d, [e, a.pathname.startsWith("/shorts/") ? 1 : 0, n + !1], "width=400,height=500")
                    }
                    if (!await fetch(s.join("")).then((e => !0), (e => !1))) return console.warn("Cant Frame"), open(s.join(""), [e, a.pathname.startsWith("/shorts/") ? 1 : 0, n + !1, o + !1], "width=400,height=500");
                    var t = new _e("iframe", {
                        src: s.join(""),
                        id: r,
                        useT: o,
                        loading: "lazy",
                        referrerpolicy: "no-referrer",
                        allowfullscreen: !0,
                        sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
                        allow: "autoplay; fullscreen; geolocation; microphone; camera"
                    }).style({
                        border: 0,
                        position: "absolute",
                        width: 1920,
                        height: 1080,
                        "pointer-events": "none",
                        opacity: 1
                    });
                    return ev = GM_addValueChangeListener("y2mate.nu", (function(l, i, r, a) {
                        s = ["https://y2mate.nu/" + (GM_getValue("y2mate.nu") || "0HzX") + "/", "?v=", e, "&s=", c.pathname.startsWith("/shorts/") ? 1 : 0, "&mp4=", n ? "mp4" : "mp3", "&useT=", o], t.set("src", s.join(""))
                    })), t.appendTo(document.body), t.closed = !1, t
                }()
            }, downloadTikTok = function(e, t) {
                (async function(e, t) {
                    let o = `https://savetik.co/${GM_getValue("savetik.co")}`;
                    await waitTT(), console.log("ez");
                    let n = t.videoID,
                        l = t.username,
                        i = getTikTokTittle();
                    var r;
                    if (onmessage = function(e) {
                            if (e.origin == Porigin || e.origin.match(/https?:\/{2}savetik\.csavetik.coo/) || e.origin.match(/https?:\/{2}en\.onlymp3\.to/) || e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/) || "https://savetik.co" == e.origin) {
                                var {
                                    data: {
                                        href: t,
                                        links: o,
                                        title: n,
                                        length: l,
                                        id: r,
                                        mp4: a,
                                        info: {
                                            username: c
                                        }
                                    }
                                } = e;
                                if (console.log("Handled", {
                                        href: t,
                                        title: n,
                                        length: l,
                                        id: r,
                                        links: o,
                                        mp4: a
                                    }, e), GM_setValue(r, !0), "https://savetik.co" == e.origin) n = i, downloadFileAsTitle(a ? o[0] : o.pop(), c + " - " + n + (a ? ".mp4" : ".mp3"), tiktikWin);
                                else {
                                    if (useT) {
                                        let e = document.createElement("a");
                                        e.download = n + ".mp3", e.href = t, document.body.appendChild(e), e.click(), e.remove()
                                    } else open(t);
                                    localStorage[_] = t
                                }
                            } else console.log("Unhandled Post", e)
                        }, await fetch(o).then((e => !0), (e => !1))) return GM_addValueChangeListener("savetik.co", (async function(e, t, i, a) {
                        console.log({
                            a: e,
                            b: t,
                            c: i,
                            d: a
                        }), i != t && i && (o = `https://savetik.co/${i}`, r.set("src", `${o}?user=${l}&id=${n}`))
                    })), void(r = new _e("iframe", {
                        src: `${o}?user=${l}&id=${n}`,
                        id: n,
                        useT: useT,
                        loading: "lazy",
                        referrerpolicy: "no-referrer",
                        allowfullscreen: !0,
                        sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
                        allow: "autoplay; fullscreen; geolocation; microphone; camera"
                    }).style({
                        border: 0,
                        position: "absolute",
                        width: 1920,
                        height: 1080,
                        "pointer-events": "none",
                        opacity: 1
                    }));
                    GM_addValueChangeListener("savetik.co", (async function(t, i, r, a) {
                        console.log("savetik.co", {
                            a: t,
                            b: i,
                            c: r,
                            d: a
                        }), r != i && r && (tiktikWin && tiktikWin.close(), o = `https://savetik.co/${r}`, console.log("Updaed stuff"), tiktikWin = open(o, [`https://www.tiktok.com/${l}/video/${n}`, e + !1], "width=400,height=500"))
                    })), tiktikWin = open(o, [`https://www.tiktok.com/${l}/video/${n}`, e + !1], "width=400,height=500")
                })(e, t).then(console.log, console.warn)
            }, abc_ = abc, M = Mute, Um = Unmute;
            var didmute = 0;

            function ch3(e) {
                return !!e && !e.closed
            }
            async function getWin(e = [
                ["w1", "win1"],
                ["w2", "win2"],
                ["w3", "win3"],
                ["w4", "win4"]
            ]) {
                var t, o = !1;
                return await new Promise(((n, l) => {
                    var i = setInterval((l => {
                        e.forEach((e => {
                            this[e[0]] = ch3(window[e[1]]), window[e[1]] || o || (o = !0, t = e[1], console.log(e))
                        })), t && (n(t), clearInterval(i))
                    }), 500)
                })), t
            }

            function WIP(e, t, o) {
                if (!t) return alert("This button is corrently broken");
                var n = _getIds(),
                    l = [];
                for (let t = 0; t < e; t++) l.push(["w" + t, "win" + t]);
                n.forEach((({
                    id: e
                }, n) => {
                    getWin(l).then((l => {
                        if (!info[e] && !localStorage[e] || o) {
                            console.log("download", e, n), window[l] = downloadT(e, o, !0, !!t), window.addEventListener("unload", (function(e) {
                                window[l].close()
                            }));
                            var i = setInterval((e => {
                                window[l] && !window[l].closed || (window[l] = null, clearInterval(i), console.log(l, "isclosed"))
                            }), 300)
                        }
                    }))
                }))
            }
            window.ch3 = ch3, window.getWin = getWin, WIP_ = WIP;
            var button = new element("button").set("innerText", "Get MP3").on("click", (function(e) {
                button.set("innerText", "Wait..."), button.set("disabled", !0), downloadT(setElement(location.href), !0, !0, !1, !0)
            }));

            function getVisiable(e) {
                const t = [];
                return e.forEach((e => {
                    isElementInViewport(e) && t.push(e)
                })), t
            }
            var button2 = new element("button").set("innerText", "Get MP4").on("click", (function(e) {
                    downloadT(setElement(location.href), !0, !0, !0, !0)
                })),
                button3 = new element("button").set("innerText", "PlayList MP3").on("click", (function(e) {
                    WIP_(2, !1, !1)
                })),
                button4 = new element("button").set("innerText", "PlayList MP4").on("click", (function(e) {
                    WIP_(2, !0, !1)
                })),
                tiktokButton = new element("button", {
                    className: "tt1"
                }).set("innerText", "Get MP4").on("click", (function(e) {
                    downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
                })).style({
                    color: "blue"
                }).set("className", ".tt1"),
                tiktokButton3 = new element("button", {
                    className: "tt3"
                }).set("innerText", "Get MP4").on("click", (function(e) {
                    downloadTikTok(!0, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
                })).style({
                    color: "blue"
                }),
                tiktokButton2 = new element("button", {
                    className: "tt2"
                }).set("innerText", "Get MP3").on("click", (function(e) {
                    downloadTikTok(!1, setElement2(getClass("ehlq8k34") ? getClass("ehlq8k34").innerText : location.href))
                })).style({
                    color: "blue"
                });

            function _ex_() {
                return document.querySelector("#end") || document.querySelector("#right-content")
            }

            function appendButtons() {
                const e = _ex_();

                function t() {
                    try {
                        return !(![...document.querySelectorAll("#header-description")].filter(isElementInViewport).filter((e => !isHidden(e)))[0] && !query(".autoplay")) && ([...document.querySelectorAll("#header-description")].filter(isElementInViewport).filter((e => !isHidden(e)))[0] || query(".autoplay"))
                    } catch (e) {
                        return !1
                    }
                }
                console.log(e), button.appendTo(e), button2.appendTo(e), console.log("Posted Buttons");
                var o = !1;
                setInterval((() => {
                    o != t() && t() ? (console.log("Added playlist buttons"), setTimeout((() => {
                        t().append(element.br.element), t().append(button3.element), t().append(button4.element)
                    }), 100)) : o == t() || t() || console.log("buttons are gone?!?!"), o = t()
                }), 100)
            }
            console.log("bruh"), __ex_ = _ex_, console.log("A?"), domainActions[document.domain] ? domainActions[document.domain]().then(console.log, (e => alert(document.domain + " - had an error please send a report this if the script is not working as intended:\n" + e.message))) : console.warn(`No Dom action defined for domain: ${document.domain}`), console.log("B?");
            const matchingAction = actions.find((({
                test: e
            }) => e(location.href)));
            matchingAction ? matchingAction.action() : console.warn("No matching action for the current URL"), console.log("C?");
            const policy = window.trustedTypes && trustedTypes.createPolicy("trustedHTMLPolicy", {
                    createHTML: e => e,
                    createScriptURL: e => e
                }),
                styleContent = "\n    /* Default iframe styles */\n    #cardApiIframe {\n        width: 100%;\n        height: 100%;\n        transition: all 2.5s ease-in-out;\n    }\n\n    /* Collapse animation when the class is toggled */\n    .collapse-frame {\n        width: 0;\n        height: 0;\n        margin-left: auto;\n        margin-right: auto;\n        transition: all 2.5s ease-in-out;\n    }\n",
                styleElement = document.createElement("style");

            function toggleIframeCollapse(e) {
                const t = iframeElement.element;
                e ? t.classList.add("collapse-frame") : t.classList.remove("collapse-frame")
            }
            styleElement.type = "text/css", styleElement.appendChild(document.createTextNode(policy ? policy.createHTML(styleContent) : styleContent));
            var url = `https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`,
                src = policy ? policy.createScriptURL("https://loader.to/api/card2/?url=" + url) : "https://loader.to/api/card2/?url=" + url;
            const iframeElement = new _element("iframe", {
                    id: "cardApiIframe",
                    scrolling: "no",
                    width: "100%",
                    height: "100%",
                    allowtransparency: "true",
                    style: "border: none",
                    src: src
                }),
                iframeResizerScript = new _element("script", {
                    src: policy ? policy.createScriptURL("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js") : "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js"
                });
            iframeResizerScript.element.addEventListener("load", (() => {
                "function" == typeof iFrameResize ? iFrameResize({
                    log: !1
                }, "#cardApiIframe") : console.error("iFrameResize function not available")
            }));
            const containerDiv = new _element("div").append(iframeElement, iframeResizerScript),
                target = document.querySelector("#secondary.ytd-watch-flexy");
            var yedID = setElement(location.href);
            iframeElement.element.addEventListener("load", (() => {
                console.log("Iframe is fully loaded"), toggleIframeCollapse(!1)
            })), toggleIframeCollapse(!0);
            var adPlayTimeInSeconds = 5,
                currentPB = 0,
                setPlayerBack = 1,
                setPlayerBackAd = 0,
                isReloading = 0,
                ts = 0;
            tr = localStorage[setElement(location.href)] || 0;
            var cliked = 0,
                check = (e, t) => e > t ? t : e;
            const p_ = new videoPlayer;

            function addSearchParam() {
                let e = new URL(location.href);
                return e.searchParams.set("s", tr), e.toString()
            }
            const isYouTubeMobile = "m.youtube.com" === location.hostname,
                isYouTubeDesktop = !isYouTubeMobile,
                isYouTubeMusic = "music.youtube.com" === location.hostname,
                isYouTubeVideo = !isYouTubeMusic;
            ! function() {
                "use strict";
                const e = new MonkeyConfig({
                    title: "YouTube Ad Element Toggles",
                    menuCommand: !0,
                    params: {
                        hideTopRightBanner: {
                            type: "checkbox",
                            default: !0,
                            label: "Top-right banner ad above playlist"
                        },
                        hideSidePanelAd: {
                            type: "checkbox",
                            default: !0,
                            label: "Side engagement panel ads"
                        },
                        hideMastheadAd: {
                            type: "checkbox",
                            default: !0,
                            label: "Home page masthead ad"
                        },
                        hideMealbarPromo: {
                            type: "checkbox",
                            default: !0,
                            label: "YouTube promo banner (mealbar)"
                        },
                        hideFeaturedProduct: {
                            type: "checkbox",
                            default: !0,
                            label: "Featured product (bottom left of video)"
                        },
                        hideMerchShelf: {
                            type: "checkbox",
                            default: !0,
                            label: "Merch shelf below description"
                        },
                        hideMusicPromo: {
                            type: "checkbox",
                            default: !0,
                            label: "YT Music promo dialog (bottom left)"
                        },
                        hideMusicBanner: {
                            type: "checkbox",
                            default: !0,
                            label: "YT Music banner on home"
                        }
                    }
                });

                function t() {
                    let t = "";
                    e.get("hideTopRightBanner") && (t += "#player-ads { display: none !important; } "), e.get("hideSidePanelAd") && (t += '#panels > ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-ads"] { display: none !important; } '), e.get("hideMastheadAd") && (t += "#masthead-ad { display: none !important; } "), e.get("hideMealbarPromo") && (t += ".yt-mealbar-promo-renderer { display: none !important; } "), e.get("hideFeaturedProduct") && (t += ".ytp-featured-product { display: none !important; } "), e.get("hideMerchShelf") && (t += "ytd-merch-shelf-renderer { display: none !important; } "), e.get("hideMusicPromo") && (t += "ytmusic-mealbar-promo-renderer { display: none !important; } "), e.get("hideMusicBanner") && (t += "ytmusic-statement-banner-renderer { display: none !important; } ");
                    let o = document.getElementById("ytAdToggleCSS");
                    o && o.remove(), o = document.createElement("style"), o.id = "ytAdToggleCSS", o.textContent = t, document.head.appendChild(o)
                }
                t(), e.onSave = t
            }(), setInterval((e => {
                const t = document.querySelector(".ad-showing"),
                    o = document.querySelector(".ytp-ad-timed-pie-countdown-container"),
                    n = document.querySelector(".ytp-ad-survey-questions");
                if (null === t && null === o && null === n) return;
                const l = document.querySelector("video");
                let [i, r, a] = [...document.querySelector("#ytd-player") ? [document.querySelector("#ytd-player"), document.querySelector("#ytd-player").getPlayer()] : [document.querySelector("#movie_player"), document.querySelector("#movie_player")], null === o && null === n && document.querySelector("#ytd-player video.html5-main-video, #song-video video.html5-main-video")];
                if (null === a || !a.src || a.paused || isNaN(a.duration)) return;
                isYouTubeMusic && null !== a && (a.currentTime = a.duration);
                const c = document.querySelector("#video-companion-root") || document.querySelector("#secondary-inner") || document.querySelector("#secondary.ytd-watch-flexy");
                url = `https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`, src = policy ? policy.createScriptURL("https://loader.to/api/card2/?url=" + url) : "https://loader.to/api/card2/?url=" + url, c && (!c.querySelector("#cardApiIframe") && (toggleIframeCollapse(!0), c.parentNode.prepend(styleElement), c.prepend(containerDiv.element), console.log("Added That Thing")), setElement(location.href) != yedID && (toggleIframeCollapse(!0), iframeElement.set("src", src), console.log("Fixed That Thing"), yedID = setElement(location.href)));
                const s = query("yt-button-view-model#dismiss-button");
                s && !isHidden(s) && s.click();
                document.getElementsByClassName("ytp-ad-button-icon")[0];
                document.querySelector("#ytd-player") && document.querySelector("#ytd-player").getPlayer().getVideoData().video_id;
                try {
                    if (t && !didmute) console.log(p_), console.log("Muted ad"), console.log("Started at", tr), didmute = 1, l.playbackRate = document.querySelector("video").duration > 6 && check(l.duration / adPlayTimeInSeconds, 16), l.muted = 1;
                    else if (!t && didmute) {
                        console.log("Unmuted video");
                        try {
                            l.muted = 0
                        } catch (e) {
                            console.warn("Failed unmuting")
                        }
                        didmute = 0
                    }
                } catch {}!didmute && document.querySelector("video") && 0 != document.querySelector("video").currentTime && (tr = document.querySelector("video") && document.querySelector("video").currentTime.toFixed(), localStorage[setElement(location.href)], tr);
                const d = [...document.querySelectorAll("#song-video"), ...document.querySelectorAll("#ytd-player"), ...document.getElementsByTagName("video")].map((e => [...e.querySelectorAll("button")].filter((e => e.className.includes("skip")))[0])).filter((e => !!e))[0];
                if (d || t) {
                    if (!(setPlayerBackAd && l.playbackRate == check(l.duration / adPlayTimeInSeconds, 16) || (setPlayerBackAd = 1, l.currentTime < 4800 && (l.duration = 4999), console.log("Skipping ad :>"), isYouTubeMusic))) {
                        const e = r.getVideoData().video_id,
                            t = Math.floor(r.getCurrentTime());
                        "loadVideoWithPlayerVars" in i ? i.loadVideoWithPlayerVars({
                            videoId: e,
                            start: t
                        }) : i.loadVideoByPlayerVars({
                            videoId: e,
                            start: t
                        })
                    }!cliked && (cliked = !0, setTimeout((() => {
                        d && d.click(), cliked = !1
                    }), 5e3)), setPlayerBack = 0
                } else !setPlayerBack && l ? (setPlayerBackAd = 0, setPlayerBack = 1, l.playbackRate = currentPB > 2 ? 1 : currentPB, console.log("Fixed playBack")) : l && (setPlayerBackAd = 0, (currentPB = l.playbackRate) > 2 && (l.playbackRate = 1));
                const u = document.getElementsByClassName("ytp-ad-overlay-close-button")[2];
                u && (u.click(), console.log("Closed ad card"));
                let m = [...document.querySelectorAll(".yt-spec-button-shape-next")].filter((e => e.innerText.includes("Ads")))[0];
                m && (m.click(), !isReloading && location.href.includes("watch") && (isReloading = 1, location.href = addSearchParam()))
            }), 500)
        }()
}();
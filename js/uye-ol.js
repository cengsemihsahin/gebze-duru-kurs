//	uye olma form sayfasi js dosyasi
var input = document.getElementById("textElemani3");
var formGecerliligi = new Array(false, false, false, false, false, false, false, false);
var gecersizMesajlar = new Array("TC_KIMLIK_NUMARASI", "ISIM", "SOY_ISIM", "DOGUM_TARIHI", "KULLANICI_TIPI", "E-POSTA", "PAROLA", "GUVENLIK_KODU");
var mesaj = "";
var mesajTc = "";
var mesajAd = "";
var mesajSoyad = "";
var mesajEPosta = "";

function formBilgileri() {
    mesaj = "";
	mesajTc = "";
	mesajAd = "";
	mesajSoyad = "";
	mesajEPosta = "";
    var bayrak = false;
    var sart = false;
    var tcNoBilgisi = document.getElementById("textElemani1").value;
    var isimBilgisi = document.getElementById("textElemani2").value;
    var soyisimBilgisi = document.getElementById("textElemani4").value;
    var dogumTarihiGunBilgisi = document.getElementById("gun").value;
    var dogumTarihiAyBilgisi = document.getElementById("ay").value;
    var dogumTarihiYilBilgisi = document.getElementById("yil").value;
    var kullaniciTipiBilgisi = document.getElementById("kullaniciTipi").value;
    var ePostaBilgisi = document.getElementById("e_posta").value;
    var parolaBilgisi = document.getElementById("parola").value;
    var parolaTestBilgisi = document.getElementById("parola2").value;
    var guvenlikKoduBilgisi = document.getElementById("textElemani3").value;
    formGecerliligi[0] = tcNoKontrol(tcNoBilgisi);
    for (var j = 0; j < 8; j++) {
        if (j == 0)			formGecerliligi[j] = tcNoKontrol(tcNoBilgisi);
        else if (j == 1)	formGecerliligi[j] = isimKontrol(isimBilgisi);
        else if (j == 2)	formGecerliligi[j] = isimKontrol(soyisimBilgisi);
        else if (j == 3)	formGecerliligi[j] = dogumTarihiKontrol(dogumTarihiGunBilgisi, dogumTarihiAyBilgisi, dogumTarihiYilBilgisi);
        else if (j == 4)	formGecerliligi[j] = kullaniciTipiBilgisiKontrol(kullaniciTipiBilgisi);
        else if (j == 5)	formGecerliligi[j] = ePostaBilgisiKontrol(ePostaBilgisi);
        else if (j == 6)	formGecerliligi[j] = sifreGecerliMi(parolaBilgisi) && sifreEslesiyorMu(parolaBilgisi, parolaTestBilgisi);
        else if (j == 7)	formGecerliligi[j] = guvenlikKoduTest(guvenlikKoduBilgisi);
        else	break;
        if (testEt(j, gecersizMesajlar[j]))	bayrak = true;
        else	continue;
    }
    if (bayrak) {
        // kayit basarisiz
        var x = document.getElementsByClassName("bolme22_2");
        x[0].innerHTML = "<div class = \"bolme22_2\" style = \"color: darkred; font-size: 0.8vw; font-weight: bold; float: left; margin: 0 0 0 3%;\">" + mesaj + "</div>";
        x = document.getElementsByClassName("sonuc");
        x[0].innerHTML = "<div class = \"sonuc\" style = \"color: red; text-shadow: 1px 1px white; font-family: verdana; font-size: 0.8vw;\">kayıt başarısız!</div>";
    }
    else {
        // kayit basarili
        var x = document.getElementsByClassName("sonuc");
        x[0].innerHTML = "<div class = \"sonuc\" style = \"color: green; text-shadow: 1px 1px white; font-family: verdana; font-size: 0.8vw;\">kayıt başarılı!</div>";
        x = document.getElementsByClassName("bolme22_2");
        x[0].innerHTML = "<div class = \"bolme22_2\" style = \"color: white; font-weight: bold; float: left;\"></div>";
		
		/* KAYIT */
		mesajTc = tcNoBilgisi;
		mesajAd = isimBilgisi;
		mesajSoyad = soyisimBilgisi;
		mesajEPosta = ePostaBilgisi;
		
		const list = document.querySelector(".kayitListesi");
		const uller = document.createElement("ul");
		uller.innerHTML = '<li class="tcCol">' + mesajTc + '</li><li class="adCol">' + mesajAd + '</li><li class="soyadCol">' + mesajSoyad + '</li><li>' + mesajEPosta + '</li><li class="duzenleCol">&#9997;</li><li class="sil">&#10060;</li>';
		list.appendChild(uller);
    }
}

function testEt(num, metin) {
    if (!formGecerliligi[num]) {
        mesaj += "Uygun olmayan bölüm: " + metin + "<br><br>";
        return true;
    }
    else	return false;
}

function sifreEslesiyorMu(p1, p2) {
    if (String(arguments[0]) == String(arguments[1]))	return true;
    else	return false;
}

function sifreGecerliMi(sif) {
    if (sif != null && sif != "" && sifreKarakterTesti(sif) && sifreUzunlukTesti(sif))	return true;
    else	return false;
}

function sifreKarakterTesti(karakterTest) {
    for (var i = 0; i < karakterTest.length; i++)
        if (karakterTest.charCodeAt(i) >= 48 && karakterTest.charCodeAt(i) <= 57 || karakterTest.charCodeAt(i) >= 65 && karakterTest.charCodeAt(i) <= 90 || karakterTest.charCodeAt(i) >= 97 && karakterTest.charCodeAt(i) <= 122 || karakterTest.charCodeAt(i) == 42 || karakterTest.charCodeAt(i) == 95)
            continue;
        else	return false;
    return true;
}

function sifreUzunlukTesti(uzunlukTest) {
    if (uzunlukTest.length < 6 || uzunlukTest > 35)	return false;
    else	return true;
}

function ePostaBilgisiKontrol(arg) {
    if (arg != null && arg != "" && ePostaKarakterBilgisiKontrol(arg))	return true;
    else	return false;
}

function ePostaKarakterBilgisiKontrol(karakterler) {
    var i = 0;
    do {
        if (karakterler.charCodeAt(i) == 64)	return true;
        i++;
    } while (i < karakterler.length);
    return	false;
}

function kullaniciTipiBilgisiKontrol(tipBilgisi) {
    if (tipBilgisi != "seciniz")	return true;
    else	return false;
}

function dogumTarihiKontrol(arg1, arg2, arg3) {
    if (!isNaN(Number(arg1) + Number(arg2) + Number(arg3)))	return true;
    else	return false;
}

function isimKontrol(isimDegeri) {
    if (isimDegeri != null && isimDegeri != "" && isimKarakterKontrol(isimDegeri))	return true;
    else	return false;
}

function isimKarakterKontrol(adDegeri) {
    var i = 0;
    do {
        if (adDegeri.charCodeAt(i) >= 65 && adDegeri.charCodeAt(i) <= 90 && adDegeri.length >= 3 || adDegeri.charCodeAt(i) >= 97 && adDegeri.charCodeAt(i) <= 122 && adDegeri.length >= 3) {
            i++;
            continue;
        }
        else	return false;
    } while (i < adDegeri.length);
    return true;
}

function tcNoKontrol(x) {
    if (x != null && x != "" && x.length == 11 && tcKarakterKontrol(x))	return true;
    else	return false;
}

function tcKarakterKontrol(t) {
    var i = 0;
    do {
        if (t.charCodeAt(i) <= 57 && t.charCodeAt(i) >= 48) {
            i++;
            continue;
        }
        else	return false;
    } while (i < 11);
    return true;
}

function guvenlikKoduTest(arguman) {
    if (String(arguman) == "5ecuRe")	return true;
    else	return false;
}

function enterTusunaBasildi(event) {
    if (input.value.length >= 1 && event.keyCode === 13)	formBilgileri();
}

input.addEventListener("keypress", enterTusunaBasildi);

/* ilgili kisma tiklandiginda kaldir */
document.querySelector(".kayitListesi").addEventListener("click",
function(e) {
	/*
		chield nodes 0 1 2 3
		e.target.parentElement.childNodes[i].innerText node degerini verir (i e Z)
	*/
	if (e.target.className == "sil") {
		e.target.parentElement.remove();
	}
	if (e.target.className == "duzenleCol") { // duzenleye basildi
	/*
		mesajTc = e.target.parentElement.childNodes[0].innerText;
		mesajAd = e.target.parentElement.childNodes[1].innerText;
		mesajSoyad = e.target.parentElement.childNodes[2].innerText;
		mesajEPosta = e.target.parentElement.childNodes[3].innerText;
	*/
		var hataliGirisDoor = false;
		var iptalEdildi = false;
		do { // TC NO
			if (!hataliGirisDoor) {
				mesajTc = prompt("LÜTFEN YENİ TC_KIMLIK_NUMARASI GİRİNİZ.", "11 haneli tc no...");
			}
			else {
				mesajTc = prompt("TC_KIMLIK_NUMARASI DEĞERİNİ HATALI GİRDİNİZ. LÜTFEN YENİ TC_KIMLIK_NUMARASI GİRİNİZ.");
			}
			hataliGirisDoor = true;
			if (mesajTc == '' || mesajTc == null) iptalEdildi = true;
		} while (!tcNoKontrol(mesajTc) && !iptalEdildi);
		if (iptalEdildi) {
			alert("VERİ GİRİŞİ İPTAL EDİLDİ.");
		}
		else {
			var hataliGirisDoor = false;
			do { // AD
				if (!hataliGirisDoor) {
					mesajAd = prompt("LÜTFEN YENİ ISIM GİRİNİZ.", "isim giriniz...");
				}
				else {
					mesajAd = prompt("ISIM DEĞERİNİ HATALI GİRDİNİZ. LÜTFEN YENİ ISIM GİRİNİZ.");
				}
				hataliGirisDoor = true;
				if (mesajAd == '' || mesajAd == null) iptalEdildi = true;
			} while (!isimKontrol(mesajAd) && !iptalEdildi);
			if (iptalEdildi) {
				alert("VERİ GİRİŞİ İPTAL EDİLDİ.");
			}
			else {
				var hataliGirisDoor = false;
				do { // SOYAD
					if (!hataliGirisDoor) {
						mesajSoyad = prompt("LÜTFEN YENİ SOY_ISIM GİRİNİZ.", "soyisim giriniz...");
					}
					else {
						mesajSoyad = prompt("SOY_ISIM DEĞERİNİ HATALI GİRDİNİZ. LÜTFEN YENİ SOY_ISIM GİRİNİZ.");
					}
					hataliGirisDoor = true;
					if (mesajSoyad == '' || mesajSoyad == null) iptalEdildi = true;
				} while (!isimKontrol(mesajSoyad) && !iptalEdildi);
				if (iptalEdildi) {
					alert("VERİ GİRİŞİ İPTAL EDİLDİ.");
				}
				else {
					var hataliGirisDoor = false;
					do { // E POSTA
						if (!hataliGirisDoor) {
							mesajEPosta = prompt("LÜTFEN YENİ E-POSTA GİRİNİZ.", "e-posta giriniz...");
						}
						else {
							mesajEPosta = prompt("POSTA DEĞERİNİ HATALI GİRDİNİZ. LÜTFEN YENİ POSTA GİRİNİZ.");
						}
						hataliGirisDoor = true;
						if (mesajEPosta == '' || mesajEPosta == null) iptalEdildi = true;
					} while (!ePostaBilgisiKontrol(mesajEPosta) && !iptalEdildi);
					if (iptalEdildi) {
						alert("VERİ GİRİŞİ İPTAL EDİLDİ.");
					}
				}
			}
		}
		if (!iptalEdildi) { // veri girisi
			e.target.parentElement.childNodes[0].innerText = mesajTc;
			e.target.parentElement.childNodes[1].innerText = mesajAd;
			e.target.parentElement.childNodes[2].innerText = mesajSoyad;
			e.target.parentElement.childNodes[3].innerText = mesajEPosta;
		}
	}
});


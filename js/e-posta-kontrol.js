
function formBilgileri() {
    var ePostaBilgisi = document.getElementById("e_posta").value;
    if (!ePostaBilgisiKontrol(ePostaBilgisi)) { // e posta uygun degil
        alert("E-posta uygun degil!");
    }
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
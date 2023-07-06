// SCRIPT PER IL CONTROLLO DEL DISPOSITIVO
// Se il dispositivo è un cellulare, reindirizza alla pagina apposita

// Assegna la pagina del reindirizzamento
var layout_mobile = "mobile.html";

// Verifica il tipo di dispositivo
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Reindirizza alla pagina "mobile.html" se è un dispositivo mobile
if (isMobile)
	window.location.href = layout_mobile; // 
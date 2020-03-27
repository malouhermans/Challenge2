function show(){
	// maakt tijdsfunctie aan
	var today = new Date();
	// zorgt dat de huidige uren, minuten en seconden gerbuikt worden
	var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    // plaatst een nul voor een enkel getal
	    if (minutes <= 9){
	        minutes = '0' + minutes;
	    }
	    if (seconds <= 9){
	        seconds = '0' + seconds;
	    }

    var date = today.getDate();
    /* zorgt ervoor dat de maanden niet beginnen bij key 0,
   	maar bij 1, zoals de normale kalender */
    var month = (today.getMonth()+1);
    var year = today.getFullYear();
    document.getElementById('clock').innerHTML = hours+":"+minutes+":"+seconds;
    document.getElementById('date').innerHTML = date+"-"+month+"-"+year;
    
    setTimeout("show()",1000);

}

function showImage(image){
	var img = document.createElement("IMG");
    img.src = image;
	document.getElementById('image').appendChild(img);
}

// Zorgt voor het veranderen van het maan en zon icoontje
function dayNight(){
	var today1 = new Date();
	var hours1 = today1.getHours(); 
	if (hours1 >= 8 && hours1 <= 22){ 
		showImage(image = "fotos/sun.png");
	}
    else{
    	showImage(image = "fotos/moon.png");
	}
}

// Het aanroepen van de functies, wanneer de pagina geladen wordt
window.onload = function(){
	show();
	dayNight();
};



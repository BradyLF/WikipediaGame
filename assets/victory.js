function victory(){
	var url = document.getElementById('the-frame').contentWindow.location.href;
	if(url.value.substring(29, 41) == dest.value) {
		window.alert("Congratulations, You Made It To Your Destination");
    	}
}
   

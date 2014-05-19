document.getElementById('the-frame').addEventListener('load', function(){
  url.value=this.contentWindow.location;
  victory();
});

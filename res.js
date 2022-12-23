var closet = document.getElementsByClassName("close");
/*var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}*/
closet.addEventListener('click', function() {
    var div = document.getElementsByTagName("IFRAME"); 
      div.target.className='show';
    
  }, false);
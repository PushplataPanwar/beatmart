window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}



// AOS
AOS.init({
    duration: 800,
});
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



  var typed = new Typed(".typing", {
    strings: ["", "enjoy the songs "],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



$(document).ready(function() {
  $('input:radio').change(function() {
    if($('input:radio:checked')){
      $("input:radio:checked").next('label').addClass("active");
    }
    else{
      
    }
 
})})
console.log("Welcome to spotify");

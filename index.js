let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 3000) {
      mybutton.style.display = "block";
      setTimeout(function() {
        mybutton.style.opacity = "1";
      }, 10); // หรือค่าที่คุณต้องการ
    } else {
      mybutton.style.opacity = "0";
      setTimeout(function() {
        mybutton.style.display = "none";
      }, 300); // หรือค่าที่คุณต้องการ
    }
  }

  
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
  }
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav").style.padding = "20px 0px";
    document.getElementById("nav").style.border = "1px solid rgba(36, 36, 36, 0.1)";
    document.getElementById("nav").style.boxShadow = "22px 30px 95px 1px rgba(86, 86, 86, 0.2)";


  } else {
    document.getElementById("nav").style.padding = "25px 0px";
    document.getElementById("nav").style.border = "1px solid rgba(36, 36, 36, 0.1)";
    document.getElementById("nav").style.boxShadow = "22px 30px 95px 1px rgba(86, 86, 86, 0.2)";

  }
}

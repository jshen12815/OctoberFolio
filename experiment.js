$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
  
});




var coll = document.getElementsByClassName("expDetail");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active4");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


function xAnime(x) {
  x.classList.toggle("change");
  /*var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }*/ 
}


function copyDivToClipboard() {
 var range = document.createRange();
                   range.selectNode(document.getElementById("emailCopy"));
                    window.getSelection().removeAllRanges(); // clear current selection
                    window.getSelection().addRange(range); // to select text
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();// to deselect
  var tooltip = document.getElementById("myTooltip");
  var tooltip2 = document.getElementById("myTooltip2");

  tooltip.innerHTML = "🥳 Copied! TTYS! ";
  tooltip2.innerHTML = "🥳 Copied! TTYS! ";
                }


function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  var tooltip2 = document.getElementById("myTooltip2");
  tooltip.innerHTML = "📋 Click to copy";
  tooltip2.innerHTML = "📋 Click to copy";
}
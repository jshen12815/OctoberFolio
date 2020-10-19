
//Js for side scroll on Homepage
// get array of pane objects and select last one
var page = document.getElementById('page');
var panes = page.getElementsByClassName('pane');
var last_pane = panes[panes.length-1];

//var expRow = document.getElementById('expRow');

//get X position from left of last panel of first round and last panel
var endStart = document.getElementById('endStart') //last panel of first round
var begStar = endStart.getBoundingClientRect().right; //position at the end of first round
var lastEnd = last_pane.getBoundingClientRect().right; //position at the end of 2nd round


window.onscroll = function () {

        if(window.matchMedia ("(min-width: 1000px)").matches){
        	  // Horizontal Scroll
        	  var y = document.body.getBoundingClientRect().top;
        	  page.scrollLeft = -y;
           // expRow.scrollLeft= -y;
            //document.getElementById('variables').innerHTML = window.scrollY;
        	  
        	  // Looping Scroll
              // Find new locations based on window width
              var begEnd = lastEnd - window.innerWidth;
              var returnMid = begStar - window.innerWidth;

              //if at 0 position and scroll up
              if (window.scrollY == 0) {
                window.scrollTo(0,begStar);
              }
              //if at beginning of the last pane
              else if (window.scrollY == begEnd) {
                window.scrollTo(0, returnMid);
              }
          }
              // For testing: 
              // document.getElementById('variables').innerHTML = window.scrollY;

        	}
        	
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();


// Reset window-based vars
function resize() {
        	  var w = page.scrollWidth-window.innerWidth+window.innerHeight;
        	  document.body.style.height = w + 'px';
        	}

function mobileNav() {
  var x = document.getElementById("responsivenav");
  if (x.className === "topnav-right") {
    x.className += " responsive";
  } else {
    x.className = "topnav-right";
  }
}



//__NOTES___________________________________________________________________________________________________________________________________________________________





              //'rect:   '+ last_pane.getBoundingClientRect().left
             //  + "  scroll:  "+ window.scrollY + " y:  " + y 
              // +' dummy:  '+ dummy_x
              // + "  diff:  " + diff ;

             // document.getElementById('variables').innerHTML = 'dummy:'+ dummy_x+ "scroll:"+ window.scrollY+"dif:  "+diff;

              //scrollto: 
              /*if (diff > 0) {
                window.scrollTo(0, diff);
               
              }

              //scrollto (0, left of position of lastpane + window.scrollY)
              else if (window.scrollY == 0) {
                window.scrollTo(0, dummy_x);
               
              }
              //reverse scroll
              //else if()

*/
//offsetWidth(incl border) or clientWidth(no border)


//function vars() {
  //          document.getElementById('variables').innerHTML = 'dummy:'+ dummy_x+ "scroll:"+ window.scrollY;
//}
//getBoundingClientRect() returns the size of an element and its position relative to the viewport.
//This method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
//bluehost: https://cpanel-box5549.bluehost.com/
//us: essiccg6 
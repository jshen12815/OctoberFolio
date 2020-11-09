var expRow = document.getElementById('expRow');

window.onscroll = function () {

        if(window.matchMedia ("(min-width: 900px)").matches){
        	  // Horizontal Scroll
        	  var y = document.body.getBoundingClientRect().top;
        	  expRow.scrollLeft = -y;
            document.getElementById('variables').innerHTML = window.scrollY;
        	  
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
        	  var w = expRow.scrollWidth-window.innerWidth+window.innerHeight;
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

//Js for side scroll on Homepage
var page = document.getElementById('page');
//get page, getElementsByClassName returns an array of pane objects
var panes = page.getElementsByClassName('pane');
//cancelling out the repeated one???
//select the last pane
last_pane = panes[panes.length-1];
var dummy_x = null;



window.onscroll = function () {
        	  // Horizontal Scroll.
              //y=position of body
        	  var y = document.body.getBoundingClientRect().top;
        	  page.scrollLeft = -y;
        	  
        	  // Looping Scroll.
              //dummyx = negative (left position of lastpane +window.scrollY);
        	  var diff = window.scrollY - dummy_x;



               document.getElementById('variables').innerHTML = 'rect:   '+ last_pane.getBoundingClientRect().left
               + "  scroll:  "+ window.scrollY +' dummy:  '+ dummy_x
               + "  diff:  " + diff + "z        y:  " + y;

             // document.getElementById('variables').innerHTML = 'dummy:'+ dummy_x+ "scroll:"+ window.scrollY+"dif:  "+diff;

              //scrollto: 
        	  if (diff > 0) {
        	    window.scrollTo(0, diff);
               
        	  }

              //scrollto (0, left of position of lastpane + window.scrollY)
        	  else if (window.scrollY == 0) {
        	    window.scrollTo(0, dummy_x);
               
        	  }
        	}
        	// Adjust the body height if the window resizes.
window.onresize = resize;
        	// Initial resize.
resize();


        	// Reset window-based vars
function resize() {
        	  var w = page.scrollWidth-window.innerWidth+window.innerHeight;
        	  document.body.style.height = w + 'px';
        	  
              //left position of pane in viewport + Yscrollposition
        	  dummy_x = last_pane.getBoundingClientRect().left+window.scrollY;
        	//+window.scrollY
        	}

//function vars() {
  //          document.getElementById('variables').innerHTML = 'dummy:'+ dummy_x+ "scroll:"+ window.scrollY;
//}
//getBoundingClientRect() returns the size of an element and its position relative to the viewport.
//This method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
//bluehost: https://cpanel-box5549.bluehost.com/
//us: essiccg6 
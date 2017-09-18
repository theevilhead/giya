// This handles the slider status

var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
var slider = document.getElementsByClassName('slider-parent')[0];
var sliderBg = document.getElementsByClassName('slider-bg')[0];

var cont = document.getElementsByClassName("container")[0];

handleSlider = function(){

	if(slider.classList.contains("active")){
		slider.classList.remove("active");
		sliderBg.classList.remove("active");

		cont.classList.remove("active"); // This line is just for demo 2

	}else{
		slider.classList.add("active");
		sliderBg.classList.add("active");

		cont.classList.add("active"); // This line is just for demo 2
	}

}

sliderTrigger.addEventListener( "click" , handleSlider);

sliderBg.addEventListener("click", handleSlider);

document.addEventListener('touchstart', handleTouchStart, false);        

document.addEventListener('touchmove', handleTouchMove, false);

// This handles the touch

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    if( xDown > ((10/100)*(screen.width)) ){
    	if(!slider.classList.contains("active")){
    		return;
    	}
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            /* left swipe */ 
            slider.classList.remove("active");
			sliderBg.classList.remove("active");
        } else {
            /* right swipe */
            slider.classList.add("active");
			sliderBg.classList.add("active");
        }                       
    }
    xDown = null;
    yDown = null;                                             
};
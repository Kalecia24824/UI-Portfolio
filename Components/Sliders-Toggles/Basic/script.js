//Now we add the magic which is JS!


//To start we will need a variable that can attach itself to the slider 
const slider = document.querySelector("input[type=range]");

//Then we will add a function to update the background of the slider as it goes across the screen!
    function updateSliderBackground(slider) {

      const value = (slider.value - slider.min) / (slider.max - slider.min) * 100; /*Formula for the value calculated by dividing both factors using the slider's min and max values*/

      slider.style.background = `linear-gradient(to right, #2d0043, #1b0093, #8c009b ${value}%, #ddd ${value}%)`; /*Gradient background*/
    }

    // After finishing the formula, we initialize it like this:
    updateSliderBackground(slider);

    // Then we can update the input attribute by using an event listener to the slider element
    slider.addEventListener("input", function () {
      updateSliderBackground(this);
    });

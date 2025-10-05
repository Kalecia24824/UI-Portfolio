//In this case to activate the background, we will need a function

//This function will contain an if..else statement since the toggle is a condition 

//Let's start by defining a variable that connects to our toggle switch
const toggle = document.getElementById('toggle'); 

//Then let's make the function 
toggle.addEventListener('change', function() {
  if (this.checked){
    document.body.style.background = `linear-gradient(to bottom, #1b054eff, #0033ffff, #ce00e9ff)`; 
  }
  else {
    document.body.style.background = `linear-gradient(to bottom, #ff0000, #ff7300, #ffe100)`;
  }
});
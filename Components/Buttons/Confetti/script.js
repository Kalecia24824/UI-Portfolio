/*Goal: We need to make the confetti appear once the button is clicked. There are a few ways to do so, we just need to active the effect once the button is clicked.*/

/*Let's start by getting the id from the button to connect to the click action of an event listener*/
document.getElementById('confetti').addEventListener('click', () => {
confetti({
  particleCount: 120, 
  spread: 80, 
  origin: { y:0.6 }
});
});

/*As shown above, I created an event listener that activates when the user clicks on the button. 

Inside the event, I created an object that makes the confetti based on the particles, how far they spread and where they will be coming from the origin*/
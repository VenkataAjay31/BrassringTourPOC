 $(".welcomeContentTabContainer").append("<div class=\"GuidedTour\" onclick=\"tour.start()\">Guided Tour</div>")

const tour = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
  classes: 'shadow-md bg-purple-dark',
  scrollTo: true
}
});



//Step-1//
tour.addStep({
id : 1, 
text: 'Hey! Welcome to TinDog.',
attachTo: {
element: '#icon-link',
on: 'bottom'
},

buttons: [
{
  text: 'Next',
  action: tour.next
}
]
});

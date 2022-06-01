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
  action: tour.next()
}
]
});

//Step-2//
tour.addStep({
id : 2, 
text: 'You can pull preferred widgets from here, which will appear under widgets below.',
attachTo: {
element: 'button[icon-btn="settings"]',
on: 'bottom'
},

buttons: [
{
  text: 'Next',
  action: tour.next()
},
{
  text: 'Previous',
  action: tour.back()
}
]
});

//Step-3//
tour.addStep({
id : 3, 
text: 'In all these modernized grids we have enabled the context menu. Where you can right on a row and take actions specific to that row.',
attachTo: {
element: '#reqListGrid div.ui-grid-viewport div.ui-grid-canvas div[ui-grid-row="row"]',
on: 'bottom'
},

buttons: [
{
  text: 'Next',
  action: tour.next()
},
{
  text: 'Previous',
  action: tour.back()
}
]
});



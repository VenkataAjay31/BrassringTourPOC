$(".welcomeContentTabContainer").append("<div class=\"GuidedTour\" onclick=\"tour.start()\">Guided Tour</div>")

const tour = new Shepherd.Tour({
useModalOverlay: true,
defaultStepOptions: {
  cancelIcon:{
  enabled : true
 },
title: '<h3>Canvas Tour</h3>',


classes: 'shadow-md bg-purple-dark',
scrollTo: { 
 behavior: 'smooth', block: 'center'
}
}
});



//Step-1//
tour.addStep({
id : 1, 
text: 'Hey! Welcome to TinDog.',
attachTo: {
element: '.personalizeWidgetSwitch',
on: 'bottom'
},
buttons: [
{
  text: 'Next',
  action: tour.next
}
]
});

//Step-2//
tour.addStep({
id : 2, 
text: 'You can pull preferred widgets from here, which will appear under widgets below.',
attachTo: {
element: '#icon-settings',
on: 'bottom'
},
buttons: [
 {
  text: 'Previous',
  action: tour.back
},
{
  text: 'Next',
  action: tour.next
}
]
});

//Step-3//
tour.addStep({
id : 3, 
text: 'In all these modernized grids we have enabled the context menu. Where you can right on a row and take actions specific to that row.',
attachTo: {
element: '.welcomeWidgetActions',
on: 'bottom'
},
buttons: [
 {
  text: 'Previous',
  action: tour.back
},
{
  text: 'Next',
  action: tour.next
}
]
});

tour.addStep({
id : 4, 
text: 'You can choose output columns with selcting the columns and ordering them as needed here.',
attachTo: {
element: 'div.welcomeWidget div[aria-hidden="false"] button[icon-btn="arrowright"]',
on: 'bottom'
},
buttons: [
 {
  text: 'Previous',
  action: tour.back
},
{
  text: 'Next',
  action: tour.next
}
]
});

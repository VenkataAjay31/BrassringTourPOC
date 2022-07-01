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
text: 'Hey! Welcome to Cognizant.',
attachTo: {
element: '.x',
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
text: 'You can view the "Recommended Week-wise Udemy & Mandatory Activities Completion".',
attachTo: {
element: '.img-responsive atto_image_button_text-bottom',
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
text: 'You can view the status of your progress.',
attachTo: {
element: '#inst655',
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
text: 'You can also view your progress of both Learning Progress and Practice progress.',
attachTo: {
element: '#inst648',
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

//Step-5//
tour.addStep({
id : 5, 
text: 'Thank you ',
attachTo: {
element: '#x',
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

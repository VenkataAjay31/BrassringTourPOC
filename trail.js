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
element: '#_4rCVYtbsBZ2QseMPgbuD8A45',
on: 'bottom'
},

buttons: [
{
  text: 'Next',
  action: tour.next
}
]
});

tour.addStep({
  id:2,
  text: "this is the 1st widget",
  attachTo:{
    element:".welcomeWidget widget1",
    on: 'bottom'
  },
  
  buttons:[
    {
      text: 'Next',
      action: tour.next,
      text: "back",
      action: tour.back
    }]


})

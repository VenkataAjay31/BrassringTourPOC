const tour = new Shepherd.Tour({
 useModalOverlay: true,
 defaultStepOptions: {
 classes: 'shadow-md bg-purple-dark',
 scrollTo: true
}
});


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

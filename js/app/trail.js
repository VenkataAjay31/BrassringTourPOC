//$(".welcomeContentTabContainer").append("<div class=\"GuidedTour\" onclick=\"tour.start()\">Guided Tour</div>")

//you can do your changes in the steps below 
var tour_steps=[
  {
  "selector":"#icon-link",
  "Title":"Welcome!!",
  "HTMLText":"tindog is the place for your dongs to find their partners!!",
  "PreviousButton":false,
  "NextButton":true,
  "FinishButton":false
  },
  {
  "selector":"button[icon-btn='settings']",
  "Title":"Welcome!!",
  "HTMLText":'You can pull preferred widgets from here, which will appear under widgets below.',
  "PreviousButton":true,
  "NextButton":true,
  "FinishButton":false
  },
  {
    "selector":'#reqListGrid div.ui-grid-viewport div.ui-grid-canvas div[ui-grid-row="row"]',
    "Title":"Welcome!!",
    "HTMLText":'In all these modernized grids we have enabled the context menu. Where you can right on a row and take actions specific to that row.',
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false
  },
  {
    "selector":'.gridActionButtons button[icon-btn="settings"]',
    "Title":"Welcome!!",
    "HTMLText":'You can choose output columns with selcting the columns and ordering them as needed here. <img src="https://venkataajay31.github.io/BrassringTourPOC/images/EditDisplayIconWorkflow.gif" width="350" height="350">',
    "PreviousButton":true,
    "NextButton":false,
    "FinishButton":true
  }
]

//No need to do any changes in the below code

//creating the tour object
const tour = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
  classes: 'shadow-md bg-purple-dark',
  scrollTo: { 
 behavior: 'smooth', block: 'center'
},
  cancelIcon:{
    enabled : true
  },
  }
  });


function builtbuttons(tour_steps,step_number)
{
  let custom_buttons=[]
  if(tour_steps[step_number]['PreviousButton'])//check the status of the button 
    {
      custom_buttons.push({text: 'back',action: tour.back})//if the button id set to true,then add the button
    }
    if(tour_steps[step_number]['NextButton'])
    {
      custom_buttons.push({text: 'Next',action: tour.next})
    }
    if(tour_steps[step_number]['FinishButton'])
    {
      custom_buttons.push({text: 'Finish',action: tour.complete})
    }

    return custom_buttons;
}

//initializing a variable to access the steps
let step_number=0;

while (step_number<tour_steps.length)
{
  //checking if the selector is present in the document or not
  let selector_status = document.querySelector(tour_steps[step_number]['selector']);
  //if selector is present, we will add the step
  if (selector_status!=null)
  {
      //adding buttons according to the steps
      let custom_buttons=builtbuttons(tour_steps,step_number);
      
      //adding the step
      tour.addStep({
        id: step_number,
        title: tour_steps[step_number]['Title'],
        text: tour_steps[step_number]['HTMLText'],
        attachTo: {
          element: tour_steps[step_number]['selector'],
          on: 'bottom'
        },
        buttons: custom_buttons
      });
    }
  //going to the next step
  step_number++;
}
  

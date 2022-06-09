//////////////
$(".welcomeContentTabContainer").append("<div class=\"GuidedTour\" onclick=\"HomeTour.start()\">Guided Tour</div>")

////////////objects that consist the data of the steps/////////////////////

//you can do your changes in the steps below 
var requisitions_tour_steps={
  "Steps":[
  {
    "selector":"#x",
    "Title":"About Requisitions page...",
    "HTMLText":"Do you wanna continue to explore this page?",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":true,
    "whenTourHandedOver": true
  },
  {
    "selector":".reqStatusToggle.ng-scope",
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false
  },
],
NextTour: ""
}

var home_tour_steps={
  "Steps":[
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
      "selector":'a.welcomeContentTabs span[icon-btn="folders"]',
      "Title":"Welcome!!",
      "HTMLText":'Click here to explore requisitions section',
      "PreviousButton":false,
      "NextButton":false,
      "FinishButton":false,
    }
  ],
  NextTour: 'RequisitionsTour'
  }
  
//////////////customizing the buttons according to the steps/////////////////

  function builtbuttons(tour,home_tour_steps,step_number)
  {
    let custom_buttons=[]
    if(home_tour_steps[step_number]['PreviousButton'])//check the status of the button 
      {
        custom_buttons.push({text: 'back',action: tour.back})//if the button id set to true,then add the button
      }
      if(home_tour_steps[step_number]['NextButton'])
      {
        custom_buttons.push({text: 'Next',action: tour.next})
      }
      if(home_tour_steps[step_number]['FinishButton'])
      {
        custom_buttons.push({text: 'Finish',action: tour.complete})
      }
  
      return custom_buttons;
  }


/////////////////////initializing tour objects///////////////////////////

let HomeTour = createTour(home_tour_steps);
let RequisitionsTour = createTour(requisitions_tour_steps);

//////////////////////////cresting tour objects/////////////////////////////////

function createTour(steps)
{
  var tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
    cancelIcon: {
      enabled: true
    },
    classes: 'shadow-md bg-purple-dark',
    scrollTo: {
      behavior: 'auto', block: 'center'
    }}});
tour = addSteps(tour,steps);
return tour;
}

///////////////////adding steps to the tour////////////////////////

function addSteps(tour,definedSteps)
{
  //initializing a variable to access the steps
step_number=0;

while (step_number<definedSteps.Steps.length)
{
  //checking if the selector is present in the document or not
  ////let selector_status = document.querySelector(definedSteps.Steps[step_number]['selector']);
  //if selector is present, we will add the step
  ////if (selector_status!=null)
  ////{
      //adding buttons according to the steps
      let custom_buttons=builtbuttons(tour,definedSteps.Steps,step_number);
      
      //adding the step
      if(step_number!=(definedSteps.Steps.length-1))
      {
        tour.addStep({
          id: step_number,
          title: definedSteps.Steps[step_number]['Title'],
          text: definedSteps.Steps[step_number]['HTMLText'],
          attachTo: {
            element: definedSteps.Steps[step_number]['selector'],
            on: 'bottom'
          },
          buttons: custom_buttons
        });
      }
      else
      {
        tour.addStep({
          id: step_number,
          title: definedSteps.Steps[step_number]['Title'],
          text: definedSteps.Steps[step_number]['HTMLText'],
          attachTo: {
            element: definedSteps.Steps[step_number]['selector'],
            on: 'bottom'
          },
          buttons: custom_buttons,
          when: {
            show: () => document
              .querySelectorAll('a.welcomeContentTabs span[icon-btn="folders"]')
              .forEach(b => b.addEventListener("click", function(){
                tour.complete();
                if(definedSteps.NextTour=="RequisitionsTour")
                {
                  RequisitionsTour.start();
                }
              }))
          }
        });
      }

    ////}
  //going to the next step
  step_number++;
}
return tour;
}

//////////////
$(".welcomeContentTabContainer").append("<div class=\"GuidedTour\" onclick=\"HomeTour.start()\">Guided Tour</div>")

////////////objects that consist the data of the steps/////////////////////

//you can do your changes in the steps below 
var requisitions_tour_steps={
  "Steps":[
  {
    "Selector":"#x",
    "Title":"About Requisitions page...",
    "HTMLText":"Do you wanna continue to explore this page?",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":true,
    "Position" :'bottom'
  },
  {
    "Selector":".reqStatusToggle.ng-scope",
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":false,
    "FinishButton":true,
    "Position" :'bottom'
  },
],
NextTour: ""
}

var home_tour_steps={
  "Steps":[
    {
    "Selector":".personalizeWidgetSwitch",
    "Title":"Welcome!!",
    "HTMLText":"tindog is the place for your dongs to find their partners!!",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
    },
    {
    "Selector":"#icon-settings",
    "Title":"Welcome!!",
    "HTMLText":'You can pull preferred widgets from here, which will appear under widgets below.',
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
    },
    {
      "Selector":'.welcomeWidgetActions',
      "Title":"Welcome!!",
      "HTMLText":'In all these modernized grids we have enabled the context menu. Where you can right on a row and take actions specific to that row.',
      "PreviousButton":true,
      "NextButton":true,
      "FinishButton":false,
      "Position" :'bottom'
    },
    {
      "Selector":'div.welcomeWidget div[aria-hidden="false"] button[icon-btn="arrowright"]',
      "Title":"Welcome!!",
      "HTMLText":'Click here to explore requisitions section',
      "PreviousButton":true,
      "NextButton":true,
      "FinishButton":false,
      "Position" :'bottom'
    },
    {
      "Selector":'a.welcomeContentTabs:nth-child(2)',
      "Title":"Welcome!!",
      "HTMLText":'Click here to explore requisitions section',
      "PreviousButton":false,
      "NextButton":false,
      "FinishButton":false,
      "Position" :'bottom'
    }
  ],
  NextTour: 'RequisitionsTour'
  }
  
//////////////customizing the buttons according to the steps/////////////////

  function builtbuttons(tour,tour_steps,step_number)
  {
    let custom_buttons=[]
    if(tour_steps[step_number]['PreviousButton'])//check the status of the button 
      {
        custom_buttons.push({text: 'back',action: tour.back})//if the button id set to true,then add the button
      }
      if(tour_steps[step_number]['NextButton'])
      {
        custom_buttons.push({text: 'Next',action()
        { /////check if the next element is present
          if((document.querySelector(tour_steps[step_number+1]['Selector']))!=null)
          {
            tour.next();
          }
          else// if the element is not found, the step is removed 
          {
            tour.removeStep(step_number+1);
            tour.next();
          }
        }})
      }
      if(tour_steps[step_number]['FinishButton'])
      {
        custom_buttons.push({text: 'Finish',action: tour.complete})
      }
  
      return custom_buttons;
  }


/////////////////////initializing tour objects///////////////////////////

let HomeTour = createTour(home_tour_steps);
let RequisitionsTour = createTour(requisitions_tour_steps);

//////////////////////////creating tour objects/////////////////////////////////

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
  //checking if the Selector is present in the document or not
  ////let Selector_status = document.querySelector(definedSteps.Steps[step_number]['Selector']);
  //if Selector is present, we will add the step
  ////if (Selector_status!=null)
  ////{
      //adding buttons according to the steps
      let custom_buttons=builtbuttons(tour,definedSteps.Steps,step_number);
      let check_selector=definedSteps.Steps[step_number]['Selector'];
      //adding the step
      if(step_number!=(definedSteps.Steps.length-1))
      {
        tour.addStep({
          id: step_number,
          title: definedSteps.Steps[step_number]['Title'],
          text: definedSteps.Steps[step_number]['HTMLText'],
          attachTo: {
            element: definedSteps.Steps[step_number]['Selector'],
            on: definedSteps.Steps[step_number]['Position']
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
            element: definedSteps.Steps[step_number]['Selector'],
            on: definedSteps.Steps[step_number]['Position']
          },
          buttons: custom_buttons,
          when: {
            show: () => 
            document
              .querySelectorAll(check_selector)
              .forEach(b => b.addEventListener("click", function(){
                tour.complete();
                if(definedSteps.NextTour=="RequisitionsTour")
                {
                  var interval = setInterval(function () {
                    if (document.querySelector('div[aria-hidden="false"].breadCrumbContainer.breadCrumbPages')) {
                        clearInterval(interval);
                        RequisitionsTour.start();
                    }
                }, 100);
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

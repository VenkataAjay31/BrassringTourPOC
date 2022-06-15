
$(".welcomeContentTabContainer").append("<div class=\"GuidedTour\" onclick=\"HomeTour.start()\">Guided Tour</div>")

////////////objects that consist the data of the steps/////////////////////

//you can do your changes in the steps below 

  
var my_candidates_tour_steps={
  "Steps":[
      {
          "Selector":"#x",
          "Title":"About My_Candidates",
          "HTMLText":"Do you wanna continue to explore this page?",
          "PreviousButton":false,
          "NextButton":true,
          "FinishButton":true,
          "Position" :'bottom'   
      },
      {
          "Selector":'.ui-grid-contents-wrapper div[role="grid"]:nth-child(2) .ui-grid-canvas .ui-grid-row.row-0 div[role="gridcell"]:nth-child(4)',
          "Title":"Welcome!!",
          "HTMLText":'Click on the talent record link to get redesigned talent record',
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom'
      },
    ],
    NextTour: "TalentRecordTour"
}
var talent_record={
    "Steps":[
        {
            "Selector":'#x',
            "Title":"Welcome!!",
            "HTMLText":'This is redesigned talent record',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.widgetTabLink',
            "Title":"Welcome!!",
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'personalizeWidgetContainer.personalizeColumnContainer.show',
            "Title":"Welcome!!",
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":' .widgetTab.tab2',
            "Title":"notes",
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.collabAddNote.ng-scope',
            "Title":"Collaborative_notes",
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.widgetTabsContent .widgetTab.tab1.active',
            "Title":'profile',
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
  
        {
            "Selector":'.widgetTab.tab5',
            "Title":"submissions tab",
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.widgetTab.tab6.active',
            "Title":"sIntegrations_tab",
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.widgetTab.tab7.active',
            "Title":'ReqSpecificView_tab',
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'button[icon-btn="settings"].icon-btn.actionLink',
            "Title":'Overview settings icon',
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.widgetItemCards .widgetItemCard.offerItemCard.ng-scope',
            "Title":'offer widget',
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.widgetItemCardAddOption',
            "Title":'Add_cards',
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.widgetItemCardAddOption',
            "Title":'Add_cards',
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.widgetTabsContent .widgetTab.tab1.active',
            "Title":'profile',
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        
        {
            "Selector":'button[icon-btn="flow"].icon-btn.icon-small',
            "Title":'flow',
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.candidateNavButtons',
            "Title":'previous_candidate and next_cadidate',
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
    ],
    NextTour: ""
  }
      

var total_link_tour_steps={
  "Steps":[
    {}],
    NextTour:""
}


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
    "HTMLText":"You can choose the desired req status all on the same page",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":"#gridStatusFilter-button",
    "Title":"About Requisitions page...",
    "HTMLText":"Here you can choose 'All Reqs' or 'My Reqs'. This will be applied in conjunction with the Req Status you choose above.",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'#reqListGrid div[role="grid"]:nth-child(2) .ui-grid-canvas .ui-grid-row.row-0',
    "Title":"About Requisitions page...",
    "HTMLText":"Click anywhere on your chosen row and the context menu will appear, with different actions that you can take on that row. Also the actions are now grouped as per the behavior. ",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div[role="rowgroup"] div[class="ui-grid-canvas"]',
    "Title":"About Requisitions page...",
    "HTMLText":"Choose the rows from their respective check boxes and you will see the action header(with grouped actions) dynamically popping above the grid.",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.gridFilterActions [icon-btn="filter"]',
    "Title":"About Requisitions page...",
    "HTMLText":"Save, Manage and Apply your filters all in the same place.",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.gridFilterInput [icon-btn="search"]',
    "Title":"About Requisitions page...",
    "HTMLText":"Filter the grid in your view easily from this quick filter.",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.gridActionButtons [icon-btn="export"]',
    "Title":"About Requisitions page...",
    "HTMLText":"This will easily export the grid to excel.",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.gridActionButtons [ng-if="showAddReqAction"]',
    "Title":"About Requisitions page...",
    "HTMLText":"Launching Add req is too easy now.",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.gridActionButtons [icon-btn="settings"]',
    "Title":"About Requisitions page...",
    "HTMLText":"The display columns in the grid can be picked from here in your desired order.",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":".gridPagination",
    "Title":"About Requisitions page...",
    "HTMLText":"You can easily choose 'Items per page' and  go to your 'Desired Page' from this Grid Paginator.",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div[id="1655195476068-0-uiGrid-00WM-cell"] div[compile-html="row.entity[col.field]"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
/////////////////////
  {
    "Selector":'div.gridActionButtons [icon-btn="flow"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.widgetStatusCircleContainer [ng-click="selectWidgetStatus(status)"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.welcomeWidget div[aria-hidden="false"] button[icon-btn="arrowright"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div[id="1655103910080-0-uiGrid-00HG-cell"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.gridActionButtons [icon-btn="card"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.kanbanStepButtons button[icon-btn="angleright"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.kanbanStepButtons button[icon-btn="angleleft"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":"a.welcomeContentTabs:nth-child(3)",
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":false,
    "FinishButton":false,
    "Position" :'bottom'
  }

],
NextTour: "MyCandidatesTour"
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
let MyCandidatesTour = createTour(my_candidates_tour_steps)
let TotalLinkTour=createTour(total_link_tour_steps)
let TalentRecordTour = createTour(talent_record)

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
                if(definedSteps.NextTour=="TotalLinkTour")
                {
                  var interval = setInterval(function () {
                    if (document.querySelector('div[aria-hidden="false"].breadCrumbContainer.breadCrumbPages')) {
                        clearInterval(interval);
                        TotalLinkTour.start();
                    }
                }, 100);
                }
                if(definedSteps.NextTour=="MyCandidatesTour")
                {
                  var interval = setInterval(function () {
                    if (document.querySelector('div[aria-hidden="false"].breadCrumbContainer.breadCrumbPages')) {
                        clearInterval(interval);
                        MyCandidatesTour.start();
                    }
                }, 100);
                }
                if(definedSteps.NextTour=="TalentRecordTour")
                {
                  var interval = setInterval(function () {
                    if (document.querySelector('div[aria-hidden="false"].breadCrumbContainer.breadCrumbPages')) {
                        clearInterval(interval);
                        TalentRecordTour.start();
                    }
                }, 100);
                }
              },{once:true}))
          }
        });

      }
  //going to the next step
  step_number++;
}
return tour;
}

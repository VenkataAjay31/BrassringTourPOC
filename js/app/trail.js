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
          "Position" :'bottom' ,
          "CanClickTarget": true,
          "Trigger": false,
          "NavigateTo" : ""  
      },
      {
          "Selector":'.ui-grid-contents-wrapper div[role="grid"]:nth-child(2) .ui-grid-canvas .ui-grid-row.row-0 div[role="gridcell"]:nth-child(4) .trlink.tooltip.candname',
          "Title":"Talent Record link",
          "HTMLText":"Select a candidate's name to view redesigned talent record and its tour.",
          "PreviousButton":false,
          "NextButton":false,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": true,
          "NavigateTo" : "NextTour"
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
            "PreviousButton":false,
            "NextButton":true,
            "FinishButton":true,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'.widgetTabData',
            "Title":"All Tabs",
            "HTMLText":'We reimagined the entire set of tabs for a new look.',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'personalizeWidgetContainer.personalizeColumnContainer.show',
            "Title":"Welcome!!",
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":' .widgetTab.tab2',
            "Title":"Click on notes tab",
            "HTMLText":'The Notes has a host of new features. Select the type of notes you want to make.',
            "PreviousButton":false,
            "NextButton":false,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": true,
            "NavigateTo" : "NextStep"
        },
        {
            "Selector":'.collabAddNote.ng-scope',
            "Title":"Collaborative_notes",
            "HTMLText":'The Notes has a host of new features. Select the type of notes you want to make.',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'.widgetTab.tab5',
            "Title":"submissions tab",
            "HTMLText":'Edit Tabs',
            "PreviousButton":false,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'.widgetTab.tab6',
            "Title":"sIntegrations_tab",
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'.widgetTab.tab7',
            "Title":'click on ReqSpecificView_tab',
            "HTMLText":'Edit Tabs',
            "PreviousButton":false,
            "NextButton":false,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": true,
            "NavigateTo" : "NextStep"
        },
        {
            "Selector":'button[icon-btn="settings"].icon-btn.actionLink',
            "Title":'Overview settings icon',
            "HTMLText":'Edit Tabs',
            "PreviousButton":false,
            "NextButton":false,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": true,
            "NavigateTo" : "NextStep"
        },
        {
          "Selector":'.widgetItemCardAddOption',
          "Title":'Add_cards',
          "HTMLText":'Edit Tabs',
          "PreviousButton":true,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": false,
          "NavigateTo" : ""
      },
        {
            "Selector":'.widgetItemCards .widgetItemCard.offerItemCard.ng-scope',
            "Title":'offer widget',
            "HTMLText":'Edit Tabs',
            "PreviousButton":false,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
          "Selector":'button[icon-btn="flow"].icon-btn.icon-small',
          "Title":'flow',
          "HTMLText":'Edit Tabs',
          "PreviousButton":false,
          "NextButton":true,
          "FinishButton":false,
          "Position" :'bottom',
          "CanClickTarget": true,
          "Trigger": false,
          "NavigateTo" : ""
        },
        {
            "Selector":'.widgetTabsContent .widgetTab.tab1',
            "Title":'profile',
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom',
            "CanClickTarget": true,
            "Trigger": false,
            "NavigateTo" : ""
        },
        {
            "Selector":'.candidateNavButtons',
            "Title":'Talent Record - Previous Candidate/Next Candidate',
            "HTMLText":'Navigate among the candidates in the grid without having to go back to the grid, using the previous and next buttons.',
            "PreviousButton":true,
            "NextButton":false,
            "FinishButton":true,
            "Position" :'bottom',
            "CanClickTarget": false,
            "Trigger": false,
           "NavigateTo" : "NextTour"
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
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":".reqStatusToggle.ng-scope",
    "Title":"Req Status.",
    "HTMLText":"Choose All Statuses or a specific status to view the Reqs in that status and then toggle between All Reqs and My Reqs below.",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":"#gridStatusFilter-button",
    "Title":"All Vs My",
    "HTMLText":'Here you can choose "All Reqs" or "My Reqs". This is applied in conjunction with the Req Status you choose above.',
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'#reqListGrid div[role="grid"]:nth-child(2) .ui-grid-canvas .ui-grid-row.row-0',
    "Title":"Single Row Actions",
    "HTMLText":'Right Click anywhere on any row of the grid and a context menu appears. Various actions that you can take on that row are displayed. Also, actions are grouped into appropriate categories.',
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'#reqListGrid div[role="grid"]:nth-child(1) .ui-grid-canvas .ui-grid-row.row-0',
    "Title":"Multiple Row Actions",
    "HTMLText":"Select either a single row or multiple rows to see the action header dynamically popping above the grid. This header displays all the actions you can take based on your selection (grouped into appropriate categories).",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div.gridFilterActions [icon-btn="filter"]:not(.ng-hide)',
    "Title":"Saved Filters",
    "HTMLText":"Save, Manage and Apply your filters all in the same place.",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div.gridFilterButtonHeader',
    "Title":"Saved Filters",
    "HTMLText":"Save, Manage and Apply your filters all in the same place.",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div.gridFilterInput [icon-btn="search"]',
    "Title":"Filter Visible Grid (Search icon)",
    "HTMLText":"Filter the grid in your view easily from this quick filter.",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div.gridActionButtons [icon-btn="export"]',
    "Title":"Export to Excel",
    "HTMLText":"Select this icon to export the grid to MS Excel.",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div.gridActionButtons [ng-if="showAddReqAction"]',
    "Title":"jbwhfb",
    "HTMLText":"Launching Add req is too easy now.",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div.gridActionButtons [icon-btn="settings"]',
    "Title":"Personalize Columns",
    "HTMLText":"Choose and re-order the columns of your grid from here.",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
/////////////////////
   {
    "Selector":'.candcnt_total.candidateCount:nth-child(1)',
    "Title":"Total Link",
    "HTMLText":"Click here to launch candidates inside the req",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": true,
    "NavigateTo" : "NextStep"
  },

  {
    "Selector":'div.gridActionButtons [icon-btn="flow"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div.widgetStatusCircleContainer [ng-click="selectWidgetStatus(status)"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div.welcomeWidget div[aria-hidden="false"] button[icon-btn="arrowright"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div[id="1655103910080-0-uiGrid-00HG-cell"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div.gridActionButtons [icon-btn="card"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div.kanbanStepButtons button[icon-btn="angleright"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":'div.kanbanStepButtons button[icon-btn="angleleft"]',
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
  },
  {
    "Selector":"a.welcomeContentTabs:nth-child(3)",
    "Title":"About Requisitions page...",
    "HTMLText":"you can search files according to their status",
    "PreviousButton":false,
    "NextButton":false,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": true,
    "NavigateTo" : "NextTour"
  }

],
NextTour: "MyCandidatesTour"
}

var home_tour_steps={
  "Steps":[
    {
    "Selector":".personalizeWidgetSwitch",
    "Title":"Toggle Light/Dark Mode",
    "HTMLText":"You can now choose your preferred mode from Light and Dark modes, where all the pages in our application respects your preference every time you login.",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
    },
    {
    "Selector":"#icon-settings",
    "Title":"Handy Widgets",
    "HTMLText":'Select the widgets that you’d like to see on the homepage. Choose from existing widgets or customize.',
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom',
    "CanClickTarget": true,
    "Trigger": false,
    "NavigateTo" : ""
    },
    {
      "Selector":'.welcomeWidgetActions',
      "Title":"Filter Date Range",
      "HTMLText":'Select the calendar icon to customize the date range for each widget. The widget remembers your choice until you change the date range.',
      "PreviousButton":true,
      "NextButton":true,
      "FinishButton":false,
      "Position" :'bottom',
      "CanClickTarget": true,
      "Trigger": false,
      "NavigateTo" : ""
    },
    {
      "Selector":'div.welcomeWidget div[aria-hidden="false"] button[icon-btn="arrowright"]',
      "Title":"Expand to Grid",
      "HTMLText":'Select this icon to see the detailed view of any widget. This opens either a grid or a page that has more information.',
      "PreviousButton":true,
      "NextButton":true,
      "FinishButton":false,
      "Position" :'bottom',
      "CanClickTarget": true,
      "Trigger": false,
      "NavigateTo" : ""
    },
    {
      "Selector":'a.welcomeContentTabs:nth-child(2)',
      "Title":"Reqs",
      "HTMLText":'Select this link and tour the requisition section.',
      "PreviousButton":false,
      "NextButton":false,
      "FinishButton":false,
      "Position" :'bottom',
      "CanClickTarget": true,
      "Trigger": true,
      "NavigateTo" : "NextTour"
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
        custom_buttons.push({text: 'Previous',action()
        { /////check if the next element is present
          if((document.querySelector(tour_steps[step_number-1]['Selector']))!=null)
          {
            tour.back();
          }
          else// if the element is not found, the step is removed 
          {
            let i=step_number-1;
            while ((document.querySelector(tour_steps[i]['Selector']))==null)
            {
              i--;
            }
            tour.show(i);
          }
        }})//if the button id set to true,then add the button
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
            let i=step_number+1;
            while ((document.querySelector(tour_steps[i]['Selector']))==null)
            {
              i++;
            }
            tour.show(i);
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

let active_tour=HomeTour;

//////////////////////////////////////
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
      console.log('Esc key pressed.');
      if (active_tour.isActive())
      {
        active_tour.complete();
      }
      active_tour=HomeTour;
  }
};
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
      if(definedSteps.Steps[step_number]['Trigger']==false)
      {
        tour.addStep({
          id: step_number,
          title: '<h3>'+definedSteps.Steps[step_number]['Title']+'</h3>',
          text: definedSteps.Steps[step_number]['HTMLText'],
          attachTo: {
            element: definedSteps.Steps[step_number]['Selector'],
            on: definedSteps.Steps[step_number]['Position']
          },
          canClickTarget:definedSteps.Steps[step_number]['CanClickTarget'],
          buttons: custom_buttons
        });
      }
      else
      {
        let next_selector;
        if (definedSteps.Steps[step_number]['NavigateTo']=="NextStep")
        {
          next_selector=definedSteps.Steps[step_number+1]['Selector'];
        }
        let navigate=definedSteps.Steps[step_number]['NavigateTo'];
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
                if(navigate=="NextStep")//checking if the trigger is for nextstep
                {
                  var interval = setInterval(function () {
                    if (document.querySelector(next_selector)) {
                        clearInterval(interval);
                        tour.next();
                    }
                }, 100);
                }
                else//if the trigger is for nexttour
                {
                  tour.complete();
                  if(definedSteps.NextTour=="RequisitionsTour")
                  {
                    var interval = setInterval(function () {
                      if (document.querySelector('div[aria-hidden="false"].breadCrumbContainer.breadCrumbPages')) {
                          clearInterval(interval);
                          active_tour=RequisitionsTour;
                          RequisitionsTour.start();
                      }
                  }, 100);
                  }
                  if(definedSteps.NextTour=="TotalLinkTour")
                {
                  var interval = setInterval(function () {
                    if (document.querySelector('div[aria-hidden="false"].breadCrumbContainer.breadCrumbPages')) {
                        clearInterval(interval);
                        active_tour=TotalLinkTour;
                        TotalLinkTour.start();
                    }
                }, 100);
                }
                if(definedSteps.NextTour=="MyCandidatesTour")
                {
                  var interval = setInterval(function () {
                    if (document.querySelector('div[aria-hidden="false"].breadCrumbContainer.breadCrumbPages')) {
                        clearInterval(interval);
                        active_tour=MyCandidatesTour;
                        MyCandidatesTour.start();
                    }
                }, 100);
                }
                if(definedSteps.NextTour=="TalentRecordTour")
                {
                  var interval = setInterval(function () {
                    if (document.querySelector('.widgetTabData')) {
                        clearInterval(interval);
                        active_tour=TalentRecordTour;
                        TalentRecordTour.start();
                    }
                }, 100);
                }
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

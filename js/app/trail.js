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
          "Title":"Talent Record link",
          "HTMLText":'Select a candidate’s name to view redesigned talent record and its tour.',
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
            "Title":"All Tabs",
            "HTMLText":'We reimagined the entire set of tabs for a new look.',
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
            "Title":"Click on notes tab",
            "HTMLText":'The Notes has a host of new features. Select the type of notes you want to make.',
            "PreviousButton":false,
            "NextButton":false,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.collabAddNote.ng-scope',
            "Title":"The Notes has a host of new features. Select the type of notes you want to make.",
            "HTMLText":'Edit Tabs',
            "PreviousButton":true,
            "NextButton":true,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.widgetTabsContent .widgetTab.tab1',
            "Title":'Click on profile tab',
            "HTMLText":'Edit Tabs',
            "PreviousButton":false,
            "NextButton":false,
            "FinishButton":false,
            "Position" :'bottom'
        },
  
        {
            "Selector":'.widgetTab.tab5',
            "Title":"Click on submissions tab",
            "HTMLText":'Edit Tabs',
            "PreviousButton":false,
            "NextButton":false,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.widgetTab.tab6',
            "Title":"Click on integrations tab",
            "HTMLText":'Edit Tabs',
            "PreviousButton":false,
            "NextButton":false,
            "FinishButton":false,
            "Position" :'bottom'
        },
        {
            "Selector":'.widgetTab.tab7',
            "Title":'Click on ReqSpecific View',
            "HTMLText":'Edit Tabs',
            "PreviousButton":false,
            "NextButton":false,
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
            "Title":'Talent Record - Previous Candidate/Next Candidate',
            "HTMLText":'Navigate among the candidates in the grid without having to go back to the grid, using the previous and next buttons.',
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
    "Title":"Requisitions page",
    "HTMLText":"Would you like to continue the tour in requistions page?",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":true,
    "Position" :'bottom'
  },
  {
    "Selector":".reqStatusToggle.ng-scope",
    "Title":"Req Status",
    "HTMLText":"Choose All Statuses or a specific status to view the Reqs in that status and then toggle between All Reqs and My Reqs below.",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":"#gridStatusFilter-button",
    "Title":"All Vs My",
    "HTMLText": 'Here you can choose "All Reqs" or "My Reqs". This is applied in conjunction with the Req Status you choose above.',
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'#reqListGrid div[role="grid"]:nth-child(2) .ui-grid-canvas .ui-grid-row.row-0',
    "Title":"Single Row Actions",
    "HTMLText":"Right Click anywhere on any row of the grid and a context menu appears. Various actions that you can take on that row are displayed. Also, actions are grouped into appropriate categories.",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div[role="rowgroup"] div[class="ui-grid-canvas"]',
    "Title":"Multiple Row Actions",
    "HTMLText":"Select either a single row or multiple rows to see the action header dynamically popping above the grid. This header displays all the actions you can take based on your selection (grouped into appropriate categories).",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.gridFilterActions [icon-btn="filter"]',
    "Title":"Saved Filters",
    "HTMLText":"Save, Manage and Apply your filters all in the same place.",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.gridFilterInput [icon-btn="search"]',
    "Title":"Filter Visible Grid (Search icon)",
    "HTMLText":"Filter the grid in your view easily from this quick filter.",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.gridActionButtons [icon-btn="export"]',
    "Title":"Export to Excel",
    "HTMLText":"Select this icon to export the grid to MS Excel.",
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
  },
  {
    "Selector":'div.gridActionButtons [icon-btn="settings"]',
    "Title":"Personalize Columns",
    "HTMLText":"Choose and re-order the columns of your grid from here.",
    "PreviousButton":true,
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
    "Position" :'bottom',
    "IfNullSkipRemainingTour": true
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
    "Title":"Talent Record",
    "HTMLText":"Select a candidate’s name to view redesigned talent record and its tour. ",
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
    "Title":"Toggle Light/Dark Mode ",
    "HTMLText":"You can now choose your preferred mode from Light and Dark modes, where all the pages in our application respects your preference every time you login.",
    "PreviousButton":false,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
    },
    {
    "Selector":"#icon-settings",
    "Title":"Handy Widgets",
    "HTMLText":'Select the widgets that you’d like to see on the homepage. Choose from existing widgets or customize.',
    "PreviousButton":true,
    "NextButton":true,
    "FinishButton":false,
    "Position" :'bottom'
    },
    {
      "Selector":'.welcomeWidgetActions',
      "Title":"Filter Date Range",
      "HTMLText":'Select the calendar icon to customize the date range for each widget. The widget remembers your choice until you change the date range.',
      "PreviousButton":true,
      "NextButton":true,
      "FinishButton":false,
      "Position" :'bottom'
    },
    {
      "Selector":'div.welcomeWidget div[aria-hidden="false"] button[icon-btn="arrowright"]',
      "Title":"Expand to Grid ",
      "HTMLText":'Select this icon to see the detailed view of any widget. This opens either a grid or a page that has more information.',
      "PreviousButton":true,
      "NextButton":true,
      "FinishButton":false,
      "Position" :'bottom'
    },
    {
      "Selector":'a.welcomeContentTabs:nth-child(2)',
      "Title":"Reqs",
      "HTMLText":'Select this link and tour the requisition section.',
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

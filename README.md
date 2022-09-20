# Capstone2
Political Informant App - Easily research politicians currently holding office in the US Senate and House of Representatives

## Goals
- Create an app that gives a quick overview of Congress and all members included. Focusing on the most recent major bill votes submitted and statements made.
- All US voters will find this app usefull as a quick overview (May add links to get further information)

## Overview
The Political Informant App will allow anyone to easily review polititians currently in office. Information shown will included:
- Picture
- General Information
  - Name
  - State
  - Number of Years served
  - Etc.
- Voting Record
  - Attendence for votes for the year
  - List of recent votes submitted - Only showing major bill pass/fails
- Statements made
  - List of recent public statements
 
 The focus is on the front-end UI and presentation of the app. It should flow well, be intutive in how it opperates, and will be a single-page application.
 
---

## Tech Stack
- React - Handle user interface
- Node.js - Handle logic
- Redux - State management
- API used: [ProPublica Congress API](https://projects.propublica.org/api-docs/congress-api/)
  - Limited to 5000 Requests per day
  - On off chance request limit is hit for any day - show error to user w/ explination


## Outline
Create basic skeleton structure of app

### Note:
There is no backend Database for this application. All information will be pulled from the ProPublica API. No login needed. This app is purely informational and focuses on the front-end UI and presentation. Will include consolidation of information pulled from API -> Data necessary to display.

WIREFRAME IMAGE GOES HERE :D

- App container
  - Nav Bar
    - App Name
    - Toggle for Senate / House of Reps
  - Congress Container
    - Shows Senate / House of Reps based on toggle status
    - Shows each member as a circle colored Red / Blue / Green
    - Hover over a circle will show small Tooltip with basic info
      - Name
      - State
      - Party
    - Clicking a circle will highlight it and show additional information below this container
  - Member Information Container
    - Displays data on selected member of congress.
      - Picture
      - Name
      - Age
      - State
      - Party
      - Years Served
      - Social Media Links where applicable
        - Twitter
        - Facebook
        - Youtube
        - Gov page
      - Bills Sponsored / Co-Sponsored
      - Committees Participating On
      - Recent Voting Record - Only Major Bill Pass/Fail votes
        - Vote % With / Against party
      - Recent Statements made - Includes links to more info on each statement
      - Link to more information (if applicable)
    - Toggleing Senate / House of Reps clears this section
    
## State structure
{

  "mainDisplay": "Senate" // options: "Senate, "House",
  
  "SenateMembers": [Array of senate members from API],
  
  "HouseMembers": [Array of House Members from API],
  
  "MemberInfo": {Object containing selected member info}
  
}
### SenateMembers / HouseMembers Data Structure
{
  
   "name": "Member Name",
    
   "state": "State Name",
    
   "party": "Dem" / "Rep" / "Ind"
  
}, 
For all members of Senate/House

### MemberInfo Data Structure
{

  "name": "Member Name"

}

TBD as I work with API raw data

## App Logic Flow
- Initial Load
  - Default to Senate Display
  - One API request for all members of Senate
    - Consolidate Raw Data to only what is necessary for app
      - TBD
  - Request Resolved + Consolidated: Display the Senate Container
  - Member Information Section is not rendered
- Member Selected (Note: Cannot re-select the same member. Disables click for selected member)
  - Send off all necessary API requests asynchronously
  - Consolidate Data as requests resolve
  - Once all requests are resolved: Display Member Information Container
- Select Another Member
  - Repeat above steps

## Stretch Goals
- Adding smooth animations and transitions
- Adding a live vote display
- Adding local cacheing for API requests. Cleared when app is closed.
  - Avoids duplicate API requests for single instance of app
  - Cut down on # of requests attached to my API key per day
  - EX: Initial Load -> 1 API request for Senate Members -> Toggle to House -> 1 API request for House Members -> Toggle back to Senate -> Pulls information from previous API Senate Member request instead of firing off fresh API request for Senate Members.
  - EX2: Initial Load -> 1 API request for Senate Members -> Select Memeber A -> Multiple Async API Requests for Info on Member A -> Select Member B -> Multiple Async API Requests for Info on Member B -> Select Member A again -> Pulls info from previous response on Member A instead of firing off new API Requests for Member A
- Adding a third option to the toggle (No more toggle, more like dropdown)
  - Current election Races
  - Shows map of US in Congress Container
    - Hover over a state to show tooltip of basic information
      - State
      - Number of Republican Candidates
      - Number of Democratic Candidates
      - Number of Independant Candidates where applicable
    - Click a state to get additional Information
      - Republican Race Tab
        - Shows all the candidates running for the republican party
        - Clicking one brings up additional information on that candidate
      - Democrat Race Tab
      - Independant Race Tab
- Adding a fourth option to the drowpdown
  - Shows Current Presidentail Race Details
  - When a Presidential Race is not active, shows details of last Presidential Race

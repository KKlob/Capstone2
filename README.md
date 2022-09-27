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
- React-Bootstrap - Handle styling
- Redux - State management
- API used: 
  - [ProPublica Congress API](https://projects.propublica.org/api-docs/congress-api/)
    - Limited to 5000 Requests per day
    - On off chance request limit is hit for any day - show error to user w/ explination
  - [Congress.gov API](https://api.congress.gov/#/)
    - Used to get Member Photo URL
    - Uses same ID system as ProPublica
    - More limited than ProPublica API
    - Base URL: https://api.congress.gov/v3/
    - In header: X-Api-Key: API_KEY


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
      - Vote % With / Against party
      - Recent Statements made - Includes links to more info on each statement
      - Link to more information (if applicable)
    - Toggleing Senate / House of Reps clears this section
    
## ProPublica Data Structure
- Senate Data
  - response.results[0].congress | Congress Number
  - ...[0].chamber | "Senate" or "House"
  - ...[0].members | Array of all members of Senate
  
- From response.results[0].members
  - Each item = Member Object
  - memberObj.id | Member ID
  - memberObj.first_name + .last_name | Member Full Name
  - memberObj.date_of_birth | Member DoB
  - memberObj.party | Member Party
  - memberObj.twitter_account
  - memberObj.facebook_account
  - memberObj.youtube_account
  - memberObj.url | Member Gov URL
  - memberObj.votes_with_party_pct | Member Vote with Party %
  - 
  - memberObj.api_uri | URL for fetching single member data
    - response.results[0].roles[0] = Most recent Congress served in
      - ...[0].bills_sponsored | Member's # of sponsored bills
      - ...[0].bills_cosponsored | Co-Sponsored Bills
      - 
      - Years Served
        - response.results[0] = memberObj | memberObj.roles[0] = Most Recent Congress Served | memberObj.roles[last] = First Congres Served)
        
- Statements API Query (Returns 20 Results) | URL: https://api.propublica.org/congress/v1/members/{member-id}/statements/{congress}.json
  - response.results = StatementArray
  - For(item in StatementArray)
    - item.url | URL to Officail Digital Statement
    - item.date | Date of Statement
    - item.title | Statement title
    
##  Redux State Structure
```javascript
{
  "mainDisplay": "Senate", // options: "Senate", "House"
  "SenateMembers": [Array of senate members from API],
  "HouseMembers": [Array of House Members from API],
  "MemberInfo": 
  {
    "congress": Congress Number
    "Senate": {
      "Rep": [Array of Rep Members Selected],
      "Dem": [Array of Dem Members Selected],
      "Ind": [...Independent...]
    },
    "House": {
      "Rep": [...Rep Members],
      "Dem": [...Dem Members],
      "Ind": [...Ind Members]
    }
  }
  ```
  
### SenateMembers / HouseMembers Data Structure
```javascript
{
   "id": "Member ID", 
   "name": "Member Name", // combo of "first_name" and "last_name"
   "state": "State Name",
   "party": "Dem" / "Rep" / "Ind"
   "dob": "Member Date of Birth",
   "party": "Member Party",
   "state": "Member State", // (Can be pulled from Senate API query via memberObj.ocd_id) Last 2 characters
   "socials": {
               "twitter": "Twitter_URL", 
               "facebook": "Facebook URL", 
               "youtube": "Youtube URL"
              },
  "site": "Government URL",
  "votes_with_party": "Votes with party %",
   "api_url": "URL for fetching single member data"
}
// For all members of Senate/House
```

### MemberInfo Data Structure
#### For secondary info requests from MemberObj.api_url(ProPublica) and Congress.gov API
```javascript
//All key/values to be added to matching ID member
{
  "id": "Member ID",
  "photo": "URL for official photo"
  "bills_sponsored": "# of bills",
  "bills_cosponsored": "# of bills",
  "years_served": "# of years" // (Cale'd from year of most recent Congress - year of first congress served) 
}
```

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

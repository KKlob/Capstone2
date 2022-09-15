# Capstone2
Political Informant App - Easily research politicians currently holding office in the US Senate and House of Representatives

## Overview
The Political Informant App will allow anyone to easily review polititians currently in office. Information shown will included:
- Picture
- General Information
  - Name
  - State Representing
  - Number of Years they've held office
  - Any committees they serve on
- Voting Record
  - Attendence for votes for the year
  - List of recent votes taken
- Statements made
  - List of recent public statements
 
 The focus is on the front-end UI and presentation of the app. It should flow well, be intutive in how it opperates, and will be a single-page application.
 
---

## Tech Stack
- React + Node.js
- API used: [ProPublica Congress API](https://projects.propublica.org/api-docs/congress-api/)

## Goals
- Create an app that gives a quick overview of a a member of Congress. Focusing on the most recent votes submitted and statements made.
- All US voters will find this app usefull as a quick overview (May add links to get further information)

## Outline
Create basic skeleton structure of app

WIREFRAME IMAGE GOES HERE :D

- App container
  - Nav Bar
    - Name
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
      - State
      - Party
      - Years Served
      - Recent Voting Record
      - Recent Statements made
      - Link to more information (if applicable)
    - Toggleing Senate / House of Reps clears this section

There is no backend Database for this application. All information will be pulled from the ProPublica API. No login needed. This app is purely informational and focuses on the front-end UI and presentation.

## Stretch Goals
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
- Adding smoooth animations and transitions
- Adding a live vote display

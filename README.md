# Word Search Generator
## Senior Capstone 2024
#### Author: Christina Porter, Computer Science, Class of 2024
*version 0.4.0*

## Introduction
---
This project is designed for a Senior Capstone at Bellarmine University in Louisville, KY. The intention is to create a progressive word search generator using a Javascript and React front-end. After main components are added, the project will be hosted on Vercel, a cloud-based service. The steps for implementing are below.

- [ ] Display answer key on Puzzle Generator page upon generation of a puzzle.
- [ ] Create PDF generator that allows users to display and print puzzle and answer key via PDF.
- [ ] Add additional topics to database.
- [ ] Implement authentication.
- [ ] Add logic to allow users to create their own topics to write to the database.

#### Release Notes
*Previous Version Release:* 0.4.0
- Completed logic for puzzle generation.
- Puzzle, puzzle title, and words in puzzle can be viewed on the Puzzle Generator Page.

*Previous Version Release:* 0.3.1
- Styled xs (mobile) and md (desktop) breakpoints for site.
- Connected DB to MongoDB
- Utilized Express and Axios to complete database communication
- Completed View Topics page. Click on a topic to display the list of words associated with each topic in the database.
- Added functionality to the Puzzle Generator to choose a specific number of random words from the database when the topic and difficulty are selected.
  - Easy: Chooses 10 words between 3-5 letters
  - Intermediate: Chooses 20 words between 3-10 letters
  - Hard: Chooses 30 words between 3-15 letters
  - Expert: Chooses 40 words between 3-15 letters
- Added functionality to create a matrix as a puzzle placeholder based off difficulty. Matrix size is 1.5 times the largest possible word for the difficulty.
  - Easy: Generates a [8x8] array.
  - Intermediate: Generates a [15x15] array.
  - Hard & Expert: Generates a [23x23] array.
- Fixed mobile Puzzle Generator bug where dropdowns had to be used twice to trigger changes.

**Future Releases**
*Version 0.4.1*
- Add Answer Key to Puzzle Generation Page upon generation of a puzzle.
  
*Version 0.4.2*
- Add About and References page.
- Create PDF generator to print puzzles and answer keys.

## Dependencies
Includes links to installation instructions
**Download NodeJS** (Required)
[NodeJS](https://nodejs.org/en/download/current)

- [npm *v.8.1.4*](https://docs.npmjs.com/cli/v10/commands/npm-install)
- React *v.18.2.0*
- [react-router-dom *v.6.21.3*](https://www.npmjs.com/package/react-router-dom)
- [react-bootstrap *v.2.10.0*](https://react-bootstrap.netlify.app/docs/getting-started/introduction/)
- [bootstrap *v.8.1.4*](https://react-bootstrap.netlify.app/docs/getting-started/introduction/)
- [styled-components *v.6.1.8*](https://styled-components.com/docs/basics#installation)
- [cors *v.2.8.5*](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [axios *v.1.6.7*](https://axios-http.com/docs/intro)

## Contents
- Design Documents - Contains planning, proposal, and diagrams
- Components - Individual components and logic
- Pages - Displays used in Nav

#### To view:
- Download .zip of repository using Github.
- Open command line and navigate to ../SeniorCapstone2024
- Run `npm install`
- Run `npm start`

For questions, please contact cporter@bellarmine.edu

# 11 Express.js: Note Taker

## Description

Modified starter code to create an application called Note Taker that can be used to write, save and delete notes. This application will use an Express.js back end and will save, delete and retrieve note data from a JSON file.
Built the back end, connect the font and back end, and then deploy the entire application to Heroku.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Technology Used

- Uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests
- [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Video

- Open Note Taker from Terminal (Please click screenshot to watch the video)
  [![Open Note Taker from Terminal](./assets/Note-taker-terminal.png)](https://drive.google.com/file/d/1XrCZydU7ZFI2-lClidNZlCayCqAakr8R/view?usp=sharing)

- Note Taker Browser and Demo (Please click screenshot to watch the video)
  [![Note Taker Demo](./assets/Note-taker.png)](https://drive.google.com/file/d/1cBc2dPi2Z77Qn_B8YNbfDKy_bGZlCg9K/view?usp=sharing)

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

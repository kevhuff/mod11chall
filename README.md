# Note Taker

Note Taker is a web application that allows users to write and save notes. It provides a simple and intuitive interface to help users organize their thoughts and keep track of tasks they need to complete. The application uses an Express.js back end and saves and retrieves note data from a JSON file.

![Note Taker Screenshot]
![Screenshot 2023-09-09 222922](https://github.com/kevhuff/mod11chall/assets/3771399/9b115035-0225-43da-ae02-de050c24289a)


## Features

- Landing page with a link to the notes page.
- Notes page displaying existing notes on the left-hand side and empty fields to enter a new note on the right-hand side.
- Ability to enter a new note title and text and save it.
- Saved notes appear in the left-hand column with the other existing notes.
- Clicking on an existing note displays its content in the right-hand column.
- Ability to create a new note by clicking the "Write" icon.
- API routes to retrieve, save, and delete notes.

## Installation

To run the Note Taker application locally, you need to have Node.js installed on your machine. Follow these steps:

1. Clone this repository to your local machine using `git clone`.

2. Navigate to the project's root directory in the terminal.

3. Run the command `npm install` to install the required dependencies.

4. Start the server by running `node server.js`.

5. Open your web browser and go to `http://localhost:3000` to access the application.

## Usage

- Click on the "Get Started" button on the landing page to go to the notes page.
- Enter a note title and note text in the respective fields.
- Click the "Save" icon in the navigation bar to save the note.
- The saved note will appear in the list on the left-hand side.
- Click on an existing note in the list to view its content.
- To create a new note, click on the "Write" icon.
- Use the application to manage and organize your notes effectively.

## API Routes

The Note Taker application provides the following API routes:

- `GET /api/notes`: Retrieves all saved notes as JSON.
- `POST /api/notes`: Saves a new note. Expects a JSON object with `title` and `text` properties in the request body.
- `DELETE /api/notes/:id`: Deletes the note with the specified ID.

## Technologies Used

- Express.js
- Node.js
- HTML
- CSS
- JavaScript

## Demo

A live demo of the Note Taker application is available [here]
https://secret-brushlands-27658-37ce2f72ea78.herokuapp.com/
## License

This project is licensed under the [MIT License](LICENSE).



---

TODO App Documentation

Overview :-

The TODO App is a simple offline task management application built using React.js and CSS3. It allows users to create, complete, and reset tasks. The app persists data using local storage, ensuring that task data is retained even if the user refreshes the page.

Features :-

1.The TODO App includes the following key features:

2.Add Tasks: Users can add tasks by entering a task description in the input bar and pressing the "Add" button or hitting the "Enter" key.

3.Complete Tasks: Clicking on a task card marks it as complete, and it is moved to the "Completed TODOs" section.

4.Task Sorting: Active tasks (incomplete) are displayed at the top in order of creation (most recent on top), while completed tasks are displayed in order of completion (most recent on top).

5.Reset: The "Reset" button in the top-right corner allows users to clear all tasks and return to the initial state.

6.Offline Capability: The app utilizes local storage to store task data, ensuring that tasks persist across browser sessions and remain unaffected by page refreshes, including hard refreshes.

Usage :-
To use the TODO App:

1.Enter a task description in the input bar.

2.Press the "Add" button or hit the "Enter" key to add the task.

3.Click on a task card to mark it as complete. Completed tasks are moved to the "Completed TODOs" section.

4.To clear all tasks and reset the app, click the "Reset" button in the top-right corner.

Code Structure :-

App.js

* This file contains the main React component for the TODO app.
* State variables are used to manage tasks and user input.
* The useEffect hook is used to load and save tasks to local storage.
* Functions for adding tasks, marking tasks as complete, and resetting the app are defined.
* Task cards are rendered based on their completion status.

App.css

* This CSS file contains styles for the TODO app, including layout, colors, and animations.
* Styles are applied to the header, input bar, task cards, and reset button.
* Completed tasks are visually distinguished with a strike-through effect.

Installation and Setup :-

To set up the TODO App:

1.Clone the repository or create a new React app.
2.Replace the App.js and App.css files with the provided code.
3.Start the development server and open the app in a web browser.

Dependencies :-

The TODO App relies on the following dependencies:

* React.js: A JavaScript library for building user interfaces.
* CSS3: Cascading Style Sheets for styling the app.

Compatibility :-
The TODO App is designed to work in modern web browsers, including the latest versions of Google Chrome and Mozilla Firefox.

Future Enhancements :-
Possible future enhancements for the TODO App include:

* Task deletion: Allow users to delete individual tasks.
* Task categories: Implement the ability to categorize tasks.
* Date and time: Include due dates and times for tasks.
* User authentication: Enable multiple users to manage their own tasks.
* Improved styling: Enhance the app's visual design and responsiveness.

Credits :-
This TODO App was created by Ashish Kumar Singh and is provided as an open-source project.


Contact Information :-
For questions, feedback, or support, please contact ashishlovesagra@gmail.com.
# StudySphere – Study Room Reservation System

## 1. Project Introduction

For this project, I developed StudySphere, a web application designed to make it easier for students to reserve study spaces. The main idea behind the application is to provide students with a simple way to choose a study room, enter their reservation details, and view their bookings.

I wanted to create something that could be useful in a university or college environment. Students sometimes need a quiet place to work independently, while other times they may need a room where they can study with classmates. I believe having a system that organizes these reservations can make the process more convenient.

My goal was to build an application that is easy to understand and navigate while also demonstrating how a complete web application works. This includes the frontend pages, server-side routing, database connection, and storage of reservation information.

## 2. Project Goals and Objectives

The main objectives I had when developing StudySphere were:

- Create a clear and easy-to-use homepage that introduces the application.
- Allow students to enter their information and submit a study room reservation.
- Provide different study room options.
- Collect important booking information, including the student's name, date, and reservation times.
- Store reservation information in a database instead of keeping it only in the browser.
- Display saved reservations on a separate page.
- Organize the application using Express Generator and Express routes.
- Use EJS templates to generate the application's pages.
- Apply CSS styling to create a consistent appearance.
- Make the application usable on desktop, tablet, and mobile screen sizes.

In my opinion, these objectives provide a good foundation for a student reservation system without making the application unnecessarily complicated.

## 3. Technologies and Tools Used

I used several technologies to develop the application. Each one has a different purpose within the project.

### Node.js

Node.js is used to run the application outside the browser. It allows the server-side JavaScript code to execute and supports the packages used throughout the project.

### Express.js

Express.js is the framework I used to handle the server and application routes. It makes it possible to respond to browser requests, process form submissions, and display the appropriate pages.

### Express Generator

I used the Express Generator project structure as the starting point for the application. This helped organize the project into separate folders for routes, views, public files, and server configuration.

I believe this structure makes the project easier to maintain because different parts of the application are kept separate.

### EJS

I used EJS (Embedded JavaScript Templates) for the application's pages. EJS allows HTML markup to be combined with JavaScript so that information from the server can be displayed dynamically.

For example, the reservations page uses EJS to loop through the reservations retrieved from MongoDB and display each booking.

The pages are therefore EJS templates rather than standalone HTML files.

### MongoDB Atlas

MongoDB Atlas is used to store reservation information. This allows submitted bookings to be saved in a database and retrieved later.

### Mongoose

I used Mongoose to connect the application to MongoDB and define the structure of reservation records. It also makes it easier to create and retrieve reservation documents.

### HTML, CSS, and JavaScript

HTML is used within the EJS templates to structure the pages. CSS controls the layout, colours, spacing, typography, and responsive design.

JavaScript is used on the server side through Node.js and Express, as well as within the EJS templates where dynamic information is needed.

### Development Tools

The main tools used during development include:

- Visual Studio Code for editing project files.
- Terminal for running commands and the application.
- Git for tracking project changes.
- GitHub for storing and submitting the project.
- MongoDB Atlas for database hosting.

## 4. Main Application Features

### Homepage

The homepage introduces StudySphere and explains the purpose of the application. I wanted the first page to make it clear what the website does and provide a simple way to navigate to the reservation features.

The navigation provides access to the homepage and reservations section.

### Study Room Reservation Form

The reservation form allows a student to enter the information needed to create a booking.

The form includes:

- Student name.
- Study room selection.
- Reservation date.
- Start time.
- End time.

I included different room options so students can select the type of space they want to use.

The form uses required fields to prevent a submission when important information has been left blank.

### Available Study Room Options

The reservation form includes the following options:

- Quiet Study Room.
- Group Study Room.
- Computer Study Room.
- Open Study Space.

I chose these options because students may have different preferences depending on the type of work they need to complete.

### Reservations Dashboard

The reservations page displays booking information retrieved from the database.

Instead of only showing information entered into the form, the application retrieves saved reservation records and displays them in a table.

The dashboard includes the student's name, selected room, reservation date, start time, and end time.

When there are no reservations, the page displays a message encouraging the user to create a booking.

### Database Storage

One important part of the application is that reservation information is saved using MongoDB.

I wanted the application to demonstrate how information can be submitted through a form, processed by the server, and stored in a database.

## 5. Application Structure

I organized the application using the Express Generator structure.

The main project files and folders are(This pretty muchexplains what some files mean) :

| File or folder                 | Purpose                                                                           |
| ------------------------------ | --------------------------------------------------------------------------------- |
| `app.js`                       | Configures Express, middleware, routes, and the MongoDB connection.               |
| `bin/www`                      | Starts the Express web server.                                                    |
| `models/`                      | Contains the database models.                                                     |
| `models/Reservation.js`        | Defines the structure of reservation records.                                     |
| `routes/`                      | Contains the routes used by the application.                                      |
| `routes/index.js`              | Handles the homepage route.                                                       |
| `routes/users.js`              | Contains the generated users route.                                               |
| `routes/reservations.js`       | Handles reservation pages and form submissions.                                   |
| `views/`                       | Contains the EJS templates.                                                       |
| `views/index.ejs`              | Displays the homepage.                                                            |
| `views/reservations/index.ejs` | Displays saved reservations.                                                      |
| `views/reservations/new.ejs`   | Displays the new reservation form.                                                |
| `views/error.ejs`              | Displays error information.                                                       |
| `public/`                      | Contains static files served by Express.                                          |
| `public/stylesheets/style.css` | Contains the application's styling and responsive layout rules.                   |
| `package.json`                 | Lists project dependencies and application scripts.                               |
| `package-lock.json`            | Records the installed dependency versions.                                        |
| `.gitignore`                   | Prevents selected files, such as `.env` and `node_modules`, from being committed. |

I kept the EJS pages inside the `views` folder because the application uses EJS as its view engine.

The public folder is used for static resources such as stylesheets. This allows Express to serve those files to the browser.

## 6. How the Application Works

The application follows a basic client-server-database workflow.

### Step 1: Opening the Application

When someone visits the homepage, the browser sends a request to the Express server.

Express receives the request and uses the homepage route to display the appropriate EJS page.

### Step 2: Opening the Reservation Form

When the user selects the option to book a room, the application opens the reservation form.

The form contains fields for the student's name, room selection, date, start time, and end time.

### Step 3: Submitting a Reservation

When the user submits the form, the browser sends a POST request to the reservations route.

Express reads the submitted form information and uses the Reservation model to create a new database record.

### Step 4: Saving Information

The reservation information is saved to MongoDB through Mongoose.

The application then redirects the user to the reservations page after a successful save.

### Step 5: Displaying Reservations

The reservations route retrieves saved records from MongoDB.

The retrieved information is passed to the EJS template, which displays the records on the dashboard.

I believe this workflow is one of the most important parts of the project because it demonstrates how the frontend, backend, and database work together.

## 7. Application Routes

The application uses Express routes to control which pages are displayed and how form submissions are handled.

| HTTP method | Route               | Purpose                                |
| ----------- | ------------------- | -------------------------------------- |
| GET         | `/`                 | Displays the homepage.                 |
| GET         | `/reservations`     | Retrieves and displays reservations.   |
| GET         | `/reservations/new` | Displays the reservation form.         |
| POST        | `/reservations`     | Processes and saves a new reservation. |

The routes are kept in `routes/reservations.js` rather than placing all application logic directly inside `app.js`.

I believe separating the routes makes the application easier to understand and maintain.

## 8. Database Design

StudySphere uses MongoDB Atlas as its database and Mongoose to define the reservation model.

The reservation model is located in:

`models/Reservation.js`

Each reservation contains the following fields:

| Field         | Data type | Description                                 |
| ------------- | --------- | ------------------------------------------- |
| `studentName` | String    | Name of the student making the reservation. |
| `room`        | String    | Selected study room.                        |
| `date`        | String    | Date of the reservation.                    |
| `startTime`   | String    | Starting time of the reservation.           |
| `endTime`     | String    | Ending time of the reservation.             |

The fields are marked as required so that the main reservation details must be provided before a record can be saved.

The student name section also uses trimming to remove unnecessary spaces at the beginning or end of the submitted value.

I used a separate model because I wanted the database structure to be organized instead of having database logic mixed into the page templates.

## 9. Frontend Design and Styling

I used HTML within the EJS templates to structure the application's pages and CSS to control their appearance.

I wanted StudySphere to have a consistent design across the homepage, reservation form, and reservations dashboard.

The stylesheet uses the following main colours:

- Navy: `#17243b`
- Teal: `#087f8c`
- Coral: `#f28c6b`
- Light background: `#f5f7fb`

I chose these colours to give the application a clean appearance while keeping the content easy to read.

The styling includes:

- Navigation bar.
- StudySphere branding.
- Buttons and links.
- Form labels and input fields.
- Reservation page layouts.
- Dashboard and table styling.
- Footer section.
- Responsive layout rules.

I also used DM Sans and Manrope fonts to create a consistent visual style.

## 10. Responsive Design

I included responsive CSS rules so that the application can adjust to different screen sizes.

The project uses three main screen-size ranges:

- Mobile: 480px and below.
- Tablet: 481px to 960px.
- Desktop: 961px and above.

For smaller screens, the navigation and page layouts are adjusted to fit the available space.

The homepage layout also changes on smaller screens so that its content can be displayed in a single column when necessary.

I believe responsive design is important because students may access the application using different devices instead of only using a desktop computer.

## 11. Installation and Setup Instructions

The following steps explain how to run StudySphere locally.

### Requirements

 following should be available:

- Node.js and npm.
- A MongoDB Atlas account and connection string.
- A terminal application.
- The StudySphere project files.

###   Download or Clone the Repository

Clone the GitHub repository:

```bash
git clone https://github.com/Mkhay910/INFR3120-Fall26-Project.git
```

Open the project folder:

```bash
cd INFR3120-Fall26-Project
```

###   Install Dependencies for use

Run:

```bash
npm install
```

This installs the packages listed in `package.json`.

### Configure MongoDB

Create a file named `.env` in the main project folder.

Add the MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

Replace the example value with the actual MongoDB Atlas connection string.

The real connection string should remain private and should never be included in the public repository.

### SStart the Application

Run:

```bash
npm start
```

The application should start using the Express server configuration.

### Open the Application

Visit:

`http://localhost:3000`

The homepage should now be available in the browser.

## 12. Testing and Verification

During development, I checked the main parts of the application to make sure they were working together.

The following areas were checked:

- The Express application starts successfully.
- The MongoDB connection succeeds.
- The homepage loads.
- The reservation form opens.
- The reservation form accepts the required information.
- A submitted reservation is saved to MongoDB.
- The reservations page retrieves and displays saved bookings.
- The navigation links connect to the correct pages.
- The stylesheet is loaded by the application.

I also checked the reservation routes to confirm that the homepage, reservation dashboard, and new reservation form routes were registered.

I believe testing is important because a page can look correct but still have problems when a user tries to submit information or move between pages.

## 13. Error Handling and Configuration

The application uses Express middleware to process incoming requests and serve static files.

Some of the middleware configured in `app.js` includes:

- `express.json()` for parsing JSON request bodies.
- `express.urlencoded()` for processing submitted form data.
- `cookieParser()` for cookie handling.
- `morgan` for request logging.
- `express.static()` for serving public files.

The reservation routes also use error handling so that errors during database operations can be passed to the Express error-handling middleware.

The MongoDB connection is configured through an environment variable instead of placing database credentials directly inside the application code.

## 14. GitHub and Version Control

I used Git and GitHub to keep track of the project and store the application files in a remote repository.

Repository:

[https://github.com/Mkhay910/INFR3120-Fall26-Project](https://github.com/Mkhay910/INFR3120-Fall26-Project)

Git was used to track changes, create commits, and push the latest project updates to the `main` branch.

The `.gitignore` file prevents files such as `node_modules` and `.env` from being included in the repository.

I believe using version control is useful because it provides a record of project changes and keeps the source code available in one place.

## 15. Project Requirements and Development Approach

One of the important parts of this project was using the required application structure.

I used Express Generator as the starting structure and kept the application organized into routes, views, models, and public files.

I also used EJS templates rather than submitting standalone HTML pages as the application's views.

This approach allows the server to pass information into the pages and display database records dynamically.

I wanted the project to demonstrate more than just a static website. The reservation form, server-side processing, and MongoDB database connection help demonstrate how a full-stack application operates.

## 16. Challenges and What I Learned

While working on StudySphere, I had to understand how the different parts of an Express application connect.

One area that required attention was configuring the MongoDB Atlas connection. The connection string needed to be stored correctly in the environment configuration so that the application could connect to the database.

Another area was organizing the reservation routes. I needed to make sure that the form submitted information to the correct route and that the server saved the information using the Mongoose model.

I also worked on matching the EJS page classes with the CSS stylesheet. This helped me understand that a page can load correctly while still looking unformatted if the stylesheet does not contain the required rules.

Overall, I believe this project helped me improve my understanding of Express, EJS, routing, database models, and how information moves between a browser and a server.

## 17. Possible Future Improvements

There are several improvements that could make StudySphere more complete in the future.

Some features I would like to consider include:

- Adding student accounts and login functionality.
- Allowing students to edit or cancel reservations.
- Preventing two students from booking the same room at overlapping times.
- Adding more information about each study room.
- Adding search and filtering options to the reservations dashboard.
- Improving form validation for reservation dates and times.
- Adding confirmation messages after a successful booking.
- Improving the dashboard with additional reservation details.
- Deploying the application so that it can be accessed online.

These are ideas for further development and should not be confused with features already implemented.

## 18. Personal Reflection

In my opinion, StudySphere is a useful starting point for a student study room reservation system. I wanted to keep the application straightforward so that a student could understand how to use it without needing instructions.

I believe one of the most important things I learned from this project was how the frontend, backend, and database depend on each other. The EJS pages display information, Express handles the requests, and MongoDB stores the reservation records.

I also learned the importance of keeping a project organized. Using separate folders for routes, views, models, and public files made it easier to work on different parts of the application.

Overall, I am happy with the direction of StudySphere because it demonstrates the main ideas behind a database-connected web application while providing a practical use case for students.

---

## 19. Repository

**GitHub Repository:**
[https://github.com/Mkhay910/INFR3120-Fall26-Project]

**Project Name:** StudySphere
**Application Type:** Study Room Reservation System
**Main Technologies:** Node.js, Express.js, EJS, MongoDB Atlas, Mongoose, HTML, CSS, and JavaScript

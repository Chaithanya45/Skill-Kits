# SkillKits
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
### A Real-world classroom application for a better interaction between students and teachers.

### 🔗 Live Demo

The website is Hosted [Here](https://skillkits.netlify.app/)

***
## Main Features
### Landing Page
The landing page gives us a brief introduction about this app. Anyone can Signup if its a new user or login if its an old one. The syling of all the pages inside the app is done using "styled-components". AOS library (animate on scroll) is used to animate the content while scrolling!
<br>
![](https://github.com/Zeph-T/SkillKits/blob/master/public/landing.png)

### Authentication
The Student/Faculty is required to provide his email, username and password for signup.
<br>
![](https://github.com/Zeph-T/SkillKits/blob/master/public/login.png)
![](https://github.com/Zeph-T/SkillKits/blob/master/public/signup.png)


### Top Navbar
Once you are logged in, the top navbar will contain the button to join a class and a button to log out.
<br>
![](https://github.com/Zeph-T/SkillKits/blob/master/public/navbar.png)

### Dashboard
All the logged in users are directed to the dashboard page where there will be the list of subjects the student/faculty is a part of.Clicking on any of the componenet would redirect them to the subject screen.
<br>
![](https://github.com/Zeph-T/SkillKits/blob/master/public/dashboard.png)

### Subject Screen
This screen consists of the subject Data. The assignments,notifications related to the subject.
<br>
![](https://github.com/Zeph-T/SkillKits/blob/master/public/subjectscreen.png)
![](https://github.com/Zeph-T/SkillKits/blob/master/public/subjectscreen2.png)


### Submit Assignment
When a student wants to submit a assignment, he/she can click on the assignment component and it will redirect them to another screen, where they can paste the google drive link of the assignment.
<br>
![](https://github.com/Zeph-T/SkillKits/blob/master/public/assignmentsubmit.png)

### Schedule and Assignments Deadline
In the dashboard screen, there is a button called calendar, when clicked will display the schedule/assignments which are to be completed by the student with the deadline.
<br>
![](https://github.com/Zeph-T/SkillKits/blob/master/public/schedule.png)

### Submissions Screen
This is for the faculty members who wants to see the assignments submitted by the students.They can grade them here itself, and the marks will be notified to that particular student.
<br>
![](https://github.com/Zeph-T/SkillKits/blob/master/public/submittedscreen.png)

### Join Class
When a student clicks on the join class button in the dashboard, a dialog is opened asking for the necessary subject code, when clicked correctly will add the student to the subject.
<br>
![](https://github.com/Zeph-T/SkillKits/blob/master/public/joinclass.png)

### Create Class
This is a faculty operation which helps him create a class, when clicked on the create class button, a dialog is opened asking for name of the subject.When entered, it will create a subject and it will contain the subject code which can be used by the students to join the subject.
![](https://github.com/Zeph-T/SkillKits/blob/master/public/createclass.png)

***
### Tech Stack and Concepts used:

<p align="left"> <a href="https://expressjs.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="express" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/html-5.png"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://img.icons8.com/color/48/000000/javascript.png"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongodb" width="50" height="50"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://img.icons8.com/color/48/000000/nodejs.png"/> </a> <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://www.netlify.com" target="_blank"> <img src="https://www.netlify.com/img/press/logos/logomark.png" alt="Netlify" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" width="60" height="40"/>  <a href="https://material-ui.com" target="_blank"> <img src="https://material-ui.com/static/logo.png" alt="Material UI" width="50" height="60"/> </a></p>
<br>

* __Frontend:__ Reactjs, Javascript, MaterialUI, HTML, CSS, Styled-components
* __Backend:__  Nodejs, Expressjs
* __Databse:__ MongoDB
* __Deployment:__ Heroku, Netlify
* __Tools:__ Git

***

### Setting Up the Project 🔧


#### Clone the repo

   ```sh
   git clone https://github.com/Zeph-T/SkillKits.git
   ```
*__Frontend__
1. change the directory to Frontend
    ```
    cd Frontend
    ```
2. Install NPM packages

   ```sh
   npm install
   ```
3. Create a .env file and add values accordingly.
4. Run the server (Note : Make sure you start the Backend server before the Frontend server to avoid unnecessary errors.)
   ```
   npm start 
   ```

* __Backend__
1. change the directory to Backend
    ```
    cd Frontend
    ```
2. Install NPM packages

   ```sh
   npm install
   ```
3. Create a .env file and add values accordingly.
4. Run the server 
   ```
   npm start 
   ```

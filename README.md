# Notes

## Project Highlights

<ul>
  <h4>Tech Stack:-</h4>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>Mongoose</li>
  <li>Mongodb</li>
  <li>JWT</li>
  <li>Error Handling</li>
</ul>

## About Project
This project is designed to server the backend functionalities for a note taking application using Node.js. It is suitable for Web apps, Mobile apps and Api services.

## About Author
I <a target="_blank" href="https://www.piyusharmap.com/home">Piyush Sharma</a> have create this project as a part of MLH prep and fellowship program. 
I've experience with both backend and full stack developement but don't have experience working in the industry. 
Through this program I want to learn and enhance my developemt skills.

## Project Instructions
I designed this project using Node.js. The main focus is to create a maintainable application with proper error handling.
<br />Following are the project details and instructions:-
<ul>
<li>The backend is written in javascript. The framework used in backend (Express). Express is a Node.js back-end web application framework, also known as Express.js. It has many features that make developing web applications easier and faster than using Node.js</li>
<li>Centralised Error handling: I have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger.</li>
<li>Mongodb is used through Mongoose: Mongodb fits very well to the node.js application. Being NoSQL, fast, and scalable makes it ideal for modern web applications.</li>
<li>A pure backend project: I have experienced that when a backend is developed clubbed with a frontend then in the future it becomes really difficult to scale. We would want to create a separate backend project that servers many websites and mobile apps.</li>
</ul>

### Architecture
3-tier Architecture: A 3-tier architecture is a web app architecture that is widely used around the world. It basically contains 3 tiers: Client, Server, and Database
<br />The Business Logic Tier (Controller) is written using NodeJs and ExpressJS, and this tier represents the Application Server that will act as a bridge of communication for the Client Tier and Database Tier. This tier will serve HTML pages to the user’s device and accept HTTP requests from the user and follow with the appropriate response.
<br />THe Database Tier (Model) will be hosting MongoDB. This is where we will store all of the crucial data our application needs to function.

### Run this project
#### Postman:- 
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/19675807-479ddd7d-7a4d-42a0-9e98-feb51a656b46?action=collection%2Ffork&collection-url=entityId%3D19675807-479ddd7d-7a4d-42a0-9e98-feb51a656b46%26entityType%3Dcollection%26workspaceId%3De660f745-89a5-4506-add1-50f07cefadf1)

### API examples
<ul>

  <li>Login</li>  
Method and Headers

      POST /slashNotes/user/login
      Host: localhost:4000
  
<br />  
Request Body

      {
          "username": "",
          "password": ""
      }
    
   <li>Forgot Password</li>
Method and Headers
    
      POST /slashNotes/user/password/forgot
      Host: localhost:4000
  
<br />
Request Body

      {
          "email": ""
      }
      
  <li>Create Note</li>
Method and Headers

      POST /slashNotes/notes/new
      Host: localhost:4000
  
<br />
Request Body

      {
          "title": "",
          "content": "",
          "category": ""
      }
      
  <li>Update Note</li>
Method and Headers

      PUT /slashNotes/notes/:id
      Host: localhost:4000
  
<br />
Request Body

      {
          "title": "",
          "content": "",
          "category": ""
      }
      
   <li>Remove Note</li>
Method and Headers

      DEL /slashNotes/notes/:id
      Host: localhost:4000
  
<br />
Request Body

      {
          
      }
</ul>

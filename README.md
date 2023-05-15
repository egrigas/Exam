# Event Registration Application

This is a web application built using React.js, Node.js, and MongoDB. It is designed for event organizing companies to register attendees for their events.

# Features

User Registration: Allows event organizers to register attendees by phone call. The registration form includes fields for:

Full Name
Email Address
Age
User List: Provides a table displaying registered users with the following information:

Full Name
Email Address
Date of Birth
Administration buttons (update and delete user)
Pagination: The user list is paginated and displays up to 10 users per page. Pagination is implemented to handle a larger number of users efficiently.

CRUD Operations:

Create: Users can be created by filling out the registration form.
Read: The user list displays registered users.
Update: Event organizers can update user information.
Delete: Event organizers can delete users from the list.
Data Persistence: User data is stored in a MongoDB database, ensuring that the data is saved and can be accessed even after restarting the application.

# Prerequisites

To run this application, you need to have the following software installed:

Node.js
MongoDB

# Installation

Clone the repository: git clone <repository-url>
Navigate to the project directory
Install the dependencies: npm install
Update your MONGODB_URL
Start the server: npm start
Open your web browser and visit: http://localhost:5173

# Usage

Register Users: Fill out the registration form to add attendees to the event.
View User List: Browse the user list to see the registered attendees.
Update User: Click the update button next to a user to modify their information.
Delete User: Click the delete button to remove a user from the list.

# Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request.

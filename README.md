# The Forum 

## Description
The Forum is a tech blog site built using the Model-View-Controller (MVC) architectualr pattern and utilizes a range of tecnologies to provie a seamless user experience. This platform allows for sharing ideas, sparking discussion, and keeping the world informed and engaged.

## Features 
- Users can view and create blog posts on various tech-related topics.
- Users can create an account and log in to post on blog posts
- The application utilizes the Express.js framework for routing, Sequelize as the Object Relational Mapping (ORM) tool to interact with the database, and Handlebars.js as the template engine.
- The user interface is designed to be user- friendly and esady to navigate.

## Dependencies
The Forum has the following dependices:
- Express.js
- Sequelize
- Handlebars.js
- dotenv
- bcrypt
- expression-session

## Installation
To install The Forum follow these steps

1. Clone the repo to your local machine
```
git clone https://github.com/Khawk1017/APP-MVC
```
2. Navigate to the project directory and install the dependencies.
```
cd APP-MVC
npm install
```
3. Create a '.env' file with your database credentials and session secret key
```
touch .env
```
add the following variables to the '.env' file and replacethe valuse with your own:
```
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
SESSION_SECRET=your_session_secret_key
```
4. Run the application
```
npm start
```
The application will be available at localhost:3001 be sure to include the full url should be displayed within the terminal when deploying the app.

## Usage 
To create a new blog post, click the "Create Post" button on the navigation bar. Fill out the form with your post's title and content, and click "Submit".

To view an existing blog post, click on the post's title from the home page. This will take you to the post's page, where you can read the post and view any comments left by other users.

The pointers page will display the created tips that were left by the authors users can create thier own or  them for a personal reference

## License 
This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.
    ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

# README

This is an application for creating posts within a blog. Its development and implementation are focused on communication with the RESTful API that extracts and inputs information to a PostgreSQL database within a Docker container created and managed with Docker Compose. The API provides services, and in this case, we have an application that serves as an endpoint to execute CRUD operations.

Objectives:

* Efficient Blog Post Management: Enable users to create, read, update, and delete blog posts seamlessly.
* Integration with RESTful API: Establish smooth communication between the application and the RESTful API for data extraction and insertion.
* Database Interaction: Ensure robust interaction with the PostgreSQL database, handling data storage and retrieval efficiently.
* Containerized Deployment: Utilize Docker containers for easy deployment and management, ensuring consistency across different environments.
* Scalability and Flexibility: Design the application architecture to be scalable and adaptable to changing requirements or increasing traffic.

The backend of the application was designed using Ruby on Rails, with a PostgreSQL database connection. The implementation process is relatively straightforward. It involves installing Docker, setting up Ruby on Rails, creating a main folder to host the application, and within it, creating a docker-compose.yml configuration file (following the package configuration guidelines). Then, the container is started.

Inside the docker-compose.yml file, there's an instruction to execute an SQL script to create the database, as well as to create the user and system roles. Subsequently, the database.yml file is created to specify the information for connecting to the database (refer to the configuration file).

For the API, all requested operations were created along with routes for the endpoints.

The frontend application was then created to interact with the API. This frontend application is also straightforward and has minimal visual development because its primary purpose is to interact with the information to be entered into the database. It is developed using Vue.js.

For its installation and implementation, simple forms were created using Bootstrap. The application utilizes the exposed API endpoints to load or manipulate the data. 


TECHNOLOGY & CONFIGURATION
* Technology: Ruby "3.3.0", rails, " 7.1.3",bundler, Vue.js "5.0.8", node.js "v20.11.0", yarn "1.22.22", @vue/cli@5.0.8, vue-router@4, vue-axios

* System dependencies: Look for Gemfile, then proceed with bundle install all dependencies; For the vue project use yarn install. 

* Configuration: Use the docker-compose.yml and the database.yml files, inside is all the configuration that is need to run de container and the postgreSQL      instance database.

* Database creation and initialization: Since the project is small and simple, the database does not have dependencies between tables. Therefore, initial data is not required for it to function as everything is manipulated through the API.
 
* How to install the projects, 
To proceed with the setup, ensure that Ruby and Rails are installed on your system, followed by installing the necessary gems with bundler. Then, you can install dependencies and create models within the database using the following commands: rails db:create, rails db:migrate then run de server with de command rails server
This command will start the Rails application, making it accessible via a web browser at the default address http://localhost:3000. From there, you can interact with your backend application and API.

All the routes are straightforward and clearly defined within your Rails application. This makes it easier for developers to understand the API endpoints and how to interact with them.

For the Vue.js project, you need to have Node.js installed on your system. Then, you can install Vue.js and other dependencies using Yarn or npm. After installing dependencies with yarn install (or npm install), you can run the Vue.js development server with yarn serve (or npm run serve). By default, the Vue.js application will be accessible at http://localhost:8080/. This allows you to interact with your frontend application locally.

For everything to work as expected you should have the API service running alongside the Vue.js application

* ...

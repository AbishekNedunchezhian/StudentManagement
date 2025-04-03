### Student Management System ###
This Student Management System is a web application built using Spring Boot for the backend, React for the frontend, MySQL for the database, and Bootstrap for styling. It allows the management of student information with features to add, delete, and update student details. Additionally, it supports the ability to push student results in JSON format via Postman, which are then displayed on the student's result page.

### Features ###
Add Student: Allows adding new students with their personal and academic information.

Update Student: Allows updating details of an existing student.

Delete Student: Allows deleting a student’s record from the system.

View Student List: Display all students and their details.

Display Results: Results can be sent via Postman as JSON data and displayed on the student's result page.

Responsive Design: Built with Bootstrap, making the app fully responsive across all devices.

### Technologies Used ###
Backend: Spring Boot (Java-based framework for building RESTful APIs)

Frontend: React (JavaScript library for building user interfaces)

Database: MySQL (Relational database for storing student data)

Styling: Bootstrap (CSS framework for responsive web design)

Postman: For testing API endpoints and pushing result data as JSON

### Components ###
Backend (Spring Boot):

Controller.java: Controller handling all CRUD operations (Create, Read, Update, Delete) for students.

Service.java: Service layer that interacts with the database and implements business logic.

Repository.java: Repository layer for interacting with MySQL to store and retrieve student data.

StudentManagement.java: Entity class representing the Student table in MySQL.

### Frontend (React): ###

AddMark.jsx: Allows adding marks for students. Marks are saved and linked to individual student profiles.

Dashboard.jsx: The main administrative dashboard displaying overall student data and statistics.

Home.jsx: The homepage of the app, offering an overview of the system and easy navigation to other features.

Login.jsx: The login form where users can authenticate themselves to access the system.

Profile.jsx: Displays the personal and academic details of the logged-in user/student.

Register.jsx: The registration form for new users (students or admins) to create accounts.

Result.jsx: Displays the results for each student after receiving data via API or Postman.

Update.jsx: Allows administrators to update student details, such as name, department, and academic information.

### Database (MySQL): ###

Student Table: Stores information like name, age, department, and other student-related data.

### Screenshots of the project ###

![image](https://github.com/AbishekNedunchezhian/StudentManagement/blob/79252b7b13906e5827b9f6d1f83da777885fb5b0/Screenshot%202025-04-03%20214955.png)

![image](https://github.com/AbishekNedunchezhian/StudentManagement/blob/de1e3634eef8e7efaf165beb7f1d15a3a45984fd/Screenshot%202025-04-03%20214626.png)

### Future improvements ###

College Management System: Expand the project to include additional features like attendance tracking, course management, faculty management, and more.

Alumni Details: Add a section to manage alumni information, including alumni registration, career updates, and event participation.

Authentication: Implement user authentication and authorization for admins and faculty members to manage student data securely.

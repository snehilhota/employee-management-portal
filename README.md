# Employee Management Portal

A full-stack CRUD application for managing employee records, built with **Spring Boot** on the backend and **React** on the frontend.

![Java](https://img.shields.io/badge/Java-26-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.1.0-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![MySQL](https://img.shields.io/badge/MySQL-database-4479A1)

## Overview

This project is a simple, clean Employee Management System that lets you create, view, update, and delete employee records through a REST API and a React-based UI styled with Bootstrap.

## Features

- Add new employees with first name, last name, and email
- View all employees in a table
- Update existing employee details
- Delete employees
- REST API built with Spring Boot and Spring Data JPA
- MySQL persistence
- Responsive React frontend with Bootstrap styling

## Tech Stack

**Backend**
- Java 26
- Spring Boot 4.1.0 (Web MVC, Spring Data JPA)
- MySQL (via `mysql-connector-j`)
- Lombok
- Maven

**Frontend**
- React 19
- Vite
- React Router DOM
- Axios
- Bootstrap 5

## Project Structure

```
employee-management-portal/
├── backend/                 # Spring Boot REST API
│   └── src/main/java/com/github/snehilhota/emp_backend/
│       ├── controller/        # REST controllers
│       ├── dto/                # Data transfer objects
│       ├── entity/             # JPA entities
│       ├── exception/         # Custom exceptions
│       ├── mapper/             # Entity <-> DTO mappers
│       ├── respository/       # Spring Data JPA repositories
│       └── service/            # Business logic
└── frontend/                # React + Vite client
    └── src/
        ├── components/         # React components (form, list, header, footer)
        └── services/            # Axios API calls
```

## API Endpoints

Base URL: `http://localhost:8080/api/employees`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/employees` | Create a new employee |
| `GET` | `/api/employees` | Get all employees |
| `GET` | `/api/employees/{id}` | Get an employee by ID |
| `PUT` | `/api/employees/{id}` | Update an employee by ID |
| `DELETE` | `/api/employees/{id}` | Delete an employee by ID |

### Sample Employee JSON

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

## Getting Started

### Prerequisites

- Java 26 (JDK)
- Node.js and npm
- MySQL Server
- Maven (or use the included `mvnw` wrapper)

### 1. Set up the database

Create a MySQL database:

```sql
CREATE DATABASE ems;
```

Update the credentials in `backend/src/main/resources/application.properties` to match your local MySQL setup:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
```

> Tables are created automatically on startup via `spring.jpa.hibernate.ddl-auto=update`.

### 2. Run the backend

```bash
cd backend
./mvnw spring-boot:run
```

The API will start on `http://localhost:8080`.

### 3. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Future Improvements

- Input validation and error handling on the frontend
- Pagination and search/filter for the employee list
- Authentication and role-based access
- Dockerize backend, frontend, and MySQL for one-command setup

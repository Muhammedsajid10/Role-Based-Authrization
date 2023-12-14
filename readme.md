# Role-Based-Authorizationn

## Description

This project focuses on Role-Based Authorization, a key security feature in applications. It allows users to have varying levels of access and permissions based on their roles. 

## Features

- **User Authentication**: Secure login and registration functionality.
- **Role-Based Access Control : Implements role-based access control with user and admin roles.
- **API Documentation**: Utilizes Swagger for clear API documentation. (http://localhost:4000/api-docs/)
- **MongoDB Integration**: Interacts with MongoDB for data storage.


## Total APIs

- **Login**
  - Description: API for user login.
  - Endpoint: `/login`

- **Register**
  - Description: API for user registration.
  - Endpoint: `/register`

- **User**
  - Description: API for user-related actions.
  - Endpoint: `/user`

- **Admin**
  - Description: API for admin-related actions.
  - Endpoint: `/admin`

## Protected APIs

- **User**
  - Description: Protected API for user-specific actions.
  - Endpoint: `/user`
  - Authentication: Requires a valid user token.

- **Admin**
  - Description: Protected API for admin-specific actions.
  - Endpoint: `/admin`
  - Authentication: Requires a valid user token and admin role.

## Admin Protected APIs

- **Admin**
  - Description: Admin-protected API for admin-specific actions.
  - Endpoint: `/admin`
  - Authentication: Requires a valid user token and admin role.


# RoleBasedAuth

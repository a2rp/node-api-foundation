# Node API Foundation - Documentation

## 1. Overview

Node API Foundation is a lightweight backend project built with Node.js and ExpressJS.

Its purpose is to demonstrate the minimum clean structure needed for a practical API foundation before adding larger concerns such as authentication, databases, caching, queues, or business modules.

The project covers:

- ExpressJS server setup
- Environment-based configuration
- JSON request parsing
- Root endpoint
- Health endpoint
- 404 handling
- Basic error handling
- Local API testing

---

# 2. Technology Stack

## Node.js

Node.js runs the backend JavaScript application.

It provides the runtime required to:

- Start the HTTP server
- Execute backend logic
- Handle requests
- Read environment variables
- Process application events

## ExpressJS

ExpressJS provides the web-server and routing layer.

It is used for:

- Creating routes
- Parsing requests
- Returning JSON responses
- Handling unknown routes
- Handling errors

## dotenv

`dotenv` loads environment variables from a local `.env` file.

## nodemon

`nodemon` automatically restarts the server when source files change during development.

---

# 3. Project Structure

```text
node-api-foundation/
├── .gitignore
├── DOCUMENTATION.md
├── index.js
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── res.http
```

The project intentionally keeps the structure minimal because its purpose is to demonstrate a foundation rather than a full feature-based backend.

---

# 4. `index.js`

`index.js` contains the main application logic.

It is responsible for:

- Loading environment variables
- Creating the ExpressJS app
- Enabling JSON request parsing
- Defining API endpoints
- Handling unknown routes
- Handling server errors
- Starting the HTTP server

For a small foundation project, keeping these concerns in one file makes the application easy to understand.

Larger projects separate these responsibilities into files such as:

```text
app.js
server.js
routes/
controllers/
middlewares/
```

That separation is demonstrated in later repositories.

---

# 5. Environment Configuration

The application reads the port from an environment variable.

Example:

```env
PORT=1198
```

If a port is not supplied, the application can fall back to a default value.

Using environment variables keeps configuration separate from application logic.

This is important because development, testing, and production environments may need different values.

---

# 6. Why Port 1198 Is Configurable

Hardcoding a port directly throughout the application makes future configuration harder.

Instead, the application uses:

```text
process.env.PORT
```

This allows the same codebase to run with different ports without modifying source code.

---

# 7. JSON Request Support

ExpressJS enables JSON request parsing using:

```js
app.use(express.json());
```

This allows incoming requests to contain JSON bodies.

Example:

```json
{
    "name": "Example"
}
```

Even though this foundation project does not yet implement CRUD operations, enabling JSON parsing prepares the API for future request bodies.

---

# 8. Root Endpoint

Endpoint:

```http
GET /
```

Purpose:

Confirm that the API is running.

Example response:

```json
{
    "success": true,
    "message": "Node API Foundation is running."
}
```

This provides a simple entry point for checking whether the server is available.

---

# 9. Health Check Endpoint

Endpoint:

```http
GET /api/v1/health
```

The health endpoint provides basic runtime information.

Example fields may include:

```text
success
status
service
uptime
timestamp
```

A health endpoint is useful for:

- Local testing
- Deployment checks
- Monitoring systems
- Load balancers
- Operations teams

---

# 10. API Versioning

The health route uses:

```text
/api/v1/health
```

The `v1` segment represents version 1 of the API.

Versioning provides room for future API changes without silently changing existing clients.

Example:

```text
/api/v1/health
/api/v2/health
```

---

# 11. 404 Handling

When a request does not match any valid endpoint, the application returns a structured 404 response.

Example:

```json
{
    "success": false,
    "message": "Route not found."
}
```

This is better than returning an inconsistent or generic server response.

---

# 12. Basic Error Handling

The project includes basic error handling so unexpected failures do not return unclear responses.

The purpose is to establish the concept of centralized error behavior.

More advanced repositories separate this into dedicated middleware files.

---

# 13. Response Structure

Successful responses generally use:

```json
{
    "success": true,
    "message": "Operation successful."
}
```

Error responses generally use:

```json
{
    "success": false,
    "message": "Something went wrong."
}
```

Keeping response shapes predictable makes frontend integration easier.

---

# 14. HTTP Status Codes

The project demonstrates common status codes.

```text
200 OK
Successful request

404 Not Found
Unknown route

500 Internal Server Error
Unexpected server failure
```

Later projects add more status codes such as:

```text
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
409 Conflict
```

---

# 15. `res.http`

The repository includes:

```text
res.http
```

This file provides simple API requests for testing.

Typical requests include:

```http
GET http://localhost:1198/
```

and:

```http
GET http://localhost:1198/api/v1/health
```

Using an HTTP request file makes testing quick and repeatable directly from VS Code.

---

# 16. Development Flow

Install dependencies:

```bash
npm install
```

Start development mode:

```bash
npm run dev
```

Nodemon watches project files and automatically restarts the application when changes are saved.

---

# 17. Production Command

Run:

```bash
npm start
```

This starts the application using Node.js directly.

---

# 18. Why This Repository Is Intentionally Small

The goal of this repository is not to demonstrate every backend concept.

Its purpose is to establish the basic building blocks first:

```text
Node.js Runtime
      |
      v
ExpressJS Application
      |
      v
Configuration
      |
      v
Routes
      |
      v
JSON Responses
      |
      v
Basic Error Handling
```

Keeping this repo small makes it useful as a starting reference.

More advanced concerns are demonstrated separately so each repository remains focused.

---

# 19. What This Project Teaches

After studying this repository, the following concepts should be clear:

- Creating a Node.js backend
- Installing and using ExpressJS
- Starting an HTTP server
- Using environment configuration
- Parsing JSON requests
- Creating routes
- Returning JSON responses
- Creating a health endpoint
- Handling unknown routes
- Handling basic errors
- Testing endpoints with an HTTP file
- Running development and production scripts

---

# 20. Request Lifecycle

A simple request follows this flow:

```text
Client Request
      |
      v
ExpressJS Server
      |
      v
Matching Route
      |
      v
Route Handler
      |
      v
JSON Response
```

If no route matches:

```text
Client Request
      |
      v
ExpressJS
      |
      v
No Matching Route
      |
      v
404 Response
```

---

# 21. Why This Foundation Matters

Larger backend systems are built on the same basic concepts demonstrated here.

Later features such as:

- Databases
- Authentication
- Authorization
- Caching
- Queues
- File uploads
- Notifications
- Testing
- Deployment

still depend on a correctly structured HTTP application foundation.

This repository therefore acts as the first building block in a larger backend learning and portfolio series.

---

# 22. Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash.ranjan09@gmail.com

# 23. Support

- Support: https://a2rp-donation-page.netlify.app/
- Buy Me A Coffee: https://buymeacoffee.com/a2rp
- Patreon: https://patreon.com/a2rp

---

# 24. License

This project is licensed under the MIT License.

# EMS: Employee Management System

A task-management dashboard built with **React** and **Tailwind CSS**. It has two roles. An **Admin** creates tasks and assigns them to employees. An **Employee** accepts tasks and marks them completed or failed. All data is kept in the browser's `localStorage` and shared through React Context, so no backend is needed.

## Features

### Admin
- Create a task with a title, description, due date, category and assignee
- See every employee's task counts at a glance: new, active, completed and failed

### Employee
- Personal dashboard with task-count cards
- Horizontally scrolling task list, with each card styled by its status
- **Accept** new tasks, then mark them **Completed** or **Failed**. The counts update right away.

### General
- Role-based login, and the session persists across reloads
- Logout from the header
- Data seeded into `localStorage` on first load

## Tech stack

React 19 · Vite · Tailwind CSS · Context API · localStorage

## Demo credentials

| Role | Email | Password |
| --- | --- | --- |
| Admin | `admin@me.com` | `123` |
| Employee | `e@e.com` | `123` |
| Employee | `employee2@example.com` … `employee5@example.com` | `123` |

## Project structure

```
src/
  components/
    Auth/Login.jsx
    Dashboard/AdminDashboard.jsx, EmployeeDashboard.jsx
    TaskList/       TaskList, NewTask, ActiveTask, ComleteTask, FailedTask
    other/          Header, CreateTask, AllTask, TaskListNumber
  context/AuthProvider.jsx   shares employee data app-wide
  utils/localStorage.jsx     seed data and storage helpers
  App.jsx                    login and role routing
```

## Getting started

### Prerequisites
- Node.js 18+

```bash
git clone https://github.com/mayurgarg08/EMS.git
cd EMS
npm install
npm run dev       # http://localhost:5173
```

> To reset the demo data, clear the site's `localStorage` in your browser dev tools.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the build |
| `npm run lint` | Run ESLint |

## Author

**Mayur Garg** · [GitHub](https://github.com/mayurgarg08) · [LinkedIn](https://www.linkedin.com/in/mayur-garg-428a291b4/)

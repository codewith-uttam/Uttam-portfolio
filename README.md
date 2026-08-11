# React Portfolio

A modern, responsive personal portfolio website built with React, Vite, and React Router.

## Project Details

This portfolio showcases personal projects, skills, education, and provides a way to get in touch. It is built for high performance and fast development using Vite and modern React practices.

### Features
- **Responsive Design**: Looks great on desktop, tablet, and mobile devices.
- **Client-side Routing**: Smooth navigation without page reloads using React Router.
- **Dynamic Content**: Sections for Home, About, Projects, Skills, Education, and Contact.

## Architecture

The project follows a component-based architecture with a clear separation of concerns.

### Tech Stack
- **Frontend Framework**: React 19
- **Routing**: React Router DOM v7
- **Build Tool**: Vite 8
- **Linting**: Oxlint

### Folder Structure

The application source code is primarily located in the `src` directory, structured as follows:

- `src/`
  - `components/`: Reusable UI components.
    - `Navbar.jsx`: Top navigation bar.
    - `Footer.jsx`: Bottom footer with social links/copyright.
  - `pages/`: Individual route components representing main views.
    - `Home.jsx`: Landing page introducing the portfolio.
    - `About.jsx`: Information about the developer.
    - `Projects.jsx`: Showcase of completed projects.
    - `Skills.jsx`: List of technical skills and proficiency.
    - `Education.jsx`: Academic background and certifications.
    - `Contact.jsx`: Form or details for getting in touch.
  - `App.jsx`: Main application component setting up routing.
  - `main.jsx`: Entry point for rendering the React application.
- `public/`: Static assets (CSS, JS, JSON data).

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

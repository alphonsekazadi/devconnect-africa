# DevConnect Africa

> A minimal collaboration board for African developers to connect, learn, and grow together.

**DEV Weekend Challenge: Community**

---

## What is DevConnect Africa?

DevConnect Africa is a simple platform where African developers can:
- Post skill requests (learning, mentoring, or collaboration)
- Browse all posted requests
- Filter by tech stack, type, and level
- Express interest and connect directly

This is NOT a social network or real-time chat app. It's a minimal, focused collaboration board.

---

## Features

- Create skill requests with tech stack, level, and contact info
- Browse all requests in a clean card layout
- Filter by tech stack (keyword search), type, and level
- Express interest to reveal contact information
- Fully responsive design (mobile-first)
- Dark theme with blue/orange branding
- Data persistence with localStorage
- Clean, scalable architecture

---

## Tech Stack

- **React 18** (with Vite)
- **React Router** (minimal routing)
- **Tailwind CSS** (styling)
- **Context API** (state management)
- **localStorage** (data persistence)

---

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── requests/        # RequestCard, RequestForm, RequestList, FilterBar
│   └── ui/              # Button, Badge, EmptyState
├── context/
│   └── RequestsContext.jsx   # Global state management
├── hooks/
│   └── useLocalStorage.jsx   # localStorage persistence
├── utils/
│   └── helpers.js            # Utility functions
├── pages/
│   ├── Home.jsx              # Browse requests
│   └── CreateRequest.jsx     # Post new request
├── App.jsx
├── main.jsx
└── index.css
```

---

## Architecture Decisions

### Why Context API?
- Avoids prop drilling
- Easy to replace with API calls later
- Sufficient for MVP scope

### Why localStorage?
- No backend needed for MVP
- Instant persistence
- Easy to swap with real API

### Why Tailwind CSS?
- Fast development
- Consistent design system
- Small bundle size with purging

### Component Structure
- **ui/**: Generic reusable components
- **requests/**: Domain-specific components
- **layout/**: App-wide layout components

This separation makes the codebase scalable and maintainable.

---

## Design System

### Colors
- **Primary**: `blue-400` (#60a5fa)
- **Accent**: `orange-500` (#f97316)
- **Background**: Black / near-black
- **Text**: White / gray scale

### Typography
- Clean, modern sans-serif
- Clear hierarchy with font sizes

### Components
- Rounded corners (lg)
- Subtle borders and shadows
- Hover states for interactivity

---

## Future Enhancements

- Backend API integration (replace localStorage)
- User authentication
- Real-time notifications
- Advanced search and sorting
- User profiles
- Request comments/discussions
- Email notifications

---

## Sample Data

On first load, the app will be empty. Create your first request to get started!

Example request:
- **Title**: "Looking for React mentor"
- **Description**: "I'm learning React and need guidance on hooks and state management"
- **Tech Stack**: "React, JavaScript, Hooks"
- **Level**: Beginner
- **Type**: Learning
- **Contact**: "@username on Discord"

---

## Contributing

This is an MVP built for the DEV Weekend Challenge. Feel free to fork and extend!

---

## License

[MIT License](LICENSE) - feel free to use this project as you wish.

---

## Built With

- by African developers, for African developers
- Submitted for DEV Weekend Challenge: Community

---

**Happy Connecting!**

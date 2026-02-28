# Quick Start Guide

## Step 1: Install Dependencies

Open your terminal in this directory and run:

```bash
npm install
```

This will install:
- React & React DOM
- React Router DOM
- Vite (build tool)
- Tailwind CSS & plugins

## Step 2: Start Development Server

```bash
npm run dev
```

The app will be available at: **http://localhost:5173**

## Step 3: Start Using the App

1. Click "Post Request" to create your first skill request
2. Fill in the form with your details
3. Browse all requests on the home page
4. Use filters to find specific tech stacks, types, or levels
5. Click "I'm Interested" to reveal contact information

## What to Test

- Create multiple requests with different tech stacks
- Filter by tech stack (try "React", "Python", etc.)
- Filter by type (Learning, Mentoring, Collaboration)
- Filter by level (Beginner, Intermediate, Advanced)
- Click "I'm Interested" to reveal contact info
- Refresh the page - data persists in localStorage
- Test on mobile (responsive design)

## Responsive Design

The app is mobile-first and works on:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## Troubleshooting

**Port already in use?**
- Vite will automatically try the next available port
- Or specify a port: `npm run dev -- --port 3000`

**Styles not loading?**
- Make sure Tailwind is properly installed
- Check that `index.css` is imported in `main.jsx`

**Data not persisting?**
- Check browser console for localStorage errors
- Make sure localStorage is enabled in your browser

## Customization

Want to change the colors? Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#60a5fa',  // Change this
      accent: '#f97316',   // Change this
    },
  },
}
```

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

Preview production build:
```bash
npm run preview
```

---

**Enjoy building with DevConnect Africa!**

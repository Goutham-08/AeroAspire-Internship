#  2nd Week Day 2 Task – React Components & Props (AeroAspire Internship)

This week’s task was all about **understanding React components** and learning how to **pass data through props**.  
I built a small project called **TaskCard** where each task is displayed as a colorful card.

---

## What I built
- A **TaskCard component** that takes in `title`, `description`, `status`, and a `color` as props.  
- Cards are displayed in a neat **grid layout**, so they look like a mini task board.  
- Each card has:
  - A task title  
  - A short description  
  - A colorful status badge (Pending / In Progress / Done)  
  - Buttons for future actions (Edit / Delete)  
- Cards are **colorful, compact, and responsive**, with a small hover animation to make the UI fun.

---

## Preview

Here’s a screenshot of the output:

![Preview](./screenshot.png)

---

## How I did it
1. Created a **`TaskCard.jsx`** file → handles a **single card** only.  
2. In **`App.jsx`**, I made a dummy list of tasks and used `map()` to render multiple `TaskCard`s.  
3. Styled the cards using simple **inline CSS** (no extra installations).  
4. Made the layout responsive with CSS Grid so the cards adjust nicely on different screen sizes.  

---

## ▶️ Running the project
1. Clone this repo or pull the latest changes.  
2. Run `npm install` (only if starting fresh).  
3. Run `npm start` to see the project in action.  
4. Open your browser at `http://localhost:3000/` (or the port shown in your terminal).  

---

##  Learnings
- How to break UI into **reusable components**.  
- How to **pass props** to customize each card.  
- How to style cards using inline CSS without external libraries.  
- A bit of creativity with layout, colors, and hover effects.  
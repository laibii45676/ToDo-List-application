const express = require('express');
const path = require('path');
const app = express();
const port = 5002;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // To handle form data

let tasks = []; // In-memory task list

// Show ToDo list page
app.get('/', (req, res) => {
res.render('todo', { tasks: tasks });
});

// Add task
app.post('/add', (req, res) => {
const task = req.body.task;
if (task) tasks.push(task);
res.redirect('/');
});

// Server start
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
}); 

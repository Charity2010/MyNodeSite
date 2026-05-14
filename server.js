const express = require('express')
const nodemailer = require("nodemailer");
 

const app = express()

 // Middleware to read form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000

 

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

// app.get('/about', (req, res) => {
//     res.send("<h1>About Me</h1>")
// })

// app.get('/', (req, res) => {
//     res.send("<h1>Welcome to My Website</h1>")
// })
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})

app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/public/projects.html')
})

app.get('/page1', (req, res) => {
  res.sendFile(__dirname + '/public/page1.html')
})

app.get('/style',(req, res)=> {
  res.sendFile(_dirname + '/public/style.css')
})
 // Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {

  user: "renctestudent@gmail.com",

  pass: "qvkutajqvkfrmjkf"
}
});

// Handle form submission
app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: "ryan.caufield@infoflo.tech", // must match your Gmail
      to: "youremail@gmail.com",   // where you receive messages
      subject: `Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    });

    res.send("<h2>Email sent successfully!</h2><a href='/'>Go back</a>");
  } catch (error) {
    console.error(error);
    res.send("<h2>Error sending email</h2><a href='/'>Try again</a>");
  }
});


import bodyParser from 'body-parser';
import cors from 'cors'
import express from 'express';
import { signup, login } from './controllers/authController.js';
import { contactus } from './controllers/contactController.js';

const port = 8000;
const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Allow only your Vue.js frontend to access the backend
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

app.post("/login",login)
app.post("/signup",signup)
app.post("/contact",contactus)

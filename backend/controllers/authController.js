
// Import necessary modules
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../db/db.js'; // Assuming db.js handles MySQL connection pool
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// User signup function
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const [existingUser] = await pool.query('SELECT * FROM users WHERE Email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await pool.query('INSERT INTO users (Name, Email, Password) VALUES (?, ?, ?)', [
      username,
      email,
      hashedPassword,
    ]);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// User login function
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const [user] = await pool.query('SELECT * FROM users WHERE Email = ?', [email]);

    if (user.length === 0) {
      return res.status(400).json({ message: 'Invalid email ' });
    }

    // Check if the password is valid
    const validPassword = await bcrypt.compare(password, user[0].Password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid  password' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user[0].id, email: user[0].Email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

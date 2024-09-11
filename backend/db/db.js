import mysql from 'mysql2/promise'; // Using promise-based mysql2
import { config } from 'dotenv';

config(); 

// Create an async function to handle the connection pool
export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

const testConnection = async () => {
    try {
      const connection = await pool.getConnection();
      console.log('Database connected successfully');
      connection.release(); // Release the connection back to the pool
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  };
  
  // Call the function to confirm connection
  testConnection();



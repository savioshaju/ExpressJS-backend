import express from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './config/connectdb.js';
import itemRoutes from './routes/itemRoute.js';
import { statusCodes } from './helpers/userHelper.js';

dotenv.config();
connectDatabase();

const app = express();

app.use(express.json());

// Log request method and path
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Base route
app.get('/', (req, res) => res.send("Inventory API is Running"));

// Health check
app.get('/health', (req, res) => {
  const status = statusCodes.find(item => item.code === 200);
  res.status(status.code).json({ success: true, message: status.message + " Server is running" });
});

// Item routes
app.use("/api/items", itemRoutes);

// 404 
app.use((req, res) => {
  const status = statusCodes.find(item => item.code === 404);
  res.status(status.code).json({ success: false, message: "URL " + req.originalUrl + " " + status.message });
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000..."));

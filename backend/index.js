const express = require("express");
const mongoose = require("./config/Database");
const cors = require("cors");
require("dotenv").config();

const messageRoutes = require("./routes/messageRoutes"); // Import routes
const adminRoutes = require("./routes/adminRoutes"); // Import routes

const app = express();
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/messages", messageRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

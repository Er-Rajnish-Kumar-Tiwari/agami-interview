const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://tanish281202:tanish281202@cluster0.vxmbtxq.mongodb.net/?appName=Cluster0");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};

module.exports = dbConnection;

import express from "express";
import multer from "multer";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// Configure multer for handling file uploads
const upload = multer({ dest: "uploads/" });

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI("AIzaSyCPvFG5zZAIluV9mmFey4N_xMVc-yVFblc");

app.post("/analyze", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const prompt = req.body.prompt || "Describe this image";
    const imagePath = req.file.path;

    // Read the image file
    const imageBuffer = fs.readFileSync(imagePath);

    // Convert the image to base64
    const imageBase64 = imageBuffer.toString("base64");

    // Set up the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    // Create a GoogleGenerativeAI instance for the image
    const imageParts = [
      {
        inlineData: {
          data: imageBase64,
          mimeType: req.file.mimetype,
        },
      },
    ];

    // Generate content
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();

    // Clean up: delete the uploaded file
    fs.unlinkSync(imagePath);

    res.json({ parts: [{ text: text }] });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred during image analysis");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

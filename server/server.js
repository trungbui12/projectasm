import express from "express"
import "dotenv/config";
import cors from "cors";

const app = express()
app.use(cors()) // Bật chia sẻ tài nguyên giữa các nguồn khác nhau

app.get('/', (req, res)=> res.send("API is working fineee "))

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
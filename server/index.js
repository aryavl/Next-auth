import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
    res.json({ message: "Hello" });
});

app.listen(port, () => {
    console.log("Connected to", port);
});

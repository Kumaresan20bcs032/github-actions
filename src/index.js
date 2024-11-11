const express = require("express");
const app = express();


app.get("/", (req, res) => {
    return res.json({ message: "Application api working" });
})

app.get("/get", (req, res) => {
    return res.json({ message: "Application api working" });
})


const PORT = process.env?.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server started at host http://localhost:${PORT}`);
})
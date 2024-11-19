const express = require("express");
const app = express();


app.get("/", (req, res) => {
    return res.json({ message: "Application api working" });
})

app.get("/get", (req, res) => {
    return res.json({ message: "The get api will be called" });
})

app.get("/node", (req, res) => {
    return res.json({ message: "The node.js api will be called" });
})

const PORT = process.env?.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server started at host http://localhost:${PORT}`);
})
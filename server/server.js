const express = require('express');
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json()); // Add this to parse JSON bodies

let { DNACategories, DNAExecutables, RNACategories, RNAExecutables } = require('./public/data/SiteData');

app.get("/api", (req, res) => {
    console.log("IS THIS:", DNAExecutables)
    console.log("Sending THIS:", Array.from(DNAExecutables))
    res.json({"categories": DNACategories, "serverData": Array.from(DNAExecutables)})
});

app.post('/api', (req, res) => {
  let receivedData = req.body;
  DNAExecutables = new Map(Object.entries(receivedData));
  console.log("Received data:", receivedData);
  console.log("New DNA Executables:", DNAExecutables);
  res.json({ message: "Data received successfully" });
});


app.listen(8080, () => {console.log("Server started on port 8080")});
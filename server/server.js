const express = require('express');
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));

const { DNACategories, DNAExecutables, RNACategories, RNAExecutables } = require('./public/data/SiteData');


const majorArray = [
    {
      title: "SAM", items: [
        { title: "Add Or Replace Read Groups", active: true, running: "done", data: [['Overwrite Existing Read Groups', 'checkbox', 'true'], ['New Read Group Line', 'text', 'asdf']] },
        { title: "Sort BAM File", active: false, running: "none", data: [['Test Input', 'text', 'Test Response'], ['Second Test Input', 'text', 'Test Response 2']] },
      ]
    },
    {
      title: "FastQ", items: [
        { title: "FASTQC", active: true, running: "done", data: [['Overwrite Existing Read Groups', 'checkbox', 'true'], ['New Read Group Line', 'text', 'asdf']] },
        { title: "BCL2FASTQ", active: false, running: "none", data: [['Test Input', 'text', 'Test Response'], ['Second Test Input', 'text', 'Test Response 2']] },
      ]
    },
    {
      title: "BAM", items: [
        { title: "BAM File Analysis", active: true, running: "done", data: [['Overwrite Existing Read Groups', 'checkbox', 'true'], ['New Read Group Line', 'text', 'asdf']] },
        { title: "Index BAM File", active: false, running: "none", data: [['Test Input', 'text', 'Test Response'], ['Second Test Input', 'text', 'Test Response 2']] },
      ]
    },
  ]

app.get("/api", (req, res) => {
    // res.json({"fruits": ["userOne", "userTwo", "userThree", "userFour"]})
    res.json({"categories": DNACategories, "serverData": Array.from(DNAExecutables)})
});

app.listen(8080, () => {console.log("Server started on port 8080")});
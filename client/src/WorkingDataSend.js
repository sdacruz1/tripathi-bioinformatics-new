import React, {useEffect, useState} from 'react'
import { Container, Typography, Button, Box } from "@mui/material"
import axios from "axios";
import TimelineItem from './components/TimelineItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const App = () => {
  const [backendData, setBackendData] = useState(new Map());
  const [categories, setCategories] = useState([]);

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api");
      const serverData = new Map(response.data.serverData); // Convert array to Map
      setBackendData(serverData);
      setCategories(response.data.categories);
      console.log("Fetched Data (Map):", serverData);
      console.log("Fetched Categories:", response.data.categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const DNACategories = [
    { title: "CHANGED", entries: ["fasta-to-fastq", "fasDID IT CHANGEstq", "bcl2fastq", "saMIHOAHDNAOMAm", "sort-bam-file", "iHEYOOOOOile", "fastqc"]},
    { title: "BIG CHANGE", entries: ["trimming", "alWEEOOOOamem", "alignment-bowtie", "aligHELLOOOe2", "mark-or-remove-duplicates"]},
    { title: "OOOOOOOOO", entries: ["add-or-OOAH-read-groups", "bam-index-stats", "flag-stats", "alWASUPPPPSAAAary", "gc-bias-summary", "insert-size-summary", "create-sequence-dictionary", "sequence-depth", "sequence-coverage"] },
];

  // Send data back to the backend
  const sendData = async () => {
    try {
      // const response = await axios.post(
      //   "http://localhost:8080/api",
      //   Object.fromEntries(backendData) // Convert Map to object before sending
      // );
      const response = await axios.post("http://localhost:8080/api", DNACategories);
      console.log("Data sent to backend:", Object.fromEntries(backendData));
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Test Map Data with Backend</h1>
      <button onClick={fetchData} style={{ margin: "10px", padding: "10px" }}>
        Fetch Data
      </button>
      <button onClick={sendData} style={{ margin: "10px", padding: "10px" }}>
        Send Data
      </button>
      <div style={{ marginTop: "20px" }}>
        <h2>Fetched Categories:</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              {category.title}
              <ul>
               {category.entries.map((subcategory, subindex) => (
                <li key={subindex}>{subcategory}</li>
               ))}
              </ul>
            </li>
          ))}
        </ul>
        {/* <ul>
  {[...backendData.entries()].map(([key, value]) => (
    <li key={key}>
      <strong>{key}:</strong>{" "}
      {typeof value === "object" && value !== null
        ? JSON.stringify(value) // Convert object to string
        : value}
    </li>
  ))}
</ul> */}
      </div>
    </div>
  );
};

export default App;

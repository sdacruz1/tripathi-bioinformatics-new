import React, {useEffect, useState} from 'react'
import { Container, Typography, Button, Box } from "@mui/material"
import axios from "axios";
import TimelineItem from './components/TimelineItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Timeline() {

  const [backendData, setBackendData] = useState(new Map())
  const [backendCategories, setBackendCategories] = useState([{}])

  // Get Data From The Backend
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setBackendData(new Map(response.data.serverData));
    setBackendCategories(response.data.categories);
    console.log("Server Data", new Map(response.data.serverData));
    console.log("Server Categories", response.data.categories);
  }

  useEffect(() => {
    fetchAPI();
  }, [])

  // for testing
  // useEffect(() => {
  //   console.log("Updated backendData:", backendData);
  //   console.log("Value for 'fastqc':", backendData.get("fastqc"));
  // }, [backendData]); // Runs whenever backendData changes

  // Send Data To The Backend
  const sendDataToBackend = async (data) => {
    try {
      await axios.post(
        "http://localhost:8080/api",
        Object.fromEntries(data) // Convert Map to object before sending
      );
      console.log("Data sent to server:", data);
    } catch (error) {
      console.error("Error sending data to the server:", error);
    }
  };

  const [timelineState, setTimelineState] = useState("editing");

  const toggleTimelineMode = () => {
    if (timelineState === "editing") {
      setTimelineState("saved");
      sendDataToBackend(backendData);
    } else {
      setTimelineState("editing");
      fetchAPI();
    }
  }

  return (
    <Container>
      <Box className="flex flex-col" sx={{ gap: 1, "p": 1 }}>
        <Box sx={{ "bgcolor": "#148087", "p": 4, "borderRadius": "2rem" }}>
          <Typography variant="h1">Timeline Creation</Typography>
          <br />
          <Typography variant="h2">File Conversion</Typography>
          <Typography variant="p">How far would you like to convert your file type? Some data analysis steps require a threshold of conversion</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, "p": 1 }}>
          {backendCategories.map((majorItem, mIndex) => (
            <Box key={mIndex} sx={{ display: "flex" }}>
              <Box sx={{ "borderRadius": "1rem", "p": 2, "bgcolor": "#148087" }}>
                <Typography variant="h3" sx={{ "color": "#ffffff" }}>{majorItem.title}</Typography>
                {majorItem.entries?.map((item, index) => (
                  (timelineState === 'saved' && !backendData.get(item).isEnabled) ? (null) : (
                    <TimelineItem key={index} item={backendData.get(item)} timelineState={timelineState} />
                  )
                ))}
              </Box>
              {mIndex < backendCategories.length - 1 && (
                <ArrowForwardIcon sx={{ color: "#148087", fontSize: 40 }} />
              )}
            </Box>
          ))}
        </Box>
        <Button variant="contained" onClick={toggleTimelineMode}> {timelineState === 'editing' ? ('Save Timeline') : ('Edit Timeline')}</Button>
      </Box>
    </Container>
  )
}

export default Timeline
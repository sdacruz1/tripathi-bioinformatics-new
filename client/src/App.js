import React, {useEffect, useState} from 'react'
import { Container, Typography, Button, Box } from "@mui/material"
import axios from "axios";
import TimelineItem from './components/TimelineItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function App() {

  const [backendData, setBackendData] = useState(new Map())
  const [backendCategories, setBackendCategories] = useState([{}])

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setBackendData(new Map(response.data.serverData));
    setBackendCategories(response.data.categories);
    console.log("Server Data", new Map(response.data.serverData));
    console.log(response.data.categories);
  }

  useEffect(() => {
    fetchAPI();
  }, [])

  // const majorArray = [
  //   {
  //     majorTitle: "SAM", items: [
  //       { title: "Add Or Replace Read Groups", active: true, running: "done", data: [['Overwrite Existing Read Groups', 'checkbox', 'true'], ['New Read Group Line', 'text', 'asdf']] },
  //       { title: "Sort BAM File", active: false, running: "none", data: [['Test Input', 'text', 'Test Response'], ['Second Test Input', 'text', 'Test Response 2']] },
  //     ]
  //   },
  //   {
  //     majorTitle: "FastQ", items: [
  //       { title: "FASTQC", active: true, running: "done", data: [['Overwrite Existing Read Groups', 'checkbox', 'true'], ['New Read Group Line', 'text', 'asdf']] },
  //       { title: "BCL2FASTQ", active: false, running: "none", data: [['Test Input', 'text', 'Test Response'], ['Second Test Input', 'text', 'Test Response 2']] },
  //     ]
  //   },
  //   {
  //     majorTitle: "BAM", items: [
  //       { title: "BAM File Analysis", active: true, running: "done", data: [['Overwrite Existing Read Groups', 'checkbox', 'true'], ['New Read Group Line', 'text', 'asdf']] },
  //       { title: "Index BAM File", active: false, running: "none", data: [['Test Input', 'text', 'Test Response'], ['Second Test Input', 'text', 'Test Response 2']] },
  //     ]
  //   },
  // ]

  const [state, setState] = useState("editing");
  const [timelineState, setTimelineState] = useState("editing");

  const toggleEditMode = () => {
    state === "editing" ? setState('saved') : setState('editing');
  }
  const toggleTimelineMode = () => {
    if (timelineState === "editing") {
      setTimelineState("saved");
      setState("saved");
    } else {
      setTimelineState("editing");
      setState("editing");
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
            <Box sx={{ display: "flex" }}>
              <Box key={mIndex} sx={{ "borderRadius": "1rem", "p": 2, "bgcolor": "#148087" }}>
                <Typography variant="h3" sx={{ "color": "#ffffff" }}>{majorItem.title}</Typography>
                {majorItem.entries?.map((item, index) => (
                  (timelineState === 'saved' && !backendData.get(item).isEnabled) ? (null) : (
                    <TimelineItem key={index} item={backendData.get(item)} timelineState={timelineState} state={state} toggleEditMode={toggleEditMode} />
                  )
                ))}
              </Box>
              {mIndex < backendCategories.length - 1 && (
                <ArrowForwardIcon sx={{ color: "#148087", fontSize: 40 }} />
              )}
            </Box>
          ))}
        </Box>
        <Button variant="contained" onClick={toggleTimelineMode}> {state === 'editing' ? ('Save Timeline') : ('Edit Timeline')}</Button>
      </Box>
    </Container>
  )
}

export default App


// {[...backendData].map(([key, value]) => (
//   <p key={key}>{key}: {value.title}</p>))}
// import React, {useEffect, useState} from 'react'
import {Container, Typography, Box, Button, Input, Paper, MenuItem, Select, Checkbox} from "@mui/material"
// import axios from "axios";

function App() {

  // const [backendData, setBackendData] = useState([{}])

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:8080/api");
  //   setBackendData(response.data.fruits);
  //   console.log(response.data.fruits);
  // }

  // useEffect(() => {
  //   fetchAPI();
  // }, [])

  return (
    <Container>
      
      <Box sx={{display: "flex", gap: 1}}>
      <Box sx={{"bgcolor": "#148087", "p": 8, "borderRadius": "6rem", "width": "32vw"}}>
        <Typography variant="h1">Revvity Bioinformatics Analysis Tool</Typography>
        <br/>
        <Typography variant="h2">Let's Get Started!</Typography>
        <br/>
        <Typography variant="p" sx={{display: "block", height: "3rem", width: "32rem"}}>
        This program is designed to take your bio-informatics files from raw data to polished graphs,
        but you can also start and end your processing journey anywhere in between. For more information
        on the steps involved in our data processing pipeline, click here.
        </Typography>
        <br/>
        <br/> 
        <Box>
        <Typography variant="h3">1. Select a workflow.</Typography>
          <br/>
          <Box sx={{display: "flex", gap: 2}}>
            <Button variant="contained" sx={{height: "3rem", width: "12rem", bgcolor: "#feeb0f", color: "#000000", fontWeight: 600}}>Assisted Pipeline</Button>
            <Typography variant="p" sx={{display: "block", height: "3rem", width: "16rem"}}> I would like a pipeline to be generated for me based on my file inputs and preferences.</Typography>
          </Box>
          <br/>
          <Box sx={{display: "flex", gap: 2}}>
            <Button variant="contained" sx={{height: "3rem", width: "12rem", bgcolor: "#feeb0f", color: "#000000", fontWeight: 600}}>Custom Pipeline</Button>
            <Typography variant="p" sx={{display: "block", height: "3rem", width: "16rem"}}>I have a moderate to advanced level of experience and I would like to customize my conversion pipeline.</Typography>
          </Box>
        </Box>
        <br/>
        <Box>
          <Typography variant="h3">2. What type of input sample are you hoping to analyze?</Typography>
          <br/>
          <Box sx={{display: "flex", gap: 2}}>
            <Button variant="contained" sx={{height: "3rem", width: "12rem", bgcolor: "#feeb0f", color: "#000000", fontWeight: 600}}>RNA</Button>
            <Button variant="contained" sx={{height: "3rem", width: "12rem", bgcolor: "#feeb0f", color: "#000000", fontWeight: 600}}>DNA</Button>
          </Box>
        </Box>
      </Box>
      <br/>
      <Box sx={{bgcolor: "#3dd4cc", "p": 8, "borderRadius": "6rem", "width": "42vw"}}>
        <Box>
          <Typography variant="h3">3. Upload your data.</Typography>
          <br/>
          <Typography variant="h4">What file type are you uploading?</Typography>
          <br/>
          <Typography variant="h4" sx={{color: "#148087"}}>Main File</Typography>
            <Button components="label" sx={{fontSize: "14px", display: "flex", gap: "6"}}>
              Upload File <Input  sx={{fontSize: "12px", px: 2}} type="file" onChange={(event) => console.log(event.target.files)} multiple />
            </Button>
            <Button components="label" sx={{fontSize: "14px", display: "flex", gap: "6"}}>
              Upload File <Input  sx={{fontSize: "12px", px: 2}} type="file" onChange={(event) => console.log(event.target.files)} multiple />
            </Button>
          <Typography variant="h4" sx={{color: "#148087"}}>Genome / Transcriptome File</Typography>
            <Button components="label" sx={{fontSize: "14px", display: "flex", gap: "6"}}>
              Upload File <Input  sx={{fontSize: "12px", px: 2}} type="file" onChange={(event) => console.log(event.target.files)} multiple />
            </Button>

          <br/>
          <Paper sx={{p: 2}}>
           <Typography variant="h4" sx={{color: "#148087"}}>! Your data seems to have an adapter applied. You can:</Typography>
           <Typography variant="p" sx={{color: "#148087"}}>Use one of our pre-uploaded options: <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"House Mouse"}
                label="Age"
              >
              <MenuItem value={10}>House Mouse</MenuItem>
              <MenuItem value={20}>EColi</MenuItem>
              <MenuItem value={30}>Pig</MenuItem>
            </Select>
            OR
            <Button components="label" sx={{fontSize: "14px", display: "flex", gap: "6"}}>
              Upload File <Input  sx={{fontSize: "12px", px: 2}} type="file" onChange={(event) => console.log(event.target.files)} multiple />
            </Button>
            </Typography>
            <Checkbox defaultChecked/> <Typography variant="p" sx={{color: "#000000"}}>Run adapter trimming?</Typography>
          </Paper>
          <br></br>
        <Button variant="contained">Continue</Button>
      </Box>
      </Box>
      </Box>
      </Container>
  )
}

export default App
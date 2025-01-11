import React, {useEffect, useState} from 'react'
import { Container, Typography, Button, Box, Checkbox } from "@mui/material"
import axios from "axios";

function App() {

  const [backendData, setBackendData] = useState([{}])

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setBackendData(response.data.serverData);
    console.log(response.data.serverData);
  }

  useEffect(() => {
    fetchAPI();
  }, [])

  const majorArray = backendData;

  return (
    <Container>
      <Box className="flex flex-col" sx={{ gap: 1, "p": 1 }}>
        <Box sx={{ "bgcolor": "#148087", "p": 4, "borderRadius": "2rem" }}>
          <Typography variant="h1">Download Results</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, "p": 1 }}>
          {majorArray.map((majorItem, mIndex) => (
            <Box key={mIndex} sx={{display: "flex", alignItems: "center", p: 1, border: "4px solid #148087", borderRadius: "5px", bgcolor: "#148087"}}>
              <Checkbox />
              <Typography variant='p' sx={{fontWeight: 600}}>{majorItem.title}</Typography>
            </Box>
          ))}
        </Box>
        <Button variant="contained">Download</Button>
      </Box>
    </Container>
  )
}

export default App
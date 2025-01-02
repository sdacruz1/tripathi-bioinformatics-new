import { React, useState } from "react";
import { Typography, Input, Box, Select, MenuItem } from "@mui/material"

const ItemInfo = ({parameter, state}) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography sx={{ fontSize: "12px", fontWeight: "400", color: "#ffffff", paddingRight: "4px" }}>{parameter.title}</Typography>

            {state === "saved" ?
                ( <Typography variant="p" sx={{ fontSize: "12px", fontWeight: "400", color: "#9ceef2", paddingRight: "4px" }}>{parameter.value.toString()}</Typography>)
                :
                ( parameter.type === "select" ?
                    <Select
                    variant= "filled"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValue}
                    label="Choose an Option"
                    onChange={handleChange}
                    sx={{ transform: "scale(0.8)", color: "white" }}>
                        {parameter.options.map((item, index) => (
                            <MenuItem key={index} value={item[0]}>{item[0]}</MenuItem>
                        ))}
                    </Select>
                    :
                    <Input sx={{ fontSize: "12px", color: "#ffffff" }} type="text" />
                )}
        </Box>
    )
}

export default ItemInfo;
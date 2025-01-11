import { React, useState } from "react";
import { Typography, Input, Box, Select, MenuItem } from "@mui/material"

const ItemInfo = ({parameter, itemState}) => {
    const [selectedValue, setSelectedValue] = useState(["NONE SELECTED", parameter.value]);

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
      parameter.value = event.target.value[1];
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography sx={{ fontSize: "12px", fontWeight: "400", color: "#ffffff", paddingRight: "4px" }}>{parameter.title}</Typography>

            {itemState === "saved" ?
                ( <Typography variant="p" sx={{ fontSize: "12px", fontWeight: "400", color: "#9ceef2", paddingRight: "4px" }}>{selectedValue[0].toString()}</Typography>)
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
                            <MenuItem key={index} value={item}>{item[0]}</MenuItem>
                        ))}
                    </Select>
                    :
                    <Input sx={{ fontSize: "12px", color: "#ffffff" }} type="text" />
                )}
        </Box>
    )
}

export default ItemInfo;
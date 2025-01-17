import { React, useState } from 'react';
import { Typography, Button, Box, Checkbox } from "@mui/material"
import ItemInfo from './ItemInfo';


const TimelineItem = ({ item, timelineState }) => {

    const [itemState, setItemState] = useState(item.isEnabled ? "editing" : "inactive"); // inactive, editing, saved

    const toggleItemEnabled = () => {
        setItemState(itemState !== "inactive" ? "inactive" : "editing");
        item.isEnabled = !item.isEnabled;
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            {(timelineState === 'saved' ?
                (<Typography variant="p" sx={{ color: "#ffffff", fontWeight: "bold", py: "10px" }}>{(item.running === "running" ? ("RUNNING - ") : (item.running === "done" ? ("DONE - ") : null))}{item.title}</Typography>)
                :
                (<Typography variant="p" sx={{ color: "#ffffff", fontWeight: "bold" }}><Checkbox onChange={toggleItemEnabled} checked={item.isEnabled}/>{item.title}</Typography>)
            )}
            {((item.parameters.length === 0 || itemState === "inactive")) ? (null) :
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", marginLeft: "2rem", p: 1, border: "2px solid #ffffff", borderRadius: "1rem" }}>
                    {item.parameters.map((parameter, pIndex) => (
                        <ItemInfo key={pIndex} parameter={parameter} itemState={itemState} />
                    ))}
                    {((timelineState === "editing") ?
                        <Button sx={{ bgcolor: "#ffffff", transform: "scale(0.8)", width: "1rem" }} onClick={() => setItemState((itemState === 'editing') ? "saved" : "editing")}> {itemState === 'editing' ? ('Save') : ('Edit')}</Button>
                        :
                        null
                    )}
                </Box>
            }
        </Box>
    );
};

export default TimelineItem;
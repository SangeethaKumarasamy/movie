import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ColorList() {
    const [color, setColor] = useState("yellow");
    const styles = { backgroundColor: color, color: "black" };
    const initial_colors = ["orange", "blue", "lavender", "pink"];
    const [colors, setColors] = useState(initial_colors);
    return (
        <div>
            <TextField value={color}
                style={styles}
                onChange={(event) => setColor(event.target.value)}
                label="Enter a color"
                variant="outlined" />
            {/* <input
                value={color}
                style={styles}
                onChange={(event)=>setColor(event.target.value)}
                placeholder="Enter a color"
            /> */}
            <Button onClick={() => setColors([...colors, color])} variant="contained">Add Color</Button>


            {colors.map((clr, index) => (
                <ColorBox key={index} color={clr} />
            ))}

        </div>
    );
}
function ColorBox({ color }) {
    const styles = {
        height: "75px",
        width: "175px",
        background: color,
        margin: "10px 0px",
    };
    return (
        <div style={styles}></div>
    );
}

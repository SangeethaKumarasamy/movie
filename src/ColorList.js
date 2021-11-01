import { useState } from "react";
import { ColorBox } from './ColorBox';

export function ColorList() {

  const [color, setColor] = useState("yellow");
  const initial_colors = ["orange", "blue", "lavender", "pink"];
  const [colors, setColors] = useState(initial_colors);
  const styles = { backgroundColor: color, color: "black" };
  return (
    <div>
      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="enter color" />
      <button onClick={() => setColors([...colors, color])}> Add color</button>
      {colors.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );


}





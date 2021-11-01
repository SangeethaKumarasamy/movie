export function ColorBox({ color }) {
    const styles = {
      height: "75px",
      width: "175px",
      backgroundColor: color,
      margin: "10px 0px"
    };
    return (
      <div style={styles}></div>
  
    );
  }
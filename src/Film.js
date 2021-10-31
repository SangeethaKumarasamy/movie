import { Counter } from './Counter';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import CardActions from '@mui/material/CardActions';


export function Film({ name, rating, summary, pic }) {
    const[show,setShow]=useState(false);
    // const styles={display:show ?'block' :'none'};

    return (
    <Card className="movie-container">
            <img className="movie-pic" src={pic} alt={name} />
        <CardContent>
            <div className="movie-specifications">
                <h3 className="movie-name"> {name} {" "} 
        <IconButton
            className="show-button"
            onClick={()=>setShow(!show)}
            color="primary"
            aria-label={show ?"Hide" : "Show"}>
            {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </IconButton>
                </h3>
            <p className="movie-rating"> ⭐{rating} </p>
            </div>
           
            {/* <button 
            className="show-button"
            onClick={()=>setShow(!show)}>
            {show ? "Hide" : "Show"} Description
            </button> */}
            {/* <p className="movie-summary" style={styles}>{summary}</p> */}
            {show ? <p>{summary}</p> : ""}
        <CardActions>
            <Counter />
        </CardActions>
        
        </CardContent>
        
    </Card>


    );
}

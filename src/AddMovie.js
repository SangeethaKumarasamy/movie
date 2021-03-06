import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";




export function AddMovie({ movielist, setMovielist }) {



    const [name, setName] = useState("");
    const [pic, setPic] = useState("");
    const [summary, setSummary] = useState("");
    const [rating, setRating] = useState("");
    const [trailer, setTrailer] = useState("");

    // const [movielist, setMovielist] = useState(movielist);
 
    const resetMovieForm = (event) => {
        setName("");
        setPic("");
        setSummary("");
        setRating("");
        setTrailer("")
    };

    const addMovie = () => {
        console.log("before   "+movielist);
        setMovielist([{ name, pic, summary, rating,trailer }, ...movielist]);
        console.log("after  "+movielist);
        resetMovieForm();
    };
    return (
        <div className="input_field">
            <TextField
                className="input_text"
                id="outlined-basic"
                label="Movie Name"
                variant="outlined"
                value={name}
                onChange={event => setName(event.target.value)} />
            <TextField
                className="input_text"
                id="outlined-basic"
                label="Poster Link"
                variant="outlined"
                value={pic}
                onChange={event => setPic(event.target.value)} />
            <TextField
                className="input_text"
                id="outlined-basic"
                label="Summary"
                variant="outlined"
                value={summary}
                onChange={event => setSummary(event.target.value)} />
            <TextField
                className="input_text"
                id="outlined-basic"
                label="Rating"
                variant="outlined"
                value={rating}
                onChange={event => setRating(event.target.value)} />
                <TextField
                className="input_text"
                id="outlined-basic"
                label="Tailer"
                variant="outlined"
                value={trailer}
                onChange={event => setRating(event.target.value)} />
            <Button
                variant="contained"
                onClick={() => (addMovie())}
                >
                Add Movie</Button>

             
            
        </div>
    );
}
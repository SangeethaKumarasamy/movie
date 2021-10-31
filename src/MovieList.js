import { Film } from "./Film";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function MovieList() {
    const initial_movies = [
        {
            name: "Ratatouille",
            ratings: "8",
            summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
            pic: "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
        },
        {
            name: "Tangled",
            ratings: "7.7",
            summary: "Rapunzel, a naive and young girl, is locked up by her overly protective mother. Her wish to escape into the world outside finally comes true when she meets the good-hearted thief, Flynn.",
            pic: "https://ae01.alicdn.com/kf/HTB1OdqTHkOWBuNjSsppq6xPgpXaR/Custom-Canvas-Wall-Decor-Tangled-Poster-Tangled-Wall-Stickers-Mural-Cartoon-Wallpaper-Kids-Home-Decoration-Christmas.jpg",
        },
        {
            name: "Moana",
            ratings: "7.6",
            summary: "Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod, after the plants and the fish on her island start dying due to a blight.",
            pic: "https://mypostercollection.com/wp-content/uploads/2019/11/Moana-poster.jpg",
        },
        {
            name: "Aayirathil Oruvan",
            ratings: "8",
            summary: "Anitha, a government official, embarks on a journey to find Chandramouli, an archaeologist, who went to Vietnam in order to search for any existence of the prince of the Chola dynasty.",
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKs2nUtJZ5vM5JH9ZX-ixetC5WdX6a_jyIQ&usqp=CAU",
        },
        {
            name: "Soorarai Pottru",
            ratings: "9.1",
            summary: "Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.",
            pic: "https://i.pinimg.com/originals/41/99/00/4199001a1cced80374c89ccf1078d345.jpg",
        },
        {
            name: "Charlie",
            ratings: "8",
            summary: "Tessa runs away from home to avoid getting married and rents a room. She finds a sketchbook of the previous occupant, which reveals an incomplete story, and decides to find the artist.",
            pic: "https://wallpapercave.com/wp/wp6554269.jpg",
        },
        {
            name: "Titanic",
            ratings: "7.8",
            summary: "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
            pic: "https://c8.alamy.com/comp/T2Y5EP/leonardo-dicaprio-kate-winslet-poster-titanic-1997-T2Y5EP.jpg",
        },
        {
            name: "Avatar",
            ratings: "7.8",
            summary: "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
            pic: "https://movieposters2.com/images/1397414-b.jpg",
        },
        {
            name: "Jodha Akbar",
            ratings: "7.5",
            summary: "Jodha is a fiery Rajput princess who is obliged to marry a Mughal emperor, Akbar, for political reasons. Eventually, mutual respect and admiration lead to true love.",
            pic: "https://ii1.pepperfry.com/media/catalog/product/p/o/800x880/Poster-Boy-Jodha-Akbar--Battle-Field--Poster-PBUTV57Jodha12P18-1367920880BbRpRr.jpg",
        },
        {
            name: "Harry Potter",
            ratings: "9",
            summary: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
            pic: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8d41b798510867.5ede293ddfb3e.png",
        },
    ];

    const[movies,setMovies]=useState(initial_movies);
    const[name,setName]=useState("");
    const[rating,setRating]=useState("");
    const[pic,setPic]=useState("");
    const[summary,setSummary]=useState("");

    return (
        <section>
            <div className="add-movie-form">
            <TextField  label="Name of the movie" variant="outlined" onChange={(event)=>setName(event.target.value)} />
            <TextField  label="Rating" variant="outlined" onChange={(event)=>setRating(event.target.value)} />
            <TextField  label="Pic url" variant="outlined" onChange={(event)=>setPic(event.target.value)} />
            <TextField  label="Summary" variant="outlined" onChange={(event)=>setSummary(event.target.value)} />

                {/* <input 
                value={name}
                placeholder="Name of the movie"
                onChange={(event)=>setName(event.target.value)}
                />
                <input 
                value={rating}
                placeholder="rating"
                onChange={(event)=>setRating(event.target.value)}
                />
                <input 
                value={pic}
                placeholder="Pic url"
                onChange={(event)=>setPic(event.target.value)}
                />
                <input 
                value={summary}
                placeholder="Summary"
                onChange={(event)=>setSummary(event.target.value)}
                /> */}
                <Button variant="contained"
                onClick={()=>{
                   const newMovie={name,rating,pic,summary};
                   setMovies([...movies,newMovie]);
                   setName("");
                   setRating("");
                   setPic("");
                   setSummary("");
                }}
                    >Add Movie</Button>
                {/* <button 
                onClick={()=>{
                    // console.log({name,rating,pic,summary});
                   const newMovie={name,rating,pic,summary};
                   setMovies([...movies,newMovie]);
                   setName("");
                   setRating("");
                   setPic("");
                   setSummary("");
                }}
                   > Add Movie</button> */}
            </div>
            

        <div className="movie-list">
            {movies.map((movie,index) => (
                <Film 
                    key={index}
                    name={movie.name}
                    rating={movie.ratings}
                    summary={movie.summary}
                    pic={movie.pic} />
            ))}

        </div>
        
        </section>

    );
}

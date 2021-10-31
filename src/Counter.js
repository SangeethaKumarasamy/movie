import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
export function Counter() {
    //like counter
    const [like, setLike] = useState(0);
    //unlike counter
    const [unLike, setunLike] = useState(0);
    return (
        <div className="counter-content">
             <IconButton
              className="like-unlike" 
              onClick={() => setLike(like + 1)}
              color="primary" 
              aria-label="upload picture" 
              >
                 
        <Badge color="primary" badgeContent={like} max={20}>
        👍
        </Badge>
             </IconButton>
             

             <IconButton
              className="like-unlike" 
              onClick={() => setunLike(unLike + 1)}
              color="success" 
              aria-label="upload picture" 
              >
        <Badge color="error" badgeContent={unLike} max={20}>
        👎
        </Badge>
             </IconButton>
            {/* <button className="like-unlike" onClick={() => setLike(like + 1)}>👍{like}</button>
            <button className="like-unlike" onClick={() => setunLike(unLike + 1)}>👎{unLike}</button> */}

        </div>

    );
}

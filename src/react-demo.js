    const minions = [{
            name: "Bob",
            pic: "https://pbs.twimg.com/profile_images/448727764678762496/UfCMkXp0_400x400.jpeg",
        },
        {
            name: "Stuart",
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GSI_UKNhMYPysyRx_5CWZUDEzbKj5xzbRXf9_64r9uGurmd5LdfH4C2jmE47yTVgsTQ&usqp=CAU",
        },
        {
            name: "Kevin",
            pic: "https://wwwassets.pricespider.com/product_static/450/12248/12248429.png",
        },
    ];
    return (

        <div className = "App" > { /* <Demo1/> */ }


        {
            /* <Demo2 name={"Bob"} pic={"https://pbs.twimg.com/profile_images/448727764678762496/UfCMkXp0_400x400.jpeg"}/>
                   <Demo2 name="Stuart" pic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GSI_UKNhMYPysyRx_5CWZUDEzbKj5xzbRXf9_64r9uGurmd5LdfH4C2jmE47yTVgsTQ&usqp=CAU"}/>
                   <Demo2 name="Kevin" pic={"https://wwwassets.pricespider.com/product_static/450/12248/12248429.png"}/> */
        }


        {
            /* <Demo3 name={"Bob"} pic={"https://pbs.twimg.com/profile_images/448727764678762496/UfCMkXp0_400x400.jpeg"}/>
                   <Demo3 name="Stuart" pic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GSI_UKNhMYPysyRx_5CWZUDEzbKj5xzbRXf9_64r9uGurmd5LdfH4C2jmE47yTVgsTQ&usqp=CAU"}/>
                   <Demo3 name="Kevin" pic={"https://wwwassets.pricespider.com/product_static/450/12248/12248429.png"}/> */
        }

        { /*Use map -> for transformation from array of string to array of JSX */ } 
        { minions.map((minion) => ( 
                <Demo2 name = { minion.name }
                pic = { minion.pic }
                />
            ))
        }

        { /* <Welcome name="Stuart"/> */ } 
        </div>
    );
    }
    //without props
    function Demo1() {
        const name = "Bob";
        return ( 
            <h1 className = "name" > Hi, { name }!!💕 </h1>
        )
    }

    //with props
    function Demo2(props) {
        return ( 
            <div >
            <img height = "300"
            width = "300"
            src = { props.pic }
            alt = { props.name }
            /> 
             < h1 className = "name" > Hello, { props.name }!!❣ </h1>
              </div>
        )
    }

    //Destructuring
    function Demo3({ name, pic }) {
        return ( 
            < div >
            < img height = "300"
            width = "300"
            src = { pic }
            alt = { name }
            /> 
            <h1 className = "name" > Hello, { name }!!❣ </h1> 
            </div>
        )
    }


    //dry to responsive codes from demo3 to Minions
    function Welcome({ name }) {
        return ( 
            <h1 className = "name" > Welcome, { name }!!💞 </h1>
        )
    }
import React, { useState } from 'react';
import './Room.css'

function Room() {

   
    let [isLit, setLit] = useState(false);
    let [age , setAge] = useState(24);
    

    return (
    <div className={`room ${isLit? "lit": "dark"}`}> 
        This Room is {isLit? "lit": "dark"}
        <br/>
        Age: {age}
        <br/>
        <button onClick={()=> setLit(!isLit) } >Toggle Light</button>
        <br/>
        <button onClick={ ()=> {
                        console.log("Increase age arrow function");
                        setAge(++age);
                        }}>
            Increase Age
        </button>
        <button onClick={ ()=> {
                        console.log("Decrease age arrow function");
                        setAge(--age);
                        }}>
            Decrease Age
        </button>
    </div>
    );
}

export default Room;
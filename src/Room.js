import React, { useState } from 'react';
import './Room.css'

function Room() {

   
    let [isLit, setLit] = useState(false);
    let [age , setAge] = useState(34);
    

    return (
    <div className={`room ${isLit? "lit": "dark"}`}> 
        The Room is {isLit? "lit": "dark"}
        <br/>
        The Room Temperature is: {age}
        <br/>
        <button onClick={()=> setLit(!isLit) } >On Light</button>
        <button onClick={()=> setLit(!isLit) } >Off Light</button>
        <br/>
        <br/>
        <button onClick={ ()=> {
                        console.log("Increase Temperature arrow function");
                        setAge(++age);
                        }}>
            Increase Temperature
        </button>
        <button onClick={ ()=> {
                        console.log("Decrease Temperature arrow function");
                        setAge(--age);
                        }}>
            Decrease Temperature
        </button>
    </div>
    );
}

export default Room;
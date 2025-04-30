import { useState } from "react"

export default function Team(){
    const [team, setTeam]=useState(11);

    const handleAdd=()=>{
        const newTeam =team + 1;
        setTeam(newTeam);

    }
    const handleRemove=()=>{
        const newTeam =team - 1;
        setTeam(newTeam);

    }

    const teamStyle ={
        border:'2px solid orange',
        padding:'15px',
        margin:'15px',
        borderRadius: '15px'
    }
    return(
        <div style={teamStyle}>
            <h3 style={teamStyle}>Player: {team}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleRemove}>REMOVE</button>
        </div>
    )
}
import { React, useState } from 'react';
import Select from 'react-select';
import './color.css';
function Ajay ()
{
    const colors = [
        {
            id: 1,
            label: "chartreuse",
        },
        {
            id: 2,
            label: "lavender",
        },
        {
            id: 3,
            label: "crimson",
        },
        {
            id: 4,
            label: "goldenrod",
        },
        {
            id: 5,
            label: "teal",
        },
        {
            id: 6,
            label: "beige",
        },
        {
            id: 7,
            label: "ghostwhite",
        },
        {
            id: 8,
            label: "maroon",
        },
        {
            id: 9,
            label: "aliceblue",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='down'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>

            <center>
            <h1>COLOR CHANGER</h1>
            </center>
            
            <div className="dropdown">
                <Select options={colors} onChange={click} className='select' placeholder="CHOOSE COLOR"></Select>
            </div>
            <div className="block">
                
                    <button className='button'></button>
                
            </div>
        </div>

    );
}
export default Ajay;
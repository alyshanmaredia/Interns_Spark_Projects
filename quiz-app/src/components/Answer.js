import React from 'react'
import '../App.css';

function Answer(props) {
    return (
        <div>
            <button className="btnAnswer" type="button" onClick={()=> props.handleClick(props.choice)}>{props.answer}</button>
        </div>
    )
}

export default Answer

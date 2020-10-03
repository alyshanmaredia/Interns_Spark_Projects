import React from 'react'
import Question from './Question'
import AnswerList from './AnswerList'
import UserGreeting from './UserGreeting'
import Grade from './Grade'
import '../App.css';

function QuizArea(props) {
    if(props.isFinished){
        return <div>
            <UserGreeting/>
            <Grade grade={props.grade}/>
        </div>
    }
    return (
        <div>
            <Question dataSet={props.dataSet}/>
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}/>
        </div>
    )
}

export default QuizArea

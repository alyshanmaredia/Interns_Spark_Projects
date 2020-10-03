import React, { Component } from 'react'
import dataSet from '../api/data';
import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';
import '../App.css';


class Questionnaire extends Component {
    constructor(){
        super();
        this.state = {
            current: 0,
            dataSet: dataSet,
            correct: 0,
            incorrect: 0,
            isFinished: false,
            grade: "Failed",
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(choice){
        if(choice === this.state.dataSet[this.state.current].correct){
            this.setState({correct: this.state.correct + 1})
        }else{
            this.setState({incorrect: this.state.incorrect + 1})
        }

        if(this.state.current === this.state.dataSet.length -1){
            this.setState({isFinished: true})
            if(this.state.correct === 2){
                this.setState({grade: "Passed"})
            }
        }else{
            this.setState({current:this.state.current + 1})
        }
        
    }
    render() {
        return (
            <div>
                <QuizArea handleClick={this.handleClick} isFinished={this.state.isFinished} 
                            dataSet={this.state.dataSet[this.state.current]} grade={this.state.grade}/>
                <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect}  isFinished={this.state.isFinished} />
            </div>
        )
    }
}

export default Questionnaire

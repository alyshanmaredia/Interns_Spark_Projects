import React, {Component} from 'react';
import '../styles/student.css';

class Student extends Component{
    constructor(){
        super();
        this.state={
            score: 0,
            success: false
        }
    }
    componentDidMount(){
        this.setState({
            score: this.props.score,
        })
    }
    addScore(){
        this.setState({
            score: this.state.score + 1
        }, ()=>{
            if(this.state.score >= 350){
                this.setState({
                    success: true
                })
            }
        })
    }
    minusScore(){
        this.setState({
            score: this.state.score - 1
        }, ()=>{
            if(this.state.score <= 350){
                this.setState({
                    success: false
                })
            }
        })
    }
    render(){
        const isSuccess = this.state.success;
        let text;
        if(isSuccess){
            text = <span>Success</span>
        }else{
            text = <span className="fail">Fail</span>;
        }
        return(
            <div className="student">
                <div className="left">
        <h2 className="studentName">{this.props.name}
            <button className="addScoreBtn" onClick={()=> this.addScore()}>+</button>
            <button className="minusScoreBtn" onClick={()=> this.minusScore()}>-</button>
        </h2>
        <p className="universityName">{this.props.university} {text}</p>
                </div>
                <div className="right">
        <div className="score">{this.state.score}</div>
                </div>
            </div>
        );
    }
}

export default Student;
import React, { Component } from 'react'
import { faCheck, faThumbsUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome';

class TodoItems extends Component{

    constructor(){
        super();
        this.state={
            isCorrect : false,
        }

    }
    isEdit(){
        const {isCorrect} = this.state
        this.setState({
            isCorrect : ! isCorrect
        })
    }



    render(){

    return(
        
            <div key={this.props.id} className='box'>
                
                <div className="task-right-side">
                    <span>
                        <FontAwesomeIcon 
                        className  =  'thumbs-up-icon icon' 
                        icon       =  { this.state.isCorrect? faCheck : faThumbsUp  } 
                        onClick    =  {()=>this.isEdit()}
                        >
                        </FontAwesomeIcon>
                    </span>
                </div> 


                <div className="task-left-side">
                        <p style={this.state.isCorrect? {textDecoration: "line-through"}  :  {textDecoration: "none"} }> Task:     <span> {   this.props.task   } </span>  </p>
                        <FontAwesomeIcon 
                            onClick   =  {() => this.props.removing(this.props.id)} 
                            icon      =  { faTimes  } 
                            className =  'closeIcon'>
                        </FontAwesomeIcon>
                </div>
            </div>


    )
    }
}

export default TodoItems

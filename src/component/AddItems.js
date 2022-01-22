import React, { Fragment } from 'react'
import { Component } from 'react';
import logo from '../img_one.svg'

class AddItems extends Component{


    constructor(){
        super();
        this.state ={
            task: "",
        }
        this.handleAdding = this.handleAdding.bind(this)
    }


    handleAdding(e){
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    

    handleSubmit = (e)=>{
        e.preventDefault();
        let myInputs = document.querySelectorAll('.taskInput')
        myInputs.forEach( input => {
            if (input.value.trim().length === 0) {
                alert("Please Fill All The Fields")
            }else{
                this.props.adding(this.state)
                input.value= ""
            }


        });
    }

    render(){
        return(
            <Fragment>
    
            <form className='myForm' onSubmit={this.handleSubmit}>
                <div className='inputContainer'>
                    <label className='task-Label'>Task: </label> <br />
                    <input className='taskInput' type="text" id='task'  placeholder='Enter task...'       onChange={this.handleAdding} />
                </div>
                
                <input id='submitInput' type="submit" value={"Submit"}  />
                <img src={logo} alt="" />
            </form>

            </Fragment>
            
        )
    }

}

export default AddItems
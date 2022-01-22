import React, { Component } from 'react'
import AddItems from './component/AddItems'
import TodoItems from './component/TodoItems'
import logo2 from './space-shuttle.png'


class App extends Component{

    constructor(){
        super();
        this.state = {
            data:[
                {   task: "Testing",    },
            ]
        }
        this.removing = this.removing.bind(this)
        this.adding = this.adding.bind(this)
    }

    
    mapping(arr){

        const checking = arr.length ? 
        arr.map(
            (res,id)=> <TodoItems 
            
            key       =    {  id              }
            id        =    {  id              }
            task      =    {  res.task        }
            removing  =    {  this.removing   }
            />
        )
        :
        <h1 className='warnning'>There Is No Info To Show ...</h1>;

        return checking
        
    }

    adding(item){
        item.id = Math.random()
        const {data} = this.state;
        data.push(item)

        this.setState({
            data
        })
    }

    removing(id)  {

        const {data} = this.state;
        let index = data.findIndex( item=> item.id === id)
        data.splice(index,1)


        this.setState({
            data
        })
    
    }



    render(){
        return(
            <div className='container'>
                <div className="special-heading">
                    <h1 className='title'><span> <img src={logo2} alt="" /> </span> To Do List<span> <img src={logo2} alt="" /> </span> </h1>
                </div>

                <div className="content">
                    <div className="infoContainer">
                        {this.mapping(this.state.data)}
                    </div>
                    {<AddItems adding = {this.adding} />}
                </div>

            </div>
        )
    }
}

export default App

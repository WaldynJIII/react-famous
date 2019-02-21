import React, { Component } from 'react';
import ActorCard from '../ActorCard/ActorCard'
import Grid from '@material-ui/core/Grid';

class FamousPeople extends Component {
    state={
        actor:{
        name: '',
        role: '',
        },
        actorArray: [],
       
    }
    setActor =(key) =>(event) =>{
        this.setState({
            actor:{
            ...this.state.actor,
            [key]: event.target.value
            }
        })
        console.log(this.state.actor)
    }
    
    pushDisplay =()=>{
        this.state.actorArray.push(this.state.actor)
        console.log(this.state.actorArray)
 
    }
    createDisplay = (actorArray) => {
        
        let displayArray=[]
        for (let i = 0; i < actorArray.length; i++) {
            displayArray.push(<ActorCard name={actorArray[i].name}role={actorArray[i].role}/>)
        }
        console.log(displayArray)
       return displayArray
    }
    
    render(){
        return (
            <div >
                <input type="text" onChange={this.setActor('name')}/>
                <input type="text" onChange={this.setActor('role')} />
                <button onClick={this.pushDisplay} >Submit</button>
                <Grid>
                   {this.createDisplay(this.state.actorArray)}
                   </Grid>
                   
                
            </div>
            
        )
    }
}
export default FamousPeople
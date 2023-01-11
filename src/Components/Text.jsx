import React, { Component } from 'react';
class Text extends Component {
    state = {
        count: 0
    }
    handleIncrement = () => {
        this.setState({
            count : this.state.count + 1
        });
    }
    render(){

    
    return(
        <div>
            <span className='badge badge-primary'>{this.handelState()}</span>
            <button onClick={this.handleIncrement}>increment</button>
        </div>
    );
    }
    

    handelState(){
        const {count} = this.state;
        return count === 0 ? 'zero' : count;
    }
    };

 
export default Text;
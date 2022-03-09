import React, { Component } from 'react';
import { TiPlus } from "react-icons/ti";

class Todoform extends Component {
    constructor(props){
        super(props);
        this.state={
          value:"",
        }
      }
      addTodo=(e)=>{
        e.preventDefault();
         this.props.addingMethod(this.state.value)
        this.setState({value:""})
        }

    render() {
        return (
          
                <form>
          <input
          className='formInp'
          value={this.state.value}
            type="text"
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}
          />
          <button className="addBtn" onClick={this.addTodo}>
            <TiPlus />
          </button>
        
                </form>
            
            
        );
    }
}

export default Todoform;

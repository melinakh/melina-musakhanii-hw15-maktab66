import React, {Component} from "react";
import {VscChromeClose} from "react-icons/vsc";
import Todoform from "./TodoForm";
import "./Todolist.css"
import {GrEdit} from "react-icons/gr";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            edit: false,
            editIndex: null,
            newValue: '',
            id:+"",
            
        };
        this.inpVal = React.createRef();
    }

    addTodo = (value) => {
        if(value) {
            return this.setState({list: [...this.state.list, value], value: ""}),
            this.setState({id:Math.random()}),
            console.log(this.state.id);
        }
       
       
    };

    editTodo = (index) => {
        this.setState({...this.state, edit: true, editIndex: index,newValue:this.state.list[index]})
      
    }
    shouldComponentUpdate(){
     
        return true
    }
    updateTodo = (e) => {

        this.setState(prev => {
            prev.edit = false
            const list = prev.list.map((item, index) => {
                return prev.editIndex === index ? prev.list[this.state.editIndex] = prev.newValue : item
            })
            prev.newValue=''
            prev.editIndex=null
            return {list}
        })
    }
    handleNewValue = (e) => {
        this.setState({newValue: e.target.value});
    }
    removeTodo = (todo) => {
        this.setState((state) => {
            let List = state.list.filter(li => li !== todo);
            return {list: [...List]}
        })

    }
    setId=()=>{
        this.setState({id:Math.random()})
        
    }

    render() {
        return (
            

            <div className="main">
                <h1>(:Mark your blessings</h1>,
                <ul>
                    <Todoform addingMethod={this.addTodo}/>
                    {!this.state.edit ?
                        this.state.list.map((todo, index) => {
                            return <li key={this.state.id}>{todo}
                                <button className="btn" onClick={() => this.removeTodo(todo)}><VscChromeClose/></button>
                                <button className="btn edbt" onClick={() => this.editTodo(index)}><GrEdit /></button>
                            </li>;
                        }) :
                        <>
                            <input className="mainInput" type="text"
                                   value={this.state.newValue }
                                   onChange={this.handleNewValue}/>
                            <button className="btn upbt" onClick={this.updateTodo}>update</button>
                        </>
                    }

                </ul>

            </div>


        );
    }
}

export default Todo;
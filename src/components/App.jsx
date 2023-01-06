import css from './App.module.css'
import { Component } from 'react';
// import { Cards } from './Cards/Cards'
// import data from './data/data'
import { Dropdown } from './Dropdown';
import { Colorpicker } from './Colorpicker';
import { ToDoList } from './ToDoList';
import { Form } from './Form';
import { Formics } from './Formics';
import colors from './Colorpicker/color'

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo-1', complited: false },
      { id: 'id-2', text: 'Tododo-2', complited: false },
      { id: 'id-3', text: 'Todowe-3', complited: true },
      { id: 'id-4', text: 'Todonvds-4', complited: false },
    ],
    // inputValue: '',

  }

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  }
  // handleInputChange = (evt) => {
  //   const value = evt.target.value
  //   // console.log('object', evt.target.value);
  //   this.setState({inputValue:value})
  // }

  formSubmitData = dataId => {
    console.log("🚀  dataId", dataId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === dataId) {
    //       return {
    //         ...todo,
    //         complited: !todo.complited,
    //       }
    //     }
    //     return todo;
    //   })
    // }))
    this.setState(({ todos }) => ({
      todos: todos.map(todo => todo.id === dataId ?
        {...todo,complited: !todo.complited} : todo)
    }))

}
  render() {
    const { todos} = this.state;
      return (
    <div className={css.app} >
      {/* <Cards datas={data} /> */}
          <Dropdown />
          
          <Colorpicker colors={colors} />
          
          <ToDoList 
          todos={todos} 
            onDelete={this.deleteTodo}
          onChecked={this.formSubmitData }/>
          {/* <input type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          /> */}
          <Form
            getForm={this.formSubmitData}
            />
          <Formics/>
    </div>
  );
  }

}; 




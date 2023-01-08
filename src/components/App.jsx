import css from './App.module.css'
import { Component } from 'react';
// import { Cards } from './Cards/Cards'
// import data from './data/data.json'
import publication from './data/publication.json'
import { Dropdown } from './Dropdown';
import { Colorpicker } from './Colorpicker';
import { ToDoList } from './ToDoList';
import  {Modal}  from './Modal';
import  {Reader}  from './Reader';
// import { Form } from './Form';
// import { Formics } from './Formics';
import colors from './Colorpicker/color.json'
// Как импортировать SVG
import { ReactComponent as HomeSvg } from './icons/home.svg';


export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo-1', complited: false },
      { id: 'id-2', text: 'Tododo-2', complited: false },
      { id: 'id-3', text: 'Todowe-3', complited: true },
      { id: 'id-4', text: 'Todonvds-4', complited: false },
    ],
    inputValue: '',
    showModal:false,
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
  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal:!showModal,
    }))
  }
  render() {
    const { todos,showModal} = this.state;
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
          {/* <Form
            getForm={this.formSubmitData}
            /> */}
          {/* <Formics/> */}
              <br />
          {/* Применение иконки !!!!!!!!!!!*/}
          <button type='button' 
            onClick={this.toggleModal}>
            <HomeSvg width='40' height='40' fill='red'/>
          </button>
          


          {showModal &&
            <Modal
              onCloseModal={this.toggleModal}>
            <p>Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit.
                    Voluptatibus rerum atque, totam eaque cum
                perspiciatis velit ex id architecto
                ut necessitatibus.
                    A omnis esse error sed,
                    perferendis ratione culpa doloremque.</p>
            
              <button type='button'
                onClick={this.toggleModal}>X</button>
            </Modal>}
          <br />
          <Reader item={publication} />
          

    </div>
  );
  }

}; 




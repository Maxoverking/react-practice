import { Component } from "react"



export class Form extends Component {
    state={
    name: '',
    password:'',
    }
      handleNameChange = (evt) => {
    // const name = evt.target.name;
    // const value = evt.target.value;
    const {name,value} = evt.currentTarget;

    // console.log("🚀  name", name);
    // console.log("🚀  value", value);
    this.setState({
      [name]: value,
    })
  }
    handleSubmit = (evt) => {
    evt.preventDefault()
    // console.log(this.state);
    this.props.getForm(this.state);
    this.reset();
 }
 reset = () => { 
this.setState({name: '',password:'',})
 }
    render(){
        const { name, password } = this.state;
            return (
         <form onSubmit={this.handleSubmit} >
            <label >
              Name
              <input 
                type="text" 
                name='name'
              value={name} 
              onChange={this.handleNameChange}/>
            </label>
            <br />
            <label>
              Password
              <input type="text"
                name='password'
              value={password} 
              onChange={this.handleNameChange}/>
            </label>
            <button
              type='submit'
              
            >Send</button>
          </form>
    )
    }

}
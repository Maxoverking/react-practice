import { Component } from "react"

export class Form extends Component {
    state={
    name: '',
      password: '',
      expirience: 'junior',
      licence:false,
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
  handleLicenceChange = (evt) => {
    console.log('licence', evt.currentTarget.checked); 
    this.setState({ licence: evt.currentTarget.checked})
    
  }
 reset = () => { 
this.setState({name: '',password:'',})
 }
    render(){
        const { name, password,expirience,licence } = this.state;
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
            <p>Ваш уровень :</p>

            <label>
              <input 
              type="radio" 
              name="expirience" 
              value='junior'
              onChange={this.handleNameChange} 
              checked={expirience === 'junior'}/>
              Junior
              </label>
            <label>
              <input 
              type="radio" 
              name="expirience" 
              value='middle'
              onChange={this.handleNameChange} 
              checked={expirience === 'middle'}/>
              Middle
              </label>              
            <label>
              <input 
              type="radio" 
              name="expirience" 
              value='senior'
              onChange={this.handleNameChange} 
              checked={expirience === 'senior'}/>
              Senior
              </label>
            <br />
            <label>
              <input 
              type="checkbox" 
              name="licence" 
              id="" 
              checked={licence}
              onChange={this.handleLicenceChange}/>
              Согласен
              </label>
            
            <button
              type='submit'
              disabled={!licence}             
            >Send</button>
          </form>
    )
    }

}
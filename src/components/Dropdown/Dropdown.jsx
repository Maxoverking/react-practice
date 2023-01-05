import { Component } from "react";
import css from './Dropdown.module.css'


export class Dropdown extends Component {
    state = {
     visible: false,
    }
    toggle = () => { 
        this.setState(prevState => ({
           visible: !prevState.visible, 
        }))
    }
    // show = () => {
    //     this.setState({visible: true})
    // }
    // hide = () => {
    //     this.setState({visible: false})
    // }
    render() {
        const {visible}=this.state
        return (
            <div className={css.dropdown}>
                <button
                    className={css.btn}
                    onClick={this.toggle}>
                    {visible ? 'Скрыть' : 'Показать'}</button>
                
                {/* <button className={css.btn} onClick={this.hide}>Close</button> */}
                {visible && <div className={css.menu}>Menu</div>}
                
            </div>
        )
    }
    
}


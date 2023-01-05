
import { Component } from "react";
import css from './Colorpicker.module.css'

export class Colorpicker extends Component {
    state = {
        activeColorIdx: 5,
    }
    setCurrentIndex = (index) => {
        this.setState({ activeColorIdx: index });
    }
    //обьединяем два класса в методе
    optionClass = (index) => {
    const currentClasses = [css.btn];
            if (index === this.state.activeColorIdx) {
                currentClasses.push(css.btn__active);
            }
        return currentClasses.join(' ')
    }
    render() {
        const { activeColorIdx } = this.state;
        const { colors } = this.props;
        //берем активный цвет по index 
        const {hex} = colors[activeColorIdx];
        // console.log(this.props.colors);
        return (           
            <div className={css.colorpic}>
                <h4>Активный цвет : {hex}</h4>
                {colors.map(({ hex }, index) => {
                    // const bothClass = this.optionClass(index);
                    return (
                        <button
                            key={hex}
                            //передаем index в инлайн функцию
                            onClick={()=> this.setCurrentIndex(index)}
                        // className={bothClass}
                        className={this.optionClass(index)}
                        style={{backgroundColor: hex}}
                    >
                        </button>)
                }
                
            )}
            </div>
        )
    }
    
}
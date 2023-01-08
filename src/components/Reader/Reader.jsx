import { Component } from "react";
import css from './Reader.module.css'

export class Reader extends Component{
    state = {
        publicationIdx: 0,
    }
    changeIndex =(value)=>{
        this.setState(({publicationIdx}) =>
         ({publicationIdx: publicationIdx + value }))

    }
    render() {
        const {publicationIdx}=this.state;
        const { item } = this.props;
        const totalItems = item.length;
        //выбираем публикацию по индексу этой записью
        const chooseRightItem = item[publicationIdx];
        // console.log("🚀  chooseRightItem", chooseRightItem);
        return (
            
            <div className={css.reader}>
                <section>
                    <button 
                        type="button" 
                        disabled={publicationIdx === 0}
                    onClick={()=>{this.changeIndex(-1)}}>Назад
                    </button>
                    <button 
                        type="button" 
                        disabled={publicationIdx ===  totalItems -1}
                    onClick={()=>{this.changeIndex(1)}}>Вперед
                    </button>
                </section>
                <p>{publicationIdx + 1}/{totalItems}</p>
                <article>
                    <h3>{chooseRightItem.title}</h3>
                    <p>{chooseRightItem.text}</p>
                </article>

            </div>
        )
    }
}

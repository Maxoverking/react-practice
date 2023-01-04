import css from './Cards.module.css'

export const Cards = ({datas}) => {
    return (
        <>
            <ul className={css.container}>
                {datas.map(data =>
                    <li className={css.card} key={data.name}>
                        <h3 className={css.card_title}>{data.name}</h3>
                    <img src={data.image}                      
                        alt={data.name} />
                    <div className={css.card_features}>
                        <p className={css.card_character}>time <span>{data.time} min</span></p>
                            <p className={`${css.card_character} '' ${css.border}`}>servings<span>{data.servings }</span></p>
                            <p className={css.card_character}>calories <span>{ data.calories}</span></p>
                    </div>

                </li>)}
            
            </ul>    
        </>
    )
}
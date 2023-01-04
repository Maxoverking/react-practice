import css from './App.module.css'
import { Cards } from './Cards/Cards'
import data from './data/data'

export const App = () => {
  return (
    <div className={css.app}>
      <Cards datas={data} />
    </div>
  );
};

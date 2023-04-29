import { Link } from 'react-scroll';

import style from '../styles/category-bar.module.scss';

function CategoryBar() {
  return (
    <div className={style.categoryBar__container}>
      <div className={style.categoryBar__link}>
        <Link to='fruit' smooth={true} duration={500}>
          fruit
        </Link>
      </div>
      <div className={style.categoryBar__link}>
        <Link to='veg' smooth={true} duration={500}>
          veg
        </Link>
      </div>
      <div className={style.categoryBar__link}>
        <Link to='nuts' smooth={true} duration={500}>
          nuts
        </Link>
      </div>
      <div className={style.categoryBar__link}>
        <Link to='beans' smooth={true} duration={500}>
          beans
        </Link>
      </div>
      <div className={style.categoryBar__link}>
        <Link to='bread' smooth={true} duration={500}>
          bread
        </Link>
      </div>
      <div className={style.categoryBar__link}>
        <Link to='flour' smooth={true} duration={500}>
          flour
        </Link>
      </div>
    </div>
  )
}

export default CategoryBar;
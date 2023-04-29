import Image from 'next/image';

import style from '../styles/navbar.module.scss';
import shoppingCartIcon from '../../public/assets/img/shopping-cart.webp';

function Navbar() {
  return (
    <div className={style.navbar__container}>
        <div className={style.navbar__logoContainer}>
            <h1>sunshine market</h1>
        </div>
        <div className={style.navbar__searchbarContainer}>
            <input type="text" />
        </div>
        <div className={style.navbar__shoppingCartContainer}>
            <Image 
                src={shoppingCartIcon} 
                alt='shopping cart'
                width={40}
                height={40}>
            </Image>
            <div className={style.navbar__shoppingCartCount}>0</div>
        </div>
    </div>
  )
}

export default Navbar

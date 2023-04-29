import style from '../styles/login.module.scss';

import { useRouter } from 'next/router';

function login() {
  const router = useRouter();

  function navigateTo(route: string) {
    router.push(route);
  }

  return (
    <div className={style.login__container}>
        <h1>log in</h1>
        <form action="submit" className={style.login__form}>
            <div className={style.login__emailContainer}>
                <label htmlFor="login__input--EMAIL">email</label>
                <input id='login__input--EMAIL' type="text" />
            </div>
            <div className={style.login__passwordContainer}>
                <label htmlFor="login__input--PASSWORD">password</label>
                <input id="login__input--PASSWORD" type="text" />
            </div>
            <button type='submit' onClick={() => navigateTo('/shop')}>login</button>
        </form>
    </div>
  )
}

export default login

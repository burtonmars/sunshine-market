import Image from 'next/image';
import { useRouter } from 'next/router';

import style from '../styles/home.module.scss';


export default function Home() {
  const router = useRouter();

  function navigateTo(route: string) {
    router.push(route);
  }

  return (
    <>
      <div className={style.home__background}></div>
      <div className={style.home__backgroundFilter}></div>
      <div className={style.home__container}>
        <div className={style.home__CTAContainer}>
          <h2>welcome to</h2>
          <h1>sunshine market</h1>
          <button onClick={() => navigateTo("/about")}>
            enter
          </button>
        </div>
      </div>
    </>
  )
}

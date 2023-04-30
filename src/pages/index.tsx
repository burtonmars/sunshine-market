import { useRouter } from 'next/router';
//import { env } from '@/env.mjs';

import style from '../styles/home.module.scss';
import styleGlobal from '../styles/globals.module.scss';


export default function Home() {
  const router = useRouter();
  //const thing = env.NEXT_PUBLIC_MONGODB_URI;

  function navigateTo(route: string) {
    router.push(route);
  }

  return (
    <>
      <div className={style.home__background}></div>
      <div className={style.home__backgroundShader}></div>
      <div className={style.home__container}>
        <div className={style.home__CTAContainer}>
          <h2>welcome to</h2>
          <h1>sunshine market</h1>
          <button className={styleGlobal.ctaButton} onClick={() => navigateTo("/about")}>
            enter
          </button>
        </div>
      </div>
    </>
  )
}

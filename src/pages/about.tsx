import { useRouter } from 'next/router';

import style from '../styles/about.module.scss';
import styleGlobal from '../styles/globals.module.scss';

function About() {
  const router = useRouter();

  function navigateTo(route: string) {
    router.push(route);
  }

  return (
    <div className={style.about__container}>
        <h1>what do we do</h1>
        <p>our mission is to provide top quality produce and staples to vancouverites 
            while maintaining a commitment to sustainability and carbon reduction.</p>
        <p>we promise to do our best to source local certified organic fruits and veggies 
            and sustainably produced breads, seeds, nuts and beans.</p>
        <p>all we ask of you is that you bring your own containers if you shop with us in 
            store, or return the reusable containers that we provide with grocery delivery.</p>
        <p>we deliver to those in a 5km radius from our market by human-powered vehicle for a nominal 
            fee. for those with mobility hindrances or other circumstances that prevent you from visiting in 
            person, the delivery fee will be waived.</p>
        <div className={style.about__buttonContainer}>
          <button className={styleGlobal.ctaButton} onClick={() => navigateTo('/shop')}>enter</button>
          <button className={styleGlobal.ctaButton} onClick={() => navigateTo('/login')}>login</button>
        </div>
    </div>
  )
}

export default About;

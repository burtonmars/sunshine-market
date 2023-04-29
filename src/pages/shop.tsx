import { Element } from 'react-scroll';

import style from '../styles/shop.module.scss';
import Navbar from '../components/navbar'; 
import CategoryBar from '@/components/category-bar';
import ProductCard from '@/components/product-card';

const featuredItems = [
    {
        name: 'apple',
        origin: 'washington',
        distance: 100,
        price: 1.99
    },
    {
        name: 'banana',
        origin: 'mexico',
        distance: 1000,
        price: 0.99
    },
    {
        name: 'orange',
        origin: 'florida',
        distance: 1000,
        price: 1.99
    }
]

function Shop() {
  return (
    <div className={style.shop__container}>
        <div className={style.shop__navbarContainer}>
            <Navbar />
        </div>
        <div className={style.shop__categorySelectionContainer}>
            <CategoryBar />
        </div>
        <div className={style.shop__productDisplayContainer}>
            <Element name="featured-items">
                <div className={`${style.shop__featuredItemsContainer} ${style.shop__element}`}>
                    <h1>featured items</h1>
                    <div className={style.shop__productsContainer}>
                        {featuredItems.map((item, index) => (
                            <ProductCard 
                                key={index}
                                product={item}/>
                        ))}
                    </div>
                </div>
            </Element>
            <Element name="discount-products">
                <div className={`${style.shop__discountProductContainer} ${style.shop__element}`}>
                    <h1>past-prime discounts</h1>
                </div>
            </Element>
            <Element name="fruit">
                <div className={`${style.shop__fruitContainer} ${style.shop__element}`}>
                    <h1>fruit</h1>
                </div>
            </Element> 
            <Element name="veg">
                <div className={`${style.shop__vegContainer} ${style.shop__element}`}>
                    <h1>veg</h1>
                </div>
            </Element>
            <Element name="nuts">
                <div className={`${style.shop__nutsContainer} ${style.shop__element}`}>
                    <h1>nuts</h1>
                </div>
            </Element>
            <Element name="beans">
                <div className={`${style.shop__beansContainer} ${style.shop__element}`}>
                    <h1>beans</h1>
                </div>
            </Element>
            <Element name="bread">
                <div className={`${style.shop__breadContainer} ${style.shop__element}`}>
                    <h1>bread</h1>
                </div>
            </Element>
            <Element name="flour">
                <div className={`${style.shop__flourContainer} ${style.shop__element}`}>
                    <h1>flour</h1>
                </div>
            </Element>
        </div>
    </div>
  )
}

export default Shop;

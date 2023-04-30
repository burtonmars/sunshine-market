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
];

interface ShopProps {
    backgroundColor: string;
}

export default function Shop(props: ShopProps) {

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
                                product={item}
                                backgroundColor={props.backgroundColor}/>
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

export async function getServerSideProps() {
    const getRandomColor = () => {
    const opacity = 0.4;
    const colors = [
        `rgb(202, 32, 32, ${opacity})`,
        `rgb(255, 229, 0, ${opacity})`,
        `rgb(69, 182, 0, ${opacity})`,
        `rgb(4, 0, 199, ${opacity})`,
        ];

        return colors[Math.floor(Math.random() * (colors.length - 1))];
    }

    const backgroundColor = getRandomColor();
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/products`);
    // extract the data
    let data = await response.json();

    return {
        props: {
            products: data['message'],
            backgroundColor: backgroundColor
        },
    };
}
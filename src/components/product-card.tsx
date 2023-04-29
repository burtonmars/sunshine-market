import style from '../styles/product-card.module.scss';

interface ProductCardProps {
    product: any;
}

function ProductCard(props: ProductCardProps) {
  return (
    <div className={style.productCard__container}>
        <div className={style.productCard__colorSplash}>color
        </div>
        <div className={style.productCard__textContainer}>
            <div className={style.productCard__infoContainer}>
                <div className={style.productCard__nameContainer}>
                    <h3>{props.product.name}</h3>
                    <ul>
                        <li>{props.product.origin}</li>
                        <li>{props.product.distance} km</li>
                    </ul>
                </div>
                <div className={style.productCard__priceContainer}>
                    <h2>${props.product.price}</h2>
                </div>
            </div>
            <div className={style.productCard__addToCartContainer}>
                <div className={style.productCard__inputContainer}> 
                    <input type="number" />
                </div>
                <div className={style.productCard__buttonContainer}>
                    <button>add</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard

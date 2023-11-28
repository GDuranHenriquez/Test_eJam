import { Card, Rating  } from '@mui/material';
import PropTypes  from 'prop-types'
import styles from './cardProduct.module.css';
import Elipse from '../../../../../assets/status/elipce.svg?react'
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";


const CardProduct = ({img, ranking, textdescrip, name, price, specialPrice, stock}) => {

  const getPoint = (stock) =>{
    if(stock >= 12){
      return <Elipse className={`${styles.interBlueElipse} ${styles.interElipce}`}/>
    }else if(stock < 12 && stock > 0){
      return <Elipse className={`${styles.interOrangeElipse} ${styles.interElipce}`}/>
    }else{
      return <Elipse className={`${styles.interRedElipse} ${styles.interElipce}`}/>
    }
  }

  return (
    <Card className={styles.containerCard}>
      <div className={styles.infoProduct}>
        <div className={styles.imgProduct}>
          <img src={img} alt={name}/>
        </div>
        <div className={styles.dataProduct}>
          <div className={styles.namePrice}> 
            <div className={styles.name}>
              <span>{name}</span>
            </div>             
            {specialPrice > 0 ?
              <div className={styles.twoPrice}>
                <span>${price}</span>
                <span id={styles.specialPrice}>${specialPrice}</span>
              </div>:
              <div className={styles.onePrice}>
                <span>${price}</span>
              </div>
            }
          </div>
          <Rating sx={{ fontSize: 16 }} name="favorite" defaultValue={ranking} max={5} readOnly />
          <div className={styles.stock}>
            <div className={styles.elipce}>
              <Elipse className={styles.exterElipse}/>
              {getPoint(stock)}
            </div>
            <span>{stock} left in Stock</span>
          </div>
          <div className={styles.description}>
            <span style={{fontFamily: 'Manrope, sans-serif'}}>{textdescrip}</span>          
          </div>
        </div>        
      </div>
    </Card>
  );
};

CardProduct.propTypes = {  
  img: PropTypes.string, 
  ranking: PropTypes.number, 
  textdescrip: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  specialPrice: PropTypes.number,
  stock: PropTypes.number,
}

export default CardProduct;
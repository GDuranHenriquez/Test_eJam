import styles from './text.module.css';
import PropTypes from 'prop-types';
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";

const TextPromoPrice = ({textPromo, textDescipt, textPrice, total}) => {
  return (
    <div className={styles.containerText} style={{fontFamily: 'Manrope, sans-serif'}}>
      <span  id={styles.textPromo}>{textPromo} </span>
      <span  id={styles.textDescipt}>{textDescipt} </span>
      <span  id={styles.textPromo}>{textPrice} </span>
      <span  id={styles.textDescipt}>{total}</span>
    </div>
  )
}

TextPromoPrice.propTypes = {
  textPromo: PropTypes.string,
  textDescipt: PropTypes.string,
  textPrice: PropTypes.string,
  total: PropTypes.string,
}

export default TextPromoPrice;
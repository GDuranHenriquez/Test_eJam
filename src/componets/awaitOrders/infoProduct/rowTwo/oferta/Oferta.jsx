import styles from './oferta.module.css';
import PropTypes from 'prop-types';
import Save from '../../../../../assets/infoProduct/save.svg?react';
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";

const OfertaComponent = ({text}) =>{
  return (
    <div className={styles.containerOferta}>
      <Save className={styles.imageSave}/>
      <div className={styles.contentText}>
        <p dangerouslySetInnerHTML={{ __html: text }} style={{fontFamily: 'Manrope, sans-serif'}}/>
      </div>
    </div>
  )
}

OfertaComponent.propTypes = {
  text: PropTypes.string
}

export default OfertaComponent;
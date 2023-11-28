import PropTypes from 'prop-types';
import Check  from '../../../../assets/status/check.svg?react'
import Elipse from '../../../../assets/status/elipce.svg?react'
import styles from './btnStatus.module.css'
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";

const BtnStatus = ({pass, text, status}) => {
  
  const getImgStatus = (sts) =>{
    if(sts === 'end'){
      return <Check className={styles.check}/>
    }else if(sts === 'process'){
      return (
        <div className={`${styles.svgnumber} ${styles.process}`}>
          <Elipse className={styles.process}/>
          <span className={styles.number}>{pass}</span>
        </div>
      )
      
      
    }else if(sts === 'wait'){
      return (
        <div className={`${styles.svgnumber} ${styles.waitConten}`}>
          <Elipse className={styles.wait}/>
          <div>
            <span className={styles.number}>{pass}</span>
          </div>
        </div>
      ) 
    }
  }
  return (
    <div className={`${styles.containerBtn} ${status === 'wait'? styles.textWait :''}`}>
      <div className={styles.containerIMG}>
        {getImgStatus(status)}
      </div>
      <div className={styles.containerText}>
        <p style={{fontFamily: 'Manrope, sans-serif'}}>{text}</p>
      </div>
      
      
    </div>
  )
}

BtnStatus.propTypes = {
  status: PropTypes.string,
  text: PropTypes.string,
  pass: PropTypes.number
}

export default BtnStatus;
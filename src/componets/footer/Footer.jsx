import styles from './footer.module.css';
import VetlicalLine from '../../assets/Footer/verticalLine.svg?react'
import Lock from '../../assets/Footer/lock.svg?react'
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/500.css";

const Footer = () => {

  return (
    <div className={styles.containerFooter}>
      <div className={styles.subContainer}>
        <div className={styles.left}>
          <span>{'Copyright (c) 2023'}</span>
          <VetlicalLine className={styles.line}/>
          <span>{'Clarifionsupport@clarifion.com'}</span>
        </div>
        <div className={styles.right} >
          <Lock className={styles.lock}/>
          <span style={{fontFamily: 'Manrope, sans-serif'}}>{'Secure 256-bit SSL encryption.'}</span>
        </div>
      </div>
    </div>
  )

}

export default Footer;
import styles from './certificate.module.css';
import CertificateImg from '../../../../../assets/infoProduct/certificateSatisfi.svg?react';
import PropTypes from 'prop-types';

const CertificateComponent = ({ text }) =>{

  return (
    <div className={styles.containerCertificate}>
      <div className={styles.imgCert}>
        <CertificateImg/>
      </div>      
      <p dangerouslySetInnerHTML={{ __html: text }} style={{fontFamily: 'Manrope, sans-serif'}}/>
    </div>
  )

}

CertificateComponent.propTypes = {
  text: PropTypes.string
}

export default CertificateComponent;
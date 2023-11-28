import styles from './certificate.module.css';
import certificateSastifi from '../../../../../assets/infoProduct/certificateSastifi.png';
import PropTypes from 'prop-types';

const CertificateComponent = ({ text }) =>{

  return (
    <div className={styles.containerCertificate}>
      <div className={styles.imgCert}>
        <img src={certificateSastifi} alt="img certificate" />
      </div>      
      <p dangerouslySetInnerHTML={{ __html: text }} style={{fontFamily: 'Manrope, sans-serif'}}/>
    </div>
  )

}

CertificateComponent.propTypes = {
  text: PropTypes.string
}

export default CertificateComponent;
import { Card, Avatar, Rating  } from '@mui/material';
import PropTypes  from 'prop-types'
import styles from './avatarStyles.module.css';
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";

const AvatarCard = ({img, ranking, textComent, name, verifi}) => {
  return (
    <Card className={styles.containerCard}>
      <div className={styles.infoClient}>
        <Avatar alt="Avatar" src={img} />
        <div className={styles.raitingName}>
          <Rating sx={{ fontSize: 16 }} name="favorite" defaultValue={ranking} max={5} readOnly />
          <div className={styles.nameClient}>
            <span style={{fontFamily: 'Manrope, sans-serif'}}>{name}</span>          
            <img src={verifi} alt='info verifi'/>
          </div>
        </div>        
      </div>
      <div className={styles.coment}>
        <p style={{fontFamily: 'Manrope, sans-serif'}}>{textComent}</p>
      </div>
    </Card>
  );
};

AvatarCard.propTypes = {
  img: PropTypes.string, 
  ranking: PropTypes.number, 
  textComent: PropTypes.string,
  name: PropTypes.string,
  verifi: PropTypes.string
}

export default AvatarCard;
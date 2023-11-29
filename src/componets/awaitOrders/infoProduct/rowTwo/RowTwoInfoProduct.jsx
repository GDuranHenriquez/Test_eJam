import styles from './twoStyles.module.css';
import TextPromoPrice from './textPromo/TextPromoPrice';
import CardProduct from './cardProduct/CardProduct';
import imgProduct from '../../../../assets/infoProduct/imgProduct.png'
import CheckListComponet from './checkList/CheckListComponent';
import CheckListimg from '../../../../assets/infoProduct/tick-circle.svg?react';
import OfertaComponent from './oferta/Oferta';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoPayment from '../../../../assets/infoProduct/infoPayment.svg?react';
import { Link } from '@mui/material';
import CertificateComponent from './certificateComponet/CertificateComponent';
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/500.css";


const RowTwoInfoProduct = () => {
  const textCertificate = 'If you are not completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee</b>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!'

  const textPromoData = {
    textPromo: 'ONE TIME ONLY',
    textDescipt: 'special price for 6 extra Clarifion for only',
    textPrice: '$14 each',
    total: '($84.00 total!)'
  }

  const dataProduct = {
    img:imgProduct, 
    ranking: 5, 
    textdescrip: 'Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.', 
    name: 'Clarifion Air Ionizer', 
    price: 180, 
    specialPrice: 84, 
    stock: 12
  }

  const dataCheckList = [
    {
      text:'Negative Ion Technology may <b>help with allergens</b>', imgCheck: <CheckListimg className={styles.imgCheck}/>
    },
    {
      text:'Designed for <b>air rejuvenation</b>', imgCheck: <CheckListimg className={styles.imgCheck}/>
    },
    {
      text:'<b>Perfect for every room</b>  in all types of places.', imgCheck: <CheckListimg className={styles.imgCheck}/>
    }
  ]

  const ButtonClaim = styled(Button)(() => ({
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '10px',
    width: '100%',
    borderRadius: '50px',
    color:'rgba(255, 255, 255, 1)',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '27.32px',
    backgroundColor: 'rgba(89, 174, 67, 1)',
    height: '50px',    
    '&:hover': {
      backgroundColor: '#50993e',
    },
    '@media screen and (max-width: 768px)': {
      fontSize: '16px',
      height: '50px',
    },

  }));

  return (
    <div className={styles.containerRow}> 
      <TextPromoPrice textPromo={textPromoData.textPromo} textDescipt={textPromoData.textDescipt} textPrice={textPromoData.textPrice} total={textPromoData.total}/>
      
      <CardProduct img={dataProduct.img} ranking={dataProduct.ranking} textdescrip={dataProduct.textdescrip} name={dataProduct.name} price={dataProduct.price} specialPrice={dataProduct.specialPrice} stock={dataProduct.stock}/>

      <CheckListComponet data={dataCheckList}/>

      <OfertaComponent text={'Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each.</span>'}/>

      <div className={styles.buttonContainer}>
        <ButtonClaim>Yes - Claim my discount {<ArrowForwardIcon/>}</ButtonClaim>
        <div className={styles.containerPaymentImg}>
          <InfoPayment className={styles.imgInfo}/>
        </div>
        <Link href="#" color= "rgba(255, 0, 0, 1)" className={styles.link} style={{fontFamily: 'Manrope, sans-serif'}}>No thanks, I don’t want this.</Link>
      </div>

      <CertificateComponent text={textCertificate}/>

    </div>
  )

}

export default RowTwoInfoProduct;
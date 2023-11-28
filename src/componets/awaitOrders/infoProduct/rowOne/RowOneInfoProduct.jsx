import styles from './oneStyles.module.css';
import imgInfoProduct from '../../../../assets/infoProduct/imgInfoProduct.png';
import AvatarCard from './componentCard/AvatarCard';
import client from '../../../../assets/infoProduct/client.png'
import verifiCustomer from '../../../../assets/infoProduct/verifyCustomer.svg'

const RowOneInfoProduct = () => {

  const data = {
    ranking: 5,
    name: 'Ken T.',
    img: client,
    textComent: ' "As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful." ',
    vrifi: verifiCustomer
  }

  return (
    <div className={styles.containerRow}> 
      <div className={styles.containerIMG}>
        <img src={imgInfoProduct} alt="imgInfo Producto" />
      </div>
      <div className={styles.containerCard}>
        <AvatarCard name={data.name} img={data.img} textComent={data.textComent} ranking={data.ranking} verifi={data.vrifi}/>
      </div>
    </div>
  )

}

export default RowOneInfoProduct;
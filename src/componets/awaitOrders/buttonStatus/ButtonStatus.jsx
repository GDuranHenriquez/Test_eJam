import BtnStatus from "./componets/BtnStatus";
import styles from './buttonsStatus.module.css';
 

const ButtonStatus = () =>{

  const dataStatus = [
    {
      pass:1,
      status: 'end',
      text: 'Step 1 : Cart Review'
    },
    {
      pass:2,
      status: 'end',
      text: 'Step 2 : Checkout'
    },
    {
      pass:3,
      status: 'wait',
      text: 'Step 3 : Special Offer'
    },
    {
      pass:4,
      status: 'process',
      text: 'Step 4 : Confirmation'
    }
  ]

  return (
    <div className={styles.containerStatus}>
      {dataStatus.map((element, index) => <BtnStatus key={index} text={element.text} status={element.status} pass={element.pass}/>)}
    </div>
  )
}

export default ButtonStatus;
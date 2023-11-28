import styles from './checkList.module.css'
import PropTypes from 'prop-types'
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";

const CheckListComponet = ({data}) =>{

  const getList = (text, imgCheck, key) =>{
    return (
      <div key={key} className={styles.containerCheck}>
        {imgCheck}
        <div className={styles.text}>
          <p dangerouslySetInnerHTML={{ __html: text }} style={{fontFamily: 'Manrope, sans-serif'}}/>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.containerList}>
      {data.map((element, index) => getList(element.text, element.imgCheck, index))}
    </div>
  )  
}

CheckListComponet.propTypes = {
  data: PropTypes.array,
}

export default CheckListComponet;
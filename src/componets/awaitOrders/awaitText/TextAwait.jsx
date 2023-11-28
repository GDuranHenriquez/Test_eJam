import styles from './textAwait.module.css'
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";

const TextAwait = () => {

  return (
    <div className={styles.containerText}>
      <p className={styles.title}>Wait ! your order in progress.</p>
      <p className={styles.subText}>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
    </div>
  )

}

export default TextAwait;
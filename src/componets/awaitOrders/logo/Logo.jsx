import styled from './logo.module.css'
import logo1 from '../../../assets/logo/logo1.svg'
import logo2 from '../../../assets/logo/logo2.svg'
import logo3 from '../../../assets/logo/logo3.svg'

const Logo = () => {
  return (
    <div className={styled.containerLogo}>
      <div className={styled.logo1}>
        <img src={logo1} alt="logo clarifion" />
      </div>

      <div className={styled.logo2}>
        <img className={styled.logo2_1} src={logo2} alt="logo clarifion" />
        <img className={styled.logo2_2} src={logo3} alt="logo clarifion" />
      </div>
    </div>
  )
}

export default Logo;
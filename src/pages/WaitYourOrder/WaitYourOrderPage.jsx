import BackGroundGlobal from "../../componets/backgrounds/BackgroundAwaitOrders";
import UpBarAwaitOrders from "../../componets/awaitOrders/upBar/UpBarAwaitOrders";
import Logo from "../../componets/awaitOrders/logo/Logo";
import ButtonStatus from "../../componets/awaitOrders/buttonStatus/ButtonStatus";
import TextAwait from "../../componets/awaitOrders/awaitText/TextAwait";
import styles from "./waitYourOrderPage.module.css"
import RowOneInfoProduct from "../../componets/awaitOrders/infoProduct/rowOne/RowOneInfoProduct";
import RowTwoInfoProduct from "../../componets/awaitOrders/infoProduct/rowTwo/RowTwoInfoProduct";
import Footer from "../../componets/footer/Footer";

const WaitYourOrdersPages = () => {

  return <div className={styles.contenPage}>
    <BackGroundGlobal/>
    <UpBarAwaitOrders/>
    <Logo/>
    <TextAwait/>
    <ButtonStatus/>
    <div className={styles.containerInfoProduc}>
      <RowOneInfoProduct/>
      <RowTwoInfoProduct/>
    </div>
    <Footer/>
  </div>

}

export default WaitYourOrdersPages;
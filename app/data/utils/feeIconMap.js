// utils/feeIconMap.js
import {
  FaWater,
  FaBolt,
  FaWifi,
  FaFire,
  FaSnowflake,
  FaShieldAlt,
  FaMoneyBillWave,
  FaCreditCard,
} from "react-icons/fa";
import { RiContractLine } from "react-icons/ri";

export const feeIconMap = {
  Water: FaWater,
  Electricity: FaBolt,
  Internet: FaWifi,
  Gas: FaFire,
  Heat: FaSnowflake,
  "Contents Insurance": FaShieldAlt,
  "Other Fees": FaMoneyBillWave,
  "Payment Details": FaCreditCard,
  "Utilities Included": RiContractLine,
  "Security deposit": FaMoneyBillWave,
};

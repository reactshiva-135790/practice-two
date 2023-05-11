import { useNavigate } from "react-router-dom";
import "./customButton.css"

const CustomButton = ({color = "blue",name = "name",size = "medium",type = null,onClick}) => {

  const navigate = useNavigate();

  const onButtonClick = (e) => {
    e.preventDefault();
    navigate(`/chartMarket`);
   }

  return (
    <>
      <button className={`custom-button ${color} ${size} ${type}`} onClick={onButtonClick}>{name}</button>
    </>
  )
};

export default CustomButton;
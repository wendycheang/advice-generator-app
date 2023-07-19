import icon from './assets/images/icon-dice.svg'
import './dice_button.css'

const DiceButton = ({handleClick}) => {
   
    return (
        <button className="dice-button" onClick={handleClick}>
            <img className="dice-icon" src={icon} alt="" />
        </button>
    )

}


export default DiceButton
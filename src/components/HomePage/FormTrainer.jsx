import { useRef } from "react"
import { useDispatch } from "react-redux"
import { setTrainer } from "../../store/states/trainer.slice"
import { useNavigate } from "react-router-dom"
import '../PokedexPage/style/FormTrainer.css'

const FormTrainer = () => {

  const trainerInput = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainer(trainerInput.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <form className="form__container" onSubmit={handleSubmit}>
      <input
        className="form__input"
        placeholder="Enter your name here"
        ref={trainerInput}
        type="text"
      />
      <button className="form__button">Lets Start</button>
    </form>
  );
}

export default FormTrainer
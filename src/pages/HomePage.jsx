import FormTrainer from "../components/HomePage/FormTrainer"
import '../components/PokedexPage/style/HomePage.css'

const HomePage = () => {
  return (
    <div className="home__container">
      <img className="home__image" src="/pokedex-home.jpg" alt="" />
      <h1 className="home__regards">¡Hi trainer!</h1>
      <h2 className="home__text">
        To see the pokemon´s information tell me your trainer name
      </h2>
      <FormTrainer />
    </div>
  ); 
}

export default HomePage
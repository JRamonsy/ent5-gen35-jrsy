import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react";
import '../components/PokedexPage/style/PokeDetailPage.css'

const PokeDetailPage = () => {

  const { name } = useParams()
  
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [name])
  
  console.log(pokemon)

  return (
    <div>
      <header className="header__image">
        <img src="/pokedex-header.svg" alt="" />
      </header>
      <div className="pokeDetailPage__container">
        <div
          className={`pokeDetailPge__header bg-${pokemon?.types[0].type.name}`}
        >
          <img
            className="pokeDetailPage__image"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </div>
        <div className="detail__description">
          <h1 className="detail__description-order">#{pokemon?.order}</h1>
          <h2 className="detail__description-name">{pokemon?.name}</h2>
          <p className="detail__description-weight">weight</p>
          <p className="detail__description-weight-value">{pokemon?.weight}</p>
          <p className="detail__description-height">height</p>
          <p className="detail__description-height-value">{pokemon?.height}</p>
          <p className="detail__description-type">Type</p>
          <ul
            className={`detail__description-type-v `}
          >
            {pokemon?.types.map((typeInfo) => (
              <li className="card__type" key={typeInfo.type.url}>
                {typeInfo.type.name}
              </li>
            ))}
          </ul>

          <p className="detail__description-ability">Ability</p>
          <p className="detail__description-ability-v1">
            {pokemon?.abilities[0].ability.name}
          </p>
          <p className="detail__description-ability-v2">
            {pokemon?.abilities[1].ability.name}
          </p>
        </div>

        <div className="detail__container">
          <div className="detail__container-skills">
            <h2>Stats</h2>
            <div className="skills">
              <div className="detail">
                <span>{pokemon?.stats[0].stat.name}:</span>
                <span>{pokemon?.stats[0].base_stat}/150</span>
              </div>
              <div className={`bar bar-${pokemon?.stats[0].base_stat}`}></div>
              <div className="detail">
                <span>{pokemon?.stats[1].stat.name}:</span>
                <span>{pokemon?.stats[1].base_stat}/150</span>
              </div>
              <div className={`bar bar-${pokemon?.stats[0].base_stat}`}></div>
              <div className="detail">
                <span>{pokemon?.stats[2].stat.name}:</span>
                <span>{pokemon?.stats[2].base_stat}/150</span>
              </div>
              <div className={`bar bar-${pokemon?.stats[0].base_stat}`}></div>
              <div className="detail">
                <span>{pokemon?.stats[5].stat.name}:</span>
                <span>{pokemon?.stats[5].base_stat}/150</span>
              </div>
              <div className={`bar bar-${pokemon?.stats[0].base_stat}`}></div>
            </div>
          </div>
        </div>
        <h2 className="detail__movements-name">Movements</h2>
        <div className="detail__movements">
          <p className="detail__movements-moves">
            {pokemon?.moves[0].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[1].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[2].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[3].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[4].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[5].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[6].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[7].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[8].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[9].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[10].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[11].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[12].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[13].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[14].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[15].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[16].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[17].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[18].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[19].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[20].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[21].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[22].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[23].move.name}
          </p>
          <p className="detail__movements-moves">
            {pokemon?.moves[24].move.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PokeDetailPage
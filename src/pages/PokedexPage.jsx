import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react";
import ListPokemons from "../components/PokedexPage/ListPokemons";
import SelectType from "../components/PokedexPage/SelectType";
import '../components/PokedexPage/style/PokedexPage.css'

const PokedexPage = () => {

  const [pokeSearch, setPokeSearch] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(12)

  const inputSearch = useRef()

  const trainer = useSelector(states => states.trainer)

  const url = "https://pokeapi.co/api/v2/pokemon?limit=99999&offset=0";

  const [pokemons, getPokemons, getPokeByType ] = useFetch(url)

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getPokeByType(typeSelected)
    }
    setPage(1)
  }, [typeSelected])

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(inputSearch.current.value.trim().toLowerCase())
    setPage(1)
  }

  const pokemonsFiltered = pokemons?.results.filter(poke => {
    return poke.name.includes(pokeSearch)
  })

  //Logica paginación
  const startIndex = (page - 1) * pokePerPage
  const endIndex = startIndex + pokePerPage
  const quantityPokes = pokemonsFiltered ? pokemonsFiltered.length : 0
  const quantityPages = Math.ceil(quantityPokes / pokePerPage)

  return (
    <div>
      <header className="pokedex__header">
        <img
          className="pokedex__imge"
          src="/pokedex-header.svg"
          alt=""
        />
      </header>
      <div className="pokedex__search">
        <h3>
          Welcome <span style={{ color: "red" }}>{trainer}</span>, here you can
          find your favorite pokemon
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            className="pokedex__input"
            placeholder="write the pokemon´s name here"
            ref={inputSearch}
            type="text"
          />
          <button className="pokedex__button">Search</button>
        </form>
        <SelectType setTypeSelected={setTypeSelected} />
      </div>
      <ListPokemons
        pokemons={pokemonsFiltered}
        startIndex={startIndex}
        endIndex={endIndex}
        quantityPages={quantityPages}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}

export default PokedexPage
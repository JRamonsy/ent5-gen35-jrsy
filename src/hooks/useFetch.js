import axios from "axios"
import { useState } from "react"

const useFetch = url => {
  
  const [response, setResponse] = useState()

  const getApi = () => {
    axios.get(url)
      .then(res => setResponse(res.data))
      .catch(err => console.log(err))
  }

  const getApiTypes = (urltype) => {
    axios.get(urltype)
      .then(res => {
        const obj = {
          results: res.data.pokemon.map(poke => poke.pokemon)
        }
        setResponse(obj)
      })
      .catch (err => console.log(err))
  }
  return [response, getApi, getApiTypes]
}

export default useFetch
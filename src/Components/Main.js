import axios from "axios";
import { useEffect, useState } from "react";
import { Div } from "./style";
export function Main(){
    const [api, setApi] = useState({})
    const [input, setInput] = useState({})
    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(
        (response ) => {setApi(response.data.results)})
    },[])
    return(
                
        <Div>
          <input onInput={(parametro) => {setInput(parametro.target.value)}} type="text" />
          {console.log(input)}
          {Object.keys(api).map(pokemon => {
            return (
              <>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (parseInt(pokemon) + 1) + ".png"}/> 
                <div>{api[pokemon].name} 
                </div>
              </>
            )
          })}   
        </Div>
    )
}
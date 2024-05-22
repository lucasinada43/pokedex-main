import axios from "axios";
import { useEffect, useState } from "react";
import { Div } from "./style";
export function Main(){
    const [api, setApi] = useState({})
    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(
        (response ) => {setApi(response.data.results)})
    },[])
    return(
        <>
          {Object.keys(api).map(pokemon => {
            return (
              <Div>
              <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (parseInt(pokemon) + 1) + ".png"}/> 
                <div>{api[pokemon].name}
                  
                </div>
              </Div>
            )
          })}
          
        </>
    )
}
import axios from "axios";
import { useEffect, useState } from "react";
import { Div } from "./style";

export function Main() {
    const [api, setApi] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
            .then(response => setApi(response.data.results))
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    const filteredPokemon = api.filter(pokemon => 
        pokemon.name.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <Div>
            <input 
                onInput={(e) => setInput(e.target.value)} 
                value={input} 
                type="text" 
                placeholder="Digite o nome do Pokémon"
            />
            {filteredPokemon.map((pokemon) => {
                const pokemonUrlParts = pokemon.url.split('/');
                const pokemonId = pokemonUrlParts[pokemonUrlParts.length - 2];
                return (
                    <div key={pokemonId}>
                        <img 
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} 
                            alt={pokemon.name}
                        /> 
                        <div>{pokemon.name}</div>
                    </div>
                );
            })}
        </Div>
    );
}
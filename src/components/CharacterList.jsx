import { useState, useEffect } from "react";
import { Character } from "./Character";

function NavPage({ page, setPage }) {
  return (
    <header className="grid grid-cols-2 justify-center items-center" style={{ zIndex: 1 }}>
      <p className="text-white">Page: {page}</p>

      <button 
        className="btn btn-active btn-secondary"
        onClick={() => setPage(page + 1)}
      >
        Page {page + 1}
      </button>
    </header>
  );
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Modificar la función fetchData para obtener los datos correctos de los Pokémon
async function fetchData() {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`);
  const { results } = await data.json();

  const pokemonData = await Promise.all(
  results.map(async (result) => {
    const response = await fetch(result.url);
    const pokemonDetails = await response.json();

    // Aquí asumimos que la URL de la imagen se encuentra en sprites -> front_default
    const imageUrl = pokemonDetails.sprites.front_default;

    return { ...pokemonDetails, imageUrl };
  })
);

setCharacters(pokemonData);
setLoading(false);
}

    fetchData();
  }, [page]);

  return (
    <div className="container flex flex-col justify-center items-center mb-5">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 mt-5 mb-5">
          {characters.map((character) => (
            <div className="flex-grow" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
                status={character.status}
                species={character.species}
                gender={character.gender}
                weight={character.weight}
              />
            </div>
          ))}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
 
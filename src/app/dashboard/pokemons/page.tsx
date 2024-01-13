import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon';
import { PokemonsResponse } from '../../pokemons/interfaces/pokemons-response';
import Image from 'next/image';
import { PokemonGrid } from '../../pokemons/components/PokemonGrid';

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(300);

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>
        Listade de Pokémons <small>estático</small>
      </span>
      <div className='flex flex-wrap gap-10 items-center justify-center'>
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}

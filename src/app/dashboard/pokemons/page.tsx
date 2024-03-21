import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

export const metadata = {
  title: '151 Pokemons',
  description: 'Se muestran a continuación 151 pokemons',
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons: SimplePokemon[] = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('Esto es un error que no debería de suceder');

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons: SimplePokemon[] = await getPokemons(300);

  return (
    <div className='p-2 flex flex-col'>
      <span className='text-5xl my-2'>
        Lista de Pokémons <small>estático</small>
      </span>
      <div className='flex flex-wrap gap-10 items-center justify-center'>
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}

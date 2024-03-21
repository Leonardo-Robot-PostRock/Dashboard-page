import { FavouritesPokemons } from '@/pokemons';

export const metadata = {
  title: 'Favoritos',
  description: 'Se muestran a continuación 151 pokemons',
};

export default function PokemonsPage() {

  return (
    <div className='p-2 flex flex-col'>
      <span className='text-5xl my-2'>
        Pokémons favoritos <small>Global state</small>
      </span>
      <div className='flex flex-wrap gap-10 items-center justify-center'>
        <FavouritesPokemons />
      </div>
    </div>
  );
}

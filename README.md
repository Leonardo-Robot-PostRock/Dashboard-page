This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


#Notas:
Este state evita errores al cargar un estado que puede entrar en conflicto con lo que
tiene Next del lado del servidor con el lado del cliente

>Store:

```
    interface PokemonState {
        favourites: { [key: string]: SimplePokemon };
    }

    const initialState: PokemonState = {
        favourites: {}
    }

    setFavouritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
        state.favourites = action.payload;
    },
```

En aplicaciones Next.js, es común utilizar el renderizado del lado del servidor (SSR) para la primera carga de la página y el renderizado del lado del cliente (CSR) para las interacciones posteriores del usuario. En algunas situaciones, podría haber discrepancias entre el estado inicial que se carga del lado del servidor y el estado que se maneja del lado del cliente. Definir un estado inicial explícito en el slice de Redux ayuda a mitigar estos posibles errores al proporcionar un estado consistente y predecible para la aplicación en ambos lados (servidor y cliente).
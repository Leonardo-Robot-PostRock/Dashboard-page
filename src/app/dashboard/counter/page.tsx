'use client';

import { useState } from 'react';

export const metadata = {
	title: 'Counter Page',
	description: 'SEO Title'
}

export default function CounterPage() {
	const [count, setCount] = useState(0);

	const increment = (): void => {
		setCount((count) => count + 1);
	};

	const decrement = (): void => {
		setCount((count) => count - 1);
	};

	return (
		<div className='flex flex-col item-center justify-center w-full h-full'>
			<span>Productos en el carrito</span>
			<span className='text-9xl'>{count}</span>

			<div className='flex'>
				<button
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
					onClick={() => decrement()}
				>
					-1
				</button>
				<button
					className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
					onClick={() => increment()}
				>
					+1
				</button>
			</div>
		</div>
	);
}

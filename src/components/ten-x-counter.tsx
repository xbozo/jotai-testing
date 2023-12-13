'use client'

import { atomCounter } from '@/lib/atoms'
import { useAtom } from 'jotai'

export const TenXCounter = () => {
	const [counter, setCounter] = useAtom(atomCounter)
	const handleChange = () => setCounter((c) => c + 10)

	return (
		<div className='flex items-center gap-4'>
			<span>Contador: {counter}</span>
			<button
				className='bg-sky-700 rounded-lg p-2'
				onClick={handleChange}
			>
				Aumentar em 10
			</button>
		</div>
	)
}

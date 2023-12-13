'use client'

import { atomTesting } from '@/app/(home)/page'
import { useAtom } from 'jotai'

export const AtomTesting = () => {
	const [description, setDescription] = useAtom(atomTesting)

	return (
		<div>
			<p className='p-2 text-gray-400'>A descrição atual: {description}</p>
		</div>
	)
}

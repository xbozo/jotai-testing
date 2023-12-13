import { AtomTesting } from '@/components/atom-testing'
import { Counter } from '@/components/counter'
import { TenXCounter } from '@/components/ten-x-counter'
import { atom } from 'jotai'

export const atomTesting = atom('Átomo teste')

export default function Home() {
	return (
		<div className='flex flex-col gap-4'>
			<Counter />
			<TenXCounter />
			<AtomTesting />
		</div>
	)
}

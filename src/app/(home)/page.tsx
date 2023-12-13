import { Counter } from '@/components/counter'
import { TenXCounter } from '@/components/ten-x-counter'

export default function Home() {
	return (
		<div className='flex flex-col gap-4'>
			<Counter />
			<TenXCounter />
		</div>
	)
}

import { ReactNode } from 'react'
import { Providers } from './providers'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<Providers>
			<div className='min-w-screen min-h-screen bg-zinc-900 text-white p-4 flex justify-center'>
				<div className='container flex flex-col items-center p-8 bg-zinc-800 rounded-lg'>
					{children}
				</div>
			</div>
		</Providers>
	)
}

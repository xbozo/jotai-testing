## Definition

- A definição de um atom (variável global) pode ser feita em um client ou server component.
- Ou seja, pode ser definida em uma página, em server-side, em um arquivo lib.ts a parte, ou em um client component.

```
// atoms.ts
import { atom } from 'jotai'

export const atomCounter = atom(1)
```

## Usage

As variáveis globais (atoms) só podem ser usadas em client components, já que o hook useAtom é como se fosse um useState comum.

```
// Counter.tsx
import { useAtom } from 'jotai'

export const Counter = () => {
	const [counter, setCounter] = useAtom(atomCounter)
	const handleChange = () => setCounter((c) => c + 1)

	return (
		<div className='flex items-center gap-4'>
			<span>Contador: {counter}</span>
			<button
				className='bg-sky-700 rounded-lg p-2'
				onClick={handleChange}
			>
				Aumentar
			</button>
		</div>
	)
}
```

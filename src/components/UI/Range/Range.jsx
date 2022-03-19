import { useState } from 'react'
import styled from 'styled-components'

import Description from '../Description'

const Wrapper = styled.div`
	display: inline-block;
	width: 33%;
	margin: 0.4rem 0;
`
const Input = styled.input`
	cursor: pointer;
	width: 97%;
	height: 6px;
	margin: 0 0.4rem;
	overflow: hidden;
	-webkit-appearance: none;

	&::-webkit-slider-runnable-track {
		background: #ddd;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 20px;
		height: 40px;
		background: dodgerblue;
		box-shadow: -100vw 0 0 100vw dodgerblue;
		border: 1px solid #999;
	}
`

const Range = () => {

	const [value, setValue] = useState(90);

	return (
		<Wrapper>
			<Description>
				Name - {value}
			</Description>

			<Input
				type="range"
				min="0"
				max="100"
				step="10"
				value={value}
				onChange={(e) => (setValue(e.target.value))}
			>
			</Input>
		</Wrapper >
	)
}

export default Range;
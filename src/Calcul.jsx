import React, { useState } from 'react'

export const Calcul = () => {
	const [inputValue1, setinputValue1] = useState('')
	const [inputValue2, setinputValue2] = useState('')
	const [result, setResult] = useState('')

	let inputHandler = (e) => {
		if (e.target.name === 'inputValue1') {
			setinputValue1(e.target.value)
		} else {
			setinputValue2(e.target.value)
		}
	}

	let onPlus = () => {
		setResult(parseInt(inputValue1) + parseInt(inputValue2))
	}

	let onMinus = () => {
		setResult(parseInt(inputValue1) - parseInt(inputValue2))
	}

	let onMult = () => {
		setResult(parseInt(inputValue1) * parseInt(inputValue2))
	}

	let onDivice = () => {
		setResult(parseInt(inputValue1) / parseInt(inputValue2))
	}

	return (
		<div>
			<h1>Калькулятор</h1>
			<br />
			<input
				name='inputValue1'
				value={inputValue1}
				onChange={inputHandler}
				type='number'
				placeholder='enter your 1st number'
			/>
			<input
				name='inputValue2'
				value={inputValue2}
				onChange={inputHandler}
				type='number'
				placeholder='enter your 2nd number'
			/>
			<button onClick={onPlus}>+</button>
			<button onClick={onMinus}>-</button>
			<button onClick={onMult}>/</button>
			<button onClick={onDivice}>*</button>
			<hr />
			<div style={{ fontWeight: 'bold' }}>
				result: {result}
			</div>
		</div>
	)
}

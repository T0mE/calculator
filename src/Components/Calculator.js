import { useState } from 'react';
import '../Styles/Calculator.css';

const Calculator = () => {
	const [homePrice, setHomePrice] = useState('');

	// const handleChange = (event) => {
	// 	setHomePrice(event.target.value);
	// 	// homePrice = ;
	// };

	return (
		<div className='container'>
			<h1>Mortgage calculator</h1>
			<div className='d-flex flex-row'>
				<div className=''>
					<label className='mb-1'>Home price</label>
					<input
						type='number'
						class='form-control'
						placeholder='$1000000'
						onChange={handleChange}
						value={homePrice}
					>
						${homePrice}
					</input>
				</div>
				<div className=''>
					<label className='mb-1'>Down payment(6%)</label>
					<input
						type='tel'
						class='form-control'
						placeholder='$60,000'
						inputMode='numeric'
					></input>
				</div>
				<div className='d-flex align-items-end'>
					<input
						type='tel'
						class='form-control'
						placeholder='3%'
						inputMode='numeric'
					></input>
				</div>
			</div>
		</div>
	);
};
export default Calculator;

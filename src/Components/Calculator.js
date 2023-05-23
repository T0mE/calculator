import { useState } from 'react';
import '../Styles/Calculator.css';

const Calculator = () => {
	let [num, setNum] = useState(245000);

	let incNum = () => {
		if (num < 10000000) {
			setNum(Number(num) + 50000);
		}
	};
	let decNum = () => {
		if (num > 0) {
			setNum(num - 50000);
		}
	};
	let handleChange = (e) => {
		setNum(e.target.value);
	};

	return (
		<div className='col-xl-1'>
			<div className='input-group'>
				<div className='input-group-prepend'>
					<button
						className='btn btn-outline-primary'
						type='button'
						onClick={decNum}
					>
						-
					</button>
				</div>
				<input
					type='text'
					className='form-control'
					value={num}
					onChange={handleChange}
				/>
				<div className='input-group-prepend'>
					<button
						className='btn btn-outline-primary'
						type='button'
						onClick={incNum}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
};
export default Calculator;

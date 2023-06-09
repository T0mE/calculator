import { useState } from 'react';

const Interest = () => {
	let [interest, setNum] = useState(8);

	let incInt = () => {
		if (interest < 20) {
			setNum(Number(interest) + 0.5);
		}
	};
	let decInt = () => {
		if (interest > 0.5) {
			setNum(interest - 0.5);
		}
	};
	let handleChange = (e) => {
		setNum(e.target.value);
	};
	return (
		<div className='col-md-1'>
			<div className='input-group'>
				<div className='input-group-prepend'>
					<button
						className='btn btn-outline-primary'
						type='button'
						onClick={decInt}
					>
						-
					</button>
				</div>
				<input
					type='text'
					className='form-control'
					// inputMode='numeric'
					value={interest + '%'}
					onChange={handleChange}
				/>
				<div className='input-group-prepend'>
					<button
						className='btn btn-outline-primary'
						type='button'
						onClick={incInt}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
};

export default Interest;

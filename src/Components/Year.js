import { useState } from 'react';

const Year = () => {
	let [year, setYear] = useState(25);

	let incYear = () => {
		if (year < 35) {
			setYear(Number(year) + 5);
		}
	};

	let decYear = () => {
		if (year > 5) {
			setYear(Number(year) - 5);
		}
	};

	let handleChange = (e) => {
		setYear(e.target.value);
	};

	return (
		<div className='col-md-1'>
			<div className='input-group'>
				<div className='input-group-prepend'>
					<button
						className='btn btn-outline-primary'
						type='button'
						onClick={decYear}
					>
						-
					</button>
				</div>
				<input
					type='text'
					className='form-control'
					inputMode='numeric'
					pattern='[0-9]{7}'
					value={year + ' lat'}
					onChange={handleChange}
				/>
				<div className='input-group-prepend'>
					<button
						className='btn btn-outline-primary'
						type='button'
						onClick={incYear}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
};

export default Year;

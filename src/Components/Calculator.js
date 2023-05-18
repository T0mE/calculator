import '../Styles/Calculator.css';

function Calculator() {
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
					></input>
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
}
export default Calculator;

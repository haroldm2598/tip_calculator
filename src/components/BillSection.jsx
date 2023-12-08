import { useDispatch, useSelector } from 'react-redux';
import {
	getBillAmount,
	getPerPerson,
	calculateBill,
	customTip
} from '../state/tip/tipSlice';

function BillSection() {
	const { tipOptions } = useSelector((state) => state.tipCalculator);
	const dispatch = useDispatch();

	const handleInputBill = (e) => {
		let val = e.target.value.replace(/[^\d]/g, '');

		if (e.target.validity.valid) dispatch(getBillAmount(Number(val)));
	};

	const handleInputPerson = (e) => {
		let val = e.target.value.replace(/[^\d]/g, '');

		if (e.target.validity.valid) dispatch(getPerPerson(Number(val)));
	};

	const handleCustomTip = (e) => {
		let val = e.target.value.replace(/[^\d]/g, '');
		if (e.target.validity.valid) dispatch(customTip(Number(val)));
	};

	return (
		<section className='w-full md:w-[50%] h-full mb-10 md:mb-0'>
			{/* bill input */}
			<div className='flex flex-col'>
				<label htmlFor='bill' className='billLabel font-medium'>
					Bill
				</label>
				<input
					type='text'
					name='bill'
					className='billInput h-10 px-2 text-2xl font-bold text-right rounded-lg'
					onChange={handleInputBill}
				/>
			</div>

			{/* select tip */}
			<div className='my-10'>
				<h2 className='billLabel font-medium'>Select Tip %</h2>

				<div className='flex flex-wrap [&>*]:m-2'>
					{tipOptions.map((tipValue, index) => (
						<button
							key={index}
							className='tipBtn flex-grow w-[25%] text-lg font-semibold rounded-sm'
							onClick={() => dispatch(calculateBill(tipValue))}
						>
							{tipValue}
						</button>
					))}
					<input
						type='text'
						className='customTip flex-grow w-[25%] text-lg font-semibold rounded-sm'
						placeholder='CUSTOM'
						onChange={handleCustomTip}
					/>
				</div>
			</div>

			{/* number of people */}
			<div className='flex flex-col'>
				<label htmlFor='bill' className='billLabel font-medium'>
					Number of People
				</label>
				<input
					type='text'
					name='bill'
					className='billInput h-10 px-2 text-2xl font-bold text-right rounded-lg'
					onChange={handleInputPerson}
				/>
			</div>
		</section>
	);
}

export default BillSection;

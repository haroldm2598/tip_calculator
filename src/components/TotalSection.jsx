import { useDispatch, useSelector } from 'react-redux';
import { resetBtn } from '../state/tip/tipSlice';

function TotalSection() {
	const { tipAmount, perPerson, totalBill } = useSelector(
		(state) => state.tipCalculator
	);
	const dispatch = useDispatch();

	return (
		<section className='displayContainer h-[50rem] md:h-full w-full md:w-[50%] p-4 flex flex-col justify-between rounded-lg'>
			{/* tip and total amount */}
			<div className='flex flex-col text-white'>
				{/* tip amount */}
				<div className='flex flex-row justify-between items-center'>
					<h6 className='font-medium'>Tip Amount</h6>
					<h1 className='text-4xl font-semibold'>${tipAmount}</h1>
				</div>

				{/* split per person*/}
				<div className='flex flex-row  justify-between items-center'>
					<h6 className='font-medium'>Per Person</h6>
					<h1 className='text-4xl font-semibold'>${perPerson}</h1>
				</div>

				{/* total amount*/}
				<div className='flex flex-row  justify-between items-center'>
					<h6 className='font-medium'>Total Bill</h6>
					<h1 className='text-4xl font-semibold'>${totalBill}</h1>
				</div>
			</div>

			{/* reset button */}
			<button
				className='resetBtn w-[23rem] h-[3rem] mx-auto font-bold text-xl rounded-lg'
				onClick={() => dispatch(resetBtn())}
			>
				RESET
			</button>
		</section>
	);
}

export default TotalSection;

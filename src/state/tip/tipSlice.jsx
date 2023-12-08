import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tipOptions: [5, 10, 15, 25, 50],
	newTip: 0,
	bill: 0,
	tipAmount: 0,
	totalBill: 0,
	numOfPeople: 0,
	perPerson: 0
};

const tipSlice = createSlice({
	name: 'tipCalculator',
	initialState,
	reducers: {
		getBillAmount: (state, action) => {
			state.bill = action.payload;
		},
		getPerPerson: (state, action) => {
			state.numOfPeople = action.payload;
		},
		calculateBill: (state, action) => {
			// compute yun tip yun action.payload kailangan makuha yun bagong convert na value
			const computeTip = (state.bill * action.payload) / 100;

			// output ng total tip
			state.tipAmount = Number(computeTip.toFixed(2));
			// output ng total bill
			state.totalBill = state.bill += state.tipAmount;
			// output ng Perperson
			state.perPerson = Number(state.totalBill / state.numOfPeople).toFixed(2);
		},
		customTip: (state, action) => {
			state.newTip = action.payload;
			const computeTip = (state.bill * state.newTip) / 100;

			state.tipAmount = Number(computeTip.toFixed(2));
			state.totalBill = state.bill += state.tipAmount;
			state.perPerson = state.totalBill / state.numOfPeople;
		},
		resetBtn: (state) => {
			state.bill = 0;
			state.tipAmount = 0;
			state.totalBill = 0;
			state.numOfPeople = 0;
			state.perPerson = 0;
		}
	}
});

export const {
	getBillAmount,
	getPerPerson,
	calculateBill,
	customTip,
	resetBtn
} = tipSlice.actions;

export default tipSlice.reducer;

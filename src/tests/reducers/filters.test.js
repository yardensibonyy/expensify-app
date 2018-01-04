import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

// test('should set filter by text', () => {
//     const state = filtersReducer(undefined, { type:'SET_TEXT_FILTER', text:'salmon' });
//     expect(state.text).toBe('salmon');
// });

test('should set filter by text', () => {
    const text = 'salmon';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('salmon');
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate:2345 });
    expect(state.startDate).toBe(2345);
});

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, { type:'SET_END_DATE', endDate:12345 });
    expect(state.endDate).toBe(12345);
});
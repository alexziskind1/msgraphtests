import * as frameModule from 'ui/frame';


export function tapViewExpenses() {
    frameModule.topmost().navigate('expenses-page');
}
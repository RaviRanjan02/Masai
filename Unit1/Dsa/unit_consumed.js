// Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

// test.png

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// You are given total amount of bill, N , you need to find total unit consumed.
// ( 0-50=3per unit , 51-150=5 per unit , 151 and above =10 per unit)

var total_bills =930;
var actual_bill=total_bills-80;
var units_consumed=0;
if(actual_bill>650){
    units_consumed=units_consumed+150;
    actual_bill=actual_bill-650;
    units_consumed=units_consumed+actual_bill/10;
}
else if(actual_bill>150&&actual_bill<=650){
    units_consumed=units_consumed+50;
    actual_bill=actual_bill-150;
    units_consumed=units_consumed+actual_bill/5;
}
else if(actual_bill<=150){
     units_consumed=actual_bill/3
    }

console.log(units_consumed);

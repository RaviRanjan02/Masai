// how to find total_bills form the units_consumed 
// breaking of charges ( 0-50=3,51-150=5,151above=10)

var units_consumed=170;
var fixed_charges=80;
 
 var acutal_bills=(50*3+100*5+20*10);
//  console.log(acutal_bills);
 var totalbills=(acutal_bills+fixed_charges);
 console.log(totalbills);


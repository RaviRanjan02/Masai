// You are provided the highest runs,N, ever scored in a cricket match till now, which is current highest record.

// You are also given current runs,M scored by Sachin (Tendulkar) in a today's match.

// If Sachin breaks current record in that match, print Broken.
// If Sachin could not break that record, print Not Yet.
// If Sachin score exactly as current highest record, print Wao.
var N=250;
var M=200;
if(M>N){
    console.log("Broken");
}
else if(M<N){
    console.log("Not Yet");
}
else if(M=N){
    console.log("Wao");
}
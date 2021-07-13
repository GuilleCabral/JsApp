var x = 8;
var y = 6;

function returnSum(x,y){
    returnSum(x+y);
}
console.log (x+y);

function returnSum(x,y){
    returnSum(x-y);
}
console.log (x-y);

function returnSum(x,y){
    returnSum(x*y);
}
console.log (x*y);

function returnSum(x,y){
    returnSum(x/y);
}
console.log (x/y);
let count = 0;
let prime = 17;
for(let a=1; a<=prime; a++) {

if(prime%a==0){
count++;
}
}

if(count == 2) {
console.log("prime");
} else {
  console.log("Not a Prime");
}
// Done
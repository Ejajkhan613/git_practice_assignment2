let count = 0;
let Prime = 17;
for(let a=1; a<=Prime; a++) {

if(Prime%a==0){
count++;
}
}

if(count == 2) {
console.log("Prime");
} else {
  console.log("Not a Prime");
}
// Done
const arr = ['js', 'phyton', 'c#', 'c++', '123', '6', '7', '8', '9', '10'];
let accumulator = [];
for (let i =0; i <arr.length; i++) {
    if(arr[i].length >=3) {
        accumulator.push(arr[i])
    }
}
console.log(accumulator)
const arr  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i<arr.length; i++) {
    if( arr[i] % 2 == 0) {
        console.log(arr[i])
    }
}
const arr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0 ;
while (i < arr2.length) {
    
    if (arr[i] % 2 !== 0){
        console.log(arr[i])
    }i++
}
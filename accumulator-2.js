const arr = [1, 2, 3, 4, 5, 6, 7, -1 , -2, -3] ;
let i = 0;
while(i<arr.length){
    i++
    if (arr[i] < 0){
        console.log(arr[i])
    }
}
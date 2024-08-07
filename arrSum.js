const arr = [2,4,5,7,8]


const arrSum = (arr,size) =>{
  
  if(size <= 0){
      return 0
  }
  else{
      return arr[size -1] + arrSum(arr,size -1)
     
  }
}

console.log(arrSum(arr, arr.length))

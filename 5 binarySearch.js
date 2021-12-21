/*Implement binarySearch.*/

function binarySearch(sortedArr, index){
  let start = 0;
  let end = sortedArr.length - 1;
  while(start <= end){
    let middle = Math.floor((start + end) / 2);
    if(sortedArr[middle] === index){
      return middle
    }
    else if(sortedArr[middle] < index){
      start = middle + 1;
    }
    else {
      end = middle - 1;
    }
  }
  return -1
}
console.log(binarySearch([1, 5, 7, 16, 29, 48, 106], 5))
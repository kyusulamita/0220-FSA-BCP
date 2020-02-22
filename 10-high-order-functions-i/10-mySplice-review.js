// YOUR CODE BELOW
// [1, 2, 3, 4]
// arr, 1, 2, 'apples'
function mySplice(arr, strIdx, dltCnt, elem){
  // elemsBeforeSplice => [1]
  // removedElem => [2, 3]
  // elemsAfterSplice => [4]
  // elem => 'apples'
  
  // [2, 3] => removeElems
  
  // arr => [1, 'apples', 4]
  // elemsBeforeSplice + elem(?) + elemsAfterSplice
  
  // elemsBeforeSplce everything before strIdx
  // strtIdx => strIx + dltCnt
  // strIdx + dltCnt => end
  
  const beforeSplice = []; // [1]
  const removedElems = []; // [2, 3]
  const afterSplice = []; // [4]
  // strIdx = 1
  // sttIdx + dltCnt = 3
  // [1, 2, 3, 4]
  for(let i = 0; i < arr.length; i++){
    if (i < strIdx) { 
      beforeSplice.push(arr[i])
    } else if (i < strIdx + dltCnt) {
      removedElems.push(arr[i]);
    } else {
      afterSplice.push(arr[i])
    }
  }
  // arr = beforeSplice.concat(afterSplice); //[1, 4]
  // [1, 2, 3, 4]
  while(arr.length) {
    arr.pop();
  }
  // []
//   for (let i = 0; i < beforeSplice.length; i++){
//     arr.push(beforeSplice[i]);
//   }
//   // arr => [1]
//   if (elem) {
//     arr.push(elem);
//   }
  
//   for (let i = 0; i < afterSplice.length; i++){
//     arr.push(afterSplice[i]);
//   }
  // arr => [1, 4]
  arr.push(...beforeSplice); // arr.push([1, 2]) => arr.push(1, 2)
  if (elem) {
    arr.push(elem);
  }
  arr.push(...afterSplice);
 
  
  return removedElems;
}
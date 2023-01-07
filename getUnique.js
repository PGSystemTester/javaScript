const testValues = [1,2,3,1,1,1,1,1,2,];
  
function getUniqueValues(someArray){
  if(someArray===undefined){
    someArray = testValues;
  }
  return [...new Set(someArray)];
}

/* /Older methods
https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
*/

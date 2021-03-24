class ArrayHandler {
  
  // 1  
  replicateItem(times, item) {
    const array = [];
    for (let i = 0; i < times; i++) {
      array.push(item);
    }

    return array;
  }

  // 2
  reverse(array) {
    
    let reverseArray = [array[array.length - 1]];
    
    for (let i = 2; i <= array.length; i++) {
      reverseArray = [...reverseArray, array[array.length - i]];
    }
    
    return reverseArray;
  }

  // 3
  filter(array) {

    const filteredArray = [];

    array.forEach((item, index) => {
      if (!item) {
        return;
      }
      filteredArray.push(item);
    
    })

    return filteredArray;
  }

  // 4
  transform(arrays) {

    return `{
      ${arrays.map((array) => { 
        return array.join(':');
      }).join()}
    }`
  }

  // 5
  excludeItem(array, ...args) {

    const excluder = [...args];
    const filteredArray = array;
    
    for(let i = 0; i < excluder.length; i++) {
      filteredArray.forEach((item, index) => {
        if (item === excluder[i]){
          filteredArray.splice(index, 1);
        }
      })
    }
    
    return filteredArray;
  }

  // 6
  noRepeat(array) {

    const filteredArray = array;

    filteredArray.forEach((item, index) => {
      for(let i = index + 1; i < filteredArray.length; i++) {
        if (item === filteredArray[i]){
          filteredArray.splice(i, 1);
          i--;
        }
      }
    })

    return filteredArray;
  }

  // 7 
  compareEquality(array1, array2) {

    if (array1.join() === array2.join()) {
      return true;
    } else {
      return false;
    }
  }

  // 8
  removeNesting(array) {
 
    const startArray = array;
    let nonNested = []; 

    startArray.map((item) => {
      
      if(item.length) {
        nonNested = [...nonNested, ...item];

      } else {
        nonNested = [...nonNested, item];
      } 
    })

    return nonNested;
  }
  
  // 9
  split(array, splitter) {
  
    const startArray = array;
    let splitedArray = [];
    let arrayPartition

      for (let i = 0; i < startArray.length; i += splitter){
        arrayPartition = startArray.slice(i, i + splitter);
        splitedArray = [...splitedArray, arrayPartition];
      }
    return splitedArray;
  }

  // 10
  corresponding(array1, array2) {

    let filteredArray1 = this.noRepeat(array1);
    let filteredArray2 = this.noRepeat(array2); 
    let matchArray = [];   

    filteredArray1.forEach((itemArray1) => {
      filteredArray2.forEach((itemArray2) => {
        if (itemArray1 === itemArray2){
          matchArray.push(itemArray1);
        }
      })
    })

    return matchArray;
  }


}

const arrayHandler = new ArrayHandler();

const replicateItem = arrayHandler.replicateItem(3,'a');

const reverse = arrayHandler.reverse([1, 2, 3, 4]);

const filter = arrayHandler.filter([1, 2, '', undefined]);

const transform = arrayHandler.transform([["c", 2], ["d", 4]]);

const excludeItem = arrayHandler.excludeItem([5,4,3,2,5], 5, 3);

const noRepeat = arrayHandler.noRepeat([1,2,3,3,2,4,5,4,7,3]);

const compareEquality = arrayHandler.compareEquality([1,2,3,4], [1,2,3,4]);

const removeNesting = arrayHandler.removeNesting([1, 2, [3], [4, 5]]);

const split = arrayHandler.split([1, 2, 3, 4, 5], 2);

const corresponding = arrayHandler.corresponding([6, 8], [8, 9]);

console.log('Challenge 1)', replicateItem, '\n');
console.log('Challenge 2)', reverse, '\n');
console.log('Challenge 3)', filter, '\n');
console.log('Challenge 4)', transform, '\n');
console.log('Challenge 5)', excludeItem, '\n');
console.log('Challenge 6)', noRepeat, '\n');
console.log('Challenge 7)', compareEquality, '\n');
console.log('Challenge 8)', removeNesting, '\n');
console.log('Challenge 9)', split, '\n');
console.log('Challenge 10)', corresponding, '\n');
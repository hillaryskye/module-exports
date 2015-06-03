module.exports = {

// // Write a function that takes two arrays and returns a new array with all items in
// // alphabetical order.


// //     alphanimal(array1, array2);
// //     //-> [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ]

alphaAnimal: function(arr1, arr2) {
    var newArr = [];
    newArr = newArr.concat(arr1, arr2).sort();
    return newArr;

}
  };

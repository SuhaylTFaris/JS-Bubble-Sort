//To Test each solution, select which
//solution you wish to test. Remove
//the commenting text and run jasmine.

//First Solution
// function bubbleSort(arr) {
//   var length = arr.length;
//   //Processes how many passes.
//   for (var i = 0; i < length; i++) {
//     //Notice that j < (length - i)
//     for (var j = 0; j < (length - i - 1); j++) {
//       //Compare the adjacent positions
//       if(arr[j] > arr[j+1]) {
//         //Swap the numbers, if found to follow the parameters for bubble sort.
//         //Temporary variable to hold the current number
//         var tmp = arr[j];
//         //Replace current number with adjacent number
//         arr[j] = arr[j+1];
//         //Replace adjacent number with current number
//         arr[j+1] = tmp;
//       }
//     }
//   }
//   return arr;
// }

//Second Solution: -- Seems to run .001 second slower than solution one.
//Another form of bubble sort includes
//starting at the end of the array and
//placing the smallest element first
//and going till the largest.
//So, at the end of Pass 1, smallest
//number will be placed at the first
//position. Following JavaScript code
//illustrates this.
// function bubbleSort(arr) {
//       var length = arr.length;
//       //Number of passes
//       for (var i = (length - 1); i >= 0; i--) {
//         for (var j = (length - i); j > 0; j--) {
//           //Compare the adjacent positions
//           if(arr[j] < arr[j-1]) {
//             //Swap the numbers
//             var tmp = arr[j];
//             arr[j] = arr[j-1];
//             arr[j-1] = tmp;
//           }
//         }
//       }
//    return arr;
// }
//
// Third Solution: Runs at same speed as solution 1.
// function bubbleSort(arr){
//  for (var i = 0; i < arr.length; i++) {
//    var temp = 0
//    if (arr[i] > arr[i+1]) {
//      temp = arr[i];
//      arr[i] = arr[i+1];
//      arr[i+1] = temp;
//      bubbleSort(arr);
//    }
//  }
//  return arr;
// }
//
//Fourth Solution: Runs at .008 Slowest of all solutions.
// function bubbleSort (arr) {
//   var cached;
//
//   for (var x = 0; x < arr.length; x++) {
//     for (var i = 0; i < arr.length - 1; i++) {
//       if (arr[i + 1] < arr[i]) {
//         // swap
//         cached = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = cached;
//         // console.log(arr);
//       }
//     }
//   }
//   return arr;
// }
//
//Fifth Solution: Runs at same speed
//as solution 1.
//
// function bubbleSort(arr){
//   var solution = arr.slice();
//   var swap = true;
     //Uses while loop with the var
     //swap to check while the data
     //is not "swapped" in accordance
     //to the for(if) function to swap
     //til it meets the jasmine tests
     //requirements.
     //Once all data is swapped;
     //it'll change "swap" back to
     //true ending the while loop.
//   while(swap) {
//     swap = false;
//     for (var i = 0; i < solution.length-1; i++) {
//       if (solution[i] > solution[i+1]) {
//         var tmp = solution[i];
//         solution[i] = solution[i+1];
//         solution[i+1] = tmp;
//         swap = true;
//       }
//     }
//   }
//
//   return solution;
// }
module.exports = bubbleSort;

//First Solution
function bubbleSort(items) {
  var length = items.length;
  //Processes how many passes.
  for (var i = 0; i < length; i++) {
    //Notice that j < (length - i)
    for (var j = 0; j < (length - i - 1); j++) {
      //Compare the adjacent positions
      if(items[j] > items[j+1]) {
        //Swap the numbers, if found to follow the parameters for bubble sort.
        //Temporary variable to hold the current number
        var tmp = items[j];
        //Replace current number with adjacent number
        items[j] = items[j+1];
        //Replace adjacent number with current number
        items[j+1] = tmp;
      }
    }
  }
}
//Second Solution
//Another form of bubble sort includes
//starting at the end of the array and
//placing the smallest element first
//and going till the largest.
//So, at the end of Pass 1, smallest
//number will be placed at the first
//position. Following JavaScript code
//illustrates this.
function bubbleSort(items) {
      var length = items.length;
      //Number of passes
      for (var i = (length - 1); i >= 0; i--) {
        for (var j = (length - i); j > 0; j--) {
          //Compare the adjacent positions
          if(items[j] < items[j-1]) {
            //Swap the numbers
            var tmp = items[j];
            items[j] = items[j-1];
            items[j-1] = tmp;
          }
        }
      }
}

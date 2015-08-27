# Implementing Bubble Sort in JavaScript

# Bubble Sort Exercise

You will be implementing bubble sort in JavaScript.  There is also a jasmine spec that you should take a look at before working on the bubble sort implementation.

### Instructions

1. Look at the ```spec/bubbleSortSpec.js``` spec file.  It has four very simple tests for the merge function and the mergeSort function.  Implement some more test cases if you would like __before__ implementing the bubbleSort.
2. Look at the ```bubbleSort.js``` file.  There is one function that you need to implement to pass the specs.
3. Implement bubble sort.  Make sure it passes all of your specs.
4. Try to do this without looking up solutions online.

### Helpful Resources

[https://en.wikipedia.org/wiki/Bubble_sort](https://en.wikipedia.org/wiki/Bubble_sort)

[https://www.youtube.com/watch?v=8Kp-8OGwphY](https://www.youtube.com/watch?v=8Kp-8OGwphY)

[https://study.cs50.net/bubble_sort](https://study.cs50.net/bubble_sort)

The Main.JS video will contain multiple solutions to the JS Bubble sort problem.

## Logic and Complexity behind Bubble Sort:

Let’s calculate the complexity involved in Bubble Sort algorithm using Big-O notation.

For an array of size N, it requires N steps to complete Pass 1 but it requires N-1 steps to complete Pass 2 as we don’t traverse last element. Similarly, we need N-2 steps for Pass 3 and so on.

Total number of steps required to sort an array using bubble sort is:

N + (N-1) + (N-2) + …     ≈  (N * (N-1)) / 2 (sum of N natural numbers)

For N → ∞ :

Number of steps ≈ N².

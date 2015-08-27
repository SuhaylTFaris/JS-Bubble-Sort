# JS Bubble Sort

The Main.JS video will contain multiple solutions to the JS Bubble sort problem.

## Logic and Complexity behind Bubble Sort:

Let’s calculate the complexity involved in Bubble Sort algorithm using Big-O notation.

For an array of size N, it requires N steps to complete Pass 1 but it requires N-1 steps to complete Pass 2 as we don’t traverse last element. Similarly, we need N-2 steps for Pass 3 and so on.

Total number of steps required to sort an array using bubble sort is:

N + (N-1) + (N-2) + …     ≈  (N * (N-1)) / 2 (sum of N natural numbers)

For N → ∞ :

Number of steps ≈ N².

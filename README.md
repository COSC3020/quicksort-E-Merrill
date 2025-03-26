# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

In the worst case, the array is reverse sorted, which means the pivot (in my implementation) will be the smallest value of the entire array. This means that the algorithm will iterate through every element, then iterate through every element minus one, then minus two, and so on unti it finally sorts the entire array. The while loop controlling all of these operations, functionally, is like a series of for loops executing one after the other (NOT nested,) each of decreasing length until they reach 0. Thus, the complexity of the while loop's execution would be the sum of $n + (n-1) + (n-2) + ... + 1$  This can also be expressed as $\sum_{k=1}^n k$  Since this is just a sum of numbers, this can be simplified using a summation formula. Using our input size, we get $\frac{n(n+1)}{2} = \frac{n^2 + n}{2}$ which is asymptotically equivalent to $n^2$ going by the fastest growing term. Thus, the asymptotic complexity of this iterative quicksort implementation is $\theta(n^2)$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I got the idea of treating an array like a stack to get the array indices to sort through from Noah Vogt.

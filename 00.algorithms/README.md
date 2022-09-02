# Sorting Algorithms
---

## Bubble Sort

Loop through the array, swapping adjacent pairs of indices if the left item is larger than the right.

At each iteration, the next largest item "bubbles" up to the right.

Continue looping until the array is sorted.

## Selection Sort

Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.

The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.

This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n2), where n is the number of items.

## Insertion Sort

1. Consider the array as two sections. A sorted section, and an unsorted section.
   
2. Initially, the sorted section consists of only one value—the value at index 0. The unsorted section consists of all the values to the right of index 0.
3. Take the value to the right of the sorted section and store it temporarily to create an "empty slot". Consider this "empty slot" as now part of the sorted section.
4. The sorted section has now grown by one and the unsorted section has shrunk by one.
5. Move the "slot" to the appropriate position by shifting the values in the sorted section until the "slot" is placed correctly.
6. Once the "slot" is in the correct position, fill it with the stored value.
7. Repeat for all remaining indices in the unsorted section.

## Merge Sort

1. Create a merge function to merge two sorted arrays into a single sorted array.
   - You do NOT need to work in place, it's okay to use a new array.
2. Create a mergeSort function to sort the given array.
   - Split the array in half and recursively merge the halves using the previously created merge function.
   - Splitting of arrays stops when array can no longer be split.
   - An array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array.

## Quick Sort
The Idea of QuickSort
Quicksort is a fast sorting algorithm that works by splitting a large array of data into smaller sub-arrays. This implies that each iteration works by splitting the input into two components, sorting them, and then recombining them. For big datasets, the technique is highly efficient since its average and best-case complexity is `O(n*logn)`.

It is one of the most effective general-purpose sorting algorithms available today. It works by recursively sorting the sub-lists to either side of a given pivot and dynamically shifting elements inside the list around that pivot.

As a result, the quick sort method can be summarized in three steps:

- Pick: Select an element.
- Divide: Split the problem set, move smaller parts to the left of the pivot and larger items to the right.
- Repeat and combine: Repeat the steps and combine the arrays that have previously been sorted.
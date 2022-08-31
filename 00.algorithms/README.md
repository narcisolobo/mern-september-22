# Sorting Algorithms
---
## Insertion Sort

1. Consider the array as two sections. A sorted section, and an unsorted section.
   
2. Initially, the sorted section consists of only one value—the value at index 0. The unsorted section consists of all the values to the right of index 0.
3. Take the value to the right of the sorted section and store it temporarily to create an "empty slot". Consider this "empty slot" as now part of the sorted section.
4. The sorted section has now grown by one and the unsorted section has shrunk by one.
5. Move the "slot" to the appropriate position by shifting the values in the sorted section until the "slot" is placed correctly.
6. Once the "slot" is in the correct position, fill it with the stored value.
7. Repeat for all remaining indices in the unsorted section.
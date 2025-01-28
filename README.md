# Merge Sorted Array (C#)

## The Problem:

"You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
"Merge nums1 and nums2 into a single array sorted in non-decreasing order.
"The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n."

## Intuition:

There are two main tasks here: merge the arrays and sort them. The simplest way, the way that came immediately to mind, is to simply replace the zeroes in nums1[] with the values in nums2[] and then sort them afterwards.

## Approach:

I simply replaced each nums1[] value after place m with the values in nums2[], then did a bubble sort to order the values from least to greatest. The bubble sort in C# required a temporary variable.

## Complexity:

Due to the use of a bubble sort, this algorithm's Big O time complexity category is O(N^2).

## Code:

```csharp []
public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        bool sorted = false;
        for (int i = m; i < (m + n); i++) {
            nums1[i] = nums2[i - m];
        }
        while (!sorted) {
            sorted = true;
            for (int i = 0; i < (m + n - 1); i++) {
                if (nums1[i] > nums1[i + 1]) {
                    int temp = nums1[i];
                    nums1[i] = nums1[i + 1];
                    nums1[i + 1] = temp;
                    sorted = false;
                }
            }
        }
    }
}
```

## Analysis and Comparisons

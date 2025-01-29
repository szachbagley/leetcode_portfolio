# Longest Common Prefix (JavaScript, 1.28.2025)

## The Problem:
"Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string ""."

## Intuition:
While my immediate thought was that I could keep track of matching characters as I iterated through each word letter-by-letter, I then thought that the code could run faster if I checked the first letter of each word, the second letter of each word, and so on, terminating immediately as soon as a mismatch was found.

## Approach:
I stored the first word in a variable, then used a for loop inside a while loop to test each word's letter at position currentLetter against firstWord's corresponding letter. I believe this is the quickest way I could identify a mismatch.

## Complexity:
This algorithm's complexity is dependent on two independent variables: length of the strs, and length of strs[0]. Thus, it does not fall clearly into the linear or quadratic complexity categories.
the best classification is:
- O(NM) → Linear in terms of both N (number of words) and M (prefix length).
- If M is considered a constant upper bound (the LeetCode description specifies 0 <= strs[i].length <= 200), then it simplifies to O(N).


## Code:
```javascript []
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let firstWord = strs[0];
    let currentLetter = 0;
    let match = true;
    let prefix = "";
    while ((match == true) && (currentLetter < firstWord.length)) {
        for (let currentWord = 1; currentWord < strs.length; currentWord++) {
            if (currentLetter < strs[currentWord].length) {
                if (strs[currentWord][currentLetter] == firstWord[currentLetter]) {
                } else {
                    match = false;
                    break;
                }
            } else {
                match = false;
                break;
            }
        }
        if (match == true) {
            prefix = prefix + firstWord[currentLetter];
        }
        currentLetter++;
    }
    return prefix;
};
```

## Analysis and Comparison:
This code's runtime beat 100% of JavaScript submissions on LeetCode.
Another possible solution with similar runtime is this:
```javascript []
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {//strs is arr of strings
    let longest=strs[0];
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(longest)!==0){
            longest=longest.slice(0,longest.length-1);
        }
    }
    if(longest.length>0){ 
        return longest;
    } else {
        return "";
    }  
};
```
This algorithm begins by assuming that the entire first word is the longest common prefix and stores it in the variable longest. It simplifies the code by using indexOf() to test whether longest is a prefix of strs[i], and uses slice() to shorten longest until it is. It reapeats this for each string in strs.
This algorithm has the same worst-case time complexity as mine. It also uses indexOf() and slice():
- indexOf() internally performs a substring comparison, which may be optimized in some JavaScript engines but adds additional overhead.
- slice() creates new strings each time, which can increase memory usage and make the algorithm slightly slower for large inputs.

# Merge Sorted Array (C#, 1.25.2025)
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

## Analysis and Comparison
With O(N^2) time complexity, my solution ran faster than 32.24% of submitted solutions. Not very impressive.
Here is an example of a better, faster solution:
```csharp []
public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        int l = m - 1 ;
        int r = n - 1;
        int k = m + n - 1;

        while(r >= 0 && l >= 0)
        {
            if(nums2[r] > nums1[l] )
            {
                nums1[k] = nums2[r]; 
                r--;
            }
            else
            {
                nums1[k] = nums1[l];
                l--;
            }
            k--;
        }
        
        while(r >= 0){
            nums1[k] = nums2[r];
            r--;
            k--;
        }
    }
}
```
This algorithm uses variables to point towards relevant positions in the arrays. k iterates through nums1[], starting at the very end, and compares the last unsorted values from the pre-filled values of nums1[] and nums2[], using l and r to iterated through the pre-filled values of each array, starting at the end. Because these arrays are assumed to be pre-sorted, the only sorting the algorithm must do is decide which array's value to place at the k position in nums1[].
The time complexity of this algorithm is O(N), which is far preferrable to O(N^2). The better algorithm cleverly uses variables to avoid nested loops and takes advantage of the fact that each array is pre-sorted to reduce steps.
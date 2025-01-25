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
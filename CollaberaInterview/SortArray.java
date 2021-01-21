import java.util.Arrays;

public class SortArray {

    public static void main(String[] args) {

        int[] arr1 = { 23, 5, 6, 4, 10, 1 };

        // Arrays.sort(arr1);
        // System.out.println(Arrays.toString(arr1));

        // Sort with stream
        // int[] sortedArr = Arrays.stream(arr1).sorted().toArray();
        // System.out.println(Arrays.toString(sortedArr));

        // selection sort
        // System.out.println(Arrays.toString(selectionSort(arr1)));
        // bubble sort
        System.out.println(Arrays.toString(sort(arr1)));
    }

    public static int[] selectionSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int lowest = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[lowest]) {
                    lowest = j;
                }
            }
            swap(arr, i, lowest);
        }
        return arr;
    }


    public static int[] sort(int[] arr) {

        for (int i=0; i<arr.length; i++) {
            System.out.println(i);
            for (int j=i+1; j<arr.length; j++) {
                System.out.println("j " +j);
                if (arr[j] < arr[i]) {
                    swap(arr, i, j);
                }
            }
        }

        return arr;
    }



    // swap helper function
    public static void swap(int[] array, int idx1, int idx2) {

        int temp = array[idx2];
        array[idx2] = array[idx1];
        array[idx1] = temp;
    }
}
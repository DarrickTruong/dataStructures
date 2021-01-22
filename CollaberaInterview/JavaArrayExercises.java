

import java.util.Arrays;
import java.util.HashSet;
import java.util.stream.IntStream;

public class SumArray {
    public static void main(String[] args) {
        // sum();
        // sum1();
        // print();
        // avgArray();
        // System.out.println(idxValue(7));
        int[] arr = { 10, 5, 4, 3, 1 };
        int[] arr1 = { 10, 5, 4, 3, 5, 10 };
        // System.out.println(removeValue(arr, 3));
        // System.out.println(removeValue1(arr, 3));
        // copyArr(arr);
        // insertArr(arr, 1, 9);
        // insertArr1(arr, 1, 9);
        // minMax(arr);
        // reverseIntArr(arr);
        // countDuplicates(arr1);
        String[] array1 = { "Python", "JAVA", "PHP", "C#", "C++", "SQL" };
        String[] array2 = { "MySQL", "SQL", "SQLite", "Oracle", "PostgreSQL", "DB2", "JAVA" };

        commonEl(array1, array2);
        commonEl(arr, arr1);

    }

    public static void sum() {
        int[] arr = { 10, 5, 4, 3, 1 };

        IntStream stream = Arrays.stream(arr);
        // Integer sum = stream.reduce(0, (int a, int b)-> a+b);
        Integer sum1 = stream.reduce(0, Integer::sum);
        // System.out.println(sum);
        System.out.println(sum1);
    }

    public static int sum1(int[] arr) {
        // int[] arr = {10,5,4,3,1};

        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        return sum;
    }

    public static void print() {
        int[][] a = new int[10][10];
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                // System.out.printf("%2c", '-'); //will print two characters. one character
                // plus a space
                System.out.printf("%2d", a[i][j]); // will print two characters. one character plus a space
            }
            System.out.println();
        }
    }

    public static void avgArray() {
        int[] arr = { 10, 5, 4, 3, 1 };

        int sum = sum1(arr);

        double avg = (double) sum / arr.length;

        System.out.println(avg);

    }

    public static int idxValue(int value) {
        int[] arr = { 10, 5, 4, 3, 1 };

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return i;
            }
        }
        return -1;

    }

    // set value to zero
    public static boolean removeValue(int[] arr, int remove) {
        if (arr.length == 0 || arr == null) {
            return false;
        }

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == remove) {
                arr[i] = 0;
                return true;
            }
        }
        return false;

    }

    // shift values to the left to remove value
    public static boolean removeValue1(int[] arr, int remove) {
        if (arr.length == 0 || arr == null) {
            return false;
        }

        int idx = -1;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == remove) {
                idx = i;
            }
        }

        if (idx != -1) {
            for (int i = idx; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1];
            }
            System.out.println("arr " + Arrays.toString(arr));
            return true;
        }

        return false;
    }

    public static void copyArr(int[] arr) {
        int[] arr1 = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            arr1[i] = arr[i];
        }

        System.out.println(Arrays.toString(arr1));
    }

    // not efficient
    public static void insertArr(int[] arr, int idx, int add) {

        int prev = arr[idx];

        for (int i = idx + 1; i < arr.length; i++) {
            int next = arr[i];
            arr[i] = prev;
            prev = next;
        }

        arr[idx] = add;
        System.out.println(Arrays.toString(arr));
    }

    public static void insertArr1(int[] arr, int idx, int add) {
        for (int i = arr.length - 1; i > idx; i--) {
            arr[i] = arr[i - 1];
        }

        arr[idx] = add;

        System.out.println(Arrays.toString(arr));
    }

    public static void minMax(int[] arr) {
        int min = arr[0], max = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min)
                min = arr[i];
            if (arr[i] > max)
                max = arr[i];
        }

        System.out.println("min: " + min + " max: " + max);
    }

    public static void reverseIntArr(int[] arr) {

        int temp;
        for (int i = 0; i < arr.length / 2; i++) {
            temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }

        System.out.println(Arrays.toString(arr));
    }

    public static void countDuplicates(int[] arr) {
        int count = 0;

        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j] && i != j) {
                    count++;
                }
            }
        }

        System.out.println(count);
    }

    public static void commonEl(String[] arr, String[] arr1) {
        HashSet<String> set = new HashSet<String>();
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr1.length; j++) {
                if (arr[i].equals(arr1[j])) {
                    set.add(arr[i]);
                }
            }
        }

        System.out.println(set.toString());
    }

    public static void commonEl(int[] arr, int[] arr1) {
        HashSet<Integer> set = new HashSet<Integer>();
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr1.length; j++) {
                if (arr[i] == arr1[j]) {
                    set.add(arr[i]);
                }
            }
        }

        System.out.println(set.toString());
    }

    public static void removeDuplicates(int[] arr) {

    }

}

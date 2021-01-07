public class PalindromeString {
    public static void main(String[] args) {

        System.out.println(palindrome("racecar"));
        System.out.println(palindrome("level"));
        System.out.println(palindrome("roor"));

        System.out.println(palindrome2("Racecar"));
        System.out.println(palindrome2("racecar"));
        System.out.println(palindrome2("roor"));
    }

    // compare beginning and last chars
    public static boolean palindrome(String str) {

        for (int i = 0; i < str.length() / 2; i++) {
            // System.out.println(str.charAt(i));
            // System.out.println(str.charAt(str.length() - 1 - i));
            if (str.charAt(i) != str.charAt(str.length() - 1 - i)) {
                return false;
            }
        }
        return true;
    }

    // check reversed str vs original
    public static boolean palindrome2(String str) {

        String reverse = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            reverse += str.charAt(i);
        }
        if (str.equals(reverse)) {
            return true;
        } else {
            return false;
        }
    }
}

import java.util.HashMap;
import java.util.Set;

public class StrongPassword {
    public static void main(String[] args) {

        System.out.println(strongPassword("Hello"));

    }

    public static String strongPassword(String password) {
        int count = 0;

        // if length is too short, add to count
        if (password.length() < 6) {
            count = 6 - password.length();
        }

        String numbers = "0123456789";
        String lower_case = "abcdefghijklmnopqrstuvwxyz";
        String upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String special_characters = "!@#$%^&*()-+";

        HashMap<Character, Boolean> map = new HashMap<>();
        map.put('n', false);
        map.put('l', false);
        map.put('u', false);
        map.put('s', false);

        // set character type to true in map
        for (int i = 0; i < password.length(); i++) {
            // System.out.println(password.substring(i, i+1));
            if (numbers.contains(password.substring(i, i + 1))) {
                map.replace('n', true);
            } else if (lower_case.contains(password.substring(i, i + 1))) {
                map.replace('l', true);
            } else if (upper_case.contains(password.substring(i, i + 1))) {
                map.replace('u', true);
            } else if (special_characters.contains(password.substring(i, i + 1))) {
                map.replace('s', true);
            }
        }

        // if false, add to count
        Set<Character> set = map.keySet();
        for (char s : set) {
            // System.out.println(s + " " + map.get(s));
            if (map.get(s) == false) {
                count++;
            }
        }
        if (count == 0) {
            return "Strong Password";
        } else {
            return "Password requires " + count + " character(s) to make a strong password";
        }
    }

    // Louise joined a social networking site to stay in touch with her friends. The
    // signup page required her to input a name and a password. However, the
    // password must be strong. The website considers a password to be strong if it
    // satisfies the following criteria:
    // Its length is at least .
    // It contains at least one digit.
    // It contains at least one lowercase English character.
    // It contains at least one uppercase English character.
    // It contains at least one special character. The special characters are:
    // !@#$%^&*()-+
    // She typed a random string of length in the password field but wasn't sure if
    // it was strong. Given the string she typed, can you find the minimum number of
    // characters she must add to make her password strong?

    static int minimumNumber(int n, String password) {
        // Return the minimum number of characters to make the password strong
        int count = 0;

        // check for lowercase
        if (!password.matches(".*[a-z].*")) {
            count++;
        }

        // check for uppercase
        if (!password.matches(".*[A-Z].*")) {
            count++;
        }

        // check for number
        if (!password.matches(".*[0-9].*")) {
            count++;
        }

        // check for special character
        if (password.matches(".[a-zA-Z0-9]*")) {
            count++;
        }

        int len = 6 - password.length();
        if (password.length() < 6 && count <= len) {
            return len;
        }
        ;

        return count;
    }
}


class ReverseInteger {

    public static void main(String[] args) {
        System.out.println(reverse(2147483647));
    }

    public static int reverse(int number) {

       
        String stringNum = Integer.toString(number);
        char[] stringArr = stringNum.toCharArray();

        for (int i=0, j=stringArr.length-1; i < stringArr.length/2; i++, j--) {
            swap(stringArr, i, j);
        }
        StringBuilder reverseString  = new StringBuilder();

        for (char c:stringArr) {
            reverseString.append(c);
        }
        stringNum = reverseString.toString();
        long answer = Long.parseLong(stringNum);
        
        byte max = 4;
        byte answer1 = (byte) answer;

        System.out.println(answer1);

        if ((byte)answer > max) {
            return 0;
        }

        return 1;

    }

    public static void swap(char[] s, int front, int back) {
        char temp = s[front];
        s[front] = s[back];
        s[back] = temp;
    }


}
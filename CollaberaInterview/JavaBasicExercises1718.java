public class JavaBasicExercises1718 {
    public static void seventeen() {

        long binary1, binary2;
        int i = 0, remainder = 0;

        int[] sum = new int[20];

        Scanner sc = new Scanner(System.in);
        System.out.println("Input first binary:");
        binary1 = sc.nextLong();
        System.out.println("Input second binary:");
        binary2 = sc.nextLong();

        while (binary1 != 0 || binary2 != 0) {
            sum[i++] = (int) ((binary1 % 10 + binary2 % 10 + remainder) % 2); // 1+1 = 0 with remainder 1
            remainder = (int) ((binary1 % 10 + binary2 % 10 + remainder) / 2); // get remainder, if 1+1, remainder is 1
            binary1 = binary1 / 10;
            binary2 = binary2 / 10;
        }
        if (remainder != 0) {
            sum[i++] = remainder;
        }

        --i;
        System.out.print("Sum of two binary numbers: ");
        while (i >= 0) {
            System.out.print(sum[i--]);
        }

    }

    public static void eighteen() {
        long binary1, binary2;

        Scanner sc = new Scanner(System.in);
        System.out.println("first binary: ");
        binary1 = sc.nextLong();
        System.out.println("second binary: ");
        binary2 = sc.nextLong();
        System.out.println("binary product = " + (binary1 * binary2));

    }
}

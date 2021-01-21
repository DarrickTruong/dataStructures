public class SwapValues {
    public static void main(String[] args) {
        swap(3,10);
    }

    public static void swap(int a, int b) {
        a = b+a;
        b = a-b;
        a = a-b; 
        System.out.println(a);
        System.out.println(b);
    }
}

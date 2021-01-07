public class LengthLastWordString {
    public static void main(String[] args) {
       System.out.println(lastWord("hello, my buddy"));
		System.out.println(lastWord("hello, Cornelius"));
		System.out.println(lastWord("hello, my friendo"));
	}
	
	public static int lastWord(String str) {
		String[] arr = str.split(" ");
		int length = arr[arr.length-1].length();
		
		return length;
	}
}
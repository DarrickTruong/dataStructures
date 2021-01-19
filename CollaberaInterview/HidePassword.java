public class HidePassword {
	
	public static void main(String[] args) {
		
		System.out.println(hide("123456"));
		System.out.println(hide(123456));
	}
	
	public static StringBuilder hide(String str) {
		StringBuilder password = new StringBuilder();
		
		for (int i = 0; i<str.length()-2; i++) {
			password.append("*");
		}
		
		password.append(str.charAt(str.length()-1));
		
		return password;
		
	}
	
	public static StringBuilder hide(int password) {
		String p = Integer.toString(password);
		
		return hide(p);
	}

}
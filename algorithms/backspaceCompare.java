

import java.util.ArrayList;

public class BackspaceStringCompare {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String S = "ab#c";
		String T = "ad#c";
		System.out.println(backspaceString(S, T));
		
		String S1 = "ab##";
		String T1 = "#a#c";
		System.out.println(backspaceString(S1, T1));
		
//		String S = "ab#c";
//		String T = "ad#c";
//		System.out.println(backspaceString(S, T));
//		
//		String S = "ab#c";
//		String T = "ad#c";
//		System.out.println(backspaceString(S, T));

	}
	
	public static boolean backspaceString(String s, String t) {
		
		ArrayList<Character> sArr = new ArrayList<Character>();
		ArrayList<Character> tArr = new ArrayList<Character>();
		
		for (int i = 0; i < s.length(); i++) {
			if (s.charAt(i) != '#') {
				sArr.add(s.charAt(i));		
			} else if (s.charAt(i) == '#' && sArr.size() >= 1) {
				sArr.remove(sArr.size()-1);
			} else {
				continue;
			}
		}
		
		for (int j = 0; j < t.length(); j++) {
			if (t.charAt(j) != '#') {
				tArr.add(t.charAt(j));		
			} else if (t.charAt(j) == '#' && tArr.size()>=1) {
				tArr.remove(tArr.size()-1);
			} else {
				continue;
			}
		}
		
		s = sArr.toString();
		t = tArr.toString();
		
		if (s.equals(t)) {
			return true;
		}
		return false;
		
		
	}

}

public class WaysToTraverseSteps {
	
	public static void main(String[] args) {
		System.out.println(traverseRecur(6));
		System.out.println(traverseDynam(10));
	}
	
	public static int traverseRecur(int meters) {
		
		if (meters < 0) {
			return 0;
		} 
		
		if (meters == 0) {
			return 1;
		}
		
		return traverseRecur(meters-1) + traverseRecur(meters-2); 
	}
	
	public static int traverseDynam(int meters) {
		
		int[] arr = new int[meters+1];
		
		arr[0] = 1;
		arr[1] = 1;
		arr[2] = 2;
		arr[3] = 4;
		arr[4] = 8;
		
		for (int i = 5; i<arr.length; i++) {
			arr[i] = arr[i-1] + arr[i-2] + arr[i-3] + arr[i-4] + arr[i-5];
		}

		
		return arr[meters];
	}
	
	
	

}

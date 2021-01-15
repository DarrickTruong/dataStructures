import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class SortHashMap {
    public static void main(String[] args) {

        // 1. Created an array list of the map.entry<> from the hash map
        // 2. Sort the array list with collections.sort(array list, new comparator)
        // 3. Implement compare
        // 4. Create hash map with sorted array list map.entry
        HashMap<String, Integer> map = new HashMap<String, Integer>();

        map.put("hello", 3);
        map.put("cat", 2);
        map.put("yolo", 1);

        ArrayList<Map.Entry<String, Integer>> arr = new ArrayList<Map.Entry<String, Integer>>(map.entrySet());

        Collections.sort(arr, new Comparator<Map.Entry<String, Integer>>() {
            public int compare(Map.Entry<String, Integer> e1, Map.Entry<String, Integer> e2) {

                return (e1.getValue()).compareTo(e2.getValue());
            }
        });

        HashMap<String, Integer> newMap = new HashMap<String, Integer>();
        for (Map.Entry<String, Integer> entry : arr) {

            newMap.put(entry.getKey(), entry.getValue());
        }

        System.out.println(newMap);

    }

    public static void sortHashMapStream() {
        HashMap<String, Integer> map = new HashMap<String, Integer>();

        map.put("hello", 3);
        map.put("cat", 2);
        map.put("yolo", 1);

        map.entrySet().stream().sorted(Map.Entry.comparingByValue()).collect(Collectors.toMap(Map.Entry::getKey,
                Map.Entry::getValue, (oldValue, newValue) -> oldValue, HashMap::new));

        System.out.println(map);
    }
}

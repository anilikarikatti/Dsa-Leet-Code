public class ArraySortedOrNot {
    public static void main(String[] args) {
        int[] arr = {1 , 2 ,9, 8, 9,14};

        boolean res = isSorted(arr , 0);

        System.out.println( "the array is sorted " + res);
    }

    public static boolean isSorted(int[] arr , int ind){
        if(ind == arr.length -1 ){
            return true;
        }

        if(arr[ind] < arr[ind+1]){
            return isSorted(arr, ind+1);
        }

        return false;
    }
}

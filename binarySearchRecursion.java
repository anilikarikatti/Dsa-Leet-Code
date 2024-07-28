import java.util.Arrays;

public class binarySearchRecursion {
    public static void main(String[] args) {
        int [] arr = {1,4,6,12,34,56,78,89};
        int target = 7889;
      int index =   binary(arr, target , 0 , arr.length-1);

      System.out.println(index);

    }

    public static int binary(int[] arr , int target , int start , int end){

        if(end <= start){
            if(arr[start] == target){
                  return start; 
            }
           return -1;

        }


        int mid = start + (end - start) / 2;


         if(arr[mid] == target){
            return mid;
        }



        if(arr[mid] > target){
            return binary(arr, target, start, mid-1);
        }

        if(arr[mid] < target){
            return binary(arr, target, mid+1, end);
        }
        
        return -1;
       
      
    }
}

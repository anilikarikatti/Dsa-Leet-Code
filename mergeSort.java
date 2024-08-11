import java.util.Arrays;

public class mergeSort {
    public static void main(String[] args) {
        int[] arr = {10,20,3,45,8};

        int[] sortedArray = divide(arr);
        
        System.out.println(Arrays.toString(sortedArray) +  " sorted");


    }

    public static int[] divide(int[] arr){




      if(arr.length <= 1){
        return arr;
      }

      int mid = arr.length / 2;

      int[] left  = divide(Arrays.copyOfRange(arr, 0, mid));
      int[] right  = divide(Arrays.copyOfRange(arr, mid, arr.length));

    //   System.out.println(Arrays.toString(left) + ""+ Arrays.toString(right));

      int[] newArr =  conqure(left,right);
      


      return newArr;
        
    }

    public static int[] conqure(int[] left , int[] right){


        int[] mix = new int[left.length + right.length];

        int i = 0 ;
        int j = 0 ; 
        int k = 0;

        while (i < left.length && j < right.length) {

            if(left[i] < right[j]){
                mix[k] = left[i];
                i++;
            }else{
                mix[k] = right[j];
                j++;
            }

            k++;
        }

        while (i < left.length) {
            mix[k] = left[i];
            i++;
            k++;
        }

        while (j < right.length) {
            mix[k] = right[j];
            j++;
            k++;
        }
        
        // System.out.println(Arrays.toString(mix) + " mix");


        return mix;
    }
}

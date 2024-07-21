import java.util.ArrayList;

class BinarySearch {
        public static void main(String[] args) {
            ArrayList<Integer> arr = new ArrayList<>();
            arr.add(10);
            arr.add(20);
            arr.add(30);
            arr.add(40);
            arr.add(50);
            arr.add(60);

           int index =  binarySearch(arr, 60);
           System.out.println(index);

        }

        public static int binarySearch(ArrayList <Integer> arr , int element){
            if(arr.size() < 1){
                return 0;
            }

            

            int midElement = arr.size() / 2 ;
            midElement -= 1;
            if(arr.get(midElement).equals(element)){
                return midElement;
            }

               

            // if(arr.get(midElement) > element){
                ArrayList<Integer> a = new ArrayList<>();
                for(int i = midElement ; i< arr.size() ; i++){
                    a.add(arr.get(i));
                }
                return binarySearch(a, midElement);

            // }

            // System.out.println(arr.size());
            // return 1;

            
            //     ArrayList<Integer> a = new ArrayList<>();
            //     for(int i = 0 ; i< midElement ; i++){
            //         a.add(arr.get(i));
            //     }
            //  return binarySearch(a, midElement);


        }
}

public class reverseNumber {


    public static void main(String[] args) {
        
        int num = 1234;
        String rev = reverseNum(num);

        System.out.println(rev);

    }

    public static String reverseNum(int num){

        if(num < 10){
            return num + "";
        }

        return  (num % 10 ) + reverseNum(num / 10)  ;

    }
    
}

public class sumOfDigits {
    public static void main(String[] args) {
        int num = 99;
        int sum = digitsSum(num);

        System.out.println(sum);

    }

    public static int digitsSum(int num) {
        if(num < 10){
            return num;
        }

        int rem = digitsSum(num / 10);
        return rem += num % 10;
    }
}

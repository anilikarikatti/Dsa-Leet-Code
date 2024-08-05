class Fiabbionacci {
    public static void main(String[] args) {
        
        // 0 , 1, 1 , 2, 3, 5 ,8, 12 
        
        int num = fib(4);

        System.out.println(num);

    }

    static int fib(int n ){
        // System.out.println(iterations );
        
        if(n < 2){
            return n;
        }
        
        return fib(n-1 ) + fib(n-2);

    }
}
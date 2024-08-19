public class printPatten {

    public static void main(String[] args) {
        int n=10;
        printPatt(n , 0);
    }

    public static void printPatt(int n , int sp){
        if(n <= 0){
            return ;
        }
        String space = " ".repeat(sp);
        String a= "* ".repeat(n);

        System.out.println(space + a);

        printPatt(n - 1 , sp + 1);
    }
}
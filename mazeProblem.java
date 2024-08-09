public class mazeProblem {
    
    public static void main(String[] args) {
        
        int initialRow = 0 ;
        int initialColumn = 0 ;
        int sizeArray = 1;

        int possibleRoutes = maze(initialRow, initialColumn , sizeArray);

          printPath("" , initialRow, initialColumn );


        System.out.println("possible ways " + possibleRoutes);

    }

    public static int  maze(int row , int column , int sizeArray){
        
        if(row == sizeArray || column == sizeArray ){
            return 1;
        }

        return maze(row + 1, column, sizeArray) + maze(row, column+1, sizeArray);
        
    }

    public static void printPath(String p , int row , int column ){
        if(row == 2 && column == 2){
            System.out.println(p);
            return;
        }

        if(row < 2){
            printPath(p + "D" ,  row + 1, column) ;

        }

        if(column < 2){
            printPath(p + "R" ,  row , column + 1);


        }
    }
}

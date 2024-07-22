import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class backtracking {
    public static void main(String[] args) {


        boolean[][] maze = {{ true , true , true , true } ,
                            { true , true , true , true } , 
                            { true , true , true , true } ,
                            { true , true , true  , true} , 

                            
        };
        System.out.println(maze.length - 1  );

        ArrayList<String> paths = new ArrayList<>();

        BackTrack("" ,0, 0 , maze , paths);

       

       int  minLength = paths.stream()
                            .mapToInt(word -> word.length())
                            .min()
                            .orElse(0);

    

    for (String path : paths) {

        if(path.length() == minLength){
            System.out.println(path);

        }
    
   }}

    public static void BackTrack(String path , int row , int col , boolean[][] maze, ArrayList paths){

        if(row == maze.length - 1  &&  col ==  maze[0].length -1 ){
            // System.out.println(path);
            paths.add(path);
            return ;
        }

        if(maze[row][col] == false){
            return;
        }
        maze[row][col] = false;
        
        if(row < maze.length -1 ){

            BackTrack(path+"D" , row + 1, col , maze , paths)  ;

        }

        if(col < maze[0].length -1 ){
            BackTrack(path+"R",row, col + 1 , maze , paths);

        }

        if(row > 0 ){
            BackTrack(path+"U" , row - 1, col , maze , paths)  ;

        }

        if(col > 0) {
            BackTrack(path+"L",row, col - 1 , maze , paths);

        }


        maze[row][col] = true;

        return ;


       

        
    }
}

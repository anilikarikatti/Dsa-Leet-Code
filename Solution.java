public class Solution {
    public int maxArea(int[] heights) {
        System.out.println(Arrays.toString(heights));

        int maxArea = 0;

        for(int i = 0 ; i < heights.length - 1 ; i++){
            
            for(int j = i+1 ; j < heights.length ; j++){

              int width = j - i ; 
              int min = Math.min(heights[i] , heights[j]);

              int waterCount = min * width ;

              if(maxArea < waterCount){
                maxArea= waterCount;
              }

        } 
        }
        return maxArea ;
        
    }

}
 {
    
}

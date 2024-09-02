// as per online Accepted 

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
    
    
    
    List<List<Integer>> allList = new ArrayList();

       for(int i= 0 ; i< nums.length -2 ; i++){
        for(int j = i+ 1 ; j <nums.length - 1 ; j++ ){
            for(int k = j + 1 ; k < nums.length   ; k++ ){
                // System.out.println(nums[i] + " " + nums[j] + " " + nums[k]);
                
                boolean exists = false;
                if(nums[i] + nums[j] + nums[k] == 0 ){
                    List<Integer> list = new ArrayList();
                    list.add(nums[i]);
                    list.add(nums[j]);
                    list.add(nums[k]);
                    
                    for(int n = 0 ; n< allList.size() ; n++){
                        
                        
                        
                         int a = allList.get(n).get(0);
                         int b = allList.get(n).get(1);
                         int c = allList.get(n).get(2);

                            System.out.println(a + " "+ b  + " " + c  + "already exists");


                          if((a == nums[i ]|| a == nums[j ]|| a==nums[ k]) && (b == nums[i] || b == nums[j] || b== nums[k]) && (c == nums[i] || c == nums[j] || c== nums[k]) ){

                            exists = true;
                            System.out.println(allList.get(n) + "already exists");
                            
                         }
                    
                       
                        
                    }

                       
                       if(!exists){
                         allList.add(list);
                       }
                }
            }
        }
       }

       return allList;
    }
}

// 

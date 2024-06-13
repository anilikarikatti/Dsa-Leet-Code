class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        function boxCheck(){

            let boxes = {};

            for(let i = 0 ; i< board.length ; i++){
                for(let j = 0 ; j < board[i].length ; j++){
                   
                    let boxName = `${Math.floor(i / 3)} - ${Math.floor(j / 3)}`

                    if(!boxes[boxName]){
                        boxes[boxName] = [board[i][j]]
                    } else{
                        if(boxes[boxName].includes(board[i][j] ) && board[i][j] != "."){
                             console.log(boxes[boxName].includes(board[i][j]),board[i][j] )
                            return false
                        }
                       
                        boxes[boxName] = [...boxes[boxName] , board[i][j]]
                    }


                }
            }
            // console.log(boxes)

            return true

        }

        // row 
        for(let i = 0 ; i< board.length ; i++){
                for(let j = 0 ; j < board[i].length ; j++){
                    let findElem =   board[i].lastIndexOf(board[i][j]);
                    
                    if(findElem != j &&  board[i][j] != "." ){
                        return false
                    }
                }
        }

         for(let i = 0 ; i< board.length ; i++){
            let arr = []
                for(let j = 0 ; j < board[i].length ; j++){
            
                    
                    if(  board[j][i] != "."  && arr.includes(board[j][i])){
                       return false
                    }else{
                         arr.push(board[j][i])
                    }
                }
        }

        // column 


        let output = boxCheck()

        console.log(output)
        
        if(output == false){
            return false
        }
        return true
    }
}

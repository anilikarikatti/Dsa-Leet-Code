class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let incCount = 30;
        let encodedArray = []

        for(let elem of strs){
            let encodedElement = "";
            for(let i in elem){
                let val = elem.charCodeAt(i);
                let char = String.fromCharCode(val+incCount);
                encodedElement+=char;

            }
            encodedArray.push(encodedElement)
        }
        return encodedArray

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
          let incCount = 30;
         let decodedArray = []

        for(let elem of str){
            let decodedElement = "";
             for(let i in elem){
                let val = elem.charCodeAt(i);
                let char = String.fromCharCode(val-incCount);
                decodedElement+=char;

            }
            decodedArray.push(decodedElement)
        }
        return decodedArray
    }
}

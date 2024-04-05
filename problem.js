
function returnData(data){

    let output = []
    for(let i=0;i<data.length;i++){
        let flag = true;
        for(let j=i+1;j<data.length;j++){
            if(data[i].name == data[j].name){
                if(data[i].value && data[j].value){
                    output.push({...data[j],mode:"Both"} );
                    flag = false;
                    break;

                }else if(!data[i].value && !data[j].value ){
                    output.push({...data[j],mode:"None"} );
                    flag = false;

                    break

                }
                else if(data[i].value && !data[j].value){
                    output.push({...data[i]} );
                    flag = false;

                    break

                }
                else if(!data[i].value && data[j].value){
                    output.push({...data[j]} );
                    flag = false;

                    break

                }
            }
           

        }   
        if(flag){
            let f=  true;

            for(let a of output){
                if(a.name == data[i].name){
                    f=false;
                }
            }
            if(f)
                output.push({...data[i]})
        }
        

    }

    return output;
    

}


let data = [{name:"B",value:false,mode:"email"},{name:"A",value:true,mode:"phone"},{name:"A",value:false,mode:"email"}]


let resp = returnData(data);

console.log(resp);
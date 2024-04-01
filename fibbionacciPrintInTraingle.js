

let series = [0,1];

let  n = 4; 

let track = 2;

for(let i = 0 ; i < n ; i++){
    let values= "";
    for(let j = 0 ; j <= i ; j++){
        series[track] = series[track-1] + series[track-2];

        values += series[track-2] + " "; 
        
        track++;
    }   
    console.log(values);
}

// console.log(series);
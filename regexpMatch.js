var isMatch = function(s, p) {
    
    let regExp="";
    if(p.includes("**")){
        
        let elem = p.replace("**","");
        // console.log(elem,"elem")
        regExp = new RegExp(elem)

    }else{
        regExp = new RegExp(p);

    }

    
    console.log(regExp)
    let value = s.match(regExp)
    console.log(value?.[0])
    return value?.[0] == s
};
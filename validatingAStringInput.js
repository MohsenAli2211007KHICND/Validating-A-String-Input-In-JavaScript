function alphanumeric(string){
    if(string.length===0 
       || string.includes("_") 
       || string.includes(" ") 
       || string.includes("!") 
       || string.includes("\n")
       || string.includes("&")
       || string.includes(")")
       || string.includes("(")
      ){
        return false;
    }
    return true;
 
}

let response =alphanumeric("\t");

console.log(response+"\n\t");
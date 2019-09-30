module.exports = function check(str, bracketsConfig) {
   // your solution

    let stack = [];
    
    let array = str.split('');

    for(let i = 0; i<array.length; i++ ){
        
        if(array[i] == '|'){
            
            array[i] = '0';
        }
    }
    
    let k = 0; 
        
        
            
    for(let i = 0 ; i < array.length; i++) {
    
        for(let j = 0; j < bracketsConfig.length; j++) {
                
            if(array[i] == bracketsConfig[j][0]){
                    
                stack.push(array[i]);
                    
                k++;
            }
                
            else if(array[i] == bracketsConfig[j][1] && stack[k-1] == bracketsConfig[j][0]){
            
                stack.pop();
        
                k--;
            }
        }
    }
    
    console.log('stack ' + stack);
    
    if(stack.length == 0){
        return true;
    }
    else {
        return false;
    }
}

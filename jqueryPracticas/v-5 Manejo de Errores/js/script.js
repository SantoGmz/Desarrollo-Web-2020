$.when( $.ready, $.getScript("js/index.js")).then(funtion(){
    console.log("Ok");
    
}).catch(function(){
    console.log("hubo un error");
})
Formstack.Form.prototype.initGybFields = function(){
    $("#gyb-go-button").click($.proxy(function(e){
         e.preventDefault(); 
         this.nextPage();
     
 }, Formstack.Form));
   
}

Formstack.Form.prototype.initGybFields();
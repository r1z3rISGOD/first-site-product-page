(function(){
    
    const controlls = document.querySelectorAll(".sizebtn__order");
    const activeClass = "sizebtn--active";
    
    controlls.forEach(function(control){
        control.addEventListener("click", function(e) {
            e.preventDefault();
            
    
            controlls.forEach(function(link) {
                link.closest(".sizebtn__order").classList.remove(activeClass);
            });
    
            control.closest(".sizebtn__order").classList.add(activeClass);
        });
    });
    }());
    (function(){
    
        const controlls = document.querySelectorAll(".border__colors-circle");
        
        controlls.forEach(function(control){
            control.addEventListener("click", function(e) {
                e.preventDefault();
            });
        });
        }());



    (function(){
    
        const controlls = document.querySelectorAll(".color__circles");
        const activeClass = "border__colors-circle-active";
        
        controlls.forEach(function(control){
            control.addEventListener("click", function(e) {
                e.preventDefault();
                
        
                controlls.forEach(function(link) {
                    link.closest(".color__circles").classList.remove(activeClass);
                });
        
                control.closest(".color__circles").classList.add(activeClass);
            });
        });
        }());

            (function(){
    
        const controlls = document.querySelectorAll(".color__circles");
        const activeClass = "border__colors-circle-active";
        
        controlls.forEach(function(control){
            control.addEventListener("click", function(e) {
                e.preventDefault();
                
        
                controlls.forEach(function(link) {
                    link.closest(".color__circles").classList.remove(activeClass);
                });
        
                control.closest(".color__circles").classList.add(activeClass);
            });
        });
        }());
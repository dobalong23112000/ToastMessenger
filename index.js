let maintoast=document.querySelector("#toast");
let btnSuccess=document.querySelector(".btn-success");
let btnError=document.querySelector(".btn-error");
console.log(maintoast);

function toast({
    title="",
    mess="",
    type="success",
    duration,

}) { 
    if(maintoast) {
        
        const Createtoast=document.createElement("div");
        // auto remove
        const autoRemove=setTimeout(function(){
            maintoast.removeChild(Createtoast);
                },duration + 1000)
        //remove when clicked
        Createtoast.onclick=function(e) {
            if(e.target.closest('.toast__close')) {
                maintoast.removeChild(Createtoast);
                clearTimeout(autoRemove);
            }
        }
        Createtoast.classList.add("toast",`toast--${type}`);
        const icons={
            success:"fas fa-check-circle",
            error:"fas fa-times-circle",
            info:"fas fa-info-circle",
            warning:"fas fa-exclamation-circle"
        }
        const delay= duration / 1000;
        Createtoast.style.animation=`slideLeftin ease-in-out 1s, fadeOut linear 1s ${delay}s forwards`;
        Createtoast.innerHTML=`
        <div class="toast__icon"><i class="${icons[type]}"></i></div>
        <div class="toast__body">
            <h3 class="toast__header">${title}</h3>
            <p class="toast__content">${mess}</p>
        </div>
        <div class="toast__close"><i class="fas fa-times"></i></div>`;
        maintoast.appendChild(Createtoast);
        
        };
        

};





btnSuccess.onclick=function() {
    toast({
        title:"Success",
        mess:"Anyone with access can view your invited visitors",
        type:"success",
        duration:5000,
    
    })

}
btnError.onclick=function() {
    toast({
        title:"Error",
        mess:"Anyone with access can view your invited visitors",
        type:"error",
        duration:5000,
    
    })
}


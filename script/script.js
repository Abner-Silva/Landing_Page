
let bar = document.getElementById("navMid")


function teste(){


    if(bar.getAttribute("id") === "navMid"){
        bar.setAttribute("id","navMid-active")
    }else{
        bar.setAttribute("id","navMid")
    }
}
function show(){
    element = document.getElementById("navigation")
    if(element.classList.contains("active")){
        element.classList.remove("active")
        return
    }
    element.classList.add("active")
}
function show(){
    target = document.getElementById("hamburger-layout")
    element = document.getElementById("navigation")
    if(element.classList.contains("active")){
        element.classList.remove("active")
        target.classList.remove("burger-active")
        return
    }
    target.classList.add("burger-active")
    element.classList.add("active")
}
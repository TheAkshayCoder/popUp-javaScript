const open=document.getElementById("open")
const close=document.getElementById("close")

const container=document.getElementById("container")


open.addEventListener("click",()=>{
    container.classList.add("active")
    open.classList.add("hide")
})

close.addEventListener("click",()=>{
    container.classList.remove("active")
    open.classList.remove("hide")
})

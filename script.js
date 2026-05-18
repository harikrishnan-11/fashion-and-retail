    //toggle
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Hero section

    let hero=document.querySelector(".hero")
    let image=["./src/home.webp","./src/home1.png"]
    let clslist=document.querySelectorAll(".hero-content")
    let index=0

    setInterval(()=>{
        index++
        if(index>=image.length){
            index=0
        }
        hero.style.backgroundImage=`url(${image[index]})`

       
    clslist.forEach((item) => {
        item.classList.remove("active")
    })

    clslist[index].classList.add("active")

    },3000)


let arrow1  


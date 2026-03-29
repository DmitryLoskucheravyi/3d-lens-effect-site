document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;

        
        
        `
    })
})


const btn = document.querySelector("[data-btn]")
let i = 0;
let pressTimer = null
btn.textContent = `click count ${i}`


btn.addEventListener("click", (e) => {


     if (e.ctrlKey) {
        i = 0;
        btn.textContent = `click count ${i}`;
        return; // вихід з функції
    }
    btn.textContent = `click count ${++i}`

})

btn.addEventListener("touchstart", () => {
    pressTimer = setTimeout(() => {
        i = 0
        btn.textContent = `click count ${i}`
    }, 2000)
})

btn.addEventListener("touchend", () => {
    clearTimeout(pressTimer)
})

btn.addEventListener("touchmove", () => {
    clearTimeout(pressTimer)
})
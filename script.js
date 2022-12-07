
// Kommentiere hier
const svg = document.querySelector("#svg-field")

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Kommentiere hier    
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    // Kommentiere hier
    dot.setAttribute("cx", Math.random())
    dot.setAttribute("cy", Math.random())
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Kommentiere hier
    svg.appendChild(dot)

    // Kommentiere hier
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}
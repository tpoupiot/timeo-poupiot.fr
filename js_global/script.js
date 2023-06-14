document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.querySelector("#arrow_compass")
    const circle = document.querySelector(".circle")
    const pointer = document.querySelector(".pointer")
    const canHover = document.querySelectorAll(".canHover")

    const menuIsHover = () => {
        canHover.forEach((element) => {
            element.addEventListener("mousedown", () => {
                circle.style.width = "80px"
                circle.style.height = "80px"
            })
            element.addEventListener("mouseup", () => {
                circle.style.width = "100px"
                circle.style.height = "100px"
            })
            element.addEventListener("mouseover", () => {
                circle.style.width = "100px"
                circle.style.height = "100px"
            })
            element.addEventListener("mouseleave", () => {
                circle.style.width = "25px"
                circle.style.height = "25px"
            })
        })
    }
    const elPos = element => {
        return { clientX: element.offsetLeft, clientY: element.offsetTop }
    }
    menuIsHover()

    document.addEventListener("mousemove", (e) => {
        const mouse_x = e.clientX + scrollX
        const mouse_y = e.clientY + scrollY
        circle.style.transform = `translate3d(${mouse_x}px, ${mouse_y}px, 0)`
        pointer.style.transform = `translate3d(${mouse_x}px, ${mouse_y}px, 0)`
    });
    if (arrow != null) {
        document.addEventListener("mousemove", (e) => {
            const mouse_x = e.clientX + scrollX
            const mouse_y = e.clientY + scrollY
            const arrowBox = arrow.getBoundingClientRect()
            const xCenter = (arrowBox.left + arrowBox.right)/2
            const yCenter = (arrowBox.top + arrowBox.bottom) / 2 + scrollY
            const angle = Math.atan2(mouse_y - yCenter, mouse_x - xCenter)
            arrow.style.transform = `translate(-50%, -50%) rotate(${angle}rad) rotate(180deg)`
        })
    }
})


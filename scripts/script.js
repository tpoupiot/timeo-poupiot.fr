document.addEventListener("DOMContentLoaded", () => {
    const cont = document.getElementsByClassName("separator_item")
    const circle = document.querySelector(".circle")
    const pointer = document.querySelector(".pointer")
    const canHover = document.querySelectorAll(".canHover")
    const homeSection = document.querySelector(".home-section")

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
        let mouse_x = e.clientX + scrollX
        let mouse_y = e.clientY + scrollY
        if (homeSection.style.display !== 'none') {
            for (let element of cont) {
                let elem_x = elPos(element).clientX
                let elem_y = elPos(element).clientY
                const angle = Math.atan2(mouse_y - elem_y, mouse_x - elem_x)
                element.style.transform = `rotate(${angle}rad)`
            }
        }

        circle.style.transform = `translate3d(${mouse_x}px, ${mouse_y}px, 0)`
        pointer.style.transform = `translate3d(${mouse_x}px, ${mouse_y}px, 0)`
    })
})


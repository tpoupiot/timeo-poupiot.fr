const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

document.addEventListener("DOMContentLoaded", () => {
    const home = document.querySelector(".home")
    const competences = document.querySelector(".competences")
    const interest = document.querySelector(".interest")
    const contact = document.querySelector(".contact")
    const colorFont = document.querySelector(':root')

    const sectionHome = document.querySelector(".home-section")
    const sectionComp = document.querySelector(".competence-section")
    const sectionInteret = document.querySelector(".interet-section")
    const sectionContact = document.querySelector(".contact-section")

    home.addEventListener("click", async () => {
        await wait(100).then(() => {
            sectionHome.style.display = "block"
            sectionComp.style.display = "none"
            sectionInteret.style.display = "none"
            sectionContact.style.display = "none"
            colorFont.style.setProperty('--color-font', '#fff')
        })
    })

    competences.addEventListener("click", async () => {
        await wait(100).then(() => {
            sectionHome.style.display = "none"
            sectionComp.style.display = "block"
            sectionInteret.style.display = "none"
            sectionContact.style.display = "none"
            colorFont.style.setProperty('--color-font', '#1e1e1e')
        })
    })

    interest.addEventListener("click", async () => {
        await wait(100).then(() => {
            sectionHome.style.display = "none"
            sectionComp.style.display = "none"
            sectionInteret.style.display = "block"
            sectionContact.style.display = "none"
            colorFont.style.setProperty('--color-font', '#1e1e1e')
        })
    })

    contact.addEventListener("click", async () => {
        await wait(100).then(() => {
            sectionHome.style.display = "none"
            sectionComp.style.display = "none"
            sectionInteret.style.display = "none"
            sectionContact.style.display = "block"
            colorFont.style.setProperty('--color-font', '#1e1e1e')
        })
    })
})
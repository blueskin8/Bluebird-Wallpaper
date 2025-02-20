import * as config from "../settings.js"
import checkConfig from "./checkConfig.js"

const pickupRandomImage = (images) => {
    const image = images[Math.floor(Math.random() * images.length)]
    return image
}

const update = () => {
    if (config.settings.overlay.show_date || config.settings.overlay.show_time) {
        const date = new Date()

    }
}

const init = () => {

    if (checkConfig(config)) return

    // Init body size
    document.body.style.width = config.settings.screens.width * config.settings.screens.number_of_screens + "px"
    document.body.style.height = config.settings.screens.height + "px"

    // Init background divs and images
    const images = config.wallpapers.images.map(img => "./images/" + img)
    const image = config.wallpapers.default != "random"
        ? "./images/" + config.wallpapers.default
        : pickupRandomImage(images)
    if (!config.settings.extend_wallpaper) {
        for (let i = 0; i < config.settings.screens.number_of_screens; i++) {
            const image_element = document.createElement("div")
            image_element.style.background = `url(${image}) no-repeat`
            image_element.setAttribute("id", "bg" + (i + 1))
            image_element.style.width = (config.settings.screens.width + "px")
            image_element.style.height = config.settings.screens.height + "px"
            document.querySelector("#bg").appendChild(image_element)
        }
    } else {
        const image_element = document.createElement("div")
        image_element.style.backgroundImage = `url(${image})`
        image_element.style.backgroundSize = "cover"
        image_element.style.backgroundRepeat = "no-repeat"
        image_element.style.backgroundPosition = "center"
        image_element.setAttribute("id", "bg")
        image_element.style.width = config.settings.screens.width * config.settings.screens.number_of_screens + "px"
        image_element.style.height = config.settings.screens.height + "px"
        document.querySelector("#bg").appendChild(image_element)
    }
    
    // Init overlay
    const overlay = document.querySelector("#overlay")
    if(!config.settings.overlay.show_date && !config.settings.overlay.show_time) {
        overlay.remove()
    }
}

window.onload = () => {
    init()

    setInterval(update, 1000)
}
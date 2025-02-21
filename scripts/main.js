import config from "../settings.js"
import update from "./update.js"
import init from "./init/init.js"

const pickupRandomImage = (images) => {
    const image = images[Math.floor(Math.random() * images.length)]
    return image
}

window.onload = () => {
    init()

    setInterval(update, 1000)
}

export { pickupRandomImage }
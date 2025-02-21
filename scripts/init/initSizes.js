import config from "../../settings.js"

export default function() {
    document.body.style.width = config.settings.screens.width * config.settings.screens.number_of_screens + "px"
    document.body.style.height = config.settings.screens.height + "px"
}
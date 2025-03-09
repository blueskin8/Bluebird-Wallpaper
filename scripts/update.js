import { formatNumber } from "./init/initOverlay.js"
import config from "../settings.js"

const lang = config.lang[config.settings.overlay.language]

export default function() {
    if(config.settings.overlay.show_date || config.settings.overlay.show_time) {
        const date = new Date()
        if(config.settings.overlay.show_date) {
            let date_str = []
            date_str.push(Object.values(lang.days)[date.getDay() == 0 ? 6 : date.getDay() - 1])
            date_str.push(date.getDate())
            date_str.push(Object.values(lang.months)[date.getMonth()])
            date_str = date_str.join(" ")
            document.querySelector(".date").innerHTML = date_str
        }
        if(config.settings.overlay.show_time) {
            const hours = formatNumber(date.getHours())
            const minutes = formatNumber(date.getMinutes())
            const seconds = formatNumber(date.getSeconds())
            document.querySelector(".time-container:nth-child(1) .time").innerHTML = hours
            document.querySelector(".time-container:nth-child(2) .time").innerHTML = minutes
            document.querySelector(".time-container:nth-child(3) .time").innerHTML = seconds
        }
    }
}
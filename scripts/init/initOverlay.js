import config from "../../settings.js"

const lang = config.lang[config.settings.overlay.language]

const formatNumber = (number) => {
    if (number.toString().split("").length == 1) {
        return `0${number}`
    } else {
        return number.toString()
    }
}

export default function () {
    const overlay = document.querySelector("#overlay")
    if (!config.settings.overlay.show_date && !config.settings.overlay.show_time) {
        overlay.remove()
        return
    }
    if (config.settings.overlay.show_date) {
        let date_str = []
        const date = new Date()
        date_str.push(Object.values(lang.days)[date.getDay() - 1])
        date_str.push(date.getDate())
        date_str.push(Object.values(lang.months)[date.getMonth()])
        date_str = date_str.join(" ")
        const date_element = document.createElement("span")
        date_element.className = "date mfs"
        date_element.style.color = config.settings.overlay.color
        date_element.innerText = date_str
        overlay.appendChild(date_element)
    }
    const style = document.styleSheets[0]
    style.insertRule(`#overlay::before {
        background-color: ${config.settings.overlay.color};
        width: ${config.settings.overlay.left_bar_width}px;
    }`)
    style.insertRule(`#overlay * {
        color: ${config.settings.overlay.color};
        font-weight: ${config.settings.overlay.font_weight};
        user-select: ${config.settings.overlay.can_user_select ? "auto" : "none"};
    }`)
    style.insertRule(`#overlay {
        width: ${config.settings.overlay.width}px;
        top: ${config.settings.overlay.y}px;
        left: ${config.settings.overlay.x}px;
        background-color: ${config.settings.overlay.background_color};
    }`)
    style.insertRule(`.mfs {
        font-size: ${config.settings.overlay.main_font_size};
    }`)
    style.insertRule(`.sfs {
        font-size: ${config.settings.overlay.second_font_size};
    }`)
    style.insertRule(`.date {
        line-height: ${config.settings.overlay.main_font_size};
    }`)
    if(config.settings.overlay.show_time) {
        const date = new Date()
        const hours_container_element = document.createElement("div")
        hours_container_element.className = "time-container"
        const hours_element = document.createElement("span")
        hours_element.className = "time mfs"
        hours_element.innerText = formatNumber(date.getHours())
        const hours_text_element = document.createElement("span")
        hours_text_element.className = "time-text sfs"
        hours_text_element.innerText = lang.time.hours

        const minutes_container_element = document.createElement("div")
        minutes_container_element.className = "time-container"
        const minutes_element = document.createElement("span")
        minutes_element.className = "time mfs"
        minutes_element.innerText = formatNumber(date.getMinutes())
        const minutes_text_element = document.createElement("span")
        minutes_text_element.className = "time-text sfs"
        minutes_text_element.innerText = lang.time.minutes

        const seconds_container_element = document.createElement("div")
        seconds_container_element.className = "time-container"
        const seconds_element = document.createElement("span")
        seconds_element.className = "time mfs"
        seconds_element.innerText = formatNumber(date.getSeconds())
        const seconds_text_element = document.createElement("span")
        seconds_text_element.className = "time-text sfs"
        seconds_text_element.innerText = lang.time.seconds

        hours_container_element.appendChild(hours_element)
        hours_container_element.appendChild(hours_text_element)
        minutes_container_element.appendChild(minutes_element)
        minutes_container_element.appendChild(minutes_text_element)
        seconds_container_element.appendChild(seconds_element)
        seconds_container_element.appendChild(seconds_text_element)

        const container_element = document.createElement("div")
        container_element.id = "times"
        container_element.appendChild(hours_container_element)
        container_element.appendChild(minutes_container_element)
        container_element.appendChild(seconds_container_element)

        overlay.appendChild(container_element)
    }
}

export { formatNumber }
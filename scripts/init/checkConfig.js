export default function checkConfig(config) {
    const config_type_sheet = {
        settings: {
            screens: {
                number_of_screens: "number",
                width: "number",
                height: "number"
            },
            extend_wallpaper: "boolean",
            common_wallpaper: "boolean",
            overlay: {
                language: "string",
                show_date: "boolean",
                show_time: "boolean",
                x: "number",
                y: "number",
                color: "string",
                background_color: "string",
                can_user_select: "boolean",
                main_font_size: "string",
                second_font_size: "string",
                width: "number",
                font_weight: "number",
                left_bar_width: "number"
            }
        },
        wallpapers: {
            images: "array",
            default: "string"
        }
    }

    const validateConfig = (expected, actual, path = "", errors = []) => {
        Object.entries(expected).forEach(([key, expectedType]) => {

            if (expectedType == "[object Object]") {
                expectedType = "object"
            }

            const fullPath = path ? `${path}.${key}` : key

            if (!(key in actual)) {
                errors.push(`Missing key : ${fullPath}`)
                return
            }

            const actualValue = actual[key]
            const actualType = Array.isArray(actualValue) ? "array" : typeof actualValue

            // Vérification du type
            if (expectedType === "object" && !Array.isArray(actualValue) && typeof actualValue === "object") {
                validateConfig(expected[key], actualValue, fullPath, errors)
            } else if (expectedType === "array" && !Array.isArray(actualValue)) {
                errors.push(`Incorrect type for ${fullPath} : expected an array, got ${actualType}`)
            } else if (expectedType !== actualType) {
                errors.push(`Incorrect type for ${fullPath} : expected ${expectedType}, got ${actualType}`)
            }
        })
    }

    const errors = []
    const conf = {
        settings: config.settings,
        wallpapers: config.wallpapers
    }

    validateConfig(config_type_sheet, conf, "", errors)

    if (
        config.settings.screens.number_of_screens < 1 ||
        config.settings.screens.number_of_screens > 3
    ) { errors.push("settings.screens.number_of_screens must be between 1 and 3.") }

    if (config.settings.screens.width < 1) {
        errors.push("settings.screens.width is invalid.")
    }
    if (config.settings.screens.height < 1) {
        errors.push("settings.screens.height is invalid.")
    }
    if (config.settings.common_wallpaper && config.settings.extend_wallpaper) {
        errors.push("settings.screens.common_wallpaper can't be enabled if settings.screens.extend_wallpaper is enabled.")
    }
    if (!config.lang.hasOwnProperty(config.settings.overlay.language)) {
        errors.push("settings.overlay.language : The language \"" + config.settings.overlay.language + "\" doesn't exist.")
    }
    if (config.settings.overlay.x < 0) {
        errors.push("settings.overlay.x is invalid.")
    }
    if (config.settings.overlay.y < 0) {
        errors.push("settings.overlay.y is invalid.")
    }
    // const rbga_regex = /^rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\/\s*(0(\.\d+)?|1(\.0)?)\s*\)$/
    // if (!rbga_regex.test(config.settings.overlay.color)) {
    //     errors.push("settings.overlay.color is invalid.")
    // }
    // if (!rbga_regex.test(config.settings.overlay.background_color)) {
    //     errors.push("settings.overlay.background_color is invalid.")
    // }

    if (errors.length > 0) {
        const body = document.body
        body.innerHTML = ""
        body.style.width = "100vw"
        body.style.height = "100vh"
        body.style.display = "flex"
        body.style.flexDirection = "column"
        body.style.justifyContent = "center"
        const bb = document.createElement("h1")
        bb.innerText = "Bluebird - Custom Wallpaper"
        bb.style.fontSize = "6vw"
        bb.style.textAlign = "center"
        const title = document.createElement("h1")
        title.innerText = "Configuration errors"
        title.style.fontSize = "5vw"
        title.style.textAlign = "center"
        body.appendChild(bb)
        body.appendChild(title)
        errors.forEach(error => {
            const p = document.createElement("p")
            p.innerText = error
            p.style.fontSize = "2vw"
            p.style.textAlign = "center"
            body.appendChild(p)
        })
        return true
    }
}
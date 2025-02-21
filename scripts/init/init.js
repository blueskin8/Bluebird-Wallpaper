import config from "../../settings.js"
import checkConfig from "./checkConfig.js"
import initSizes from "./initSizes.js"
import initBg from "./initBg.js"
import initOverlay from "./initOverlay.js"

export default function() {
    if (checkConfig(config)) return
    initSizes()
    initBg()
    initOverlay()
}
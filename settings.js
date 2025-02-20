// Wallpaper settings
const settings = {
    // Screens settings
    screens: {
        // From 1 to 3 : The number of monitors you have connected to your computer
        number_of_screens: 1,
        // number : The width of your screen
        width: 1920,
        // number : The height of your screen
        height: 1080
    },
    // true or false : Extend the wallpaper on all the monitors or each monitor has the wallpaper
    extend_wallpaper: false,
    // true or false only if extend_wallpaper is false : Use the same wallpaper on all the monitors
    common_wallpaper: false,
    // Text overlay settings
    overlay: {
        // "fr" or "en" : The language of the text
        language: "fr",
        // true or false : If you want to show the date
        show_date: true,
        // true or false : If you want to show the time
        show_time: true,
        // number : The position x of the top left corner of the overlay
        x: 0,
        // number : The position y of the top left corner of the overlay
        y: 0,
        // rgb : The foreground color of the text, see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
        color: "rgb(255, 255, 255 / 1)",
        // rgb : The background color of the text, see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
        background_color: "rgb(0, 0, 0 / 0)",
        // true or false : If the user can select the text
        can_user_select: false,
    }
}

// Wallappers settings
const wallpapers = {
    // The list of the wallpapers : the name of the image file with the extension
    images: [
        "58c968ee998f073814426e02ad7ecbc5a7f3901b.webp",
        "8f7155f522aae070ca97dbb312effe1e7c01acfd.webp",
        "6bb8d4561750c1d510ddabea8263d31334120f63.webp"
    ],
    // The default wallpaper if there is one, else, set "random"
    default: "58c968ee998f073814426e02ad7ecbc5a7f3901b.webp"
}

// Language settings
// You can add your own language if you need and create a pull-request on GitHub
const lang = {
    fr: {
        days: {
            monday: "Lundi",
            tuesday: "Mardi",
            wednesday: "Mercredi",
            thursday: "Jeudi",
            friday: "Vendredi",
            saturday: "Samedi",
            sunday: "Dimanche"
        },
        months: {
            january: "Janvier",
            february: "Février",
            march: "Mars",
            april: "Avril",
            may: "Mai",
            june: "Juin",
            july: "Juillet",
            august: "Août",
            september: "Septembre",
            october: "Octobre",
            november: "Novembre",
            december: "Décembre",
        },
        time: {
            hours: "Heures",
            minutes: "Minutes",
            seconds: "Secondes"
        }
    },
    en: {
        days: {
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday"
        },
        months: {
            january: "January",
            february: "February",
            march: "March",
            april: "April",
            may: "May",
            june: "June",
            july: "July",
            august: "August",
            september: "September",
            october: "October",
            november: "November",
            december: "December",
        },
        time: {
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds"
        }
    }
}

export { settings, lang, wallpapers }
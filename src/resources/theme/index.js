// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const colors = {
    brand: {
        primary: "#aafafc",
        secondary: "#d3456a",
        // ...
        accent: "#1a202c",
    },
}

const Button = {
    baseStyle: {
        fontWeight: "light",
    },
    sizes: {
        lg: {
            fontWeight: "bold",
        }
    }
}

export const theme = extendTheme({ colors, components: { Button } })




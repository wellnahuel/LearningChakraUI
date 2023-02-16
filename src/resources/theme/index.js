// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const colors = {
    brand: {
        primary: "#aafafc",
        secondary: "#d3456a",
        // ...
        accent: "#aa202c",
    },
}

const Button = {
    baseStyle: {
        fontWeight: "light",
        borderRadius: '30px',
        _hover: {
            boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.18)'
        }
    },
    variants: {
        outline: {
            _hover: {
                bg: 'brand.primary',
                borderColor: 'brand.primary'
            }
        },
        'cta': {
            textTransform: 'uppercase',
            bg: 'brand.accent',
            fontWeight:'bold'
        }
    }
}

export const theme = extendTheme({ colors, components: { Button } })




// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

const fonts = {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif'
}

const Button = {
    variants: {
        outline: {
            textTransform:'uppercase',
            borderRadius:'0',
            color:'white',
            letterSpacing:'1px',
            fontWeight: 'light',
            _hover: { color:'black' }
        }
    }
}

const Heading = {
    variants: {
        banner: {
            textTransform: 'uppercase',
            fontWeight: 'light',
            letterSpacing: '5px',
            color: 'white'
        }
    }
}


// 2. Call `extendTheme` and pass your custom values

export const theme = extendTheme({ fonts, components: { Button, Heading } })

//export const theme = extendTheme({ colors, components: { Button } })


/* const colors = {
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
} */




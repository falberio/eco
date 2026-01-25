import { AppTheme, defaultTheme } from '@eco/shared/styles'

/**
 * Theme de Alacena - Verde/Natural (despensa)
 */
export const alacenaTheme: AppTheme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        primary: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',  // Verde principal
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
        },
        secondary: {
            50: '#fefce8',
            500: '#eab308',  // Amarillo (complemento)
            600: '#ca8a04',
            700: '#a16207',
        },
    },
    app: {
        name: 'Alacena',
        logo: '/alacena-logo.svg',
    },
}

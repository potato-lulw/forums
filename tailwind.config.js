/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontSize: {
				xs: '0.6875rem',   // 11px (previously 12px)
				sm: '0.75rem',     // 12px (previously 14px)
				base: '0.875rem',  // 14px (previously 16px)
				lg: '1rem',        // 16px (previously 18px)
				xl: '1.125rem',    // 18px (previously 20px)
				'2xl': '1.375rem', // 22px (previously 24px)
				'3xl': '1.625rem', // 26px (previously 30px)
				'4xl': '2rem',     // 32px (previously 36px)
				'5xl': '2.5rem',   // 40px (previously 48px)
				'6xl': '3.5rem',   // 56px (previously 64px)
				'7xl': '4.5rem',   // 72px (previously 80px)
				'8xl': '5.5rem',   // 88px (previously 96px)
				'9xl': '7rem',     // 112px (previously 128px)
				'10xl': '9rem'     // 144px (previously 160px)
			},

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				myBg: '#2f2f2f',
				myBg2: "#222222",
				myBlue: "#6364ab",
				myBlue2: "#a9a4c1",
				myCardBg: "#282828",
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
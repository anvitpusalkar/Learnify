/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		animation: {
			//for meteor effect
				"meteor-effect": "meteor 5s linear infinite",
			//for infiite Cards animation	
			scroll:
          		"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
		  },
		  keyframes: {
			//for infiite Cards animation
			scroll: {
				to: {
				  transform: "translate(calc(-50% - 0.5rem))",
				},
			  },
			  //for meteor effect
			meteor: {
			  "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
			  "70%": { opacity: "1" },
			  "100%": {
				transform: "rotate(215deg) translateX(-500px)",
				opacity: "0",
			  },
			},
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
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
  			},
			flipcolor: 'hsl(var(--flip-color))'
			  
  		}
  	}
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate"),
	// eslint-disable-next-line no-undef
	require('tailwindcss-motion'),
  ],

}
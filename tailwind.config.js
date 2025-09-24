/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  prefix: '',
  theme: {
    extend: {
      colors: {
				primary : "#4451a3"
			},
    },
  },

  mode: 'jit',
};

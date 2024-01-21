import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, keyframes: {
        type: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
        rotateY: {
          from: { transform: "translateY(0px) rotate(0deg)" },
          to: { transform: "translateY(13.5px) rotate(-45deg)" },
        },
        rotateRevY: {
          from: { transform: "translateY(13.5px) rotate(-45deg)" },
          to: { transform: "translateY(0) rotate(0deg)" },
        },
        rotateX: {
          from: { transform: "translateY(0) rotate(0deg)" },
          to: { transform: "translateY(-10px) rotate(45deg)" },
        },
        rotateRevX: {
          from: { transform: "translateY(-10px) rotate(45deg)" },
          to: { transform: "translateY(0px) rotate(0)" },
        },
        fade: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        fadeRev: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        tab1: {
          from: { transform: "translateY(-30px)" },
          to: { transform: "translateY(5px)" },
        },
        tab2: {
          from: { transform: "translateY(-30px)" },
          to: { transform: "translateY(10px)" },
        },
        tab3: {
          from: { transform: "translateY(-30px)" },
          to: { transform: "translateY(15px)" },
        },
        sweep: {
          from: { transform: "translateX(500px)" },
          to: { transform: "translateX(0px)" },
        },
      },
      animation: {
        typing: "type 4.2s steps(40, end), blink .90s step-end infinite",
        rotateUp: "rotateY .70s linear forwards",
        rotateUpRev: "rotateRevY .70s linear forwards",
        rotateDwn: "rotateX .70s linear forwards",
        rotateDwnRev: "rotateRevX .70s linear forwards",
        fading: "fade .70s linear forwards",
        fadingRev: "fadeRev .70s linear forwards",
        extension1: "tab1 1.5s linear forwards",
        extension2: "tab2 1.0s linear forwards",
        extension3: "tab3 .50s linear forwards",
        slide: "sweep 1.5s linear forwards, fadeRev .70s linear forwards",
      },
    },
  },
  plugins: [],
}
export default config

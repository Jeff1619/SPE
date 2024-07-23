import { Poppins, Orbitron, Josefin_Sans, Caveat } from "next/font/google";


const popFont = Poppins({ subsets: ["latin"], weight: ['200', '300', '400', '700'], variable: '--font-poppins' });
const orbFont = Orbitron({ subsets: ["latin"], weight: ['400'], variable: '--font-orbitron' })
const joseFont = Josefin_Sans({ subsets: ["latin"], weight: ['100', '400', '700'], variable: '--font-josefin' })
const caveatFont = Caveat({ subsets: ["latin"], weight: ['400'], variable: '--font-caveat' })
// BODY FONT POPPINS

export const poppins = popFont.className;

// CUS FONTS

export const orbitron = orbFont.variable;
export const josefin = joseFont.variable;
export const caveat = caveatFont.variable;
import { Route, Analisis, Control } from "../interfaces"

import { BsClockHistory, BsFillCloudSunFill } from "react-icons/Bs";
import { SiGooglepodcasts } from "react-icons/si";


export const routes: Route[] = [
    {
        name: 'Inicio',
        path: '#home'
    },
    {
        name: 'Como funciona?',
        path: '#funcion'
    },
    {
        name: 'Sobre nosotros',
        path: '#about'
    },
    {
        name: 'Nuestra app',
        path: '#app'
    },
    {
        name: 'Contactanos',
        path: '#contact'
    }
];

export const analisis: Analisis[] = [
    {
        name: "Usuarios",
        data: "12M",
    },
    {
        name: "Lenguaje",
        data: "16",
    },
    {
        name: "Soporte y antecion",
        data: "24/7",
    }
]

export const controlData: Control[] = [
    {
        name: "Structured Reports",
        icon: SiGooglepodcasts,
    },
    {
        name: "Cloud System",
        icon: BsFillCloudSunFill,
    },
    {
        name: "24/7 Support",
        icon: BsClockHistory,
    },
]
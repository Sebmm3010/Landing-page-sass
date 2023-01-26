import { Route, Analisis } from "../interfaces"


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
        name: 'Contactanos',
        path: '#contact'
    }
];

export const analisis:Analisis[]=[
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
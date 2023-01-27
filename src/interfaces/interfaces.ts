import { IconType } from "react-icons/lib";

export interface Route{
    name:string;
    path:string;
}

export interface Analisis{
    name:string;
    data:string;
}

export interface Control{
    name:string;
    icon: IconType;
}
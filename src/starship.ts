import { ISector } from "./world"

export interface ISystem {

}

export type Command = () => void;

export interface IStarship {
    energy: number,
    shields: number,
    topedoes: number,
    region: ISector
}

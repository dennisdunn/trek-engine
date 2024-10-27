import { IBounds, Bounds, Point, IPoint } from "./geometry";
import { QUADRANT_NAMES, REGION_NAMES } from "./constants";

export interface IRegion {
    bounds: IBounds,
    name: string,
    contents: any[],
    mapped: boolean
}

export type WorldMap = IRegion[]

export namespace World {
    export function getRegion(w: WorldMap, p: IPoint): IRegion {
        return w.find(r => Bounds.contains(r.bounds, p));
    }
    export function createRegion(b: IBounds, n: string): IRegion {
        return { bounds: b, name: n, contents: [], mapped: false };
    }
}

export class WorldBuilder {
    world: WorldMap = [];

    start() {
        const delta_r: number = 0.25;
        const delta_theta: number = Math.PI / 8;
        for (let q = 0; q < QUADRANT_NAMES.length; q++) {
            const base_theta = q * Math.PI / 2;
            for (let r = 0; r < REGION_NAMES.length; r++) {
                const theta_factor = r % 4;
                const r_factor = Math.floor(r / 4);
                let bounds = Bounds.create(Point.create(0, base_theta), Point.create(delta_r, base_theta + delta_theta));
                bounds = Bounds.translate(bounds, r_factor * delta_r, theta_factor * delta_theta);
                const name = `${REGION_NAMES[r]} ${QUADRANT_NAMES[q]}`
                this.world.push(World.createRegion(bounds, name));
            }
        }
    }

    build() {
        return this.world;
    }
}
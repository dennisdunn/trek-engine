import { IBounds, Bounds, Point, IPoint } from "./geometry";
import { QUADRANT_NAMES, REGION_NAMES } from "./constants";

export interface IRegion {
    bounds: IBounds,
    name: string,
    contents: any[],
    mapped: boolean
}

export type WorldMap = IRegion[]
export type Seed = (region: IRegion) => void;

export namespace World {
    export function getRegion(world: WorldMap, point: IPoint): IRegion {
        return world.find(region => Bounds.contains(region.bounds, point));
    }
    export function getNamedRegion(world: WorldMap, name: string): IRegion {
        return world.find(region => region.name === name);
    }
}

export class WorldBuilder {
    world: WorldMap = [];
    seeds: Seed[] = [];

    static create(): WorldBuilder {
        return new WorldBuilder().begin();
    }

    begin(): WorldBuilder {
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
                this.world.push({ bounds, name, contents: [], mapped: false });
            }
        }
        return this;
    }

    addSeed(seed: Seed): WorldBuilder {
        this.seeds.push(seed);
        return this;
    }

    seed(): WorldBuilder {
        this.seeds.forEach(seed => this.world.forEach(seed));
        return this;
    }

    build() {
        return this.world;
    }
}
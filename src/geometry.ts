const TWO_PI: number = 2 * Math.PI;

/**
 * Determins if the bounding arc is malformed. A malformed bounding arc
 * has an outer point in quadrant I and an inner point in quadrant IV.
 * @param bounds 
 * @returns boolean
 */
function isMalformed(bounds: IBounds): boolean {
    return bounds.inner.theta > bounds.outer.theta;
}

/**
 * Split a malformed bounding arc into two well-formed bounding arcs,
 * one in quadrant I and the ohter in quadrant IV.
 * @param bounds 
 * @returns IBounds[]
 */
function normalize(bounds: IBounds): IBounds[] {
    return [
        Bounds.create(Point.create(bounds.inner.r, 0), bounds.outer),
        Bounds.create(bounds.inner, Point.create(bounds.outer.r, TWO_PI))
    ]
}

/**
* A point on the polar plane.
*/
export interface IPoint {
    r: number,
    theta: number
}
/**
 * A bounding box, aka a bounding arc, on the polar plane.
 */
export interface IBounds {
    inner: IPoint,
    outer: IPoint
}

export namespace Point {
    export function create(r: number, theta: number): IPoint {
        if (r < 0) { r = 0; }
        if (theta < 0) { theta = TWO_PI - theta; }
        return { r: r, theta: theta };
    }
    export function equals(p0: IPoint, p1: IPoint): boolean {
        return p0.r === p1.r && p0.theta === p1.theta;
    }
    export function translate(p: IPoint, delta_r: number, delta_theta: number): IPoint {
        return Point.create(p.r + delta_r, p.theta + delta_theta);
    }
}

export namespace Bounds {
    export function create(inner: IPoint, outer: IPoint): IBounds {
        return { inner, outer };
    }
    export function equals(b0: IBounds, b1: IBounds): boolean {
        return b0.inner === b1.inner && b0.outer === b1.outer;
    }
    export function contains(bounds: IBounds, p: IPoint): boolean {
        if (isMalformed(bounds)) {
            return normalize(bounds)
                .map(b => Bounds.contains(b, p))
                .reduce((prev, curr) => prev || curr, false);
        } else {
            return p.r >= bounds.inner.r
                && p.r <= bounds.outer.r
                && p.theta >= bounds.inner.theta
                && p.theta <= bounds.outer.theta;
        }
    }
    export function intersects(boundsA: IBounds, boundsB: IBounds): boolean {
        return Bounds.contains(boundsA, boundsB.inner) && Bounds.contains(boundsA, boundsB.outer);
    }
    export function translate(bounds: IBounds, delta_r: number, delta_theta: number): IBounds {
        return Bounds.create(
            Point.translate(bounds.inner, delta_r, delta_theta),
            Point.translate(bounds.outer, delta_r, delta_theta)
        );
    }
    export function transform(bounds: IBounds, delta_r: number, delta_theta: number): IBounds {
        return Bounds.create(
            Point.translate(bounds.inner, delta_r, delta_theta),
            Point.translate(bounds.outer, -delta_r, -delta_theta)
        );
    }
}

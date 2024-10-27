import { Point, Bounds } from '../src';

test("polar equals", () => {
    const p0 = Point.create(1.2, Math.PI);
    const p1 = Point.create(1.2, Math.PI);
    const result = Point.equals(p0, p1);
    expect(result).toBeTruthy()
})

test("well-formed arc contains point", () => {
    const b = Bounds.create(
        Point.create(0, 0),
        Point.create(1, Math.PI / 2)
    );
    const p = Point.create(0.5, Math.PI / 4);
    const result = Bounds.contains(b, p);
    expect(result).toBeTruthy();
})

test("malformed arc contains point in Q I", () => {
    const b = Bounds.create(
        Point.create(0, Math.PI * 7 / 8),
        Point.create(1, Math.PI / 2)
    );
    const p = Point.create(0.5, Math.PI / 4);
    const result = Bounds.contains(b, p);
    expect(result).toBeTruthy();
})

test("malformed arc contains point in Q IV", () => {
    const b = Bounds.create(
        Point.create(0, Math.PI * 7 / 8),
        Point.create(1, Math.PI / 2)
    );
    const p = Point.create(0.5, Math.PI * 7 / 8);
    const result = Bounds.contains(b, p);
    expect(result).toBeTruthy();
})


test("one bounds intersects with another", () => {
    const b0 = Bounds.create(
        Point.create(0, 0),
        Point.create(1, Math.PI / 2)
    );
    const b1 = Bounds.create(
        Point.create(0.25, Math.PI / 8),
        Point.create(0.5, Math.PI / 4)
    );
    const result = Bounds.intersects(b0, b1);
    expect(result).toBeTruthy();
})

import { Geometry } from '../src/geometry';


test("polar equals", () => {
    const p0 = Geometry.Point.create(1.2, Math.PI);
    const p1 = Geometry.Point.create(1.2, Math.PI);
    const result = Geometry.Point.equals(p0, p1);
    expect(result).toBeTruthy()
})

test("well-formed arc contains point", () => {
    const b = Geometry.Bounds.create(
        Geometry.Point.create(0, 0),
        Geometry.Point.create(1, Math.PI / 2)
    );
    const p = Geometry.Point.create(0.5, Math.PI / 4);
    const result = Geometry.Bounds.contains(b, p);
    expect(result).toBeTruthy();
})

test("malformed arc contains point in Q I", () => {
    const b = Geometry.Bounds.create(
        Geometry.Point.create(0, Math.PI * 7 / 8),
        Geometry.Point.create(1, Math.PI / 2)
    );
    const p = Geometry.Point.create(0.5, Math.PI / 4);
    const result = Geometry.Bounds.contains(b, p);
    expect(result).toBeTruthy();
})

test("malformed arc contains point in Q IV", () => {
    const b = Geometry.Bounds.create(
        Geometry.Point.create(0, Math.PI * 7 / 8),
        Geometry.Point.create(1, Math.PI / 2)
    );
    const p = Geometry.Point.create(0.5, Math.PI * 7 / 8);
    const result = Geometry.Bounds.contains(b, p);
    expect(result).toBeTruthy();
})


test("one bounds intersects with another", () => {
    const b0 = Geometry.Bounds.create(
        Geometry.Point.create(0, 0),
        Geometry.Point.create(1, Math.PI / 2)
    );
    const b1 = Geometry.Bounds.create(
        Geometry.Point.create(0.25, Math.PI / 8),
        Geometry.Point.create(0.5, Math.PI / 4)
    );
    const result = Geometry.Bounds.intersects(b0, b1);
    expect(result).toBeTruthy();
})

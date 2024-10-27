import { CHANCE_OF_1_KLINGON, CHANCE_OF_2_KLINGONS, CHANCE_OF_3_KLINGONS, CHANCE_OF_STARBASE, ENEMY_SHIELD_ENERGY, MAX_STARS_QUADRANT, MIN_STARS_QUADRANT, WorldBuilder } from "../src"

test("bare world builder", () => {
    const builder = new WorldBuilder();
    builder.begin();
    const result = builder.build();

    expect(result.length).toBe(64);
    expect(result[6].name).toBe("Capella I");
})

test("seeded, fluent world builder", () => {
    const world = WorldBuilder
        .create()
        .addSeed(region => {
            const n = Math.floor(Math.random() * MAX_STARS_QUADRANT) + MIN_STARS_QUADRANT;
            for (let i = 0; i < n; i++) {
                region.contents.push('star');
            }
        })
        .addSeed(region => {
            if (Math.random() <= CHANCE_OF_STARBASE) {
                region.contents.push('starbase')
            }
        })
        .addSeed(region => {
            const chance = Math.random();
            const n = chance <= CHANCE_OF_3_KLINGONS
                ? 3
                : chance <= CHANCE_OF_2_KLINGONS
                    ? 2
                    : chance <= CHANCE_OF_1_KLINGON
                        ? 1
                        : 0;
            for (let i = 0; i < n; i++) {
                region.contents.push({ 'shield': ENEMY_SHIELD_ENERGY });
            }
        })
        .seed()
        .build()

    expect(world.find(region=>region.contents.includes('starbase'))).toBeTruthy();
    
    const result = world.find(region => region.name === "Capella I");

    expect(result?.contents.length).toBeGreaterThan(0);
    expect(result?.contents[0]).toBe('star');
})
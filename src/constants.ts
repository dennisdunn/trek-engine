export const REGION_NAMES: string[] = [
    'Aldebaran', 'Altair',
    'Antares', 'Arcturus',
    'Betelguse', 'Canapus',
    'Capella', 'Deneb',
    'Pollux', 'Procyon',
    'Regulus', 'Rigel',
    'Sagitarius', 'Sirus',
    'Spica', 'Vega'
]

export const QUADRANT_NAMES: string[] = [
    'I',
    'II',
    'III',
    'IV'
]

export const SYSTEMS: string[] = [
    'WARP_ENGINES',
    'SR_SENSORS',
    'LR_SENSORS',
    'PHASER_CNTRL',
    'PHOTON_TUBES',
    'DAMAGE_CNTRL',
    'SHIELD_CNTRL',
    'COMPUTER'
]

export const COMMANDS = {
    SET_COURSE: 'SET_COURSE',
    SHORT_RANGE_SENSOR_SCAN: 'SHORT_RANGE_SENSOR_SCAN',
    LONG_RANGE_SENSOR_SCAN: 'LONG_RANGE_SENSOR_SCAN',
    FIRE_PHASERS: 'FIRE_PHASERS',
    FIRE_PHOTON_TORPEDOES: 'FIRE_PHOTON_TORPEDOES',
    SHIELD_CONTROL: 'SHIELD_CONTROL',
    DAMAGE_CONTROL_REPORT: 'DAMAGE_CONTROL_REPORT',
    CALL_ON_LIBRARY_COMPUTER: 'CALL_ON_LIBRARY_COMPUTER'
}

export const CHRONO = {
    MIN_START_STAR_DATE: 2000,
    MAX_START_STAR_DATE: 3900,
    MISSION_TIME: 30
}

export const FACTIONS: string[] = [
    'Klingon',
    'Romulan',
    'Tolian',
    'Federation',
    'Unknown']

export const START_ENERGY = 3000;
export const START_PHOTON_TORPEDOES = 10;
export const ENEMY_SHIELD_ENERGY = 200;
export const MIN_STARS_QUADRANT = 1;
export const MAX_STARS_QUADRANT = 8;
export const CHANCE_OF_STARBASE = 0.04;
export const CHANCE_OF_3_KLINGONS = 0.02;
export const CHANCE_OF_2_KLINGONS = 0.03;
export const CHANCE_OF_1_KLINGON = 0.15;
export const CHANCE_OF_DAMAGE = 0.20;
export const CHANCE_OF_REPAIR = 0.50;
export const MIN_DAMAGE = 1;
export const MAX_DAMAGE = 5;
https://dev.to/charperbonaroo/creating-a-ts-written-npm-package-for-use-in-node-js-or-browser-5gm3

# Trek '24

There are 64 sectors in the galaxy divided into 4 quadrants of 16 regions each. A 
short range scan reveals the objects in the sector. A long range scan determines 
if adjoining sectors have enemies or starbases.

Shields can be up or down. When up, they have a strength.

Engines have energy. Energy can be shared between the drive systems, shields,
and phasers.

A ship is composed of systems. A system contains the state of the system and the
operations that the system can perform. All systems have a damage property and a tick()
method. The tick() method is called once per game cycle, operations are performed
with input from the damage property. System expose commands.

Commands have a delta-t and delta-e, the costs in terms of time and energy to 
execute the command.

> Remember, it's game, not a simulation.

## Regions

Idx | Name
---:|---
0 | Aldebaran 
1 | Altair
2 | Antares 
3 | Arcturus
4 | Betelguse 
5 | Canapus
6 | Capella
7 | Deneb
8 | Pollux
9 | Procyon
10 | Regulus 
11 | Rigel
12 | Sagitarius
13 | Sirus
14 | Spica 
15 | Vega

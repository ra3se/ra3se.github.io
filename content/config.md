---
title: Config
date: 2020-05-16 09:02:42 Z
draft: false
---

## The configuration file

To have configuration settings loaded at startup, create a file called `autoexec.cfg` and place it in your **arena** or **baseq3** folder.

When changing CVAR (dynamic variables) there are a couple of different *set* commands that can be used.

- `set` sets a cvar
- `seta` sets a cvar and flags it as archive
- `sets` sets a cvar and flags it as server info
- `sett` sets a cvar and flags it as tool
- `setu` sets a cvar and flags it as user info

## Get inspired

Back in the day ones Quake 3 configuration file was a closely guarded secret, today; we [share](https://github.com/ra3se/Quake-3-Rocket-Arena-3-Configs).

### Essential

#### Change enemy/team model and color.

```
set cg_teamModel  "crash/default"
set cg_enemyModel "tankjr/default"
set cg_teamColor  "0000FF:0000FF:0000FF"
set cg_enemyColor "FF0000:FF0000:FF0000"
```

#### Change resolution

```
set r_mode         -1
set r_customWidth  1920
set r_customHeight 1080
```

### Optional


#### Ultra low textures

Enable mimapping for all textures and use `cg_noMip` to disable mipmap for certain weapons.

```
set r_picmip "10"
set cg_noMip "495"
```

```
cg_noMip <value>        (default = 0)
  the value is a bitfield.
    1 NOMIP_LG
    2 NOMIP_RL
    4 NOMIP_GL
    8 NOMIP_PG
    16 NOMIP_RG
    32 NOMIP_BFG
    64 NOMIP_PLAYERS
    128 NOMIP_BLOODTRAIL
    256 NOMIP_FLOATICONS
  Example: LG+RL+PG+BFG = 1+2+8+32 = cg_noMip 43
  This will disable mipmapping for these weapons.
  This command requiers a vid_restart to take effect.
```

### For fun

#### Auto rocket-jump

```
set rjump "centerview; cl_pitchspeed 999999; +lookdown; +moveup; +attack; wait 2; -moveup; -attack; -lookdown; wait 6; centerview; cl_pitchspeed 140"
set sjump "cl_yawspeed 22501;+left;+moveup;+attack;wait 2;-left;-moveup;-attack;+left;wait 2;-left"
bind alt "vstr rjump"
```

#### Volume control

```
set vdn	"vstr vol00"
set vup	"vstr vol01"
set vol00 "set s_volume 0.0; set vdn vstr vol00; set vup vstr vol01; echo Volume |=========="
'set vol01 "set s_volume 0.1; set vdn vstr vol00; set vup vstr vol02; echo Volume =|========="
set vol02 "set s_volume 0.2; set vdn vstr vol01; set vup vstr vol03; echo Volume ==|========"
set vol03 "set s_volume 0.3; set vdn vstr vol02; set vup vstr vol04; echo Volume ===|======="
set vol04 "set s_volume 0.4; set vdn vstr vol03; set vup vstr vol05; echo Volume ====|======"
set vol05 "set s_volume 0.5; set vdn vstr vol04; set vup vstr vol06; echo Volume =====|====="
set vol06 "set s_volume 0.6; set vdn vstr vol05; set vup vstr vol07; echo Volume ======|===="
set vol07 "set s_volume 0.7; set vdn vstr vol06; set vup vstr vol08; echo Volume =======|==="
set vol08 "set s_volume 0.8; set vdn vstr vol07; set vup vstr vol09; echo Volume ========|=="
set vol09 "set s_volume 0.9; set vdn vstr vol08; set vup vstr vol10; echo Volume =========|="
set vol10 "set s_volume 1.0; set vdn vstr vol09; set vup vstr vol10; echo Volume ==========|"
```

#### Cycle crosshair color

```
set cup vstr crs00
set cdn vstr crs01
set crs00 "set cg_crosshaircolor white;set cdn vstr crs00;set cup vstr crs01;echo ^7white"
set crs01 "set cg_crosshaircolor yellow;set cdn vstr crs00;set cup vstr crs02;echo ^3yellow"
set crs02 "set cg_crosshaircolor blue;set cdn vstr crs01;set cup vstr crs03;echo ^4blue"
set crs03 "set cg_crosshaircolor black;set cdn vstr crs02;set cup vstr crs04;echo ^8black"
set crs04 "set cg_crosshaircolor green;set cdn vstr crs03;set cup vstr crs05;echo ^2green"
set crs05 "set cg_crosshaircolor white;set cdn vstr crs04;set cup vstr crs06;echo ^7white"
set crs06 "set cg_crosshaircolor yellow;set cdn vstr crs05;set cup vstr crs07;echo ^3yellow"
set crs07 "set cg_crosshaircolor blue;set cdn vstr crs06;set cup vstr crs08;echo ^4blue"
set crs08 "set cg_crosshaircolor black;set cdn vstr crs07;set cup vstr crs09;echo ^8black"
set crs09 "set cg_crosshaircolor Green;set cdn vstr crs08;set cup vstr crs10;echo ^2green"
set crs10 "set cg_crosshaircolor white;set cdn vstr crs09;set cup vstr crs10;echo ^7white"
```

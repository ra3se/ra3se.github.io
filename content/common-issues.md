---
title: Common issues
date: 2020-05-15 21:51:33 Z
draft: false
kind: page
---

## Version missmatch

Make sure you have **arena** loaded before attempting to join the server, alternatively start quake with the command line option `+set fs_game arena`.

Set `cl_allowDownload` to 1 in order to download whatever assets might be missing in your local installation from the server.

## Experiencing lag

Try the following in your configuration:

```
set cl_maxpackets 125
set cl_timeNudge  -12
set rate          25000
set snaps         40
```

## Wrong resolution

Try the following in your configuration. Replace customWidth and customHeight with your resolution of choice:

```
set r_mode         -1
set r_customWidth  1920
set r_customHeight 1080
```

Some engines also support `set r_mode -2` that will use the desktop resolution

## Mouse acceleration

Some windows users are experiencing issue with mouse acceleration even after It's been turned off. [MarkC mouse acceleration fix](https://donewmouseaccel.blogspot.com/2010/03/markc-windows-7-mouse-acceleration-fix.html) could solved the issue.

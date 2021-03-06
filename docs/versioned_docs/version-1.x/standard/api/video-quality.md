---
title: VideoQuality
sidebar_label: VideoQuality
---

**Type:** `enum<int>`

Identifies the type of media by a number and can contain one of these possible values:

- `0` - The video quality is `UNKNOWN`.
- `144` - The video quality is `XXS`, which is equivalent to 144p.
- `240` - The video quality is `XS`, which is equivalent to 240p.
- `360` - The video quality is `S`, which is equivalent to 360p.
- `480` - The video quality is `M`, which is equivalent to 480p.
- `720` - The video quality is `L`, which is equivalent to 720p.
- `1080` - The video quality is `XL`, which is equivalent to 1080p (HD).
- `1440` - The video quality is `XXL`, which is equivalent to 1440p (QHD).
- `2160` - The video quality is `MAX`, which is equivalent to 2160p (4k).

## Example

```js
import { VideoQuality } from '@vime-js/standard'

if (player.videoQuality === VideoQuality.MAX) {
  console.log('We are in 4k.');
}
```
---
title: Class FlashXmlScale
description: Scale conversion constants and helpers for Flash XML atlas coordinates.
---

# Class FlashXmlScale

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FlashXmlImage.cs`

Scale conversion constants and helpers for Flash XML atlas coordinates.

## Declaration

```csharp
internal static class FlashXmlScale
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FlashXmlScale](FlashXmlScale.md)

## Fields

### AtlasToFlashPointScale {#f-cuttheropedx-gamemain-flashxmlscale-atlastoflashpointscale}

```csharp
internal const float AtlasToFlashPointScale
```

Combined conversion factor from atlas pixels to Flash point units.

### IosRetinaAtlasScale {#f-cuttheropedx-gamemain-flashxmlscale-iosretinaatlasscale}

```csharp
internal const float IosRetinaAtlasScale
```

Scale factor used by the iOS retina atlas export.

### PcOutputScale {#f-cuttheropedx-gamemain-flashxmlscale-pcoutputscale}

```csharp
internal const float PcOutputScale
```

Scale factor used by the PC output assets.

## Methods

### NormalizeAtlasValue(float rawValue) {#m-cuttheropedx-gamemain-flashxmlscale-normalizeatlasvalue-system-single}

```csharp
internal static float NormalizeAtlasValue(float rawValue)
```

Converts an atlas-space value to Flash point space.

Parameters:

- `rawValue`: Atlas-space value to normalize.

Returns: The value in Flash point space, or zero when `rawValue` is zero.


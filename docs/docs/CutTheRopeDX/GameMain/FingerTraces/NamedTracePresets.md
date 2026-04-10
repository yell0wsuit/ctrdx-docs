---
title: Class NamedTracePresets
description: Shared particle and gradient presets for thin named finger traces.
---

# Class NamedTracePresets

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `NamedTracePresets.cs`

Shared particle and gradient presets for thin named finger traces.

## Declaration

```csharp
internal static class NamedTracePresets
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [NamedTracePresets](NamedTracePresets.md)

## Methods

### CreateAlphaParticles(int firstQuad, int quadCount) {#m-cuttheropedx-gamemain-fingertraces-namedtracepresets-createalphaparticles-system-int32-system-int32}

```csharp
public static FingerParticles CreateAlphaParticles(int firstQuad, int quadCount)
```

Creates the shared alpha-blended particle preset used by several named traces.

Parameters:

- `firstQuad`: The first atlas quad index used by the preset.
- `quadCount`: The number of atlas quads available starting at `firstQuad`.

Returns: The configured alpha-blended particle emitter.

### CreateBubbleParticles() {#m-cuttheropedx-gamemain-fingertraces-namedtracepresets-createbubbleparticles}

```csharp
public static FingerParticles CreateBubbleParticles()
```

Creates the preset particle emitter used by the bubble trace.

Returns: The configured bubble particle emitter.

### CreateLightningParticles() {#m-cuttheropedx-gamemain-fingertraces-namedtracepresets-createlightningparticles}

```csharp
public static FingerParticles CreateLightningParticles()
```

Creates the preset spark emitter used by the lightning trace.

Returns: The configured lightning particle emitter.

### CreateRedParticles(float alpha, FingerTraceBlendMode blendMode) {#m-cuttheropedx-gamemain-fingertraces-namedtracepresets-createredparticles-system-single-cuttheropedx-framework-visual-fingertraceblendmode}

```csharp
public static FingerParticles CreateRedParticles(float alpha, FingerTraceBlendMode blendMode)
```

Creates one of the two layered particle emitters used by the red trace.

Parameters:

- `alpha`: The constant alpha multiplier applied to the emitted sprites.
- `blendMode`: The blend mode used to draw the emitted sprites.

Returns: The configured red particle emitter.

### CreateStarParticles() {#m-cuttheropedx-gamemain-fingertraces-namedtracepresets-createstarparticles}

```csharp
public static FingerParticles CreateStarParticles()
```

Creates the preset particle emitter used by the star trace.

Returns: The configured star particle emitter.

### CreateWinterParticles() {#m-cuttheropedx-gamemain-fingertraces-namedtracepresets-createwinterparticles}

```csharp
public static FingerParticles CreateWinterParticles()
```

Creates the preset particle emitter used by the winter trace.

Returns: The configured winter particle emitter.

### GetGoldenRibbonColor(float t, bool clampBlend = false) {#m-cuttheropedx-gamemain-fingertraces-namedtracepresets-getgoldenribboncolor-system-single-system-boolean}

```csharp
public static RGBAColor GetGoldenRibbonColor(float t, bool clampBlend = false)
```

Returns the shared golden ribbon gradient used by multiple named traces.

Parameters:

- `t`: The normalized ribbon position in the range `[0, 1]`.
- `clampBlend`: `true` to clamp the initial fade blend into the valid range; otherwise use the raw scaled value.

Returns: The golden ribbon color at `t`.


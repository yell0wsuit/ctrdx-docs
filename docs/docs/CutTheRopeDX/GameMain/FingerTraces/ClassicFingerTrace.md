---
title: Class ClassicFingerTrace
description: CTR2-style classic finger trace that renders a solid white bezier ribbon with no particles.
---

# Class ClassicFingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `ClassicFingerTrace.cs`

CTR2-style classic finger trace that renders a solid white bezier ribbon with no particles.

## Declaration

```csharp
internal sealed class ClassicFingerTrace : RibbonFingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [ParticleFingerTrace](ParticleFingerTrace.md)
- [RibbonFingerTrace](RibbonFingerTrace.md)
- [ClassicFingerTrace](ClassicFingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### ClassicFingerTrace() {#m-cuttheropedx-gamemain-fingertraces-classicfingertrace-ctor}

```csharp
public ClassicFingerTrace()
```

Initializes a classic finger trace.

## Methods

### GetRibbonColor(float t) {#m-cuttheropedx-gamemain-fingertraces-classicfingertrace-getribboncolor-system-single}

```csharp
protected override RGBAColor GetRibbonColor(float t)
```

Gets the ribbon color for the normalized position `t` along the strip.

Parameters:

- `t`: The normalized ribbon position in the range `[0, 1]`.

Returns: The ribbon color at `t`.


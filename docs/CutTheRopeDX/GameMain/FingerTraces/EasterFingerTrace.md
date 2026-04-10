---
title: Class EasterFingerTrace
description: CTR2-style Easter finger trace with a pastel ribbon, glow overlay, and egg-themed particles.
---

# Class EasterFingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `EasterFingerTrace.cs`

CTR2-style Easter finger trace with a pastel ribbon, glow overlay, and egg-themed particles.

## Declaration

```csharp
internal sealed class EasterFingerTrace : RibbonFingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [ParticleFingerTrace](ParticleFingerTrace.md)
- [RibbonFingerTrace](RibbonFingerTrace.md)
- [EasterFingerTrace](EasterFingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### EasterFingerTrace() {#m-cuttheropedx-gamemain-fingertraces-easterfingertrace-ctor}

```csharp
public EasterFingerTrace()
```

Initializes an Easter finger trace.

## Methods

### GetRibbonColor(float t) {#m-cuttheropedx-gamemain-fingertraces-easterfingertrace-getribboncolor-system-single}

```csharp
protected override RGBAColor GetRibbonColor(float t)
```

Gets the ribbon color for the normalized position `t` along the strip.

Parameters:

- `t`: The normalized ribbon position in the range `[0, 1]`.

Returns: The ribbon color at `t`.


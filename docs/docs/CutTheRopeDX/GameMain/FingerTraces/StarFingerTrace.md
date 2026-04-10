---
title: Class StarFingerTrace
description: CTR2-style star finger trace with a rainbow ribbon and colorful star particles.
---

# Class StarFingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `StarFingerTrace.cs`

CTR2-style star finger trace with a rainbow ribbon and colorful star particles.

## Declaration

```csharp
internal sealed class StarFingerTrace : RibbonFingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [ParticleFingerTrace](ParticleFingerTrace.md)
- [RibbonFingerTrace](RibbonFingerTrace.md)
- [StarFingerTrace](StarFingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### StarFingerTrace() {#m-cuttheropedx-gamemain-fingertraces-starfingertrace-ctor}

```csharp
public StarFingerTrace()
```

Initializes a star finger trace.

## Methods

### GetRibbonColor(float t) {#m-cuttheropedx-gamemain-fingertraces-starfingertrace-getribboncolor-system-single}

```csharp
protected override RGBAColor GetRibbonColor(float t)
```

Gets the ribbon color for the normalized position `t` along the strip.

Parameters:

- `t`: The normalized ribbon position in the range `[0, 1]`.

Returns: The ribbon color at `t`.


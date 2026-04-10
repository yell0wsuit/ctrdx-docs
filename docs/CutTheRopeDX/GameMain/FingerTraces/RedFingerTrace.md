---
title: Class RedFingerTrace
description: CTR2-style (PRODUCT)RED finger trace with dual particle layers (glow + core) and a warm-toned ribbon.
---

# Class RedFingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `RedFingerTrace.cs`

CTR2-style (PRODUCT)RED finger trace with dual particle layers (glow + core) and a warm-toned ribbon.

## Declaration

```csharp
internal sealed class RedFingerTrace : RibbonFingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [ParticleFingerTrace](ParticleFingerTrace.md)
- [RibbonFingerTrace](RibbonFingerTrace.md)
- [RedFingerTrace](RedFingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### RedFingerTrace() {#m-cuttheropedx-gamemain-fingertraces-redfingertrace-ctor}

```csharp
public RedFingerTrace()
```

Initializes a red finger trace.

## Methods

### GetRibbonColor(float t) {#m-cuttheropedx-gamemain-fingertraces-redfingertrace-getribboncolor-system-single}

```csharp
protected override RGBAColor GetRibbonColor(float t)
```

Gets the ribbon color for the normalized position `t` along the strip.

Parameters:

- `t`: The normalized ribbon position in the range `[0, 1]`.

Returns: The ribbon color at `t`.


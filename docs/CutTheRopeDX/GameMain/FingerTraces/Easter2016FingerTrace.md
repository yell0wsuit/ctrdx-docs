---
title: Class Easter2016FingerTrace
description: CTR2-style Easter 2016 finger trace with a golden ribbon, glow overlay, and festive particles.
---

# Class Easter2016FingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `Easter2016FingerTrace.cs`

CTR2-style Easter 2016 finger trace with a golden ribbon, glow overlay, and festive particles.

## Declaration

```csharp
internal sealed class Easter2016FingerTrace : RibbonFingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [ParticleFingerTrace](ParticleFingerTrace.md)
- [RibbonFingerTrace](RibbonFingerTrace.md)
- [Easter2016FingerTrace](Easter2016FingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### Easter2016FingerTrace() {#m-cuttheropedx-gamemain-fingertraces-easter2016fingertrace-ctor}

```csharp
public Easter2016FingerTrace()
```

Initializes an Easter 2016 finger trace.

## Methods

### GetRibbonColor(float t) {#m-cuttheropedx-gamemain-fingertraces-easter2016fingertrace-getribboncolor-system-single}

```csharp
protected override RGBAColor GetRibbonColor(float t)
```

Gets the ribbon color for the normalized position `t` along the strip.

Parameters:

- `t`: The normalized ribbon position in the range `[0, 1]`.

Returns: The ribbon color at `t`.


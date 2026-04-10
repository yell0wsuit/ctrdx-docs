---
title: Class BackToSchoolFingerTrace
description: CTR2-style back-to-school finger trace with a golden ribbon, glow overlay, and school-themed particles.
---

# Class BackToSchoolFingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `BackToSchoolFingerTrace.cs`

CTR2-style back-to-school finger trace with a golden ribbon, glow overlay, and school-themed particles.

## Declaration

```csharp
internal sealed class BackToSchoolFingerTrace : RibbonFingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [ParticleFingerTrace](ParticleFingerTrace.md)
- [RibbonFingerTrace](RibbonFingerTrace.md)
- [BackToSchoolFingerTrace](BackToSchoolFingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### BackToSchoolFingerTrace() {#m-cuttheropedx-gamemain-fingertraces-backtoschoolfingertrace-ctor}

```csharp
public BackToSchoolFingerTrace()
```

Initializes a back-to-school finger trace.

## Methods

### GetRibbonColor(float t) {#m-cuttheropedx-gamemain-fingertraces-backtoschoolfingertrace-getribboncolor-system-single}

```csharp
protected override RGBAColor GetRibbonColor(float t)
```

Gets the ribbon color for the normalized position `t` along the strip.

Parameters:

- `t`: The normalized ribbon position in the range `[0, 1]`.

Returns: The ribbon color at `t`.


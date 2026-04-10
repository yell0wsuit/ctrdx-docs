---
title: Class OmnomBirthdayFingerTrace
description: CTR2-style Om Nom birthday finger trace with a golden ribbon, glow overlay, and party-themed particles.
---

# Class OmnomBirthdayFingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `OmnomBirthdayFingerTrace.cs`

CTR2-style Om Nom birthday finger trace with a golden ribbon, glow overlay, and party-themed particles.

## Declaration

```csharp
internal sealed class OmnomBirthdayFingerTrace : RibbonFingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [ParticleFingerTrace](ParticleFingerTrace.md)
- [RibbonFingerTrace](RibbonFingerTrace.md)
- [OmnomBirthdayFingerTrace](OmnomBirthdayFingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### OmnomBirthdayFingerTrace() {#m-cuttheropedx-gamemain-fingertraces-omnombirthdayfingertrace-ctor}

```csharp
public OmnomBirthdayFingerTrace()
```

Initializes an Om Nom birthday finger trace.

## Methods

### GetRibbonColor(float t) {#m-cuttheropedx-gamemain-fingertraces-omnombirthdayfingertrace-getribboncolor-system-single}

```csharp
protected override RGBAColor GetRibbonColor(float t)
```

Gets the ribbon color for the normalized position `t` along the strip.

Parameters:

- `t`: The normalized ribbon position in the range `[0, 1]`.

Returns: The ribbon color at `t`.


---
title: Class AlphabetFingerTrace
description: CTR2-style alphabet finger trace with a golden ribbon, glow overlay, and letter particles.
---

# Class AlphabetFingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `AlphabetFingerTrace.cs`

CTR2-style alphabet finger trace with a golden ribbon, glow overlay, and letter particles.

## Declaration

```csharp
internal sealed class AlphabetFingerTrace : RibbonFingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [ParticleFingerTrace](ParticleFingerTrace.md)
- [RibbonFingerTrace](RibbonFingerTrace.md)
- [AlphabetFingerTrace](AlphabetFingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### AlphabetFingerTrace() {#m-cuttheropedx-gamemain-fingertraces-alphabetfingertrace-ctor}

```csharp
public AlphabetFingerTrace()
```

Initializes an alphabet finger trace.

## Methods

### GetRibbonColor(float t) {#m-cuttheropedx-gamemain-fingertraces-alphabetfingertrace-getribboncolor-system-single}

```csharp
protected override RGBAColor GetRibbonColor(float t)
```

Gets the ribbon color for the normalized position `t` along the strip.

Parameters:

- `t`: The normalized ribbon position in the range `[0, 1]`.

Returns: The ribbon color at `t`.


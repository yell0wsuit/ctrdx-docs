---
title: Class ScalableMultiParticles
description: A MultiParticles variant that uses the raw quad size without the particle size multiplier.
---

# Class ScalableMultiParticles

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `ScalableMultiParticles.cs`

A [MultiParticles](MultiParticles.md) variant that uses the raw quad size without the particle size multiplier.

## Declaration

```csharp
internal class ScalableMultiParticles : MultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Particles](Particles.md)
- [MultiParticles](MultiParticles.md)
- [ScalableMultiParticles](ScalableMultiParticles.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [RotatableScalableMultiParticles](RotatableScalableMultiParticles.md)

## Methods

### InitParticle(ref Particle particle) {#m-cuttheropedx-framework-visual-scalablemultiparticles-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.


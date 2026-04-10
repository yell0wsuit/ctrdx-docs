---
title: Class RocketSparks
description: Particle system that emits small spark particles from the rocket's exhaust. Particles are randomly selected from quad indices 6–9 of the rocket sprite sheet.
---

# Class RocketSparks

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `RocketSparks.cs`

Particle system that emits small spark particles from the rocket's exhaust. Particles are randomly selected from quad indices 6–9 of the rocket sprite sheet.

## Declaration

```csharp
internal class RocketSparks : RotatableScalableMultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Particles](../Framework/Visual/Particles.md)
- [MultiParticles](../Framework/Visual/MultiParticles.md)
- [ScalableMultiParticles](../Framework/Visual/ScalableMultiParticles.md)
- [RotatableScalableMultiParticles](../Framework/Visual/RotatableScalableMultiParticles.md)
- [RocketSparks](RocketSparks.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [RocketClouds](RocketClouds.md)

## Methods

### InitParticle(ref Particle particle) {#m-cuttheropedx-gamemain-rocketsparks-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### InitWithTotalParticlesAngleandImageGrid(int p, float a, Image grid) {#m-cuttheropedx-gamemain-rocketsparks-initwithtotalparticlesangleandimagegrid-system-int32-system-single-cuttheropedx-framework-visual-image}

```csharp
public virtual Particles InitWithTotalParticlesAngleandImageGrid(int p, float a, Image grid)
```

Initializes the spark particle system with the given particle count, emission angle, and image grid. Configures particle lifetime, speed, color fade, and additive blending.

Parameters:

- `p`: The maximum number of particles.
- `a`: The base emission angle in radians.
- `grid`: The image grid containing spark particle quads.

Returns: This instance if initialization succeeds; otherwise, `null`.


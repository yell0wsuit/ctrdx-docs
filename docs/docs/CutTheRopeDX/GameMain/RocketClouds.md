---
title: Class RocketClouds
description: Particle system that emits cloud/smoke particles from the rocket's exhaust. Extends RocketSparks with wider position variance, shorter lifetime, and uses quad index 5 for a cloud-like appearance.
---

# Class RocketClouds

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `RocketClouds.cs`

Particle system that emits cloud/smoke particles from the rocket's exhaust. Extends [RocketSparks](RocketSparks.md) with wider position variance, shorter lifetime, and uses quad index 5 for a cloud-like appearance.

## Declaration

```csharp
internal sealed class RocketClouds : RocketSparks
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
- [RocketClouds](RocketClouds.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Methods

### InitParticle(ref Particle particle) {#m-cuttheropedx-gamemain-rocketclouds-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### InitWithTotalParticlesAngleandImageGrid(int p, float a, Image grid) {#m-cuttheropedx-gamemain-rocketclouds-initwithtotalparticlesangleandimagegrid-system-int32-system-single-cuttheropedx-framework-visual-image}

```csharp
public override Particles InitWithTotalParticlesAngleandImageGrid(int p, float a, Image grid)
```

Initializes the spark particle system with the given particle count, emission angle, and image grid. Configures particle lifetime, speed, color fade, and additive blending.

Parameters:

- `p`: The maximum number of particles.
- `a`: The base emission angle in radians.
- `grid`: The image grid containing spark particle quads.

Returns: This instance if initialization succeeds; otherwise, `null`.


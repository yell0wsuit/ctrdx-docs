---
title: Class WaterDrops
description: The water drops visual effect when candy drops into water
---

# Class WaterDrops

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `WaterDrops.cs`

The water drops visual effect when candy drops into water

## Declaration

```csharp
internal sealed class WaterDrops : RotateableMultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Particles](../Framework/Visual/Particles.md)
- [MultiParticles](../Framework/Visual/MultiParticles.md)
- [RotateableMultiParticles](../Framework/Visual/RotateableMultiParticles.md)
- [WaterDrops](WaterDrops.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Methods

### InitParticle(ref Particle particle) {#m-cuttheropedx-gamemain-waterdrops-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### InitWithTotalParticlesandImageGrid(int p, Image grid) {#m-cuttheropedx-gamemain-waterdrops-initwithtotalparticlesandimagegrid-system-int32-cuttheropedx-framework-visual-image}

```csharp
public override Particles InitWithTotalParticlesandImageGrid(int p, Image grid)
```

Initializes the particle system with a texture atlas for quad-based rendering.

Returns: The initialized particle system instance, or `null` when allocation fails.


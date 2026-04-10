---
title: Class RotateableMultiParticles
description: A MultiParticles variant that adds per-particle rotation.
---

# Class RotateableMultiParticles

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `RotateableMultiParticles.cs`

A [MultiParticles](MultiParticles.md) variant that adds per-particle rotation.

## Declaration

```csharp
internal class RotateableMultiParticles : MultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Particles](Particles.md)
- [MultiParticles](MultiParticles.md)
- [RotateableMultiParticles](RotateableMultiParticles.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [CandyBreak](../../GameMain/CandyBreak.md)
- [GhostMorphingParticles](../../GameMain/GhostMorphingParticles.md)
- [LeafParticles](../../GameMain/LeafParticles.md)
- [StarsBreak](../../GameMain/StarsBreak.md)
- [WaterDrops](../../GameMain/WaterDrops.md)

## Fields

### rotateSpeed {#f-cuttheropedx-framework-visual-rotateablemultiparticles-rotatespeed}

```csharp
public float rotateSpeed
```

Rotation speed in degrees per second.

### rotateSpeedVar {#f-cuttheropedx-framework-visual-rotateablemultiparticles-rotatespeedvar}

```csharp
public float rotateSpeedVar
```

Rotation speed variance in degrees per second.

## Methods

### InitParticle(ref Particle particle) {#m-cuttheropedx-framework-visual-rotateablemultiparticles-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### Update(float delta) {#m-cuttheropedx-framework-visual-rotateablemultiparticles-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateParticle(ref Particle p, float delta) {#m-cuttheropedx-framework-visual-rotateablemultiparticles-updateparticle-cuttheropedx-framework-visual-particle-system-single}

```csharp
public override void UpdateParticle(ref Particle p, float delta)
```

Updates a single particle's physics, color, and lifetime. Removes it if dead.

Parameters:

- `p`: Particle to update.
- `delta`: Elapsed time in seconds.


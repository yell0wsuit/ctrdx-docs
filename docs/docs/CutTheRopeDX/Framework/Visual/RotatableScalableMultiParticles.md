---
title: Class RotatableScalableMultiParticles
description: A ScalableMultiParticles variant that adds per-particle rotation and size scaling over lifetime.
---

# Class RotatableScalableMultiParticles

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `RotatableScalableMultiParticles.cs`

A [ScalableMultiParticles](ScalableMultiParticles.md) variant that adds per-particle rotation and size scaling over lifetime.

## Declaration

```csharp
internal class RotatableScalableMultiParticles : ScalableMultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Particles](Particles.md)
- [MultiParticles](MultiParticles.md)
- [ScalableMultiParticles](ScalableMultiParticles.md)
- [RotatableScalableMultiParticles](RotatableScalableMultiParticles.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [RocketSparks](../../GameMain/RocketSparks.md)

## Fields

### endSize {#f-cuttheropedx-framework-visual-rotatablescalablemultiparticles-endsize}

```csharp
public float endSize
```

Target size at end of particle lifetime.

### initialAngle {#f-cuttheropedx-framework-visual-rotatablescalablemultiparticles-initialangle}

```csharp
public float initialAngle
```

Initial rotation angle for new particles in radians.

## Methods

### InitParticle(ref Particle particle) {#m-cuttheropedx-framework-visual-rotatablescalablemultiparticles-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### Update(float delta) {#m-cuttheropedx-framework-visual-rotatablescalablemultiparticles-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateParticle(ref Particle p, float delta) {#m-cuttheropedx-framework-visual-rotatablescalablemultiparticles-updateparticle-cuttheropedx-framework-visual-particle-system-single}

```csharp
public override void UpdateParticle(ref Particle p, float delta)
```

Updates a single particle's physics, color, and lifetime. Removes it if dead.

Parameters:

- `p`: Particle to update.
- `delta`: Elapsed time in seconds.


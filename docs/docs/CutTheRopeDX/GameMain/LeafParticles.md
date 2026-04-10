---
title: Class LeafParticles
description: Rotatable debris particle system used for bamboo tube exit effects.
---

# Class LeafParticles

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `LeafParticles.cs`

Rotatable debris particle system used for bamboo tube exit effects.

## Declaration

```csharp
internal sealed class LeafParticles : RotateableMultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Particles](../Framework/Visual/Particles.md)
- [MultiParticles](../Framework/Visual/MultiParticles.md)
- [RotateableMultiParticles](../Framework/Visual/RotateableMultiParticles.md)
- [LeafParticles](LeafParticles.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### baseGravityX {#f-cuttheropedx-gamemain-leafparticles-basegravityx}

```csharp
private float baseGravityX
```

Absolute value of the initial horizontal gravity bias, used to compute the decay rate per frame.

## Methods

### Init(int totalParticles, float angle, Image grid, float bgx = 0) {#m-cuttheropedx-gamemain-leafparticles-init-system-int32-system-single-cuttheropedx-framework-visual-image-system-single}

```csharp
public LeafParticles Init(int totalParticles, float angle, Image grid, float bgx = 0)
```

Initialises the particle system.

Parameters:

- `totalParticles`: Maximum live particle count.
- `angle`: Emission direction in degrees.
- `grid`: Texture atlas containing the debris quad at index 3.
- `bgx`: Optional horizontal gravity bias. The magnitude is stored in `baseGravityX` and is smoothly reduced to zero over the system lifetime by [Update](#m-cuttheropedx-gamemain-leafparticles-update-system-single).

Returns: The initialized particle system instance, or `null` if initialization fails.

### InitParticle(ref Particle particle) {#m-cuttheropedx-gamemain-leafparticles-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### Update(float delta) {#m-cuttheropedx-gamemain-leafparticles-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


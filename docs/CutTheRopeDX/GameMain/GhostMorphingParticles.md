---
title: Class GhostMorphingParticles
description: Rotating particle effect used around a ghost while it morphs between states.
---

# Class GhostMorphingParticles

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `GhostMorphingParticles.cs`

Rotating particle effect used around a ghost while it morphs between states.

## Declaration

```csharp
internal sealed class GhostMorphingParticles : RotateableMultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Particles](../Framework/Visual/Particles.md)
- [MultiParticles](../Framework/Visual/MultiParticles.md)
- [RotateableMultiParticles](../Framework/Visual/RotateableMultiParticles.md)
- [GhostMorphingParticles](GhostMorphingParticles.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Methods

### InitParticle(ref Particle particle) {#m-cuttheropedx-gamemain-ghostmorphingparticles-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### InitWithTotalParticles(int numberOfParticles) {#m-cuttheropedx-gamemain-ghostmorphingparticles-initwithtotalparticles-system-int32}

```csharp
public override GhostMorphingParticles InitWithTotalParticles(int numberOfParticles)
```

Initializes the particle system with the specified capacity.

Parameters:

- `numberOfParticles`: Maximum number of particles.

Returns: The initialized particle system, or `null` if allocation fails.

### Update(float delta) {#m-cuttheropedx-gamemain-ghostmorphingparticles-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


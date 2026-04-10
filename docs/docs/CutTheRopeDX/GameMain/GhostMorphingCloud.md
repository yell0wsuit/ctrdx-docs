---
title: Class GhostMorphingCloud
description: Particle effect used when a ghost morphs between visual states.
---

# Class GhostMorphingCloud

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `GhostMorphingCloud.cs`

Particle effect used when a ghost morphs between visual states.

## Declaration

```csharp
internal sealed class GhostMorphingCloud : MultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Particles](../Framework/Visual/Particles.md)
- [MultiParticles](../Framework/Visual/MultiParticles.md)
- [GhostMorphingCloud](GhostMorphingCloud.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Methods

### Init() {#m-cuttheropedx-gamemain-ghostmorphingcloud-init}

```csharp
public GhostMorphingCloud Init()
```

Initializes the ghost morphing cloud particle system with its texture and default emission settings.

Returns: The initialized ghost morphing cloud.

### InitParticle(ref Particle particle) {#m-cuttheropedx-gamemain-ghostmorphingcloud-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### StartSystem() {#m-cuttheropedx-gamemain-ghostmorphingcloud-startsystem}

```csharp
public void StartSystem()
```

Starts the ghost morphing cloud using its default particle count.

### Update(float delta) {#m-cuttheropedx-gamemain-ghostmorphingcloud-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


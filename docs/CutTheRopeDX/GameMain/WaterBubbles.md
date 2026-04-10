---
title: Class WaterBubbles
description: The water bubble visual effects
---

# Class WaterBubbles

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `WaterBubbles.cs`

The water bubble visual effects

## Declaration

```csharp
internal sealed class WaterBubbles : MultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Particles](../Framework/Visual/Particles.md)
- [MultiParticles](../Framework/Visual/MultiParticles.md)
- [WaterBubbles](WaterBubbles.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### endSize {#f-cuttheropedx-gamemain-waterbubbles-endsize}

```csharp
private float endSize
```

Final bubble particle size.

### s_bubbleQuads {#f-cuttheropedx-gamemain-waterbubbles-s-bubblequads}

```csharp
private static readonly int[] s_bubbleQuads
```

Bubble quad indexes used when initializing particles.

### startSize {#f-cuttheropedx-gamemain-waterbubbles-startsize}

```csharp
private float startSize
```

Initial bubble particle size.

## Methods

### InitParticle(ref Particle particle) {#m-cuttheropedx-gamemain-waterbubbles-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### InitWithTotalParticlesandImageGrid(int p, Image grid) {#m-cuttheropedx-gamemain-waterbubbles-initwithtotalparticlesandimagegrid-system-int32-cuttheropedx-framework-visual-image}

```csharp
public override Particles InitWithTotalParticlesandImageGrid(int p, Image grid)
```

Initializes the particle system with a texture atlas for quad-based rendering.

Returns: The initialized particle system instance, or `null` when allocation fails.

### Update(float delta) {#m-cuttheropedx-gamemain-waterbubbles-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


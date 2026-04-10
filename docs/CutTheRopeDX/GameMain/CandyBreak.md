---
title: Class CandyBreak
description: Particle effect that breaks the candy into spinning fragments when it is destroyed.
---

# Class CandyBreak

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CandyBreak.cs`

Particle effect that breaks the candy into spinning fragments when it is destroyed.

## Declaration

```csharp
internal sealed class CandyBreak : RotateableMultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Particles](../Framework/Visual/Particles.md)
- [MultiParticles](../Framework/Visual/MultiParticles.md)
- [RotateableMultiParticles](../Framework/Visual/RotateableMultiParticles.md)
- [CandyBreak](CandyBreak.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### verticesCache {#f-cuttheropedx-gamemain-candybreak-verticescache}

```csharp
private VertexPositionNormalTexture[] verticesCache
```

Cached vertex array reused across draw calls to avoid per-frame allocation.

## Methods

### Draw() {#m-cuttheropedx-gamemain-candybreak-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### GetVertexBuffer(int vertexCount) {#m-cuttheropedx-gamemain-candybreak-getvertexbuffer-system-int32}

```csharp
private VertexPositionNormalTexture[] GetVertexBuffer(int vertexCount)
```

Returns a cached vertex array, reallocating if the cache is too small.

Parameters:

- `vertexCount`: Minimum required capacity.

Returns: The cached or newly allocated array.

### InitParticle(ref Particle particle) {#m-cuttheropedx-gamemain-candybreak-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### InitWithTotalParticlesandImageGrid(int p, Image grid) {#m-cuttheropedx-gamemain-candybreak-initwithtotalparticlesandimagegrid-system-int32-cuttheropedx-framework-visual-image}

```csharp
public override Particles InitWithTotalParticlesandImageGrid(int p, Image grid)
```

Initializes the particle system with a texture atlas for quad-based rendering.

Returns: The initialized particle system instance, or `null` when allocation fails.


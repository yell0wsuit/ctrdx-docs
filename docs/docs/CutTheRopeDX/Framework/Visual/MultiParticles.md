---
title: Class MultiParticles
description: A Particles system that renders each particle as a textured quad via an ImageMultiDrawer.
---

# Class MultiParticles

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `MultiParticles.cs`

A [Particles](Particles.md) system that renders each particle as a textured quad via an [ImageMultiDrawer](ImageMultiDrawer.md).

## Declaration

```csharp
internal class MultiParticles : Particles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Particles](Particles.md)
- [MultiParticles](MultiParticles.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [GhostMorphingCloud](../../GameMain/GhostMorphingCloud.md)
- [PumpDirt](../../GameMain/PumpDirt.md)
- [RotateableMultiParticles](RotateableMultiParticles.md)
- [ScalableMultiParticles](ScalableMultiParticles.md)
- [WaterBubbles](../../GameMain/WaterBubbles.md)

## Fields

### drawer {#f-cuttheropedx-framework-visual-multiparticles-drawer}

```csharp
public ImageMultiDrawer drawer
```

Multi-drawer used to batch-render particle quads.

### imageGrid {#f-cuttheropedx-framework-visual-multiparticles-imagegrid}

```csharp
public Image imageGrid
```

Image containing the particle texture atlas.

### verticesCache {#f-cuttheropedx-framework-visual-multiparticles-verticescache}

```csharp
private VertexPositionColorTexture[] verticesCache
```

Cached vertex buffer for colored textured rendering.

## Methods

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-multiparticles-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-framework-visual-multiparticles-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### GetVertexBuffer(int vertexCount) {#m-cuttheropedx-framework-visual-multiparticles-getvertexbuffer-system-int32}

```csharp
private VertexPositionColorTexture[] GetVertexBuffer(int vertexCount)
```

Returns a vertex buffer of at least `vertexCount` elements, reusing the cache.

Parameters:

- `vertexCount`: Minimum number of vertices needed.

Returns: A reusable vertex buffer with at least the requested capacity.

### InitParticle(ref Particle particle) {#m-cuttheropedx-framework-visual-multiparticles-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### InitWithTotalParticlesandImageGrid(int numberOfParticles, Image image) {#m-cuttheropedx-framework-visual-multiparticles-initwithtotalparticlesandimagegrid-system-int32-cuttheropedx-framework-visual-image}

```csharp
public virtual Particles InitWithTotalParticlesandImageGrid(int numberOfParticles, Image image)
```

Initializes the particle system with a texture atlas for quad-based rendering.

Parameters:

- `numberOfParticles`: Maximum number of particles.
- `image`: Image containing the particle texture quads.

Returns: The initialized particle system instance, or `null` when allocation fails.

### Update(float delta) {#m-cuttheropedx-framework-visual-multiparticles-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateParticle(ref Particle p, float delta) {#m-cuttheropedx-framework-visual-multiparticles-updateparticle-cuttheropedx-framework-visual-particle-system-single}

```csharp
public override void UpdateParticle(ref Particle p, float delta)
```

Updates a single particle's physics, color, and lifetime. Removes it if dead.

Parameters:

- `p`: Particle to update.
- `delta`: Elapsed time in seconds.


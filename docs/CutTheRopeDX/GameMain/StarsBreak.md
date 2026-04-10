---
title: Class StarsBreak
description: Particle effect used for the star break burst.
---

# Class StarsBreak

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `StarsBreak.cs`

Particle effect used for the star break burst.

## Declaration

```csharp
internal sealed class StarsBreak : RotateableMultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Particles](../Framework/Visual/Particles.md)
- [MultiParticles](../Framework/Visual/MultiParticles.md)
- [RotateableMultiParticles](../Framework/Visual/RotateableMultiParticles.md)
- [StarsBreak](StarsBreak.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Remarks

Unused in the game.

## Fields

### verticesCache {#f-cuttheropedx-gamemain-starsbreak-verticescache}

```csharp
private VertexPositionColorTexture[] verticesCache
```

Reusable vertex buffer for drawing the active particle quads.

## Methods

### Draw() {#m-cuttheropedx-gamemain-starsbreak-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### GetVertexBuffer(int vertexCount) {#m-cuttheropedx-gamemain-starsbreak-getvertexbuffer-system-int32}

```csharp
private VertexPositionColorTexture[] GetVertexBuffer(int vertexCount)
```

Gets a reusable vertex buffer with at least the requested capacity.

Parameters:

- `vertexCount`: Minimum number of vertices required.

Returns: A vertex buffer with at least `vertexCount` entries.

### InitWithTotalParticlesandImageGrid(int p, Image grid) {#m-cuttheropedx-gamemain-starsbreak-initwithtotalparticlesandimagegrid-system-int32-cuttheropedx-framework-visual-image}

```csharp
public override Particles InitWithTotalParticlesandImageGrid(int p, Image grid)
```

Initializes the particle system with a texture atlas for quad-based rendering.

Returns: The initialized particle system instance, or `null` when allocation fails.


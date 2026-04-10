---
title: Class PollenDrawer
description: Batches and animates pollen particles along bee movement paths.
---

# Class PollenDrawer

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `PollenDrawer.cs`

Batches and animates pollen particles along bee movement paths.

## Declaration

```csharp
internal sealed class PollenDrawer : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [PollenDrawer](PollenDrawer.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### PollenDrawer() {#m-cuttheropedx-gamemain-pollendrawer-ctor}

```csharp
public PollenDrawer()
```

Initializes the pollen drawer, source sprite, particle storage, and color buffers.

## Fields

### PollenQuad {#f-cuttheropedx-gamemain-pollendrawer-pollenquad}

```csharp
private const int PollenQuad
```

Quad index for the pollen sprite in the bee texture.

### colors {#f-cuttheropedx-gamemain-pollendrawer-colors}

```csharp
private RGBAColor[] colors
```

Per-vertex colors used for pollen particle rendering.

### drawer {#f-cuttheropedx-gamemain-pollendrawer-drawer}

```csharp
private ImageMultiDrawer drawer
```

Drawer that owns shared image, texture coordinates, vertex, and index data.

### pollenCount {#f-cuttheropedx-gamemain-pollendrawer-pollencount}

```csharp
private int pollenCount
```

Number of active pollen particles.

### pollens {#f-cuttheropedx-gamemain-pollendrawer-pollens}

```csharp
private Pollen[] pollens
```

Particle state array.

### qh {#f-cuttheropedx-gamemain-pollendrawer-qh}

```csharp
private readonly float qh
```

Base pollen quad height before per-particle scaling.

### qw {#f-cuttheropedx-gamemain-pollendrawer-qw}

```csharp
private readonly float qw
```

Base pollen quad width before per-particle scaling.

### totalCapacity {#f-cuttheropedx-gamemain-pollendrawer-totalcapacity}

```csharp
private int totalCapacity
```

Current storage capacity for pollen particles.

### verticesCache {#f-cuttheropedx-gamemain-pollendrawer-verticescache}

```csharp
private VertexPositionColorTexture[] verticesCache
```

Reusable vertex buffer used for pollen draw calls.

## Methods

### AddPollenAtparentIndex(Vector v, int pi) {#m-cuttheropedx-gamemain-pollendrawer-addpollenatparentindex-cuttheropedx-framework-core-vector-system-int32}

```csharp
public void AddPollenAtparentIndex(Vector v, int pi)
```

Adds one pollen particle at a world position.

Parameters:

- `v`: World-space particle position.
- `pi`: Path point index that owns or originated the particle.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-pollendrawer-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-gamemain-pollendrawer-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### FillWithPolenFromPathIndexToPathIndexGrab(int p1, int p2, Grab g) {#m-cuttheropedx-gamemain-pollendrawer-fillwithpolenfrompathindextopathindexgrab-system-int32-system-int32-cuttheropedx-gamemain-grab}

```csharp
public void FillWithPolenFromPathIndexToPathIndexGrab(int p1, int p2, Grab g)
```

Fills a mover path segment with pollen particles.

Parameters:

- `p1`: Starting mover path point index.
- `p2`: Ending mover path point index.
- `g`: Grab whose mover path supplies the particle segment.

### GetVertexBuffer(int vertexCount) {#m-cuttheropedx-gamemain-pollendrawer-getvertexbuffer-system-int32}

```csharp
private VertexPositionColorTexture[] GetVertexBuffer(int vertexCount)
```

Gets a reusable vertex buffer with at least the requested capacity.

Parameters:

- `vertexCount`: Minimum vertex count required.

Returns: A reusable vertex buffer.

### Update(float delta) {#m-cuttheropedx-gamemain-pollendrawer-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


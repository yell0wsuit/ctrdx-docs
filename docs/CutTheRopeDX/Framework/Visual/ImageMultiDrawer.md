---
title: Class ImageMultiDrawer
description: A BaseElement that batch-draws multiple textured quads from a single Image.
---

# Class ImageMultiDrawer

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `ImageMultiDrawer.cs`

A [BaseElement](BaseElement.md) that batch-draws multiple textured quads from a single [Image](Image.md).

## Declaration

```csharp
internal sealed class ImageMultiDrawer : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [ImageMultiDrawer](ImageMultiDrawer.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### image {#f-cuttheropedx-framework-visual-imagemultidrawer-image}

```csharp
public Image image
```

Source image containing the texture atlas.

### indices {#f-cuttheropedx-framework-visual-imagemultidrawer-indices}

```csharp
public short[] indices
```

Triangle-list index buffer.

### numberOfQuadsToDraw {#f-cuttheropedx-framework-visual-imagemultidrawer-numberofquadstodraw}

```csharp
public int numberOfQuadsToDraw
```

Number of quads to draw, or -1 to draw all.

### texCoordinates {#f-cuttheropedx-framework-visual-imagemultidrawer-texcoordinates}

```csharp
public Quad2D[] texCoordinates
```

Texture coordinate quads for each slot.

### totalQuads {#f-cuttheropedx-framework-visual-imagemultidrawer-totalquads}

```csharp
public int totalQuads
```

Total number of allocated quad slots.

### vertices {#f-cuttheropedx-framework-visual-imagemultidrawer-vertices}

```csharp
public Quad3D[] vertices
```

Vertex position quads for each slot.

### verticesCache {#f-cuttheropedx-framework-visual-imagemultidrawer-verticescache}

```csharp
private VertexPositionNormalTexture[] verticesCache
```

Cached vertex buffer for non-optimized drawing.

### verticesOptimized {#f-cuttheropedx-framework-visual-imagemultidrawer-verticesoptimized}

```csharp
private VertexPositionNormalTexture[] verticesOptimized
```

Pre-built optimized vertex array, or `null`.

## Methods

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-imagemultidrawer-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-framework-visual-imagemultidrawer-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### DrawAllQuads() {#m-cuttheropedx-framework-visual-imagemultidrawer-drawallquads}

```csharp
public void DrawAllQuads()
```

Draws all quads, using the optimized vertex array if available.

### DrawNumberOfQuads(int n) {#m-cuttheropedx-framework-visual-imagemultidrawer-drawnumberofquads-system-int32}

```csharp
private void DrawNumberOfQuads(int n)
```

Draws the specified number of quads using indexed triangle lists.

Parameters:

- `n`: Number of quads to draw.

### FreeWithCheck() {#m-cuttheropedx-framework-visual-imagemultidrawer-freewithcheck}

```csharp
private void FreeWithCheck()
```

Releases the quad arrays.

### GetVertexBuffer(int vertexCount) {#m-cuttheropedx-framework-visual-imagemultidrawer-getvertexbuffer-system-int32}

```csharp
private VertexPositionNormalTexture[] GetVertexBuffer(int vertexCount)
```

Returns a vertex buffer of at least `vertexCount` elements, reusing the cache.

Parameters:

- `vertexCount`: Minimum number of vertices needed.

Returns: A reusable vertex buffer with at least the requested capacity.

### InitIndices() {#m-cuttheropedx-framework-visual-imagemultidrawer-initindices}

```csharp
private void InitIndices()
```

Fills the index buffer with triangle-list indices for all quads.

### InitWithImageandCapacity(Image i, int n) {#m-cuttheropedx-framework-visual-imagemultidrawer-initwithimageandcapacity-cuttheropedx-framework-visual-image-system-int32}

```csharp
public ImageMultiDrawer InitWithImageandCapacity(Image i, int n)
```

Initializes the multi-drawer with an image and initial quad capacity.

Parameters:

- `i`: Source image containing the texture.
- `n`: Initial number of quads to allocate.

Returns: The initialized drawer instance.

### MapTextureQuadAtXYatIndex(int q, float dx, float dy, int n) {#m-cuttheropedx-framework-visual-imagemultidrawer-maptexturequadatxyatindex-system-int32-system-single-system-single-system-int32}

```csharp
public void MapTextureQuadAtXYatIndex(int q, float dx, float dy, int n)
```

Maps a texture quad from the image at the specified position and index.

Parameters:

- `q`: Quad index within the source texture.
- `dx`: X draw offset.
- `dy`: Y draw offset.
- `n`: Destination quad index in this drawer.

### Optimize(VertexPositionNormalTexture[] v) {#m-cuttheropedx-framework-visual-imagemultidrawer-optimize-microsoft-xna-framework-graphics-vertexpositionnormaltexture}

```csharp
public void Optimize(VertexPositionNormalTexture[] v)
```

Stores a pre-built optimized vertex array for faster drawing.

Parameters:

- `v`: Optimized vertex array, or `null` to skip.

### ResizeCapacity(int n) {#m-cuttheropedx-framework-visual-imagemultidrawer-resizecapacity-system-int32}

```csharp
private void ResizeCapacity(int n)
```

Resizes all quad arrays to the new capacity.

Parameters:

- `n`: New capacity.

### SetTextureQuadatVertexQuadatIndex(Quad2D qt, Quad3D qv, int n) {#m-cuttheropedx-framework-visual-imagemultidrawer-settexturequadatvertexquadatindex-cuttheropedx-framework-quad2d-cuttheropedx-framework-quad3d-system-int32}

```csharp
public void SetTextureQuadatVertexQuadatIndex(Quad2D qt, Quad3D qv, int n)
```

Sets the texture and vertex quads at the specified index, resizing if needed.

Parameters:

- `qt`: Texture coordinate quad.
- `qv`: Vertex position quad.
- `n`: Quad index.


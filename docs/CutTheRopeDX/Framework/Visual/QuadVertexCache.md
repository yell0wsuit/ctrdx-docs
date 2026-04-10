---
title: Class QuadVertexCache
description: Provides cached vertex arrays for quad rendering to eliminate per-draw allocations. Since rendering is single-threaded, we use static cached arrays.
---

# Class QuadVertexCache

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `QuadVertexCache.cs`

Provides cached vertex arrays for quad rendering to eliminate per-draw allocations. Since rendering is single-threaded, we use static cached arrays.

## Declaration

```csharp
internal static class QuadVertexCache
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [QuadVertexCache](QuadVertexCache.md)

## Fields

### s_quadVertices {#f-cuttheropedx-framework-visual-quadvertexcache-s-quadvertices}

```csharp
private static readonly VertexPositionNormalTexture[] s_quadVertices
```

Reused vertex buffer for a single textured quad.

## Methods

### GetTexturedQuad(float x, float y, float width, float height, float texLeft, float texTop, float texRight, float texBottom) {#m-cuttheropedx-framework-visual-quadvertexcache-gettexturedquad-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-single}

```csharp
public static VertexPositionNormalTexture[] GetTexturedQuad(float x, float y, float width, float height, float texLeft, float texTop, float texRight, float texBottom)
```

Fills the cached quad vertex array with position and texture coordinate data. Uses 2D positions (Z=0) - suitable for Image and UI rendering.

Parameters:

- `x`: Left X position
- `y`: Top Y position
- `width`: Quad width
- `height`: Quad height
- `texLeft`: Left texture coordinate (U min)
- `texTop`: Top texture coordinate (V min)
- `texRight`: Right texture coordinate (U max)
- `texBottom`: Bottom texture coordinate (V max)

Returns: The cached vertex array (do not store reference - contents change on next call)

### GetTexturedQuadFromArrays(float[] positions, float[] texCoords) {#m-cuttheropedx-framework-visual-quadvertexcache-gettexturedquadfromarrays-system-single-system-single}

```csharp
public static VertexPositionNormalTexture[] GetTexturedQuadFromArrays(float[] positions, float[] texCoords)
```

Fills the cached quad vertex array from raw float arrays. Supports both 2D (8 floats) and 3D (12 floats) position arrays.

Parameters:

- `positions`: Position array - 8 floats for 2D (x,y pairs) or 12 floats for 3D (x,y,z triplets)
- `texCoords`: Texture coordinate array - 8 floats (u,v pairs for 4 vertices)

Returns: The cached vertex array (do not store reference - contents change on next call)


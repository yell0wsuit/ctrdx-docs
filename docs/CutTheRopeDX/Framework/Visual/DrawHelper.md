---
title: Class DrawHelper
description: Static utility methods for drawing textures, shapes, curves, and polygons.
---

# Class DrawHelper

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `DrawHelper.cs`

Static utility methods for drawing textures, shapes, curves, and polygons.

## Declaration

```csharp
internal sealed class DrawHelper : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [DrawHelper](DrawHelper.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### MaxBatchQuads {#f-cuttheropedx-framework-visual-drawhelper-maxbatchquads}

```csharp
private const int MaxBatchQuads
```

Maximum number of quads in a single tiled batch.

### s_antialiasedLineVerticesCache {#f-cuttheropedx-framework-visual-drawhelper-s-antialiasedlineverticescache}

```csharp
private static VertexPositionColor[] s_antialiasedLineVerticesCache
```

Cache for antialiased line vertices.

### s_coloredVerticesCache {#f-cuttheropedx-framework-visual-drawhelper-s-coloredverticescache}

```csharp
private static VertexPositionColor[] s_coloredVerticesCache
```

Cache for colored polygon/fill vertices.

### s_curveColorCache {#f-cuttheropedx-framework-visual-drawhelper-s-curvecolorcache}

```csharp
private static RGBAColor[] s_curveColorCache
```

Cache for curve vertex colors.

### s_curveInnerCache {#f-cuttheropedx-framework-visual-drawhelper-s-curveinnercache}

```csharp
private static float[] s_curveInnerCache
```

Cache for inner curve positions.

### s_curveInnerEdgeCache {#f-cuttheropedx-framework-visual-drawhelper-s-curveinneredgecache}

```csharp
private static float[] s_curveInnerEdgeCache
```

Cache for inner edge curve positions.

### s_curveInnerFadeCache {#f-cuttheropedx-framework-visual-drawhelper-s-curveinnerfadecache}

```csharp
private static float[] s_curveInnerFadeCache
```

Cache for inner fade curve positions.

### s_curveOuterCache {#f-cuttheropedx-framework-visual-drawhelper-s-curveoutercache}

```csharp
private static float[] s_curveOuterCache
```

Cache for outer curve positions.

### s_curveVerticesCache {#f-cuttheropedx-framework-visual-drawhelper-s-curveverticescache}

```csharp
private static float[] s_curveVerticesCache
```

Cache for curve strip vertex positions.

### s_lineVerticesCache {#f-cuttheropedx-framework-visual-drawhelper-s-lineverticescache}

```csharp
private static VertexPositionColor[] s_lineVerticesCache
```

Cache for line strip vertices.

### s_radialIndicesCache {#f-cuttheropedx-framework-visual-drawhelper-s-radialindicescache}

```csharp
private static short[] s_radialIndicesCache
```

Cache for radial clipped quad indices.

### s_radialVerticesCache {#f-cuttheropedx-framework-visual-drawhelper-s-radialverticescache}

```csharp
private static VertexPositionNormalTexture[] s_radialVerticesCache
```

Cache for radial clipped quad vertices.

### s_rectVertices {#f-cuttheropedx-framework-visual-drawhelper-s-rectvertices}

```csharp
private static readonly VertexPositionColor[] s_rectVertices
```

Cached vertex array for rectangle drawing.

### s_tiledIndicesCache {#f-cuttheropedx-framework-visual-drawhelper-s-tiledindicescache}

```csharp
private static short[] s_tiledIndicesCache
```

Cache for tiled draw indices.

### s_tiledVerticesCache {#f-cuttheropedx-framework-visual-drawhelper-s-tiledverticescache}

```csharp
private static VertexPositionNormalTexture[] s_tiledVerticesCache
```

Cache for tiled draw vertices.

## Methods

### BuildAntialiasedLineVertices(float x1, float y1, float x2, float y2, float size, RGBAColor color) {#m-cuttheropedx-framework-visual-drawhelper-buildantialiasedlinevertices-system-single-system-single-system-single-system-single-system-single-cuttheropedx-framework-rgbacolor}

```csharp
public static VertexPositionColor[] BuildAntialiasedLineVertices(float x1, float y1, float x2, float y2, float size, RGBAColor color)
```

Builds vertices for an antialiased line segment with fade-out edges.

Parameters:

- `x1`: Start X.
- `y1`: Start Y.
- `x2`: End X.
- `y2`: End Y.
- `size`: Half-width of the line.
- `color`: Line color.

Returns: An 8-vertex strip suitable for antialiased line rendering.

### BuildClosedLineVertices(float[] positions, int vertexCount, Color color) {#m-cuttheropedx-framework-visual-drawhelper-buildclosedlinevertices-system-single-system-int32-microsoft-xna-framework-color}

```csharp
private static VertexPositionColor[] BuildClosedLineVertices(float[] positions, int vertexCount, Color color)
```

Builds a closed line loop from `positions` with a uniform `color`.

Parameters:

- `positions`: Interleaved X/Y vertex positions.
- `vertexCount`: Number of source vertices before closing the loop.
- `color`: Uniform color for all vertices.

Returns: The cached vertex array with an extra closing vertex.

### BuildColoredVertices(float[] positions, RGBAColor[] colors, int vertexCount) {#m-cuttheropedx-framework-visual-drawhelper-buildcoloredvertices-system-single-cuttheropedx-framework-rgbacolor-system-int32}

```csharp
private static VertexPositionColor[] BuildColoredVertices(float[] positions, RGBAColor[] colors, int vertexCount)
```

Builds colored vertices from `positions` and per-vertex `colors`.

Parameters:

- `positions`: Interleaved X/Y vertex positions.
- `colors`: Per-vertex colors.
- `vertexCount`: Number of vertices to build.

Returns: The cached vertex array containing the requested vertices.

### BuildColoredVertices(float[] positions, int vertexCount, Color color) {#m-cuttheropedx-framework-visual-drawhelper-buildcoloredvertices-system-single-system-int32-microsoft-xna-framework-color}

```csharp
private static VertexPositionColor[] BuildColoredVertices(float[] positions, int vertexCount, Color color)
```

Builds colored vertices from `positions` with a uniform `color`.

Parameters:

- `positions`: Interleaved X/Y vertex positions.
- `vertexCount`: Number of vertices to build.
- `color`: Uniform color for all vertices.

Returns: The cached vertex array containing the requested vertices.

### Calc2PointBezier(ref Vector a, ref Vector b, float delta) {#m-cuttheropedx-framework-visual-drawhelper-calc2pointbezier-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-single}

```csharp
public static Vector Calc2PointBezier(ref Vector a, ref Vector b, float delta)
```

Linearly interpolates between two points at `delta`.

Parameters:

- `a`: Start point.
- `b`: End point.
- `delta`: Interpolation parameter (0–1).

Returns: The interpolated point.

### CalcCircle(float x, float y, float radius, int vertexCount, float[] glVertices) {#m-cuttheropedx-framework-visual-drawhelper-calccircle-system-single-system-single-system-single-system-int32-system-single}

```csharp
public static void CalcCircle(float x, float y, float radius, int vertexCount, float[] glVertices)
```

Computes vertices for a circle approximation.

Parameters:

- `x`: Center X.
- `y`: Center Y.
- `radius`: Circle radius.
- `vertexCount`: Number of vertices.
- `glVertices`: Output array of interleaved X/Y pairs.

### CalcCurve(float cx, float cy, float radius, float startAngle, float endAngle, int vertexCount, float[] glVertices) {#m-cuttheropedx-framework-visual-drawhelper-calccurve-system-single-system-single-system-single-system-single-system-single-system-int32-system-single}

```csharp
private static void CalcCurve(float cx, float cy, float radius, float startAngle, float endAngle, int vertexCount, float[] glVertices)
```

Computes vertices for a circular arc using an incremental rotation approach.

Parameters:

- `cx`: Center X.
- `cy`: Center Y.
- `radius`: Arc radius.
- `startAngle`: Arc start angle in radians.
- `endAngle`: Arc end angle in radians.
- `vertexCount`: Number of output vertices.
- `glVertices`: Output array of interleaved X/Y pairs.

### CalcPathBezier(Vector[] p, int count, float delta) {#m-cuttheropedx-framework-visual-drawhelper-calcpathbezier-cuttheropedx-framework-core-vector-system-int32-system-single}

```csharp
public static Vector CalcPathBezier(Vector[] p, int count, float delta)
```

Recursively evaluates a multi-point Bezier curve at `delta`.

Parameters:

- `p`: Control points.
- `count`: Number of control points.
- `delta`: Interpolation parameter (0–1).

Returns: The interpolated point on the curve.

### DrawAntialiasedCurve2(float cx, float cy, float radius, float startAngle, float endAngle, int vertexCount, float width, float fadeWidth, RGBAColor fill) {#m-cuttheropedx-framework-visual-drawhelper-drawantialiasedcurve2-system-single-system-single-system-single-system-single-system-single-system-int32-system-single-system-single-cuttheropedx-framework-rgbacolor}

```csharp
public static void DrawAntialiasedCurve2(float cx, float cy, float radius, float startAngle, float endAngle, int vertexCount, float width, float fadeWidth, RGBAColor fill)
```

Draws an antialiased arc with inner/outer fade.

Parameters:

- `cx`: Center X.
- `cy`: Center Y.
- `radius`: Arc radius.
- `startAngle`: Start angle in radians.
- `endAngle`: End angle in radians.
- `vertexCount`: Number of vertices for the arc.
- `width`: Stroke width.
- `fadeWidth`: Fade width for antialiasing.
- `fill`: Stroke color.

### DrawCircleIntersection(float cx1, float cy1, float radius1, float cx2, float cy2, float radius2, int vertexCount, float width, RGBAColor fill) {#m-cuttheropedx-framework-visual-drawhelper-drawcircleintersection-system-single-system-single-system-single-system-single-system-single-system-single-system-int32-system-single-cuttheropedx-framework-rgbacolor}

```csharp
public static void DrawCircleIntersection(float cx1, float cy1, float radius1, float cx2, float cy2, float radius2, int vertexCount, float width, RGBAColor fill)
```

Draws the arc where two circles intersect.

Parameters:

- `cx1`: Center X of the first circle.
- `cy1`: Center Y of the first circle.
- `radius1`: Radius of the first circle.
- `cx2`: Center X of the second circle.
- `cy2`: Center Y of the second circle.
- `radius2`: Radius of the second circle.
- `vertexCount`: Number of vertices for the arc.
- `width`: Line width.
- `fill`: Fill color.

### DrawImage(CTRTexture2D image, float x, float y) {#m-cuttheropedx-framework-visual-drawhelper-drawimage-cuttheropedx-framework-visual-ctrtexture2d-system-single-system-single}

```csharp
public static void DrawImage(CTRTexture2D image, float x, float y)
```

Draws the full texture at the specified position.

Parameters:

- `image`: Texture to draw.
- `x`: X position.
- `y`: Y position.

### DrawImagePart(CTRTexture2D image, CTRRectangle rect, float x, float y) {#m-cuttheropedx-framework-visual-drawhelper-drawimagepart-cuttheropedx-framework-visual-ctrtexture2d-cuttheropedx-framework-ctrrectangle-system-single-system-single}

```csharp
public static void DrawImagePart(CTRTexture2D image, CTRRectangle rect, float x, float y)
```

Draws a rectangular region of the texture at the specified position.

Parameters:

- `image`: Texture to draw from.
- `rect`: Source rectangle within the texture.
- `x`: X position.
- `y`: Y position.

### DrawImageQuad(CTRTexture2D image, int quadIndex, float x, float y) {#m-cuttheropedx-framework-visual-drawhelper-drawimagequad-cuttheropedx-framework-visual-ctrtexture2d-system-int32-system-single-system-single}

```csharp
public static void DrawImageQuad(CTRTexture2D image, int quadIndex, float x, float y)
```

Draws a specific quad from the texture, or the full `image` if `quadIndex` is -1.

Parameters:

- `image`: Texture to draw from.
- `quadIndex`: Quad index, or -1 for full image.
- `x`: X position.
- `y`: Y position.

### DrawImageTiled(CTRTexture2D image, int quadIndex, float x, float y, float width, float height) {#m-cuttheropedx-framework-visual-drawhelper-drawimagetiled-cuttheropedx-framework-visual-ctrtexture2d-system-int32-system-single-system-single-system-single-system-single}

```csharp
public static void DrawImageTiled(CTRTexture2D image, int quadIndex, float x, float y, float width, float height)
```

Draws a texture quad tiled to fill the specified area.

Parameters:

- `image`: Texture to tile.
- `quadIndex`: Quad index, or -1 for full image.
- `x`: X position.
- `y`: Y position.
- `width`: Width of the tiled area.
- `height`: Height of the tiled area.

### DrawImageTiledCool(CTRTexture2D image, int quadIndex, float x, float y, float width, float height) {#m-cuttheropedx-framework-visual-drawhelper-drawimagetiledcool-cuttheropedx-framework-visual-ctrtexture2d-system-int32-system-single-system-single-system-single-system-single}

```csharp
public static void DrawImageTiledCool(CTRTexture2D image, int quadIndex, float x, float y, float width, float height)
```

Draws a texture quad tiled to fill the specified area.

Parameters:

- `image`: Texture to tile.
- `quadIndex`: Quad index, or -1 for full image.
- `x`: X position.
- `y`: Y position.
- `width`: Width of the tiled area.
- `height`: Height of the tiled area.

### DrawImageTiledFallback(CTRTexture2D image, float texX, float texY, float tileWidth, float tileHeight, float x, float y, float width, float height) {#m-cuttheropedx-framework-visual-drawhelper-drawimagetiledfallback-cuttheropedx-framework-visual-ctrtexture2d-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-single}

```csharp
private static void DrawImageTiledFallback(CTRTexture2D image, float texX, float texY, float tileWidth, float tileHeight, float x, float y, float width, float height)
```

Fallback tiled drawing using individual draw calls per tile.

Parameters:

- `image`: Texture to tile.
- `texX`: Source X offset in texture pixels.
- `texY`: Source Y offset in texture pixels.
- `tileWidth`: Tile width in pixels.
- `tileHeight`: Tile height in pixels.
- `x`: Destination X position.
- `y`: Destination Y position.
- `width`: Destination tiled width.
- `height`: Destination tiled height.

### DrawImageTiledInternal(CTRTexture2D image, int quadIndex, float x, float y, float width, float height, bool allowLegacyFallback) {#m-cuttheropedx-framework-visual-drawhelper-drawimagetiledinternal-cuttheropedx-framework-visual-ctrtexture2d-system-int32-system-single-system-single-system-single-system-single-system-boolean}

```csharp
private static void DrawImageTiledInternal(CTRTexture2D image, int quadIndex, float x, float y, float width, float height, bool allowLegacyFallback)
```

Internal tiled drawing implementation with optional legacy fallback.

Parameters:

- `image`: Texture to tile.
- `quadIndex`: Quad index, or -1 for full image.
- `x`: X position.
- `y`: Y position.
- `width`: Width of the tiled area.
- `height`: Height of the tiled area.
- `allowLegacyFallback`: Whether to use the per-tile fallback if batching is not possible.

### DrawPolygon(float[] vertices, int vertexCount, RGBAColor color) {#m-cuttheropedx-framework-visual-drawhelper-drawpolygon-system-single-system-int32-cuttheropedx-framework-rgbacolor}

```csharp
public static void DrawPolygon(float[] vertices, int vertexCount, RGBAColor color)
```

Draws a polygon outline from interleaved X/Y vertex pairs.

Parameters:

- `vertices`: Interleaved X/Y vertex positions.
- `vertexCount`: Number of vertices.
- `color`: Outline color.

### DrawRadialClippedQuad(CTRTexture2D texture, int quadIndex, float x, float y, float fraction) {#m-cuttheropedx-framework-visual-drawhelper-drawradialclippedquad-cuttheropedx-framework-visual-ctrtexture2d-system-int32-system-single-system-single-system-single}

```csharp
public static void DrawRadialClippedQuad(CTRTexture2D texture, int quadIndex, float x, float y, float fraction)
```

Draws a textured quad with radial (pie-chart) clipping, sweeping counterclockwise from 12 o'clock. Uses a triangle fan from the quad center with UV-mapped edge vertices.

Parameters:

- `texture`: The texture containing the quad.
- `quadIndex`: Index of the quad in the texture atlas.
- `x`: Draw X position (top-left).
- `y`: Draw Y position (top-left).
- `fraction`: Visible fraction (0 = invisible, 1 = fully visible).

### DrawRect(float x, float y, float w, float h, RGBAColor color) {#m-cuttheropedx-framework-visual-drawhelper-drawrect-system-single-system-single-system-single-system-single-cuttheropedx-framework-rgbacolor}

```csharp
public static void DrawRect(float x, float y, float w, float h, RGBAColor color)
```

Draws a rectangle outline.

Parameters:

- `x`: X position.
- `y`: Y position.
- `w`: Width.
- `h`: Height.
- `color`: Outline color.

### DrawSolidPolygon(float[] vertices, int vertexCount, RGBAColor border, RGBAColor fill) {#m-cuttheropedx-framework-visual-drawhelper-drawsolidpolygon-system-single-system-int32-cuttheropedx-framework-rgbacolor-cuttheropedx-framework-rgbacolor}

```csharp
public static void DrawSolidPolygon(float[] vertices, int vertexCount, RGBAColor border, RGBAColor fill)
```

Draws a filled polygon with a `border`.

Parameters:

- `vertices`: Interleaved X/Y vertex positions.
- `vertexCount`: Number of vertices.
- `border`: Border color.
- `fill`: Fill color.

### DrawSolidPolygonWOBorder(float[] vertices, int vertexCount, RGBAColor fill) {#m-cuttheropedx-framework-visual-drawhelper-drawsolidpolygonwoborder-system-single-system-int32-cuttheropedx-framework-rgbacolor}

```csharp
public static void DrawSolidPolygonWOBorder(float[] vertices, int vertexCount, RGBAColor fill)
```

Draws a filled polygon without a border.

Parameters:

- `vertices`: Interleaved X/Y vertex positions.
- `vertexCount`: Number of vertices.
- `fill`: Fill color.

### DrawSolidRect(float x, float y, float w, float h, RGBAColor border, RGBAColor fill) {#m-cuttheropedx-framework-visual-drawhelper-drawsolidrect-system-single-system-single-system-single-system-single-cuttheropedx-framework-rgbacolor-cuttheropedx-framework-rgbacolor}

```csharp
public static void DrawSolidRect(float x, float y, float w, float h, RGBAColor border, RGBAColor fill)
```

Draws a filled rectangle with a `border`.

Parameters:

- `x`: X position.
- `y`: Y position.
- `w`: Width.
- `h`: Height.
- `border`: Border color.
- `fill`: Fill color.

### DrawSolidRectWOBorder(float x, float y, float w, float h, RGBAColor fill) {#m-cuttheropedx-framework-visual-drawhelper-drawsolidrectwoborder-system-single-system-single-system-single-system-single-cuttheropedx-framework-rgbacolor}

```csharp
public static void DrawSolidRectWOBorder(float x, float y, float w, float h, RGBAColor fill)
```

Draws a solid filled rectangle without a border.

Parameters:

- `x`: X coordinate of the top-left corner.
- `y`: Y coordinate of the top-left corner.
- `w`: Width of the rectangle.
- `h`: Height of the rectangle.
- `fill`: Fill color of the rectangle.

### GetColorCache(ref RGBAColor[] cache, int length) {#m-cuttheropedx-framework-visual-drawhelper-getcolorcache-cuttheropedx-framework-rgbacolor-system-int32}

```csharp
private static RGBAColor[] GetColorCache(ref RGBAColor[] cache, int length)
```

Returns a cached [RGBAColor](../RGBAColor.md) array, resizing if needed.

Parameters:

- `cache`: Cache slot that stores the reusable array.
- `length`: Minimum required length.

Returns: A cached array with at least `length` elements.

### GetFloatCache(ref float[] cache, int length) {#m-cuttheropedx-framework-visual-drawhelper-getfloatcache-system-single-system-int32}

```csharp
private static float[] GetFloatCache(ref float[] cache, int length)
```

Returns a cached float array, resizing if needed.

Parameters:

- `cache`: Cache slot that stores the reusable array.
- `length`: Minimum required length.

Returns: A cached array with at least `length` elements.

### GetShortCache(ref short[] cache, int length) {#m-cuttheropedx-framework-visual-drawhelper-getshortcache-system-int16-system-int32}

```csharp
private static short[] GetShortCache(ref short[] cache, int length)
```

Returns a cached short array, resizing if needed.

Parameters:

- `cache`: Cache slot that stores the reusable array.
- `length`: Minimum required length.

Returns: A cached array with at least `length` elements.

### GetTextureCoordinates(CTRTexture2D texture, CTRRectangle rect) {#m-cuttheropedx-framework-visual-drawhelper-gettexturecoordinates-cuttheropedx-framework-visual-ctrtexture2d-cuttheropedx-framework-ctrrectangle}

```csharp
public static Quad2D GetTextureCoordinates(CTRTexture2D texture, CTRRectangle rect)
```

Computes UV `texture` coordinates for the given source rectangle.

Parameters:

- `texture`: Texture to compute coordinates for.
- `rect`: Source rectangle in pixel coordinates.

Returns: UV coordinates normalized to the texture size.

### GetVertexCache(ref VertexPositionColor[] cache, int vertexCount) {#m-cuttheropedx-framework-visual-drawhelper-getvertexcache-microsoft-xna-framework-graphics-vertexpositioncolor-system-int32}

```csharp
private static VertexPositionColor[] GetVertexCache(ref VertexPositionColor[] cache, int vertexCount)
```

Returns a cached [VertexPositionColor](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.VertexPositionColor.html) array, resizing if needed.

Parameters:

- `cache`: Cache slot that stores the reusable array.
- `vertexCount`: Minimum number of vertices required.

Returns: A cached array with at least `vertexCount` elements.

### GetVertexCache(ref VertexPositionNormalTexture[] cache, int vertexCount) {#m-cuttheropedx-framework-visual-drawhelper-getvertexcache-microsoft-xna-framework-graphics-vertexpositionnormaltexture-system-int32}

```csharp
private static VertexPositionNormalTexture[] GetVertexCache(ref VertexPositionNormalTexture[] cache, int vertexCount)
```

Returns a cached [VertexPositionNormalTexture](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.VertexPositionNormalTexture.html) array, resizing if needed.

Parameters:

- `cache`: Cache slot that stores the reusable array.
- `vertexCount`: Minimum number of vertices required.

Returns: A cached array with at least `vertexCount` elements.

### TryDrawImageTiledBatch(CTRTexture2D image, float texX, float texY, float tileWidth, float tileHeight, float x, float y, float width, float height) {#m-cuttheropedx-framework-visual-drawhelper-trydrawimagetiledbatch-cuttheropedx-framework-visual-ctrtexture2d-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-single}

```csharp
private static bool TryDrawImageTiledBatch(CTRTexture2D image, float texX, float texY, float tileWidth, float tileHeight, float x, float y, float width, float height)
```

Attempts to draw tiled quads in a single batched draw call. Returns `false` if the batch is too large.

Parameters:

- `image`: Texture to tile.
- `texX`: Source X offset in texture pixels.
- `texY`: Source Y offset in texture pixels.
- `tileWidth`: Tile width in pixels.
- `tileHeight`: Tile height in pixels.
- `x`: Destination X position.
- `y`: Destination Y position.
- `width`: Destination tiled width.
- `height`: Destination tiled height.

Returns: `true` when the tile batch was submitted; otherwise `false`.


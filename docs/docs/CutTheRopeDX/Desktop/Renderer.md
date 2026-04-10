---
title: Class Renderer
description: Provides OpenGL ES 1.x emulation layer for MonoGame/XNA rendering. This class translates legacy OpenGL-style API calls to modern MonoGame primitives, using vertex buffers for efficient GPU rendering.
---

# Class Renderer

Namespace: `CutTheRopeDX.Desktop`

Assembly: `CutTheRope-DX.dll`

Source: `Renderer.cs`

Provides OpenGL ES 1.x emulation layer for MonoGame/XNA rendering. This class translates legacy OpenGL-style API calls to modern MonoGame primitives, using vertex buffers for efficient GPU rendering.

## Declaration

```csharp
internal sealed class Renderer
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [Renderer](Renderer.md)

## Fields

### GL_BLEND {#f-cuttheropedx-desktop-renderer-gl-blend}

```csharp
public const int GL_BLEND
```

Enables/disables alpha blending. When enabled, fragments are blended with the framebuffer using the blend function set by [SetBlendFunc](#m-cuttheropedx-desktop-renderer-setblendfunc-cuttheropedx-desktop-blendingfactor-cuttheropedx-desktop-blendingfactor). OpenGL equivalent: GL_BLEND (0x0BE2)

### GL_SCISSOR_TEST {#f-cuttheropedx-desktop-renderer-gl-scissor-test}

```csharp
public const int GL_SCISSOR_TEST
```

Enables/disables scissor test. When enabled, fragments outside the scissor rectangle set by [SetScissor](#m-cuttheropedx-desktop-renderer-setscissor-system-single-system-single-system-single-system-single) are discarded. OpenGL equivalent: GL_SCISSOR_TEST (0x0C11)

### GL_TEXTURE_2D {#f-cuttheropedx-desktop-renderer-gl-texture-2d}

```csharp
public const int GL_TEXTURE_2D
```

Enables/disables 2D texture mapping. When enabled, textures are applied to primitives. OpenGL equivalent: GL_TEXTURE_2D (0x0DE1)

### MODE_MODELVIEW {#f-cuttheropedx-desktop-renderer-mode-modelview}

```csharp
private const int MODE_MODELVIEW
```

Selects the modelview matrix stack for subsequent matrix operations. OpenGL equivalent: GL_MODELVIEW (0x1700)

### MODE_PROJECTION {#f-cuttheropedx-desktop-renderer-mode-projection}

```csharp
private const int MODE_PROJECTION
```

Selects the projection matrix stack for subsequent matrix operations. OpenGL equivalent: GL_PROJECTION (0x1701)

### s_Blend {#f-cuttheropedx-desktop-renderer-s-blend}

```csharp
private static BlendParams s_Blend
```

Stores the active blend configuration.

### s_Color {#f-cuttheropedx-desktop-renderer-s-color}

```csharp
private static Color s_Color
```

Stores the draw color applied to subsequent primitives.

### s_LastVertices_PositionColor {#f-cuttheropedx-desktop-renderer-s-lastvertices-positioncolor}

```csharp
private static VertexPositionColor[] s_LastVertices_PositionColor
```

Captures the last submitted colored vertices for debugging.

### s_LastVertices_PositionNormalTexture {#f-cuttheropedx-desktop-renderer-s-lastvertices-positionnormaltexture}

```csharp
private static VertexPositionNormalTexture[] s_LastVertices_PositionNormalTexture
```

Captures the last submitted textured vertices for debugging.

### s_RenderTarget {#f-cuttheropedx-desktop-renderer-s-rendertarget}

```csharp
private static RenderTarget2D s_RenderTarget
```

Holds the off-screen render target used before the final screen blit.

### s_Texture {#f-cuttheropedx-desktop-renderer-s-texture}

```csharp
private static CTRTexture2D s_Texture
```

Stores the texture currently bound for textured draw calls.

### s_Viewport {#f-cuttheropedx-desktop-renderer-s-viewport}

```csharp
private static Viewport s_Viewport
```

Stores the logical viewport used by the OpenGL-style API surface.

### s_effectColor {#f-cuttheropedx-desktop-renderer-s-effectcolor}

```csharp
private static BasicEffect s_effectColor
```

Caches the effect used for solid-color draw calls.

### s_effectTexture {#f-cuttheropedx-desktop-renderer-s-effecttexture}

```csharp
private static BasicEffect s_effectTexture
```

Caches the effect used for textured draw calls without per-vertex color.

### s_effectTextureColor {#f-cuttheropedx-desktop-renderer-s-effecttexturecolor}

```csharp
private static BasicEffect s_effectTextureColor
```

Caches the effect used for textured draw calls with per-vertex color.

### s_glClearColor {#f-cuttheropedx-desktop-renderer-s-glclearcolor}

```csharp
private static Color s_glClearColor
```

Stores the clear color used by [Clear](#m-cuttheropedx-desktop-renderer-clear-system-int32).

### s_glMatrixMode {#f-cuttheropedx-desktop-renderer-s-glmatrixmode}

```csharp
private static int s_glMatrixMode
```

Tracks the currently selected matrix stack.

### s_indexBuffer {#f-cuttheropedx-desktop-renderer-s-indexbuffer}

```csharp
private static IndexBuffer s_indexBuffer
```

Reusable index buffer for indexed draw calls.

### s_matrixModelView {#f-cuttheropedx-desktop-renderer-s-matrixmodelview}

```csharp
private static Matrix s_matrixModelView
```

Stores the current model-view transform.

### s_matrixModelViewStack {#f-cuttheropedx-desktop-renderer-s-matrixmodelviewstack}

```csharp
private static readonly List<Matrix> s_matrixModelViewStack
```

Stores pushed model-view matrices for nested transforms.

### s_matrixProjection {#f-cuttheropedx-desktop-renderer-s-matrixprojection}

```csharp
private static Matrix s_matrixProjection
```

Stores the current projection transform.

### s_normal {#f-cuttheropedx-desktop-renderer-s-normal}

```csharp
private static readonly Vector3 s_normal
```

Shared surface normal used for textured quad vertices.

### s_rasterizerStateSolidColor {#f-cuttheropedx-desktop-renderer-s-rasterizerstatesolidcolor}

```csharp
private static RasterizerState s_rasterizerStateSolidColor
```

Rasterizer state for non-textured primitives.

### s_rasterizerStateTexture {#f-cuttheropedx-desktop-renderer-s-rasterizerstatetexture}

```csharp
private static RasterizerState s_rasterizerStateTexture
```

Rasterizer state for textured primitives.

### s_vertexBuffers {#f-cuttheropedx-desktop-renderer-s-vertexbuffers}

```csharp
private static readonly Dictionary<Type, DynamicVertexBuffer> s_vertexBuffers
```

Reusable dynamic vertex buffers keyed by vertex type.

## Methods

### BindTexture(CTRTexture2D t) {#m-cuttheropedx-desktop-renderer-bindtexture-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public static void BindTexture(CTRTexture2D t)
```

Binds a texture for subsequent rendering operations.

Parameters:

- `t`: The texture to bind for textured draw calls.

### Clear(int _) {#m-cuttheropedx-desktop-renderer-clear-system-int32}

```csharp
public static void Clear(int _)
```

Clears the screen with the current clear color.

Parameters:

- `_`: OpenGL clear mask (ignored, always clears color buffer).

### CopyFromRenderTargetToScreen() {#m-cuttheropedx-desktop-renderer-copyfromrendertargettoscreen}

```csharp
public static void CopyFromRenderTargetToScreen()
```

Copies the render target contents to the screen. Applies scaling to fit the display in both windowed and fullscreen modes.

### DetachRenderTarget() {#m-cuttheropedx-desktop-renderer-detachrendertarget}

```csharp
public static RenderTarget2D DetachRenderTarget()
```

Detaches and returns the current render target, setting the internal reference to `null`. Used for screen capture operations.

Returns: The detached render target, or `null` when no render target is active.

### Disable(int cap) {#m-cuttheropedx-desktop-renderer-disable-system-int32}

```csharp
public static void Disable(int cap)
```

Disables an OpenGL capability.

Parameters:

- `cap`: Capability constant: 1 = GL_BLEND, 4 = GL_SCISSOR_TEST

### DrawIndexedPrimitives&lt;T&gt;(PrimitiveType primitiveType, T[] vertices, short[] indices, int indexCount, int primitiveCount) {#m-cuttheropedx-desktop-renderer-drawindexedprimitives-1-microsoft-xna-framework-graphics-primitivetype-0-system-int16-system-int32-system-int32}

```csharp
private static void DrawIndexedPrimitives<T>(PrimitiveType primitiveType, T[] vertices, short[] indices, int indexCount, int primitiveCount)
```

Uploads vertex and index data and issues an indexed primitive draw call.

Parameters:

- `primitiveType`: The primitive topology to draw.
- `vertices`: The source vertex data.
- `indices`: The source index data.
- `indexCount`: The number of indices to upload.
- `primitiveCount`: The number of primitives to render.

### DrawLineStrip(VertexPositionColor[] vertices) {#m-cuttheropedx-desktop-renderer-drawlinestrip-microsoft-xna-framework-graphics-vertexpositioncolor}

```csharp
public static void DrawLineStrip(VertexPositionColor[] vertices)
```

Draws a line strip using colored `vertices`.

Parameters:

- `vertices`: The colored vertex data to draw.

### DrawLineStrip(VertexPositionColor[] vertices, int vertexCount) {#m-cuttheropedx-desktop-renderer-drawlinestrip-microsoft-xna-framework-graphics-vertexpositioncolor-system-int32}

```csharp
public static void DrawLineStrip(VertexPositionColor[] vertices, int vertexCount)
```

Draws a line strip using colored `vertices` with an explicit vertex count.

Parameters:

- `vertices`: The colored vertex data to draw.
- `vertexCount`: The number of vertices from `vertices` to submit.

### DrawPrimitives&lt;T&gt;(PrimitiveType primitiveType, T[] vertices, int vertexCount, int primitiveCount) {#m-cuttheropedx-desktop-renderer-drawprimitives-1-microsoft-xna-framework-graphics-primitivetype-0-system-int32-system-int32}

```csharp
private static void DrawPrimitives<T>(PrimitiveType primitiveType, T[] vertices, int vertexCount, int primitiveCount)
```

Uploads vertex data and issues a non-indexed primitive draw call.

Parameters:

- `primitiveType`: The primitive topology to draw.
- `vertices`: The source vertex data.
- `vertexCount`: The number of vertices to upload.
- `primitiveCount`: The number of primitives to render.

### DrawSegment(float _, float __, float ___, float ____, RGBAColor _____) {#m-cuttheropedx-desktop-renderer-drawsegment-system-single-system-single-system-single-system-single-cuttheropedx-framework-rgbacolor}

```csharp
public static void DrawSegment(float _, float __, float ___, float ____, RGBAColor _____)
```

Draws a line segment (stub - not implemented). Used for debug visualization.

Parameters:

- `_`: Segment start X.
- `__`: Segment start Y.
- `___`: Segment end X.
- `____`: Segment end Y.
- `_____`: Segment color.

### DrawTriangleList(VertexPositionNormalTexture[] vertices, short[] indices) {#m-cuttheropedx-desktop-renderer-drawtrianglelist-microsoft-xna-framework-graphics-vertexpositionnormaltexture-system-int16}

```csharp
public static void DrawTriangleList(VertexPositionNormalTexture[] vertices, short[] indices)
```

Draws an indexed triangle list using textured `vertices`.

Parameters:

- `vertices`: The textured vertex data to draw.
- `indices`: The index buffer describing triangle order.

### DrawTriangleList(VertexPositionNormalTexture[] vertices, short[] indices, int indexCount) {#m-cuttheropedx-desktop-renderer-drawtrianglelist-microsoft-xna-framework-graphics-vertexpositionnormaltexture-system-int16-system-int32}

```csharp
public static void DrawTriangleList(VertexPositionNormalTexture[] vertices, short[] indices, int indexCount)
```

Draws an indexed triangle list using textured `vertices` with explicit index count.

Parameters:

- `vertices`: The textured vertex data to draw.
- `indices`: The index buffer describing triangle order.
- `indexCount`: The number of indices from `indices` to submit.

### DrawTriangleList(VertexPositionColorTexture[] vertices, short[] indices, int indexCount) {#m-cuttheropedx-desktop-renderer-drawtrianglelist-microsoft-xna-framework-graphics-vertexpositioncolortexture-system-int16-system-int32}

```csharp
public static void DrawTriangleList(VertexPositionColorTexture[] vertices, short[] indices, int indexCount)
```

Draws an indexed triangle list using textured and colored `vertices`.

Parameters:

- `vertices`: The textured and colored vertex data to draw.
- `indices`: The index buffer describing triangle order.
- `indexCount`: The number of indices from `indices` to submit.

### DrawTriangleStrip(VertexPositionColor[] vertices) {#m-cuttheropedx-desktop-renderer-drawtrianglestrip-microsoft-xna-framework-graphics-vertexpositioncolor}

```csharp
public static void DrawTriangleStrip(VertexPositionColor[] vertices)
```

Draws a triangle strip using colored `vertices` (no texture).

Parameters:

- `vertices`: The colored vertex data to draw.

### DrawTriangleStrip(VertexPositionColor[] vertices, int vertexCount) {#m-cuttheropedx-desktop-renderer-drawtrianglestrip-microsoft-xna-framework-graphics-vertexpositioncolor-system-int32}

```csharp
public static void DrawTriangleStrip(VertexPositionColor[] vertices, int vertexCount)
```

Draws a triangle strip using colored `vertices` with an explicit vertex count.

Parameters:

- `vertices`: The colored vertex data to draw.
- `vertexCount`: The number of vertices from `vertices` to submit.

### DrawTriangleStrip(VertexPositionNormalTexture[] vertices) {#m-cuttheropedx-desktop-renderer-drawtrianglestrip-microsoft-xna-framework-graphics-vertexpositionnormaltexture}

```csharp
public static void DrawTriangleStrip(VertexPositionNormalTexture[] vertices)
```

Draws a triangle strip using textured `vertices`.

Parameters:

- `vertices`: The textured vertex data to draw.

### DrawTriangleStrip(VertexPositionNormalTexture[] vertices, int vertexCount) {#m-cuttheropedx-desktop-renderer-drawtrianglestrip-microsoft-xna-framework-graphics-vertexpositionnormaltexture-system-int32}

```csharp
public static void DrawTriangleStrip(VertexPositionNormalTexture[] vertices, int vertexCount)
```

Draws a triangle strip using textured `vertices` with an explicit vertex count.

Parameters:

- `vertices`: The textured vertex data to draw.
- `vertexCount`: The number of vertices from `vertices` to submit.

### DrawTriangleStrip(VertexPositionColorTexture[] vertices) {#m-cuttheropedx-desktop-renderer-drawtrianglestrip-microsoft-xna-framework-graphics-vertexpositioncolortexture}

```csharp
public static void DrawTriangleStrip(VertexPositionColorTexture[] vertices)
```

Draws a triangle strip using textured and colored `vertices`.

Parameters:

- `vertices`: The textured and colored vertex data to draw.

### DrawTriangleStrip(VertexPositionColorTexture[] vertices, int vertexCount) {#m-cuttheropedx-desktop-renderer-drawtrianglestrip-microsoft-xna-framework-graphics-vertexpositioncolortexture-system-int32}

```csharp
public static void DrawTriangleStrip(VertexPositionColorTexture[] vertices, int vertexCount)
```

Draws a triangle strip using textured and colored `vertices` with an explicit vertex count.

Parameters:

- `vertices`: The textured and colored vertex data to draw.
- `vertexCount`: The number of vertices from `vertices` to submit.

### Enable(int cap) {#m-cuttheropedx-desktop-renderer-enable-system-int32}

```csharp
public static void Enable(int cap)
```

Enables an OpenGL capability.

Parameters:

- `cap`: Capability constant: 1 = GL_BLEND

### FillTexturedColoredVertices(Quad3D[] positions, Quad2D[] texCoordinates, RGBAColor[] colors, VertexPositionColorTexture[] vertices, int quadCount) {#m-cuttheropedx-desktop-renderer-filltexturedcoloredvertices-cuttheropedx-framework-quad3d-cuttheropedx-framework-quad2d-cuttheropedx-framework-rgbacolor-microsoft-xna-framework-graphics-vertexpositioncolortexture-system-int32}

```csharp
public static void FillTexturedColoredVertices(Quad3D[] positions, Quad2D[] texCoordinates, RGBAColor[] colors, VertexPositionColorTexture[] vertices, int quadCount)
```

Fills a vertex array with textured and colored quad data.

Parameters:

- `positions`: Array of 3D quad positions.
- `texCoordinates`: Array of 2D texture coordinates.
- `colors`: Array of vertex colors (4 per quad).
- `vertices`: Output vertex array (must be pre-allocated with quadCount * 4 elements).
- `quadCount`: Number of quads to process.

### FillTexturedVertices(Quad3D[] positions, Quad2D[] texCoordinates, VertexPositionNormalTexture[] vertices, int quadCount) {#m-cuttheropedx-desktop-renderer-filltexturedvertices-cuttheropedx-framework-quad3d-cuttheropedx-framework-quad2d-microsoft-xna-framework-graphics-vertexpositionnormaltexture-system-int32}

```csharp
public static void FillTexturedVertices(Quad3D[] positions, Quad2D[] texCoordinates, VertexPositionNormalTexture[] vertices, int quadCount)
```

Fills a vertex array with textured quad data from `positions` and `texCoordinates`.

Parameters:

- `positions`: Array of 3D quad positions.
- `texCoordinates`: Array of 2D texture coordinates.
- `vertices`: Output vertex array (must be pre-allocated with quadCount * 4 elements).
- `quadCount`: Number of quads to process.

### GetCurrentColor() {#m-cuttheropedx-desktop-renderer-getcurrentcolor}

```csharp
public static Color GetCurrentColor()
```

Returns the current drawing color.

Returns: The current draw color.

### GetEffect(bool useTexture, bool useColor) {#m-cuttheropedx-desktop-renderer-geteffect-system-boolean-system-boolean}

```csharp
private static BasicEffect GetEffect(bool useTexture, bool useColor)
```

Selects and configures the effect needed for the current draw call.

Parameters:

- `useTexture`: Whether the effect should sample the bound texture.
- `useColor`: Whether the effect should use per-vertex color data.

Returns: The configured effect instance.

### GetIndexBuffer(int indexCount, short[] indices) {#m-cuttheropedx-desktop-renderer-getindexbuffer-system-int32-system-int16}

```csharp
private static IndexBuffer GetIndexBuffer(int indexCount, short[] indices)
```

Returns a reusable index buffer filled with the provided `indices`.

Parameters:

- `indexCount`: The number of indices to upload.
- `indices`: The source index data.

Returns: An index buffer containing the requested index data.

### GetLastVertices_PositionColor() {#m-cuttheropedx-desktop-renderer-getlastvertices-positioncolor}

```csharp
public static VertexPositionColor[] GetLastVertices_PositionColor()
```

Returns the last drawn colored vertices (for debugging/inspection).

Returns: The last colored vertex array submitted by a matching draw call.

### GetLastVertices_PositionNormalTexture() {#m-cuttheropedx-desktop-renderer-getlastvertices-positionnormaltexture}

```csharp
public static VertexPositionNormalTexture[] GetLastVertices_PositionNormalTexture()
```

Returns the last drawn textured vertices (for debugging/inspection).

Returns: The last textured vertex array submitted by a matching draw call.

### GetModelViewMatrix() {#m-cuttheropedx-desktop-renderer-getmodelviewmatrix}

```csharp
public static Matrix GetModelViewMatrix()
```

Returns the current model-view matrix.

Returns: The current model-view matrix.

### GetSpriteBatch() {#m-cuttheropedx-desktop-renderer-getspritebatch}

```csharp
public static SpriteBatch GetSpriteBatch()
```

Gets the SpriteBatch instance for text and sprite rendering.

Returns: The shared sprite batch used by the desktop renderer.

### GetVertexBuffer&lt;T&gt;(int vertexCount) {#m-cuttheropedx-desktop-renderer-getvertexbuffer-1-system-int32}

```csharp
private static DynamicVertexBuffer GetVertexBuffer<T>(int vertexCount)
```

Returns a reusable dynamic vertex buffer sized for the requested vertex type and count.

Parameters:

- `vertexCount`: The minimum vertex capacity required.

Returns: A reusable dynamic vertex buffer for `T`.

### Init() {#m-cuttheropedx-desktop-renderer-init}

```csharp
public static void Init()
```

Initializes the OpenGL emulation layer. Must be called before any rendering operations. Sets up BasicEffect shaders and rasterizer states.

### InitRasterizerState() {#m-cuttheropedx-desktop-renderer-initrasterizerstate}

```csharp
private static void InitRasterizerState()
```

Creates the rasterizer states used for textured and non-textured draw calls.

### LoadIdentity() {#m-cuttheropedx-desktop-renderer-loadidentity}

```csharp
public static void LoadIdentity()
```

Resets the current matrix to identity based on the active matrix mode.

### PopMatrix() {#m-cuttheropedx-desktop-renderer-popmatrix}

```csharp
public static void PopMatrix()
```

Pops and restores the model-view matrix from the stack.

### PushMatrix() {#m-cuttheropedx-desktop-renderer-pushmatrix}

```csharp
public static void PushMatrix()
```

Pushes the current model-view matrix onto the stack.

### Rotate(float angle, float _, float _1, float _2) {#m-cuttheropedx-desktop-renderer-rotate-system-single-system-single-system-single-system-single}

```csharp
public static void Rotate(float angle, float _, float _1, float _2)
```

Applies a rotation transformation around the Z axis (2D rotation).

Parameters:

- `angle`: Rotation angle in degrees.
- `_`: Unused X axis component (kept for API compatibility).
- `_1`: Unused Y axis component (kept for API compatibility).
- `_2`: Unused Z axis component (kept for API compatibility).

### Scale(float x, float y, float z) {#m-cuttheropedx-desktop-renderer-scale-system-single-system-single-system-single}

```csharp
public static void Scale(float x, float y, float z)
```

Applies a scale transformation to the current model-view matrix.

Parameters:

- `x`: The scale factor on the X axis.
- `y`: The scale factor on the Y axis.
- `z`: The scale factor on the Z axis.

### SetBlendFunc(BlendingFactor sfactor, BlendingFactor dfactor) {#m-cuttheropedx-desktop-renderer-setblendfunc-cuttheropedx-desktop-blendingfactor-cuttheropedx-desktop-blendingfactor}

```csharp
public static void SetBlendFunc(BlendingFactor sfactor, BlendingFactor dfactor)
```

Sets the blending function for alpha blending operations.

Parameters:

- `sfactor`: The source blend factor.
- `dfactor`: The destination blend factor.

### SetClearColor(Color c) {#m-cuttheropedx-desktop-renderer-setclearcolor-microsoft-xna-framework-color}

```csharp
public static void SetClearColor(Color c)
```

Sets the clear color for GlClear operations.

Parameters:

- `c`: The color used by [Clear](#m-cuttheropedx-desktop-renderer-clear-system-int32).

### SetColor(Color c) {#m-cuttheropedx-desktop-renderer-setcolor-microsoft-xna-framework-color}

```csharp
public static void SetColor(Color c)
```

Sets the current drawing color.

Parameters:

- `c`: The color to apply to subsequent draw calls.

### SetMatrixMode(int mode) {#m-cuttheropedx-desktop-renderer-setmatrixmode-system-int32}

```csharp
public static void SetMatrixMode(int mode)
```

Sets the current matrix `mode` for subsequent matrix operations.

Parameters:

- `mode`: Matrix mode: 14 = GL_MODELVIEW, 15 = GL_PROJECTION

### SetOrthographic(float left, float right, float bottom, float top, float near, float far) {#m-cuttheropedx-desktop-renderer-setorthographic-system-single-system-single-system-single-system-single-system-single-system-single}

```csharp
public static void SetOrthographic(float left, float right, float bottom, float top, float near, float far)
```

Sets up an orthographic projection matrix.

Parameters:

- `left`: The left clipping plane.
- `right`: The right clipping plane.
- `bottom`: The bottom clipping plane.
- `top`: The top clipping plane.
- `near`: The near clipping plane.
- `far`: The far clipping plane.

### SetScissor(float x, float y, float width, float height) {#m-cuttheropedx-desktop-renderer-setscissor-system-single-system-single-system-single-system-single}

```csharp
public static void SetScissor(float x, float y, float width, float height)
```

Sets the scissor rectangle for clipping, scaled to match the current viewport.

Parameters:

- `x`: The left edge of the scissor rectangle.
- `y`: The top edge of the scissor rectangle.
- `width`: The scissor rectangle width.
- `height`: The scissor rectangle height.

### SetViewport(int x, int y, int width, int height) {#m-cuttheropedx-desktop-renderer-setviewport-system-int32-system-int32-system-int32-system-int32}

```csharp
public static void SetViewport(int x, int y, int width, int height)
```

Sets the viewport dimensions and manages render target. Always creates a render target matching the viewport size for proper scaling.

Parameters:

- `x`: The viewport origin on the X axis.
- `y`: The viewport origin on the Y axis.
- `width`: The viewport width in pixels.
- `height`: The viewport height in pixels.

### Skew(float skewXDegrees, float skewYDegrees) {#m-cuttheropedx-desktop-renderer-skew-system-single-system-single}

```csharp
public static void Skew(float skewXDegrees, float skewYDegrees)
```

Applies a skew transformation that matches the legacy OpenGL matrix used by iOS.

Parameters:

- `skewXDegrees`: The skew angle on the X axis, in degrees.
- `skewYDegrees`: The skew angle on the Y axis, in degrees.

### Translate(float x, float y, float _) {#m-cuttheropedx-desktop-renderer-translate-system-single-system-single-system-single}

```csharp
public static void Translate(float x, float y, float _)
```

Applies a translation transformation to the current model-view matrix. Z component is ignored for 2D rendering.

Parameters:

- `x`: The translation on the X axis.
- `y`: The translation on the Y axis.
- `_`: The translation on the Z axis. Ignored by this 2D renderer.


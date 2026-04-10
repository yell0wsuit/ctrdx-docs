---
title: Class CTRTexture2D
description: Manages a 2D texture with optional quad-based sprite regions, scaling, and a global linked list for bulk suspend/resume.
---

# Class CTRTexture2D

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `CTRTexture2D.cs`

Manages a 2D texture with optional quad-based sprite regions, scaling, and a global linked list for bulk suspend/resume.

## Declaration

```csharp
internal sealed class CTRTexture2D : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [CTRTexture2D](CTRTexture2D.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### _height {#f-cuttheropedx-framework-visual-ctrtexture2d-height}

```csharp
private uint _height
```

Raw texture height in pixels.

### _invHeight {#f-cuttheropedx-framework-visual-ctrtexture2d-invheight}

```csharp
public float _invHeight
```

Reciprocal of the texture height, used for UV coordinate calculation.

### _invWidth {#f-cuttheropedx-framework-visual-ctrtexture2d-invwidth}

```csharp
public float _invWidth
```

Reciprocal of the texture width, used for UV coordinate calculation.

### _isWvga {#f-cuttheropedx-framework-visual-ctrtexture2d-iswvga}

```csharp
private bool _isWvga
```

Whether this texture uses WVGA scaling.

### _lowypoint {#f-cuttheropedx-framework-visual-ctrtexture2d-lowypoint}

```csharp
public int _lowypoint
```

Lowest Y point of the loaded image, or -1 for render-target textures.

### _maxS {#f-cuttheropedx-framework-visual-ctrtexture2d-maxs}

```csharp
public float _maxS
```

Maximum S (horizontal) texture coordinate.

### _maxT {#f-cuttheropedx-framework-visual-ctrtexture2d-maxt}

```csharp
public float _maxT
```

Maximum T (vertical) texture coordinate.

### _realHeight {#f-cuttheropedx-framework-visual-ctrtexture2d-realheight}

```csharp
public int _realHeight
```

Computed drawable height in pixels, accounting for scale and WVGA.

### _realWidth {#f-cuttheropedx-framework-visual-ctrtexture2d-realwidth}

```csharp
public int _realWidth
```

Computed drawable width in pixels, accounting for scale and WVGA.

### _resName {#f-cuttheropedx-framework-visual-ctrtexture2d-resname}

```csharp
public string _resName
```

Resource name/path used to load this texture.

### _scaleX {#f-cuttheropedx-framework-visual-ctrtexture2d-scalex}

```csharp
private float _scaleX
```

Horizontal scale factor for WVGA mode.

### _scaleY {#f-cuttheropedx-framework-visual-ctrtexture2d-scaley}

```csharp
private float _scaleY
```

Vertical scale factor for WVGA mode.

### _width {#f-cuttheropedx-framework-visual-ctrtexture2d-width}

```csharp
private uint _width
```

Raw texture width in pixels.

### next {#f-cuttheropedx-framework-visual-ctrtexture2d-next}

```csharp
private CTRTexture2D next
```

Next texture in the global linked list.

### preCutSize {#f-cuttheropedx-framework-visual-ctrtexture2d-precutsize}

```csharp
public Vector preCutSize
```

Original size before transparency was trimmed, or `vectUndefined` if not trimmed.

### preCutSizes {#f-cuttheropedx-framework-visual-ctrtexture2d-precutsizes}

```csharp
public Vector[] preCutSizes
```

Per-quad original sizes before transparency was trimmed.

### prev {#f-cuttheropedx-framework-visual-ctrtexture2d-prev}

```csharp
private CTRTexture2D prev
```

Previous texture in the global linked list.

### quadOffsets {#f-cuttheropedx-framework-visual-ctrtexture2d-quadoffsets}

```csharp
public Vector[] quadOffsets
```

Per-quad position offsets relative to the texture origin.

### quadRects {#f-cuttheropedx-framework-visual-ctrtexture2d-quadrects}

```csharp
public CTRRectangle[] quadRects
```

Per-quad source rectangles within the texture.

### quads {#f-cuttheropedx-framework-visual-ctrtexture2d-quads}

```csharp
public Quad2D[] quads
```

Precomputed texture coordinate quads for each sprite region.

### quadsCount {#f-cuttheropedx-framework-visual-ctrtexture2d-quadscount}

```csharp
public int quadsCount
```

Number of quads defined for this texture.

### root {#f-cuttheropedx-framework-visual-ctrtexture2d-root}

```csharp
private static CTRTexture2D root
```

Head of the global texture linked list.

### tail {#f-cuttheropedx-framework-visual-ctrtexture2d-tail}

```csharp
private static CTRTexture2D tail
```

Tail of the global texture linked list.

### xnaTexture_ {#f-cuttheropedx-framework-visual-ctrtexture2d-xnatexture}

```csharp
public Texture2D xnaTexture_
```

The underlying XNA texture.

## Methods

### CalcRealSize(int size) {#m-cuttheropedx-framework-visual-ctrtexture2d-calcrealsize-system-int32}

```csharp
private static int CalcRealSize(int size)
```

Returns the `size` unchanged (no power-of-two rounding needed).

Parameters:

- `size`: Input size in pixels.

Returns: The real texture dimension used by the renderer.

### CalculateForQuickDrawing() {#m-cuttheropedx-framework-visual-ctrtexture2d-calculateforquickdrawing}

```csharp
public void CalculateForQuickDrawing()
```

Recalculates [_realWidth](#f-cuttheropedx-framework-visual-ctrtexture2d-realwidth), [_realHeight](#f-cuttheropedx-framework-visual-ctrtexture2d-realheight), [_invWidth](#f-cuttheropedx-framework-visual-ctrtexture2d-invwidth), and [_invHeight](#f-cuttheropedx-framework-visual-ctrtexture2d-invheight) based on current scale and WVGA mode.

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-ctrtexture2d-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### DrawAtPoint(CTRTexture2D texture, Vector point) {#m-cuttheropedx-framework-visual-ctrtexture2d-drawatpoint-cuttheropedx-framework-visual-ctrtexture2d-cuttheropedx-framework-core-vector}

```csharp
public static void DrawAtPoint(CTRTexture2D texture, Vector point)
```

Draws the full `texture` at `point`.

Parameters:

- `texture`: Texture to draw.
- `point`: Screen position to draw at.

### DrawQuadAtPoint(CTRTexture2D texture, int quadIndex, Vector point) {#m-cuttheropedx-framework-visual-ctrtexture2d-drawquadatpoint-cuttheropedx-framework-visual-ctrtexture2d-system-int32-cuttheropedx-framework-core-vector}

```csharp
public static void DrawQuadAtPoint(CTRTexture2D texture, int quadIndex, Vector point)
```

Draws the quad at `quadIndex` of `texture` at `point`.

Parameters:

- `texture`: Texture containing the quad.
- `quadIndex`: Index of the quad to draw.
- `point`: Screen position to draw at.

### DrawRectAtPoint(CTRTexture2D texture, CTRRectangle rect, Vector point) {#m-cuttheropedx-framework-visual-ctrtexture2d-drawrectatpoint-cuttheropedx-framework-visual-ctrtexture2d-cuttheropedx-framework-ctrrectangle-cuttheropedx-framework-core-vector}

```csharp
public static void DrawRectAtPoint(CTRTexture2D texture, CTRRectangle rect, Vector point)
```

Draws a rectangular region of `texture` at `point`.

Parameters:

- `texture`: Texture to draw from.
- `rect`: Source rectangle within the texture.
- `point`: Screen position to draw at.

### ImageLoaded(int w, int h) {#m-cuttheropedx-framework-visual-ctrtexture2d-imageloaded-system-int32-system-int32}

```csharp
private void ImageLoaded(int w, int h)
```

Stores the loaded image dimensions and computes max S/T texture coordinates.

Parameters:

- `w`: Image width in pixels.
- `h`: Image height in pixels.

### InitFromPixels(int w, int h) {#m-cuttheropedx-framework-visual-ctrtexture2d-initfrompixels-system-int32-system-int32}

```csharp
public CTRTexture2D InitFromPixels(int w, int h)
```

Initializes this texture from the current render target with dimensions `w` x `h`.

Parameters:

- `w`: Width of the render target in pixels.
- `h`: Height of the render target in pixels.

Returns: The initialized texture instance.

### InitWithPath(string path) {#m-cuttheropedx-framework-visual-ctrtexture2d-initwithpath-system-string}

```csharp
public CTRTexture2D InitWithPath(string path)
```

Loads the texture from the given resource `path` and registers it.

Parameters:

- `path`: Resource path to load from.

Returns: The initialized texture instance, or `null` if loading fails.

### IsWvga() {#m-cuttheropedx-framework-visual-ctrtexture2d-iswvga}

```csharp
public bool IsWvga()
```

Returns `true` if this texture uses WVGA scaling.

Returns: `true` when WVGA scaling is enabled; otherwise `false`.

### Name() {#m-cuttheropedx-framework-visual-ctrtexture2d-name}

```csharp
public CTRTexture2D Name()
```

Returns this texture instance (identity helper for renderer binding).

Returns: This texture instance.

### OptimizeMemory() {#m-cuttheropedx-framework-visual-ctrtexture2d-optimizememory}

```csharp
public static void OptimizeMemory()
```

Placeholder for optimizing texture memory.

### Reg() {#m-cuttheropedx-framework-visual-ctrtexture2d-reg}

```csharp
public void Reg()
```

Registers this texture in the global linked list.

### Resume() {#m-cuttheropedx-framework-visual-ctrtexture2d-resume}

```csharp
private static void Resume()
```

Placeholder for resuming a suspended texture.

### ResumeAll() {#m-cuttheropedx-framework-visual-ctrtexture2d-resumeall}

```csharp
public static void ResumeAll()
```

Resumes all registered textures in the global linked list.

### SetAliasTexParameters() {#m-cuttheropedx-framework-visual-ctrtexture2d-setaliastexparameters}

```csharp
public static void SetAliasTexParameters()
```

Placeholder for setting alias texture parameters.

### SetAntiAliasTexParameters() {#m-cuttheropedx-framework-visual-ctrtexture2d-setantialiastexparameters}

```csharp
public static void SetAntiAliasTexParameters()
```

Placeholder for setting anti-alias texture parameters.

### SetQuadAt(CTRRectangle rect, int quadIndex) {#m-cuttheropedx-framework-visual-ctrtexture2d-setquadat-cuttheropedx-framework-ctrrectangle-system-int32}

```csharp
public void SetQuadAt(CTRRectangle rect, int quadIndex)
```

Sets the texture coordinates and rectangle for the quad at `quadIndex`.

Parameters:

- `rect`: Source rectangle within the texture.
- `quadIndex`: Index of the quad to set.

### SetQuadsCapacity(int capacity) {#m-cuttheropedx-framework-visual-ctrtexture2d-setquadscapacity-system-int32}

```csharp
public void SetQuadsCapacity(int capacity)
```

Allocates quad arrays with the given `capacity`.

Parameters:

- `capacity`: Number of quads to allocate.

### SetScale(float scaleX, float scaleY) {#m-cuttheropedx-framework-visual-ctrtexture2d-setscale-system-single-system-single}

```csharp
public void SetScale(float scaleX, float scaleY)
```

Sets the texture scale factors and recalculates drawing dimensions.

Parameters:

- `scaleX`: Horizontal scale factor.
- `scaleY`: Vertical scale factor.

### SetWvga() {#m-cuttheropedx-framework-visual-ctrtexture2d-setwvga}

```csharp
public void SetWvga()
```

Marks this texture as using WVGA scaling.

### Suspend() {#m-cuttheropedx-framework-visual-ctrtexture2d-suspend}

```csharp
public static void Suspend()
```

Placeholder for suspending a texture to free memory.

### SuspendAll() {#m-cuttheropedx-framework-visual-ctrtexture2d-suspendall}

```csharp
public static void SuspendAll()
```

Suspends all registered textures in the global linked list.

### Unreg() {#m-cuttheropedx-framework-visual-ctrtexture2d-unreg}

```csharp
public void Unreg()
```

Unregisters this texture from the global linked list.


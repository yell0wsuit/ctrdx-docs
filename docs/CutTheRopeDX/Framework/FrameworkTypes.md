---
title: Class FrameworkTypes
description: Base class for most framework types, providing screen-coordinate transforms, resolution helpers, and the disposable pattern.
---

# Class FrameworkTypes

Namespace: `CutTheRopeDX.Framework`

Assembly: `CutTheRope-DX.dll`

Source: `FrameworkTypes.cs`

Base class for most framework types, providing screen-coordinate transforms, resolution helpers, and the disposable pattern.

## Declaration

```csharp
internal class FrameworkTypes : CTRMathHelper, IDisposable
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](Helpers/CTRMathHelper.md)
- [FrameworkTypes](FrameworkTypes.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [AntsPath](../GameMain/AntsPath.md)
- [AntsPathSegment](../GameMain/AntsPathSegment.md)
- [Application](Core/Application.md)
- [ApplicationSettings](Core/ApplicationSettings.md)
- [BaseElement](Visual/BaseElement.md)
- [CTRAction](Visual/CTRAction.md)
- [CTRSoundMgr](../GameMain/CTRSoundMgr.md)
- [CTRTexture2D](Visual/CTRTexture2D.md)
- [Camera2D](Helpers/Camera2D.md)
- [Constraint](Physics/Constraint.md)
- [ConstraintSystem](Physics/ConstraintSystem.md)
- [CtrRenderer](../Commons/CtrRenderer.md)
- [DelayedDispatcher](Helpers/DelayedDispatcher.md)
- [DispatchClass](Helpers/DispatchClass.md)
- [DrawHelper](Visual/DrawHelper.md)
- [FingerParticles](../GameMain/FingerTraces/FingerParticles.md)
- [FingerTrace](Visual/FingerTrace.md)
- [FontGeneric](Visual/FontGeneric.md)
- [FormattedString](Visual/FormattedString.md)
- [GLCanvas](Platform/GLCanvas.md)
- [Grabber](Visual/Grabber.md)
- [LevelsList](../GameMain/LevelsList.md)
- [MaterialPoint](Physics/MaterialPoint.md)
- [Mover](Helpers/Mover.md)
- [MovieMgr](Media/MovieMgr.md)
- [Preferences](Core/Preferences.md)
- [ResourceMgr](Core/ResourceMgr.md)
- [SoundMgr](Media/SoundMgr.md)
- [TileEntry](Visual/TileEntry.md)
- [Timeline](Visual/Timeline.md)
- [Track](Visual/Track.md)
- [ViewController](Core/ViewController.md)

## Fields

### BLENDING_MODE_ADDITIVE {#f-cuttheropedx-framework-frameworktypes-blending-mode-additive}

```csharp
public const int BLENDING_MODE_ADDITIVE
```

Blending mode: additive.

### BLENDING_MODE_ONE {#f-cuttheropedx-framework-frameworktypes-blending-mode-one}

```csharp
public const int BLENDING_MODE_ONE
```

Blending mode: one (premultiplied alpha).

### BLENDING_MODE_SRC_ALPHA {#f-cuttheropedx-framework-frameworktypes-blending-mode-src-alpha}

```csharp
public const int BLENDING_MODE_SRC_ALPHA
```

Blending mode: source alpha.

### BOTTOM {#f-cuttheropedx-framework-frameworktypes-bottom}

```csharp
public const int BOTTOM
```

Vertical alignment flag: bottom.

### CENTER {#f-cuttheropedx-framework-frameworktypes-center}

```csharp
public const int CENTER
```

Combined alignment: horizontal center | vertical center.

### FLOAT_PRECISION {#f-cuttheropedx-framework-frameworktypes-float-precision}

```csharp
public const float FLOAT_PRECISION
```

Epsilon used for floating-point equality comparisons.

### GL_COLOR_BUFFER_BIT {#f-cuttheropedx-framework-frameworktypes-gl-color-buffer-bit}

```csharp
public const int GL_COLOR_BUFFER_BIT
```

OpenGL color buffer bit constant.

### HCENTER {#f-cuttheropedx-framework-frameworktypes-hcenter}

```csharp
public const int HCENTER
```

Horizontal alignment flag: center.

### IS_IPAD {#f-cuttheropedx-framework-frameworktypes-is-ipad}

```csharp
public static bool IS_IPAD
```

`true` when running at iPad resolution.

### IS_QVGA {#f-cuttheropedx-framework-frameworktypes-is-qvga}

```csharp
public static bool IS_QVGA
```

`true` when running at QVGA (320x240) resolution.

### IS_RETINA {#f-cuttheropedx-framework-frameworktypes-is-retina}

```csharp
public static bool IS_RETINA
```

`true` when running on a retina (2x) display.

### IS_WVGA {#f-cuttheropedx-framework-frameworktypes-is-wvga}

```csharp
public static bool IS_WVGA
```

`true` when running at WVGA (800x480) resolution.

### LEFT {#f-cuttheropedx-framework-frameworktypes-left}

```csharp
public const int LEFT
```

Horizontal alignment flag: left.

### PORTRAIT_SCREEN_HEIGHT {#f-cuttheropedx-framework-frameworktypes-portrait-screen-height}

```csharp
public static float PORTRAIT_SCREEN_HEIGHT
```

Portrait-mode screen height.

### PORTRAIT_SCREEN_WIDTH {#f-cuttheropedx-framework-frameworktypes-portrait-screen-width}

```csharp
public static float PORTRAIT_SCREEN_WIDTH
```

Portrait-mode screen width.

### REAL_SCREEN_HEIGHT {#f-cuttheropedx-framework-frameworktypes-real-screen-height}

```csharp
public static float REAL_SCREEN_HEIGHT
```

Actual device screen height in pixels.

### REAL_SCREEN_WIDTH {#f-cuttheropedx-framework-frameworktypes-real-screen-width}

```csharp
public static float REAL_SCREEN_WIDTH
```

Actual device screen width in pixels.

### RIGHT {#f-cuttheropedx-framework-frameworktypes-right}

```csharp
public const int RIGHT
```

Horizontal alignment flag: right.

### SCREEN_BG_SCALE_X {#f-cuttheropedx-framework-frameworktypes-screen-bg-scale-x}

```csharp
public static float SCREEN_BG_SCALE_X
```

Horizontal scale factor for background images.

### SCREEN_BG_SCALE_Y {#f-cuttheropedx-framework-frameworktypes-screen-bg-scale-y}

```csharp
public static float SCREEN_BG_SCALE_Y
```

Vertical scale factor for background images.

### SCREEN_HEIGHT {#f-cuttheropedx-framework-frameworktypes-screen-height}

```csharp
public static float SCREEN_HEIGHT
```

Logical screen height in game coordinates.

### SCREEN_HEIGHT_EXPANDED {#f-cuttheropedx-framework-frameworktypes-screen-height-expanded}

```csharp
public static float SCREEN_HEIGHT_EXPANDED
```

Expanded logical screen height (accounts for aspect-ratio adjustments).

### SCREEN_OFFSET_X {#f-cuttheropedx-framework-frameworktypes-screen-offset-x}

```csharp
public static float SCREEN_OFFSET_X
```

Horizontal offset applied when the screen is pillarboxed.

### SCREEN_OFFSET_Y {#f-cuttheropedx-framework-frameworktypes-screen-offset-y}

```csharp
public static float SCREEN_OFFSET_Y
```

Vertical offset applied when the screen is letterboxed.

### SCREEN_RATIO {#f-cuttheropedx-framework-frameworktypes-screen-ratio}

```csharp
public static float SCREEN_RATIO
```

Current screen aspect ratio.

### SCREEN_WIDE_BG_SCALE_X {#f-cuttheropedx-framework-frameworktypes-screen-wide-bg-scale-x}

```csharp
public static float SCREEN_WIDE_BG_SCALE_X
```

Horizontal scale factor for wide background images.

### SCREEN_WIDE_BG_SCALE_Y {#f-cuttheropedx-framework-frameworktypes-screen-wide-bg-scale-y}

```csharp
public static float SCREEN_WIDE_BG_SCALE_Y
```

Vertical scale factor for wide background images.

### SCREEN_WIDTH {#f-cuttheropedx-framework-frameworktypes-screen-width}

```csharp
public static float SCREEN_WIDTH
```

Logical screen width in game coordinates.

### SCREEN_WIDTH_EXPANDED {#f-cuttheropedx-framework-frameworktypes-screen-width-expanded}

```csharp
public static float SCREEN_WIDTH_EXPANDED
```

Expanded logical screen width (accounts for aspect-ratio adjustments).

### TOP {#f-cuttheropedx-framework-frameworktypes-top}

```csharp
public const int TOP
```

Vertical alignment flag: top.

### UNDEFINED {#f-cuttheropedx-framework-frameworktypes-undefined}

```csharp
public const int UNDEFINED
```

Sentinel value indicating an undefined or unset parameter.

### VCENTER {#f-cuttheropedx-framework-frameworktypes-vcenter}

```csharp
public const int VCENTER
```

Vertical alignment flag: center.

### VIEW_OFFSET_X {#f-cuttheropedx-framework-frameworktypes-view-offset-x}

```csharp
public static float VIEW_OFFSET_X
```

Horizontal viewport offset.

### VIEW_OFFSET_Y {#f-cuttheropedx-framework-frameworktypes-view-offset-y}

```csharp
public static float VIEW_OFFSET_Y
```

Vertical viewport offset.

### VIEW_SCREEN_HEIGHT {#f-cuttheropedx-framework-frameworktypes-view-screen-height}

```csharp
public static float VIEW_SCREEN_HEIGHT
```

Viewport height used for coordinate transforms.

### VIEW_SCREEN_WIDTH {#f-cuttheropedx-framework-frameworktypes-view-screen-width}

```csharp
public static float VIEW_SCREEN_WIDTH
```

Viewport width used for coordinate transforms.

## Properties

### Canvas {#p-cuttheropedx-framework-frameworktypes-canvas}

```csharp
public static GLCanvas Canvas { get; }
```

Gets the shared [GLCanvas](Platform/GLCanvas.md) instance from the application.

## Methods

### ACHIEVEMENT_STRING(string s) {#m-cuttheropedx-framework-frameworktypes-achievement-string-system-string}

```csharp
public static string ACHIEVEMENT_STRING(string s)
```

Returns the achievement identifier string unchanged (pass-through).

Parameters:

- `s`: Achievement identifier string.

Returns: The same string passed in.

### CHOOSE3(float P1, float P2) {#m-cuttheropedx-framework-frameworktypes-choose3-system-single-system-single}

```csharp
public static float CHOOSE3(float P1, float P2)
```

Returns the WVGA or non-WVGA value via [WVGAH](#m-cuttheropedx-framework-frameworktypes-wvgah-system-single-system-single).

Parameters:

- `P1`: Value for non-WVGA resolution.
- `P2`: Value for WVGA resolution.

Returns: `P2` on WVGA; otherwise `P1`.

### Dispose() {#m-cuttheropedx-framework-frameworktypes-dispose}

```csharp
public void Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

### Dispose(bool disposing) {#m-cuttheropedx-framework-frameworktypes-dispose-system-boolean}

```csharp
protected virtual void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### LOG() {#m-cuttheropedx-framework-frameworktypes-log}

```csharp
public static void LOG()
```

No-op logging stub.

### MakeRectangle(float xParam, float yParam, float width, float height) {#m-cuttheropedx-framework-frameworktypes-makerectangle-system-single-system-single-system-single-system-single}

```csharp
public static CTRRectangle MakeRectangle(float xParam, float yParam, float width, float height)
```

Creates a [CTRRectangle](CTRRectangle.md) from position and size.

Parameters:

- `xParam`: X position.
- `yParam`: Y position.
- `width`: Width.
- `height`: Height.

Returns: A new [CTRRectangle](CTRRectangle.md) with the given position and size.

### OpenUrl(string url) {#m-cuttheropedx-framework-frameworktypes-openurl-system-string}

```csharp
public static void OpenUrl(string url)
```

Opens the specified URL in the default system browser.

Parameters:

- `url`: URL to open.

### RT(float H, float L) {#m-cuttheropedx-framework-frameworktypes-rt-system-single-system-single}

```csharp
public static float RT(float H, float L)
```

Returns `H` on retina displays, `L` otherwise.

Parameters:

- `H`: Value for retina resolution.
- `L`: Value for non-retina resolution.

Returns: `H` on retina displays; otherwise `L`.

### RTD(float V) {#m-cuttheropedx-framework-frameworktypes-rtd-system-single}

```csharp
public static float RTD(float V)
```

Doubles `V` on retina displays; returns it unchanged otherwise.

Parameters:

- `V`: Value to scale.

Returns: `V * 2` on retina displays; otherwise `V`.

### RTPD(float V) {#m-cuttheropedx-framework-frameworktypes-rtpd-system-single}

```csharp
public static float RTPD(float V)
```

Doubles `V` on retina or iPad displays; returns it unchanged otherwise.

Parameters:

- `V`: Value to scale.

Returns: `V * 2` on retina or iPad displays; otherwise `V`.

### ToFloatArray(Quad2D[] quads) {#m-cuttheropedx-framework-frameworktypes-tofloatarray-cuttheropedx-framework-quad2d}

```csharp
public static float[] ToFloatArray(Quad2D[] quads)
```

Converts an array of [Quad2D](Quad2D.md) into a flat float array.

Parameters:

- `quads`: Quads to convert.

Returns: A flat float array containing 8 floats per quad.

### ToFloatArray(Quad3D[] quads) {#m-cuttheropedx-framework-frameworktypes-tofloatarray-cuttheropedx-framework-quad3d}

```csharp
public static float[] ToFloatArray(Quad3D[] quads)
```

Converts an array of [Quad3D](Quad3D.md) into a flat float array.

Parameters:

- `quads`: Quads to convert.

Returns: A flat float array containing 12 floats per quad.

### TransformFromRealH(float h) {#m-cuttheropedx-framework-frameworktypes-transformfromrealh-system-single}

```csharp
public static float TransformFromRealH(float h)
```

Transforms a real screen height to a logical height.

Parameters:

- `h`: Real screen height.

Returns: The corresponding logical height.

### TransformFromRealW(float w) {#m-cuttheropedx-framework-frameworktypes-transformfromrealw-system-single}

```csharp
public static float TransformFromRealW(float w)
```

Transforms a real screen width to a logical width.

Parameters:

- `w`: Real screen width.

Returns: The corresponding logical width.

### TransformFromRealX(float x) {#m-cuttheropedx-framework-frameworktypes-transformfromrealx-system-single}

```csharp
public static float TransformFromRealX(float x)
```

Transforms a real screen X coordinate to a logical X coordinate.

Parameters:

- `x`: Real screen X coordinate.

Returns: The corresponding logical X coordinate.

### TransformFromRealY(float y) {#m-cuttheropedx-framework-frameworktypes-transformfromrealy-system-single}

```csharp
public static float TransformFromRealY(float y)
```

Transforms a real screen Y coordinate to a logical Y coordinate.

Parameters:

- `y`: Real screen Y coordinate.

Returns: The corresponding logical Y coordinate.

### TransformToRealH(float h) {#m-cuttheropedx-framework-frameworktypes-transformtorealh-system-single}

```csharp
public static float TransformToRealH(float h)
```

Transforms a logical height to a real screen height.

Parameters:

- `h`: Logical height.

Returns: The corresponding real screen height.

### TransformToRealW(float w) {#m-cuttheropedx-framework-frameworktypes-transformtorealw-system-single}

```csharp
public static float TransformToRealW(float w)
```

Transforms a logical width to a real screen width.

Parameters:

- `w`: Logical width.

Returns: The corresponding real screen width.

### TransformToRealX(float x) {#m-cuttheropedx-framework-frameworktypes-transformtorealx-system-single}

```csharp
public static float TransformToRealX(float x)
```

Transforms a logical X coordinate to a real screen X coordinate.

Parameters:

- `x`: Logical X coordinate.

Returns: The corresponding real screen X coordinate.

### TransformToRealY(float y) {#m-cuttheropedx-framework-frameworktypes-transformtorealy-system-single}

```csharp
public static float TransformToRealY(float y)
```

Transforms a logical Y coordinate to a real screen Y coordinate.

Parameters:

- `y`: Logical Y coordinate.

Returns: The corresponding real screen Y coordinate.

### WVGAD(float V) {#m-cuttheropedx-framework-frameworktypes-wvgad-system-single}

```csharp
public static float WVGAD(float V)
```

Doubles `V` on WVGA displays; returns it unchanged otherwise.

Parameters:

- `V`: Value to scale.

Returns: `V * 2` on WVGA; otherwise `V`.

### WVGAH(float H, float L) {#m-cuttheropedx-framework-frameworktypes-wvgah-system-single-system-single}

```csharp
public static float WVGAH(float H, float L)
```

Returns `H` on WVGA displays, `L` otherwise.

Parameters:

- `H`: Value for WVGA resolution.
- `L`: Value for non-WVGA resolution.

Returns: `H` when running at WVGA; otherwise `L`.


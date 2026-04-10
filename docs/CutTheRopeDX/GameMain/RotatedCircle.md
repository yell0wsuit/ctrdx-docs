---
title: Class RotatedCircle
description: Rotatable vinyl circle object that tracks contained game objects and exposes one or two controller handles.
---

# Class RotatedCircle

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `RotatedCircle.cs`

Rotatable vinyl circle object that tracks contained game objects and exposes one or two controller handles.

## Declaration

```csharp
internal sealed class RotatedCircle : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [RotatedCircle](RotatedCircle.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### RotatedCircle() {#m-cuttheropedx-gamemain-rotatedcircle-ctor}

```csharp
public RotatedCircle()
```

Creates the vinyl circle visuals, controller handles, and contained-object collection.

## Fields

### ACTIVE_CIRCLE_WIDTH {#f-cuttheropedx-gamemain-rotatedcircle-active-circle-width}

```csharp
private readonly float ACTIVE_CIRCLE_WIDTH
```

Width of the active controller outline.

### CENTER_SCALE_FACTOR {#f-cuttheropedx-gamemain-rotatedcircle-center-scale-factor}

```csharp
public const float CENTER_SCALE_FACTOR
```

Scale factor applied to the center visual relative to sticker scale.

### CIRCLE_VERTEX_COUNT {#f-cuttheropedx-gamemain-rotatedcircle-circle-vertex-count}

```csharp
public const int CIRCLE_VERTEX_COUNT
```

Vertex count used when drawing circle outlines.

### CONTOUR_COLOR {#f-cuttheropedx-gamemain-rotatedcircle-contour-color}

```csharp
private RGBAColor CONTOUR_COLOR
```

Color used when drawing overlapping circle contours.

### CONTROLLER_MIN_SCALE {#f-cuttheropedx-gamemain-rotatedcircle-controller-min-scale}

```csharp
public const float CONTROLLER_MIN_SCALE
```

Minimum controller visual scale.

### CONTROLLER_SHIFT_PARAM1 {#f-cuttheropedx-gamemain-rotatedcircle-controller-shift-param1}

```csharp
private readonly float CONTROLLER_SHIFT_PARAM1
```

Controller placement offset base parameter.

### CONTROLLER_SHIFT_PARAM2 {#f-cuttheropedx-gamemain-rotatedcircle-controller-shift-param2}

```csharp
private readonly float CONTROLLER_SHIFT_PARAM2
```

Controller placement offset size multiplier.

### HUNDRED_PERCENT_SCALE_SIZE {#f-cuttheropedx-gamemain-rotatedcircle-hundred-percent-scale-size}

```csharp
public const float HUNDRED_PERCENT_SCALE_SIZE
```

Circle size that maps to full texture scale.

### OUTER_CIRCLE_WIDTH {#f-cuttheropedx-gamemain-rotatedcircle-outer-circle-width}

```csharp
private readonly float OUTER_CIRCLE_WIDTH
```

Width of the outer intersection contour.

### PM {#f-cuttheropedx-gamemain-rotatedcircle-pm}

```csharp
public const int PM
```

Pointer multiplier used by rotated circle sizing and placement.

### STICKER_MIN_SCALE {#f-cuttheropedx-gamemain-rotatedcircle-sticker-min-scale}

```csharp
public const float STICKER_MIN_SCALE
```

Minimum sticker visual scale.

### VinylTexture {#f-cuttheropedx-gamemain-rotatedcircle-vinyltexture}

```csharp
private const string VinylTexture
```

Texture resource used for rotated circle visuals.

### circlesArray {#f-cuttheropedx-gamemain-rotatedcircle-circlesarray}

```csharp
public List<RotatedCircle> circlesArray
```

Shared list of rotated circles in the level.

### containedObjects {#f-cuttheropedx-gamemain-rotatedcircle-containedobjects}

```csharp
public List<GameObject> containedObjects
```

Game objects currently contained by this circle.

### handle1 {#f-cuttheropedx-gamemain-rotatedcircle-handle1}

```csharp
public Vector handle1
```

World-space position of the first controller handle.

### handle2 {#f-cuttheropedx-gamemain-rotatedcircle-handle2}

```csharp
public Vector handle2
```

World-space position of the second controller handle.

### inithanlde1 {#f-cuttheropedx-gamemain-rotatedcircle-inithanlde1}

```csharp
public Vector inithanlde1
```

Initial world-space position of the first controller handle.

### inithanlde2 {#f-cuttheropedx-gamemain-rotatedcircle-inithanlde2}

```csharp
public Vector inithanlde2
```

Initial world-space position of the second controller handle.

### lastTouch {#f-cuttheropedx-gamemain-rotatedcircle-lasttouch}

```csharp
public Vector lastTouch
```

Last touch position used while rotating the circle.

### operating {#f-cuttheropedx-gamemain-rotatedcircle-operating}

```csharp
public int operating
```

Identifier for the controller currently being operated, or -1 when idle.

### removeOnNextUpdate {#f-cuttheropedx-gamemain-rotatedcircle-removeonnextupdate}

```csharp
public bool removeOnNextUpdate
```

Whether this circle should be removed on the next update.

### size {#f-cuttheropedx-gamemain-rotatedcircle-size}

```csharp
public float size
```

Logical circle size in world units.

### sizeInPixels {#f-cuttheropedx-gamemain-rotatedcircle-sizeinpixels}

```csharp
public float sizeInPixels
```

Rendered circle radius in pixels.

### soundPlaying {#f-cuttheropedx-gamemain-rotatedcircle-soundplaying}

```csharp
public int soundPlaying
```

Identifier for the sound currently playing for this circle, or -1 when idle.

### vinil {#f-cuttheropedx-gamemain-rotatedcircle-vinil}

```csharp
private Image vinil
```

Main vinyl body visual.

### vinilActiveControllerL {#f-cuttheropedx-gamemain-rotatedcircle-vinilactivecontrollerl}

```csharp
private Image vinilActiveControllerL
```

Left active-controller handle visual.

### vinilActiveControllerR {#f-cuttheropedx-gamemain-rotatedcircle-vinilactivecontrollerr}

```csharp
private Image vinilActiveControllerR
```

Right active-controller handle visual.

### vinilCenter {#f-cuttheropedx-gamemain-rotatedcircle-vinilcenter}

```csharp
private Image vinilCenter
```

Center vinyl visual.

### vinilControllerL {#f-cuttheropedx-gamemain-rotatedcircle-vinilcontrollerl}

```csharp
private Image vinilControllerL
```

Left controller handle visual.

### vinilControllerR {#f-cuttheropedx-gamemain-rotatedcircle-vinilcontrollerr}

```csharp
private Image vinilControllerR
```

Right controller handle visual.

### vinilHighlightL {#f-cuttheropedx-gamemain-rotatedcircle-vinilhighlightl}

```csharp
private Image vinilHighlightL
```

Left highlight visual.

### vinilHighlightR {#f-cuttheropedx-gamemain-rotatedcircle-vinilhighlightr}

```csharp
private Image vinilHighlightR
```

Right highlight visual.

### vinilStickerL {#f-cuttheropedx-gamemain-rotatedcircle-vinilstickerl}

```csharp
private Image vinilStickerL
```

Left sticker visual.

### vinilStickerR {#f-cuttheropedx-gamemain-rotatedcircle-vinilstickerr}

```csharp
private Image vinilStickerR
```

Right sticker visual.

## Methods

### ContainsSameObjectWithAnotherCircle() {#m-cuttheropedx-gamemain-rotatedcircle-containssameobjectwithanothercircle}

```csharp
public bool ContainsSameObjectWithAnotherCircle()
```

Checks whether this circle shares any contained object with another circle in [circlesArray](#f-cuttheropedx-gamemain-rotatedcircle-circlesarray).

Returns: Whether another circle contains at least one of the same objects.

### ContainsSameObjectWithCircle(RotatedCircle anotherCircle) {#m-cuttheropedx-gamemain-rotatedcircle-containssameobjectwithcircle-cuttheropedx-gamemain-rotatedcircle}

```csharp
public bool ContainsSameObjectWithCircle(RotatedCircle anotherCircle)
```

Checks whether this circle and another circle share a contained game object.

Parameters:

- `anotherCircle`: Circle to compare against.

Returns: Whether both circles contain at least one identical game object.

### Copy() {#m-cuttheropedx-gamemain-rotatedcircle-copy}

```csharp
public RotatedCircle Copy()
```

Creates a detached copy with the same position, size, handles, contained objects, and circle list.

Returns: The copied rotated circle.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-rotatedcircle-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-gamemain-rotatedcircle-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### HasOneHandle() {#m-cuttheropedx-gamemain-rotatedcircle-hasonehandle}

```csharp
public bool HasOneHandle()
```

Gets whether the circle is using a single visible controller handle.

Returns: Whether the left controller handle is hidden.

### IsLeftControllerActive() {#m-cuttheropedx-gamemain-rotatedcircle-isleftcontrolleractive}

```csharp
public bool IsLeftControllerActive()
```

Gets whether the left controller handle is active.

Returns: Whether the left active-controller visual is visible.

### IsRightControllerActive() {#m-cuttheropedx-gamemain-rotatedcircle-isrightcontrolleractive}

```csharp
public bool IsRightControllerActive()
```

Gets whether the right controller handle is active.

Returns: Whether the right active-controller visual is visible.

### SetHasOneHandle(bool value) {#m-cuttheropedx-gamemain-rotatedcircle-sethasonehandle-system-boolean}

```csharp
public void SetHasOneHandle(bool value)
```

Sets whether the circle should expose only one controller handle.

Parameters:

- `value`: Whether to hide the left controller handle.

### SetIsLeftControllerActive(bool value) {#m-cuttheropedx-gamemain-rotatedcircle-setisleftcontrolleractive-system-boolean}

```csharp
public void SetIsLeftControllerActive(bool value)
```

Sets whether the left controller handle is active.

Parameters:

- `value`: Whether to show the left active-controller visual.

### SetIsRightControllerActive(bool value) {#m-cuttheropedx-gamemain-rotatedcircle-setisrightcontrolleractive-system-boolean}

```csharp
public void SetIsRightControllerActive(bool value)
```

Sets whether the right controller handle is active.

Parameters:

- `value`: Whether to show the right active-controller visual.

### SetSize(float value) {#m-cuttheropedx-gamemain-rotatedcircle-setsize-system-single}

```csharp
public void SetSize(float value)
```

Sets the circle size and rescales all visual parts and controllers.

Parameters:

- `value`: Circle size in world units.

### UpdateChildPositions() {#m-cuttheropedx-gamemain-rotatedcircle-updatechildpositions}

```csharp
public void UpdateChildPositions()
```

Updates child visual positions from the current circle position and size.


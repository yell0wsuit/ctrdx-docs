---
title: Class RotatedCircle2
description: Alternate rotatable vinyl circle visual built from quadrant sprites.
---

# Class RotatedCircle2

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `RotatedCircle2.cs`

Alternate rotatable vinyl circle visual built from quadrant sprites.

## Declaration

```csharp
internal sealed class RotatedCircle2 : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [RotatedCircle2](RotatedCircle2.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### RotatedCircle2() {#m-cuttheropedx-gamemain-rotatedcircle2-ctor}

```csharp
public RotatedCircle2()
```

Creates the quadrant-based vinyl circle visuals, controller handles, and contained-object collection.

## Fields

### CONTOUR_COLOR {#f-cuttheropedx-gamemain-rotatedcircle2-contour-color}

```csharp
private RGBAColor CONTOUR_COLOR
```

Color used when drawing overlapping circle contours.

### INNER_CIRCLE_COLOR1 {#f-cuttheropedx-gamemain-rotatedcircle2-inner-circle-color1}

```csharp
private RGBAColor INNER_CIRCLE_COLOR1
```

Primary inner circle color.

### INNER_CIRCLE_COLOR2 {#f-cuttheropedx-gamemain-rotatedcircle2-inner-circle-color2}

```csharp
private RGBAColor INNER_CIRCLE_COLOR2
```

Secondary inner circle color.

### VinylTexture {#f-cuttheropedx-gamemain-rotatedcircle2-vinyltexture}

```csharp
private const string VinylTexture
```

Texture resource used for rotated circle visuals.

### circlesArray {#f-cuttheropedx-gamemain-rotatedcircle2-circlesarray}

```csharp
public List<RotatedCircle2> circlesArray
```

Shared list of alternate rotated circles in the level.

### containedObjects {#f-cuttheropedx-gamemain-rotatedcircle2-containedobjects}

```csharp
public List<BaseElement> containedObjects
```

Objects currently contained by this circle.

### handle1 {#f-cuttheropedx-gamemain-rotatedcircle2-handle1}

```csharp
public Vector handle1
```

World-space position of the first controller handle.

### handle2 {#f-cuttheropedx-gamemain-rotatedcircle2-handle2}

```csharp
public Vector handle2
```

World-space position of the second controller handle.

### operating {#f-cuttheropedx-gamemain-rotatedcircle2-operating}

```csharp
public int operating
```

Identifier for the controller currently being operated, or -1 when idle.

### size {#f-cuttheropedx-gamemain-rotatedcircle2-size}

```csharp
public float size
```

Logical circle size in world units.

### sizeInPixels {#f-cuttheropedx-gamemain-rotatedcircle2-sizeinpixels}

```csharp
public float sizeInPixels
```

Rendered circle radius in pixels.

### soundPlaying {#f-cuttheropedx-gamemain-rotatedcircle2-soundplaying}

```csharp
public int soundPlaying
```

Identifier for the sound currently playing for this circle, or -1 when idle.

### vinilActiveControllerL {#f-cuttheropedx-gamemain-rotatedcircle2-vinilactivecontrollerl}

```csharp
private readonly Image vinilActiveControllerL
```

Left active-controller handle visual.

### vinilActiveControllerR {#f-cuttheropedx-gamemain-rotatedcircle2-vinilactivecontrollerr}

```csharp
private readonly Image vinilActiveControllerR
```

Right active-controller handle visual.

### vinilBL {#f-cuttheropedx-gamemain-rotatedcircle2-vinilbl}

```csharp
private Image vinilBL
```

Bottom-left vinyl quadrant visual.

### vinilBR {#f-cuttheropedx-gamemain-rotatedcircle2-vinilbr}

```csharp
private Image vinilBR
```

Bottom-right vinyl quadrant visual.

### vinilCenter {#f-cuttheropedx-gamemain-rotatedcircle2-vinilcenter}

```csharp
private Image vinilCenter
```

Center vinyl visual.

### vinilControllerL {#f-cuttheropedx-gamemain-rotatedcircle2-vinilcontrollerl}

```csharp
private readonly Image vinilControllerL
```

Left controller handle visual.

### vinilControllerR {#f-cuttheropedx-gamemain-rotatedcircle2-vinilcontrollerr}

```csharp
private readonly Image vinilControllerR
```

Right controller handle visual.

### vinilHighlightL {#f-cuttheropedx-gamemain-rotatedcircle2-vinilhighlightl}

```csharp
private Image vinilHighlightL
```

Left highlight visual.

### vinilHighlightR {#f-cuttheropedx-gamemain-rotatedcircle2-vinilhighlightr}

```csharp
private Image vinilHighlightR
```

Right highlight visual.

### vinilStickerL {#f-cuttheropedx-gamemain-rotatedcircle2-vinilstickerl}

```csharp
private Image vinilStickerL
```

Left sticker visual.

### vinilStickerR {#f-cuttheropedx-gamemain-rotatedcircle2-vinilstickerr}

```csharp
private Image vinilStickerR
```

Right sticker visual.

### vinilTL {#f-cuttheropedx-gamemain-rotatedcircle2-viniltl}

```csharp
private Image vinilTL
```

Top-left vinyl quadrant visual.

### vinilTR {#f-cuttheropedx-gamemain-rotatedcircle2-viniltr}

```csharp
private Image vinilTR
```

Top-right vinyl quadrant visual.

## Methods

### ContainsSameObjectWithAnotherCircle() {#m-cuttheropedx-gamemain-rotatedcircle2-containssameobjectwithanothercircle}

```csharp
public bool ContainsSameObjectWithAnotherCircle()
```

Checks whether this circle shares any contained object with another circle in [circlesArray](#f-cuttheropedx-gamemain-rotatedcircle2-circlesarray).

Returns: Whether another circle contains at least one of the same objects.

### ContainsSameObjectWithCircle(RotatedCircle2 anotherCircle) {#m-cuttheropedx-gamemain-rotatedcircle2-containssameobjectwithcircle-cuttheropedx-gamemain-rotatedcircle2}

```csharp
public bool ContainsSameObjectWithCircle(RotatedCircle2 anotherCircle)
```

Checks whether this circle and another circle share a contained object.

Parameters:

- `anotherCircle`: Circle to compare against.

Returns: Whether both circles contain at least one identical contained object.

### Copy() {#m-cuttheropedx-gamemain-rotatedcircle2-copy}

```csharp
public RotatedCircle2 Copy()
```

Creates a detached copy with the same position, size, handles, contained objects, and circle list.

Returns: The copied rotated circle.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-rotatedcircle2-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-gamemain-rotatedcircle2-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### HasOneHandle() {#m-cuttheropedx-gamemain-rotatedcircle2-hasonehandle}

```csharp
public bool HasOneHandle()
```

Gets whether the circle is using a single visible controller handle.

Returns: Whether the left controller handle is hidden.

### IsLeftControllerActive() {#m-cuttheropedx-gamemain-rotatedcircle2-isleftcontrolleractive}

```csharp
public bool IsLeftControllerActive()
```

Gets whether the left controller handle is active.

Returns: Whether the left active-controller visual is visible.

### IsRightControllerActive() {#m-cuttheropedx-gamemain-rotatedcircle2-isrightcontrolleractive}

```csharp
public bool IsRightControllerActive()
```

Gets whether the right controller handle is active.

Returns: Whether the right active-controller visual is visible.

### SetHasOneHandle(bool value) {#m-cuttheropedx-gamemain-rotatedcircle2-sethasonehandle-system-boolean}

```csharp
public void SetHasOneHandle(bool value)
```

Sets whether the circle should expose only one controller handle.

Parameters:

- `value`: Whether to hide the left controller handle.

### SetIsLeftControllerActive(bool value) {#m-cuttheropedx-gamemain-rotatedcircle2-setisleftcontrolleractive-system-boolean}

```csharp
public void SetIsLeftControllerActive(bool value)
```

Sets whether the left controller handle is active.

Parameters:

- `value`: Whether to show the left active-controller visual.

### SetIsRightControllerActive(bool value) {#m-cuttheropedx-gamemain-rotatedcircle2-setisrightcontrolleractive-system-boolean}

```csharp
public void SetIsRightControllerActive(bool value)
```

Sets whether the right controller handle is active.

Parameters:

- `value`: Whether to show the right active-controller visual.

### SetSize(float value) {#m-cuttheropedx-gamemain-rotatedcircle2-setsize-system-single}

```csharp
public void SetSize(float value)
```

Sets the circle size and rescales all quadrant, sticker, highlight, and controller visuals.

Parameters:

- `value`: Circle size in world units.

### UpdateChildPositions() {#m-cuttheropedx-gamemain-rotatedcircle2-updatechildpositions}

```csharp
public void UpdateChildPositions()
```

Updates child visual positions from the current circle position and size.


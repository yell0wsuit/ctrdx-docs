---
title: Class GameObject
description: An Animation with a bounding box, mover support, and collision testing. Base class for all interactive game objects.
---

# Class GameObject

Namespace: `CutTheRopeDX.Framework.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `GameObject.cs`

An [Animation](../Visual/Animation.md) with a bounding box, mover support, and collision testing. Base class for all interactive game objects.

## Declaration

```csharp
internal class GameObject : Animation
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](../Visual/BaseElement.md)
- [Image](../Visual/Image.md)
- [Animation](../Visual/Animation.md)
- [GameObject](GameObject.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [Bubble](../../GameMain/Bubble.md)
- [CTRGameObject](../../GameMain/CTRGameObject.md)
- [CharAnimations](../../GameMain/CharAnimations.md)
- [FlashXmlStageRoot](../../GameMain/FlashXmlStageRoot.md)
- [Pump](../../GameMain/Pump.md)
- [Razor](../../GameMain/Razor.md)
- [Snail](../../GameMain/Snail.md)

## Fields

### MAX_MOVER_CAPACITY {#f-cuttheropedx-framework-helpers-gameobject-max-mover-capacity}

```csharp
public const int MAX_MOVER_CAPACITY
```

Maximum number of path points a mover can hold.

### bb {#f-cuttheropedx-framework-helpers-gameobject-bb}

```csharp
public CTRRectangle bb
```

Axis-aligned bounding box relative to the element origin.

### mover {#f-cuttheropedx-framework-helpers-gameobject-mover}

```csharp
public Mover mover
```

Mover controlling this object's position and rotation, or `null`.

### rbb {#f-cuttheropedx-framework-helpers-gameobject-rbb}

```csharp
public Quad2D rbb
```

Rotated bounding box quad, updated when [rotatedBB](#f-cuttheropedx-framework-helpers-gameobject-rotatedbb) is `true`.

### rotatedBB {#f-cuttheropedx-framework-helpers-gameobject-rotatedbb}

```csharp
public bool rotatedBB
```

Whether the bounding box has been rotated.

### state {#f-cuttheropedx-framework-helpers-gameobject-state}

```csharp
public int state
```

Current state of this game object.

### topLeftCalculated {#f-cuttheropedx-framework-helpers-gameobject-topleftcalculated}

```csharp
public bool topLeftCalculated
```

Whether [CalculateTopLeft](../Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-calculatetopleft-cuttheropedx-framework-visual-baseelement) has been called this frame.

## Methods

### Dispose(bool disposing) {#m-cuttheropedx-framework-helpers-gameobject-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-framework-helpers-gameobject-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### DrawBB() {#m-cuttheropedx-framework-helpers-gameobject-drawbb}

```csharp
public virtual void DrawBB()
```

Draws the bounding box outline for debugging.

### GameObject_create(CTRTexture2D texture) {#m-cuttheropedx-framework-helpers-gameobject-gameobject-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
private static GameObject GameObject_create(CTRTexture2D texture)
```

Creates a game object from the specified `texture`.

Parameters:

- `texture`: Texture to create the object from.

Returns: A new game object initialized with `texture`.

### GameObject_createWithResIDQuad(string resourceName, int quadIndex) {#m-cuttheropedx-framework-helpers-gameobject-gameobject-createwithresidquad-system-string-system-int32}

```csharp
public static GameObject GameObject_createWithResIDQuad(string resourceName, int quadIndex)
```

Creates a game object from the specified texture resource and quad index.

Parameters:

- `resourceName`: Texture resource name.
- `quadIndex`: Quad index to draw.

Returns: A new game object configured to draw the selected quad.

### InitWithTexture(CTRTexture2D texture) {#m-cuttheropedx-framework-helpers-gameobject-initwithtexture-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public override Image InitWithTexture(CTRTexture2D texture)
```

Initializes the image with the given texture, setting the first quad or full image.

Returns: This image instance for chaining.

### ObjectsIntersect(GameObject o1, GameObject o2) {#m-cuttheropedx-framework-helpers-gameobject-objectsintersect-cuttheropedx-framework-helpers-gameobject-cuttheropedx-framework-helpers-gameobject}

```csharp
public static bool ObjectsIntersect(GameObject o1, GameObject o2)
```

Tests axis-aligned bounding box intersection between two objects.

Parameters:

- `o1`: First object.
- `o2`: Second object.

Returns: `true` when the objects' AABBs intersect; otherwise `false`.

### ObjectsIntersectRotatedWithUnrotated(GameObject o1, GameObject o2) {#m-cuttheropedx-framework-helpers-gameobject-objectsintersectrotatedwithunrotated-cuttheropedx-framework-helpers-gameobject-cuttheropedx-framework-helpers-gameobject}

```csharp
public static bool ObjectsIntersectRotatedWithUnrotated(GameObject o1, GameObject o2)
```

Tests OBB intersection between a rotated object `o1` and an unrotated object `o2`.

Parameters:

- `o1`: Rotated object.
- `o2`: Unrotated object.

Returns: `true` when the objects intersect; otherwise `false`.

### ParseMover(XElement xml) {#m-cuttheropedx-framework-helpers-gameobject-parsemover-system-xml-linq-xelement}

```csharp
public virtual void ParseMover(XElement xml)
```

Parses mover path and speed attributes from the XML element.

Parameters:

- `xml`: XML element containing mover attributes.

### PointInObject(Vector p, GameObject o) {#m-cuttheropedx-framework-helpers-gameobject-pointinobject-cuttheropedx-framework-core-vector-cuttheropedx-framework-helpers-gameobject}

```csharp
public static bool PointInObject(Vector p, GameObject o)
```

Tests whether point `p` is inside the bounding box of `o`.

Parameters:

- `p`: Point to test.
- `o`: Object whose bounding box to test against.

Returns: `true` when the point is inside the object bounds; otherwise `false`.

### RectInObject(float r1x, float r1y, float r2x, float r2y, GameObject o) {#m-cuttheropedx-framework-helpers-gameobject-rectinobject-system-single-system-single-system-single-system-single-cuttheropedx-framework-helpers-gameobject}

```csharp
public static bool RectInObject(float r1x, float r1y, float r2x, float r2y, GameObject o)
```

Tests whether the rectangle defined by corners (`r1x`,`r1y`)–(`r2x`,`r2y`) intersects the bounding box of `o`.

Parameters:

- `r1x`: Left X of the rectangle.
- `r1y`: Top Y of the rectangle.
- `r2x`: Right X of the rectangle.
- `r2y`: Bottom Y of the rectangle.
- `o`: Object whose bounding box to test against.

Returns: `true` when the rectangles intersect; otherwise `false`.

### RotateWithBB(float angle) {#m-cuttheropedx-framework-helpers-gameobject-rotatewithbb-system-single}

```csharp
public virtual void RotateWithBB(float angle)
```

Rotates the object and its bounding box by the specified `angle` in degrees.

Parameters:

- `angle`: Rotation angle in degrees.

### SetBBFromFirstQuad() {#m-cuttheropedx-framework-helpers-gameobject-setbbfromfirstquad}

```csharp
public virtual void SetBBFromFirstQuad()
```

Sets the bounding box from the first quad's offset and size.

### SetMover(Mover moverValue) {#m-cuttheropedx-framework-helpers-gameobject-setmover-cuttheropedx-framework-helpers-mover}

```csharp
public virtual void SetMover(Mover moverValue)
```

Assigns a mover to control this object's position and rotation.

Parameters:

- `moverValue`: Mover instance to assign.

### Update(float delta) {#m-cuttheropedx-framework-helpers-gameobject-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


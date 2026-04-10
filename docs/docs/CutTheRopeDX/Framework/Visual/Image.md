---
title: Class Image
description: A BaseElement backed by a texture, supporting full-image or quad-based drawing.
---

# Class Image

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `Image.cs`

A [BaseElement](BaseElement.md) backed by a texture, supporting full-image or quad-based drawing.

## Declaration

```csharp
internal class Image : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Image](Image.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [Animation](Animation.md)
- [FlashXmlImage](../../GameMain/FlashXmlImage.md)
- [HLiftScrollbar](../../Commons/HLiftScrollbar.md)
- [HorizontallyTiledImage](HorizontallyTiledImage.md)
- [TiledImage](TiledImage.md)
- [VerticallyTiledImage](VerticallyTiledImage.md)
- [WaterElement](../../GameMain/WaterElement.md)

## Fields

### ACTION_SET_DRAWQUAD {#f-cuttheropedx-framework-visual-image-action-set-drawquad}

```csharp
public const string ACTION_SET_DRAWQUAD
```

Timeline action name for setting the draw quad index.

### quadToDraw {#f-cuttheropedx-framework-visual-image-quadtodraw}

```csharp
public int quadToDraw
```

Index of the quad to draw, or -1 to draw the full image.

### restoreCutTransparency {#f-cuttheropedx-framework-visual-image-restorecuttransparency}

```csharp
public bool restoreCutTransparency
```

Whether to restore trimmed transparency offsets when drawing quads.

### texture {#f-cuttheropedx-framework-visual-image-texture}

```csharp
public CTRTexture2D texture
```

The texture used for drawing this image.

## Methods

### ApplyPerQuadPreCutSize(int quad) {#m-cuttheropedx-framework-visual-image-applyperquadprecutsize-system-int32}

```csharp
private bool ApplyPerQuadPreCutSize(int quad)
```

Applies the pre-cut size for the given `quad` if available. Returns `true` if applied.

Parameters:

- `quad`: Quad index to apply pre-cut size for.

Returns: `true` if a pre-cut size was applied; otherwise `false`.

### CreateFromXML(XElement xml) {#m-cuttheropedx-framework-visual-image-createfromxml-system-xml-linq-xelement}

```csharp
public virtual BaseElement CreateFromXML(XElement xml)
```

Creates a [BaseElement](BaseElement.md) from an XML definition. Not implemented in this class.

Parameters:

- `xml`: XML element to create from.

Returns: The created element.

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-image-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### DoRestoreCutTransparency() {#m-cuttheropedx-framework-visual-image-dorestorecuttransparency}

```csharp
public virtual void DoRestoreCutTransparency()
```

Restores the pre-cut size so that trimmed transparency is accounted for in positioning.

### Draw() {#m-cuttheropedx-framework-visual-image-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### DrawQuad(int n) {#m-cuttheropedx-framework-visual-image-drawquad-system-int32}

```csharp
public virtual void DrawQuad(int n)
```

Draws the specified quad from the bound texture.

Parameters:

- `n`: Quad index to draw.

### GetQuadCenter(string textureResourceName, int quad) {#m-cuttheropedx-framework-visual-image-getquadcenter-system-string-system-int32}

```csharp
public static Vector GetQuadCenter(string textureResourceName, int quad)
```

Gets the `quad` center for the specified texture name.

Parameters:

- `textureResourceName`: Texture resource name.
- `quad`: Index of the quad.

Returns: The center point of the `quad` in texture space.

### GetQuadOffset(string textureResourceName, int quad) {#m-cuttheropedx-framework-visual-image-getquadoffset-system-string-system-int32}

```csharp
public static Vector GetQuadOffset(string textureResourceName, int quad)
```

Gets the `quad` offset for the specified texture name.

Parameters:

- `textureResourceName`: Texture resource name.
- `quad`: Index of the quad.

Returns: The offset of the `quad`, or (0, 0) if no offsets are defined.

### GetQuadSize(string textureResourceName, int quad) {#m-cuttheropedx-framework-visual-image-getquadsize-system-string-system-int32}

```csharp
public static Vector GetQuadSize(string textureResourceName, int quad)
```

Gets the `quad` size for the specified texture name.

Parameters:

- `textureResourceName`: Texture resource name.
- `quad`: Index of the quad.

Returns: The width and height of the `quad` as a vector.

### GetRelativeQuadOffset(string textureResourceName, int quadToCountFrom, int quad) {#m-cuttheropedx-framework-visual-image-getrelativequadoffset-system-string-system-int32-system-int32}

```csharp
public static Vector GetRelativeQuadOffset(string textureResourceName, int quadToCountFrom, int quad)
```

Gets the `quad` offset relative to `quadToCountFrom` for the specified texture name.

Parameters:

- `textureResourceName`: Texture resource name.
- `quadToCountFrom`: Base quad index.
- `quad`: Target quad index.

Returns: The offset of `quad` relative to `quadToCountFrom`.

### HandleAction(ActionData a) {#m-cuttheropedx-framework-visual-image-handleaction-cuttheropedx-framework-visual-actiondata}

```csharp
public override bool HandleAction(ActionData a)
```

Handles a timeline action. Returns `true` if the action was recognized.

Parameters:

- `a`: Action data to process.

Returns: `true` if the action was recognized and handled.

### Image_create(CTRTexture2D t) {#m-cuttheropedx-framework-visual-image-image-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public static Image Image_create(CTRTexture2D t)
```

Creates an image from the specified texture.

Parameters:

- `t`: Texture to create the image from.

Returns: A new [Image](Image.md) bound to `t`.

### Image_createWithResID(string resourceName) {#m-cuttheropedx-framework-visual-image-image-createwithresid-system-string}

```csharp
public static Image Image_createWithResID(string resourceName)
```

Creates an image from the specified texture resource name.

Parameters:

- `resourceName`: Texture resource name.

Returns: A new [Image](Image.md) bound to the resolved texture.

### Image_createWithResIDQuad(string resourceName, int q) {#m-cuttheropedx-framework-visual-image-image-createwithresidquad-system-string-system-int32}

```csharp
public static Image Image_createWithResIDQuad(string resourceName, int q)
```

Creates an image from the specified texture resource name and sets the draw quad.

Parameters:

- `resourceName`: Texture resource name.
- `q`: Quad index to draw.

Returns: A new [Image](Image.md) configured to draw the specified quad.

### InitWithTexture(CTRTexture2D t) {#m-cuttheropedx-framework-visual-image-initwithtexture-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public virtual Image InitWithTexture(CTRTexture2D t)
```

Initializes the image with the given texture, setting the first quad or full image.

Parameters:

- `t`: Texture to initialize with.

Returns: This image instance for chaining.

### SetDrawFullImage() {#m-cuttheropedx-framework-visual-image-setdrawfullimage}

```csharp
public virtual void SetDrawFullImage()
```

Switches to drawing the entire texture instead of a single quad.

### SetDrawQuad(int n) {#m-cuttheropedx-framework-visual-image-setdrawquad-system-int32}

```csharp
public virtual void SetDrawQuad(int n)
```

Sets the quad index to draw and updates width/height accordingly.

Parameters:

- `n`: Quad index to draw.

### SetElementPositionWithQuadOffset(BaseElement e, string textureResourceName, int quad) {#m-cuttheropedx-framework-visual-image-setelementpositionwithquadoffset-cuttheropedx-framework-visual-baseelement-system-string-system-int32}

```csharp
public static void SetElementPositionWithQuadOffset(BaseElement e, string textureResourceName, int quad)
```

Positions an element using the offset of the specified `quad` and texture name.

Parameters:

- `e`: Element to position.
- `textureResourceName`: Texture resource name.
- `quad`: Target quad.

### SetElementPositionWithRelativeQuadOffset(BaseElement e, string textureResourceName, int quadToCountFrom, int quad) {#m-cuttheropedx-framework-visual-image-setelementpositionwithrelativequadoffset-cuttheropedx-framework-visual-baseelement-system-string-system-int32-system-int32}

```csharp
public static void SetElementPositionWithRelativeQuadOffset(BaseElement e, string textureResourceName, int quadToCountFrom, int quad)
```

Positions an element using the relative offset of the specified `quad` and texture name.

Parameters:

- `e`: Element to position.
- `textureResourceName`: Texture resource name.
- `quadToCountFrom`: Base quad index.
- `quad`: Target quad index.


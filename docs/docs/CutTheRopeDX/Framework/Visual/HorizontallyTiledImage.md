---
title: Class HorizontallyTiledImage
description: An Image that draws three quads (left, center, right) with the center tiled horizontally to fill the width.
---

# Class HorizontallyTiledImage

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `HorizontallyTiledImage.cs`

An [Image](Image.md) that draws three quads (left, center, right) with the center tiled horizontally to fill the width.

## Declaration

```csharp
internal sealed class HorizontallyTiledImage : Image
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Image](Image.md)
- [HorizontallyTiledImage](HorizontallyTiledImage.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### align {#f-cuttheropedx-framework-visual-horizontallytiledimage-align}

```csharp
public int align
```

Alignment flag for the tiled image.

### offsets {#f-cuttheropedx-framework-visual-horizontallytiledimage-offsets}

```csharp
public float[] offsets
```

Vertical offsets for each tile to center them within the element height.

### tiles {#f-cuttheropedx-framework-visual-horizontallytiledimage-tiles}

```csharp
public int[] tiles
```

Quad indices for the left, center, and right tiles.

## Methods

### Draw() {#m-cuttheropedx-framework-visual-horizontallytiledimage-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### HorizontallyTiledImage_create(CTRTexture2D t) {#m-cuttheropedx-framework-visual-horizontallytiledimage-horizontallytiledimage-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public static HorizontallyTiledImage HorizontallyTiledImage_create(CTRTexture2D t)
```

Creates a horizontally tiled image from the specified texture.

Parameters:

- `t`: Texture to use.

Returns: A new horizontally tiled image instance.

### HorizontallyTiledImage_createWithResID(string resourceName) {#m-cuttheropedx-framework-visual-horizontallytiledimage-horizontallytiledimage-createwithresid-system-string}

```csharp
public static HorizontallyTiledImage HorizontallyTiledImage_createWithResID(string resourceName)
```

Creates a tiled image from the specified texture resource name.

Parameters:

- `resourceName`: Texture resource name.

Returns: A new horizontally tiled image initialized from the requested resource.

### InitWithTexture(CTRTexture2D t) {#m-cuttheropedx-framework-visual-horizontallytiledimage-initwithtexture-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public override Image InitWithTexture(CTRTexture2D t)
```

Initializes the image with the given texture, setting the first quad or full image.

Parameters:

- `t`: Texture to initialize with.

Returns: This image instance for chaining.

### SetTileHorizontallyLeftCenterRight(int l, int c, int r) {#m-cuttheropedx-framework-visual-horizontallytiledimage-settilehorizontallyleftcenterright-system-int32-system-int32-system-int32}

```csharp
public void SetTileHorizontallyLeftCenterRight(int l, int c, int r)
```

Sets the left, center, and right tile quad indices and computes vertical offsets.

Parameters:

- `l`: Left tile quad index.
- `c`: Center tile quad index (tiled horizontally).
- `r`: Right tile quad index.


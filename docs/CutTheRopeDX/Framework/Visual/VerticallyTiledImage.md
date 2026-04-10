---
title: Class VerticallyTiledImage
description: An Image that draws three quads (top, center, bottom) with the center tiled vertically to fill the height.
---

# Class VerticallyTiledImage

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `VerticallyTiledImage.cs`

An [Image](Image.md) that draws three quads (top, center, bottom) with the center tiled vertically to fill the height.

## Declaration

```csharp
internal sealed class VerticallyTiledImage : Image
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Image](Image.md)
- [VerticallyTiledImage](VerticallyTiledImage.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### align {#f-cuttheropedx-framework-visual-verticallytiledimage-align}

```csharp
public int align
```

Alignment flag for the tiled image.

### offsets {#f-cuttheropedx-framework-visual-verticallytiledimage-offsets}

```csharp
public float[] offsets
```

Horizontal offsets for each tile to center them within the element width.

### tiles {#f-cuttheropedx-framework-visual-verticallytiledimage-tiles}

```csharp
public int[] tiles
```

Quad indices for the top, center, and bottom tiles.

## Methods

### Draw() {#m-cuttheropedx-framework-visual-verticallytiledimage-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### InitWithTexture(CTRTexture2D t) {#m-cuttheropedx-framework-visual-verticallytiledimage-initwithtexture-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public override Image InitWithTexture(CTRTexture2D t)
```

Initializes the image with the given texture, setting the first quad or full image.

Parameters:

- `t`: Texture to initialize with.

Returns: This image instance for chaining.

### SetTileVerticallyTopCenterBottom(int t, int c, int b) {#m-cuttheropedx-framework-visual-verticallytiledimage-settileverticallytopcenterbottom-system-int32-system-int32-system-int32}

```csharp
public void SetTileVerticallyTopCenterBottom(int t, int c, int b)
```

Sets the top, center, and bottom tile quad indices and computes horizontal offsets.

Parameters:

- `t`: Top tile quad index.
- `c`: Center tile quad index (tiled vertically).
- `b`: Bottom tile quad index.


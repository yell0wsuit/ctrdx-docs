---
title: Class TiledImage
description: An Image that tiles a single quad to fill its width and height.
---

# Class TiledImage

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `TiledImage.cs`

An [Image](Image.md) that tiles a single quad to fill its width and height.

## Declaration

```csharp
internal sealed class TiledImage : Image
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Image](Image.md)
- [TiledImage](TiledImage.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### q {#f-cuttheropedx-framework-visual-tiledimage-q}

```csharp
private int q
```

Quad index to tile, or -1 for full image.

## Methods

### Draw() {#m-cuttheropedx-framework-visual-tiledimage-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### SetTile(int t) {#m-cuttheropedx-framework-visual-tiledimage-settile-system-int32}

```csharp
public void SetTile(int t)
```

Sets the quad index to tile.

Parameters:

- `t`: Quad index, or -1 for full image.

### TiledImage_create(CTRTexture2D t) {#m-cuttheropedx-framework-visual-tiledimage-tiledimage-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
private static TiledImage TiledImage_create(CTRTexture2D t)
```

Creates a tiled image from the specified texture.

Parameters:

- `t`: Texture to tile.

Returns: A new tiled image instance.

### TiledImage_createWithResID(string resourceName) {#m-cuttheropedx-framework-visual-tiledimage-tiledimage-createwithresid-system-string}

```csharp
public static TiledImage TiledImage_createWithResID(string resourceName)
```

Creates a tiled image from the specified texture resource name.

Parameters:

- `resourceName`: Texture resource name.

Returns: A new tiled image initialized from the requested resource.


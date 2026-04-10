---
title: Class ColorRect
description: A BaseElement that draws a solid colored rectangle.
---

# Class ColorRect

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `ColorRect.cs`

A [BaseElement](BaseElement.md) that draws a solid colored rectangle.

## Declaration

```csharp
internal class ColorRect : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [ColorRect](ColorRect.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Properties

### FillColor {#p-cuttheropedx-framework-visual-colorrect-fillcolor}

```csharp
public RGBAColor FillColor { get; set; }
```

Gets or sets the fill color of the rectangle.

## Methods

### Create(float w, float h, RGBAColor color) {#m-cuttheropedx-framework-visual-colorrect-create-system-single-system-single-cuttheropedx-framework-rgbacolor}

```csharp
public static ColorRect Create(float w, float h, RGBAColor color)
```

Creates a new [ColorRect](ColorRect.md) with the specified dimensions and `color`.

Parameters:

- `w`: Width of the rectangle in pixels.
- `h`: Height of the rectangle in pixels.
- `color`: Fill color of the rectangle.

Returns: A new [ColorRect](ColorRect.md) instance.

### Draw() {#m-cuttheropedx-framework-visual-colorrect-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).


---
title: Class RectangleElement
description: A BaseElement that draws a colored rectangle, either filled or outline.
---

# Class RectangleElement

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `RectangleElement.cs`

A [BaseElement](BaseElement.md) that draws a colored rectangle, either filled or outline.

## Declaration

```csharp
internal class RectangleElement : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [RectangleElement](RectangleElement.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [Processing](../../GameMain/Processing.md)

## Constructors

### RectangleElement() {#m-cuttheropedx-framework-visual-rectangleelement-ctor}

```csharp
public RectangleElement()
```

Initializes a new [RectangleElement](RectangleElement.md) with solid fill enabled.

## Fields

### solid {#f-cuttheropedx-framework-visual-rectangleelement-solid}

```csharp
public bool solid
```

Whether the rectangle is drawn filled or as an outline.

## Methods

### Draw() {#m-cuttheropedx-framework-visual-rectangleelement-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).


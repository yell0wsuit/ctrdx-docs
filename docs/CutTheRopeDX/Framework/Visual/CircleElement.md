---
title: Class CircleElement
description: A BaseElement that draws a circle shape.
---

# Class CircleElement

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `CircleElement.cs`

A [BaseElement](BaseElement.md) that draws a circle shape.

## Declaration

```csharp
internal sealed class CircleElement : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [CircleElement](CircleElement.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### CircleElement() {#m-cuttheropedx-framework-visual-circleelement-ctor}

```csharp
public CircleElement()
```

Initializes a new [CircleElement](CircleElement.md) with default vertex count and solid fill.

## Fields

### solid {#f-cuttheropedx-framework-visual-circleelement-solid}

```csharp
public bool solid
```

Whether the circle is drawn filled or as an outline.

### vertextCount {#f-cuttheropedx-framework-visual-circleelement-vertextcount}

```csharp
public int vertextCount
```

Number of vertices used to approximate the circle.

## Methods

### Draw() {#m-cuttheropedx-framework-visual-circleelement-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).


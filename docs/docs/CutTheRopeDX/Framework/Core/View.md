---
title: Class View
description: Full-screen root view used by controllers to host interactive elements.
---

# Class View

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `View.cs`

Full-screen root view used by controllers to host interactive elements.

## Declaration

```csharp
internal class View : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](../Visual/BaseElement.md)
- [View](View.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [GameView](../../GameMain/GameView.md)
- [LoadingView](../../GameMain/LoadingView.md)
- [MenuView](../../GameMain/MenuView.md)

## Constructors

### View() {#m-cuttheropedx-framework-core-view-ctor}

```csharp
public View()
```

Initializes a view sized to the current logical screen dimensions.

## Methods

### Draw() {#m-cuttheropedx-framework-core-view-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).


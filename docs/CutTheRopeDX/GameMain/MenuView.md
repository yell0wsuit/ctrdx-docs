---
title: Class MenuView
description: Base menu view that applies standard menu rendering state.
---

# Class MenuView

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MenuView.cs`

Base menu view that applies standard menu rendering state.

## Declaration

```csharp
internal class MenuView : View
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [View](../Framework/Core/View.md)
- [MenuView](MenuView.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [MovieView](MovieView.md)

## Methods

### Draw() {#m-cuttheropedx-gamemain-menuview-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### Update(float t) {#m-cuttheropedx-gamemain-menuview-update-system-single}

```csharp
public override void Update(float t)
```

Updates children and advances the current timeline by `delta` seconds.


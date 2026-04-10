---
title: Class MovieView
description: Menu view variant that drives and draws movie playback.
---

# Class MovieView

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MovieView.cs`

Menu view variant that drives and draws movie playback.

## Declaration

```csharp
internal sealed class MovieView : MenuView
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [View](../Framework/Core/View.md)
- [MenuView](MenuView.md)
- [MovieView](MovieView.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Methods

### Draw() {#m-cuttheropedx-gamemain-movieview-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### Update(float t) {#m-cuttheropedx-gamemain-movieview-update-system-single}

```csharp
public override void Update(float t)
```

Updates children and advances the current timeline by `delta` seconds.


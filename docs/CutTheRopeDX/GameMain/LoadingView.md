---
title: Class LoadingView
description: Loading screen view that draws the pack cover background and progress animation.
---

# Class LoadingView

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `LoadingView.cs`

Loading screen view that draws the pack cover background and progress animation.

## Declaration

```csharp
internal sealed class LoadingView : View
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [View](../Framework/Core/View.md)
- [LoadingView](LoadingView.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### animationComplete {#f-cuttheropedx-gamemain-loadingview-animationcomplete}

```csharp
private bool animationComplete
```

Whether the progress animation has reached its completion threshold.

### currentPercent {#f-cuttheropedx-gamemain-loadingview-currentpercent}

```csharp
private float currentPercent
```

Smoothed loading percentage currently displayed by the progress animation.

### game {#f-cuttheropedx-gamemain-loadingview-game}

```csharp
public bool game
```

Whether the view is loading into gameplay instead of the menu flow.

### initialized {#f-cuttheropedx-gamemain-loadingview-initialized}

```csharp
private bool initialized
```

Whether the progress animation has been initialized from the resource manager.

### s_Color1 {#f-cuttheropedx-gamemain-loadingview-s-color1}

```csharp
private static Color s_Color1
```

Tint used for the mirrored pack-cover background.

## Methods

### Draw() {#m-cuttheropedx-gamemain-loadingview-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### IsAnimationComplete() {#m-cuttheropedx-gamemain-loadingview-isanimationcomplete}

```csharp
public bool IsAnimationComplete()
```

Gets whether the smoothed loading animation has reached completion.

Returns: `true` when the progress animation is complete; otherwise, `false`.

### Show() {#m-cuttheropedx-gamemain-loadingview-show}

```csharp
public override void Show()
```

Recursively shows all visible children.


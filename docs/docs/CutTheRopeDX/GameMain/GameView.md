---
title: Class GameView
description: Gameplay view that draws the active scene, pause overlay, restart controls, and results elements.
---

# Class GameView

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `GameView.cs`

Gameplay view that draws the active scene, pause overlay, restart controls, and results elements.

## Declaration

```csharp
internal sealed class GameView : View
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [View](../Framework/Core/View.md)
- [GameView](GameView.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### VIEW_ELEMENT_GAME_SCENE {#f-cuttheropedx-gamemain-gameview-view-element-game-scene}

```csharp
public const int VIEW_ELEMENT_GAME_SCENE
```

Child index for the active game scene.

### VIEW_ELEMENT_PAUSE_BUTTON {#f-cuttheropedx-gamemain-gameview-view-element-pause-button}

```csharp
public const int VIEW_ELEMENT_PAUSE_BUTTON
```

Child index for the pause button.

### VIEW_ELEMENT_PAUSE_MENU {#f-cuttheropedx-gamemain-gameview-view-element-pause-menu}

```csharp
public const int VIEW_ELEMENT_PAUSE_MENU
```

Child index for the pause menu overlay.

### VIEW_ELEMENT_RESTART_BUTTON {#f-cuttheropedx-gamemain-gameview-view-element-restart-button}

```csharp
public const int VIEW_ELEMENT_RESTART_BUTTON
```

Child index for the restart button.

### VIEW_ELEMENT_RESULTS {#f-cuttheropedx-gamemain-gameview-view-element-results}

```csharp
public const int VIEW_ELEMENT_RESULTS
```

Child index for the results view.

## Methods

### Draw() {#m-cuttheropedx-gamemain-gameview-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### Hide() {#m-cuttheropedx-gamemain-gameview-hide}

```csharp
public override void Hide()
```

Recursively hides all visible children.

### Show() {#m-cuttheropedx-gamemain-gameview-show}

```csharp
public override void Show()
```

Recursively shows all visible children.


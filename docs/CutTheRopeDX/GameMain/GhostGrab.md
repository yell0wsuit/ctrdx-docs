---
title: Class GhostGrab
description: Ghost-transformed grab variant with ambient cloud visuals and a tinted grab radius.
---

# Class GhostGrab

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `GhostGrab.cs`

Ghost-transformed grab variant with ambient cloud visuals and a tinted grab radius.

## Declaration

```csharp
internal sealed class GhostGrab : Grab
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [GameObject](../Framework/Helpers/GameObject.md)
- [CTRGameObject](CTRGameObject.md)
- [Grab](Grab.md)
- [GhostGrab](GhostGrab.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITransporterItem](ITransporterItem.md)
- [ITransporterBindAware](ITransporterBindAware.md)
- [ITransporterSideSwitchAware](ITransporterSideSwitchAware.md)
- [ITransporterScaleAware](ITransporterScaleAware.md)

## Methods

### Draw() {#m-cuttheropedx-gamemain-ghostgrab-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### DrawBack() {#m-cuttheropedx-gamemain-ghostgrab-drawback}

```csharp
public override void DrawBack()
```

Draws the hook background layer and optional grab-radius outline.

### InitWithPosition(float px, float py) {#m-cuttheropedx-gamemain-ghostgrab-initwithposition-system-single-system-single}

```csharp
public GhostGrab InitWithPosition(float px, float py)
```

Initializes the ghost grab at a level position and creates its supporting cloud visuals.

Parameters:

- `px`: World-space X position.
- `py`: World-space Y position.

Returns: The initialized ghost grab.


---
title: Class GhostBouncer
description: Ghost-transformed bouncer variant with ambient supporting cloud visuals.
---

# Class GhostBouncer

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `GhostBouncer.cs`

Ghost-transformed bouncer variant with ambient supporting cloud visuals.

## Declaration

```csharp
internal sealed class GhostBouncer : Bouncer
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
- [Bouncer](Bouncer.md)
- [GhostBouncer](GhostBouncer.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITransporterItem](ITransporterItem.md)
- [ITransporterBindAware](ITransporterBindAware.md)
- [ITransporterSideSwitchAware](ITransporterSideSwitchAware.md)

## Fields

### backCloud {#f-cuttheropedx-gamemain-ghostbouncer-backcloud}

```csharp
public Image backCloud
```

Primary background ghost cloud element.

### backCloud2 {#f-cuttheropedx-gamemain-ghostbouncer-backcloud2}

```csharp
public Image backCloud2
```

Secondary background ghost cloud element.

## Methods

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-ghostbouncer-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-gamemain-ghostbouncer-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### InitWithPosXYWidthAndAngle(float px, float py, int width, float angle) {#m-cuttheropedx-gamemain-ghostbouncer-initwithposxywidthandangle-system-single-system-single-system-int32-system-single}

```csharp
public override Bouncer InitWithPosXYWidthAndAngle(float px, float py, int width, float angle)
```

Initialises the bouncer at the given position with a width class and rotation angle.

Parameters:

- `px`: World-space X position.
- `py`: World-space Y position.

Returns: This instance on success, or `null` if the width is invalid or the texture failed to load.

### PlayTimeline(int timelineIndex) {#m-cuttheropedx-gamemain-ghostbouncer-playtimeline-system-int32}

```csharp
public override void PlayTimeline(int timelineIndex)
```

Starts playback of the timeline at slot `t`, stopping any active timeline.


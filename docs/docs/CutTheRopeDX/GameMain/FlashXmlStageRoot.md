---
title: Class FlashXmlStageRoot
description: Root object for Flash XML animations, with playback-rate scaling applied during updates.
---

# Class FlashXmlStageRoot

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FlashXmlStageRoot.cs`

Root object for Flash XML animations, with playback-rate scaling applied during updates.

## Declaration

```csharp
internal sealed class FlashXmlStageRoot : GameObject
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [GameObject](../Framework/Helpers/GameObject.md)
- [FlashXmlStageRoot](FlashXmlStageRoot.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### DefaultPlaybackRate {#f-cuttheropedx-gamemain-flashxmlstageroot-defaultplaybackrate}

```csharp
internal const float DefaultPlaybackRate
```

Default Flash XML playback rate multiplier.

## Properties

### PlaybackRate {#p-cuttheropedx-gamemain-flashxmlstageroot-playbackrate}

```csharp
internal float PlaybackRate { get; set; }
```

Playback speed multiplier applied to update deltas.

## Methods

### Update(float delta) {#m-cuttheropedx-gamemain-flashxmlstageroot-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


---
title: Class FlashXmlTimelineDefinition
description: Parsed per-part Flash timeline tracks.
---

# Class FlashXmlTimelineDefinition

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FlashXmlImporter.cs`

Parsed per-part Flash timeline tracks.

## Declaration

```csharp
public sealed class FlashXmlTimelineDefinition
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FlashXmlTimelineDefinition](FlashXmlTimelineDefinition.md)

## Properties

### ActionKeyFrames {#p-cuttheropedx-gamemain-flashxmltimelinedefinition-actionkeyframes}

```csharp
public IReadOnlyList<FlashXmlActionGroupKeyFrame> ActionKeyFrames { get; set; }
```

Action keyframes for this timeline.

### ColorKeyFrames {#p-cuttheropedx-gamemain-flashxmltimelinedefinition-colorkeyframes}

```csharp
public IReadOnlyList<FlashXmlFloat4KeyFrame> ColorKeyFrames { get; set; }
```

Color keyframes for this timeline.

### Id {#p-cuttheropedx-gamemain-flashxmltimelinedefinition-id}

```csharp
public int Id { get; set; }
```

Flash timeline ID.

### PositionKeyFrames {#p-cuttheropedx-gamemain-flashxmltimelinedefinition-positionkeyframes}

```csharp
public IReadOnlyList<FlashXmlFloat2KeyFrame> PositionKeyFrames { get; set; }
```

Position keyframes for this timeline.

### RotationKeyFrames {#p-cuttheropedx-gamemain-flashxmltimelinedefinition-rotationkeyframes}

```csharp
public IReadOnlyList<FlashXmlFloat1KeyFrame> RotationKeyFrames { get; set; }
```

Rotation keyframes for this timeline.

### ScaleKeyFrames {#p-cuttheropedx-gamemain-flashxmltimelinedefinition-scalekeyframes}

```csharp
public IReadOnlyList<FlashXmlFloat2KeyFrame> ScaleKeyFrames { get; set; }
```

Scale keyframes for this timeline.

### SkewKeyFrames {#p-cuttheropedx-gamemain-flashxmltimelinedefinition-skewkeyframes}

```csharp
public IReadOnlyList<FlashXmlFloat2KeyFrame> SkewKeyFrames { get; set; }
```

Skew keyframes for this timeline.


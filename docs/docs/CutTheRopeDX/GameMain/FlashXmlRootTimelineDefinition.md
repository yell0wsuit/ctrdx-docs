---
title: Class FlashXmlRootTimelineDefinition
description: Root-level timeline used as a driver for timeline completion and action cadence.
---

# Class FlashXmlRootTimelineDefinition

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FlashXmlImporter.cs`

Root-level timeline used as a driver for timeline completion and action cadence.

## Declaration

```csharp
public sealed class FlashXmlRootTimelineDefinition
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FlashXmlRootTimelineDefinition](FlashXmlRootTimelineDefinition.md)

## Properties

### ActionKeyFrames {#p-cuttheropedx-gamemain-flashxmlroottimelinedefinition-actionkeyframes}

```csharp
public IReadOnlyList<FlashXmlActionGroupKeyFrame> ActionKeyFrames { get; set; }
```

Action keyframes emitted on the root timeline.

### DurationSeconds {#p-cuttheropedx-gamemain-flashxmlroottimelinedefinition-durationseconds}

```csharp
public float DurationSeconds { get; set; }
```

Total timeline duration in seconds.

### Id {#p-cuttheropedx-gamemain-flashxmlroottimelinedefinition-id}

```csharp
public int Id { get; set; }
```

Flash timeline ID.


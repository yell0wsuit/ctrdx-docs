---
title: Class FlashXmlActionGroupKeyFrame
description: Group of Flash XML actions that should run on the same keyframe.
---

# Class FlashXmlActionGroupKeyFrame

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FlashXmlImporter.cs`

Group of Flash XML actions that should run on the same keyframe.

## Declaration

```csharp
public sealed class FlashXmlActionGroupKeyFrame
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FlashXmlActionGroupKeyFrame](FlashXmlActionGroupKeyFrame.md)

## Properties

### Actions {#p-cuttheropedx-gamemain-flashxmlactiongroupkeyframe-actions}

```csharp
public IReadOnlyList<FlashXmlActionCommand> Actions { get; set; }
```

Actions to execute on the keyframe.

### Interpolation {#p-cuttheropedx-gamemain-flashxmlactiongroupkeyframe-interpolation}

```csharp
public int Interpolation { get; set; }
```

Flash interpolation code for the action keyframe.

### TimeOffset {#p-cuttheropedx-gamemain-flashxmlactiongroupkeyframe-timeoffset}

```csharp
public float TimeOffset { get; set; }
```

Delay from the previous keyframe in seconds.


---
title: Class FlashXmlAnimationDefinition
description: Parsed Flash XML animation data, including stage size, texture resources, parts, and root timelines.
---

# Class FlashXmlAnimationDefinition

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FlashXmlImporter.cs`

Parsed Flash XML animation data, including stage size, texture resources, parts, and root timelines.

## Declaration

```csharp
public sealed class FlashXmlAnimationDefinition
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FlashXmlAnimationDefinition](FlashXmlAnimationDefinition.md)

## Properties

### Parts {#p-cuttheropedx-gamemain-flashxmlanimationdefinition-parts}

```csharp
public IReadOnlyList<FlashXmlPartDefinition> Parts { get; set; }
```

Image parts that make up the animation.

### RootTimelineDefinitions {#p-cuttheropedx-gamemain-flashxmlanimationdefinition-roottimelinedefinitions}

```csharp
public IReadOnlyDictionary<int, FlashXmlRootTimelineDefinition> RootTimelineDefinitions { get; set; }
```

Root timeline definitions keyed by Flash timeline ID.

### RootTimelines {#p-cuttheropedx-gamemain-flashxmlanimationdefinition-roottimelines}

```csharp
public IReadOnlyDictionary<int, float> RootTimelines { get; set; }
```

Root timeline durations keyed by Flash timeline ID.

### StageHeight {#p-cuttheropedx-gamemain-flashxmlanimationdefinition-stageheight}

```csharp
public float StageHeight { get; set; }
```

Height of the Flash stage in Flash point units.

### StageWidth {#p-cuttheropedx-gamemain-flashxmlanimationdefinition-stagewidth}

```csharp
public float StageWidth { get; set; }
```

Width of the Flash stage in Flash point units.

### TextureResourceName {#p-cuttheropedx-gamemain-flashxmlanimationdefinition-textureresourcename}

```csharp
public string TextureResourceName { get; set; }
```

Texture resource name referenced by the animation root.


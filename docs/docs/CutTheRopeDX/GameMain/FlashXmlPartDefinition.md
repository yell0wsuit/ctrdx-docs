---
title: Class FlashXmlPartDefinition
description: Parsed Flash XML image part and the timelines attached to that part.
---

# Class FlashXmlPartDefinition

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FlashXmlImporter.cs`

Parsed Flash XML image part and the timelines attached to that part.

## Declaration

```csharp
public sealed class FlashXmlPartDefinition
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FlashXmlPartDefinition](FlashXmlPartDefinition.md)

## Properties

### AnchorX {#p-cuttheropedx-gamemain-flashxmlpartdefinition-anchorx}

```csharp
public float AnchorX { get; set; }
```

Custom anchor X coordinate exported by Flash.

### AnchorY {#p-cuttheropedx-gamemain-flashxmlpartdefinition-anchory}

```csharp
public float AnchorY { get; set; }
```

Custom anchor Y coordinate exported by Flash.

### EmptyTimelineIds {#p-cuttheropedx-gamemain-flashxmlpartdefinition-emptytimelineids}

```csharp
public IReadOnlyList<int> EmptyTimelineIds { get; set; }
```

Timeline IDs exported as empty timelines for this part.

### Name {#p-cuttheropedx-gamemain-flashxmlpartdefinition-name}

```csharp
public string Name { get; set; }
```

Name used by action keyframes to target this part.

### QuadToDraw {#p-cuttheropedx-gamemain-flashxmlpartdefinition-quadtodraw}

```csharp
public int QuadToDraw { get; set; }
```

Atlas quad index to draw for the part's default pose.

### RotationCenterX {#p-cuttheropedx-gamemain-flashxmlpartdefinition-rotationcenterx}

```csharp
public float RotationCenterX { get; set; }
```

Rotation center X coordinate exported by Flash.

### RotationCenterY {#p-cuttheropedx-gamemain-flashxmlpartdefinition-rotationcentery}

```csharp
public float RotationCenterY { get; set; }
```

Rotation center Y coordinate exported by Flash.

### TextureResourceName {#p-cuttheropedx-gamemain-flashxmlpartdefinition-textureresourcename}

```csharp
public string TextureResourceName { get; set; }
```

Texture resource name that contains this part's quad.

### Timelines {#p-cuttheropedx-gamemain-flashxmlpartdefinition-timelines}

```csharp
public IReadOnlyDictionary<int, FlashXmlTimelineDefinition> Timelines { get; set; }
```

Part timelines keyed by Flash timeline ID.


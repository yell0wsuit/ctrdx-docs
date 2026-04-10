---
title: Record Struct OmNomSlotPreviewLayoutInfo
description: Scale and vertical offset used when rendering an Om Nom slot preview.
---

# Record Struct OmNomSlotPreviewLayoutInfo

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `OmNomSlotPreviewLayout.cs`

Scale and vertical offset used when rendering an Om Nom slot preview.

## Declaration

```csharp
internal sealed readonly record struct OmNomSlotPreviewLayoutInfo : IEquatable<OmNomSlotPreviewLayoutInfo>
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [OmNomSlotPreviewLayoutInfo](OmNomSlotPreviewLayoutInfo.md)

## Implements

- [IEquatable<OmNomSlotPreviewLayoutInfo>](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1?view=net-10.0)

## Constructors

### OmNomSlotPreviewLayoutInfo(float Scale, float YOffset) {#m-cuttheropedx-gamemain-omnomslotpreviewlayoutinfo-ctor-system-single-system-single}

```csharp
public OmNomSlotPreviewLayoutInfo(float Scale, float YOffset)
```

Scale and vertical offset used when rendering an Om Nom slot preview.

Parameters:

- `Scale`: Scale applied to the preview object.
- `YOffset`: Vertical offset applied to the preview object.

## Properties

### Scale {#p-cuttheropedx-gamemain-omnomslotpreviewlayoutinfo-scale}

```csharp
public float Scale { get; set; }
```

Scale applied to the preview object.

### YOffset {#p-cuttheropedx-gamemain-omnomslotpreviewlayoutinfo-yoffset}

```csharp
public float YOffset { get; set; }
```

Vertical offset applied to the preview object.


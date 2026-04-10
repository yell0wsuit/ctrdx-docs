---
title: Class OmNomSlotPreviewPolicy
description: Chooses the preview mode for Om Nom skin selection slots.
---

# Class OmNomSlotPreviewPolicy

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `OmNomSlotPreviewPolicy.cs`

Chooses the preview mode for Om Nom skin selection slots.

## Declaration

```csharp
internal static class OmNomSlotPreviewPolicy
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [OmNomSlotPreviewPolicy](OmNomSlotPreviewPolicy.md)

## Methods

### Resolve(int skinIndex, int selectedIndex) {#m-cuttheropedx-gamemain-omnomslotpreviewpolicy-resolve-system-int32-system-int32}

```csharp
public static OmNomSlotPreviewMode Resolve(int skinIndex, int selectedIndex)
```

Resolves the preview mode for a skin slot.

Parameters:

- `skinIndex`: Skin slot index.
- `selectedIndex`: Currently selected skin index.

Returns: The preview mode to use for the slot.


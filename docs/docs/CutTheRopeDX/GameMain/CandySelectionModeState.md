---
title: Class CandySelectionModeState
description: Cached view state for one candy selection mode.
---

# Class CandySelectionModeState

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CandySelectionModeCache.cs`

Cached view state for one candy selection mode.

## Declaration

```csharp
internal sealed class CandySelectionModeState
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CandySelectionModeState](CandySelectionModeState.md)

## Properties

### ActivePreviewBackend {#p-cuttheropedx-gamemain-candyselectionmodestate-activepreviewbackend}

```csharp
public ITargetAnimationBackend ActivePreviewBackend { get; set; }
```

Animation backend currently driving the active preview object.

### ActivePreviewObject {#p-cuttheropedx-gamemain-candyselectionmodestate-activepreviewobject}

```csharp
public GameObject ActivePreviewObject { get; set; }
```

Preview object currently active for the mode.

### Grid {#p-cuttheropedx-gamemain-candyselectionmodestate-grid}

```csharp
public BaseElement Grid { get; set; }
```

Grid element built for the mode.

### SlotButtons {#p-cuttheropedx-gamemain-candyselectionmodestate-slotbuttons}

```csharp
public IList SlotButtons { get; set; }
```

Slot buttons built for the mode.


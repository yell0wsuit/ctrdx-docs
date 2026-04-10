---
title: Class CandySelectionModeCache
description: Caches built grids and preview state for candy selection modes.
---

# Class CandySelectionModeCache

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CandySelectionModeCache.cs`

Caches built grids and preview state for candy selection modes.

## Declaration

```csharp
internal sealed class CandySelectionModeCache
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CandySelectionModeCache](CandySelectionModeCache.md)

## Fields

### states {#f-cuttheropedx-gamemain-candyselectionmodecache-states}

```csharp
private readonly Dictionary<CandySelectionMode, CandySelectionModeState> states
```

Cached state keyed by selection mode.

## Methods

### ActivateMode(CandySelectionMode mode) {#m-cuttheropedx-gamemain-candyselectionmodecache-activatemode-cuttheropedx-gamemain-candyselectionmode}

```csharp
public CandySelectionModeActivation ActivateMode(CandySelectionMode mode)
```

Activates a selection mode and reports whether the mode still needs to be built.

Parameters:

- `mode`: Selection mode to activate.

Returns: Activation information for the requested mode.

### GetState(CandySelectionMode mode) {#m-cuttheropedx-gamemain-candyselectionmodecache-getstate-cuttheropedx-gamemain-candyselectionmode}

```csharp
public CandySelectionModeState GetState(CandySelectionMode mode)
```

Gets the cached state for a selection mode.

Parameters:

- `mode`: Selection mode whose state should be returned.

Returns: The cached state for the mode.

### StoreGrid(CandySelectionMode mode, BaseElement grid) {#m-cuttheropedx-gamemain-candyselectionmodecache-storegrid-cuttheropedx-gamemain-candyselectionmode-cuttheropedx-framework-visual-baseelement}

```csharp
public void StoreGrid(CandySelectionMode mode, BaseElement grid)
```

Stores the grid element for a selection mode.

Parameters:

- `mode`: Selection mode whose grid should be stored.
- `grid`: Grid element to cache.

### StoreState(CandySelectionMode mode, BaseElement grid, IList slotButtons, GameObject activePreviewObject, ITargetAnimationBackend activePreviewBackend = null) {#m-cuttheropedx-gamemain-candyselectionmodecache-storestate-cuttheropedx-gamemain-candyselectionmode-cuttheropedx-framework-visual-baseelement-system-collections-ilist-cuttheropedx-framework-helpers-gameobject-cuttheropedx-gamemain-itargetanimationbackend}

```csharp
public void StoreState(CandySelectionMode mode, BaseElement grid, IList slotButtons, GameObject activePreviewObject, ITargetAnimationBackend activePreviewBackend = null)
```

Stores the full cached state for a selection mode.

Parameters:

- `mode`: Selection mode whose state should be stored.
- `grid`: Grid element to cache.
- `slotButtons`: Slot buttons to cache.
- `activePreviewObject`: Active preview object to cache.
- `activePreviewBackend`: Active preview backend to cache, or `null` when the preview has no backend.


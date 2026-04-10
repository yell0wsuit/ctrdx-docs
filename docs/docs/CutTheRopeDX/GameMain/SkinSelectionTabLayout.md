---
title: Class SkinSelectionTabLayout
description: Layout helper for positioning skin selection tabs around the center of their parent.
---

# Class SkinSelectionTabLayout

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `SkinSelectionTabLayout.cs`

Layout helper for positioning skin selection tabs around the center of their parent.

## Declaration

```csharp
internal static class SkinSelectionTabLayout
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [SkinSelectionTabLayout](SkinSelectionTabLayout.md)

## Methods

### GetCenteredX(int tabIndex, int totalTabs, float tabStride) {#m-cuttheropedx-gamemain-skinselectiontablayout-getcenteredx-system-int32-system-int32-system-single}

```csharp
public static float GetCenteredX(int tabIndex, int totalTabs, float tabStride)
```

Gets the centered x-position for a tab in an evenly spaced tab row.

Parameters:

- `tabIndex`: Zero-based tab index.
- `totalTabs`: Total number of tabs in the row.
- `tabStride`: Horizontal distance between adjacent tabs.

Returns: The centered x-position for the tab.


---
title: Class RopeColorHelper
description: Helper class for managing rope color schemes.
---

# Class RopeColorHelper

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `RopeColorHelper.cs`

Helper class for managing rope color schemes.

## Declaration

```csharp
internal static class RopeColorHelper
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [RopeColorHelper](RopeColorHelper.md)

## Fields

### TotalRopeColors {#f-cuttheropedx-gamemain-ropecolorhelper-totalropecolors}

```csharp
public const int TotalRopeColors
```

Gets the total number of available rope color schemes.

## Methods

### GetRopeColors(int ropeIndex) {#m-cuttheropedx-gamemain-ropecolorhelper-getropecolors-system-int32}

```csharp
public static RopeColorHelper.RopeColors GetRopeColors(int ropeIndex)
```

Gets the rope color scheme for a given rope index (0-8).

Parameters:

- `ropeIndex`: The rope skin index. Values outside 0–8 return the default scheme.

Returns: The [RopeColors](RopeColorHelper.md) for the specified index.


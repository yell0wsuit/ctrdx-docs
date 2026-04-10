---
title: Class CandySkinHelper
description: Helper class for managing candy skins
---

# Class CandySkinHelper

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CandySkinHelper.cs`

Helper class for managing candy skins

## Declaration

```csharp
internal static class CandySkinHelper
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CandySkinHelper](CandySkinHelper.md)

## Methods

### GetCandyResource(int skinIndex) {#m-cuttheropedx-gamemain-candyskinhelper-getcandyresource-system-int32}

```csharp
public static string GetCandyResource(int skinIndex)
```

Gets the candy resource name for a given skin index (0-50).

Parameters:

- `skinIndex`: The candy skin index (0 for candy_01, 1 for candy_02, etc.)

Returns: The resource name for the candy skin


---
title: Class SpecialEvents
description: Provides helper properties to determine whether seasonal events should be active based on the current system date.
---

# Class SpecialEvents

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `SpecialEvents.cs`

Provides helper properties to determine whether seasonal events should be active based on the current system date.

## Declaration

```csharp
internal static class SpecialEvents
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [SpecialEvents](SpecialEvents.md)

## Properties

### IsJanuary {#p-cuttheropedx-gamemain-specialevents-isjanuary}

```csharp
public static bool IsJanuary { get; }
```

Gets a value indicating whether the current month is January.

### IsXmas {#p-cuttheropedx-gamemain-specialevents-isxmas}

```csharp
public static bool IsXmas { get; }
```

Gets a value indicating whether the Christmas event period is active. Includes December and January.


---
title: Enum UNLOCKEDSTATE
description: Represents the unlock state of a level.
---

# Enum UNLOCKEDSTATE

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `UNLOCKED_STATE.cs`

Represents the unlock state of a level.

## Declaration

```csharp
public enum UNLOCKEDSTATE
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [Enum](https://learn.microsoft.com/en-us/dotnet/api/system.enum?view=net-10.0)
- [UNLOCKEDSTATE](UNLOCKEDSTATE.md)

## Implements

- [IComparable](https://learn.microsoft.com/en-us/dotnet/api/system.icomparable?view=net-10.0)
- [IConvertible](https://learn.microsoft.com/en-us/dotnet/api/system.iconvertible?view=net-10.0)
- [ISpanFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.ispanformattable?view=net-10.0)
- [IFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.iformattable?view=net-10.0)

## Fields

### JUSTUNLOCKED {#f-cuttheropedx-gamemain-unlockedstate-justunlocked}

```csharp
public const UNLOCKEDSTATE JUSTUNLOCKED
```

The level was just unlocked and should show an unlock animation.

### JUSTUNLOCKEDWITHCHEAT {#f-cuttheropedx-gamemain-unlockedstate-justunlockedwithcheat}

```csharp
public const UNLOCKEDSTATE JUSTUNLOCKEDWITHCHEAT
```

The level was just unlocked via cheat/debug and should show an unlock animation.

### LOCKED {#f-cuttheropedx-gamemain-unlockedstate-locked}

```csharp
public const UNLOCKEDSTATE LOCKED
```

The level is locked and cannot be played.

### UNLOCKED {#f-cuttheropedx-gamemain-unlockedstate-unlocked}

```csharp
public const UNLOCKEDSTATE UNLOCKED
```

The level is unlocked and available to play.


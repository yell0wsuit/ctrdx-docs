---
title: Record Struct CandySelectionModeActivation
description: Result of activating a candy selection mode.
---

# Record Struct CandySelectionModeActivation

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CandySelectionModeCache.cs`

Result of activating a candy selection mode.

## Declaration

```csharp
internal sealed readonly record struct CandySelectionModeActivation : IEquatable<CandySelectionModeActivation>
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [CandySelectionModeActivation](CandySelectionModeActivation.md)

## Implements

- [IEquatable<CandySelectionModeActivation>](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1?view=net-10.0)

## Constructors

### CandySelectionModeActivation(CandySelectionMode Mode, CandySelectionModeState State, bool RequiresBuild) {#m-cuttheropedx-gamemain-candyselectionmodeactivation-ctor-cuttheropedx-gamemain-candyselectionmode-cuttheropedx-gamemain-candyselectionmodestate-system-boolean}

```csharp
public CandySelectionModeActivation(CandySelectionMode Mode, CandySelectionModeState State, bool RequiresBuild)
```

Result of activating a candy selection mode.

Parameters:

- `Mode`: Activated selection mode.
- `State`: Cached state for the activated mode.
- `RequiresBuild`: Whether the mode needs its grid to be built before display.

## Properties

### Mode {#p-cuttheropedx-gamemain-candyselectionmodeactivation-mode}

```csharp
public CandySelectionMode Mode { get; set; }
```

Activated selection mode.

### RequiresBuild {#p-cuttheropedx-gamemain-candyselectionmodeactivation-requiresbuild}

```csharp
public bool RequiresBuild { get; set; }
```

Whether the mode needs its grid to be built before display.

### State {#p-cuttheropedx-gamemain-candyselectionmodeactivation-state}

```csharp
public CandySelectionModeState State { get; set; }
```

Cached state for the activated mode.


---
title: Class CTRMover
description: Game-specific Mover subclass that parses path strings from level data, supporting both circular ("R…") and polyline ("x,y,…") path definitions.
---

# Class CTRMover

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CTRMover.cs`

Game-specific [Mover](../Framework/Helpers/Mover.md) subclass that parses path strings from level data, supporting both circular ("R…") and polyline ("x,y,…") path definitions.

## Declaration

```csharp
internal sealed class CTRMover : Mover
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [Mover](../Framework/Helpers/Mover.md)
- [CTRMover](CTRMover.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### CTRMover(int l, float m_, float r_) {#m-cuttheropedx-gamemain-ctrmover-ctor-system-int32-system-single-system-single}

```csharp
public CTRMover(int l, float m_, float r_)
```

Game-specific [Mover](../Framework/Helpers/Mover.md) subclass that parses path strings from level data, supporting both circular ("R…") and polyline ("x,y,…") path definitions.

Parameters:

- `l`: Loop mode for the mover animation.
- `m_`: Movement speed magnitude.
- `r_`: Rotation speed in degrees per second.

## Methods

### SetPathFromStringandStart(string p, Vector s) {#m-cuttheropedx-gamemain-ctrmover-setpathfromstringandstart-system-string-cuttheropedx-framework-core-vector}

```csharp
public override void SetPathFromStringandStart(string p, Vector s)
```

Builds a path from a serialized string and prepends the supplied start point. Supports circular path syntax starting with `R`.

Parameters:

- `p`: Serialized path description.
- `s`: Starting position for the generated path.


---
title: Interface ILiftScrollbarDelegate
description: Receives notification when the lift scrollbar's active scroll point changes.
---

# Interface ILiftScrollbarDelegate

Namespace: `CutTheRopeDX.Commons`

Assembly: `CutTheRope-DX.dll`

Source: `LiftScrollbarDelegate.cs`

Receives notification when the lift scrollbar's active scroll point changes.

## Declaration

```csharp
internal interface ILiftScrollbarDelegate
```

## Inheritance

- [ILiftScrollbarDelegate](ILiftScrollbarDelegate.md)

## Methods

### ChangedActiveSpointFromTo(int pp, int cp) {#m-cuttheropedx-commons-iliftscrollbardelegate-changedactivespointfromto-system-int32-system-int32}

```csharp
public abstract void ChangedActiveSpointFromTo(int pp, int cp)
```

Called when the active scroll point changes from `pp` to `cp`.

Parameters:

- `pp`: Previous scroll point.
- `cp`: Current scroll point.


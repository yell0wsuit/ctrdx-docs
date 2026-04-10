---
title: Class MechanicalHandButton
description: Rotate button attached to a mechanical hand segment. Uses joint-centric hit testing instead of the default button rectangle.
---

# Class MechanicalHandButton

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MechanicalHandButton.cs`

Rotate button attached to a mechanical hand segment. Uses joint-centric hit testing instead of the default button rectangle.

## Declaration

```csharp
internal sealed class MechanicalHandButton : Button
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Button](../Framework/Visual/Button.md)
- [MechanicalHandButton](MechanicalHandButton.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### segment {#f-cuttheropedx-gamemain-mechanicalhandbutton-segment}

```csharp
public MechanicalHandSegment segment
```

Segment that owns this rotate button.

## Methods

### IsInTouchZoneXYforTouchDown(float tx, float ty, bool td) {#m-cuttheropedx-gamemain-mechanicalhandbutton-isintouchzonexyfortouchdown-system-single-system-single-system-boolean}

```csharp
public override bool IsInTouchZoneXYforTouchDown(float tx, float ty, bool td)
```

Tests whether the touch point is within the button's touch zone.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.
- `td`: `true` for touch-down (no padding); `false` for move/up (adds padding).

Returns: `true` if the touch point lies within the button's touch zone.


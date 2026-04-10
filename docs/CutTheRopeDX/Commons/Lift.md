---
title: Class Lift
description: A draggable Button that moves horizontally within a bounded range and reports its position as a percentage.
---

# Class Lift

Namespace: `CutTheRopeDX.Commons`

Assembly: `CutTheRope-DX.dll`

Source: `Lift.cs`

A draggable [Button](../Framework/Visual/Button.md) that moves horizontally within a bounded range and reports its position as a percentage.

## Declaration

```csharp
internal sealed class Lift : Button
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Button](../Framework/Visual/Button.md)
- [Lift](Lift.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### liftDelegate {#f-cuttheropedx-commons-lift-liftdelegate}

```csharp
public Lift.PercentXY liftDelegate
```

Callback invoked when the lift position changes, receiving the X and Y percentages.

### maxX {#f-cuttheropedx-commons-lift-maxx}

```csharp
public float maxX
```

Maximum allowed X position for the lift.

### minX {#f-cuttheropedx-commons-lift-minx}

```csharp
public float minX
```

Minimum allowed X position for the lift.

### startX {#f-cuttheropedx-commons-lift-startx}

```csharp
public float startX
```

Touch-down X offset used to keep the lift position relative to where the user grabbed it.

### xPercent {#f-cuttheropedx-commons-lift-xpercent}

```csharp
public float xPercent
```

Current horizontal position as a percentage (0..1) between [minX](#f-cuttheropedx-commons-lift-minx) and [maxX](#f-cuttheropedx-commons-lift-maxx).

## Methods

### Dispose(bool disposing) {#m-cuttheropedx-commons-lift-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### OnTouchDownXY(float tx, float ty) {#m-cuttheropedx-commons-lift-ontouchdownxy-system-single-system-single}

```csharp
public override bool OnTouchDownXY(float tx, float ty)
```

Dispatches a touch-down event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchMoveXY(float tx, float ty) {#m-cuttheropedx-commons-lift-ontouchmovexy-system-single-system-single}

```csharp
public override bool OnTouchMoveXY(float tx, float ty)
```

Dispatches a touch-move event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchUpXY(float tx, float ty) {#m-cuttheropedx-commons-lift-ontouchupxy-system-single-system-single}

```csharp
public override bool OnTouchUpXY(float tx, float ty)
```

Dispatches a touch-up event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.


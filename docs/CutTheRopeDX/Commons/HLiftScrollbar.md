---
title: Class HLiftScrollbar
description: A horizontal scrollbar backed by a Lift that synchronises its position with a ScrollableContainer.
---

# Class HLiftScrollbar

Namespace: `CutTheRopeDX.Commons`

Assembly: `CutTheRope-DX.dll`

Source: `HLiftScrollbar.cs`

A horizontal scrollbar backed by a [Lift](Lift.md) that synchronises its position with a [ScrollableContainer](../Framework/Visual/ScrollableContainer.md).

## Declaration

```csharp
internal sealed class HLiftScrollbar : Image
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [HLiftScrollbar](HLiftScrollbar.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### activeSpoint {#f-cuttheropedx-commons-hliftscrollbar-activespoint}

```csharp
public int activeSpoint
```

Index of the currently active scroll point.

### container {#f-cuttheropedx-commons-hliftscrollbar-container}

```csharp
public ScrollableContainer container
```

The scrollable container this scrollbar is bound to.

### delegateLiftScrollbarDelegate {#f-cuttheropedx-commons-hliftscrollbar-delegateliftscrollbardelegate}

```csharp
public ILiftScrollbarDelegate delegateLiftScrollbarDelegate
```

Delegate notified when the active scroll point changes.

### lift {#f-cuttheropedx-commons-hliftscrollbar-lift}

```csharp
public Lift lift
```

The draggable lift (thumb) element.

### limitPoints {#f-cuttheropedx-commons-hliftscrollbar-limitpoints}

```csharp
public int[] limitPoints
```

Mapping from sorted boundary index back to the original scroll point index.

### spoints {#f-cuttheropedx-commons-hliftscrollbar-spoints}

```csharp
public Vector[] spoints
```

Lift-space positions corresponding to each container scroll point.

### spointsLimits {#f-cuttheropedx-commons-hliftscrollbar-spointslimits}

```csharp
public Vector[] spointsLimits
```

Sorted boundary positions used to determine which scroll point the lift is closest to.

### spointsNum {#f-cuttheropedx-commons-hliftscrollbar-spointsnum}

```csharp
public int spointsNum
```

Total number of scroll points.

## Methods

### CalcScrollPoints() {#m-cuttheropedx-commons-hliftscrollbar-calcscrollpoints}

```csharp
public void CalcScrollPoints()
```

Computes lift-space scroll point positions from the container and sorts them for boundary detection.

### Dispose(bool disposing) {#m-cuttheropedx-commons-hliftscrollbar-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### GetScrollPoint(int i) {#m-cuttheropedx-commons-hliftscrollbar-getscrollpoint-system-int32}

```csharp
public Vector GetScrollPoint(int i)
```

Returns the lift-space position of the scroll point at the given index.

Parameters:

- `i`: Scroll point index.

Returns: The scroll point position in lift-local coordinates.

### GetTotalScrollPoints() {#m-cuttheropedx-commons-hliftscrollbar-gettotalscrollpoints}

```csharp
public int GetTotalScrollPoints()
```

Returns the total number of scroll points.

Returns: The number of configured scroll points.

### InitWithResIDBackQuadLiftQuadLiftQuadPressed(string resourceName, int bq, int lq, int lqp) {#m-cuttheropedx-commons-hliftscrollbar-initwithresidbackquadliftquadliftquadpressed-system-string-system-int32-system-int32-system-int32}

```csharp
public HLiftScrollbar InitWithResIDBackQuadLiftQuadLiftQuadPressed(string resourceName, int bq, int lq, int lqp)
```

Initializes the scrollbar with a background quad, a lift (thumb) quad, and a pressed-state lift quad from a texture atlas.

Parameters:

- `resourceName`: Texture resource identifier.
- `bq`: Background quad index.
- `lq`: Lift (thumb) quad index for the normal state.
- `lqp`: Lift (thumb) quad index for the pressed state.

Returns: The initialized scrollbar instance.

### OnTouchDownXY(float tx, float ty) {#m-cuttheropedx-commons-hliftscrollbar-ontouchdownxy-system-single-system-single}

```csharp
public override bool OnTouchDownXY(float tx, float ty)
```

Dispatches a touch-down event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchUpXY(float tx, float ty) {#m-cuttheropedx-commons-hliftscrollbar-ontouchupxy-system-single-system-single}

```csharp
public override bool OnTouchUpXY(float tx, float ty)
```

Dispatches a touch-up event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### PercentXY(float px, float py) {#m-cuttheropedx-commons-hliftscrollbar-percentxy-system-single-system-single}

```csharp
public void PercentXY(float px, float py)
```

Callback invoked by the lift when its position changes; translates the percentage into a container scroll offset.

Parameters:

- `px`: Horizontal percentage (0..1).
- `py`: Vertical percentage (unused).

### SetContainer(ScrollableContainer c) {#m-cuttheropedx-commons-hliftscrollbar-setcontainer-cuttheropedx-framework-visual-scrollablecontainer}

```csharp
public void SetContainer(ScrollableContainer c)
```

Assigns a scrollable container and recalculates scroll points and lift position.

Parameters:

- `c`: The scrollable container to bind to.

### Update(float delta) {#m-cuttheropedx-commons-hliftscrollbar-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateActiveSpoint() {#m-cuttheropedx-commons-hliftscrollbar-updateactivespoint}

```csharp
public void UpdateActiveSpoint()
```

Recalculates the active scroll point based on the current lift position and notifies the delegate if it changed.

### UpdateLift() {#m-cuttheropedx-commons-hliftscrollbar-updatelift}

```csharp
public void UpdateLift()
```

Synchronises the lift position to match the container's current scroll offset.


---
title: Class Mover
description: Moves a point along a cyclic path with optional per-point speed settings and continuous rotation.
---

# Class Mover

Namespace: `CutTheRopeDX.Framework.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `Mover.cs`

Moves a point along a cyclic path with optional per-point speed settings and continuous rotation.

## Declaration

```csharp
internal class Mover : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [Mover](Mover.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [CTRMover](../../GameMain/CTRMover.md)

## Constructors

### Mover(int l, float m_, float r_) {#m-cuttheropedx-framework-helpers-mover-ctor-system-int32-system-single-system-single}

```csharp
public Mover(int l, float m_, float r_)
```

Initializes a mover with path capacity, default move speed, and default rotation speed.

Parameters:

- `l`: Maximum number of path points.
- `m_`: Default movement speed applied to each path point.
- `r_`: Default rotation speed.

## Fields

### angle_ {#f-cuttheropedx-framework-helpers-mover-angle}

```csharp
public float angle_
```

Current rotation angle.

### angle_initial {#f-cuttheropedx-framework-helpers-mover-angle-initial}

```csharp
public float angle_initial
```

Rotation angle used when [use_angle_initial](#f-cuttheropedx-framework-helpers-mover-use-angle-initial) is enabled.

### moveSpeed {#f-cuttheropedx-framework-helpers-mover-movespeed}

```csharp
private float[] moveSpeed
```

Per-path-point movement speeds.

### overrun {#f-cuttheropedx-framework-helpers-mover-overrun}

```csharp
private float overrun
```

Unused leftover frame time carried into the next update.

### path {#f-cuttheropedx-framework-helpers-mover-path}

```csharp
public Vector[] path
```

Path points traversed by the mover.

### pathCapacity {#f-cuttheropedx-framework-helpers-mover-pathcapacity}

```csharp
private readonly int pathCapacity
```

Maximum number of points that can be stored in the path.

### pathLen {#f-cuttheropedx-framework-helpers-mover-pathlen}

```csharp
public int pathLen
```

Number of valid points currently stored in [path](#f-cuttheropedx-framework-helpers-mover-path).

### pos {#f-cuttheropedx-framework-helpers-mover-pos}

```csharp
public Vector pos
```

Current position along the path.

### reverse {#f-cuttheropedx-framework-helpers-mover-reverse}

```csharp
private bool reverse
```

Whether path traversal proceeds in reverse order.

### rotateSpeed {#f-cuttheropedx-framework-helpers-mover-rotatespeed}

```csharp
private float rotateSpeed
```

Continuous rotation speed applied during updates.

### targetPoint {#f-cuttheropedx-framework-helpers-mover-targetpoint}

```csharp
public int targetPoint
```

Index of the current target path point.

### use_angle_initial {#f-cuttheropedx-framework-helpers-mover-use-angle-initial}

```csharp
public bool use_angle_initial
```

Whether the initial angle should be forced while targeting the first path point.

## Properties

### IsPaused {#p-cuttheropedx-framework-helpers-mover-ispaused}

```csharp
public bool IsPaused { get; private set; }
```

Gets a value indicating whether movement updates are currently paused.

## Methods

### AddPathPoint(Vector v) {#m-cuttheropedx-framework-helpers-mover-addpathpoint-cuttheropedx-framework-core-vector}

```csharp
public virtual void AddPathPoint(Vector v)
```

Appends a point to the movement path.

Parameters:

- `v`: Path point to add.

### AdvanceTarget() {#m-cuttheropedx-framework-helpers-mover-advancetarget}

```csharp
private void AdvanceTarget()
```

Advances the target-path index according to the current traversal direction.

### Dispose(bool disposing) {#m-cuttheropedx-framework-helpers-mover-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### JumpToPoint(int p) {#m-cuttheropedx-framework-helpers-mover-jumptopoint-system-int32}

```csharp
public virtual void JumpToPoint(int p)
```

Moves immediately to the specified path point and makes it the current target.

Parameters:

- `p`: Path point index to jump to.

### MoveVariableToTarget(ref float v, float t, float speed, float delta) {#m-cuttheropedx-framework-helpers-mover-movevariabletotarget-system-single-system-single-system-single-system-single}

```csharp
public static bool MoveVariableToTarget(ref float v, float t, float speed, float delta)
```

Moves a scalar value toward a target at the given `speed` and frame `delta`.

Parameters:

- `v`: Value to update.
- `t`: Target value.
- `speed`: Movement speed in units per second.
- `delta`: Elapsed frame time in seconds.

Returns: `true` if the target was reached; otherwise `false`.

### Pause() {#m-cuttheropedx-framework-helpers-mover-pause}

```csharp
public virtual void Pause()
```

Pauses path and rotation updates.

### SetMoveReverse(bool r) {#m-cuttheropedx-framework-helpers-mover-setmovereverse-system-boolean}

```csharp
public virtual void SetMoveReverse(bool r)
```

Sets whether the path is traversed in reverse order.

Parameters:

- `r`: `true` to move backward through the path; otherwise `false`.

### SetMoveSpeed(float ms) {#m-cuttheropedx-framework-helpers-mover-setmovespeed-system-single}

```csharp
public virtual void SetMoveSpeed(float ms)
```

Sets the movement speed used for all path points.

Parameters:

- `ms`: Movement speed to assign.

### SetMoveSpeedforPoint(float ms, int i) {#m-cuttheropedx-framework-helpers-mover-setmovespeedforpoint-system-single-system-int32}

```csharp
public virtual void SetMoveSpeedforPoint(float ms, int i)
```

Sets the movement speed for a single path point.

Parameters:

- `ms`: Movement speed to assign.
- `i`: Path point index.

### SetPathFromStringandStart(string p, Vector s) {#m-cuttheropedx-framework-helpers-mover-setpathfromstringandstart-system-string-cuttheropedx-framework-core-vector}

```csharp
public virtual void SetPathFromStringandStart(string p, Vector s)
```

Builds a path from a serialized string and prepends the supplied start point. Supports circular path syntax starting with `R`.

Parameters:

- `p`: Serialized path description.
- `s`: Starting position for the generated path.

### SetRotateSpeed(float rs) {#m-cuttheropedx-framework-helpers-mover-setrotatespeed-system-single}

```csharp
public virtual void SetRotateSpeed(float rs)
```

Sets the continuous rotation speed.

Parameters:

- `rs`: Rotation speed to apply.

### Start() {#m-cuttheropedx-framework-helpers-mover-start}

```csharp
public virtual void Start()
```

Starts movement from the first path point and targets the next point in sequence.

### Unpause() {#m-cuttheropedx-framework-helpers-mover-unpause}

```csharp
public virtual void Unpause()
```

Resumes path and rotation updates.

### Update(float delta) {#m-cuttheropedx-framework-helpers-mover-update-system-single}

```csharp
public virtual void Update(float delta)
```

Advances the mover along its path and updates rotation for one frame.

Parameters:

- `delta`: Elapsed frame time in seconds.


---
title: Class ConstraintedPoint
description: Verlet-style physics point that can be pinned and linked to other points through constraints.
---

# Class ConstraintedPoint

Namespace: `CutTheRopeDX.Framework.Physics`

Assembly: `CutTheRope-DX.dll`

Source: `ConstraintedPoint.cs`

Verlet-style physics point that can be pinned and linked to other points through constraints.

## Declaration

```csharp
internal sealed class ConstraintedPoint : MaterialPoint
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [MaterialPoint](MaterialPoint.md)
- [ConstraintedPoint](ConstraintedPoint.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### ConstraintedPoint() {#m-cuttheropedx-framework-physics-constraintedpoint-ctor}

```csharp
public ConstraintedPoint()
```

Initializes a new constrained point with no previous position, pin, or constraints.

## Fields

### DEFAULT_NON_ZERO_CONSTRAINT_DIRECTION {#f-cuttheropedx-framework-physics-constraintedpoint-default-non-zero-constraint-direction}

```csharp
private static readonly Vector DEFAULT_NON_ZERO_CONSTRAINT_DIRECTION
```

Fallback constraint direction used when two points overlap exactly.

### MIN_CONSTRAINT_DISTANCE {#f-cuttheropedx-framework-physics-constraintedpoint-min-constraint-distance}

```csharp
private const float MIN_CONSTRAINT_DISTANCE
```

Minimum distance used when normalizing near-overlapping constraints.

### MISSING_REST_LENGTH {#f-cuttheropedx-framework-physics-constraintedpoint-missing-rest-length}

```csharp
private const float MISSING_REST_LENGTH
```

Sentinel rest length used before a constraint distance has been initialized.

### PIN_UNSET_COORDINATE {#f-cuttheropedx-framework-physics-constraintedpoint-pin-unset-coordinate}

```csharp
private const float PIN_UNSET_COORDINATE
```

Sentinel coordinate used when a point is not pinned.

### QCP_FIXED_TIMESTEP {#f-cuttheropedx-framework-physics-constraintedpoint-qcp-fixed-timestep}

```csharp
private const float QCP_FIXED_TIMESTEP
```

Fixed timestep multiplier used by constrained point integration.

### constraints {#f-cuttheropedx-framework-physics-constraintedpoint-constraints}

```csharp
public List<Constraint> constraints
```

Outgoing constraints owned by this point.

### pin {#f-cuttheropedx-framework-physics-constraintedpoint-pin}

```csharp
public Vector pin
```

Optional pinned world position. An unset pin leaves the point free to move.

### prevPos {#f-cuttheropedx-framework-physics-constraintedpoint-prevpos}

```csharp
public Vector prevPos
```

Previous position used by Verlet integration.

## Methods

### AddConstraintwithRestLengthofType(ConstraintedPoint constrainedPoint, float restLength, Constraint.CONSTRAINT constraintType) {#m-cuttheropedx-framework-physics-constraintedpoint-addconstraintwithrestlengthoftype-cuttheropedx-framework-physics-constraintedpoint-system-single-cuttheropedx-framework-physics-constraint-constraint}

```csharp
public void AddConstraintwithRestLengthofType(ConstraintedPoint constrainedPoint, float restLength, Constraint.CONSTRAINT constraintType)
```

Adds a constraint from this point to another point.

Parameters:

- `constrainedPoint`: Other point referenced by the constraint.
- `restLength`: Target distance for the relationship.
- `constraintType`: Constraint rule to enforce.

### ChangeConstraintFromTo(ConstraintedPoint fromPoint, ConstraintedPoint toPoint) {#m-cuttheropedx-framework-physics-constraintedpoint-changeconstraintfromto-cuttheropedx-framework-physics-constraintedpoint-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public void ChangeConstraintFromTo(ConstraintedPoint fromPoint, ConstraintedPoint toPoint)
```

Redirects a constraint from one target point to another.

Parameters:

- `fromPoint`: Existing target point.
- `toPoint`: Replacement target point.

### ChangeConstraintFromTowithRestLength(ConstraintedPoint fromPoint, ConstraintedPoint toPoint, float restLength) {#m-cuttheropedx-framework-physics-constraintedpoint-changeconstraintfromtowithrestlength-cuttheropedx-framework-physics-constraintedpoint-cuttheropedx-framework-physics-constraintedpoint-system-single}

```csharp
public void ChangeConstraintFromTowithRestLength(ConstraintedPoint fromPoint, ConstraintedPoint toPoint, float restLength)
```

Redirects a constraint to a new target point and updates its rest length.

Parameters:

- `fromPoint`: Existing target point.
- `toPoint`: Replacement target point.
- `restLength`: New rest length to store.

### ChangeRestLengthToFor(float restLength, ConstraintedPoint constrainedPoint) {#m-cuttheropedx-framework-physics-constraintedpoint-changerestlengthtofor-system-single-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public void ChangeRestLengthToFor(float restLength, ConstraintedPoint constrainedPoint)
```

Changes the rest length for the constraint that targets the specified point.

Parameters:

- `restLength`: New rest length.
- `constrainedPoint`: Target point whose constraint should be updated.

### Dispose(bool disposing) {#m-cuttheropedx-framework-physics-constraintedpoint-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### HasConstraintTo(ConstraintedPoint p) {#m-cuttheropedx-framework-physics-constraintedpoint-hasconstraintto-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public bool HasConstraintTo(ConstraintedPoint p)
```

Returns whether this point has a constraint to the specified point.

Parameters:

- `p`: Point to test.

Returns: `true` if a matching constraint exists; otherwise `false`.

### Qcpupdate(ConstraintedPoint constrainedPoint, float delta, float coefficient) {#m-cuttheropedx-framework-physics-constraintedpoint-qcpupdate-cuttheropedx-framework-physics-constraintedpoint-system-single-system-single}

```csharp
public static void Qcpupdate(ConstraintedPoint constrainedPoint, float delta, float coefficient)
```

Updates a constrained point using the QCP timestep variant used by rope simulation.

Parameters:

- `constrainedPoint`: Point to update.
- `delta`: Elapsed frame time in seconds.
- `coefficient`: Additional timestep scaling coefficient.

### RemoveConstraint(ConstraintedPoint constrainedPoint) {#m-cuttheropedx-framework-physics-constraintedpoint-removeconstraint-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public void RemoveConstraint(ConstraintedPoint constrainedPoint)
```

Removes the first constraint that targets the specified point.

Parameters:

- `constrainedPoint`: Target point to remove.

### RemoveConstraints() {#m-cuttheropedx-framework-physics-constraintedpoint-removeconstraints}

```csharp
public void RemoveConstraints()
```

Removes all constraints owned by this point.

### ResetAll() {#m-cuttheropedx-framework-physics-constraintedpoint-resetall}

```csharp
public override void ResetAll()
```

Resets the point state, including forces, velocity, acceleration, and position.

### RestLengthFor(ConstraintedPoint constrainedPoint) {#m-cuttheropedx-framework-physics-constraintedpoint-restlengthfor-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public float RestLengthFor(ConstraintedPoint constrainedPoint)
```

Returns the stored rest length for the constraint that targets the specified point.

Parameters:

- `constrainedPoint`: Target point to look up.

Returns: The configured rest length, or `-1` when no constraint exists.

### SatisfyConstraints(ConstraintedPoint constrainedPoint) {#m-cuttheropedx-framework-physics-constraintedpoint-satisfyconstraints-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public static void SatisfyConstraints(ConstraintedPoint constrainedPoint)
```

Enforces all constraints owned by the specified point, including optional pinning.

Parameters:

- `constrainedPoint`: Point whose constraints should be satisfied.

### Update(float delta) {#m-cuttheropedx-framework-physics-constraintedpoint-update-system-single}

```csharp
public override void Update(float delta)
```

Integrates accumulated forces, gravity, velocity, and position for one frame.

Parameters:

- `delta`: Elapsed frame time in seconds.


---
title: Class MaterialPoint
description: Base physics point that stores position, velocity, forces, and gravity state. Provides Euler-style integration used by simple simulated objects.
---

# Class MaterialPoint

Namespace: `CutTheRopeDX.Framework.Physics`

Assembly: `CutTheRope-DX.dll`

Source: `MaterialPoint.cs`

Base physics point that stores position, velocity, forces, and gravity state. Provides Euler-style integration used by simple simulated objects.

## Declaration

```csharp
internal class MaterialPoint : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [MaterialPoint](MaterialPoint.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [ConstraintedPoint](ConstraintedPoint.md)

## Constructors

### MaterialPoint() {#m-cuttheropedx-framework-physics-materialpoint-ctor}

```csharp
public MaterialPoint()
```

Initializes a new [MaterialPoint](MaterialPoint.md) with default weight and zeroed state.

## Fields

### a {#f-cuttheropedx-framework-physics-materialpoint-a}

```csharp
public Vector a
```

Current acceleration.

### disableGravity {#f-cuttheropedx-framework-physics-materialpoint-disablegravity}

```csharp
public bool disableGravity
```

Whether gravity should be excluded from updates.

### forces {#f-cuttheropedx-framework-physics-materialpoint-forces}

```csharp
public Vector[] forces
```

External force slots applied each update.

### globalGravity {#f-cuttheropedx-framework-physics-materialpoint-globalgravity}

```csharp
public static Vector globalGravity
```

Optional gravity override shared by all material points. Zero uses per-point gravity.

### gravity {#f-cuttheropedx-framework-physics-materialpoint-gravity}

```csharp
public Vector gravity
```

Default gravity force for this point based on its weight.

### highestForceIndex {#f-cuttheropedx-framework-physics-materialpoint-highestforceindex}

```csharp
public int highestForceIndex
```

Highest force slot currently considered active.

### invWeight {#f-cuttheropedx-framework-physics-materialpoint-invweight}

```csharp
public float invWeight
```

Cached inverse of [weight](#f-cuttheropedx-framework-physics-materialpoint-weight).

### pos {#f-cuttheropedx-framework-physics-materialpoint-pos}

```csharp
public Vector pos
```

Current position.

### posDelta {#f-cuttheropedx-framework-physics-materialpoint-posdelta}

```csharp
public Vector posDelta
```

Position delta produced during the last update step.

### totalForce {#f-cuttheropedx-framework-physics-materialpoint-totalforce}

```csharp
public Vector totalForce
```

Sum of all applied forces before integration.

### v {#f-cuttheropedx-framework-physics-materialpoint-v}

```csharp
public Vector v
```

Current velocity.

### weight {#f-cuttheropedx-framework-physics-materialpoint-weight}

```csharp
public float weight
```

Point mass.

## Methods

### ApplyImpulseDelta(Vector impulse, float delta) {#m-cuttheropedx-framework-physics-materialpoint-applyimpulsedelta-cuttheropedx-framework-core-vector-system-single}

```csharp
public virtual void ApplyImpulseDelta(Vector impulse, float delta)
```

Applies an instantaneous positional `impulse` scaled by frame time.

Parameters:

- `impulse`: Impulse vector to apply.
- `delta`: Elapsed frame time in seconds.

### DeleteForce(int index) {#m-cuttheropedx-framework-physics-materialpoint-deleteforce-system-int32}

```csharp
public virtual void DeleteForce(int index)
```

Removes the external force stored in the specified slot.

Parameters:

- `index`: Force slot index to clear.

### Dispose(bool disposing) {#m-cuttheropedx-framework-physics-materialpoint-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### GetForce(int index) {#m-cuttheropedx-framework-physics-materialpoint-getforce-system-int32}

```csharp
public virtual Vector GetForce(int index)
```

Returns the external force stored in the specified slot.

Parameters:

- `index`: Force slot index.

Returns: Force vector currently stored in the slot.

### ResetAll() {#m-cuttheropedx-framework-physics-materialpoint-resetall}

```csharp
public virtual void ResetAll()
```

Resets the point state, including forces, velocity, acceleration, and position.

### ResetForces() {#m-cuttheropedx-framework-physics-materialpoint-resetforces}

```csharp
public virtual void ResetForces()
```

Clears all registered external forces and resets the tracked force range.

### SetForcewithID(Vector force, int index) {#m-cuttheropedx-framework-physics-materialpoint-setforcewithid-cuttheropedx-framework-core-vector-system-int32}

```csharp
public virtual void SetForcewithID(Vector force, int index)
```

Stores an external `force` in the specified slot.

Parameters:

- `force`: Force vector to apply each update.
- `index`: Force slot index.

### SetWeight(float weightValue) {#m-cuttheropedx-framework-physics-materialpoint-setweight-system-single}

```csharp
public virtual void SetWeight(float weightValue)
```

Sets the point mass and updates cached inverse weight and gravity force.

Parameters:

- `weightValue`: Mass value used for force integration.

### Update(float delta) {#m-cuttheropedx-framework-physics-materialpoint-update-system-single}

```csharp
public virtual void Update(float delta)
```

Integrates accumulated forces, gravity, velocity, and position for one frame.

Parameters:

- `delta`: Elapsed frame time in seconds.

### UpdatewithPrecision(float delta, float precision) {#m-cuttheropedx-framework-physics-materialpoint-updatewithprecision-system-single-system-single}

```csharp
public virtual void UpdatewithPrecision(float delta, float precision)
```

Advances the point by subdividing the frame into fixed-`precision` steps.

Parameters:

- `delta`: Total elapsed time to simulate.
- `precision`: Maximum time step size for each substep.


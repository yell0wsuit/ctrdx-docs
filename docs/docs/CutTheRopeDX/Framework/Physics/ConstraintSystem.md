---
title: Class ConstraintSystem
description: Base collection of constrained points that updates particles and relaxes constraints.
---

# Class ConstraintSystem

Namespace: `CutTheRopeDX.Framework.Physics`

Assembly: `CutTheRope-DX.dll`

Source: `ConstraintSystem.cs`

Base collection of constrained points that updates particles and relaxes constraints.

## Declaration

```csharp
internal class ConstraintSystem : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [ConstraintSystem](ConstraintSystem.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [Bungee](../../GameMain/Bungee.md)

## Constructors

### ConstraintSystem() {#m-cuttheropedx-framework-physics-constraintsystem-ctor}

```csharp
public ConstraintSystem()
```

Initializes an empty constraint system with a single relaxation pass.

## Fields

### parts {#f-cuttheropedx-framework-physics-constraintsystem-parts}

```csharp
public List<ConstraintedPoint> parts
```

Points managed by this system.

### relaxationTimes {#f-cuttheropedx-framework-physics-constraintsystem-relaxationtimes}

```csharp
public int relaxationTimes
```

Number of times to run constraint relaxation after each update.

## Methods

### AddPart(ConstraintedPoint cp) {#m-cuttheropedx-framework-physics-constraintsystem-addpart-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public virtual void AddPart(ConstraintedPoint cp)
```

Appends a constrained point to the system.

Parameters:

- `cp`: Point to add.

### AddPartAt(ConstraintedPoint cp, int p) {#m-cuttheropedx-framework-physics-constraintsystem-addpartat-cuttheropedx-framework-physics-constraintedpoint-system-int32}

```csharp
public virtual void AddPartAt(ConstraintedPoint cp, int p)
```

Inserts a constrained point at the specified index.

Parameters:

- `cp`: Point to insert.
- `p`: Insertion index.

### Dispose(bool disposing) {#m-cuttheropedx-framework-physics-constraintsystem-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-framework-physics-constraintsystem-draw}

```csharp
public virtual void Draw()
```

Draws the constraint system. Derived types should override this to render their geometry.

### Update(float delta) {#m-cuttheropedx-framework-physics-constraintsystem-update-system-single}

```csharp
public virtual void Update(float delta)
```

Updates all points, then performs the configured number of constraint relaxation passes.

Parameters:

- `delta`: Elapsed frame time in seconds.


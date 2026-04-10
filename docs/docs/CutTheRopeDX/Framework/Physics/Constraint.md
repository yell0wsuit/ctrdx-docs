---
title: Class Constraint
description: Connection data describing how one ConstraintedPoint is constrained relative to another.
---

# Class Constraint

Namespace: `CutTheRopeDX.Framework.Physics`

Assembly: `CutTheRope-DX.dll`

Source: `Constraint.cs`

Connection data describing how one [ConstraintedPoint](ConstraintedPoint.md) is constrained relative to another.

## Declaration

```csharp
internal sealed class Constraint : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [Constraint](Constraint.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### cp {#f-cuttheropedx-framework-physics-constraint-cp}

```csharp
public ConstraintedPoint cp
```

The other point referenced by this constraint.

### restLength {#f-cuttheropedx-framework-physics-constraint-restlength}

```csharp
public float restLength
```

Target length used when enforcing the constraint.

### type {#f-cuttheropedx-framework-physics-constraint-type}

```csharp
public Constraint.CONSTRAINT type
```

Rule used when evaluating the constraint.


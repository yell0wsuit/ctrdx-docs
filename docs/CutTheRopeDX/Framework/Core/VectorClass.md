---
title: Class VectorClass
description: Reference-type wrapper around a Vector value.
---

# Class VectorClass

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `VectorClass.cs`

Reference-type wrapper around a [Vector](Vector.md) value.

## Declaration

```csharp
public class VectorClass
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [VectorClass](VectorClass.md)

## Constructors

### VectorClass() {#m-cuttheropedx-framework-core-vectorclass-ctor}

```csharp
public VectorClass()
```

Initializes a new [VectorClass](VectorClass.md) with a default vector.

### VectorClass(Vector Value) {#m-cuttheropedx-framework-core-vectorclass-ctor-cuttheropedx-framework-core-vector}

```csharp
public VectorClass(Vector Value)
```

Initializes a new [VectorClass](VectorClass.md) with the specified vector.

Parameters:

- `Value`: Vector value to wrap.

## Properties

### VectorPoint {#p-cuttheropedx-framework-core-vectorclass-vectorpoint}

```csharp
public Vector VectorPoint { get; set; }
```

The wrapped vector value.


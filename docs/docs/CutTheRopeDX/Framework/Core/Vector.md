---
title: Struct Vector
description: A 2D vector with X and Y float components.
---

# Struct Vector

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `Vector.cs`

A 2D vector with X and Y float components.

## Declaration

```csharp
public sealed struct Vector
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [Vector](Vector.md)

## Constructors

### Vector(Vector2 v) {#m-cuttheropedx-framework-core-vector-ctor-microsoft-xna-framework-vector2}

```csharp
public Vector(Vector2 v)
```

Initializes a new [Vector](Vector.md) from an XNA [Vector2](https://docs.monogame.net/api/Microsoft.Xna.Framework.Vector2.html).

Parameters:

- `v`: Source XNA vector.

### Vector(float xParam, float yParam) {#m-cuttheropedx-framework-core-vector-ctor-system-single-system-single}

```csharp
public Vector(float xParam, float yParam)
```

Initializes a new [Vector](Vector.md) with the specified components.

Parameters:

- `xParam`: X component.
- `yParam`: Y component.

## Properties

### X {#p-cuttheropedx-framework-core-vector-x}

```csharp
public float X { get; set; }
```

X component.

### Y {#p-cuttheropedx-framework-core-vector-y}

```csharp
public float Y { get; set; }
```

Y component.

## Methods

### ToString() {#m-cuttheropedx-framework-core-vector-tostring}

```csharp
public override string ToString()
```

Returns the fully qualified type name of this instance.

Returns: The fully qualified type name.

### ToXNA() {#m-cuttheropedx-framework-core-vector-toxna}

```csharp
public Vector2 ToXNA()
```

Converts this vector to an XNA [Vector2](https://docs.monogame.net/api/Microsoft.Xna.Framework.Vector2.html).

Returns: The converted XNA vector.


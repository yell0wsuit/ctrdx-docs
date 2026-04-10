---
title: Struct Quad2D
description: A 2D quad defined by four corner points (top-left, top-right, bottom-left, bottom-right).
---

# Struct Quad2D

Namespace: `CutTheRopeDX.Framework`

Assembly: `CutTheRope-DX.dll`

Source: `Quad2D.cs`

A 2D quad defined by four corner points (top-left, top-right, bottom-left, bottom-right).

## Declaration

```csharp
internal sealed struct Quad2D
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [Quad2D](Quad2D.md)

## Constructors

### Quad2D(float x, float y, float w, float h) {#m-cuttheropedx-framework-quad2d-ctor-system-single-system-single-system-single-system-single}

```csharp
public Quad2D(float x, float y, float w, float h)
```

A 2D quad defined by four corner points (top-left, top-right, bottom-left, bottom-right).

Parameters:

- `x`: X position of the top-left corner.
- `y`: Y position of the top-left corner.
- `w`: Width of the quad.
- `h`: Height of the quad.

## Fields

### blX {#f-cuttheropedx-framework-quad2d-blx}

```csharp
public float blX
```

Bottom-left X coordinate.

### blY {#f-cuttheropedx-framework-quad2d-bly}

```csharp
public float blY
```

Bottom-left Y coordinate.

### brX {#f-cuttheropedx-framework-quad2d-brx}

```csharp
public float brX
```

Bottom-right X coordinate.

### brY {#f-cuttheropedx-framework-quad2d-bry}

```csharp
public float brY
```

Bottom-right Y coordinate.

### tlX {#f-cuttheropedx-framework-quad2d-tlx}

```csharp
public float tlX
```

Top-left X coordinate.

### tlY {#f-cuttheropedx-framework-quad2d-tly}

```csharp
public float tlY
```

Top-left Y coordinate.

### trX {#f-cuttheropedx-framework-quad2d-trx}

```csharp
public float trX
```

Top-right X coordinate.

### trY {#f-cuttheropedx-framework-quad2d-try}

```csharp
public float trY
```

Top-right Y coordinate.

## Methods

### MakeQuad2D(float x, float y, float w, float h) {#m-cuttheropedx-framework-quad2d-makequad2d-system-single-system-single-system-single-system-single}

```csharp
public static Quad2D MakeQuad2D(float x, float y, float w, float h)
```

Creates a [Quad2D](Quad2D.md) from position and size.

Parameters:

- `x`: X position of the top-left corner.
- `y`: Y position of the top-left corner.
- `w`: Width of the quad.
- `h`: Height of the quad.

Returns: The constructed quad.

### ToFloatArray() {#m-cuttheropedx-framework-quad2d-tofloatarray}

```csharp
public float[] ToFloatArray()
```

Returns the eight corner coordinates as a flat float array.

Returns: A flat array containing all quad coordinates.


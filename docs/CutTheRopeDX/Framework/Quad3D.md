---
title: Struct Quad3D
description: A 3D quad defined by four corner points with X, Y, and Z coordinates.
---

# Struct Quad3D

Namespace: `CutTheRopeDX.Framework`

Assembly: `CutTheRope-DX.dll`

Source: `Quad3D.cs`

A 3D quad defined by four corner points with X, Y, and Z coordinates.

## Declaration

```csharp
internal sealed struct Quad3D
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [Quad3D](Quad3D.md)

## Fields

### _array {#f-cuttheropedx-framework-quad3d-array}

```csharp
private float[] _array
```

Cached flat array returned by [ToFloatArray](#m-cuttheropedx-framework-quad3d-tofloatarray).

## Properties

### BlX {#p-cuttheropedx-framework-quad3d-blx}

```csharp
public float BlX { get; private set; }
```

Bottom-left X coordinate.

### BlY {#p-cuttheropedx-framework-quad3d-bly}

```csharp
public float BlY { get; private set; }
```

Bottom-left Y coordinate.

### BlZ {#p-cuttheropedx-framework-quad3d-blz}

```csharp
public float BlZ { get; private set; }
```

Bottom-left Z coordinate.

### BrX {#p-cuttheropedx-framework-quad3d-brx}

```csharp
public float BrX { get; private set; }
```

Bottom-right X coordinate.

### BrY {#p-cuttheropedx-framework-quad3d-bry}

```csharp
public float BrY { get; private set; }
```

Bottom-right Y coordinate.

### BrZ {#p-cuttheropedx-framework-quad3d-brz}

```csharp
public float BrZ { get; private set; }
```

Bottom-right Z coordinate.

### TlX {#p-cuttheropedx-framework-quad3d-tlx}

```csharp
public float TlX { get; private set; }
```

Top-left X coordinate.

### TlY {#p-cuttheropedx-framework-quad3d-tly}

```csharp
public float TlY { get; private set; }
```

Top-left Y coordinate.

### TlZ {#p-cuttheropedx-framework-quad3d-tlz}

```csharp
public float TlZ { get; private set; }
```

Top-left Z coordinate.

### TrX {#p-cuttheropedx-framework-quad3d-trx}

```csharp
public float TrX { get; private set; }
```

Top-right X coordinate.

### TrY {#p-cuttheropedx-framework-quad3d-try}

```csharp
public float TrY { get; private set; }
```

Top-right Y coordinate.

### TrZ {#p-cuttheropedx-framework-quad3d-trz}

```csharp
public float TrZ { get; private set; }
```

Top-right Z coordinate.

## Methods

### MakeQuad3D(float x, float y, float z, float w, float h) {#m-cuttheropedx-framework-quad3d-makequad3d-system-single-system-single-system-single-system-single-system-single}

```csharp
public static Quad3D MakeQuad3D(float x, float y, float z, float w, float h)
```

Creates a [Quad3D](Quad3D.md) from position, size, and Z depth.

Parameters:

- `x`: X position of the bottom-left corner.
- `y`: Y position of the bottom-left corner.
- `z`: Z depth for all corners.
- `w`: Width of the quad.
- `h`: Height of the quad.

Returns: The constructed quad.

### MakeQuad3DEx(float x1, float y1, float x2, float y2, float x3, float y3, float x4, float y4) {#m-cuttheropedx-framework-quad3d-makequad3dex-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-single}

```csharp
public static Quad3D MakeQuad3DEx(float x1, float y1, float x2, float y2, float x3, float y3, float x4, float y4)
```

Creates a [Quad3D](Quad3D.md) from four explicit 2D corner positions at Z=0.

Parameters:

- `x1`: Bottom-left X.
- `y1`: Bottom-left Y.
- `x2`: Bottom-right X.
- `y2`: Bottom-right Y.
- `x3`: Top-left X.
- `y3`: Top-left Y.
- `x4`: Top-right X.
- `y4`: Top-right Y.

Returns: The constructed quad.

### ToFloatArray() {#m-cuttheropedx-framework-quad3d-tofloatarray}

```csharp
public float[] ToFloatArray()
```

Returns the twelve corner coordinates as a flat float array.

Returns: A flat array containing all 4 corner coordinates in XYZ order.


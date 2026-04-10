---
title: Class QuadraticBezierSpline
description: Stores one or more quadratic spline segments.
---

# Class QuadraticBezierSpline

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `QuadraticBezierSpline.cs`

Stores one or more quadratic spline segments.

## Declaration

```csharp
internal sealed class QuadraticBezierSpline
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [QuadraticBezierSpline](QuadraticBezierSpline.md)

## Constructors

### QuadraticBezierSpline(params QuadraticBezierSpline.SplineSegment[] segments) {#m-cuttheropedx-gamemain-quadraticbezierspline-ctor-cuttheropedx-gamemain-quadraticbezierspline-splinesegment}

```csharp
private QuadraticBezierSpline(params QuadraticBezierSpline.SplineSegment[] segments)
```

Initializes a spline from one or more precomputed quadratic Bezier segments.

Parameters:

- `segments`: Segments to evaluate in order.

## Fields

### segments {#f-cuttheropedx-gamemain-quadraticbezierspline-segments}

```csharp
private readonly QuadraticBezierSpline.SplineSegment[] segments
```

Quadratic Bezier segments that make up this spline.

## Methods

### CreateDefaultTracePath() {#m-cuttheropedx-gamemain-quadraticbezierspline-createdefaulttracepath}

```csharp
public static QuadraticBezierSpline CreateDefaultTracePath()
```

Creates the default multi-segment preview path used by the non-lightning trace skins.

Returns: The default preview spline path.

### CreateLightningTracePath() {#m-cuttheropedx-gamemain-quadraticbezierspline-createlightningtracepath}

```csharp
public static QuadraticBezierSpline CreateLightningTracePath()
```

Creates the single quadratic segment used by the CTR2 lightning trace preview.

Returns: The lightning preview spline path.

### Evaluate(Vector start, Vector control, Vector end, float t) {#m-cuttheropedx-gamemain-quadraticbezierspline-evaluate-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-single}

```csharp
public static Vector Evaluate(Vector start, Vector control, Vector end, float t)
```

Evaluates a standard quadratic Bezier curve for the given control points.

Parameters:

- `start`: Curve start point.
- `control`: Quadratic control point.
- `end`: Curve end point.
- `t`: Normalized interpolation parameter.

Returns: The evaluated curve point.

### GetPointForParam(float param) {#m-cuttheropedx-gamemain-quadraticbezierspline-getpointforparam-system-single}

```csharp
public Vector GetPointForParam(float param)
```

Evaluates the spline at the provided parameter using the CTR2 segment-selection rules.

Parameters:

- `param`: Segment-local parameter. Values greater than `1` advance across segments and, once the last segment is reached, continue evaluating that last segment with the overflow preserved.

Returns: The evaluated spline point.

### Midpoint(Vector a, Vector b) {#m-cuttheropedx-gamemain-quadraticbezierspline-midpoint-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
private static Vector Midpoint(Vector a, Vector b)
```

Computes the midpoint between two vectors.

Parameters:

- `a`: First point.
- `b`: Second point.

Returns: The midpoint between `a` and `b`.

### SampleLine(Vector start, Vector end, int subdivisions) {#m-cuttheropedx-gamemain-quadraticbezierspline-sampleline-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-int32}

```csharp
private static Vector[] SampleLine(Vector start, Vector end, int subdivisions)
```

Samples evenly spaced points along a straight line.

Parameters:

- `start`: Line start point.
- `end`: Line end point.
- `subdivisions`: Number of line subdivisions to sample.

Returns: The sampled line points, including both endpoints.

### SamplePath(IReadOnlyList&lt;Vector&gt; controlPoints, int subdivisionsPerCurve) {#m-cuttheropedx-gamemain-quadraticbezierspline-samplepath-system-collections-generic-ireadonlylist-cuttheropedx-framework-core-vector-system-int32}

```csharp
public static Vector[] SamplePath(IReadOnlyList<Vector> controlPoints, int subdivisionsPerCurve)
```

Samples a smooth path through a control-point list for snapshot/debug visualization.

Parameters:

- `controlPoints`: The points to interpolate through.
- `subdivisionsPerCurve`: How many samples to emit for each curve span.

Returns: Sampled points along the generated path.


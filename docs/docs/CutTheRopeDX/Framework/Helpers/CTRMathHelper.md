---
title: Class CTRMathHelper
description: Provides math utilities, vector operations, random number generation, collision tests, and fast trigonometry lookups.
---

# Class CTRMathHelper

Namespace: `CutTheRopeDX.Framework.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `CTRMathHelper.cs`

Provides math utilities, vector operations, random number generation, collision tests, and fast trigonometry lookups.

## Declaration

```csharp
internal class CTRMathHelper
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](CTRMathHelper.md)

## Derived

- [FrameworkTypes](../FrameworkTypes.md)

## Fields

### ARC4RANDOM_MAX {#f-cuttheropedx-framework-helpers-ctrmathhelper-arc4random-max}

```csharp
private static readonly long ARC4RANDOM_MAX
```

Maximum value for [Arc4random](#m-cuttheropedx-framework-helpers-ctrmathhelper-arc4random) range normalization (2^32).

### COHEN_BOT {#f-cuttheropedx-framework-helpers-ctrmathhelper-cohen-bot}

```csharp
private const int COHEN_BOT
```

Cohen–Sutherland region code: below rectangle.

### COHEN_LEFT {#f-cuttheropedx-framework-helpers-ctrmathhelper-cohen-left}

```csharp
private const int COHEN_LEFT
```

Cohen–Sutherland region code: left of rectangle.

### COHEN_RIGHT {#f-cuttheropedx-framework-helpers-ctrmathhelper-cohen-right}

```csharp
private const int COHEN_RIGHT
```

Cohen–Sutherland region code: right of rectangle.

### COHEN_TOP {#f-cuttheropedx-framework-helpers-ctrmathhelper-cohen-top}

```csharp
private const int COHEN_TOP
```

Cohen–Sutherland region code: above rectangle.

### DEG_180 {#f-cuttheropedx-framework-helpers-ctrmathhelper-deg-180}

```csharp
public const float DEG_180
```

Constant for 180 degrees in float.

### DEG_270 {#f-cuttheropedx-framework-helpers-ctrmathhelper-deg-270}

```csharp
public const float DEG_270
```

Constant for 270 degrees in float.

### DEG_360 {#f-cuttheropedx-framework-helpers-ctrmathhelper-deg-360}

```csharp
public const float DEG_360
```

Constant for 360 degrees in float.

### DEG_45 {#f-cuttheropedx-framework-helpers-ctrmathhelper-deg-45}

```csharp
public const float DEG_45
```

Constant for 45 degrees in float.

### DEG_90 {#f-cuttheropedx-framework-helpers-ctrmathhelper-deg-90}

```csharp
public const float DEG_90
```

Constant for 90 degrees in float.

### FLOAT_RANDOM_SCALE {#f-cuttheropedx-framework-helpers-ctrmathhelper-float-random-scale}

```csharp
private const int FLOAT_RANDOM_SCALE
```

Precision multiplier for [FLOAT_RND_RANGE](#m-cuttheropedx-framework-helpers-ctrmathhelper-float-rnd-range-system-int32-system-int32).

### FM_TRIG_TABLE_MASK {#f-cuttheropedx-framework-helpers-ctrmathhelper-fm-trig-table-mask}

```csharp
private const int FM_TRIG_TABLE_MASK
```

Bitmask for wrapping trig table indices.

### FM_TRIG_TABLE_SIZE {#f-cuttheropedx-framework-helpers-ctrmathhelper-fm-trig-table-size}

```csharp
private const int FM_TRIG_TABLE_SIZE
```

Number of entries in the fast-math trig lookup tables.

### UNDEFINED_COORDINATE {#f-cuttheropedx-framework-helpers-ctrmathhelper-undefined-coordinate}

```csharp
public const float UNDEFINED_COORDINATE
```

Sentinel value indicating an undefined coordinate.

### fmCoss {#f-cuttheropedx-framework-helpers-ctrmathhelper-fmcoss}

```csharp
private static float[] fmCoss
```

Fast-math cosine lookup table populated by [FmInit](#m-cuttheropedx-framework-helpers-ctrmathhelper-fminit).

### fmSins {#f-cuttheropedx-framework-helpers-ctrmathhelper-fmsins}

```csharp
private static float[] fmSins
```

Fast-math sine lookup table populated by [FmInit](#m-cuttheropedx-framework-helpers-ctrmathhelper-fminit).

### random_ {#f-cuttheropedx-framework-helpers-ctrmathhelper-random}

```csharp
private static readonly Random random_
```

Shared random number generator used by all RND methods.

### vectUndefined {#f-cuttheropedx-framework-helpers-ctrmathhelper-vectundefined}

```csharp
public static readonly Vector vectUndefined
```

Sentinel vector indicating an undefined position.

### vectZero {#f-cuttheropedx-framework-helpers-ctrmathhelper-vectzero}

```csharp
public static readonly Vector vectZero
```

Zero vector (0, 0).

## Properties

### RND_0_1 {#p-cuttheropedx-framework-helpers-ctrmathhelper-rnd-0-1}

```csharp
public static float RND_0_1 { get; }
```

Random float in the range [0, 1].

### RND_MINUS1_1 {#p-cuttheropedx-framework-helpers-ctrmathhelper-rnd-minus1-1}

```csharp
public static float RND_MINUS1_1 { get; }
```

Random float in the range [-1, 1].

## Methods

### ABS(float a) {#m-cuttheropedx-framework-helpers-ctrmathhelper-abs-system-single}

```csharp
public static float ABS(float a)
```

Returns the absolute value of a float.

Parameters:

- `a`: The input value.

Returns: The absolute value of `a`.

### Acosf(float x) {#m-cuttheropedx-framework-helpers-ctrmathhelper-acosf-system-single}

```csharp
public static float Acosf(float x)
```

Returns the arccosine of `x` in radians as a float.

Parameters:

- `x`: Value in the range [-1, 1].

Returns: The arccosine of `x` in radians.

### AngleTo0_360(float angle) {#m-cuttheropedx-framework-helpers-ctrmathhelper-angleto0-360-system-single}

```csharp
public static float AngleTo0_360(float angle)
```

Normalizes an `angle` in degrees to the range [0, 360).

Parameters:

- `angle`: Angle in degrees.

Returns: The normalized `angle`.

### Arc4random() {#m-cuttheropedx-framework-helpers-ctrmathhelper-arc4random}

```csharp
public static uint Arc4random()
```

Returns a random uint, wrapping [Random](https://learn.microsoft.com/en-us/dotnet/api/system.random?view=net-10.0).

Returns: A random unsigned integer.

### Ceil(float value) {#m-cuttheropedx-framework-helpers-ctrmathhelper-ceil-system-single}

```csharp
public static float Ceil(float value)
```

Returns the ceiling of `value` as a float.

Parameters:

- `value`: The input value.

Returns: The smallest integer greater than or equal to `value`.

### Cosf(float x) {#m-cuttheropedx-framework-helpers-ctrmathhelper-cosf-system-single}

```csharp
public static float Cosf(float x)
```

Returns the cosine of `x` (radians) as a float.

Parameters:

- `x`: Angle in radians.

Returns: The cosine of `x`.

### DEGREES_TO_RADIANS(float D) {#m-cuttheropedx-framework-helpers-ctrmathhelper-degrees-to-radians-system-single}

```csharp
public static float DEGREES_TO_RADIANS(float D)
```

Converts degrees to radians.

Parameters:

- `D`: Angle in degrees.

Returns: Angle in radians.

### FIT_TO_BOUNDARIES(float V, float MINV, float MAXV) {#m-cuttheropedx-framework-helpers-ctrmathhelper-fit-to-boundaries-system-single-system-single-system-single}

```csharp
public static float FIT_TO_BOUNDARIES(float V, float MINV, float MAXV)
```

Clamps `V` to the range [`MINV`, `MAXV`].

Parameters:

- `V`: The value to clamp.
- `MINV`: Minimum bound.
- `MAXV`: Maximum bound.

Returns: The clamped value.

### FLOAT_RND_RANGE(int S, int F) {#m-cuttheropedx-framework-helpers-ctrmathhelper-float-rnd-range-system-int32-system-int32}

```csharp
public static float FLOAT_RND_RANGE(int S, int F)
```

Returns a random float in the range [`S`, `F`], with precision to three decimal places.

Parameters:

- `S`: Lower bound (inclusive).
- `F`: Upper bound (inclusive).

Returns: A random float between `S` and `F`.

### FmCos(float angle) {#m-cuttheropedx-framework-helpers-ctrmathhelper-fmcos-system-single}

```csharp
public static float FmCos(float angle)
```

Fast table-based cosine. Quantizes `angle` (radians) to [FM_TRIG_TABLE_SIZE](#f-cuttheropedx-framework-helpers-ctrmathhelper-fm-trig-table-size) steps.

Parameters:

- `angle`: Angle in radians.

Returns: The approximate cosine of `angle`.

### FmInit() {#m-cuttheropedx-framework-helpers-ctrmathhelper-fminit}

```csharp
public static void FmInit()
```

Initializes the fast-math sine and cosine lookup tables. Must be called before using [FmSin](#m-cuttheropedx-framework-helpers-ctrmathhelper-fmsin-system-single) or [FmCos](#m-cuttheropedx-framework-helpers-ctrmathhelper-fmcos-system-single).

### FmSin(float angle) {#m-cuttheropedx-framework-helpers-ctrmathhelper-fmsin-system-single}

```csharp
public static float FmSin(float angle)
```

Fast table-based sine. Quantizes `angle` (radians) to [FM_TRIG_TABLE_SIZE](#f-cuttheropedx-framework-helpers-ctrmathhelper-fm-trig-table-size) steps.

Parameters:

- `angle`: Angle in radians.

Returns: The approximate sine of `angle`.

### GetSHA256(char[] data) {#m-cuttheropedx-framework-helpers-ctrmathhelper-getsha256-system-char}

```csharp
public static string GetSHA256(char[] data)
```

Returns the lowercase hex SHA-256 hash of a UTF-16 char array.

Parameters:

- `data`: The character array to hash.

Returns: The lowercase hex SHA-256 hash.

### GetSHA256Str(string input) {#m-cuttheropedx-framework-helpers-ctrmathhelper-getsha256str-system-string}

```csharp
public static string GetSHA256Str(string input)
```

Returns the lowercase hex SHA-256 hash of `input`.

Parameters:

- `input`: The string to hash.

Returns: The lowercase hex SHA-256 hash.

### LineInLine(float x1, float y1, float x2, float y2, float x3, float y3, float x4, float y4) {#m-cuttheropedx-framework-helpers-ctrmathhelper-lineinline-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-single}

```csharp
public static bool LineInLine(float x1, float y1, float x2, float y2, float x3, float y3, float x4, float y4)
```

Tests whether two line segments intersect: segment 1 from (`x1`, `y1`) to (`x2`, `y2`) and segment 2 from (`x3`, `y3`) to (`x4`, `y4`).

Parameters:

- `x1`: Segment 1 start X.
- `y1`: Segment 1 start Y.
- `x2`: Segment 1 end X.
- `y2`: Segment 1 end Y.
- `x3`: Segment 2 start X.
- `y3`: Segment 2 start Y.
- `x4`: Segment 2 end X.
- `y4`: Segment 2 end Y.

Returns: `true` if the segments intersect.

### LineInRect(float x1, float y1, float x2, float y2, float rx, float ry, float w, float h) {#m-cuttheropedx-framework-helpers-ctrmathhelper-lineinrect-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-single}

```csharp
public static bool LineInRect(float x1, float y1, float x2, float y2, float rx, float ry, float w, float h)
```

Tests whether the line segment from (`x1`, `y1`) to (`x2`, `y2`) intersects the axis-aligned rectangle at (`rx`, `ry`) with dimensions `w` × `h`, using the Cohen–Sutherland clipping algorithm.

Parameters:

- `x1`: Segment start X.
- `y1`: Segment start Y.
- `x2`: Segment end X.
- `y2`: Segment end Y.
- `rx`: Rectangle left edge.
- `ry`: Rectangle top edge.
- `w`: Rectangle width.
- `h`: Rectangle height.

Returns: `true` if the segment intersects the rectangle.

### MAX(int a, int b) {#m-cuttheropedx-framework-helpers-ctrmathhelper-max-system-int32-system-int32}

```csharp
public static int MAX(int a, int b)
```

Returns the larger of two integers.

Parameters:

- `a`: First value.
- `b`: Second value.

Returns: The larger of `a` and `b`.

### MAX(float a, float b) {#m-cuttheropedx-framework-helpers-ctrmathhelper-max-system-single-system-single}

```csharp
public static float MAX(float a, float b)
```

Returns the larger of two floats.

Parameters:

- `a`: First value.
- `b`: Second value.

Returns: The larger of `a` and `b`.

### MIN(int a, int b) {#m-cuttheropedx-framework-helpers-ctrmathhelper-min-system-int32-system-int32}

```csharp
public static int MIN(int a, int b)
```

Returns the smaller of two integers.

Parameters:

- `a`: First value.
- `b`: Second value.

Returns: The smaller of `a` and `b`.

### MIN(float a, float b) {#m-cuttheropedx-framework-helpers-ctrmathhelper-min-system-single-system-single}

```csharp
public static float MIN(float a, float b)
```

Returns the smaller of two floats.

Parameters:

- `a`: First value.
- `b`: Second value.

Returns: The smaller of `a` and `b`.

### ObbInOBB(Vector tl1, Vector tr1, Vector br1, Vector bl1, Vector tl2, Vector tr2, Vector br2, Vector bl2) {#m-cuttheropedx-framework-helpers-ctrmathhelper-obbinobb-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
public static bool ObbInOBB(Vector tl1, Vector tr1, Vector br1, Vector bl1, Vector tl2, Vector tr2, Vector br2, Vector bl2)
```

Tests whether two oriented bounding boxes (OBBs) overlap using the separating axis theorem. Each OBB is described by its four corner vertices in order: top-left, top-right, bottom-right, bottom-left.

Parameters:

- `tl1`: First OBB top-left corner.
- `tr1`: First OBB top-right corner.
- `br1`: First OBB bottom-right corner.
- `bl1`: First OBB bottom-left corner.
- `tl2`: Second OBB top-left corner.
- `tr2`: Second OBB top-right corner.
- `br2`: Second OBB bottom-right corner.
- `bl2`: Second OBB bottom-left corner.

Returns: `true` if the two OBBs overlap.

### Overlaps1Way(Vector[] corner, Vector[] other) {#m-cuttheropedx-framework-helpers-ctrmathhelper-overlaps1way-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
private static bool Overlaps1Way(Vector[] corner, Vector[] other)
```

Returns `true` if all corners of `other` project onto the axes of `corner` within the box's own extents (one-way SAT overlap test).

Parameters:

- `corner`: The four corners of the reference OBB.
- `other`: The four corners of the OBB being tested.

Returns: `true` if all projections overlap on the reference axes.

### PointInRect(float x, float y, float checkX, float checkY, float checkWidth, float checkHeight) {#m-cuttheropedx-framework-helpers-ctrmathhelper-pointinrect-system-single-system-single-system-single-system-single-system-single-system-single}

```csharp
public static bool PointInRect(float x, float y, float checkX, float checkY, float checkWidth, float checkHeight)
```

Returns `true` if the point (`x`, `y`) lies within the axis-aligned rectangle defined by its top-left corner, width, and height.

Parameters:

- `x`: Point X coordinate.
- `y`: Point Y coordinate.
- `checkX`: Rectangle left edge.
- `checkY`: Rectangle top edge.
- `checkWidth`: Rectangle width.
- `checkHeight`: Rectangle height.

Returns: `true` if the point is inside the rectangle.

### RADIANS_TO_DEGREES(float R) {#m-cuttheropedx-framework-helpers-ctrmathhelper-radians-to-degrees-system-single}

```csharp
public static float RADIANS_TO_DEGREES(float R)
```

Converts radians to degrees.

Parameters:

- `R`: Angle in radians.

Returns: Angle in degrees.

### RND(int n) {#m-cuttheropedx-framework-helpers-ctrmathhelper-rnd-system-int32}

```csharp
public static int RND(int n)
```

Returns a random integer in the range [0, n].

Parameters:

- `n`: Upper bound (inclusive).

Returns: A random integer between 0 and `n`.

### RND_RANGE(int n, int m) {#m-cuttheropedx-framework-helpers-ctrmathhelper-rnd-range-system-int32-system-int32}

```csharp
public static int RND_RANGE(int n, int m)
```

Returns a random integer in the range [n, m].

Parameters:

- `n`: Lower bound (inclusive).
- `m`: Upper bound (inclusive).

Returns: A random integer between `n` and `m`.

### RectInRect(float x1l, float y1t, float x1r, float y1b, float x2l, float y2t, float x2r, float y2b) {#m-cuttheropedx-framework-helpers-ctrmathhelper-rectinrect-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-single}

```csharp
public static bool RectInRect(float x1l, float y1t, float x1r, float y1b, float x2l, float y2t, float x2r, float y2b)
```

Returns `true` if two axis-aligned rectangles overlap. Each rectangle is supplied as its left, top, right, and bottom edges.

Parameters:

- `x1l`: First rectangle left edge.
- `y1t`: First rectangle top edge.
- `x1r`: First rectangle right edge.
- `y1b`: First rectangle bottom edge.
- `x2l`: Second rectangle left edge.
- `y2t`: Second rectangle top edge.
- `x2r`: Second rectangle right edge.
- `y2b`: Second rectangle bottom edge.

Returns: `true` if the rectangles overlap.

### RectInRectIntersection(CTRRectangle r1, CTRRectangle r2) {#m-cuttheropedx-framework-helpers-ctrmathhelper-rectinrectintersection-cuttheropedx-framework-ctrrectangle-cuttheropedx-framework-ctrrectangle}

```csharp
public static CTRRectangle RectInRectIntersection(CTRRectangle r1, CTRRectangle r2)
```

Returns the intersection of `r2` clipped to `r1`, with coordinates expressed relative to `r1`'s origin.

Parameters:

- `r1`: The clipping rectangle.
- `r2`: The rectangle to clip.

Returns: The intersection rectangle relative to `r1`.

### Round(float value) {#m-cuttheropedx-framework-helpers-ctrmathhelper-round-system-single}

```csharp
public static float Round(float value)
```

Returns `value` rounded to the nearest integer as a float.

Parameters:

- `value`: The input value.

Returns: The rounded `value`.

### SameSign(float a, float b) {#m-cuttheropedx-framework-helpers-ctrmathhelper-samesign-system-single-system-single}

```csharp
public static bool SameSign(float a, float b)
```

Returns `true` if `a` and `b` have the same sign (both ≥ 0 or both < 0).

Parameters:

- `a`: First value.
- `b`: Second value.

Returns: `true` if both values share the same sign.

### Sinf(float x) {#m-cuttheropedx-framework-helpers-ctrmathhelper-sinf-system-single}

```csharp
public static float Sinf(float x)
```

Returns the sine of `x` (radians) as a float.

Parameters:

- `x`: Angle in radians.

Returns: The sine of `x`.

### Tanf(float x) {#m-cuttheropedx-framework-helpers-ctrmathhelper-tanf-system-single}

```csharp
public static float Tanf(float x)
```

Returns the tangent of `x` (radians) as a float.

Parameters:

- `x`: Angle in radians.

Returns: The tangent of `x`.

### Vcode(float x_min, float y_min, float x_max, float y_max, Vector p) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vcode-system-single-system-single-system-single-system-single-cuttheropedx-framework-core-vector}

```csharp
private static int Vcode(float x_min, float y_min, float x_max, float y_max, Vector p)
```

Computes the Cohen–Sutherland outcode for point `p` relative to the axis-aligned rectangle [`x_min`, `x_max`] × [`y_min`, `y_max`].

Parameters:

- `x_min`: Rectangle minimum X.
- `y_min`: Rectangle minimum Y.
- `x_max`: Rectangle maximum X.
- `y_max`: Rectangle maximum Y.
- `p`: The point to classify.

Returns: A bitmask of `COHEN_*` region codes.

### Vect(float x, float y) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vect-system-single-system-single}

```csharp
public static Vector Vect(float x, float y)
```

Creates a [Vector](../Core/Vector.md) from the given x and y components.

Parameters:

- `x`: The X component.
- `y`: The Y component.

Returns: A new vector with the specified components.

### VectAdd(Vector v1, Vector v2) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectadd-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
public static Vector VectAdd(Vector v1, Vector v2)
```

Returns the component-wise sum of `v1` and `v2`.

Parameters:

- `v1`: First vector.
- `v2`: Second vector.

Returns: The sum of the two vectors.

### VectAngle(Vector v) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectangle-cuttheropedx-framework-core-vector}

```csharp
public static float VectAngle(Vector v)
```

Returns the angle of `v` in radians using `atan(y/x)`. Prefer [VectAngleNormalized](#m-cuttheropedx-framework-helpers-ctrmathhelper-vectanglenormalized-cuttheropedx-framework-core-vector) to handle all quadrants correctly.

Parameters:

- `v`: The input vector.

Returns: The angle in radians.

### VectAngleNormalized(Vector v) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectanglenormalized-cuttheropedx-framework-core-vector}

```csharp
public static float VectAngleNormalized(Vector v)
```

Returns the angle of `v` in radians using `atan2(y, x)`, covering all quadrants.

Parameters:

- `v`: The input vector.

Returns: The angle in radians in the range [-π, π].

### VectDistance(Vector v1, Vector v2) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectdistance-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
public static float VectDistance(Vector v1, Vector v2)
```

Returns the Euclidean distance between `v1` and `v2`.

Parameters:

- `v1`: First point.
- `v2`: Second point.

Returns: The distance between the two points.

### VectDiv(Vector v, float s) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectdiv-cuttheropedx-framework-core-vector-system-single}

```csharp
public static Vector VectDiv(Vector v, float s)
```

Returns `v` divided by scalar `s`.

Parameters:

- `v`: The vector to divide.
- `s`: The scalar divisor.

Returns: The divided vector.

### VectDot(Vector v1, Vector v2) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectdot-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
public static float VectDot(Vector v1, Vector v2)
```

Returns the dot product of `v1` and `v2`.

Parameters:

- `v1`: First vector.
- `v2`: Second vector.

Returns: The dot product of the two vectors.

### VectEqual(Vector v1, Vector v2) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectequal-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
public static bool VectEqual(Vector v1, Vector v2)
```

Returns `true` if both components of `v1` and `v2` are equal.

Parameters:

- `v1`: First vector.
- `v2`: Second vector.

Returns: `true` if the vectors have identical components.

### VectForAngle(float a) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectforangle-system-single}

```csharp
public static Vector VectForAngle(float a)
```

Returns a unit vector pointing in the direction of angle `a` (radians).

Parameters:

- `a`: Angle in radians.

Returns: A unit vector pointing at the specified angle.

### VectLength(Vector v) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectlength-cuttheropedx-framework-core-vector}

```csharp
public static float VectLength(Vector v)
```

Returns the magnitude (Euclidean length) of `v`.

Parameters:

- `v`: The input vector.

Returns: The length of the vector.

### VectLengthsq(Vector v) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectlengthsq-cuttheropedx-framework-core-vector}

```csharp
public static float VectLengthsq(Vector v)
```

Returns the squared magnitude of `v`. Cheaper than [VectLength](#m-cuttheropedx-framework-helpers-ctrmathhelper-vectlength-cuttheropedx-framework-core-vector) when only relative comparisons are needed.

Parameters:

- `v`: The input vector.

Returns: The squared length of the vector.

### VectMult(Vector v, float s) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectmult-cuttheropedx-framework-core-vector-system-single}

```csharp
public static Vector VectMult(Vector v, float s)
```

Returns `v` scaled by scalar `s`.

Parameters:

- `v`: The vector to scale.
- `s`: The scalar multiplier.

Returns: The scaled vector.

### VectNeg(Vector v) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectneg-cuttheropedx-framework-core-vector}

```csharp
public static Vector VectNeg(Vector v)
```

Returns the negation of `v`.

Parameters:

- `v`: The vector to negate.

Returns: The negated vector.

### VectNormalize(Vector v) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectnormalize-cuttheropedx-framework-core-vector}

```csharp
public static Vector VectNormalize(Vector v)
```

Returns a unit vector in the same direction as `v`.

Parameters:

- `v`: The vector to normalize.

Returns: A unit vector in the direction of `v`.

### VectPerp(Vector v) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectperp-cuttheropedx-framework-core-vector}

```csharp
public static Vector VectPerp(Vector v)
```

Returns the left perpendicular of `v`: (-y, x).

Parameters:

- `v`: The input vector.

Returns: The left perpendicular vector.

### VectRotate(Vector v, float rad) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectrotate-cuttheropedx-framework-core-vector-system-single}

```csharp
public static Vector VectRotate(Vector v, float rad)
```

Rotates `v` by `rad` radians around the origin.

Parameters:

- `v`: The vector to rotate.
- `rad`: Rotation angle in radians.

Returns: The rotated vector.

### VectRotateAround(Vector v, float rad, float cx, float cy) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectrotatearound-cuttheropedx-framework-core-vector-system-single-system-single-system-single}

```csharp
public static Vector VectRotateAround(Vector v, float rad, float cx, float cy)
```

Rotates `v` by `rad` radians around the point (`cx`, `cy`).

Parameters:

- `v`: The vector to rotate.
- `rad`: Rotation angle in radians.
- `cx`: Pivot point X coordinate.
- `cy`: Pivot point Y coordinate.

Returns: The rotated vector.

### VectRperp(Vector v) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectrperp-cuttheropedx-framework-core-vector}

```csharp
public static Vector VectRperp(Vector v)
```

Returns the right perpendicular of `v`: (y, -x).

Parameters:

- `v`: The input vector.

Returns: The right perpendicular vector.

### VectSub(Vector v1, Vector v2) {#m-cuttheropedx-framework-helpers-ctrmathhelper-vectsub-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
public static Vector VectSub(Vector v1, Vector v2)
```

Returns the component-wise difference `v1` − `v2`.

Parameters:

- `v1`: Minuend vector.
- `v2`: Subtrahend vector.

Returns: The difference of the two vectors.


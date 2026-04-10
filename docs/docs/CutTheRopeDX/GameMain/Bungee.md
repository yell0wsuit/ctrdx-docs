---
title: Class Bungee
description: Physics-backed rope used for bungee connections, rope cutting, and seasonal rope rendering.
---

# Class Bungee

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Bungee.cs`

Physics-backed rope used for bungee connections, rope cutting, and seasonal rope rendering.

## Declaration

```csharp
internal sealed class Bungee : ConstraintSystem
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [ConstraintSystem](../Framework/Physics/ConstraintSystem.md)
- [Bungee](Bungee.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### BUNGEE_RELAXION_TIMES {#f-cuttheropedx-gamemain-bungee-bungee-relaxion-times}

```csharp
public const int BUNGEE_RELAXION_TIMES
```

Number of constraint relaxation passes used by the bungee solver.

### BUNGEE_REST_LEN {#f-cuttheropedx-gamemain-bungee-bungee-rest-len}

```csharp
public static float BUNGEE_REST_LEN
```

Rest length used between adjacent bungee constraint points.

### bungeeAnchor {#f-cuttheropedx-gamemain-bungee-bungeeanchor}

```csharp
public ConstraintedPoint bungeeAnchor
```

Head anchor constraint point for the bungee.

### bungeeMode {#f-cuttheropedx-gamemain-bungee-bungeemode}

```csharp
public int bungeeMode
```

Current bungee behavior mode.

### ccolors {#f-cuttheropedx-gamemain-bungee-ccolors}

```csharp
private static readonly RGBAColor[] ccolors
```

Per-vertex color array for the outer glow triangle strip.

### ccolors2 {#f-cuttheropedx-gamemain-bungee-ccolors2}

```csharp
private static readonly RGBAColor[] ccolors2
```

Per-vertex color array for the inner rope triangle strip.

### chosenOne {#f-cuttheropedx-gamemain-bungee-chosenone}

```csharp
public bool chosenOne
```

Whether this bungee is marked as the selected or active special instance.

### christmasRandom {#f-cuttheropedx-gamemain-bungee-christmasrandom}

```csharp
private static readonly Random christmasRandom
```

Random number generator used for Christmas light frame selection.

### cut {#f-cuttheropedx-gamemain-bungee-cut}

```csharp
public int cut
```

Cut segment index, or `-1` when the bungee is uncut.

### cutTime {#f-cuttheropedx-gamemain-bungee-cuttime}

```csharp
public float cutTime
```

Remaining cut fade time in seconds.

### drawPts {#f-cuttheropedx-gamemain-bungee-drawpts}

```csharp
public float[] drawPts
```

Flat array of bezier curve points in the format [x0, y0, x1, y1, x2, y2, ...]. Used for rendering the rope and positioning Christmas lights.

### drawPtsCount {#f-cuttheropedx-gamemain-bungee-drawptscount}

```csharp
public int drawPtsCount
```

Number of valid coordinates in the [drawPts](#f-cuttheropedx-gamemain-bungee-drawpts) array.

### forceWhite {#f-cuttheropedx-gamemain-bungee-forcewhite}

```csharp
public bool forceWhite
```

Whether the bungee should render in white during a cut transition.

### hideTailParts {#f-cuttheropedx-gamemain-bungee-hidetailparts}

```csharp
public bool hideTailParts
```

Whether tail-side rope parts should be hidden after the bungee is cut.

### highlighted {#f-cuttheropedx-gamemain-bungee-highlighted}

```csharp
public bool highlighted
```

Whether the bungee should be rendered with highlight brightness.

### initialCandleAngle {#f-cuttheropedx-gamemain-bungee-initialcandleangle}

```csharp
public float initialCandleAngle
```

Initial candle angle used by candle-related bungee behavior.

### lightFrames {#f-cuttheropedx-gamemain-bungee-lightframes}

```csharp
private readonly int[] lightFrames
```

Per-light frame indices, stored on first draw and reused for consistency. The number of lights can go up to 200.

### lightRandomSeed {#f-cuttheropedx-gamemain-bungee-lightrandomseed}

```csharp
private int? lightRandomSeed
```

Seed captured on first Christmas light draw for reproducibility.

### lightsCount {#f-cuttheropedx-gamemain-bungee-lightscount}

```csharp
private int lightsCount
```

Number of lights determined on first draw (-1 = not yet determined).

### lineWidth {#f-cuttheropedx-gamemain-bungee-linewidth}

```csharp
public float lineWidth
```

Base rendered line width for the bungee.

### ownsAnchor {#f-cuttheropedx-gamemain-bungee-ownsanchor}

```csharp
private bool ownsAnchor
```

Whether this bungee owns and should dispose the anchor point.

### ownsTail {#f-cuttheropedx-gamemain-bungee-ownstail}

```csharp
private bool ownsTail
```

Whether this bungee owns and should dispose the tail point.

### relaxed {#f-cuttheropedx-gamemain-bungee-relaxed}

```csharp
public int relaxed
```

Current relaxation bucket derived from the bungee stretch distance.

### s_Color1 {#f-cuttheropedx-gamemain-bungee-s-color1}

```csharp
private static Color s_Color1
```

Default dark base color used when setting the renderer before drawing.

### s_bungeePointerCache {#f-cuttheropedx-gamemain-bungee-s-bungeepointercache}

```csharp
private static float[] s_bungeePointerCache
```

Cached float array for outer glow vertex positions.

### s_bungeePointerCache2 {#f-cuttheropedx-gamemain-bungee-s-bungeepointercache2}

```csharp
private static float[] s_bungeePointerCache2
```

Cached float array for inner rope vertex positions.

### s_bungeeVerticesCache {#f-cuttheropedx-gamemain-bungee-s-bungeeverticescache}

```csharp
private static VertexPositionColor[] s_bungeeVerticesCache
```

Cached vertex array for main rope rendering.

### s_lightCounter {#f-cuttheropedx-gamemain-bungee-s-lightcounter}

```csharp
private static int s_lightCounter
```

Running light index counter shared across head/tail draw calls.

### s_lightEndSkip {#f-cuttheropedx-gamemain-bungee-s-lightendskip}

```csharp
private static int s_lightEndSkip
```

Number of coordinate indices to skip at the end of the current segment.

### s_lightSavedEnd {#f-cuttheropedx-gamemain-bungee-s-lightsavedend}

```csharp
private static int s_lightSavedEnd
```

Saved end overflow used to continue light placement into the tail segment.

### s_lightStartCoord {#f-cuttheropedx-gamemain-bungee-s-lightstartcoord}

```csharp
private static int s_lightStartCoord
```

Starting coordinate index for Christmas light placement in the current segment.

### tail {#f-cuttheropedx-gamemain-bungee-tail}

```csharp
public ConstraintedPoint tail
```

Tail constraint point for the bungee.

## Methods

### BuildColoredVertices(float[] positions, RGBAColor[] colors, int vertexCount) {#m-cuttheropedx-gamemain-bungee-buildcoloredvertices-system-single-cuttheropedx-framework-rgbacolor-system-int32}

```csharp
private static VertexPositionColor[] BuildColoredVertices(float[] positions, RGBAColor[] colors, int vertexCount)
```

Builds an array of colored vertices from parallel position and color arrays.

Parameters:

- `positions`: Flat array of X/Y coordinate pairs.
- `colors`: Per-vertex colors.
- `vertexCount`: Number of vertices to build.

Returns: The populated vertex array.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-bungee-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-gamemain-bungee-draw}

```csharp
public override void Draw()
```

Draws the constraint system. Derived types should override this to render their geometry.

### DrawAntialiasedLineContinued(float x1, float y1, float x2, float y2, float size, RGBAColor color, ref float lx, ref float ly, ref float rx, ref float ry, bool highlighted) {#m-cuttheropedx-gamemain-bungee-drawantialiasedlinecontinued-system-single-system-single-system-single-system-single-system-single-cuttheropedx-framework-rgbacolor-system-single-system-single-system-single-system-single-system-boolean}

```csharp
private static void DrawAntialiasedLineContinued(float x1, float y1, float x2, float y2, float size, RGBAColor color, ref float lx, ref float ly, ref float rx, ref float ry, bool highlighted)
```

Draws a single antialiased line segment, continuing from the previous segment's edge vertices.

Parameters:

- `x1`: Start X coordinate.
- `y1`: Start Y coordinate.
- `x2`: End X coordinate.
- `y2`: End Y coordinate.
- `size`: Half-width of the line.
- `color`: Line color.
- `lx`: Left edge X from the previous segment; set to `-1` for the first segment.
- `ly`: Left edge Y from the previous segment.
- `rx`: Right edge X from the previous segment.
- `ry`: Right edge Y from the previous segment.
- `highlighted`: Whether to render with additive highlight blending.

### DrawBungee(Bungee b, Vector[] pts, int count, int points) {#m-cuttheropedx-gamemain-bungee-drawbungee-cuttheropedx-gamemain-bungee-cuttheropedx-framework-core-vector-system-int32-system-int32}

```csharp
private static void DrawBungee(Bungee b, Vector[] pts, int count, int points)
```

Draws an entire bungee rope by sampling a bezier curve through the given constraint points.

Parameters:

- `b`: The bungee instance being drawn.
- `pts`: Array of constraint point positions along the rope.
- `count`: Number of valid points in `pts`.
- `points`: Number of bezier sample points per segment.

### DrawChristmasLights(float alpha) {#m-cuttheropedx-gamemain-bungee-drawchristmaslights-system-single}

```csharp
private void DrawChristmasLights(float alpha)
```

Draws Christmas lights along the rope. Matches the original iOS implementation: lights are placed at every 6 bezier sample points (12 coord indices), skipping 4 points at the start and end of each segment. Uses static state ([s_lightStartCoord](#f-cuttheropedx-gamemain-bungee-s-lightstartcoord), [s_lightEndSkip](#f-cuttheropedx-gamemain-bungee-s-lightendskip), etc.) set by [Draw](#m-cuttheropedx-gamemain-bungee-draw) to coordinate light placement across head/tail segments when the rope is cut.

Parameters:

- `alpha`: Alpha multiplier applied to the light sprites.

### GetFloatCache(ref float[] cache, int length) {#m-cuttheropedx-gamemain-bungee-getfloatcache-system-single-system-int32}

```csharp
private static float[] GetFloatCache(ref float[] cache, int length)
```

Returns a cached float array, reallocating if the cache is too small.

Parameters:

- `cache`: Reference to the cached array.
- `length`: Minimum required capacity.

Returns: The cached or newly allocated array.

### GetLength() {#m-cuttheropedx-gamemain-bungee-getlength}

```csharp
public int GetLength()
```

Calculates the current polyline length across all bungee constraint points.

Returns: The approximate current bungee length in world units.

### GetVertexCache(ref VertexPositionColor[] cache, int vertexCount) {#m-cuttheropedx-gamemain-bungee-getvertexcache-microsoft-xna-framework-graphics-vertexpositioncolor-system-int32}

```csharp
private static VertexPositionColor[] GetVertexCache(ref VertexPositionColor[] cache, int vertexCount)
```

Returns a cached vertex array, reallocating if the cache is too small.

Parameters:

- `cache`: Reference to the cached array.
- `vertexCount`: Minimum required capacity.

Returns: The cached or newly allocated array.

### InitWithHeadAtXYTailAtTXTYandLength(ConstraintedPoint h, float hx, float hy, ConstraintedPoint t, float tx, float ty, float len) {#m-cuttheropedx-gamemain-bungee-initwithheadatxytailattxtyandlength-cuttheropedx-framework-physics-constraintedpoint-system-single-system-single-cuttheropedx-framework-physics-constraintedpoint-system-single-system-single-system-single}

```csharp
public Bungee InitWithHeadAtXYTailAtTXTYandLength(ConstraintedPoint h, float hx, float hy, ConstraintedPoint t, float tx, float ty, float len)
```

Initializes a bungee rope between head and tail constraint points.

Parameters:

- `h`: Optional existing head constraint point; a new anchor is created when this is `null`.
- `hx`: Initial head X position.
- `hy`: Initial head Y position.
- `t`: Optional existing tail constraint point; a new tail is created when this is `null`.
- `tx`: Initial tail X position.
- `ty`: Initial tail Y position.
- `len`: Initial rope length used to roll out intermediate rope segments.

Returns: The initialized bungee instance.

### MoveAnchor(Vector newPos) {#m-cuttheropedx-gamemain-bungee-moveanchor-cuttheropedx-framework-core-vector}

```csharp
public void MoveAnchor(Vector newPos)
```

Moves the anchor to a new position, shifting all rope parts by the same delta.

Parameters:

- `newPos`: New world-space position for the bungee anchor.

### RemovePart(int part) {#m-cuttheropedx-gamemain-bungee-removepart-system-int32}

```csharp
public void RemovePart(int part)
```

Removes or detaches a bungee segment and weakens the remaining free points.

Parameters:

- `part`: Index of the segment part to remove.

### Roll(float rollLen) {#m-cuttheropedx-gamemain-bungee-roll-system-single}

```csharp
public void Roll(float rollLen)
```

Rolls additional rope length into the bungee without applying a placement offset.

Parameters:

- `rollLen`: Amount of rope length to add.

### RollBack(float amount) {#m-cuttheropedx-gamemain-bungee-rollback-system-single}

```csharp
public float RollBack(float amount)
```

Removes rope length from the tail side of the bungee.

Parameters:

- `amount`: Amount of rope length to remove.

Returns: Remaining amount that could not be removed.

### RollplacingWithOffset(float rollLen, Vector off) {#m-cuttheropedx-gamemain-bungee-rollplacingwithoffset-system-single-cuttheropedx-framework-core-vector}

```csharp
public void RollplacingWithOffset(float rollLen, Vector off)
```

Rolls additional rope length into the bungee and places new segments using an offset.

Parameters:

- `rollLen`: Amount of rope length to add.
- `off`: Offset applied when placing new intermediate constraint points.

### SetCut(int part) {#m-cuttheropedx-gamemain-bungee-setcut-system-int32}

```csharp
public void SetCut(int part)
```

Marks the bungee as cut at a segment index and starts the cut fade.

Parameters:

- `part`: Index of the segment part where the bungee was cut.

### Strengthen() {#m-cuttheropedx-gamemain-bungee-strengthen}

```csharp
public void Strengthen()
```

Adds constraints that keep rope segments closer to the pinned anchor.

### Update(float delta) {#m-cuttheropedx-gamemain-bungee-update-system-single}

```csharp
public override void Update(float delta)
```

Updates all points, then performs the configured number of constraint relaxation passes.

Parameters:

- `delta`: Elapsed frame time in seconds.

### Update(float delta, float koeff) {#m-cuttheropedx-gamemain-bungee-update-system-single-system-single}

```csharp
public void Update(float delta, float koeff)
```

Updates bungee physics with a custom Verlet integration coefficient.

Parameters:

- `delta`: Elapsed time in seconds since the last update.
- `koeff`: Coefficient passed to constraint-point physics updates.

### WritePair(float[] buffer, ref int index, Vector v) {#m-cuttheropedx-gamemain-bungee-writepair-system-single-system-int32-cuttheropedx-framework-core-vector}

```csharp
private static void WritePair(float[] buffer, ref int index, Vector v)
```

Writes a vector's X and Y components into a float buffer at the current index.

Parameters:

- `buffer`: The target float array.
- `index`: Write position; advanced by 2 after the call.
- `v`: The vector to write.


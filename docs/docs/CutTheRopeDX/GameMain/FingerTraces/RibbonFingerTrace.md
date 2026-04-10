---
title: Class RibbonFingerTrace
description: Shared ribbon trace base for named traces that only vary by gradient, glow, and particle presets.
---

# Class RibbonFingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `RibbonFingerTrace.cs`

Shared ribbon trace base for named traces that only vary by gradient, glow, and particle presets.

## Declaration

```csharp
internal abstract class RibbonFingerTrace : ParticleFingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [ParticleFingerTrace](ParticleFingerTrace.md)
- [RibbonFingerTrace](RibbonFingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [AlphabetFingerTrace](AlphabetFingerTrace.md)
- [BackToSchoolFingerTrace](BackToSchoolFingerTrace.md)
- [ClassicFingerTrace](ClassicFingerTrace.md)
- [Easter2016FingerTrace](Easter2016FingerTrace.md)
- [EasterFingerTrace](EasterFingerTrace.md)
- [OmnomBirthdayFingerTrace](OmnomBirthdayFingerTrace.md)
- [RedFingerTrace](RedFingerTrace.md)
- [StarFingerTrace](StarFingerTrace.md)
- [WinterFingerTrace](WinterFingerTrace.md)

## Constructors

### RibbonFingerTrace(float segmentLife, float particleBurstDuration, float particleEmissionRate, float ribbonBaseWidth, float minimumRibbonHalfWidth, int? glowQuadIndex, float glowTranslateY, params FingerParticles[] particles) {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-ctor-system-single-system-single-system-single-system-single-system-single-system-nullable-system-int32-system-single-cuttheropedx-gamemain-fingertraces-fingerparticles}

```csharp
protected RibbonFingerTrace(float segmentLife, float particleBurstDuration, float particleEmissionRate, float ribbonBaseWidth, float minimumRibbonHalfWidth, int? glowQuadIndex, float glowTranslateY, params FingerParticles[] particles)
```

Shared ribbon trace base for named traces that only vary by gradient, glow, and particle presets.

Parameters:

- `segmentLife`: The lifetime in seconds assigned to each stored ribbon segment.
- `particleBurstDuration`: The duration in seconds that particle emission remains active after a segment is appended.
- `particleEmissionRate`: The particle emission rate used during the active burst window.
- `ribbonBaseWidth`: The base half-width contribution applied along the ribbon body.
- `minimumRibbonHalfWidth`: The minimum half-width preserved at the ribbon tip.
- `glowQuadIndex`: The optional glow quad index. Pass `null` to disable glow sprite generation.
- `glowTranslateY`: The local Y translation applied to the glow sprite pivot.
- `particles`: The particle emitters owned by the trace.

## Fields

### glowAlpha {#f-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-glowalpha}

```csharp
private float glowAlpha
```

Current glow alpha derived from segment count and smoothed direction magnitude.

### glowPosition {#f-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-glowposition}

```csharp
private Vector glowPosition
```

Current glow sprite position derived from the latest segment start point.

### glowQuadIndex {#f-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-glowquadindex}

```csharp
private readonly int? glowQuadIndex
```

Optional glow quad index used when appending the glow sprite to the snapshot.

### glowTranslateY {#f-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-glowtranslatey}

```csharp
private readonly float glowTranslateY
```

Local Y translation applied to the glow sprite pivot.

### minimumRibbonHalfWidth {#f-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-minimumribbonhalfwidth}

```csharp
private readonly float minimumRibbonHalfWidth
```

Minimum half-width preserved at the ribbon tip.

### ribbonBaseWidth {#f-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-ribbonbasewidth}

```csharp
private readonly float ribbonBaseWidth
```

Base half-width contribution applied along the ribbon body.

### ribbonVerticesCache {#f-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-ribbonverticescache}

```csharp
private VertexPositionColor[] ribbonVerticesCache
```

Reusable ribbon vertex cache used for triangle-strip drawing.

## Methods

### AppendSampledPoints(List&lt;Vector&gt; sampledPoints) {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-appendsampledpoints-system-collections-generic-list-cuttheropedx-framework-core-vector}

```csharp
protected override void AppendSampledPoints(List<Vector> sampledPoints)
```

Appends the trace-specific sampled path into `sampledPoints`.

Parameters:

- `sampledPoints`: The destination list that receives the sampled path points.

### AppendSprites(List&lt;FingerTraceSpritePose&gt; sprites) {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-appendsprites-system-collections-generic-list-cuttheropedx-framework-visual-fingertracespritepose}

```csharp
protected override void AppendSprites(List<FingerTraceSpritePose> sprites)
```

Allows subclasses to append non-particle sprites to the current snapshot.

Parameters:

- `sprites`: The destination list that receives additional sprite poses.

### Draw() {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-draw}

```csharp
public override void Draw()
```

Draws the current sprite snapshot using the requested per-sprite blend modes.

### DrawRibbon() {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-drawribbon}

```csharp
private void DrawRibbon()
```

Draws the sampled ribbon as a colored triangle strip.

### EnsureRibbonCache(int vertexCount) {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-ensureribboncache-system-int32}

```csharp
private void EnsureRibbonCache(int vertexCount)
```

Ensures the reusable ribbon vertex cache can hold the requested number of vertices.

Parameters:

- `vertexCount`: The required vertex capacity.

### GetControlPoints() {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-getcontrolpoints}

```csharp
private List<Vector> GetControlPoints()
```

Collects the bezier control points implied by the current live trace segments.

Returns: The control-point list used for ribbon sampling.

### GetPointDirection(List&lt;Vector&gt; sampledPoints, int index) {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-getpointdirection-system-collections-generic-list-cuttheropedx-framework-core-vector-system-int32}

```csharp
private static Vector GetPointDirection(List<Vector> sampledPoints, int index)
```

Returns the local tangent direction for one sampled ribbon point.

Parameters:

- `sampledPoints`: The sampled ribbon points.
- `index`: The point index to evaluate.

Returns: The tangent direction at `index`.

### GetRibbonColor(float t) {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-getribboncolor-system-single}

```csharp
protected abstract RGBAColor GetRibbonColor(float t)
```

Gets the ribbon color for the normalized position `t` along the strip.

Parameters:

- `t`: The normalized ribbon position in the range `[0, 1]`.

Returns: The ribbon color at `t`.

### OnHeadStateUpdated(Vector averageDirection) {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-onheadstateupdated-cuttheropedx-framework-core-vector}

```csharp
protected override void OnHeadStateUpdated(Vector averageDirection)
```

Allows subclasses to react after the averaged head direction has been updated.

Parameters:

- `averageDirection`: The averaged direction vector derived from recent segment history.

### OnReset() {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-onreset}

```csharp
protected override void OnReset()
```

Allows subclasses to clear additional transient state when the trace resets.

### OnSegmentAdded(Vector start, Vector end, Vector delta) {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-onsegmentadded-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
protected override void OnSegmentAdded(Vector start, Vector end, Vector delta)
```

Allows subclasses to react immediately after a new segment has been stored.

Parameters:

- `start`: The segment start position.
- `end`: The segment end position.
- `delta`: The segment direction vector from `start` to `end`.

### TryBuildRibbonGeometry(out List&lt;Vector&gt; sampledPoints) {#m-cuttheropedx-gamemain-fingertraces-ribbonfingertrace-trybuildribbongeometry-system-collections-generic-list-cuttheropedx-framework-core-vector}

```csharp
private bool TryBuildRibbonGeometry(out List<Vector> sampledPoints)
```

Builds the sampled ribbon center line from the stored live segments.

Parameters:

- `sampledPoints`: Receives the sampled ribbon center-line points.

Returns: `true` when enough points exist to draw the ribbon; otherwise, `false`.


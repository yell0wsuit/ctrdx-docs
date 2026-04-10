---
title: Class LightningFingerTrace
description: CTR2-style lightning finger trace that renders randomized head / body quads plus trailing sparks.
---

# Class LightningFingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `LightningFingerTrace.cs`

CTR2-style lightning finger trace that renders randomized head / body quads plus trailing sparks.

## Declaration

```csharp
internal sealed class LightningFingerTrace : FingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [LightningFingerTrace](LightningFingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### LightningFingerTrace() {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-ctor}

```csharp
public LightningFingerTrace()
```

Initializes a lightning trace with the RNG path.

## Fields

### BodyQuadCount {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-bodyquadcount}

```csharp
private const int BodyQuadCount
```

The number of body atlas quads available.

### BodyQuadStart {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-bodyquadstart}

```csharp
private const int BodyQuadStart
```

The first atlas quad used for body segments.

### GlowQuadIndex {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-glowquadindex}

```csharp
private const int GlowQuadIndex
```

The atlas quad used for the glow sprite.

### GlowTranslateY {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-glowtranslatey}

```csharp
private const float GlowTranslateY
```

The Y translation applied to the glow sprite pivot.

### HeadQuadCount {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-headquadcount}

```csharp
private const int HeadQuadCount
```

The number of head atlas quads available.

### HeadQuadStart {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-headquadstart}

```csharp
private const int HeadQuadStart
```

The first atlas quad used for the lightning head.

### MaxSegmentLife {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-maxsegmentlife}

```csharp
private const float MaxSegmentLife
```

The maximum lifetime applied to a lightning segment.

### MinSegmentLife {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-minsegmentlife}

```csharp
private const float MinSegmentLife
```

The minimum lifetime applied to a lightning segment.

### ParticleBurstDuration {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-particleburstduration}

```csharp
private const float ParticleBurstDuration
```

The duration of the spark burst after each appended segment.

### ParticleEmissionRate {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-particleemissionrate}

```csharp
private const float ParticleEmissionRate
```

The spark emission rate used while the burst timer is active.

### QuadOffsetAmount {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-quadoffsetamount}

```csharp
private const float QuadOffsetAmount
```

The lateral offset used to jag the body quads.

### QuadSpacing {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-quadspacing}

```csharp
private const float QuadSpacing
```

The nominal height used to scale lightning quads.

### QuadStretch {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-quadstretch}

```csharp
private const float QuadStretch
```

The stretch factor applied to lightning quads.

### SegmentLifeBase {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-segmentlifebase}

```csharp
private const float SegmentLifeBase
```

The base lifetime added before clamping.

### SegmentLifeMultiplier {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-segmentlifemultiplier}

```csharp
private const float SegmentLifeMultiplier
```

The length-to-lifetime scale factor.

### VariantRefreshSeconds {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-variantrefreshseconds}

```csharp
private const float VariantRefreshSeconds
```

The time between randomized head/body variant refreshes.

### averageRotation {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-averagerotation}

```csharp
private float averageRotation
```

The smoothed head rotation in degrees.

### bodyVariants {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-bodyvariants}

```csharp
private readonly int[] bodyVariants
```

The randomized body variant sequence.

### currentHeadVariant {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-currentheadvariant}

```csharp
private int currentHeadVariant
```

The currently selected head quad index.

### directionHistory {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-directionhistory}

```csharp
private readonly List<Vector> directionHistory
```

Recent segment directions used to smooth the head rotation.

### glowImage {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-glowimage}

```csharp
private Image glowImage
```

The glow sprite drawn at the lightning head.

### headScale {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-headscale}

```csharp
private float headScale
```

The current head glow scale.

### indicesCache {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-indicescache}

```csharp
private short[] indicesCache
```

The reusable index cache for batched lightning quads.

### particleTimer {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-particletimer}

```csharp
private float particleTimer
```

The remaining time in the active spark burst.

### particles {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-particles}

```csharp
private readonly FingerParticles particles
```

The lightning spark emitter.

### variantTimer {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-varianttimer}

```csharp
private float variantTimer
```

The remaining time before the quad variants are randomized again.

### verticesCache {#f-cuttheropedx-gamemain-fingertraces-lightningfingertrace-verticescache}

```csharp
private VertexPositionColorTexture[] verticesCache
```

The reusable textured vertex cache for batched lightning quads.

## Properties

### HasLiveParticles {#p-cuttheropedx-gamemain-fingertraces-lightningfingertrace-hasliveparticles}

```csharp
protected bool HasLiveParticles { get; }
```

Gets a value indicating whether the subclass still has live particle output after segments fade.

## Methods

### AddSegment(float startX, float startY, float endX, float endY) {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-addsegment-system-single-system-single-system-single-system-single}

```csharp
public override void AddSegment(float startX, float startY, float endX, float endY)
```

Adds a new trace segment with the default CTR2 lifetime used by the base class.

Parameters:

- `startX`: Segment start X.
- `startY`: Segment start Y.
- `endX`: Segment end X.
- `endY`: Segment end Y.

### AppendSampledPoints(List&lt;Vector&gt; sampledPoints) {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-appendsampledpoints-system-collections-generic-list-cuttheropedx-framework-core-vector}

```csharp
private void AppendSampledPoints(List<Vector> sampledPoints)
```

Appends representative sampled points for the current lightning path.

Parameters:

- `sampledPoints`: The destination sampled-point list.

### BuildLightningQuads() {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-buildlightningquads}

```csharp
private List<LightningFingerTrace.LightningQuad> BuildLightningQuads()
```

Builds the current lightning head/body quad layout from the live segments.

Returns: The list of quads to draw for the current frame.

### BuildSnapshot(List&lt;Vector&gt; sampledPoints, List&lt;FingerTraceSpritePose&gt; sprites) {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-buildsnapshot-system-collections-generic-list-cuttheropedx-framework-core-vector-system-collections-generic-list-cuttheropedx-framework-visual-fingertracespritepose}

```csharp
protected override void BuildSnapshot(List<Vector> sampledPoints, List<FingerTraceSpritePose> sprites)
```

Rebuilds the sampled path and sprite snapshot for the current trace state.

Parameters:

- `sampledPoints`: Receives sampled path points.
- `sprites`: Receives sprite poses to draw for the current frame.

### Draw() {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-draw}

```csharp
public override void Draw()
```

Draws the current sprite snapshot using the requested per-sprite blend modes.

### DrawLightningBody() {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-drawlightningbody}

```csharp
private void DrawLightningBody()
```

Draws the current lightning head and body quads as a single indexed batch.

### EnsureBuffers(int quadCount) {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-ensurebuffers-system-int32}

```csharp
private void EnsureBuffers(int quadCount)
```

Ensures the reusable vertex and index buffers can hold the requested number of quads.

Parameters:

- `quadCount`: The required quad capacity.

### EnsureGlowImage() {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-ensureglowimage}

```csharp
private void EnsureGlowImage()
```

Creates the glow sprite on first use.

### FillBodyVariants() {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-fillbodyvariants}

```csharp
private void FillBodyVariants()
```

Refreshes the randomized body variant sequence.

### GetAverageDirection() {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-getaveragedirection}

```csharp
private Vector GetAverageDirection()
```

Returns the averaged head direction derived from recent segment deltas.

Returns: The averaged direction vector.

### NextDifferentVariant(int start, int count, int previous) {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-nextdifferentvariant-system-int32-system-int32-system-int32}

```csharp
private static int NextDifferentVariant(int start, int count, int previous)
```

Chooses a quad index from the given range that differs from the previous value when possible.

Parameters:

- `start`: The first quad index in the range.
- `count`: The number of indices in the range.
- `previous`: The previously selected quad index.

Returns: A quad index within the requested range.

### NextInt(int upperExclusive) {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-nextint-system-int32}

```csharp
private static int NextInt(int upperExclusive)
```

Returns a random integer in the range `[0, upperExclusive)`.

Parameters:

- `upperExclusive`: The exclusive upper bound.

Returns: A random integer less than `upperExclusive`.

### ResetCore() {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-resetcore}

```csharp
protected override void ResetCore()
```

Resets subclass-specific state when the trace is cleared or restarted.

### ResetVariants() {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-resetvariants}

```csharp
private void ResetVariants()
```

Resets the current head and body variant selection.

### UpdateCore(float delta) {#m-cuttheropedx-gamemain-fingertraces-lightningfingertrace-updatecore-system-single}

```csharp
protected override void UpdateCore(float delta)
```

Updates subclass-specific state after the base segment lifetimes have been advanced.

Parameters:

- `delta`: Elapsed time in seconds.


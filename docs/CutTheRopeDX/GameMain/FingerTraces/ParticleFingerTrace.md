---
title: Class ParticleFingerTrace
description: Shared trace base for traces that only differ by particle configuration and sampled path logic.
---

# Class ParticleFingerTrace

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `ParticleFingerTrace.cs`

Shared trace base for traces that only differ by particle configuration and sampled path logic.

## Declaration

```csharp
internal abstract class ParticleFingerTrace : FingerTrace
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerTrace](../../Framework/Visual/FingerTrace.md)
- [ParticleFingerTrace](ParticleFingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [BubbleFingerTrace](BubbleFingerTrace.md)
- [RibbonFingerTrace](RibbonFingerTrace.md)

## Remarks

Initializes a shared particle-trace base with the supplied segment, burst, and emitter settings.

## Constructors

### ParticleFingerTrace(float segmentLife, float particleBurstDuration, float particleEmissionRate, int maximumDirectionHistory, params FingerParticles[] particles) {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-ctor-system-single-system-single-system-single-system-int32-cuttheropedx-gamemain-fingertraces-fingerparticles}

```csharp
protected ParticleFingerTrace(float segmentLife, float particleBurstDuration, float particleEmissionRate, int maximumDirectionHistory, params FingerParticles[] particles)
```

Shared trace base for traces that only differ by particle configuration and sampled path logic.

Parameters:

- `segmentLife`: The lifetime in seconds assigned to each appended segment.
- `particleBurstDuration`: The duration in seconds that emission remains enabled after a segment is appended.
- `particleEmissionRate`: The particle emission rate used while the burst timer is active.
- `maximumDirectionHistory`: The maximum number of recent segment directions retained for head-state smoothing.
- `particles`: The emitters owned by this trace.

## Fields

### directionHistory {#f-cuttheropedx-gamemain-fingertraces-particlefingertrace-directionhistory}

```csharp
private readonly List<Vector> directionHistory
```

Recent segment directions retained for smoothed head-state calculations.

### maximumDirectionHistory {#f-cuttheropedx-gamemain-fingertraces-particlefingertrace-maximumdirectionhistory}

```csharp
private readonly int maximumDirectionHistory
```

Maximum number of recent segment directions retained for smoothing.

### particleBurstDuration {#f-cuttheropedx-gamemain-fingertraces-particlefingertrace-particleburstduration}

```csharp
private readonly float particleBurstDuration
```

Duration in seconds that particle emission remains active after a segment is appended.

### particleEmissionRate {#f-cuttheropedx-gamemain-fingertraces-particlefingertrace-particleemissionrate}

```csharp
private readonly float particleEmissionRate
```

Emission rate used while the active particle burst window is running.

### particleTimer {#f-cuttheropedx-gamemain-fingertraces-particlefingertrace-particletimer}

```csharp
private float particleTimer
```

Remaining time in seconds before particle emission is disabled again.

### particles {#f-cuttheropedx-gamemain-fingertraces-particlefingertrace-particles}

```csharp
private readonly FingerParticles[] particles
```

Particle emitters owned by this trace.

### segmentLife {#f-cuttheropedx-gamemain-fingertraces-particlefingertrace-segmentlife}

```csharp
private readonly float segmentLife
```

Lifetime in seconds assigned to each appended segment.

## Properties

### AverageRotation {#p-cuttheropedx-gamemain-fingertraces-particlefingertrace-averagerotation}

```csharp
protected float AverageRotation { get; private set; }
```

Gets the smoothed emitter or head rotation in degrees derived from recent segment directions.

### HasLiveParticles {#p-cuttheropedx-gamemain-fingertraces-particlefingertrace-hasliveparticles}

```csharp
protected bool HasLiveParticles { get; }
```

Gets a value indicating whether the subclass still has live particle output after segments fade.

## Methods

### AddSegment(float startX, float startY, float endX, float endY) {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-addsegment-system-single-system-single-system-single-system-single}

```csharp
public override void AddSegment(float startX, float startY, float endX, float endY)
```

Adds a new trace segment with the default CTR2 lifetime used by the base class.

Parameters:

- `startX`: Segment start X.
- `startY`: Segment start Y.
- `endX`: Segment end X.
- `endY`: Segment end Y.

### AppendParticleSprites(List&lt;FingerTraceSpritePose&gt; sprites) {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-appendparticlesprites-system-collections-generic-list-cuttheropedx-framework-visual-fingertracespritepose}

```csharp
protected void AppendParticleSprites(List<FingerTraceSpritePose> sprites)
```

Appends sprites from all owned particle emitters into `sprites`.

Parameters:

- `sprites`: The destination list that receives particle sprite poses.

### AppendSampledPoints(List&lt;Vector&gt; sampledPoints) {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-appendsampledpoints-system-collections-generic-list-cuttheropedx-framework-core-vector}

```csharp
protected abstract void AppendSampledPoints(List<Vector> sampledPoints)
```

Appends the trace-specific sampled path into `sampledPoints`.

Parameters:

- `sampledPoints`: The destination list that receives the sampled path points.

### AppendSegmentEndpoints(List&lt;Vector&gt; sampledPoints) {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-appendsegmentendpoints-system-collections-generic-list-cuttheropedx-framework-core-vector}

```csharp
protected void AppendSegmentEndpoints(List<Vector> sampledPoints)
```

Appends the raw segment endpoints as a polyline into `sampledPoints`.

Parameters:

- `sampledPoints`: The destination list that receives the live segment endpoints.

### AppendSprites(List&lt;FingerTraceSpritePose&gt; sprites) {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-appendsprites-system-collections-generic-list-cuttheropedx-framework-visual-fingertracespritepose}

```csharp
protected virtual void AppendSprites(List<FingerTraceSpritePose> sprites)
```

Allows subclasses to append non-particle sprites to the current snapshot.

Parameters:

- `sprites`: The destination list that receives additional sprite poses.

### BuildSnapshot(List&lt;Vector&gt; sampledPoints, List&lt;FingerTraceSpritePose&gt; sprites) {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-buildsnapshot-system-collections-generic-list-cuttheropedx-framework-core-vector-system-collections-generic-list-cuttheropedx-framework-visual-fingertracespritepose}

```csharp
protected override void BuildSnapshot(List<Vector> sampledPoints, List<FingerTraceSpritePose> sprites)
```

Rebuilds the sampled path and sprite snapshot for the current trace state.

Parameters:

- `sampledPoints`: Receives sampled path points.
- `sprites`: Receives sprite poses to draw for the current frame.

### GetAverageDirection() {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-getaveragedirection}

```csharp
private Vector GetAverageDirection()
```

Returns the averaged direction vector derived from the retained segment history.

Returns: The averaged direction vector, or the zero vector when no history is available.

### OnHeadStateUpdated(Vector averageDirection) {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-onheadstateupdated-cuttheropedx-framework-core-vector}

```csharp
protected virtual void OnHeadStateUpdated(Vector averageDirection)
```

Allows subclasses to react after the averaged head direction has been updated.

Parameters:

- `averageDirection`: The averaged direction vector derived from recent segment history.

### OnReset() {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-onreset}

```csharp
protected virtual void OnReset()
```

Allows subclasses to clear additional transient state when the trace resets.

### OnSegmentAdded(Vector start, Vector end, Vector delta) {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-onsegmentadded-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
protected virtual void OnSegmentAdded(Vector start, Vector end, Vector delta)
```

Allows subclasses to react immediately after a new segment has been stored.

Parameters:

- `start`: The segment start position.
- `end`: The segment end position.
- `delta`: The segment direction vector from `start` to `end`.

### RefreshHeadState() {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-refreshheadstate}

```csharp
private void RefreshHeadState()
```

Refreshes the smoothed head-state values derived from the recent direction history.

### ResetCore() {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-resetcore}

```csharp
protected override void ResetCore()
```

Resets subclass-specific state when the trace is cleared or restarted.

### UpdateCore(float delta) {#m-cuttheropedx-gamemain-fingertraces-particlefingertrace-updatecore-system-single}

```csharp
protected override void UpdateCore(float delta)
```

Updates subclass-specific state after the base segment lifetimes have been advanced.

Parameters:

- `delta`: Elapsed time in seconds.


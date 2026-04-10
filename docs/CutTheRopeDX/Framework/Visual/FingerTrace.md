---
title: Class FingerTrace
description: Base class for CTR2-style finger traces that manage timed segments and optional particle output.
---

# Class FingerTrace

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `FingerTrace.cs`

Base class for CTR2-style finger traces that manage timed segments and optional particle output.

## Declaration

```csharp
internal abstract class FingerTrace : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [FingerTrace](FingerTrace.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [LightningFingerTrace](../../GameMain/FingerTraces/LightningFingerTrace.md)
- [ParticleFingerTrace](../../GameMain/FingerTraces/ParticleFingerTrace.md)

## Fields

### hasLastPoint {#f-cuttheropedx-framework-visual-fingertrace-haslastpoint}

```csharp
private bool hasLastPoint
```

Whether [lastPoint](#f-cuttheropedx-framework-visual-fingertrace-lastpoint) contains a valid previous touch position.

### imageCache {#f-cuttheropedx-framework-visual-fingertrace-imagecache}

```csharp
private readonly Dictionary<string, Image> imageCache
```

Cached trace sprite images keyed by texture resource name.

### isActive {#f-cuttheropedx-framework-visual-fingertrace-isactive}

```csharp
private bool isActive
```

Whether the trace is currently accepting appended points.

### lastPoint {#f-cuttheropedx-framework-visual-fingertrace-lastpoint}

```csharp
private Vector lastPoint
```

Last touch position used to create the next segment.

### segments {#f-cuttheropedx-framework-visual-fingertrace-segments}

```csharp
private readonly List<TraceSegment> segments
```

Live trace segments currently fading out.

### snapshot {#f-cuttheropedx-framework-visual-fingertrace-snapshot}

```csharp
private FingerTraceSnapshot snapshot
```

Most recent immutable snapshot of sampled trace points and sprites.

## Properties

### HasLiveParticles {#p-cuttheropedx-framework-visual-fingertrace-hasliveparticles}

```csharp
protected bool HasLiveParticles { get; }
```

Gets a value indicating whether the subclass still has live particle output after segments fade.

### IsAlive {#p-cuttheropedx-framework-visual-fingertrace-isalive}

```csharp
public bool IsAlive { get; }
```

Gets a value indicating whether the trace still has visible geometry or live particles.

### MaxSize {#p-cuttheropedx-framework-visual-fingertrace-maxsize}

```csharp
protected float MaxSize { get; private set; }
```

Gets the subclass-configurable maximum size hint for the trace.

### Segments {#p-cuttheropedx-framework-visual-fingertrace-segments}

```csharp
protected IReadOnlyList<TraceSegment> Segments { get; }
```

Gets the live trace segments in their current age-sorted order.

## Methods

### AddSegment(float startX, float startY, float endX, float endY) {#m-cuttheropedx-framework-visual-fingertrace-addsegment-system-single-system-single-system-single-system-single}

```csharp
public virtual void AddSegment(float startX, float startY, float endX, float endY)
```

Adds a new trace segment with the default CTR2 lifetime used by the base class.

Parameters:

- `startX`: Segment start X.
- `startY`: Segment start Y.
- `endX`: Segment end X.
- `endY`: Segment end Y.

### Append(Vector position) {#m-cuttheropedx-framework-visual-fingertrace-append-cuttheropedx-framework-core-vector}

```csharp
public void Append(Vector position)
```

Appends a new touch `position` to the trace, generating a segment from the last point.

Parameters:

- `position`: The next touch position in world space.

### Begin(Vector position) {#m-cuttheropedx-framework-visual-fingertrace-begin-cuttheropedx-framework-core-vector}

```csharp
public void Begin(Vector position)
```

Starts a new trace at the specified world `position`, clearing any previous segments.

Parameters:

- `position`: The initial touch position in world space.

### BuildSnapshot(List&lt;Vector&gt; sampledPoints, List&lt;FingerTraceSpritePose&gt; sprites) {#m-cuttheropedx-framework-visual-fingertrace-buildsnapshot-system-collections-generic-list-cuttheropedx-framework-core-vector-system-collections-generic-list-cuttheropedx-framework-visual-fingertracespritepose}

```csharp
protected abstract void BuildSnapshot(List<Vector> sampledPoints, List<FingerTraceSpritePose> sprites)
```

Rebuilds the sampled path and sprite snapshot for the current trace state.

Parameters:

- `sampledPoints`: Receives sampled path points.
- `sprites`: Receives sprite poses to draw for the current frame.

### ClearSegments() {#m-cuttheropedx-framework-visual-fingertrace-clearsegments}

```csharp
public void ClearSegments()
```

Removes all currently stored segments and rebuilds the exposed snapshot.

### Draw() {#m-cuttheropedx-framework-visual-fingertrace-draw}

```csharp
public virtual void Draw()
```

Draws the current sprite snapshot using the requested per-sprite blend modes.

### DrawSpritePose(FingerTraceSpritePose sprite) {#m-cuttheropedx-framework-visual-fingertrace-drawspritepose-cuttheropedx-framework-visual-fingertracespritepose}

```csharp
protected void DrawSpritePose(FingerTraceSpritePose sprite)
```

Draws a single cached `sprite` pose using the standard image-based trace path.

Parameters:

- `sprite`: The sprite pose to draw.

### End() {#m-cuttheropedx-framework-visual-fingertrace-end}

```csharp
public void End()
```

Marks the trace as finished so only the remaining timed segments continue to fade out.

### GetImage(string resourceName) {#m-cuttheropedx-framework-visual-fingertrace-getimage-system-string}

```csharp
protected Image GetImage(string resourceName)
```

Gets or creates the cached image used to draw sprites from the specified resource.

Parameters:

- `resourceName`: Texture resource name.

Returns: The cached or newly created image for `resourceName`.

### GetSnapshot() {#m-cuttheropedx-framework-visual-fingertrace-getsnapshot}

```csharp
public FingerTraceSnapshot GetSnapshot()
```

Returns the most recently built immutable snapshot for testing or preview use.

Returns: The latest immutable trace snapshot.

### RefreshSnapshot() {#m-cuttheropedx-framework-visual-fingertrace-refreshsnapshot}

```csharp
private void RefreshSnapshot()
```

Rebuilds the immutable trace snapshot from the current live trace state.

### Reset() {#m-cuttheropedx-framework-visual-fingertrace-reset}

```csharp
public void Reset()
```

Clears the trace state, all live segments, and any subclass-specific transient state.

### ResetCore() {#m-cuttheropedx-framework-visual-fingertrace-resetcore}

```csharp
protected virtual void ResetCore()
```

Resets subclass-specific state when the trace is cleared or restarted.

### SetMaxSize(float size) {#m-cuttheropedx-framework-visual-fingertrace-setmaxsize-system-single}

```csharp
public void SetMaxSize(float size)
```

Sets the maximum `size` hint used by subclasses that scale their trace visuals.

Parameters:

- `size`: Maximum trace size in world units.

### StoreSegment(Vector start, Vector end, float life) {#m-cuttheropedx-framework-visual-fingertrace-storesegment-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-single}

```csharp
protected void StoreSegment(Vector start, Vector end, float life)
```

Stores a segment with an explicit lifetime chosen by the subclass.

Parameters:

- `start`: Segment start point.
- `end`: Segment end point.
- `life`: Remaining life in seconds.

### Update(float delta) {#m-cuttheropedx-framework-visual-fingertrace-update-system-single}

```csharp
public void Update(float delta)
```

Advances segment lifetimes and subclass-specific state by one frame.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateCore(float delta) {#m-cuttheropedx-framework-visual-fingertrace-updatecore-system-single}

```csharp
protected virtual void UpdateCore(float delta)
```

Updates subclass-specific state after the base segment lifetimes have been advanced.

Parameters:

- `delta`: Elapsed time in seconds.


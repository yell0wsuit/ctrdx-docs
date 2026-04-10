---
title: Class MechanicalHandSegment
description: Single articulated segment of a mechanical hand. Owns segment visuals, optional rotate button, and rotation timeline behavior.
---

# Class MechanicalHandSegment

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MechanicalHandSegment.cs`

Single articulated segment of a mechanical hand. Owns segment visuals, optional rotate button, and rotation timeline behavior.

## Declaration

```csharp
internal sealed class MechanicalHandSegment : BaseElement, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [MechanicalHandSegment](MechanicalHandSegment.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Fields

### ROTATE_ONCE_AGAIN_TIME {#f-cuttheropedx-gamemain-mechanicalhandsegment-rotate-once-again-time}

```csharp
private const float ROTATE_ONCE_AGAIN_TIME
```

Seconds after a rotation starts when one queued extra rotation may be accepted.

### _base {#f-cuttheropedx-gamemain-mechanicalhandsegment-base}

```csharp
private Image _base
```

Base joint visual for the first segment.

### armImage {#f-cuttheropedx-gamemain-mechanicalhandsegment-armimage}

```csharp
private TiledImage armImage
```

Tiled arm visual stretched to the segment length.

### button {#f-cuttheropedx-gamemain-mechanicalhandsegment-button}

```csharp
public MechanicalHandButton button
```

Rotate button attached to this segment, if the segment is rotatable.

### buttonNone {#f-cuttheropedx-gamemain-mechanicalhandsegment-buttonnone}

```csharp
private Image buttonNone
```

Non-rotatable joint button visual.

### canRotateOnceAgain {#f-cuttheropedx-gamemain-mechanicalhandsegment-canrotateonceagain}

```csharp
private bool canRotateOnceAgain
```

Whether one additional rotation can be queued during the current rotation.

### drawBase {#f-cuttheropedx-gamemain-mechanicalhandsegment-drawbase}

```csharp
public bool drawBase
```

Whether this segment should draw the base joint visual.

### endPosition {#f-cuttheropedx-gamemain-mechanicalhandsegment-endposition}

```csharp
public Vector endPosition
```

Local end position of this segment relative to its origin.

### endsWithHand {#f-cuttheropedx-gamemain-mechanicalhandsegment-endswithhand}

```csharp
public bool endsWithHand
```

Whether this segment currently owns the claw child at its end.

### length {#f-cuttheropedx-gamemain-mechanicalhandsegment-length}

```csharp
private float length
```

Segment length in world units.

### prevRotation {#f-cuttheropedx-gamemain-mechanicalhandsegment-prevrotation}

```csharp
private float prevRotation
```

Rotation from the previous update.

### rotatable {#f-cuttheropedx-gamemain-mechanicalhandsegment-rotatable}

```csharp
private bool rotatable
```

Whether this segment exposes a rotate button.

### rotateOnceAgain {#f-cuttheropedx-gamemain-mechanicalhandsegment-rotateonceagain}

```csharp
private bool rotateOnceAgain
```

Whether another 90-degree rotation should start after the current one finishes.

### rotationTime {#f-cuttheropedx-gamemain-mechanicalhandsegment-rotationtime}

```csharp
private float rotationTime
```

Elapsed time since the current rotation animation started.

### targetRotation {#f-cuttheropedx-gamemain-mechanicalhandsegment-targetrotation}

```csharp
public float targetRotation
```

Target rotation in degrees for the current rotation animation.

### theHand {#f-cuttheropedx-gamemain-mechanicalhandsegment-thehand}

```csharp
public MechanicalHand theHand
```

Mechanical hand that owns this segment.

## Methods

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-mechanicalhandsegment-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-gamemain-mechanicalhandsegment-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### InitWithPositionLengthAngleRotatable(Vector pos, float segmentLength, float angleDegrees, bool isRotatable) {#m-cuttheropedx-gamemain-mechanicalhandsegment-initwithpositionlengthanglerotatable-cuttheropedx-framework-core-vector-system-single-system-single-system-boolean}

```csharp
public MechanicalHandSegment InitWithPositionLengthAngleRotatable(Vector pos, float segmentLength, float angleDegrees, bool isRotatable)
```

Initializes a segment with placement, geometry, and rotation capability.

Parameters:

- `pos`: Local segment origin.
- `segmentLength`: Segment length in world units.
- `angleDegrees`: Initial segment angle in degrees.
- `isRotatable`: Whether the segment exposes a rotate button.

Returns: The initialized segment instance.

### Rotate() {#m-cuttheropedx-gamemain-mechanicalhandsegment-rotate}

```csharp
public void Rotate()
```

Starts a 90-degree rotation animation when the segment can rotate. Queues one extra rotation if tapped again during cooldown.

### RotationDelta() {#m-cuttheropedx-gamemain-mechanicalhandsegment-rotationdelta}

```csharp
public float RotationDelta()
```

Gets the per-frame rotation delta used to rotate attached candy visuals.

Returns: Rotation delta in degrees.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-mechanicalhandsegment-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-mechanicalhandsegment-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.

### Update(float delta) {#m-cuttheropedx-gamemain-mechanicalhandsegment-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


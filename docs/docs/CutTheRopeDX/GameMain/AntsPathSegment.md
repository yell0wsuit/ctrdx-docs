---
title: Class AntsPathSegment
description: One straight-line segment of an ant path, including the interaction state used when the ant conveyor carries the candy.
---

# Class AntsPathSegment

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `AntsPathSegment.cs`

One straight-line segment of an ant path, including the interaction state used when the ant conveyor carries the candy.

## Declaration

```csharp
internal sealed class AntsPathSegment : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [AntsPathSegment](AntsPathSegment.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### AntsPathSegment(Vector start, Vector end, float speedMagnitude, float deviceScale) {#m-cuttheropedx-gamemain-antspathsegment-ctor-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-single-system-single}

```csharp
public AntsPathSegment(Vector start, Vector end, float speedMagnitude, float deviceScale)
```

Creates a segment from `start` to `end` with the given speed magnitude and device scale.

Parameters:

- `start`: World-space start point of the segment.
- `end`: World-space end point of the segment.
- `speedMagnitude`: Speed magnitude in world units per second.
- `deviceScale`: Device pixel-density multiplier.

## Fields

### angleDeg {#f-cuttheropedx-gamemain-antspathsegment-angledeg}

```csharp
public float angleDeg
```

Angle of the segment direction in degrees [0, 360), used to orient ant sprites.

### canInteract {#f-cuttheropedx-gamemain-antspathsegment-caninteract}

```csharp
public bool canInteract
```

When `false` the segment will not attempt to attach to the candy.

### container {#f-cuttheropedx-gamemain-antspathsegment-container}

```csharp
public AntsPath container
```

The [AntsPath](AntsPath.md) that owns this segment.

### endPoint {#f-cuttheropedx-gamemain-antspathsegment-endpoint}

```csharp
public Vector endPoint
```

World-space end point of this segment.

### interacting {#f-cuttheropedx-gamemain-antspathsegment-interacting}

```csharp
public bool interacting
```

`true` while the candy is attached and being carried by this segment.

### interactionPoint {#f-cuttheropedx-gamemain-antspathsegment-interactionpoint}

```csharp
public Vector interactionPoint
```

Current world-space position of the carrier marker, advanced each frame at [speed](#f-cuttheropedx-gamemain-antspathsegment-speed). The candy follows this position via [ComputeCarrierFollowPosition](AntConveyorLogic.md#m-cuttheropedx-gamemain-antconveyorlogic-computecarrierfollowposition-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-single-system-single).

### interactionTime {#f-cuttheropedx-gamemain-antspathsegment-interactiontime}

```csharp
public float interactionTime
```

Elapsed seconds since the last [StartInteractionWithConstraitedPoint](#m-cuttheropedx-gamemain-antspathsegment-startinteractionwithconstraitedpoint-cuttheropedx-framework-physics-constraintedpoint) call.

### internalHalfHeight {#f-cuttheropedx-gamemain-antspathsegment-internalhalfheight}

```csharp
private float internalHalfHeight
```

Half-height of the segment's interaction rectangle, perpendicular to the path direction.

### nextSegment {#f-cuttheropedx-gamemain-antspathsegment-nextsegment}

```csharp
public AntsPathSegment nextSegment
```

Next segment in the path, or the first segment when the path is looped.

### prevSegment {#f-cuttheropedx-gamemain-antspathsegment-prevsegment}

```csharp
public AntsPathSegment prevSegment
```

Previous segment in the path, or the last segment when the path is looped.

### speed {#f-cuttheropedx-gamemain-antspathsegment-speed}

```csharp
public Vector speed
```

Velocity vector (direction × speed magnitude) in world units per second.

### startPoint {#f-cuttheropedx-gamemain-antspathsegment-startpoint}

```csharp
public Vector startPoint
```

World-space start point of this segment.

### targetPoint {#f-cuttheropedx-gamemain-antspathsegment-targetpoint}

```csharp
public ConstraintedPoint targetPoint
```

The physics point (candy) currently attached to this segment, or `null`.

## Properties

### Length {#p-cuttheropedx-gamemain-antspathsegment-length}

```csharp
public float Length { get; private set; }
```

World-space length of this segment in units.

## Methods

### ContainsPoint(Vector point) {#m-cuttheropedx-gamemain-antspathsegment-containspoint-cuttheropedx-framework-core-vector}

```csharp
public bool ContainsPoint(Vector point)
```

Returns `true` if `point` lies inside the segment's internal interaction rectangle (equivalent to [ContainsPoint](#m-cuttheropedx-gamemain-antspathsegment-containspoint-cuttheropedx-framework-core-vector-system-boolean) with `external = false`).

Parameters:

- `point`: The world-space point to test.

Returns: `true` if `point` is inside the internal rectangle; otherwise `false`.

### ContainsPoint(Vector point, bool external) {#m-cuttheropedx-gamemain-antspathsegment-containspoint-cuttheropedx-framework-core-vector-system-boolean}

```csharp
public bool ContainsPoint(Vector point, bool external)
```

Returns `true` if `point` lies inside the segment's bounding rectangle.

Parameters:

- `point`: The world-space point to test.
- `external`: When `false`, tests the internal rectangle: longitudinal bounds [0, Length], perpendicular half-height = [GetSegmentHalfHeight](AntConveyorLogic.md#m-cuttheropedx-gamemain-antconveyorlogic-getsegmenthalfheight-system-single). Matches the iOS internal bounding box used for candy attach and detach checks. When `true`, tests the external rectangle: longitudinal bounds [−halfHeight, Length + halfHeight] (extends past each endpoint by halfHeight), same perpendicular half-height. Matches the iOS `externalBB` game object used for the wait-before-attach check.

Returns: `true` if `point` is inside the bounding rectangle; otherwise `false`.

### GetPointOnSegmentFromPointtoPointnearestToPoint(Vector a, Vector b, Vector p) {#m-cuttheropedx-gamemain-antspathsegment-getpointonsegmentfrompointtopointnearesttopoint-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
public static Vector GetPointOnSegmentFromPointtoPointnearestToPoint(Vector a, Vector b, Vector p)
```

Returns the closest point on segment AB to point P, clamped to the segment endpoints.

Parameters:

- `a`: Segment start point.
- `b`: Segment end point.
- `p`: The point to project onto the segment.

Returns: The closest point on segment AB to `p`.

### SetupWithStartPointEndPointSpeed(Vector start, Vector end, float speedMagnitude, float deviceScale) {#m-cuttheropedx-gamemain-antspathsegment-setupwithstartpointendpointspeed-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-single-system-single}

```csharp
public void SetupWithStartPointEndPointSpeed(Vector start, Vector end, float speedMagnitude, float deviceScale)
```

(Re)initialises all derived fields from the given endpoints, speed magnitude and device scale. Called by the constructor and by the path builder.

Parameters:

- `start`: World-space start point of the segment.
- `end`: World-space end point of the segment.
- `speedMagnitude`: Speed magnitude in world units per second.
- `deviceScale`: Device pixel-density multiplier.

### StartInteractionWithConstraitedPoint(ConstraintedPoint point) {#m-cuttheropedx-gamemain-antspathsegment-startinteractionwithconstraitedpoint-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public void StartInteractionWithConstraitedPoint(ConstraintedPoint point)
```

Attaches `point` to this segment. Places the carrier marker at the nearest on-segment position to the point and begins the carry update.

Parameters:

- `point`: The physics point (candy) to attach, or `null`.

### StopInteractionWithCandySlow(bool slow) {#m-cuttheropedx-gamemain-antspathsegment-stopinteractionwithcandyslow-system-boolean}

```csharp
public void StopInteractionWithCandySlow(bool slow)
```

Detaches the carried point. When `slow` is `true`, applies a braking horizontal impulse to the candy (velocity.X × −0.7 over 0.01 s), matching iOS deceleration.

Parameters:

- `slow`: When `true`, applies a braking impulse to the candy.

### Update(float delta) {#m-cuttheropedx-gamemain-antspathsegment-update-system-single}

```csharp
public void Update(float delta)
```

Advances the carrier marker along the segment by `delta` seconds. No-op when not interacting.

Parameters:

- `delta`: Elapsed seconds since the last frame.


---
title: Class AntsPath
description: "Manages one complete ant path: its segments, the ant instances walking along it, and the per-frame update of ant positions, scales, colours and segment interaction state. Ported from decompiled iOS code."
---

# Class AntsPath

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `AntsPath.cs`

Manages one complete ant path: its segments, the ant instances walking along it, and the per-frame update of ant positions, scales, colours and segment interaction state. Ported from decompiled iOS code.

## Declaration

```csharp
internal sealed class AntsPath : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [AntsPath](AntsPath.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### AntsPath(Vector position, string pathString, float speed, float offsetX, float offsetY, float scale) {#m-cuttheropedx-gamemain-antspath-ctor-cuttheropedx-framework-core-vector-system-string-system-single-system-single-system-single-system-single}

```csharp
public AntsPath(Vector position, string pathString, float speed, float offsetX, float offsetY, float scale)
```

Creates a path at `position` from a comma-separated coordinate string.

Parameters:

- `position`: World-space origin of the path object.
- `pathString`: Comma-separated flat list of X,Y offsets defining the polyline vertices relative to `position`. Consecutive pairs form the endpoints of each segment.
- `speed`: Ant march speed in world units per second (pre-scaled by the level scale).
- `offsetX`: Horizontal world-space map/camera offset applied to all vertices.
- `offsetY`: Vertical world-space map/camera offset applied to all vertices.
- `scale`: Level scale factor; combined with the device multiplier for all size constants.

## Fields

### antsInternal {#f-cuttheropedx-gamemain-antspath-antsinternal}

```csharp
private readonly List<Ant> antsInternal
```

Backing list for [Ants](#p-cuttheropedx-gamemain-antspath-ants).

### endHole {#f-cuttheropedx-gamemain-antspath-endhole}

```csharp
private Image endHole
```

Hole sprite drawn at the path end (open paths only).

### numberOfAnts {#f-cuttheropedx-gamemain-antspath-numberofants}

```csharp
private int numberOfAnts
```

Number of ants initially spawned on the path.

### path {#f-cuttheropedx-gamemain-antspath-path}

```csharp
private readonly List<float> path
```

Flat list of X,Y vertex offsets parsed from the level data string.

### segmentsInternal {#f-cuttheropedx-gamemain-antspath-segmentsinternal}

```csharp
private readonly List<AntsPathSegment> segmentsInternal
```

Backing list for [Segments](#p-cuttheropedx-gamemain-antspath-segments).

### speed {#f-cuttheropedx-gamemain-antspath-speed}

```csharp
private readonly float speed
```

Ant march speed in world units per second.

### startHole {#f-cuttheropedx-gamemain-antspath-starthole}

```csharp
private Image startHole
```

Hole sprite drawn at the path start (open paths only).

### startPos {#f-cuttheropedx-gamemain-antspath-startpos}

```csharp
private readonly Vector startPos
```

World-space origin of the path object.

## Properties

### Ants {#p-cuttheropedx-gamemain-antspath-ants}

```csharp
public IReadOnlyList<Ant> Ants { get; }
```

All ant instances currently alive on this path.

### InteractionTime {#p-cuttheropedx-gamemain-antspath-interactiontime}

```csharp
public float InteractionTime { get; private set; }
```

Accumulated seconds for which at least one segment has been carrying the candy. Resets to zero when no segment is interacting.

### Looped {#p-cuttheropedx-gamemain-antspath-looped}

```csharp
public bool Looped { get; private set; }
```

`true` when the path's first and last endpoints coincide (within 0.01 units).

### PathLength {#p-cuttheropedx-gamemain-antspath-pathlength}

```csharp
public float PathLength { get; private set; }
```

Total world-space length of the path in units (sum of all segment lengths).

### Scale {#p-cuttheropedx-gamemain-antspath-scale}

```csharp
public float Scale { get; }
```

The raw level-data scale factor passed to the constructor.

### Segments {#p-cuttheropedx-gamemain-antspath-segments}

```csharp
public IReadOnlyList<AntsPathSegment> Segments { get; }
```

Ordered list of segments that make up this path.

### StartAntOffset {#p-cuttheropedx-gamemain-antspath-startantoffset}

```csharp
public float StartAntOffset { get; private set; }
```

Path offset at which the first ant spawns. Zero for looped paths; half the start-hole sprite width for open paths (so ants emerge from the hole edge).

## Methods

### AngleDegForOffset(float offset) {#m-cuttheropedx-gamemain-antspath-angledegforoffset-system-single}

```csharp
public float AngleDegForOffset(float offset)
```

Returns the visual heading in degrees [0, 360) at `offset` units along the path. Blends smoothly between adjacent segment angles within [GetEdgeFadeDistance](AntConveyorLogic.md#m-cuttheropedx-gamemain-antconveyorlogic-getedgefadedistance-system-single) of each junction, matching the iOS angle-lerp behaviour.

Parameters:

- `offset`: Distance in world units from the path start.

Returns: The blended heading in degrees [0, 360).

### ColorForOffset(float offset) {#m-cuttheropedx-gamemain-antspath-colorforoffset-system-single}

```csharp
public RGBAColor ColorForOffset(float offset)
```

Returns the per-ant colour (RGBA) at `offset` units along the path. Fully opaque in the middle of open paths and on looped paths; fades to transparent near the endpoints to match the iOS edge-fade effect.

Parameters:

- `offset`: Distance in world units from the path start.

Returns: The RGBA colour with fade applied.

### CreateAntForOffset(float offset) {#m-cuttheropedx-gamemain-antspath-createantforoffset-system-single}

```csharp
private Ant CreateAntForOffset(float offset)
```

Creates a new ant at the given path offset, randomising its start frame and base scale.

Parameters:

- `offset`: Path offset in world units where the ant spawns.

Returns: A newly created [Ant](Ant.md) instance.

### CreateSegmentsAndAntsOffsetXOffsetYscale(float ox, float oy, float scale) {#m-cuttheropedx-gamemain-antspath-createsegmentsandantsoffsetxoffsetyscale-system-single-system-single-system-single}

```csharp
public void CreateSegmentsAndAntsOffsetXOffsetYscale(float ox, float oy, float scale)
```

Rebuilds all segments and ant instances from the stored path data. Called by the constructor; can be called again to reinitialise after parameter changes.

Parameters:

- `ox`: Horizontal world-space map/camera offset.
- `oy`: Vertical world-space map/camera offset.
- `scale`: Level scale factor.

### Draw() {#m-cuttheropedx-gamemain-antspath-draw}

```csharp
public void Draw()
```

Draws the path holes (if open) and all visible ant sprites.

### GetDeviceScaledFactor(float pathScale) {#m-cuttheropedx-gamemain-antspath-getdevicescaledfactor-system-single}

```csharp
private static float GetDeviceScaledFactor(float pathScale)
```

Returns the effective scale factor for conveyor geometry (level scale; device multiplier is 1 on PC).

Parameters:

- `pathScale`: The raw level scale factor.

Returns: The device-scaled factor.

### LerpAngleDeg(float from, float to, float t) {#m-cuttheropedx-gamemain-antspath-lerpangledeg-system-single-system-single-system-single}

```csharp
private static float LerpAngleDeg(float from, float to, float t)
```

Linearly interpolates between two angles in degrees, taking the shortest arc across the 360° wrap.

Parameters:

- `from`: Start angle in degrees.
- `to`: End angle in degrees.
- `t`: Interpolation factor in [0, 1].

Returns: The interpolated angle in degrees.

### PositionForOffset(float offset) {#m-cuttheropedx-gamemain-antspath-positionforoffset-system-single}

```csharp
public Vector PositionForOffset(float offset)
```

Returns the world-space position corresponding to `offset` units along the path. Extrapolates linearly beyond either endpoint.

Parameters:

- `offset`: Distance in world units from the path start.

Returns: The interpolated world-space position.

### ScaleForOffset(float offset) {#m-cuttheropedx-gamemain-antspath-scaleforoffset-system-single}

```csharp
public float ScaleForOffset(float offset)
```

Returns the per-ant scale factor at `offset` units along the path. Always 1 on looped paths; fades linearly from 0.2 to 1.0 within [GetEdgeFadeDistance](AntConveyorLogic.md#m-cuttheropedx-gamemain-antconveyorlogic-getedgefadedistance-system-single) of each endpoint on open paths.

Parameters:

- `offset`: Distance in world units from the path start.

Returns: Scale factor in the range [0.2, 1.0].

### SegmentDirection(AntsPathSegment segment) {#m-cuttheropedx-gamemain-antspath-segmentdirection-cuttheropedx-gamemain-antspathsegment}

```csharp
private static Vector SegmentDirection(AntsPathSegment segment)
```

Returns the unit direction vector of `segment`, or zero for zero-length segments.

Parameters:

- `segment`: The segment to compute the direction for.

Returns: A unit direction vector, or zero for degenerate segments.

### SegmentForOffset(float offset) {#m-cuttheropedx-gamemain-antspath-segmentforoffset-system-single}

```csharp
private AntsPathSegment SegmentForOffset(float offset)
```

Returns the segment containing `offset`, or `null` if the offset is past the end.

Parameters:

- `offset`: Distance in world units from the path start.

Returns: The segment at `offset`, or `null` if past the end.

### Update(float delta) {#m-cuttheropedx-gamemain-antspath-update-system-single}

```csharp
public void Update(float delta)
```

Advances ant offsets, updates animation and rendering state, spawns new ants at the tail end of open paths, and steps all segment interaction states.

Parameters:

- `delta`: Elapsed seconds since the last frame.


---
title: Class AntConveyorLogic
description: Pure-math helpers for the ant-conveyor system, ported from decompiled iOS code. All geometry constants scale linearly with the device pixel-density multiplier returned by `deviceScale`.
---

# Class AntConveyorLogic

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `AntConveyorLogic.cs`

Pure-math helpers for the ant-conveyor system, ported from decompiled iOS code. All geometry constants scale linearly with the device pixel-density multiplier returned by `deviceScale`.

## Declaration

```csharp
public static class AntConveyorLogic
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [AntConveyorLogic](AntConveyorLogic.md)

## Fields

### CarrierSnapTimeThreshold {#f-cuttheropedx-gamemain-antconveyorlogic-carriersnaptimethreshold}

```csharp
public const float CarrierSnapTimeThreshold
```

Seconds of interaction time after which the candy snaps hard to the carrier position instead of lerping toward it.

## Methods

### ComputeCarrierFollowPosition(Vector candyPosition, Vector interactionPosition, float interactionTime, float snapDistance) {#m-cuttheropedx-gamemain-antconveyorlogic-computecarrierfollowposition-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-single-system-single}

```csharp
public static Vector ComputeCarrierFollowPosition(Vector candyPosition, Vector interactionPosition, float interactionTime, float snapDistance)
```

Computes the next candy position while it is being carried by the ant conveyor. Snaps the candy directly to `interactionPosition` once it is within `snapDistance` or after [CarrierSnapTimeThreshold](#f-cuttheropedx-gamemain-antconveyorlogic-carriersnaptimethreshold) seconds; otherwise moves it 30% of the remaining distance each frame (decompiled iOS behaviour).

Parameters:

- `candyPosition`: Current candy world position.
- `interactionPosition`: Current carrier-marker world position.
- `interactionTime`: Elapsed seconds since the candy attached to this segment.
- `snapDistance`: Distance below which the candy snaps instantly (see [GetCarrierSnapDistance](#m-cuttheropedx-gamemain-antconveyorlogic-getcarriersnapdistance-system-single)).

Returns: Updated candy world position for this frame.

### ComputePathPoint(Vector startPos, Vector relativePoint, float offsetX, float offsetY, float scale) {#m-cuttheropedx-gamemain-antconveyorlogic-computepathpoint-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-single-system-single-system-single}

```csharp
public static Vector ComputePathPoint(Vector startPos, Vector relativePoint, float offsetX, float offsetY, float scale)
```

Converts a path vertex from level-local space into world space.

Parameters:

- `startPos`: World-space origin of the ant-path object.
- `relativePoint`: Vertex coordinates relative to `startPos`, in level units.
- `offsetX`: Horizontal world-space offset (map origin + camera).
- `offsetY`: Vertical world-space offset (map origin + camera).
- `scale`: Level scale factor applied to the path coordinates.

Returns: The vertex position in world space.

### GetCarrierSnapDistance(float deviceScale) {#m-cuttheropedx-gamemain-antconveyorlogic-getcarriersnapdistance-system-single}

```csharp
public static float GetCarrierSnapDistance(float deviceScale)
```

Distance within which the candy snaps directly to the carrier position without lerping. iOS constant: 2 × deviceScale.

Parameters:

- `deviceScale`: Device pixel-density multiplier (see `deviceScale`).

Returns: The snap distance in world units.

### GetCarrierTouchHalfSize(float deviceScale) {#m-cuttheropedx-gamemain-antconveyorlogic-getcarriertouchhalfsize-system-single}

```csharp
public static float GetCarrierTouchHalfSize(float deviceScale)
```

Half-size of the square touch zone the player can tap to manually detach the candy from the conveyor. iOS constant: 30 × deviceScale.

Parameters:

- `deviceScale`: Device pixel-density multiplier (see `deviceScale`).

Returns: The touch zone half-size in world units.

### GetEdgeFadeDistance(float deviceScale) {#m-cuttheropedx-gamemain-antconveyorlogic-getedgefadedistance-system-single}

```csharp
public static float GetEdgeFadeDistance(float deviceScale)
```

Distance from each path endpoint within which ant sprites fade in or out. iOS constant: 15 × deviceScale.

Parameters:

- `deviceScale`: Device pixel-density multiplier (see `deviceScale`).

Returns: The fade distance in world units.

### GetSegmentHalfHeight(float deviceScale) {#m-cuttheropedx-gamemain-antconveyorlogic-getsegmenthalfheight-system-single}

```csharp
public static float GetSegmentHalfHeight(float deviceScale)
```

Half-height of the segment interaction rectangle, measured perpendicular to the path direction. iOS constant: 13.5 × deviceScale.

Parameters:

- `deviceScale`: Device pixel-density multiplier (see `deviceScale`).

Returns: The half-height in world units.

### GetSpawnGap(float deviceScale) {#m-cuttheropedx-gamemain-antconveyorlogic-getspawngap-system-single}

```csharp
public static float GetSpawnGap(float deviceScale)
```

Spacing between spawned ants along the path. iOS constant: 35 × deviceScale.

Parameters:

- `deviceScale`: Device pixel-density multiplier (see `deviceScale`).

Returns: The gap distance in world units.

### IsPointInCarrierTouchZone(Vector touchWorld, Vector candyPoint, float halfSize) {#m-cuttheropedx-gamemain-antconveyorlogic-ispointincarriertouchzone-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-single}

```csharp
public static bool IsPointInCarrierTouchZone(Vector touchWorld, Vector candyPoint, float halfSize)
```

Returns `true` if `touchWorld` falls within the square touch zone centred on the candy, used to let the player manually detach the candy from the conveyor.

Parameters:

- `touchWorld`: Touch position in world space.
- `candyPoint`: Candy centre in world space.
- `halfSize`: Half the side length of the touch zone (see [GetCarrierTouchHalfSize](#m-cuttheropedx-gamemain-antconveyorlogic-getcarriertouchhalfsize-system-single)).

Returns: `true` if the touch is inside the square zone; otherwise `false`.


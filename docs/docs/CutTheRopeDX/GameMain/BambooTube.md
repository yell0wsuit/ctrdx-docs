---
title: Class BambooTube
description: Rotatable bamboo tube teleporter. The candy enters one hole and exits the other. The tube can be rotated by dragging its ring zone or tapped in the centre to spin CCW.
---

# Class BambooTube

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `BambooTube.cs`

Rotatable bamboo tube teleporter. The candy enters one hole and exits the other. The tube can be rotated by dragging its ring zone or tapped in the centre to spin CCW.

## Declaration

```csharp
internal sealed class BambooTube : CTRGameObject
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [GameObject](../Framework/Helpers/GameObject.md)
- [CTRGameObject](CTRGameObject.md)
- [BambooTube](BambooTube.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### BambooBackQuad {#f-cuttheropedx-gamemain-bambootube-bamboobackquad}

```csharp
private const int BambooBackQuad
```

Texture quad index for the back shell sprite.

### BambooBaseBbSize {#f-cuttheropedx-gamemain-bambootube-bamboobasebbsize}

```csharp
private const float BambooBaseBbSize
```

Bounding-box half-size in unscaled points.

### BambooCaptureRadius {#f-cuttheropedx-gamemain-bambootube-bamboocaptureradius}

```csharp
private const float BambooCaptureRadius
```

Capture radius in unscaled points. Scaled by [interactionScale](#f-cuttheropedx-gamemain-bambootube-interactionscale) at runtime.

### BambooCoreQuad {#f-cuttheropedx-gamemain-bambootube-bamboocorequad}

```csharp
private const int BambooCoreQuad
```

Texture quad index for the core (centre) sprite.

### BambooFrontQuad {#f-cuttheropedx-gamemain-bambootube-bamboofrontquad}

```csharp
private const int BambooFrontQuad
```

Texture quad index for the front shell sprite.

### BambooRotationSnapThreshold {#f-cuttheropedx-gamemain-bambootube-bamboorotationsnapthreshold}

```csharp
private const float BambooRotationSnapThreshold
```

Snap threshold: rotation within this many degrees of the target snaps immediately.

### BambooThrowSpeed {#f-cuttheropedx-gamemain-bambootube-bamboothrowspeed}

```csharp
private const float BambooThrowSpeed
```

Launch speed in points per physics step (Verlet impulse magnitude).

### bambooBackSprite {#f-cuttheropedx-gamemain-bambootube-bamboobacksprite}

```csharp
private Image bambooBackSprite
```

Back shell child sprite.

### bambooFrontSprite {#f-cuttheropedx-gamemain-bambootube-bamboofrontsprite}

```csharp
private Image bambooFrontSprite
```

Front shell child sprite.

### bambooHole1 {#f-cuttheropedx-gamemain-bambootube-bamboohole1}

```csharp
private Vector bambooHole1
```

World-space position of hole 1 (recomputed on rotation).

### bambooHole2 {#f-cuttheropedx-gamemain-bambootube-bamboohole2}

```csharp
private Vector bambooHole2
```

World-space position of hole 2 (recomputed on rotation).

### bambooHoleOut {#f-cuttheropedx-gamemain-bambootube-bambooholeout}

```csharp
private Vector bambooHoleOut
```

World-space position of the exit hole after a successful [TryCatchCandy](#m-cuttheropedx-gamemain-bambootube-trycatchcandy-cuttheropedx-framework-physics-constraintedpoint).

### bambooLastTouch {#f-cuttheropedx-gamemain-bambootube-bamboolasttouch}

```csharp
private Vector bambooLastTouch
```

Last recorded touch position during a drag gesture.

### bambooStartRotation {#f-cuttheropedx-gamemain-bambootube-bamboostartrotation}

```csharp
private float bambooStartRotation
```

Rotation at the start of the current drag gesture, in degrees.

### bambooTargetRotation {#f-cuttheropedx-gamemain-bambootube-bambootargetrotation}

```csharp
private float bambooTargetRotation
```

Target rotation the snap animation is converging toward, in degrees.

### bambooVisualRotation {#f-cuttheropedx-gamemain-bambootube-bamboovisualrotation}

```csharp
private float bambooVisualRotation
```

Current visual rotation of the tube, in degrees.

### interactionScale {#f-cuttheropedx-gamemain-bambootube-interactionscale}

```csharp
private float interactionScale
```

Scale factor applied to bounding box and capture radius.

### isRotatingBamboo {#f-cuttheropedx-gamemain-bambootube-isrotatingbamboo}

```csharp
private bool isRotatingBamboo
```

`true` while the tube is animating toward [bambooTargetRotation](#f-cuttheropedx-gamemain-bambootube-bambootargetrotation).

## Properties

### BambooTouchIndex {#p-cuttheropedx-gamemain-bambootube-bambootouchindex}

```csharp
public int BambooTouchIndex { get; private set; }
```

The touch index that currently owns this tube's drag interaction, or -1 if idle.

### HoleOut {#p-cuttheropedx-gamemain-bambootube-holeout}

```csharp
public Vector HoleOut { get; }
```

World-space position of the exit hole, valid after a successful [TryCatchCandy](#m-cuttheropedx-gamemain-bambootube-trycatchcandy-cuttheropedx-framework-physics-constraintedpoint).

## Methods

### AngleTo180(float angle) {#m-cuttheropedx-gamemain-bambootube-angleto180-system-single}

```csharp
private static float AngleTo180(float angle)
```

Normalises `angle` into (-180, 180].

Parameters:

- `angle`: Angle in degrees to normalise.

Returns: The normalised angle in the range (-180, 180].

### GetRotateAngleForStartEndCenter(Vector start, Vector end, Vector center) {#m-cuttheropedx-gamemain-bambootube-getrotateangleforstartendcenter-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
private static float GetRotateAngleForStartEndCenter(Vector start, Vector end, Vector center)
```

Returns the signed angle (degrees) needed to rotate from `start` to `end` about `center`.

Parameters:

- `start`: Starting touch position.
- `end`: Ending touch position.
- `center`: Centre of rotation.

Returns: Signed rotation angle in degrees.

### HandleBambooCancel() {#m-cuttheropedx-gamemain-bambootube-handlebamboocancel}

```csharp
public void HandleBambooCancel()
```

Snaps the tube to the nearest 90° boundary when a drag is cancelled or lifted. Initiates the animated rotation and clears the touch owner.

### HandleBambooRotate(Vector touchPoint) {#m-cuttheropedx-gamemain-bambootube-handlebamboorotate-cuttheropedx-framework-core-vector}

```csharp
public void HandleBambooRotate(Vector touchPoint)
```

Updates the tube rotation in response to a touch-move event. Advances `bambooStartRotation` by 90° steps so the snap on release always targets the nearest 90° boundary from the gesture origin.

Parameters:

- `touchPoint`: Current world-space touch position.

### HandleBambooTouchWithIndex(Vector touchPoint, int touchIndex) {#m-cuttheropedx-gamemain-bambootube-handlebambootouchwithindex-cuttheropedx-framework-core-vector-system-int32}

```csharp
public bool HandleBambooTouchWithIndex(Vector touchPoint, int touchIndex)
```

Handles a touch-down on the tube. Tapping the inner zone (r < bb.w/3) triggers a CCW snap. Touching the ring zone (bb.w/3 < r < bb.w/1.5) begins a free rotation drag.

Parameters:

- `touchPoint`: World-space touch position.
- `touchIndex`: Platform touch index identifying this finger.

Returns: `true` if the caller should track subsequent move/end events for this touch index.

### InitWithPositionAngle(Vector position, float angle, float scale = 1) {#m-cuttheropedx-gamemain-bambootube-initwithpositionangle-cuttheropedx-framework-core-vector-system-single-system-single}

```csharp
public BambooTube InitWithPositionAngle(Vector position, float angle, float scale = 1)
```

Initialises the tube at `position` with an initial `angle` (degrees) and an optional `scale` factor that drives the bounding-box size and capture radius.

Parameters:

- `position`: World-space centre position of the tube.
- `angle`: Initial rotation in degrees.
- `scale`: Interaction scale factor that drives bounding-box size and capture radius.

Returns: This instance, for fluent initialisation.

### IsCandyMovingInside(ConstraintedPoint candyPoint, Vector holePosition) {#m-cuttheropedx-gamemain-bambootube-iscandymovinginside-cuttheropedx-framework-physics-constraintedpoint-cuttheropedx-framework-core-vector}

```csharp
private bool IsCandyMovingInside(ConstraintedPoint candyPoint, Vector holePosition)
```

Returns `true` when `candyPoint` is moving toward `holePosition` (i.e. into the tube rather than away from it). Uses `posDelta` as a fallback when `prevPos` is not yet initialised.

Parameters:

- `candyPoint`: The candy physics point to test.
- `holePosition`: World-space position of the hole being tested.

Returns: `true` if the candy is moving toward the hole; otherwise `false`.

### RotateBambooCounterClockwise() {#m-cuttheropedx-gamemain-bambootube-rotatebamboocounterclockwise}

```csharp
private void RotateBambooCounterClockwise()
```

Begins an animated 90° CCW snap if no snap is already running.

### SetupBambooShellSprites() {#m-cuttheropedx-gamemain-bambootube-setupbambooshellsprites}

```csharp
private void SetupBambooShellSprites()
```

Creates and attaches the back-shell and front-shell child sprites. Both use centre anchoring (anchor 9) so they stay aligned with the tube centre.

### ThrowCandy(ConstraintedPoint candyPoint) {#m-cuttheropedx-gamemain-bambootube-throwcandy-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public void ThrowCandy(ConstraintedPoint candyPoint)
```

Teleports `candyPoint` to the exit hole and applies a Verlet impulse so the physics integrator launches it outward at [BambooThrowSpeed](#f-cuttheropedx-gamemain-bambootube-bamboothrowspeed).

Parameters:

- `candyPoint`: The candy physics point to teleport, or `null`.

### ThrowParticlesOut(AnimationsPool pool) {#m-cuttheropedx-gamemain-bambootube-throwparticlesout-cuttheropedx-framework-visual-animationspool}

```csharp
public void ThrowParticlesOut(AnimationsPool pool)
```

Spawns a [LeafParticles](LeafParticles.md) burst at the exit hole.

Parameters:

- `pool`: The animations pool that will own the spawned particle system.

### TryCatchCandy(ConstraintedPoint candyPoint) {#m-cuttheropedx-gamemain-bambootube-trycatchcandy-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public bool TryCatchCandy(ConstraintedPoint candyPoint)
```

Tests whether `candyPoint` has entered either hole. If so, records the exit hole in [HoleOut](#p-cuttheropedx-gamemain-bambootube-holeout) and returns `true`.

Parameters:

- `candyPoint`: The candy physics point to test, or `null`.

Returns: `true` if the candy entered a hole; otherwise `false`.

### Update(float delta) {#m-cuttheropedx-gamemain-bambootube-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateBambooRotation() {#m-cuttheropedx-gamemain-bambootube-updatebamboorotation}

```csharp
private void UpdateBambooRotation()
```

Recomputes the world positions of both holes from the current visual rotation, then propagates the rotation to the shell sprites and the rotated bounding box. The core quad (quad 0, on the parent object itself) is intentionally left unrotated.


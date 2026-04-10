---
title: Class Rocket
description: Represents a rocket game object that can be rotated by touch input, fly along a path, and produce spark and cloud particle effects from its exhaust.
---

# Class Rocket

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Rocket.cs`

Represents a rocket game object that can be rotated by touch input, fly along a path, and produce spark and cloud particle effects from its exhaust.

## Declaration

```csharp
internal sealed class Rocket : CTRGameObject, ITimelineDelegate
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
- [Rocket](Rocket.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Fields

### RocketBodyQuad {#f-cuttheropedx-gamemain-rocket-rocketbodyquad}

```csharp
private const int RocketBodyQuad
```

The quad index for the rocket body sprite.

### STATE_ROCKET_DIST {#f-cuttheropedx-gamemain-rocket-state-rocket-dist}

```csharp
public const int STATE_ROCKET_DIST
```

The rocket is in the distance/approach phase.

### STATE_ROCKET_EXAUST {#f-cuttheropedx-gamemain-rocket-state-rocket-exaust}

```csharp
public const int STATE_ROCKET_EXAUST
```

The rocket has exhausted its fuel and is winding down.

### STATE_ROCKET_FLY {#f-cuttheropedx-gamemain-rocket-state-rocket-fly}

```csharp
public const int STATE_ROCKET_FLY
```

The rocket is actively flying.

### STATE_ROCKET_IDLE {#f-cuttheropedx-gamemain-rocket-state-rocket-idle}

```csharp
public const int STATE_ROCKET_IDLE
```

The rocket is idle and not in use.

### additionalAngle {#f-cuttheropedx-gamemain-rocket-additionalangle}

```csharp
public float additionalAngle
```

An additional angle offset applied on top of the base rotation.

### angle {#f-cuttheropedx-gamemain-rocket-angle}

```csharp
public float angle
```

The rocket's current facing angle in radians.

### anglePercent {#f-cuttheropedx-gamemain-rocket-anglepercent}

```csharp
public float anglePercent
```

The percentage of the rotation angle used for interpolation.

### cloudParticles {#f-cuttheropedx-gamemain-rocket-cloudparticles}

```csharp
public RocketClouds cloudParticles
```

Particle system for the rocket's cloud exhaust trail.

### container {#f-cuttheropedx-gamemain-rocket-container}

```csharp
public BaseElement container
```

Container element that holds the spark animation and matches the rocket's transform.

### delegateRocketDelegate {#f-cuttheropedx-gamemain-rocket-delegaterocketdelegate}

```csharp
public IRocketDelegate delegateRocketDelegate
```

Delegate that receives rocket lifecycle callbacks (e.g., exhaustion).

### firstTouch {#f-cuttheropedx-gamemain-rocket-firsttouch}

```csharp
private Vector firstTouch
```

The initial touch position when a rotation gesture started.

### impulse {#f-cuttheropedx-gamemain-rocket-impulse}

```csharp
public float impulse
```

The impulse force applied to the rocket when launched.

### impulseFactor {#f-cuttheropedx-gamemain-rocket-impulsefactor}

```csharp
public float impulseFactor
```

Multiplier applied to the impulse force.

### isOperating {#f-cuttheropedx-gamemain-rocket-isoperating}

```csharp
public int isOperating
```

Current operating state (-1 = uninitialized, see `STATE_ROCKET_*` constants).

### isRotatable {#f-cuttheropedx-gamemain-rocket-isrotatable}

```csharp
public bool isRotatable
```

Whether the rocket can be rotated by touch input.

### lastTouch {#f-cuttheropedx-gamemain-rocket-lasttouch}

```csharp
private Vector lastTouch
```

The most recent touch position during a rotation gesture.

### particles {#f-cuttheropedx-gamemain-rocket-particles}

```csharp
public RocketSparks particles
```

Particle system for the rocket's spark exhaust trail.

### perpSetted {#f-cuttheropedx-gamemain-rocket-perpsetted}

```csharp
public bool perpSetted
```

Whether the perpendicular direction has been set.

### point {#f-cuttheropedx-gamemain-rocket-point}

```csharp
public ConstraintedPoint point
```

The physics constraint point controlling the rocket's position.

### rocketQuadHalfLength {#f-cuttheropedx-gamemain-rocket-rocketquadhalflength}

```csharp
private static float rocketQuadHalfLength
```

Cached half-length of the rocket body quad; -1 indicates not yet computed.

### rotateHandled {#f-cuttheropedx-gamemain-rocket-rotatehandled}

```csharp
public bool rotateHandled
```

Whether a rotation gesture has been recognized (past the dead zone).

### sparks {#f-cuttheropedx-gamemain-rocket-sparks}

```csharp
public Animation sparks
```

The spark animation displayed at the rocket's exhaust.

### startCandyRotation {#f-cuttheropedx-gamemain-rocket-startcandyrotation}

```csharp
public float startCandyRotation
```

The candy's rotation at the time the rocket was activated.

### startRotation {#f-cuttheropedx-gamemain-rocket-startrotation}

```csharp
public float startRotation
```

The rocket's rotation at the time it was activated.

### t1 {#f-cuttheropedx-gamemain-rocket-t1}

```csharp
private Vector t1
```

Left edge vector of the rotated bounding box.

### t2 {#f-cuttheropedx-gamemain-rocket-t2}

```csharp
private Vector t2
```

Right edge vector of the rotated bounding box.

### time {#f-cuttheropedx-gamemain-rocket-time}

```csharp
public float time
```

Elapsed time tracker used during flight.

## Methods

### Draw() {#m-cuttheropedx-gamemain-rocket-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### GetExhaustOffset() {#m-cuttheropedx-gamemain-rocket-getexhaustoffset}

```csharp
private float GetExhaustOffset()
```

Calculates the offset from the rocket's center to the exhaust emission point, based on the rocket quad's half-length and current scale.

Returns: The exhaust offset distance.

### GetRocketQuadHalfLength() {#m-cuttheropedx-gamemain-rocket-getrocketquadhalflength}

```csharp
private static float GetRocketQuadHalfLength()
```

Returns the cached half-length of the rocket body quad, computing it from the quad size on first access.

Returns: Half the width of the rocket body quad.

### GetRotateAngleForStartEndCenter(Vector v1, Vector v2, Vector c) {#m-cuttheropedx-gamemain-rocket-getrotateangleforstartendcenter-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
private static float GetRotateAngleForStartEndCenter(Vector v1, Vector v2, Vector c)
```

Computes the rotation angle (in degrees) between two points relative to a center point.

Parameters:

- `v1`: The starting point.
- `v2`: The ending point.
- `c`: The center of rotation.

Returns: The signed rotation angle in degrees from `v1` to `v2`.

### HandleRotate(Vector v) {#m-cuttheropedx-gamemain-rocket-handlerotate-cuttheropedx-framework-core-vector}

```csharp
public void HandleRotate(Vector v)
```

Processes a rotation gesture update. Ignores movement below a 10-unit dead zone from the initial touch, then applies incremental rotation based on the angle change around the rocket's center.

Parameters:

- `v`: The current touch position.

### HandleRotateFinal() {#m-cuttheropedx-gamemain-rocket-handlerotatefinal}

```csharp
public void HandleRotateFinal()
```

Finalizes a rotation gesture by snapping the rocket's rotation to the nearest 45-degree increment via an animated timeline.

### HandleTouch(Vector v) {#m-cuttheropedx-gamemain-rocket-handletouch-cuttheropedx-framework-core-vector}

```csharp
public void HandleTouch(Vector v)
```

Records the initial touch position for a rotation gesture.

Parameters:

- `v`: The touch position.

### InitWithTexture(CTRTexture2D tx) {#m-cuttheropedx-gamemain-rocket-initwithtexture-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public override Image InitWithTexture(CTRTexture2D tx)
```

Initializes the image with the given texture, setting the first quad or full image.

Returns: This image instance for chaining.

### ParseMover(XElement xml) {#m-cuttheropedx-gamemain-rocket-parsemover-system-xml-linq-xelement}

```csharp
public override void ParseMover(XElement xml)
```

Parses mover path and speed attributes from the XML element.

Parameters:

- `xml`: XML element containing mover attributes.

### Rocket_create(CTRTexture2D t) {#m-cuttheropedx-gamemain-rocket-rocket-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
private static Rocket Rocket_create(CTRTexture2D t)
```

Creates a new [Rocket](Rocket.md) instance initialized with the specified texture.

Parameters:

- `t`: The texture to apply to the rocket.

Returns: A new [Rocket](Rocket.md) initialized with the given texture.

### Rocket_createWithResIDQuad(string resourceName, int q) {#m-cuttheropedx-gamemain-rocket-rocket-createwithresidquad-system-string-system-int32}

```csharp
public static Rocket Rocket_createWithResIDQuad(string resourceName, int q)
```

Creates a new [Rocket](Rocket.md) from a named texture resource and assigns it a draw quad.

Parameters:

- `resourceName`: The resource name used to look up the texture.
- `q`: The draw quad index to assign to the rocket.

Returns: A new [Rocket](Rocket.md) configured with the specified resource and quad.

### StartAnimation() {#m-cuttheropedx-gamemain-rocket-startanimation}

```csharp
public void StartAnimation()
```

Enables the spark animation and begins playing it.

### StopAnimation() {#m-cuttheropedx-gamemain-rocket-stopanimation}

```csharp
public void StopAnimation()
```

Stops the rocket animation by playing the scale-down timeline, stopping the spark animation, stopping and releasing both particle systems, and stopping all sounds.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-rocket-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-rocket-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.

### Update(float delta) {#m-cuttheropedx-gamemain-rocket-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateRotation() {#m-cuttheropedx-gamemain-rocket-updaterotation}

```csharp
public void UpdateRotation()
```

Recalculates the bounding box corner vectors ([t1](#f-cuttheropedx-gamemain-rocket-t1) and [t2](#f-cuttheropedx-gamemain-rocket-t2)) based on the current rotation and position.


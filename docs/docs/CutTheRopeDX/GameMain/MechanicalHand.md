---
title: Class MechanicalHand
description: Composite mechanical hand element made of articulated segments and a claw. Handles segment hierarchy, claw position tracking, and catch/release animations.
---

# Class MechanicalHand

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MechanicalHand.cs`

Composite mechanical hand element made of articulated segments and a claw. Handles segment hierarchy, claw position tracking, and catch/release animations.

## Declaration

```csharp
internal sealed class MechanicalHand : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [MechanicalHand](MechanicalHand.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### MechanicalHand() {#m-cuttheropedx-gamemain-mechanicalhand-ctor}

```csharp
public MechanicalHand()
```

Initializes a hand with a lightweight constrained point used for candy attachment.

## Fields

### MH_BUTTON_TOUCH_RADIUS {#f-cuttheropedx-gamemain-mechanicalhand-mh-button-touch-radius}

```csharp
public const float MH_BUTTON_TOUCH_RADIUS
```

Touch radius for rotating segment buttons.

### MH_CLAP_COOLDOWN {#f-cuttheropedx-gamemain-mechanicalhand-mh-clap-cooldown}

```csharp
public const float MH_CLAP_COOLDOWN
```

Cooldown before a hand can play another clap effect.

### MH_CLAP_DISTANCE {#f-cuttheropedx-gamemain-mechanicalhand-mh-clap-distance}

```csharp
public const float MH_CLAP_DISTANCE
```

Maximum distance at which two idle hands can clap.

### MH_CLAW_RADIUS {#f-cuttheropedx-gamemain-mechanicalhand-mh-claw-radius}

```csharp
public const int MH_CLAW_RADIUS
```

Claw collision radius before world scaling.

### MH_CLAW_TOUCH_RADIUS {#f-cuttheropedx-gamemain-mechanicalhand-mh-claw-touch-radius}

```csharp
public const float MH_CLAW_TOUCH_RADIUS
```

Touch radius for releasing candy from the claw.

### MH_GRAB_DISTANCE {#f-cuttheropedx-gamemain-mechanicalhand-mh-grab-distance}

```csharp
public const float MH_GRAB_DISTANCE
```

Maximum distance at which an idle hand can grab candy.

### MH_JOINT_RADIUS {#f-cuttheropedx-gamemain-mechanicalhand-mh-joint-radius}

```csharp
public const int MH_JOINT_RADIUS
```

Joint collision radius before world scaling.

### MH_RELEASE_DISTANCE {#f-cuttheropedx-gamemain-mechanicalhand-mh-release-distance}

```csharp
public const float MH_RELEASE_DISTANCE
```

Distance at which a releasing hand returns to idle state.

### MH_WORLD_SCALE {#f-cuttheropedx-gamemain-mechanicalhand-mh-world-scale}

```csharp
public const float MH_WORLD_SCALE
```

World scaling factor used by mechanical hand distances.

### STATE_HAND_CANDY {#f-cuttheropedx-gamemain-mechanicalhand-state-hand-candy}

```csharp
public const int STATE_HAND_CANDY
```

State value used while the hand is holding the candy.

### STATE_HAND_IDLE {#f-cuttheropedx-gamemain-mechanicalhand-state-hand-idle}

```csharp
public const int STATE_HAND_IDLE
```

Idle hand state value.

### STATE_HAND_RELEASE {#f-cuttheropedx-gamemain-mechanicalhand-state-hand-release}

```csharp
public const int STATE_HAND_RELEASE
```

State value used while the hand is releasing the candy.

### cPoint {#f-cuttheropedx-gamemain-mechanicalhand-cpoint}

```csharp
public ConstraintedPoint cPoint
```

Lightweight constrained point used to attach candy to the claw.

### canPlayClap {#f-cuttheropedx-gamemain-mechanicalhand-canplayclap}

```csharp
public bool canPlayClap
```

Whether this hand is eligible to play a clap effect.

### clapTimer {#f-cuttheropedx-gamemain-mechanicalhand-claptimer}

```csharp
public float clapTimer
```

Remaining clap cooldown time in seconds.

### clawOffset {#f-cuttheropedx-gamemain-mechanicalhand-clawoffset}

```csharp
private Vector clawOffset
```

Offset from the terminal joint to the candy anchor in claw local space.

### doRotateCandy {#f-cuttheropedx-gamemain-mechanicalhand-dorotatecandy}

```csharp
public bool doRotateCandy
```

Whether attached candy visuals should rotate with segment movement.

### releaseSoundPlayed {#f-cuttheropedx-gamemain-mechanicalhand-releasesoundplayed}

```csharp
public bool releaseSoundPlayed
```

Whether the release sound has already played for the current release.

### rotatingSegment {#f-cuttheropedx-gamemain-mechanicalhand-rotatingsegment}

```csharp
public MechanicalHandSegment rotatingSegment
```

Segment currently being rotated by input.

### segments {#f-cuttheropedx-gamemain-mechanicalhand-segments}

```csharp
public List<MechanicalHandSegment> segments
```

Ordered mechanical hand segment chain.

### state {#f-cuttheropedx-gamemain-mechanicalhand-state}

```csharp
public int state
```

Current mechanical hand state.

## Methods

### AddSegmentWithLengthAngleRotatable(float segmentLength, float segmentAngle, bool rotatable) {#m-cuttheropedx-gamemain-mechanicalhand-addsegmentwithlengthanglerotatable-system-single-system-single-system-boolean}

```csharp
public void AddSegmentWithLengthAngleRotatable(float segmentLength, float segmentAngle, bool rotatable)
```

Appends a segment to the hand chain.

Parameters:

- `segmentLength`: Segment length in world units.
- `segmentAngle`: Initial segment angle in degrees.
- `rotatable`: Whether the segment can be rotated by player input.

### AnimateCatchWithCandyPartsandAnimationsPool(List&lt;BaseElement&gt; candyParts, AnimationsPool animationPool) {#m-cuttheropedx-gamemain-mechanicalhand-animatecatchwithcandypartsandanimationspool-system-collections-generic-list-cuttheropedx-framework-visual-baseelement-cuttheropedx-framework-visual-animationspool}

```csharp
public void AnimateCatchWithCandyPartsandAnimationsPool(List<BaseElement> candyParts, AnimationsPool animationPool)
```

Plays catch bounce animation on the claw and optional candy visuals.

Parameters:

- `candyParts`: Candy parts to animate alongside the claw.
- `animationPool`: Animation pool responsible for timeline lifecycle.

### AnimateClap() {#m-cuttheropedx-gamemain-mechanicalhand-animateclap}

```csharp
public void AnimateClap()
```

Plays the claw clap bounce animation used when idle hands clap near each other.

### AnimateReleaseWithAnimationsPool(AnimationsPool animationPool) {#m-cuttheropedx-gamemain-mechanicalhand-animatereleasewithanimationspool-cuttheropedx-framework-visual-animationspool}

```csharp
public void AnimateReleaseWithAnimationsPool(AnimationsPool animationPool)
```

Plays the claw release bounce animation.

Parameters:

- `animationPool`: Animation pool responsible for timeline lifecycle.

### CatchBounceTimelineWithInitialScaleandAmplitude(float startScale, float amplitude) {#m-cuttheropedx-gamemain-mechanicalhand-catchbouncetimelinewithinitialscaleandamplitude-system-single-system-single}

```csharp
internal static Timeline CatchBounceTimelineWithInitialScaleandAmplitude(float startScale, float amplitude)
```

Creates a short scale bounce timeline used by mechanical hand catch and clap animations.

Parameters:

- `startScale`: Base scale to return to after the bounce.
- `amplitude`: Bounce amplitude as a multiplier of `startScale`.

Returns: The configured bounce timeline.

### ClawPosition() {#m-cuttheropedx-gamemain-mechanicalhand-clawposition}

```csharp
public Vector ClawPosition()
```

Computes the world position of the claw candy anchor.

Returns: Claw anchor world position.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-mechanicalhand-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### IsRotating() {#m-cuttheropedx-gamemain-mechanicalhand-isrotating}

```csharp
public bool IsRotating()
```

Indicates whether any segment is currently playing a rotation timeline.

Returns: `true` when at least one segment is animating.

### JointAtIndexPosition(int index) {#m-cuttheropedx-gamemain-mechanicalhand-jointatindexposition-system-int32}

```csharp
public Vector JointAtIndexPosition(int index)
```

Gets the world position of a segment joint by index.

Parameters:

- `index`: Joint index where 0 is the hand base.

Returns: Joint world position.

### LastSegment() {#m-cuttheropedx-gamemain-mechanicalhand-lastsegment}

```csharp
public MechanicalHandSegment LastSegment()
```

Gets the terminal segment in the chain.

Returns: The last segment.

### SegmentAtIndex(int index) {#m-cuttheropedx-gamemain-mechanicalhand-segmentatindex-system-int32}

```csharp
public MechanicalHandSegment SegmentAtIndex(int index)
```

Gets a segment by index.

Parameters:

- `index`: Segment index.

Returns: The requested segment.

### TheClaw() {#m-cuttheropedx-gamemain-mechanicalhand-theclaw}

```csharp
public MechanicalHandClaw TheClaw()
```

Gets the claw attached to the terminal segment.

Returns: Current claw instance.

### Update(float delta) {#m-cuttheropedx-gamemain-mechanicalhand-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


---
title: Class Mouse
description: Represents a single mouse character that can grab, carry, and release candy within a game scene. Manages animation, movement, and interaction logic.
---

# Class Mouse

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Mouse.cs`

Represents a single mouse character that can grab, carry, and release candy within a game scene. Manages animation, movement, and interaction logic.

## Declaration

```csharp
internal sealed class Mouse : BaseElement, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Mouse](Mouse.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Constructors

### Mouse(MiceObject manager) {#m-cuttheropedx-gamemain-mouse-ctor-cuttheropedx-gamemain-miceobject}

```csharp
public Mouse(MiceObject manager)
```

Initializes a new instance of the [Mouse](Mouse.md) class.

Parameters:

- `manager`: The manager that controls this mouse.

## Fields

### BlankQuad {#f-cuttheropedx-gamemain-mouse-blankquad}

```csharp
internal const int BlankQuad
```

Quad index used to hide the mouse body.

### CandyInMouthQuad {#f-cuttheropedx-gamemain-mouse-candyinmouthquad}

```csharp
internal const int CandyInMouthQuad
```

Quad index for the body frame with candy in the mouse mouth.

### EyesEndQuad {#f-cuttheropedx-gamemain-mouse-eyesendquad}

```csharp
internal const int EyesEndQuad
```

Last quad index in the mouse eye blink sequence.

### EyesStartQuad {#f-cuttheropedx-gamemain-mouse-eyesstartquad}

```csharp
internal const int EyesStartQuad
```

First quad index in the mouse eye blink sequence.

### HoleQuad {#f-cuttheropedx-gamemain-mouse-holequad}

```csharp
internal const int HoleQuad
```

Quad index for the mouse hole sprite.

### IdleQuad {#f-cuttheropedx-gamemain-mouse-idlequad}

```csharp
internal const int IdleQuad
```

Quad index for the idle mouse body sprite.

### activeDuration {#f-cuttheropedx-gamemain-mouse-activeduration}

```csharp
public float activeDuration
```

Maximum time in seconds the mouse stays active before auto-retreating.

### angleDeg {#f-cuttheropedx-gamemain-mouse-angledeg}

```csharp
public float angleDeg
```

The angle in degrees for the mouse's orientation.

### bounceTimeline {#f-cuttheropedx-gamemain-mouse-bouncetimeline}

```csharp
private Timeline bounceTimeline
```

Timeline used for the short active-state bounce.

### carriedCandy {#f-cuttheropedx-gamemain-mouse-carriedcandy}

```csharp
private GameObject carriedCandy
```

Candy object currently carried by the mouse.

### carriedStar {#f-cuttheropedx-gamemain-mouse-carriedstar}

```csharp
private ConstraintedPoint carriedStar
```

Star point currently carried by the mouse.

### elapsedActive {#f-cuttheropedx-gamemain-mouse-elapsedactive}

```csharp
private float elapsedActive
```

Elapsed active time since the mouse became interactive.

### entryOffsets {#f-cuttheropedx-gamemain-mouse-entryoffsets}

```csharp
private readonly Vector[] entryOffsets
```

Candy offsets used while entering the mouse mouth.

### exitOffsets {#f-cuttheropedx-gamemain-mouse-exitoffsets}

```csharp
private readonly Vector[] exitOffsets
```

Candy offsets used while exiting with the mouse.

### grabAnimating {#f-cuttheropedx-gamemain-mouse-grabanimating}

```csharp
private bool grabAnimating
```

Whether the candy grab path animation is still playing.

### grabRadius {#f-cuttheropedx-gamemain-mouse-grabradius}

```csharp
public float grabRadius
```

The radius within which the mouse can grab candy.

### holeSprite {#f-cuttheropedx-gamemain-mouse-holesprite}

```csharp
private readonly Image holeSprite
```

Sprite used to draw the mouse hole.

### index {#f-cuttheropedx-gamemain-mouse-index}

```csharp
public int index
```

The logical index for this mouse, used for ordering and activation.

### manager {#f-cuttheropedx-gamemain-mouse-manager}

```csharp
private readonly MiceObject manager
```

Manager that owns and sequences this mouse.

### mouseGroup {#f-cuttheropedx-gamemain-mouse-mousegroup}

```csharp
private readonly BaseElement mouseGroup
```

Container that positions the shared mouse sprites at this mouse hole.

### mouthPathPlayer {#f-cuttheropedx-gamemain-mouse-mouthpathplayer}

```csharp
private readonly Mouse.MouthPathPlayer mouthPathPlayer
```

Path player that animates the carried candy through the mouse mouth.

### retreating {#f-cuttheropedx-gamemain-mouse-retreating}

```csharp
private bool retreating
```

Whether the mouse is currently retreating into its hole.

### sharedSprites {#f-cuttheropedx-gamemain-mouse-sharedsprites}

```csharp
private Mouse.SharedMouseSprites? sharedSprites
```

Shared sprite set currently attached to this mouse.

## Properties

### HasCandy {#p-cuttheropedx-gamemain-mouse-hascandy}

```csharp
public bool HasCandy { get; }
```

Gets a value indicating whether the mouse is currently carrying candy.

### IsActive {#p-cuttheropedx-gamemain-mouse-isactive}

```csharp
public bool IsActive { get; private set; }
```

Gets a value indicating whether the mouse is currently active and can interact.

## Methods

### AttachExistingCandy(ConstraintedPoint star, GameObject candy) {#m-cuttheropedx-gamemain-mouse-attachexistingcandy-cuttheropedx-framework-physics-constraintedpoint-cuttheropedx-framework-helpers-gameobject}

```csharp
public void AttachExistingCandy(ConstraintedPoint star, GameObject candy)
```

Attaches an already-grabbed candy to the mouse, disabling gravity and initiating the entry path animation. Used when transferring candy between mice.

Parameters:

- `star`: The constrained star point to attach.
- `candy`: The candy game object to attach.

### BeginRetreat() {#m-cuttheropedx-gamemain-mouse-beginretreat}

```csharp
public void BeginRetreat()
```

Begins the retreat animation, deactivating the mouse and playing the appropriate exit animation based on whether candy is held.

### Cleanup() {#m-cuttheropedx-gamemain-mouse-cleanup}

```csharp
public void Cleanup()
```

Cleans up the mouse state and removes sprite resources, resetting all carried items and animations.

### CreateEntryPath() {#m-cuttheropedx-gamemain-mouse-createentrypath}

```csharp
private List<Mouse.PathPoint> CreateEntryPath()
```

Creates the path for candy entry animation, moving the candy from outside the hole into the mouse's mouth.

Returns: A list of path points defining the entry trajectory.

### CreateExitPath() {#m-cuttheropedx-gamemain-mouse-createexitpath}

```csharp
private List<Mouse.PathPoint> CreateExitPath()
```

Creates the path for candy exit animation when the mouse retreats with candy back into the hole.

Returns: A list of path points defining the exit trajectory.

### DetachCarriedCandy() {#m-cuttheropedx-gamemain-mouse-detachcarriedcandy}

```csharp
public (ConstraintedPoint star, GameObject candy) DetachCarriedCandy()
```

Detaches and returns the currently carried candy and star, clearing internal references. Used when transferring candy between mice.

Returns: A tuple containing the carried star point and candy object, both of which may be `null`.

### DrawHole() {#m-cuttheropedx-gamemain-mouse-drawhole}

```csharp
public void DrawHole()
```

Renders the mouse hole sprite at the mouse's position.

### DrawMouse() {#m-cuttheropedx-gamemain-mouse-drawmouse}

```csharp
public void DrawMouse()
```

Renders the mouse and its associated sprites.

### DropCandy() {#m-cuttheropedx-gamemain-mouse-dropcandy}

```csharp
public void DropCandy()
```

Releases the currently carried candy, re-enabling gravity and clearing references.

### DropCandyAndRetreat() {#m-cuttheropedx-gamemain-mouse-dropcandyandretreat}

```csharp
public void DropCandyAndRetreat()
```

Drops the carried candy and initiates the mouse's retreat animation.

### EnableEyesBlink() {#m-cuttheropedx-gamemain-mouse-enableeyesblink}

```csharp
private void EnableEyesBlink()
```

Enables and plays the eye blinking animation for the mouse.

### GrabCandy(ConstraintedPoint star, GameObject candy) {#m-cuttheropedx-gamemain-mouse-grabcandy-cuttheropedx-framework-physics-constraintedpoint-cuttheropedx-framework-helpers-gameobject}

```csharp
public void GrabCandy(ConstraintedPoint star, GameObject candy)
```

Commands the mouse to grab candy from a star point, disabling gravity and initiating the grab animation.

Parameters:

- `star`: The constrained star point to attach.
- `candy`: The candy game object being grabbed.

### Initialize(float px, float py, float angle, float radius, float duration) {#m-cuttheropedx-gamemain-mouse-initialize-system-single-system-single-system-single-system-single-system-single}

```csharp
public void Initialize(float px, float py, float angle, float radius, float duration)
```

Initializes the mouse's position, appearance, and behavior parameters.

Parameters:

- `px`: X-coordinate of the mouse hole position.
- `py`: Y-coordinate of the mouse hole position.
- `angle`: Angle in degrees for the mouse's orientation.
- `radius`: Grab radius for candy interaction detection.
- `duration`: Maximum active duration before automatic retreat.

### IsBounceTimelinePlaying() {#m-cuttheropedx-gamemain-mouse-isbouncetimelineplaying}

```csharp
private bool IsBounceTimelinePlaying()
```

Checks whether the bounce timeline (ID 6) is currently playing on the container.

Returns: `true` when the bounce timeline is playing; otherwise, `false`.

### IsClickable(float clickX, float clickY) {#m-cuttheropedx-gamemain-mouse-isclickable-system-single-system-single}

```csharp
public bool IsClickable(float clickX, float clickY)
```

Determines whether the mouse can be clicked at the specified coordinates to drop the candy.

Parameters:

- `clickX`: X-coordinate of the click.
- `clickY`: Y-coordinate of the click.

Returns: `true` if the mouse is active, has candy, not retreating, and the click is within grab radius; otherwise `false`.

### IsWithinGrabRadius(ConstraintedPoint target) {#m-cuttheropedx-gamemain-mouse-iswithingrabradius-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public bool IsWithinGrabRadius(ConstraintedPoint target)
```

Checks if a target point is within the mouse's grab radius.

Parameters:

- `target`: The constrained point to check.

Returns: `true` if the target is within grab range; otherwise `false`.

### Lock() {#m-cuttheropedx-gamemain-mouse-lock}

```csharp
public void Lock()
```

Locks the mouse in an inactive and retreating state, preventing further interactions.

### PlayAnimation(Mouse.MouseAnimationId id) {#m-cuttheropedx-gamemain-mouse-playanimation-cuttheropedx-gamemain-mouse-mouseanimationid}

```csharp
private void PlayAnimation(Mouse.MouseAnimationId id)
```

Plays the specified animation and registers this instance as the timeline delegate.

Parameters:

- `id`: The animation identifier to play.

### Spawn(Mouse.SharedMouseSprites sprites, GameObject carriedCandy, ConstraintedPoint carriedStar) {#m-cuttheropedx-gamemain-mouse-spawn-cuttheropedx-gamemain-mouse-sharedmousesprites-cuttheropedx-framework-helpers-gameobject-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public void Spawn(Mouse.SharedMouseSprites sprites, GameObject carriedCandy, ConstraintedPoint carriedStar)
```

Spawns the mouse with shared sprite resources, optionally carrying candy. Plays the entry animation and sets up initial state.

Parameters:

- `sprites`: Shared sprite resources for rendering.
- `carriedCandy`: Optional candy object to carry from spawn.
- `carriedStar`: Optional star point constraint for the candy.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-mouse-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-mouse-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.

### Update(float delta) {#m-cuttheropedx-gamemain-mouse-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


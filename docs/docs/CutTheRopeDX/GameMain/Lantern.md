---
title: Class Lantern
description: Lantern object that can capture the candy, hold it in a shared lantern state, and release it on touch.
---

# Class Lantern

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Lantern.cs`

Lantern object that can capture the candy, hold it in a shared lantern state, and release it on touch.

## Declaration

```csharp
internal sealed class Lantern : CTRGameObject
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
- [Lantern](Lantern.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### FireQuad {#f-cuttheropedx-gamemain-lantern-firequad}

```csharp
private const int FireQuad
```

Texture quad index for the fire visual.

### InnerCandyAppearTimelineId {#f-cuttheropedx-gamemain-lantern-innercandyappeartimelineid}

```csharp
private const int InnerCandyAppearTimelineId
```

Timeline ID for showing the inner candy visual.

### InnerCandyHideTimelineId {#f-cuttheropedx-gamemain-lantern-innercandyhidetimelineid}

```csharp
private const int InnerCandyHideTimelineId
```

Timeline ID for hiding the inner candy visual.

### InnerCandyIdleTimelineId {#f-cuttheropedx-gamemain-lantern-innercandyidletimelineid}

```csharp
private const int InnerCandyIdleTimelineId
```

Timeline ID for the inner candy idle animation.

### InnerCandyStartQuad {#f-cuttheropedx-gamemain-lantern-innercandystartquad}

```csharp
private const int InnerCandyStartQuad
```

First texture quad index for lantern candy variants stored in the lantern texture.

### LanternCandyRevealTime {#f-cuttheropedx-gamemain-lantern-lanterncandyrevealtime}

```csharp
public const float LanternCandyRevealTime
```

Delay before candy is revealed after a lantern touch.

### LanternEndQuad {#f-cuttheropedx-gamemain-lantern-lanternendquad}

```csharp
private const int LanternEndQuad
```

Texture quad index for the active lantern visual.

### LanternInactiveDelay {#f-cuttheropedx-gamemain-lantern-lanterninactivedelay}

```csharp
private const float LanternInactiveDelay
```

Delay before lanterns return to the inactive state after release begins.

### LanternQuadInCandyTexture {#f-cuttheropedx-gamemain-lantern-lanternquadincandytexture}

```csharp
private const int LanternQuadInCandyTexture
```

Texture quad index for the lantern candy frame in candy-specific textures.

### LanternStartQuad {#f-cuttheropedx-gamemain-lantern-lanternstartquad}

```csharp
private const int LanternStartQuad
```

Texture quad index for the inactive lantern visual.

### LanternStateActive {#f-cuttheropedx-gamemain-lantern-lanternstateactive}

```csharp
public const int LanternStateActive
```

Active lantern state value.

### LanternStateInactive {#f-cuttheropedx-gamemain-lantern-lanternstateinactive}

```csharp
public const int LanternStateInactive
```

Inactive lantern state value.

### LanternTouchRadius {#f-cuttheropedx-gamemain-lantern-lanterntouchradius}

```csharp
private const float LanternTouchRadius
```

Touch radius used to release candy from an active lantern.

### activeForm {#f-cuttheropedx-gamemain-lantern-activeform}

```csharp
private Image activeForm
```

Active lantern visual.

### allLanterns {#f-cuttheropedx-gamemain-lantern-alllanterns}

```csharp
private static List<Lantern> allLanterns
```

Shared lantern registry for the current level.

### delayedDispatcher {#f-cuttheropedx-gamemain-lantern-delayeddispatcher}

```csharp
private DelayedDispatcher delayedDispatcher
```

Dispatcher for delayed lantern animation and release callbacks.

### fire {#f-cuttheropedx-gamemain-lantern-fire}

```csharp
private Image fire
```

Fire visual shown while a lantern is active.

### idleForm {#f-cuttheropedx-gamemain-lantern-idleform}

```csharp
private Image idleForm
```

Inactive lantern visual.

### innerCandy {#f-cuttheropedx-gamemain-lantern-innercandy}

```csharp
private Image innerCandy
```

Candy visual shown inside an active lantern.

### lanternState {#f-cuttheropedx-gamemain-lantern-lanternstate}

```csharp
public int lanternState
```

Current lantern state.

### prevPos {#f-cuttheropedx-gamemain-lantern-prevpos}

```csharp
public Vector prevPos
```

Lantern position from the previous update.

## Properties

### SharedCandyPoint {#p-cuttheropedx-gamemain-lantern-sharedcandypoint}

```csharp
private static ConstraintedPoint SharedCandyPoint { get; set; }
```

Shared candy point currently captured by any lantern.

## Methods

### BecomeCandyAware(FrameworkTypes obj) {#m-cuttheropedx-gamemain-lantern-becomecandyaware-cuttheropedx-framework-frameworktypes}

```csharp
private static void BecomeCandyAware(FrameworkTypes obj)
```

Dispatcher callback that returns a lantern to the inactive state.

Parameters:

- `obj`: Lantern instance passed through the dispatcher.

### BecomingAwareDispatcher(FrameworkTypes obj) {#m-cuttheropedx-gamemain-lantern-becomingawaredispatcher-cuttheropedx-framework-frameworktypes}

```csharp
private void BecomingAwareDispatcher(FrameworkTypes obj)
```

Dispatcher callback that forwards a lantern to [BecomeCandyAware](#m-cuttheropedx-gamemain-lantern-becomecandyaware-cuttheropedx-framework-frameworktypes).

Parameters:

- `obj`: Lantern instance passed through the dispatcher.

### CaptureCandy(ConstraintedPoint candyPoint) {#m-cuttheropedx-gamemain-lantern-capturecandy-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public void CaptureCandy(ConstraintedPoint candyPoint)
```

Captures the candy into this lantern and activates all lantern visuals.

Parameters:

- `candyPoint`: Candy physics point to capture.

### CaptureCandyFromDispatcher(FrameworkTypes obj) {#m-cuttheropedx-gamemain-lantern-capturecandyfromdispatcher-cuttheropedx-framework-frameworktypes}

```csharp
public void CaptureCandyFromDispatcher(FrameworkTypes obj)
```

Dispatcher callback that captures a candy point.

Parameters:

- `obj`: Candy point passed through the dispatcher.

### GetAllLanterns() {#m-cuttheropedx-gamemain-lantern-getalllanterns}

```csharp
public static List<Lantern> GetAllLanterns()
```

Gets the shared list of lanterns in the current level.

Returns: The shared lantern list.

### InitWithPosition(Vector position) {#m-cuttheropedx-gamemain-lantern-initwithposition-cuttheropedx-framework-core-vector}

```csharp
public Lantern InitWithPosition(Vector position)
```

Initializes the lantern at a level position and creates its idle, active, fire, and candy visuals.

Parameters:

- `position`: World-space lantern position.

Returns: The initialized lantern, or `null` if its texture could not be loaded.

### InitiateReleasingCandy() {#m-cuttheropedx-gamemain-lantern-initiatereleasingcandy}

```csharp
private void InitiateReleasingCandy()
```

Starts the delayed release animation sequence for the shared captured candy.

### OnTouchDown(float tx, float ty) {#m-cuttheropedx-gamemain-lantern-ontouchdown-system-single-system-single}

```csharp
public bool OnTouchDown(float tx, float ty)
```

Handles a touch against the lantern and starts candy release when the lantern is active.

Parameters:

- `tx`: Touch X position in world space.
- `ty`: Touch Y position in world space.

Returns: `true` if the touch was handled by this lantern; otherwise, `false`.

### PlayFireBounceTimeline(FrameworkTypes _) {#m-cuttheropedx-gamemain-lantern-playfirebouncetimeline-cuttheropedx-framework-frameworktypes}

```csharp
private void PlayFireBounceTimeline(FrameworkTypes _)
```

Dispatcher callback that starts the fire bounce animation.

Parameters:

- `_`: Unused dispatcher parameter.

### PlayInnerCandyIdleTimeline(FrameworkTypes _) {#m-cuttheropedx-gamemain-lantern-playinnercandyidletimeline-cuttheropedx-framework-frameworktypes}

```csharp
private void PlayInnerCandyIdleTimeline(FrameworkTypes _)
```

Dispatcher callback that starts the inner candy idle animation.

Parameters:

- `_`: Unused dispatcher parameter.

### ReleaseCandy(FrameworkTypes obj) {#m-cuttheropedx-gamemain-lantern-releasecandy-cuttheropedx-framework-frameworktypes}

```csharp
private void ReleaseCandy(FrameworkTypes obj)
```

Dispatcher callback that releases the shared candy point from the lantern.

Parameters:

- `obj`: Unused dispatcher parameter.

### RemoveAllLanterns() {#m-cuttheropedx-gamemain-lantern-removealllanterns}

```csharp
public static void RemoveAllLanterns()
```

Clears the current level lantern registry and any shared captured candy point.

### Update(float delta) {#m-cuttheropedx-gamemain-lantern-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


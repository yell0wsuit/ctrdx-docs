---
title: Class OriginalTargetAnimationBackend
description: Original Om Nom animation backend based on CharAnimations timelines.
---

# Class OriginalTargetAnimationBackend

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `OriginalTargetAnimationBackend.cs`

Original Om Nom animation backend based on [CharAnimations](CharAnimations.md) timelines.

## Declaration

```csharp
internal sealed class OriginalTargetAnimationBackend : ITargetAnimationBackend
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [OriginalTargetAnimationBackend](OriginalTargetAnimationBackend.md)

## Implements

- [ITargetAnimationBackend](ITargetAnimationBackend.md)

## Constructors

### OriginalTargetAnimationBackend(bool isNightLevel, bool isXmas) {#m-cuttheropedx-gamemain-originaltargetanimationbackend-ctor-system-boolean-system-boolean}

```csharp
public OriginalTargetAnimationBackend(bool isNightLevel, bool isXmas)
```

Creates and configures the original timeline backend for Om Nom.

Parameters:

- `isNightLevel`: Whether sleep animations should be configured.
- `isXmas`: Whether Christmas animation variants should be configured.

## Fields

### CheerfulTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-cheerfultimeline}

```csharp
public const int CheerfulTimeline
```

Timeline ID for the cheerful animation.

### ChewingTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-chewingtimeline}

```csharp
public const int ChewingTimeline
```

Timeline ID for the chewing animation.

### ComplexIdleLoopCount {#f-cuttheropedx-gamemain-originaltargetanimationbackend-complexidleloopcount}

```csharp
private const int ComplexIdleLoopCount
```

Loop count used by the complex idle animation sequence.

### ComplexIdleStartFrame {#f-cuttheropedx-gamemain-originaltargetanimationbackend-complexidlestartframe}

```csharp
private const int ComplexIdleStartFrame
```

First frame in the complex idle animation sequence.

### DefaultFrameDelay {#f-cuttheropedx-gamemain-originaltargetanimationbackend-defaultframedelay}

```csharp
private const float DefaultFrameDelay
```

Default frame delay for original Om Nom animations.

### ExcitedTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-excitedtimeline}

```csharp
public const int ExcitedTimeline
```

Timeline ID for the excited animation.

### GreetingTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-greetingtimeline}

```csharp
public const int GreetingTimeline
```

Timeline ID for the default greeting animation.

### IdleLoopTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-idlelooptimeline}

```csharp
public const int IdleLoopTimeline
```

Timeline ID for the default idle loop.

### IdleVariationOneTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-idlevariationonetimeline}

```csharp
public const int IdleVariationOneTimeline
```

Timeline ID for the first idle variation.

### IdleVariationTwoTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-idlevariationtwotimeline}

```csharp
public const int IdleVariationTwoTimeline
```

Timeline ID for the second idle variation.

### MouthClosingTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-mouthclosingtimeline}

```csharp
public const int MouthClosingTimeline
```

Timeline ID for the mouth-closing animation.

### MouthOpenedLoopTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-mouthopenedlooptimeline}

```csharp
public const int MouthOpenedLoopTimeline
```

Timeline ID for the opened-mouth loop animation.

### MouthOpeningTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-mouthopeningtimeline}

```csharp
public const int MouthOpeningTimeline
```

Timeline ID for the mouth-opening animation.

### SadTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-sadtimeline}

```csharp
public const int SadTimeline
```

Timeline ID for the sad animation.

### SleepAnimEndFrame {#f-cuttheropedx-gamemain-originaltargetanimationbackend-sleepanimendframe}

```csharp
private const int SleepAnimEndFrame
```

Last frame of the night-level sleeping animation.

### SleepAnimFrameDelay {#f-cuttheropedx-gamemain-originaltargetanimationbackend-sleepanimframedelay}

```csharp
private const float SleepAnimFrameDelay
```

Frame delay used by the night-level sleeping animation.

### SleepAnimStartFrame {#f-cuttheropedx-gamemain-originaltargetanimationbackend-sleepanimstartframe}

```csharp
private const int SleepAnimStartFrame
```

First frame of the night-level sleeping animation.

### SleepingTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-sleepingtimeline}

```csharp
public const int SleepingTimeline
```

Timeline ID for the night-level sleeping animation.

### XmasGreetingTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-xmasgreetingtimeline}

```csharp
public const int XmasGreetingTimeline
```

Timeline ID for the Christmas greeting animation.

### XmasIdleVariationOneTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-xmasidlevariationonetimeline}

```csharp
public const int XmasIdleVariationOneTimeline
```

Timeline ID for the first Christmas idle variation.

### XmasIdleVariationTwoTimeline {#f-cuttheropedx-gamemain-originaltargetanimationbackend-xmasidlevariationtwotimeline}

```csharp
public const int XmasIdleVariationTwoTimeline
```

Timeline ID for the second Christmas idle variation.

### ZzzOffsetX1 {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zzzoffsetx1}

```csharp
private const float ZzzOffsetX1
```

X offset for the first ZZZ overlay from Om Nom's origin.

### ZzzOffsetX2 {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zzzoffsetx2}

```csharp
private const float ZzzOffsetX2
```

X offset for the second ZZZ overlay from Om Nom's origin.

### ZzzOffsetY1 {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zzzoffsety1}

```csharp
private const float ZzzOffsetY1
```

Y offset for the first ZZZ overlay from Om Nom's origin.

### ZzzOffsetY2 {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zzzoffsety2}

```csharp
private const float ZzzOffsetY2
```

Y offset for the second ZZZ overlay from Om Nom's origin.

### ZzzRotationCenterX {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zzzrotationcenterx}

```csharp
private const float ZzzRotationCenterX
```

Rotation pivot offset that makes ZZZ overlays orbit around a point left of their center.

### ZzzStates {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zzzstates}

```csharp
private static readonly (int Next, bool Visible, float Duration, float ScaleStart, float ScaleEnd, float RotStart, float RotEnd, float AlphaStart, float AlphaEnd)[] ZzzStates
```

State machine rows used by the ZZZ sleep overlay animation.

### _zz1State {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zz1state}

```csharp
private int _zz1State
```

Current ZZZ state index for the first sleep overlay.

### _zz1Time {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zz1time}

```csharp
private float _zz1Time
```

Elapsed time in the current state for the first sleep overlay.

### _zz2State {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zz2state}

```csharp
private int _zz2State
```

Current ZZZ state index for the second sleep overlay.

### _zz2Time {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zz2time}

```csharp
private float _zz2Time
```

Elapsed time in the current state for the second sleep overlay.

### blink {#f-cuttheropedx-gamemain-originaltargetanimationbackend-blink}

```csharp
private readonly Animation blink
```

Blink overlay animation attached to the target.

### isNightLevel {#f-cuttheropedx-gamemain-originaltargetanimationbackend-isnightlevel}

```csharp
private readonly bool isNightLevel
```

Whether this backend should use night-level sleeping resources and overlays.

### isXmas {#f-cuttheropedx-gamemain-originaltargetanimationbackend-isxmas}

```csharp
private readonly bool isXmas
```

Whether this backend should use Christmas animation variants.

### target {#f-cuttheropedx-gamemain-originaltargetanimationbackend-target}

```csharp
private readonly CharAnimations target
```

Original Om Nom animation object.

### zz1 {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zz1}

```csharp
private readonly Image zz1
```

First ZZZ sleep overlay image.

### zz2 {#f-cuttheropedx-gamemain-originaltargetanimationbackend-zz2}

```csharp
private readonly Image zz2
```

Second ZZZ sleep overlay image.

## Properties

### HandlesOwnSleepPulse {#p-cuttheropedx-gamemain-originaltargetanimationbackend-handlesownsleeppulse}

```csharp
public bool HandlesOwnSleepPulse { get; }
```

Whether the backend handles the sleep breathing pulse internally (so GameScene should not apply its own scale/rotationCenter pulse).

### StartsWithGreeting {#p-cuttheropedx-gamemain-originaltargetanimationbackend-startswithgreeting}

```csharp
public bool StartsWithGreeting { get; }
```

Whether this skin plays the greeting animation on initialization instead of idle.

### TargetObject {#p-cuttheropedx-gamemain-originaltargetanimationbackend-targetobject}

```csharp
public GameObject TargetObject { get; }
```

Gets the primary Om Nom gameplay object.

## Methods

### AdvanceZzzState(Image zzz, ref int state, ref float time, float delta) {#m-cuttheropedx-gamemain-originaltargetanimationbackend-advancezzzstate-cuttheropedx-framework-visual-image-system-int32-system-single-system-single}

```csharp
private static void AdvanceZzzState(Image zzz, ref int state, ref float time, float delta)
```

Advances one ZZZ overlay through the state machine and applies the resulting transforms.

Parameters:

- `zzz`: ZZZ overlay image to update.
- `state`: Current state index for the overlay.
- `time`: Elapsed time within the current state.
- `delta`: Elapsed time in seconds since the last update.

### BuildComplexIdleTailSequence() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-buildcomplexidletailsequence}

```csharp
private static List<int> BuildComplexIdleTailSequence()
```

Builds tail frames for the complex idle sequence after the first frame.

Returns: Frame list consumed by [AddAnimationWithIDDelayLoopCountSequence](../Framework/Visual/Animation.md#m-cuttheropedx-framework-visual-animation-addanimationwithiddelayloopcountsequence-system-int32-system-single-cuttheropedx-framework-visual-timeline-looptype-system-int32-system-int32-system-collections-generic-list-system-int32).

### ConfigureTargetResources() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-configuretargetresources}

```csharp
private void ConfigureTargetResources()
```

Adds additional texture resources required for Om Nom timeline variants.

### ConfigureTargetTimelines() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-configuretargettimelines}

```csharp
private void ConfigureTargetTimelines()
```

Defines Om Nom timelines and frame ranges.

### ConfigureTargetTransitions() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-configuretargettransitions}

```csharp
private void ConfigureTargetTransitions()
```

Configures automatic transitions between Om Nom timelines.

### CreateBlinkAnimation() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-createblinkanimation}

```csharp
private Animation CreateBlinkAnimation()
```

Creates and attaches the blink overlay animation.

Returns: Blink animation instance attached to Om Nom.

### CreateZzzOverlay() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-createzzzoverlay}

```csharp
private static Image CreateZzzOverlay()
```

Creates a single ZZZ overlay image for the night level sleep animation. Scale, rotation, and alpha are driven each frame by [AdvanceZzzState](#m-cuttheropedx-gamemain-originaltargetanimationbackend-advancezzzstate-cuttheropedx-framework-visual-image-system-int32-system-single-system-single).

Returns: Configured ZZZ image, initially hidden.

### DrawSleepOverlays() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-drawsleepoverlays}

```csharp
public void DrawSleepOverlays()
```

Draws all sleep overlay animations that are currently visible.

### GetSleepPulseDelaySeconds() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-getsleeppulsedelayseconds}

```csharp
public float GetSleepPulseDelaySeconds()
```

Gets the delay before night sleep pulse effects should begin.

Returns: Delay in seconds.

### GetTargetBaseScaleX() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-gettargetbasescalex}

```csharp
public float GetTargetBaseScaleX()
```

Gets the default horizontal scale that should be applied to the target object.

Returns: Default X scale for the target object.

### GetTargetBaseScaleY() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-gettargetbasescaley}

```csharp
public float GetTargetBaseScaleY()
```

Gets the default vertical scale that should be applied to the target object.

Returns: Default Y scale for the target object.

### Initialize(ITimelineDelegate timelineDelegate) {#m-cuttheropedx-gamemain-originaltargetanimationbackend-initialize-cuttheropedx-framework-visual-itimelinedelegate}

```csharp
public void Initialize(ITimelineDelegate timelineDelegate)
```

Initializes backend timeline state and delegates.

Parameters:

- `timelineDelegate`: Timeline delegate receiving keyframe callbacks.

### IsPlaying(TargetAnimationState state) {#m-cuttheropedx-gamemain-originaltargetanimationbackend-isplaying-cuttheropedx-gamemain-targetanimationstate}

```csharp
public bool IsPlaying(TargetAnimationState state)
```

Checks whether the requested target animation state is currently active.

Parameters:

- `state`: Animation state to query.

Returns: `true` if the state is active; otherwise `false`.

### Play(TargetAnimationState state) {#m-cuttheropedx-gamemain-originaltargetanimationbackend-play-cuttheropedx-gamemain-targetanimationstate}

```csharp
public void Play(TargetAnimationState state)
```

Plays the requested target animation state.

Parameters:

- `state`: Animation state to play.

### PlayRandomIdleVariant(Func&lt;int, int, int&gt; rng) {#m-cuttheropedx-gamemain-originaltargetanimationbackend-playrandomidlevariant-system-func-system-int32-system-int32-system-int32}

```csharp
public void PlayRandomIdleVariant(Func<int, int, int> rng)
```

Plays a backend-specific random idle variation.

Parameters:

- `rng`: Inclusive random function with signature `(min, max) => value`.

### ResetBlink() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-resetblink}

```csharp
public void ResetBlink()
```

Resets the blink animation to frame 0 without showing it.

### SetSleepOverlayVisible(bool visible) {#m-cuttheropedx-gamemain-originaltargetanimationbackend-setsleepoverlayvisible-system-boolean}

```csharp
public void SetSleepOverlayVisible(bool visible)
```

Sets visibility and playback state of all sleep overlay animations.

Parameters:

- `visible`: `true` to show overlays; otherwise `false`.

### SyncAdditionalOverlayPosition(float x, float y) {#m-cuttheropedx-gamemain-originaltargetanimationbackend-syncadditionaloverlayposition-system-single-system-single}

```csharp
public void SyncAdditionalOverlayPosition(float x, float y)
```

Updates the spawn position used by backend-specific non-sleep overlays.

Parameters:

- `x`: Target X position.
- `y`: Target Y position.

### SyncSleepOverlayPosition(float x, float y) {#m-cuttheropedx-gamemain-originaltargetanimationbackend-syncsleepoverlayposition-system-single-system-single}

```csharp
public void SyncSleepOverlayPosition(float x, float y)
```

Moves all sleep overlay animations to the given position.

Parameters:

- `x`: Target X position.
- `y`: Target Y position.

### TriggerBlink() {#m-cuttheropedx-gamemain-originaltargetanimationbackend-triggerblink}

```csharp
public void TriggerBlink()
```

Shows the blink overlay and plays it from frame 0.

### UpdateAdditionalOverlays(float delta) {#m-cuttheropedx-gamemain-originaltargetanimationbackend-updateadditionaloverlays-system-single}

```csharp
public void UpdateAdditionalOverlays(float delta)
```

Advances backend-specific non-sleep overlays by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateSleepOverlays(float delta) {#m-cuttheropedx-gamemain-originaltargetanimationbackend-updatesleepoverlays-system-single}

```csharp
public void UpdateSleepOverlays(float delta)
```

Advances all sleep overlay animations by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


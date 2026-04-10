---
title: Class TargetAnimationController
description: Facade for Om Nom animation playback that delegates to a pluggable backend.
---

# Class TargetAnimationController

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `TargetAnimationController.cs`

Facade for Om Nom animation playback that delegates to a pluggable backend.

## Declaration

```csharp
internal sealed class TargetAnimationController
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [TargetAnimationController](TargetAnimationController.md)

## Constructors

### TargetAnimationController(ITargetAnimationBackend backend) {#m-cuttheropedx-gamemain-targetanimationcontroller-ctor-cuttheropedx-gamemain-itargetanimationbackend}

```csharp
private TargetAnimationController(ITargetAnimationBackend backend)
```

Initializes a controller around the provided backend implementation.

Parameters:

- `backend`: Backend implementation used for all animation operations.

## Fields

### backend {#f-cuttheropedx-gamemain-targetanimationcontroller-backend}

```csharp
private readonly ITargetAnimationBackend backend
```

Backend implementation used for all target animation operations.

## Properties

### HandlesOwnSleepPulse {#p-cuttheropedx-gamemain-targetanimationcontroller-handlesownsleeppulse}

```csharp
public bool HandlesOwnSleepPulse { get; }
```

Whether the backend handles the sleep breathing pulse internally.

### StartsWithGreeting {#p-cuttheropedx-gamemain-targetanimationcontroller-startswithgreeting}

```csharp
public bool StartsWithGreeting { get; }
```

Whether this skin plays the greeting animation on initialization instead of idle.

### TargetObject {#p-cuttheropedx-gamemain-targetanimationcontroller-targetobject}

```csharp
public GameObject TargetObject { get; }
```

Gets the primary Om Nom gameplay object owned by the backend.

## Methods

### Create(ITargetAnimationBackend backend) {#m-cuttheropedx-gamemain-targetanimationcontroller-create-cuttheropedx-gamemain-itargetanimationbackend}

```csharp
public static TargetAnimationController Create(ITargetAnimationBackend backend)
```

Creates a controller with a custom backend implementation.

Parameters:

- `backend`: Backend implementation used for all animation operations.

Returns: A controller instance that delegates to `backend`.

### DrawSleepOverlays() {#m-cuttheropedx-gamemain-targetanimationcontroller-drawsleepoverlays}

```csharp
public void DrawSleepOverlays()
```

Draws all sleep overlay animations that are currently visible.

### GetSleepPulseDelaySeconds() {#m-cuttheropedx-gamemain-targetanimationcontroller-getsleeppulsedelayseconds}

```csharp
public float GetSleepPulseDelaySeconds()
```

Gets the delay before night sleep pulse effects should begin.

Returns: Delay in seconds.

### GetTargetBaseScaleX() {#m-cuttheropedx-gamemain-targetanimationcontroller-gettargetbasescalex}

```csharp
public float GetTargetBaseScaleX()
```

Gets the backend-defined base horizontal scale for Om Nom.

Returns: Default X scale for Om Nom.

### GetTargetBaseScaleY() {#m-cuttheropedx-gamemain-targetanimationcontroller-gettargetbasescaley}

```csharp
public float GetTargetBaseScaleY()
```

Gets the backend-defined base vertical scale for Om Nom.

Returns: Default Y scale for Om Nom.

### Initialize(ITimelineDelegate timelineDelegate) {#m-cuttheropedx-gamemain-targetanimationcontroller-initialize-cuttheropedx-framework-visual-itimelinedelegate}

```csharp
public void Initialize(ITimelineDelegate timelineDelegate)
```

Initializes backend timelines and binds timeline delegate callbacks.

Parameters:

- `timelineDelegate`: Timeline delegate receiving keyframe callbacks.

### IsIdleLoopPlaying() {#m-cuttheropedx-gamemain-targetanimationcontroller-isidleloopplaying}

```csharp
public bool IsIdleLoopPlaying()
```

Checks whether the idle loop animation is currently active.

Returns: `true` when idle loop is currently playing; otherwise `false`.

### IsSleepingAnimationPlaying() {#m-cuttheropedx-gamemain-targetanimationcontroller-issleepinganimationplaying}

```csharp
public bool IsSleepingAnimationPlaying()
```

Checks whether the sleeping animation is currently active.

Returns: `true` when sleeping animation is currently playing; otherwise `false`.

### PlayChewing() {#m-cuttheropedx-gamemain-targetanimationcontroller-playchewing}

```csharp
public void PlayChewing()
```

Plays the chewing animation.

### PlayExcited() {#m-cuttheropedx-gamemain-targetanimationcontroller-playexcited}

```csharp
public void PlayExcited()
```

Plays the excited animation.

### PlayGreeting() {#m-cuttheropedx-gamemain-targetanimationcontroller-playgreeting}

```csharp
public void PlayGreeting()
```

Plays the greeting animation.

### PlayMouthClosing() {#m-cuttheropedx-gamemain-targetanimationcontroller-playmouthclosing}

```csharp
public void PlayMouthClosing()
```

Plays the mouth-closing animation.

### PlayMouthOpening() {#m-cuttheropedx-gamemain-targetanimationcontroller-playmouthopening}

```csharp
public void PlayMouthOpening()
```

Plays the mouth-opening animation.

### PlayRandomIdleVariant(Func&lt;int, int, int&gt; rng) {#m-cuttheropedx-gamemain-targetanimationcontroller-playrandomidlevariant-system-func-system-int32-system-int32-system-int32}

```csharp
public void PlayRandomIdleVariant(Func<int, int, int> rng)
```

Plays one of the idle variation animations based on the provided random function.

Parameters:

- `rng`: Inclusive random function with signature `(min, max) => value`.

### PlaySad() {#m-cuttheropedx-gamemain-targetanimationcontroller-playsad}

```csharp
public void PlaySad()
```

Plays the sad animation.

### PlaySleeping() {#m-cuttheropedx-gamemain-targetanimationcontroller-playsleeping}

```csharp
public void PlaySleeping()
```

Plays the sleeping animation.

### ResetBlink() {#m-cuttheropedx-gamemain-targetanimationcontroller-resetblink}

```csharp
public void ResetBlink()
```

Resets the blink animation to frame 0 without showing it.

### SetSleepOverlayVisible(bool visible) {#m-cuttheropedx-gamemain-targetanimationcontroller-setsleepoverlayvisible-system-boolean}

```csharp
public void SetSleepOverlayVisible(bool visible)
```

Sets visibility and playback state of all sleep overlay animations.

Parameters:

- `visible`: `true` to show overlays; otherwise `false`.

### SyncAdditionalOverlayPosition(float x, float y) {#m-cuttheropedx-gamemain-targetanimationcontroller-syncadditionaloverlayposition-system-single-system-single}

```csharp
public void SyncAdditionalOverlayPosition(float x, float y)
```

Updates the spawn position used by backend-specific non-sleep overlays.

Parameters:

- `x`: Target X position.
- `y`: Target Y position.

### SyncSleepOverlayPosition(float x, float y) {#m-cuttheropedx-gamemain-targetanimationcontroller-syncsleepoverlayposition-system-single-system-single}

```csharp
public void SyncSleepOverlayPosition(float x, float y)
```

Moves all sleep overlay animations to the given position.

Parameters:

- `x`: Target X position.
- `y`: Target Y position.

### TriggerBlink() {#m-cuttheropedx-gamemain-targetanimationcontroller-triggerblink}

```csharp
public void TriggerBlink()
```

Shows the blink overlay and plays it from frame 0.

### UpdateAdditionalOverlays(float delta) {#m-cuttheropedx-gamemain-targetanimationcontroller-updateadditionaloverlays-system-single}

```csharp
public void UpdateAdditionalOverlays(float delta)
```

Advances backend-specific non-sleep overlays by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateSleepOverlays(float delta) {#m-cuttheropedx-gamemain-targetanimationcontroller-updatesleepoverlays-system-single}

```csharp
public void UpdateSleepOverlays(float delta)
```

Advances all sleep overlay animations by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


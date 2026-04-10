---
title: Interface ITargetAnimationBackend
description: Defines backend operations used by TargetAnimationController.
---

# Interface ITargetAnimationBackend

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `ITargetAnimationBackend.cs`

Defines backend operations used by [TargetAnimationController](TargetAnimationController.md).

## Declaration

```csharp
internal interface ITargetAnimationBackend
```

## Inheritance

- [ITargetAnimationBackend](ITargetAnimationBackend.md)

## Properties

### HandlesOwnSleepPulse {#p-cuttheropedx-gamemain-itargetanimationbackend-handlesownsleeppulse}

```csharp
public bool HandlesOwnSleepPulse { get; }
```

Whether the backend handles the sleep breathing pulse internally (so GameScene should not apply its own scale/rotationCenter pulse).

### StartsWithGreeting {#p-cuttheropedx-gamemain-itargetanimationbackend-startswithgreeting}

```csharp
public bool StartsWithGreeting { get; }
```

Whether this skin plays the greeting animation on initialization instead of idle.

### TargetObject {#p-cuttheropedx-gamemain-itargetanimationbackend-targetobject}

```csharp
public GameObject TargetObject { get; }
```

Gets the primary Om Nom gameplay object.

## Methods

### DrawSleepOverlays() {#m-cuttheropedx-gamemain-itargetanimationbackend-drawsleepoverlays}

```csharp
public abstract void DrawSleepOverlays()
```

Draws all sleep overlay animations that are currently visible.

### GetSleepPulseDelaySeconds() {#m-cuttheropedx-gamemain-itargetanimationbackend-getsleeppulsedelayseconds}

```csharp
public abstract float GetSleepPulseDelaySeconds()
```

Gets the delay before night sleep pulse effects should begin.

Returns: Delay in seconds.

### GetTargetBaseScaleX() {#m-cuttheropedx-gamemain-itargetanimationbackend-gettargetbasescalex}

```csharp
public abstract float GetTargetBaseScaleX()
```

Gets the default horizontal scale that should be applied to the target object.

Returns: Default X scale for the target object.

### GetTargetBaseScaleY() {#m-cuttheropedx-gamemain-itargetanimationbackend-gettargetbasescaley}

```csharp
public abstract float GetTargetBaseScaleY()
```

Gets the default vertical scale that should be applied to the target object.

Returns: Default Y scale for the target object.

### Initialize(ITimelineDelegate timelineDelegate) {#m-cuttheropedx-gamemain-itargetanimationbackend-initialize-cuttheropedx-framework-visual-itimelinedelegate}

```csharp
public abstract void Initialize(ITimelineDelegate timelineDelegate)
```

Initializes backend timeline state and delegates.

Parameters:

- `timelineDelegate`: Timeline delegate receiving keyframe callbacks.

### IsPlaying(TargetAnimationState state) {#m-cuttheropedx-gamemain-itargetanimationbackend-isplaying-cuttheropedx-gamemain-targetanimationstate}

```csharp
public abstract bool IsPlaying(TargetAnimationState state)
```

Checks whether the requested target animation state is currently active.

Parameters:

- `state`: Animation state to query.

Returns: `true` if the state is active; otherwise `false`.

### Play(TargetAnimationState state) {#m-cuttheropedx-gamemain-itargetanimationbackend-play-cuttheropedx-gamemain-targetanimationstate}

```csharp
public abstract void Play(TargetAnimationState state)
```

Plays the requested target animation state.

Parameters:

- `state`: Animation state to play.

### PlayRandomIdleVariant(Func&lt;int, int, int&gt; rng) {#m-cuttheropedx-gamemain-itargetanimationbackend-playrandomidlevariant-system-func-system-int32-system-int32-system-int32}

```csharp
public abstract void PlayRandomIdleVariant(Func<int, int, int> rng)
```

Plays a backend-specific random idle variation.

Parameters:

- `rng`: Inclusive random function with signature `(min, max) => value`.

### ResetBlink() {#m-cuttheropedx-gamemain-itargetanimationbackend-resetblink}

```csharp
public abstract void ResetBlink()
```

Resets the blink animation to frame 0 without showing it.

### SetSleepOverlayVisible(bool visible) {#m-cuttheropedx-gamemain-itargetanimationbackend-setsleepoverlayvisible-system-boolean}

```csharp
public abstract void SetSleepOverlayVisible(bool visible)
```

Sets visibility and playback state of all sleep overlay animations.

Parameters:

- `visible`: `true` to show overlays; otherwise `false`.

### SyncAdditionalOverlayPosition(float x, float y) {#m-cuttheropedx-gamemain-itargetanimationbackend-syncadditionaloverlayposition-system-single-system-single}

```csharp
public abstract void SyncAdditionalOverlayPosition(float x, float y)
```

Updates the spawn position used by backend-specific non-sleep overlays.

Parameters:

- `x`: Target X position.
- `y`: Target Y position.

### SyncSleepOverlayPosition(float x, float y) {#m-cuttheropedx-gamemain-itargetanimationbackend-syncsleepoverlayposition-system-single-system-single}

```csharp
public abstract void SyncSleepOverlayPosition(float x, float y)
```

Moves all sleep overlay animations to the given position.

Parameters:

- `x`: Target X position.
- `y`: Target Y position.

### TriggerBlink() {#m-cuttheropedx-gamemain-itargetanimationbackend-triggerblink}

```csharp
public abstract void TriggerBlink()
```

Shows the blink overlay and plays it from frame 0.

### UpdateAdditionalOverlays(float delta) {#m-cuttheropedx-gamemain-itargetanimationbackend-updateadditionaloverlays-system-single}

```csharp
public abstract void UpdateAdditionalOverlays(float delta)
```

Advances backend-specific non-sleep overlays by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateSleepOverlays(float delta) {#m-cuttheropedx-gamemain-itargetanimationbackend-updatesleepoverlays-system-single}

```csharp
public abstract void UpdateSleepOverlays(float delta)
```

Advances all sleep overlay animations by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


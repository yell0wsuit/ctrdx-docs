---
title: Class Timeline
description: Manages playback of multi-track keyframe animations on a BaseElement.
---

# Class Timeline

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `Timeline.cs`

Manages playback of multi-track keyframe animations on a [BaseElement](BaseElement.md).

## Declaration

```csharp
internal sealed class Timeline : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [Timeline](Timeline.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### OnFinished {#f-cuttheropedx-framework-visual-timeline-onfinished}

```csharp
public Action OnFinished
```

Optional callback invoked when the timeline finishes.

### delegateTimelineDelegate {#f-cuttheropedx-framework-visual-timeline-delegatetimelinedelegate}

```csharp
public ITimelineDelegate delegateTimelineDelegate
```

Delegate notified on keyframe and timeline completion events.

### element {#f-cuttheropedx-framework-visual-timeline-element}

```csharp
public BaseElement element
```

Element this timeline animates.

### length {#f-cuttheropedx-framework-visual-timeline-length}

```csharp
private float length
```

Total duration of the timeline in seconds.

### loopsLimit {#f-cuttheropedx-framework-visual-timeline-loopslimit}

```csharp
public int loopsLimit
```

Number of remaining loops, or -1 for unlimited.

### maxKeyFrames {#f-cuttheropedx-framework-visual-timeline-maxkeyframes}

```csharp
private int maxKeyFrames
```

Maximum keyframes per track, set during initialization.

### state {#f-cuttheropedx-framework-visual-timeline-state}

```csharp
public Timeline.TimelineState state
```

Current playback state.

### time {#f-cuttheropedx-framework-visual-timeline-time}

```csharp
public float time
```

Current playback time in seconds.

### timelineDirReverse {#f-cuttheropedx-framework-visual-timeline-timelinedirreverse}

```csharp
public bool timelineDirReverse
```

Whether the timeline is currently playing in reverse.

### timelineLoopType {#f-cuttheropedx-framework-visual-timeline-timelinelooptype}

```csharp
private Timeline.LoopType timelineLoopType
```

Loop behavior for this timeline.

### tracks {#f-cuttheropedx-framework-visual-timeline-tracks}

```csharp
private readonly Track[] tracks
```

Array of tracks indexed by [TrackType](Track.md).

## Methods

### AddKeyFrame(KeyFrame k) {#m-cuttheropedx-framework-visual-timeline-addkeyframe-cuttheropedx-framework-visual-keyframe}

```csharp
public void AddKeyFrame(KeyFrame k)
```

Appends a keyframe to the appropriate track based on its type.

Parameters:

- `k`: Keyframe to add.

### DeactivateTracks() {#m-cuttheropedx-framework-visual-timeline-deactivatetracks}

```csharp
public void DeactivateTracks()
```

Resets all tracks to the inactive state.

### GetTrack(Track.TrackType tt) {#m-cuttheropedx-framework-visual-timeline-gettrack-cuttheropedx-framework-visual-track-tracktype}

```csharp
public Track GetTrack(Track.TrackType tt)
```

Returns the track for the specified type, or `null` if not created.

Parameters:

- `tt`: Track type to retrieve.

Returns: The matching track instance, or `null` when unavailable.

### InitWithMaxKeyFramesOnTrack(int m) {#m-cuttheropedx-framework-visual-timeline-initwithmaxkeyframesontrack-system-int32}

```csharp
public Timeline InitWithMaxKeyFramesOnTrack(int m)
```

Initializes the timeline with the specified maximum keyframes per track.

Parameters:

- `m`: Maximum number of keyframes per track.

Returns: The initialized timeline instance.

### JumpToTrackKeyFrame(int t, int k) {#m-cuttheropedx-framework-visual-timeline-jumptotrackkeyframe-system-int32-system-int32}

```csharp
public void JumpToTrackKeyFrame(int t, int k)
```

Jumps the timeline to a specific keyframe on a specific track.

Parameters:

- `t`: Track index.
- `k`: Keyframe index within the track.

### PauseTimeline() {#m-cuttheropedx-framework-visual-timeline-pausetimeline}

```csharp
public void PauseTimeline()
```

Pauses timeline playback at the current position.

### PlayTimeline() {#m-cuttheropedx-framework-visual-timeline-playtimeline}

```csharp
public void PlayTimeline()
```

Starts or resumes timeline playback from the beginning or current pause position.

### SetKeyFrameAt(KeyFrame k, int i) {#m-cuttheropedx-framework-visual-timeline-setkeyframeat-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void SetKeyFrameAt(KeyFrame k, int i)
```

Sets a keyframe at a specific index on the appropriate track, creating the track if needed.

Parameters:

- `k`: Keyframe to set.
- `i`: Index within the track.

### SetTimelineLoopType(Timeline.LoopType l) {#m-cuttheropedx-framework-visual-timeline-settimelinelooptype-cuttheropedx-framework-visual-timeline-looptype}

```csharp
public void SetTimelineLoopType(Timeline.LoopType l)
```

Sets the loop behavior for this timeline.

Parameters:

- `l`: Loop type.

### StopTimeline() {#m-cuttheropedx-framework-visual-timeline-stoptimeline}

```csharp
public void StopTimeline()
```

Stops playback and deactivates all tracks.

### UpdateTimeline(Timeline thiss, float delta) {#m-cuttheropedx-framework-visual-timeline-updatetimeline-cuttheropedx-framework-visual-timeline-system-single}

```csharp
public static void UpdateTimeline(Timeline thiss, float delta)
```

Advances the timeline by `delta` seconds, updating all tracks and handling looping.

Parameters:

- `thiss`: Timeline to update.
- `delta`: Elapsed time in seconds.


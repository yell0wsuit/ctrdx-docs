---
title: Class Track
description: A single animation track within a Timeline, interpolating a specific property (position, scale, rotation, skew, color, or action) across keyframes.
---

# Class Track

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `Track.cs`

A single animation track within a [Timeline](Timeline.md), interpolating a specific property (position, scale, rotation, skew, color, or action) across keyframes.

## Declaration

```csharp
internal sealed class Track : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [Track](Track.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### Track() {#m-cuttheropedx-framework-visual-track-ctor}

```csharp
public Track()
```

Initializes a new [Track](Track.md) with default keyframe state objects.

## Fields

### actionSets {#f-cuttheropedx-framework-visual-track-actionsets}

```csharp
public List<List<CTRAction>> actionSets
```

Collected action sets from action keyframes.

### currentStepAcceleration {#f-cuttheropedx-framework-visual-track-currentstepacceleration}

```csharp
public KeyFrame currentStepAcceleration
```

Per-second acceleration for ease-in/ease-out transitions.

### currentStepDestination {#f-cuttheropedx-framework-visual-track-currentstepdestination}

```csharp
public KeyFrame currentStepDestination
```

Destination keyframe values for Flash interpolation.

### currentStepPerSecond {#f-cuttheropedx-framework-visual-track-currentsteppersecond}

```csharp
public KeyFrame currentStepPerSecond
```

Per-second interpolation step for the current keyframe pair.

### currentStepSource {#f-cuttheropedx-framework-visual-track-currentstepsource}

```csharp
public KeyFrame currentStepSource
```

Source keyframe values for Flash interpolation.

### elementPrevState {#f-cuttheropedx-framework-visual-track-elementprevstate}

```csharp
public KeyFrame elementPrevState
```

Element state captured before the current keyframe began.

### endTime {#f-cuttheropedx-framework-visual-track-endtime}

```csharp
public float endTime
```

Cumulative time of the last keyframe.

### keyFrameDuration {#f-cuttheropedx-framework-visual-track-keyframeduration}

```csharp
public float keyFrameDuration
```

Total duration of the current keyframe transition.

### keyFrameElapsed {#f-cuttheropedx-framework-visual-track-keyframeelapsed}

```csharp
public float keyFrameElapsed
```

Elapsed time within the current keyframe transition.

### keyFrameTimeLeft {#f-cuttheropedx-framework-visual-track-keyframetimeleft}

```csharp
public float keyFrameTimeLeft
```

Time remaining until the next keyframe.

### keyFrames {#f-cuttheropedx-framework-visual-track-keyframes}

```csharp
public KeyFrame[] keyFrames
```

Array of keyframes.

### keyFramesCapacity {#f-cuttheropedx-framework-visual-track-keyframescapacity}

```csharp
public int keyFramesCapacity
```

Allocated capacity of the keyframes array.

### keyFramesCount {#f-cuttheropedx-framework-visual-track-keyframescount}

```csharp
public int keyFramesCount
```

Number of keyframes in this track.

### nextKeyFrame {#f-cuttheropedx-framework-visual-track-nextkeyframe}

```csharp
public int nextKeyFrame
```

Index of the next keyframe to process.

### overrun {#f-cuttheropedx-framework-visual-track-overrun}

```csharp
public float overrun
```

Time overrun past the current keyframe, carried to the next step.

### relative {#f-cuttheropedx-framework-visual-track-relative}

```csharp
public bool relative
```

Whether keyframe values are applied relative to the element's initial state.

### startTime {#f-cuttheropedx-framework-visual-track-starttime}

```csharp
public float startTime
```

Cumulative time of the first keyframe.

### state {#f-cuttheropedx-framework-visual-track-state}

```csharp
public Track.TrackState state
```

Current activation state of this track.

### t {#f-cuttheropedx-framework-visual-track-t}

```csharp
public Timeline t
```

Parent timeline this track belongs to.

### type {#f-cuttheropedx-framework-visual-track-type}

```csharp
public Track.TrackType type
```

Property type this track animates.

## Methods

### ApplyInterpolatedStep(float factor) {#m-cuttheropedx-framework-visual-track-applyinterpolatedstep-system-single}

```csharp
private void ApplyInterpolatedStep(float factor)
```

Applies an interpolated value to the element based on the given `factor` (0–1).

Parameters:

- `factor`: Interpolation factor in the range [0, 1].

### ComputeFlashInterpolationFactor(Track track, KeyFrame.TransitionType transition) {#m-cuttheropedx-framework-visual-track-computeflashinterpolationfactor-cuttheropedx-framework-visual-track-cuttheropedx-framework-visual-keyframe-transitiontype}

```csharp
private static float ComputeFlashInterpolationFactor(Track track, KeyFrame.TransitionType transition)
```

Computes the interpolation factor for Flash XML `transition` types.

Parameters:

- `track`: Track that provides elapsed and remaining keyframe timing.
- `transition`: Transition curve type.

Returns: A clamped interpolation factor in the range [0, 1].

### CopyTrackValue(KeyFrame src, KeyFrame dst) {#m-cuttheropedx-framework-visual-track-copytrackvalue-cuttheropedx-framework-visual-keyframe-cuttheropedx-framework-visual-keyframe}

```csharp
private void CopyTrackValue(KeyFrame src, KeyFrame dst)
```

Copies the track-specific values from one keyframe to another.

Parameters:

- `src`: Source keyframe.
- `dst`: Destination keyframe.

### EvaluateFlashEaseInOut(float progress) {#m-cuttheropedx-framework-visual-track-evaluateflasheaseinout-system-single}

```csharp
private static float EvaluateFlashEaseInOut(float progress)
```

Evaluates a Flash ease-in-out curve at the given `progress`.

Parameters:

- `progress`: Normalized progress in the range [0, 1].

Returns: Ease-in-out curve value in the range [0, 1].

### EvaluateFlashEaseMirrored(float progress) {#m-cuttheropedx-framework-visual-track-evaluateflasheasemirrored-system-single}

```csharp
private static float EvaluateFlashEaseMirrored(float progress)
```

Evaluates a Flash mirrored ease curve at the given `progress`.

Parameters:

- `progress`: Normalized progress in the range [0, 1].

Returns: Mirrored ease curve value in the range [0, 1].

### GetFrameTime(int f) {#m-cuttheropedx-framework-visual-track-getframetime-system-int32}

```csharp
public float GetFrameTime(int f)
```

Returns the cumulative time up to and including keyframe `f`.

Parameters:

- `f`: Keyframe index.

Returns: Cumulative time in seconds from the first keyframe through `f`.

### InitActionKeyFrameandTime(KeyFrame kf, float time) {#m-cuttheropedx-framework-visual-track-initactionkeyframeandtime-cuttheropedx-framework-visual-keyframe-system-single}

```csharp
public void InitActionKeyFrameandTime(KeyFrame kf, float time)
```

Initializes an action keyframe and sets the remaining `time`.

Parameters:

- `kf`: Action keyframe to apply.
- `time`: Time until the next keyframe.

### InitKeyFrameStepFromTowithTime(KeyFrame src, KeyFrame dst, float time) {#m-cuttheropedx-framework-visual-track-initkeyframestepfromtowithtime-cuttheropedx-framework-visual-keyframe-cuttheropedx-framework-visual-keyframe-system-single}

```csharp
private void InitKeyFrameStepFromTowithTime(KeyFrame src, KeyFrame dst, float time)
```

Initializes interpolation state between two keyframes over the given duration.

Parameters:

- `src`: Source keyframe.
- `dst`: Destination keyframe.
- `time`: Interpolation duration in seconds.

### InitWithTimelineTypeandMaxKeyFrames(Timeline timeline, Track.TrackType trackType, int m) {#m-cuttheropedx-framework-visual-track-initwithtimelinetypeandmaxkeyframes-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-track-tracktype-system-int32}

```csharp
public Track InitWithTimelineTypeandMaxKeyFrames(Timeline timeline, Track.TrackType trackType, int m)
```

Initializes the track with a `timeline`, type, and keyframe capacity.

Parameters:

- `timeline`: Parent timeline.
- `trackType`: Property type this track animates.
- `m`: Maximum number of keyframes.

Returns: The initialized track instance.

### IsFlashInterpolationTransition(KeyFrame.TransitionType transition) {#m-cuttheropedx-framework-visual-track-isflashinterpolationtransition-cuttheropedx-framework-visual-keyframe-transitiontype}

```csharp
private static bool IsFlashInterpolationTransition(KeyFrame.TransitionType transition)
```

Returns `true` if the `transition` type uses Flash XML interpolation.

Parameters:

- `transition`: Transition type to check.

Returns: `true` when the transition follows Flash interpolation rules.

### SetElementFromKeyFrame(KeyFrame kf) {#m-cuttheropedx-framework-visual-track-setelementfromkeyframe-cuttheropedx-framework-visual-keyframe}

```csharp
public void SetElementFromKeyFrame(KeyFrame kf)
```

Applies the keyframe values to the timeline's element.

Parameters:

- `kf`: Keyframe to apply.

### SetKeyFrameAt(KeyFrame k, int i) {#m-cuttheropedx-framework-visual-track-setkeyframeat-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void SetKeyFrameAt(KeyFrame k, int i)
```

Sets a keyframe at the specified index.

Parameters:

- `k`: Keyframe to set.
- `i`: Index in the keyframe array.

### SetKeyFrameFromElement(KeyFrame kf) {#m-cuttheropedx-framework-visual-track-setkeyframefromelement-cuttheropedx-framework-visual-keyframe}

```csharp
private void SetKeyFrameFromElement(KeyFrame kf)
```

Captures the element's current values into the given keyframe.

Parameters:

- `kf`: Keyframe receiving the current element values.

### UpdateActionTrack(Track thiss, float delta) {#m-cuttheropedx-framework-visual-track-updateactiontrack-cuttheropedx-framework-visual-track-system-single}

```csharp
public static void UpdateActionTrack(Track thiss, float delta)
```

Advances an action track by `delta` seconds, triggering keyframes as needed.

Parameters:

- `thiss`: Track to update.
- `delta`: Elapsed time in seconds.

### UpdateRange() {#m-cuttheropedx-framework-visual-track-updaterange}

```csharp
public void UpdateRange()
```

Recalculates [startTime](#f-cuttheropedx-framework-visual-track-starttime) and [endTime](#f-cuttheropedx-framework-visual-track-endtime) from the keyframes.

### UpdateTrack(Track thiss, float delta) {#m-cuttheropedx-framework-visual-track-updatetrack-cuttheropedx-framework-visual-track-system-single}

```csharp
public static void UpdateTrack(Track thiss, float delta)
```

Advances an interpolating track by `delta` seconds.

Parameters:

- `thiss`: Track to update.
- `delta`: Elapsed time in seconds.


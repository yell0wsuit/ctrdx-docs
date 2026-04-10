---
title: Interface ITimelineDelegate
description: Receives callbacks from a Timeline during playback.
---

# Interface ITimelineDelegate

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `TimelineDelegate.cs`

Receives callbacks from a [Timeline](Timeline.md) during playback.

## Declaration

```csharp
internal interface ITimelineDelegate
```

## Inheritance

- [ITimelineDelegate](ITimelineDelegate.md)

## Methods

### TimelineFinished(Timeline t) {#m-cuttheropedx-framework-visual-itimelinedelegate-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public abstract void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-framework-visual-itimelinedelegate-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public abstract void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.


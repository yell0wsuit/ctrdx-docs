---
title: Class Processing
description: Full-screen processing overlay that blocks input while fading in or out.
---

# Class Processing

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Processing.cs`

Full-screen processing overlay that blocks input while fading in or out.

## Declaration

```csharp
internal sealed class Processing : RectangleElement, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [RectangleElement](../Framework/Visual/RectangleElement.md)
- [Processing](Processing.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Methods

### InitWithLoading(bool loading) {#m-cuttheropedx-gamemain-processing-initwithloading-system-boolean}

```csharp
public Processing InitWithLoading(bool loading)
```

Initializes the processing overlay.

Parameters:

- `loading`: Whether to include the spinning loading indicator and processing text.

Returns: The initialized processing overlay.

### OnTouchDownXY(float tx, float ty) {#m-cuttheropedx-gamemain-processing-ontouchdownxy-system-single-system-single}

```csharp
public override bool OnTouchDownXY(float tx, float ty)
```

Dispatches a touch-down event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchMoveXY(float tx, float ty) {#m-cuttheropedx-gamemain-processing-ontouchmovexy-system-single-system-single}

```csharp
public override bool OnTouchMoveXY(float tx, float ty)
```

Dispatches a touch-move event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchUpXY(float tx, float ty) {#m-cuttheropedx-gamemain-processing-ontouchupxy-system-single-system-single}

```csharp
public override bool OnTouchUpXY(float tx, float ty)
```

Dispatches a touch-up event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### PlayTimeline(int t) {#m-cuttheropedx-gamemain-processing-playtimeline-system-int32}

```csharp
public override void PlayTimeline(int t)
```

Starts playback of the timeline at slot `t`, stopping any active timeline.

Parameters:

- `t`: Slot ID of the timeline to play.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-processing-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-processing-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.


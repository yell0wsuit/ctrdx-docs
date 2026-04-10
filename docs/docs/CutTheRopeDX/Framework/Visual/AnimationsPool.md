---
title: Class AnimationsPool
description: Manages a pool of child animations, automatically removing them when their timelines or particles finish.
---

# Class AnimationsPool

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `AnimationsPool.cs`

Manages a pool of child animations, automatically removing them when their timelines or particles finish.

## Declaration

```csharp
internal sealed class AnimationsPool : BaseElement, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [AnimationsPool](AnimationsPool.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](ITimelineDelegate.md)

## Fields

### removeList {#f-cuttheropedx-framework-visual-animationspool-removelist}

```csharp
private List<BaseElement> removeList
```

Elements scheduled for removal on the next update.

## Methods

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-animationspool-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-framework-visual-animationspool-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### ParticlesFinished(Particles p) {#m-cuttheropedx-framework-visual-animationspool-particlesfinished-cuttheropedx-framework-visual-particles}

```csharp
public void ParticlesFinished(Particles p)
```

Called when a particle system finishes; schedules it for removal.

Parameters:

- `p`: Particle system that finished.

### TimelineFinished(Timeline t) {#m-cuttheropedx-framework-visual-animationspool-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-framework-visual-animationspool-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.

### Update(float delta) {#m-cuttheropedx-framework-visual-animationspool-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


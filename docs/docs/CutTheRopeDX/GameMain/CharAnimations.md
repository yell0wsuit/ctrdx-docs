---
title: Class CharAnimations
description: Om Nom character animation container that switches between the base texture and named child animations.
---

# Class CharAnimations

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CharAnimations.cs`

Om Nom character animation container that switches between the base texture and named child animations.

## Declaration

```csharp
internal sealed class CharAnimations : GameObject
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [GameObject](../Framework/Helpers/GameObject.md)
- [CharAnimations](CharAnimations.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### animationNameToIndex {#f-cuttheropedx-gamemain-charanimations-animationnametoindex}

```csharp
private Dictionary<string, int> animationNameToIndex
```

Maps animation names to their layer indexes.

### animations {#f-cuttheropedx-gamemain-charanimations-animations}

```csharp
private List<Animation> animations
```

Animation layers managed by this character animation container.

### nextAnimationIndex {#f-cuttheropedx-gamemain-charanimations-nextanimationindex}

```csharp
private int nextAnimationIndex
```

Next available animation layer index.

## Methods

### AddAnimationWithIDDelayLoopFirstLast(string resourceName, int aid, float d, Timeline.LoopType l, int s, int e) {#m-cuttheropedx-gamemain-charanimations-addanimationwithiddelayloopfirstlast-system-string-system-int32-system-single-cuttheropedx-framework-visual-timeline-looptype-system-int32-system-int32}

```csharp
public void AddAnimationWithIDDelayLoopFirstLast(string resourceName, int aid, float d, Timeline.LoopType l, int s, int e)
```

Adds a frame animation to the base animation or a named child animation.

Parameters:

- `resourceName`: Texture resource name that identifies the target animation.
- `aid`: Timeline ID to assign to the animation.
- `d`: Delay between animation frames, in seconds.
- `l`: Loop behavior for the timeline.
- `s`: First frame index in the animation range.
- `e`: Last frame index in the animation range.

### AddImage(string resourceName) {#m-cuttheropedx-gamemain-charanimations-addimage-system-string}

```csharp
public void AddImage(string resourceName)
```

Adds a named child Om Nom character animation image to the container.

Parameters:

- `resourceName`: Texture resource name for the child animation.

### CharAnimations_create(CTRTexture2D t) {#m-cuttheropedx-gamemain-charanimations-charanimations-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
private static CharAnimations CharAnimations_create(CTRTexture2D t)
```

Creates an Om Nom character animation container from a texture.

Parameters:

- `t`: Texture used by the Om Nom character animation container.

Returns: The initialized Om Nom character animation container.

### CharAnimations_createWithResID(string resourceName) {#m-cuttheropedx-gamemain-charanimations-charanimations-createwithresid-system-string}

```csharp
public static CharAnimations CharAnimations_createWithResID(string resourceName)
```

Creates an Om Nom character animation container from a texture resource name.

Parameters:

- `resourceName`: Texture resource name to load.

Returns: The initialized Om Nom character animation container.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-charanimations-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### GetAnimation(string resourceName) {#m-cuttheropedx-gamemain-charanimations-getanimation-system-string}

```csharp
public Animation GetAnimation(string resourceName)
```

Gets the base animation or a named child animation by texture resource name.

Parameters:

- `resourceName`: Texture resource name that identifies the animation.

Returns: The matching animation, or `null` when no matching child animation exists.

### PlayAnimationtimeline(string resourceName, int t) {#m-cuttheropedx-gamemain-charanimations-playanimationtimeline-system-string-system-int32}

```csharp
public void PlayAnimationtimeline(string resourceName, int t)
```

Plays a timeline on the base animation or a named child animation.

Parameters:

- `resourceName`: Texture resource name that identifies the animation to play.
- `t`: Timeline ID to play.

### PlayTimeline(int t) {#m-cuttheropedx-gamemain-charanimations-playtimeline-system-int32}

```csharp
public override void PlayTimeline(int t)
```

Starts playback of the timeline at slot `t`, stopping any active timeline.

Parameters:

- `t`: Slot ID of the timeline to play.

### SwitchToAnimationatEndOfAnimationDelay(string resourceName2, int a2, string resourceName1, int a1, float d) {#m-cuttheropedx-gamemain-charanimations-switchtoanimationatendofanimationdelay-system-string-system-int32-system-string-system-int32-system-single}

```csharp
public void SwitchToAnimationatEndOfAnimationDelay(string resourceName2, int a2, string resourceName1, int a1, float d)
```

Adds an action keyframe that switches from one animation to another after a delay.

Parameters:

- `resourceName2`: Texture resource name for the destination animation.
- `a2`: Timeline ID to play on the destination animation.
- `resourceName1`: Texture resource name for the source animation.
- `a1`: Timeline ID on the source animation that receives the switch action.
- `d`: Delay before switching animations, in seconds.


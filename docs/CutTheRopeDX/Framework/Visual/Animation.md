---
title: Class Animation
description: An Image that supports frame-based animation via timeline-driven quad switching.
---

# Class Animation

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `Animation.cs`

An [Image](Image.md) that supports frame-based animation via timeline-driven quad switching.

## Declaration

```csharp
internal class Animation : Image
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Image](Image.md)
- [Animation](Animation.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [CandyInGhostBubbleAnimation](../../GameMain/CandyInGhostBubbleAnimation.md)
- [CharAnimation](../../GameMain/CharAnimation.md)
- [GameObject](../Helpers/GameObject.md)

## Methods

### AddAnimationDelayLoopFirstLast(float delay, Timeline.LoopType loopType, int start, int end) {#m-cuttheropedx-framework-visual-animation-addanimationdelayloopfirstlast-system-single-cuttheropedx-framework-visual-timeline-looptype-system-int32-system-int32}

```csharp
public int AddAnimationDelayLoopFirstLast(float delay, Timeline.LoopType loopType, int start, int end)
```

Adds a sequential frame animation and returns its auto-assigned ID.

Parameters:

- `delay`: Delay in seconds between frames.
- `loopType`: Loop behavior for the animation.
- `start`: First quad index in the sequence.
- `end`: Last quad index in the sequence.

Returns: The auto-assigned timeline ID.

### AddAnimationWithDelayLoopedCountSequence(float delay, Timeline.LoopType loopType, int count, int start, List&lt;int&gt; argumentList) {#m-cuttheropedx-framework-visual-animation-addanimationwithdelayloopedcountsequence-system-single-cuttheropedx-framework-visual-timeline-looptype-system-int32-system-int32-system-collections-generic-list-system-int32}

```csharp
public virtual int AddAnimationWithDelayLoopedCountSequence(float delay, Timeline.LoopType loopType, int count, int start, List<int> argumentList)
```

Adds an animation with a frame sequence and returns its auto-assigned ID.

Parameters:

- `delay`: Delay in seconds between frames.
- `loopType`: Loop behavior for the animation.
- `count`: Number of frames in the animation.
- `start`: First quad index in the sequence.
- `argumentList`: List of quad indices defining the frame order.

Returns: The auto-assigned timeline ID.

### AddAnimationWithIDDelayLoopCountFirstLastArgumentList(int animationId, float delay, Timeline.LoopType loopType, int count, int start, int end) {#m-cuttheropedx-framework-visual-animation-addanimationwithiddelayloopcountfirstlastargumentlist-system-int32-system-single-cuttheropedx-framework-visual-timeline-looptype-system-int32-system-int32-system-int32}

```csharp
public virtual void AddAnimationWithIDDelayLoopCountFirstLastArgumentList(int animationId, float delay, Timeline.LoopType loopType, int count, int start, int end)
```

Adds a sequential frame animation with explicit frame `count`.

Parameters:

- `animationId`: Timeline slot ID for the animation.
- `delay`: Delay in seconds between frames.
- `loopType`: Loop behavior for the animation.
- `count`: Number of frames in the animation.
- `start`: First quad index in the sequence.
- `end`: Last quad index in the sequence.

### AddAnimationWithIDDelayLoopCountFirstLastArgumentList(int animationId, float delay, Timeline.LoopType loopType, int count, int start, int end, List&lt;int&gt; argumentList) {#m-cuttheropedx-framework-visual-animation-addanimationwithiddelayloopcountfirstlastargumentlist-system-int32-system-single-cuttheropedx-framework-visual-timeline-looptype-system-int32-system-int32-system-int32-system-collections-generic-list-system-int32}

```csharp
public virtual void AddAnimationWithIDDelayLoopCountFirstLastArgumentList(int animationId, float delay, Timeline.LoopType loopType, int count, int start, int end, List<int> argumentList)
```

Adds a frame animation with an explicit frame sequence list and frame range.

Parameters:

- `animationId`: Timeline slot ID for the animation.
- `delay`: Delay in seconds between frames.
- `loopType`: Loop behavior for the animation.
- `count`: Number of frames in the animation.
- `start`: First quad index in the sequence.
- `end`: Last quad index in the sequence.
- `argumentList`: List of quad indices defining the frame order.

### AddAnimationWithIDDelayLoopCountSequence(int animationId, float delay, Timeline.LoopType loopType, int count, int start, List&lt;int&gt; argumentList) {#m-cuttheropedx-framework-visual-animation-addanimationwithiddelayloopcountsequence-system-int32-system-single-cuttheropedx-framework-visual-timeline-looptype-system-int32-system-int32-system-collections-generic-list-system-int32}

```csharp
public virtual void AddAnimationWithIDDelayLoopCountSequence(int animationId, float delay, Timeline.LoopType loopType, int count, int start, List<int> argumentList)
```

Adds an animation with an explicit frame sequence list.

Parameters:

- `animationId`: Timeline slot ID for the animation.
- `delay`: Delay in seconds between frames.
- `loopType`: Loop behavior for the animation.
- `count`: Number of frames in the animation.
- `start`: First quad index in the sequence.
- `argumentList`: List of quad indices defining the frame order.

### AddAnimationWithIDDelayLoopFirstLast(int animationId, float delay, Timeline.LoopType loopType, int start, int end) {#m-cuttheropedx-framework-visual-animation-addanimationwithiddelayloopfirstlast-system-int32-system-single-cuttheropedx-framework-visual-timeline-looptype-system-int32-system-int32}

```csharp
public virtual void AddAnimationWithIDDelayLoopFirstLast(int animationId, float delay, Timeline.LoopType loopType, int start, int end)
```

Adds a sequential frame animation from quad `start` to `end`.

Parameters:

- `animationId`: Timeline slot ID for the animation.
- `delay`: Delay in seconds between frames.
- `loopType`: Loop behavior for the animation.
- `start`: First quad index in the sequence.
- `end`: Last quad index in the sequence.

### Animation_create(CTRTexture2D texture) {#m-cuttheropedx-framework-visual-animation-animation-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public static Animation Animation_create(CTRTexture2D texture)
```

Creates an animation from the specified `texture`.

Parameters:

- `texture`: Texture to create the animation from.

Returns: A new animation initialized with `texture`.

### Animation_createWithResID(string resourceName) {#m-cuttheropedx-framework-visual-animation-animation-createwithresid-system-string}

```csharp
public static Animation Animation_createWithResID(string resourceName)
```

Creates an animation using a texture resource name.

Parameters:

- `resourceName`: Texture resource name.

Returns: A new animation initialized from the specified texture resource.

### JumpTo(int index) {#m-cuttheropedx-framework-visual-animation-jumpto-system-int32}

```csharp
public void JumpTo(int index)
```

Jumps the current timeline's action track to the specified keyframe `index`.

Parameters:

- `index`: Keyframe index to jump to.

### SetActionTargetParamSubParamAtIndexforAnimation(string action, BaseElement target, int param, int subParam, int keyframeIndex, int animationId) {#m-cuttheropedx-framework-visual-animation-setactiontargetparamsubparamatindexforanimation-system-string-cuttheropedx-framework-visual-baseelement-system-int32-system-int32-system-int32-system-int32}

```csharp
public virtual void SetActionTargetParamSubParamAtIndexforAnimation(string action, BaseElement target, int param, int subParam, int keyframeIndex, int animationId)
```

Appends an `action` to an existing keyframe in the specified animation.

Parameters:

- `action`: Action name to add.
- `target`: Target element for the action.
- `param`: Primary action parameter.
- `subParam`: Secondary action parameter.
- `keyframeIndex`: Index of the keyframe to append to.
- `animationId`: Timeline slot ID of the animation.

### SetDelayatIndexforAnimation(float delay, int keyframeIndex, int animationId) {#m-cuttheropedx-framework-visual-animation-setdelayatindexforanimation-system-single-system-int32-system-int32}

```csharp
public void SetDelayatIndexforAnimation(float delay, int keyframeIndex, int animationId)
```

Sets the time offset of a keyframe in the specified animation.

Parameters:

- `delay`: New delay in seconds.
- `keyframeIndex`: Index of the keyframe to modify.
- `animationId`: Timeline slot ID of the animation.

### SetPauseAtIndexforAnimation(int keyframeIndex, int animationId) {#m-cuttheropedx-framework-visual-animation-setpauseatindexforanimation-system-int32-system-int32}

```csharp
public virtual void SetPauseAtIndexforAnimation(int keyframeIndex, int animationId)
```

Inserts a pause action at the specified keyframe index in the given animation.

Parameters:

- `keyframeIndex`: Index of the keyframe to add the pause to.
- `animationId`: Timeline slot ID of the animation.

### SwitchToAnimationatEndOfAnimationDelay(int targetAnimationId, int sourceAnimationId, float delay) {#m-cuttheropedx-framework-visual-animation-switchtoanimationatendofanimationdelay-system-int32-system-int32-system-single}

```csharp
public virtual void SwitchToAnimationatEndOfAnimationDelay(int targetAnimationId, int sourceAnimationId, float delay)
```

Appends a keyframe to `sourceAnimationId` that switches to `targetAnimationId` after `delay`.

Parameters:

- `targetAnimationId`: Animation to switch to.
- `sourceAnimationId`: Animation to append the switch keyframe to.
- `delay`: Delay in seconds before switching.


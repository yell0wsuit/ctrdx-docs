---
title: Class WaterElement
description: The main water body element.
---

# Class WaterElement

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `WaterElement.cs`

The main water body element.

## Declaration

```csharp
internal sealed class WaterElement : Image, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [WaterElement](WaterElement.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Fields

### aniPool {#f-cuttheropedx-gamemain-waterelement-anipool}

```csharp
private AnimationsPool aniPool
```

Animation pool used for water particles and particle completion callbacks.

### backTileSize {#f-cuttheropedx-gamemain-waterelement-backtilesize}

```csharp
private Vector backTileSize
```

Size of the back water tile.

### bottomShadowSize {#f-cuttheropedx-gamemain-waterelement-bottomshadowsize}

```csharp
private Vector bottomShadowSize
```

Size of the bottom shadow tile.

### bubbles {#f-cuttheropedx-gamemain-waterelement-bubbles}

```csharp
private WaterBubbles bubbles
```

Bubble particle system clipped inside the water area.

### dd {#f-cuttheropedx-gamemain-waterelement-dd}

```csharp
private DelayedDispatcher dd
```

Dispatcher used to restart light timelines after randomized delays.

### isReleasing {#f-cuttheropedx-gamemain-waterelement-isreleasing}

```csharp
private bool isReleasing
```

Whether this water element is being released and should stop drawing or updating.

### scissorElement {#f-cuttheropedx-gamemain-waterelement-scissorelement}

```csharp
private ScissorElement scissorElement
```

Scissor element used to clip the bubble particle system.

### spotLight {#f-cuttheropedx-gamemain-waterelement-spotlight}

```csharp
private Image spotLight
```

Randomly repositioned spotlight element.

### topShadowSize {#f-cuttheropedx-gamemain-waterelement-topshadowsize}

```csharp
private Vector topShadowSize
```

Size of the top shadow tile.

### topTileSize {#f-cuttheropedx-gamemain-waterelement-toptilesize}

```csharp
private Vector topTileSize
```

Size of the front water tile.

### xOffsetBack {#f-cuttheropedx-gamemain-waterelement-xoffsetback}

```csharp
private float xOffsetBack
```

Horizontal scroll offset for the back water tile.

### xOffsetTop {#f-cuttheropedx-gamemain-waterelement-xoffsettop}

```csharp
private float xOffsetTop
```

Horizontal scroll offset for the front water tile.

## Methods

### AddParticlesAtXY(float tx, float ty) {#m-cuttheropedx-gamemain-waterelement-addparticlesatxy-system-single-system-single}

```csharp
public void AddParticlesAtXY(float tx, float ty)
```

Emits bubble particles at the specified position.

Parameters:

- `tx`: The X position to spawn particles at.
- `ty`: The Y position to spawn particles at.

### AddWaterParticlesAtXY(float tx, float ty) {#m-cuttheropedx-gamemain-waterelement-addwaterparticlesatxy-system-single-system-single}

```csharp
public void AddWaterParticlesAtXY(float tx, float ty)
```

Emits water drop particles at the specified position.

Parameters:

- `tx`: The X position to spawn water drops at.
- `ty`: The Y position to spawn water drops at.

### CreateLightWithXPosquadalphaColordelegate(float x, int quad, RGBAColor color, ITimelineDelegate d) {#m-cuttheropedx-gamemain-waterelement-createlightwithxposquadalphacolordelegate-system-single-system-int32-cuttheropedx-framework-rgbacolor-cuttheropedx-framework-visual-itimelinedelegate}

```csharp
private static Image CreateLightWithXPosquadalphaColordelegate(float x, int quad, RGBAColor color, ITimelineDelegate d)
```

The water light effect that shines through water

Parameters:

- `x`: The X axis position
- `quad`: The quad number of the water light (water_tile.json)
- `color`: Color to use
- `d`: The timeline delegate that receives animation callbacks.

Returns: The configured light [Image](../Framework/Visual/Image.md) with pulse and delayed-start timelines.

### CreateWithWidthHeight(float w, float h) {#m-cuttheropedx-gamemain-waterelement-createwithwidthheight-system-single-system-single}

```csharp
public static WaterElement CreateWithWidthHeight(float w, float h)
```

Creates a new [WaterElement](WaterElement.md) with the specified dimensions.

Parameters:

- `w`: The width of the water element.
- `h`: The height of the water element.

Returns: A new [WaterElement](WaterElement.md), or `null` if texture loading fails.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-waterelement-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-gamemain-waterelement-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### DrawBack() {#m-cuttheropedx-gamemain-waterelement-drawback}

```csharp
public void DrawBack()
```

Draws the back layer of the water (bottom shadow and back tile).

### DrawFront(float cameraY) {#m-cuttheropedx-gamemain-waterelement-drawfront-system-single}

```csharp
public void DrawFront(float cameraY)
```

Draws the front layer of the water (top shadow, bubbles with additive blending, and top tile).

Parameters:

- `cameraY`: The camera Y offset used to adjust the scissor region.

### InitWithWidthHeight(float w, float h) {#m-cuttheropedx-gamemain-waterelement-initwithwidthheight-system-single-system-single}

```csharp
public WaterElement InitWithWidthHeight(float w, float h)
```

Initializes the water element with the specified dimensions, setting up tiles, lights, bubbles, and reveal animation.

Parameters:

- `w`: The width of the water element.
- `h`: The height of the water element.

Returns: This instance if initialization succeeds; otherwise, `null`.

### IsWaterTextureAvailable() {#m-cuttheropedx-gamemain-waterelement-iswatertextureavailable}

```csharp
public static bool IsWaterTextureAvailable()
```

Checks whether the water texture resource is available.

Returns: `true` if the water texture can be loaded; otherwise, `false`.

### PrepareToRelease() {#m-cuttheropedx-gamemain-waterelement-preparetorelease}

```csharp
public void PrepareToRelease()
```

Marks this water element for release, cancelling all pending dispatches and suppressing further drawing/updating.

### Selector_playFirstTimeline(FrameworkTypes param) {#m-cuttheropedx-gamemain-waterelement-selector-playfirsttimeline-cuttheropedx-framework-frameworktypes}

```csharp
private static void Selector_playFirstTimeline(FrameworkTypes param)
```

Callback that plays the first timeline on the given element, used as a delayed dispatch selector.

Parameters:

- `param`: The element to play the timeline on.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-waterelement-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-waterelement-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.

### Update(float delta) {#m-cuttheropedx-gamemain-waterelement-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


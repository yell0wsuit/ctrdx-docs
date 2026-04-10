---
title: Class SteamTube
description: Steam tube object that emits animated steam puffs based on its valve state.
---

# Class SteamTube

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `SteamTube.cs`

Steam tube object that emits animated steam puffs based on its valve state.

## Declaration

```csharp
internal sealed class SteamTube : BaseElement, ITimelineDelegate, ITransporterItem, ITransporterBindAware, ITransporterScaleAware
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [SteamTube](SteamTube.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)
- [ITransporterItem](ITransporterItem.md)
- [ITransporterBindAware](ITransporterBindAware.md)
- [ITransporterScaleAware](ITransporterScaleAware.md)

## Constructors

### SteamTube() {#m-cuttheropedx-gamemain-steamtube-ctor}

```csharp
public SteamTube()
```

Initializes a new steam tube with default state and an empty delayed dispatcher.

## Fields

### dd {#f-cuttheropedx-gamemain-steamtube-dd}

```csharp
private DelayedDispatcher dd
```

Dispatcher for delayed puff animation start callbacks.

### heightScale {#f-cuttheropedx-gamemain-steamtube-heightscale}

```csharp
private float heightScale
```

Scale factor applied to tube dimensions and steam heights.

### phase {#f-cuttheropedx-gamemain-steamtube-phase}

```csharp
private float phase
```

Elapsed time used for sine wave modulation of steam height.

### steamBack {#f-cuttheropedx-gamemain-steamtube-steamback}

```csharp
private BaseElement steamBack
```

Container for back-layer steam puff animations.

### steamFront {#f-cuttheropedx-gamemain-steamtube-steamfront}

```csharp
private BaseElement steamFront
```

Container for front-layer steam puff animations.

### steamState {#f-cuttheropedx-gamemain-steamtube-steamstate}

```csharp
public int steamState
```

Current valve state: 0 = low, 1 = medium, 2 = high.

### tube {#f-cuttheropedx-gamemain-steamtube-tube}

```csharp
private Image tube
```

Tube body image.

### valve {#f-cuttheropedx-gamemain-steamtube-valve}

```csharp
private Image valve
```

Valve knob image that rotates on touch.

## Properties

### BindPoint {#p-cuttheropedx-gamemain-steamtube-bindpoint}

```csharp
public Vector BindPoint { get; }
```

World-space point where the item attaches to the transporter.

### CollisionRadius {#p-cuttheropedx-gamemain-steamtube-collisionradius}

```csharp
public float CollisionRadius { get; }
```

Collision radius used for transporter interaction.

### IsDrawnByTransporter {#p-cuttheropedx-gamemain-steamtube-isdrawnbytransporter}

```csharp
public bool IsDrawnByTransporter { get; set; }
```

Whether the transporter is responsible for drawing this item.

### MaxScale {#p-cuttheropedx-gamemain-steamtube-maxscale}

```csharp
public float MaxScale { get; }
```

Maximum scale applied while on the transporter.

### MinScale {#p-cuttheropedx-gamemain-steamtube-minscale}

```csharp
public float MinScale { get; }
```

Minimum scale applied while on the transporter.

### PositionOnTransporter {#p-cuttheropedx-gamemain-steamtube-positionontransporter}

```csharp
public float PositionOnTransporter { get; set; }
```

Normalized position along the transporter path (0–1).

### TransporterScale {#p-cuttheropedx-gamemain-steamtube-transporterscale}

```csharp
public float TransporterScale { get; set; }
```

Current scale factor applied by the transporter.

## Methods

### AdjustSteam() {#m-cuttheropedx-gamemain-steamtube-adjuststeam}

```csharp
private void AdjustSteam()
```

Rebuilds all steam puff animations for the current valve state.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-steamtube-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### DrawBack() {#m-cuttheropedx-gamemain-steamtube-drawback}

```csharp
public void DrawBack()
```

Draws the tube body, valve, and back-layer steam puffs.

### DrawFront() {#m-cuttheropedx-gamemain-steamtube-drawfront}

```csharp
public void DrawFront()
```

Draws the front-layer steam puffs.

### GetCurrentHeight() {#m-cuttheropedx-gamemain-steamtube-getcurrentheight}

```csharp
private float GetCurrentHeight()
```

Gets base steam height for current valve state (0=low, 1=medium, 2=high). PC vs Windows Phone: Returns base heights (32.9f/94f/141f) scaled by heightScale. Windows Phone equivalent returns unscaled values.

Returns: The base steam height in world units.

### GetCurrentHeightModulated() {#m-cuttheropedx-gamemain-steamtube-getcurrentheightmodulated}

```csharp
public float GetCurrentHeightModulated()
```

Gets current steam height with sine wave modulation for pulsing effect.

Returns: The modulated steam height in world units.

### GetHeightScale() {#m-cuttheropedx-gamemain-steamtube-getheightscale}

```csharp
public float GetHeightScale()
```

Gets the height scale factor applied to this steam tube.

Returns: The height scale multiplier.

### InitWithPositionAngle(Vector position, float angle, float heightScale = 1) {#m-cuttheropedx-gamemain-steamtube-initwithpositionangle-cuttheropedx-framework-core-vector-system-single-system-single}

```csharp
public SteamTube InitWithPositionAngle(Vector position, float angle, float heightScale = 1)
```

Initializes steam tube with position, rotation angle, and height scale.

Parameters:

- `position`: World-space position of the tube base.
- `angle`: Rotation angle in degrees.
- `heightScale`: Scale factor for steam tube dimensions. Typically 3 for PC (vs 1 on WP). Scales: tube width (10f), valve position (27f), touch offset (28f), collision radius (17.5f), base heights (32.9f/94f/141f), and vertical offset (1f). Does NOT scale: sine wave modulation amplitude (always 1f).

Returns: This instance for chaining.

### OnTouchDownXY(float tx, float ty) {#m-cuttheropedx-gamemain-steamtube-ontouchdownxy-system-single-system-single}

```csharp
public override bool OnTouchDownXY(float tx, float ty)
```

Dispatches a touch-down event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### SetBindPoint(Vector point) {#m-cuttheropedx-gamemain-steamtube-setbindpoint-cuttheropedx-framework-core-vector}

```csharp
public void SetBindPoint(Vector point)
```

Sets the bind point to `point`.

Parameters:

- `point`: New bind point.

### SetTransporterScale(float scale) {#m-cuttheropedx-gamemain-steamtube-settransporterscale-system-single}

```csharp
public void SetTransporterScale(float scale)
```

Applies a custom transporter scale to the object.

Parameters:

- `scale`: Scale factor to apply.

### StartPuffFloatingAndAnimation(FrameworkTypes param) {#m-cuttheropedx-gamemain-steamtube-startpufffloatingandanimation-cuttheropedx-framework-frameworktypes}

```csharp
private void StartPuffFloatingAndAnimation(FrameworkTypes param)
```

Delayed callback that enables a puff element and starts its float and sprite animation.

Parameters:

- `param`: The [BaseElement](../Framework/Visual/BaseElement.md) wrapping the puff animation.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-steamtube-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-steamtube-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.

### Update(float delta) {#m-cuttheropedx-gamemain-steamtube-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### WillBind() {#m-cuttheropedx-gamemain-steamtube-willbind}

```csharp
public void WillBind()
```

Called right before the object is bound to a transporter.


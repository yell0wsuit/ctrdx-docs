---
title: Class Spikes
description: Spike hazard that can be static, rotatable by a button group, or electrified with timed on/off cycles.
---

# Class Spikes

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Spikes.cs`

Spike hazard that can be static, rotatable by a button group, or electrified with timed on/off cycles.

## Declaration

```csharp
internal sealed class Spikes : CTRGameObject, ITimelineDelegate, IButtonDelegation
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [GameObject](../Framework/Helpers/GameObject.md)
- [CTRGameObject](CTRGameObject.md)
- [Spikes](Spikes.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)
- [IButtonDelegation](../Framework/Visual/IButtonDelegation.md)

## Fields

### ButtonFirstQuad {#f-cuttheropedx-gamemain-spikes-buttonfirstquad}

```csharp
private const int ButtonFirstQuad
```

First texture quad index for rotate button variants.

### ButtonFramesPerToggle {#f-cuttheropedx-gamemain-spikes-buttonframespertoggle}

```csharp
private const int ButtonFramesPerToggle
```

Number of button frames per toggle group.

### ButtonPressedQuadOffset {#f-cuttheropedx-gamemain-spikes-buttonpressedquadoffset}

```csharp
private const int ButtonPressedQuadOffset
```

Offset from a button up quad to its pressed quad.

### ElectrodesWidthIndex {#f-cuttheropedx-gamemain-spikes-electrodeswidthindex}

```csharp
private const int ElectrodesWidthIndex
```

Width/type index used by the electrified spike variant.

### RotatableSpikeFirstQuad {#f-cuttheropedx-gamemain-spikes-rotatablespikefirstquad}

```csharp
private const int RotatableSpikeFirstQuad
```

First texture quad index for rotatable spike variants.

### StaticSpikeFirstQuad {#f-cuttheropedx-gamemain-spikes-staticspikefirstquad}

```csharp
private const int StaticSpikeFirstQuad
```

First texture quad index for static spike variants.

### angle {#f-cuttheropedx-gamemain-spikes-angle}

```csharp
public float angle
```

Current spike angle in radians.

### b1 {#f-cuttheropedx-gamemain-spikes-b1}

```csharp
public Vector b1
```

Bottom-left rotated collision point.

### b2 {#f-cuttheropedx-gamemain-spikes-b2}

```csharp
public Vector b2
```

Bottom-right rotated collision point.

### delegateRotateAllSpikesWithID {#f-cuttheropedx-gamemain-spikes-delegaterotateallspikeswithid}

```csharp
public Spikes.rotateAllSpikesWithID delegateRotateAllSpikesWithID
```

Delegate invoked to rotate all spikes in the same toggle group.

### electro {#f-cuttheropedx-gamemain-spikes-electro}

```csharp
public bool electro
```

Whether these spikes use the electrified variant.

### electroOn {#f-cuttheropedx-gamemain-spikes-electroon}

```csharp
public bool electroOn
```

Whether electrified spikes are currently on.

### electroTimer {#f-cuttheropedx-gamemain-spikes-electrotimer}

```csharp
public float electroTimer
```

Timer for the current electrified spike on/off phase.

### initialDelay {#f-cuttheropedx-gamemain-spikes-initialdelay}

```csharp
public float initialDelay
```

Initial delay before the first electrified spike state change.

### offTime {#f-cuttheropedx-gamemain-spikes-offtime}

```csharp
public float offTime
```

Duration electrified spikes remain off.

### onTime {#f-cuttheropedx-gamemain-spikes-ontime}

```csharp
public float onTime
```

Duration electrified spikes remain on.

### origRotation {#f-cuttheropedx-gamemain-spikes-origrotation}

```csharp
private float origRotation
```

Original rotation in degrees.

### rotateButton {#f-cuttheropedx-gamemain-spikes-rotatebutton}

```csharp
public Button rotateButton
```

Button used to rotate linked spike sets.

### sndElectric {#f-cuttheropedx-gamemain-spikes-sndelectric}

```csharp
private SoundEffectInstance sndElectric
```

Looping electric sound instance while electrified spikes are on.

### spikesNormal {#f-cuttheropedx-gamemain-spikes-spikesnormal}

```csharp
private bool spikesNormal
```

Whether rotatable spikes are in the perpendicular orientation.

### t1 {#f-cuttheropedx-gamemain-spikes-t1}

```csharp
public Vector t1
```

Top-left rotated collision point.

### t2 {#f-cuttheropedx-gamemain-spikes-t2}

```csharp
public Vector t2
```

Top-right rotated collision point.

### toggled {#f-cuttheropedx-gamemain-spikes-toggled}

```csharp
private int toggled
```

Toggle group id for rotating linked spike sets.

### touchIndex {#f-cuttheropedx-gamemain-spikes-touchindex}

```csharp
public int touchIndex
```

Active touch index for spike interaction, or -1 when idle.

### updateRotationFlag {#f-cuttheropedx-gamemain-spikes-updaterotationflag}

```csharp
private bool updateRotationFlag
```

Whether rotated collision points need to be refreshed during rotation animation.

## Methods

### GetSpikeTextureAndQuad(int width, bool rotatable) {#m-cuttheropedx-gamemain-spikes-getspiketextureandquad-system-int32-system-boolean}

```csharp
private static (string texture, int quad) GetSpikeTextureAndQuad(int width, bool rotatable)
```

Resolves the texture and quad for a spike width/type.

Parameters:

- `width`: Spike width/type index.
- `rotatable`: Whether the spike uses rotatable visuals.

Returns: The texture resource name and quad index, or `null` texture when invalid.

### GetToggled() {#m-cuttheropedx-gamemain-spikes-gettoggled}

```csharp
public int GetToggled()
```

Gets the toggle group for this rotatable spike set.

Returns: The toggle group id.

### InitWithPosXYWidthAndAngleToggled(float px, float py, int w, float an, int t) {#m-cuttheropedx-gamemain-spikes-initwithposxywidthandangletoggled-system-single-system-single-system-int32-system-single-system-int32}

```csharp
public Spikes InitWithPosXYWidthAndAngleToggled(float px, float py, int w, float an, int t)
```

Initializes spikes at a level position with the configured width, angle, and toggle group.

Parameters:

- `px`: World-space X position.
- `py`: World-space Y position.
- `w`: Spike width/type index.
- `an`: Initial rotation angle in degrees.
- `t`: Toggle group id, or -1 for non-rotatable spikes.

Returns: The initialized spikes, or `null` if the type or texture is invalid.

### OnButtonPressed(SpikesButtonId n) {#m-cuttheropedx-gamemain-spikes-onbuttonpressed-cuttheropedx-gamemain-spikesbuttonid}

```csharp
public void OnButtonPressed(SpikesButtonId n)
```

Handles a spike button press.

Parameters:

- `n`: Pressed spike button identifier.

### RotateSpikes() {#m-cuttheropedx-gamemain-spikes-rotatespikes}

```csharp
public void RotateSpikes()
```

Toggles rotatable spikes between their original and perpendicular rotations.

### SetToggled(int t) {#m-cuttheropedx-gamemain-spikes-settoggled-system-int32}

```csharp
public void SetToggled(int t)
```

Sets the toggle group for this rotatable spike set.

Parameters:

- `t`: Toggle group id.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-spikes-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelineReachedKeyFramewithIndex(Timeline _, KeyFrame _1, int _2) {#m-cuttheropedx-gamemain-spikes-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public static void TimelineReachedKeyFramewithIndex(Timeline _, KeyFrame _1, int _2)
```

### TimelinereachedKeyFramewithIndex(Timeline _, KeyFrame _1, int _2) {#m-cuttheropedx-gamemain-spikes-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline _, KeyFrame _1, int _2)
```

Called when the timeline reaches keyframe `k` at index `i`.

### TurnElectroOff() {#m-cuttheropedx-gamemain-spikes-turnelectrooff}

```csharp
public void TurnElectroOff()
```

Turns electrified spikes off and stops the looping electric sound.

### TurnElectroOn() {#m-cuttheropedx-gamemain-spikes-turnelectroon}

```csharp
public void TurnElectroOn()
```

Turns electrified spikes on and starts the looping electric sound.

### Update(float delta) {#m-cuttheropedx-gamemain-spikes-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateRotation() {#m-cuttheropedx-gamemain-spikes-updaterotation}

```csharp
public void UpdateRotation()
```

Recomputes rotated collision edge points from the current position and rotation.


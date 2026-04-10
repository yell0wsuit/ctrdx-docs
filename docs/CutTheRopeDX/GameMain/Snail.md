---
title: Class Snail
description: Snail object that can attach to the candy point, drag candy down, and vanish when detached.
---

# Class Snail

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Snail.cs`

Snail object that can attach to the candy point, drag candy down, and vanish when detached.

## Declaration

```csharp
internal sealed class Snail : GameObject, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [GameObject](../Framework/Helpers/GameObject.md)
- [Snail](Snail.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Fields

### AchievementSnailTamer {#f-cuttheropedx-gamemain-snail-achievementsnailtamer}

```csharp
private const string AchievementSnailTamer
```

Achievement identifier awarded after enough snails are grabbed.

### PrefsGrabSnails {#f-cuttheropedx-gamemain-snail-prefsgrabsnails}

```csharp
private const string PrefsGrabSnails
```

Preference key that tracks how many snails have been grabbed.

### SNAIL_STATE_ACTIVE {#f-cuttheropedx-gamemain-snail-snail-state-active}

```csharp
public const int SNAIL_STATE_ACTIVE
```

State value used while the snail is attached to candy.

### SNAIL_STATE_INACTIVE {#f-cuttheropedx-gamemain-snail-snail-state-inactive}

```csharp
public const int SNAIL_STATE_INACTIVE
```

Inactive snail state value.

### SNAIL_STATE_VANISH {#f-cuttheropedx-gamemain-snail-snail-state-vanish}

```csharp
public const int SNAIL_STATE_VANISH
```

State value used while the snail is playing its vanish animation.

### SNAIL_STATE_VANISHED {#f-cuttheropedx-gamemain-snail-snail-state-vanished}

```csharp
public const int SNAIL_STATE_VANISHED
```

State value used after the vanish animation has completed.

### SnailActionDetach {#f-cuttheropedx-gamemain-snail-snailactiondetach}

```csharp
private const string SnailActionDetach
```

Action name fired when the detach vanish timeline finishes.

### SnailEye1Quad {#f-cuttheropedx-gamemain-snail-snaileye1quad}

```csharp
private const int SnailEye1Quad
```

Texture quad index for the first active eye overlay.

### SnailEye2Quad {#f-cuttheropedx-gamemain-snail-snaileye2quad}

```csharp
private const int SnailEye2Quad
```

Texture quad index for the second active eye overlay.

### SnailShellQuad {#f-cuttheropedx-gamemain-snail-snailshellquad}

```csharp
private const int SnailShellQuad
```

Texture quad index for the snail shell.

### SnailSleepEndQuad {#f-cuttheropedx-gamemain-snail-snailsleependquad}

```csharp
private const int SnailSleepEndQuad
```

Last texture quad index for the sleep animation.

### SnailSleepStartQuad {#f-cuttheropedx-gamemain-snail-snailsleepstartquad}

```csharp
private const int SnailSleepStartQuad
```

First texture quad index for the sleep animation.

### SnailSleepyEyesQuad {#f-cuttheropedx-gamemain-snail-snailsleepyeyesquad}

```csharp
private const int SnailSleepyEyesQuad
```

Texture quad index for the sleepy eyes overlay.

### SnailWakeEndQuad {#f-cuttheropedx-gamemain-snail-snailwakeendquad}

```csharp
private const int SnailWakeEndQuad
```

Last texture quad index for the wake-up animation.

### SnailWakeStartQuad {#f-cuttheropedx-gamemain-snail-snailwakestartquad}

```csharp
private const int SnailWakeStartQuad
```

First texture quad index for the wake-up animation.

### backContainer {#f-cuttheropedx-gamemain-snail-backcontainer}

```csharp
private BaseElement backContainer
```

Container for eye and wake/sleep overlay visuals drawn behind the shell.

### eye1 {#f-cuttheropedx-gamemain-snail-eye1}

```csharp
private Image eye1
```

First active eye overlay visual.

### eye2 {#f-cuttheropedx-gamemain-snail-eye2}

```csharp
private Image eye2
```

Second active eye overlay visual.

### point {#f-cuttheropedx-gamemain-snail-point}

```csharp
private ConstraintedPoint point
```

Candy physics point currently followed by the snail.

### sleep {#f-cuttheropedx-gamemain-snail-sleep}

```csharp
private Animation sleep
```

Sleep animation played when the snail detaches from candy.

### sleepyEyes {#f-cuttheropedx-gamemain-snail-sleepyeyes}

```csharp
private Image sleepyEyes
```

Sleepy eyes overlay visual.

### startRotation {#f-cuttheropedx-gamemain-snail-startrotation}

```csharp
public float startRotation
```

Initial snail rotation used when restoring state.

### wakeUp {#f-cuttheropedx-gamemain-snail-wakeup}

```csharp
private Animation wakeUp
```

Wake-up animation played when the snail attaches to candy.

## Methods

### AttachToPoint(ConstraintedPoint p) {#m-cuttheropedx-gamemain-snail-attachtopoint-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public void AttachToPoint(ConstraintedPoint p)
```

Attaches the snail to a candy physics point and plays the wake-up state transition.

Parameters:

- `p`: Candy physics point to follow.

### Detach() {#m-cuttheropedx-gamemain-snail-detach}

```csharp
public void Detach()
```

Detaches the snail from the candy point and starts its vanish animation.

### Draw() {#m-cuttheropedx-gamemain-snail-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### HandleAction(ActionData a) {#m-cuttheropedx-gamemain-snail-handleaction-cuttheropedx-framework-visual-actiondata}

```csharp
public override bool HandleAction(ActionData a)
```

Handles a timeline action. Returns `true` if the action was recognized.

Parameters:

- `a`: Action data to process.

Returns: `true` if the action was recognized and handled.

### InitWithTexture(CTRTexture2D t) {#m-cuttheropedx-gamemain-snail-initwithtexture-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public override Image InitWithTexture(CTRTexture2D t)
```

Initializes the image with the given texture, setting the first quad or full image.

Parameters:

- `t`: Texture to initialize with.

Returns: This image instance for chaining.

### SetBBFromQuad(int quad) {#m-cuttheropedx-gamemain-snail-setbbfromquad-system-int32}

```csharp
public void SetBBFromQuad(int quad)
```

Sets the snail bounding box from a texture quad.

Parameters:

- `quad`: Texture quad index used to compute the bounding box.

### Snail_create(CTRTexture2D texture) {#m-cuttheropedx-gamemain-snail-snail-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
private static Snail Snail_create(CTRTexture2D texture)
```

Creates a snail from a texture.

Parameters:

- `texture`: Texture used by the snail.

Returns: The initialized snail.

### Snail_createWithResIDQuad(string resourceName, int q) {#m-cuttheropedx-gamemain-snail-snail-createwithresidquad-system-string-system-int32}

```csharp
public static Snail Snail_createWithResIDQuad(string resourceName, int q)
```

Creates a snail from a texture resource and applies a draw quad.

Parameters:

- `resourceName`: Texture resource name.
- `q`: Quad index to draw.

Returns: The initialized snail.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-snail-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-snail-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.

### Update(float delta) {#m-cuttheropedx-gamemain-snail-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


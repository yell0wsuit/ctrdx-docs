---
title: Class Star
description: Collectible star object with optional timed and night-mode visual states.
---

# Class Star

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Star.cs`

Collectible star object with optional timed and night-mode visual states.

## Declaration

```csharp
internal sealed class Star : CTRGameObject, ITransporterItem, ITransporterBindAware
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
- [Star](Star.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITransporterItem](ITransporterItem.md)
- [ITransporterBindAware](ITransporterBindAware.md)

## Constructors

### Star() {#m-cuttheropedx-gamemain-star-ctor}

```csharp
public Star()
```

Initializes a star with default timed and night-mode visual state.

## Fields

### ImgObjStarIdleGlow {#f-cuttheropedx-gamemain-star-imgobjstaridleglow}

```csharp
private const int ImgObjStarIdleGlow
```

Glow quad index for the normal idle star texture.

### ImgObjStarNightGlow {#f-cuttheropedx-gamemain-star-imgobjstarnightglow}

```csharp
private const int ImgObjStarNightGlow
```

Glow quad index for the night-mode star texture.

### ImgObjStarNightIdleOffEnd {#f-cuttheropedx-gamemain-star-imgobjstarnightidleoffend}

```csharp
private const int ImgObjStarNightIdleOffEnd
```

Last quad index for the night-mode dim idle animation.

### ImgObjStarNightIdleOffStart {#f-cuttheropedx-gamemain-star-imgobjstarnightidleoffstart}

```csharp
private const int ImgObjStarNightIdleOffStart
```

First quad index for the night-mode dim idle animation.

### ImgObjStarNightLightDownEnd {#f-cuttheropedx-gamemain-star-imgobjstarnightlightdownend}

```csharp
private const int ImgObjStarNightLightDownEnd
```

Last quad index for the night-mode light-down animation.

### ImgObjStarNightLightDownStart {#f-cuttheropedx-gamemain-star-imgobjstarnightlightdownstart}

```csharp
private const int ImgObjStarNightLightDownStart
```

First quad index for the night-mode light-down animation.

### ImgObjStarNightLightUpEnd {#f-cuttheropedx-gamemain-star-imgobjstarnightlightupend}

```csharp
private const int ImgObjStarNightLightUpEnd
```

Last quad index for the night-mode light-up animation.

### ImgObjStarNightLightUpStart {#f-cuttheropedx-gamemain-star-imgobjstarnightlightupstart}

```csharp
private const int ImgObjStarNightLightUpStart
```

First quad index for the night-mode light-up animation.

### NightFadeStep {#f-cuttheropedx-gamemain-star-nightfadestep}

```csharp
private const float NightFadeStep
```

Alpha step used while fading night-mode visual layers.

### TimedEmptyQuad {#f-cuttheropedx-gamemain-star-timedemptyquad}

```csharp
private const int TimedEmptyQuad
```

Quad index for the empty timed-star countdown ring.

### TimedFullQuad {#f-cuttheropedx-gamemain-star-timedfullquad}

```csharp
private const int TimedFullQuad
```

Quad index for the full timed-star countdown ring.

### dimmedIdleSprite {#f-cuttheropedx-gamemain-star-dimmedidlesprite}

```csharp
private Animation dimmedIdleSprite
```

Dimmed night-mode idle star animation layer.

### glowSprite {#f-cuttheropedx-gamemain-star-glowsprite}

```csharp
private GameObject glowSprite
```

Glow visual layer.

### idleSprite {#f-cuttheropedx-gamemain-star-idlesprite}

```csharp
private Animation idleSprite
```

Normal idle star animation layer.

### isLit {#f-cuttheropedx-gamemain-star-islit}

```csharp
private bool? isLit
```

Current night-mode light state, or `null` before initialization.

### lightDownAnim {#f-cuttheropedx-gamemain-star-lightdownanim}

```csharp
private Animation lightDownAnim
```

Night-mode light-down transition animation.

### lightUpAnim {#f-cuttheropedx-gamemain-star-lightupanim}

```csharp
private Animation lightUpAnim
```

Night-mode light-up transition animation.

### nightMode {#f-cuttheropedx-gamemain-star-nightmode}

```csharp
private bool nightMode
```

Whether this star uses night-mode visuals.

### time {#f-cuttheropedx-gamemain-star-time}

```csharp
public float time
```

Remaining time before a timed star expires.

### timedAnim {#f-cuttheropedx-gamemain-star-timedanim}

```csharp
public Animation timedAnim
```

Timed-star ring animation.

### timeout {#f-cuttheropedx-gamemain-star-timeout}

```csharp
public float timeout
```

Total timeout duration for timed stars, or 0 for untimed stars.

## Properties

### BindPoint {#p-cuttheropedx-gamemain-star-bindpoint}

```csharp
public Vector BindPoint { get; }
```

World-space point where the item attaches to the transporter.

### CollisionRadius {#p-cuttheropedx-gamemain-star-collisionradius}

```csharp
public float CollisionRadius { get; }
```

Collision radius used for transporter interaction.

### IsDrawnByTransporter {#p-cuttheropedx-gamemain-star-isdrawnbytransporter}

```csharp
public bool IsDrawnByTransporter { get; set; }
```

Whether the transporter is responsible for drawing this item.

### IsLit {#p-cuttheropedx-gamemain-star-islit}

```csharp
public bool IsLit { get; }
```

Gets whether the star is currently lit in night mode.

### MaxScale {#p-cuttheropedx-gamemain-star-maxscale}

```csharp
public float MaxScale { get; }
```

Maximum scale applied while on the transporter.

### MinScale {#p-cuttheropedx-gamemain-star-minscale}

```csharp
public float MinScale { get; }
```

Minimum scale applied while on the transporter.

### PositionOnTransporter {#p-cuttheropedx-gamemain-star-positionontransporter}

```csharp
public float PositionOnTransporter { get; set; }
```

Normalized position along the transporter path (0–1).

### TransporterScale {#p-cuttheropedx-gamemain-star-transporterscale}

```csharp
public float TransporterScale { get; set; }
```

Current scale factor applied by the transporter.

## Methods

### AdjustNightAlpha(BaseElement element, float delta) {#m-cuttheropedx-gamemain-star-adjustnightalpha-cuttheropedx-framework-visual-baseelement-system-single}

```csharp
private static void AdjustNightAlpha(BaseElement element, float delta)
```

Adjusts the alpha channel for a night-mode star visual layer.

Parameters:

- `element`: Element whose alpha should be adjusted.
- `delta`: Alpha adjustment amount.

### CreateAnimations() {#m-cuttheropedx-gamemain-star-createanimations}

```csharp
public void CreateAnimations()
```

Creates star animations, timed-ring visuals, idle glow, and night-mode overlays.

### Draw() {#m-cuttheropedx-gamemain-star-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### DrawTimedFullRadial(int quadIndex, float fraction) {#m-cuttheropedx-gamemain-star-drawtimedfullradial-system-int32-system-single}

```csharp
private void DrawTimedFullRadial(int quadIndex, float fraction)
```

Draws the remaining portion of the timed-star full countdown ring.

Parameters:

- `quadIndex`: Quad index for the full timed ring.
- `fraction`: Fraction of the ring to draw.

### EnableNightMode() {#m-cuttheropedx-gamemain-star-enablenightmode}

```csharp
public void EnableNightMode()
```

Enables night-mode visual setup before [CreateAnimations](#m-cuttheropedx-gamemain-star-createanimations) runs.

### SetBindPoint(Vector point) {#m-cuttheropedx-gamemain-star-setbindpoint-cuttheropedx-framework-core-vector}

```csharp
public void SetBindPoint(Vector point)
```

Sets the bind point to `point`.

Parameters:

- `point`: New bind point.

### SetLitState(bool lit) {#m-cuttheropedx-gamemain-star-setlitstate-system-boolean}

```csharp
public void SetLitState(bool lit)
```

Sets the night-mode light state and plays transition animations when needed.

Parameters:

- `lit`: Whether the star should be lit.

### Star_create(CTRTexture2D t) {#m-cuttheropedx-gamemain-star-star-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public static Star Star_create(CTRTexture2D t)
```

Creates a star from a texture.

Parameters:

- `t`: Texture used by the star.

Returns: The initialized star.

### Star_createWithResID(string resourceName) {#m-cuttheropedx-gamemain-star-star-createwithresid-system-string}

```csharp
public static Star Star_createWithResID(string resourceName)
```

Creates a star from a texture resource name.

Parameters:

- `resourceName`: Texture resource name.

Returns: The initialized star.

### Update(float delta) {#m-cuttheropedx-gamemain-star-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateNightVisibility() {#m-cuttheropedx-gamemain-star-updatenightvisibility}

```csharp
private void UpdateNightVisibility()
```

Ensures all night-mode star visual layers are visible after a light-state change.

### WillBind() {#m-cuttheropedx-gamemain-star-willbind}

```csharp
public void WillBind()
```

Called right before the object is bound to a transporter.


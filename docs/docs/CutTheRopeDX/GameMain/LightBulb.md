---
title: Class LightBulb
description: Represents a light bulb game object that can illuminate the stars and interact with the candy through ropes, bubbles, and socks.
---

# Class LightBulb

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `LightBulb.cs`

Represents a light bulb game object that can illuminate the stars and interact with the candy through ropes, bubbles, and socks.

## Declaration

```csharp
internal sealed class LightBulb : CTRGameObject, ITransporterItem, ITransporterBindAware
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
- [LightBulb](LightBulb.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITransporterItem](ITransporterItem.md)
- [ITransporterBindAware](ITransporterBindAware.md)

## Remarks

The light bulb consists of multiple visual layers: Light glow - An additive-blended halo effect Bottle - The glass jar container Top - The lid of the jar Firefly - An animated firefly inside the jar The light bulb can be attached to ropes via its constraint point and can capture or be captured by bubbles.

## Constructors

### LightBulb(float lightRadius, ConstraintedPoint constraint, string bulbNumber) {#m-cuttheropedx-gamemain-lightbulb-ctor-system-single-cuttheropedx-framework-physics-constraintedpoint-system-string}

```csharp
public LightBulb(float lightRadius, ConstraintedPoint constraint, string bulbNumber)
```

Initializes a new instance of the [LightBulb](LightBulb.md) class.

Parameters:

- `lightRadius`: The radius of the light effect for gameplay mechanics.
- `constraint`: The physics constraint point for positioning.
- `bulbNumber`: An optional identifier for this light bulb instance.

## Fields

### ImgObjLighterBottle {#f-cuttheropedx-gamemain-lightbulb-imgobjlighterbottle}

```csharp
private const int ImgObjLighterBottle
```

Sprite index for the glass jar.

### ImgObjLighterFireflyEnd {#f-cuttheropedx-gamemain-lightbulb-imgobjlighterfireflyend}

```csharp
private const int ImgObjLighterFireflyEnd
```

Last frame index of the firefly animation sequence.

### ImgObjLighterFireflyStart {#f-cuttheropedx-gamemain-lightbulb-imgobjlighterfireflystart}

```csharp
private const int ImgObjLighterFireflyStart
```

First frame index of the firefly animation sequence.

### ImgObjLighterLight {#f-cuttheropedx-gamemain-lightbulb-imgobjlighterlight}

```csharp
private const int ImgObjLighterLight
```

Sprite index for the light glow effect.

### ImgObjLighterTop {#f-cuttheropedx-gamemain-lightbulb-imgobjlightertop}

```csharp
private const int ImgObjLighterTop
```

Sprite index for the bottle lid.

### LightBulbRootScale {#f-cuttheropedx-gamemain-lightbulb-lightbulbrootscale}

```csharp
private const float LightBulbRootScale
```

Base scale factor applied to the light bulb root object.

### WorldScale {#f-cuttheropedx-gamemain-lightbulb-worldscale}

```csharp
private const float WorldScale
```

World-to-screen coordinate scale multiplier.

### attachedSock {#f-cuttheropedx-gamemain-lightbulb-attachedsock}

```csharp
public Sock attachedSock
```

Reference to a hat/sock that has captured this light bulb. When not `null`, the light bulb becomes invisible.

### bottle {#f-cuttheropedx-gamemain-lightbulb-bottle}

```csharp
private readonly GameObject bottle
```

The glass jar sprite.

### bubbleAnimation {#f-cuttheropedx-gamemain-lightbulb-bubbleanimation}

```csharp
private readonly Animation bubbleAnimation
```

Animation displayed when captured by a normal bubble.

### bulbNumber {#f-cuttheropedx-gamemain-lightbulb-bulbnumber}

```csharp
public readonly string bulbNumber
```

Identifier string for this light bulb instance, used for level loading and object referencing.

### capturingBubble {#f-cuttheropedx-gamemain-lightbulb-capturingbubble}

```csharp
public Bubble capturingBubble
```

Reference to a bubble that is currently capturing or carrying the light bulb.

### capturingGhostBubble {#f-cuttheropedx-gamemain-lightbulb-capturingghostbubble}

```csharp
public bool capturingGhostBubble
```

Indicates whether the capturing bubble is a ghost bubble variant, which uses a different visual animation.

### constraint {#f-cuttheropedx-gamemain-lightbulb-constraint}

```csharp
public readonly ConstraintedPoint constraint
```

The physics constraint point that determines the bulb's position. Used for rope attachment and physics simulation.

### firefly {#f-cuttheropedx-gamemain-lightbulb-firefly}

```csharp
private readonly Animation firefly
```

Animated firefly sprite inside the jar.

### ghostBubbleAnimation {#f-cuttheropedx-gamemain-lightbulb-ghostbubbleanimation}

```csharp
private readonly CandyInGhostBubbleAnimation ghostBubbleAnimation
```

Animation displayed when captured by a ghost bubble.

### lightGlow {#f-cuttheropedx-gamemain-lightbulb-lightglow}

```csharp
private readonly GameObject lightGlow
```

The additive-blended light glow halo effect.

### lightRadius {#f-cuttheropedx-gamemain-lightbulb-lightradius}

```csharp
public readonly float lightRadius
```

The radius of the light effect emitted by the bulb, used for illuminating stars.

### rotationVelocity {#f-cuttheropedx-gamemain-lightbulb-rotationvelocity}

```csharp
public float rotationVelocity
```

Current rotational velocity of the light bulb in degrees per frame. Decays over time due to friction (0.98 multiplier).

### sockSpeed {#f-cuttheropedx-gamemain-lightbulb-sockspeed}

```csharp
public float sockSpeed
```

Speed at which the attached hat/sock moves, used for physics calculations.

### top {#f-cuttheropedx-gamemain-lightbulb-top}

```csharp
private readonly GameObject top
```

The bottle cap sprite.

## Properties

### BindPoint {#p-cuttheropedx-gamemain-lightbulb-bindpoint}

```csharp
public Vector BindPoint { get; }
```

World-space point where the item attaches to the transporter.

### CollisionRadius {#p-cuttheropedx-gamemain-lightbulb-collisionradius}

```csharp
public float CollisionRadius { get; }
```

Collision radius used for transporter interaction.

### IsDrawnByTransporter {#p-cuttheropedx-gamemain-lightbulb-isdrawnbytransporter}

```csharp
public bool IsDrawnByTransporter { get; set; }
```

Whether the transporter is responsible for drawing this item.

### MaxScale {#p-cuttheropedx-gamemain-lightbulb-maxscale}

```csharp
public float MaxScale { get; }
```

Maximum scale applied while on the transporter.

### MinScale {#p-cuttheropedx-gamemain-lightbulb-minscale}

```csharp
public float MinScale { get; }
```

Minimum scale applied while on the transporter.

### PositionOnTransporter {#p-cuttheropedx-gamemain-lightbulb-positionontransporter}

```csharp
public float PositionOnTransporter { get; set; }
```

Normalized position along the transporter path (0–1).

### TransporterScale {#p-cuttheropedx-gamemain-lightbulb-transporterscale}

```csharp
public float TransporterScale { get; set; }
```

Current scale factor applied by the transporter.

## Methods

### ApplyGlowScale() {#m-cuttheropedx-gamemain-lightbulb-applyglowscale}

```csharp
public void ApplyGlowScale()
```

Calculates and applies the appropriate scale to the light glow effect based on the configured light radius.

### Draw() {#m-cuttheropedx-gamemain-lightbulb-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### DrawBottleAndFirefly() {#m-cuttheropedx-gamemain-lightbulb-drawbottleandfirefly}

```csharp
public void DrawBottleAndFirefly()
```

Draws the bottle, top lid, firefly, and any active bubble animations.

### DrawLight() {#m-cuttheropedx-gamemain-lightbulb-drawlight}

```csharp
public void DrawLight()
```

Draws only the light glow effect.

### PostDrawNoChildren() {#m-cuttheropedx-gamemain-lightbulb-postdrawnochildren}

```csharp
private void PostDrawNoChildren()
```

Restores transformation state without drawing child objects.

### SetBindPoint(Vector point) {#m-cuttheropedx-gamemain-lightbulb-setbindpoint-cuttheropedx-framework-core-vector}

```csharp
public void SetBindPoint(Vector point)
```

Sets the bind point to `point`.

Parameters:

- `point`: New bind point.

### SyncToConstraint() {#m-cuttheropedx-gamemain-lightbulb-synctoconstraint}

```csharp
public void SyncToConstraint()
```

Updates the light bulb's position to match its physics constraint point.

### Update(float delta) {#m-cuttheropedx-gamemain-lightbulb-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### WillBind() {#m-cuttheropedx-gamemain-lightbulb-willbind}

```csharp
public void WillBind()
```

Called right before the object is bound to a transporter.


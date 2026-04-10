---
title: Class Bouncer
description: A bouncy surface that makes the candy bounce on contact. Can be small (1-unit) or large (2-unit) and optionally ride a transporter belt.
---

# Class Bouncer

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Bouncer.cs`

A bouncy surface that makes the candy bounce on contact. Can be small (1-unit) or large (2-unit) and optionally ride a transporter belt.

## Declaration

```csharp
internal class Bouncer : CTRGameObject, ITransporterItem, ITransporterBindAware, ITransporterSideSwitchAware
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
- [Bouncer](Bouncer.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITransporterItem](ITransporterItem.md)
- [ITransporterBindAware](ITransporterBindAware.md)
- [ITransporterSideSwitchAware](ITransporterSideSwitchAware.md)

## Derived

- [GhostBouncer](GhostBouncer.md)

## Fields

### LargeBouncerFirstQuad {#f-cuttheropedx-gamemain-bouncer-largebouncerfirstquad}

```csharp
private const int LargeBouncerFirstQuad
```

First texture quad index for the large bouncer animation.

### LargeBouncerWidth {#f-cuttheropedx-gamemain-bouncer-largebouncerwidth}

```csharp
private const int LargeBouncerWidth
```

Width class value for the large bouncer variant.

### MaxVelocityMagnitude {#f-cuttheropedx-gamemain-bouncer-maxvelocitymagnitude}

```csharp
private const float MaxVelocityMagnitude
```

Maximum allowed instantaneous velocity magnitude (world units per second).

### SmallBouncerFirstQuad {#f-cuttheropedx-gamemain-bouncer-smallbouncerfirstquad}

```csharp
private const int SmallBouncerFirstQuad
```

First texture quad index for the small bouncer animation.

### SmallBouncerWidth {#f-cuttheropedx-gamemain-bouncer-smallbouncerwidth}

```csharp
private const int SmallBouncerWidth
```

Width class value for the small bouncer variant.

### angle {#f-cuttheropedx-gamemain-bouncer-angle}

```csharp
public float angle
```

Current rotation in radians, derived from [rotation](../Framework/Visual/BaseElement.md#f-cuttheropedx-framework-visual-baseelement-rotation).

### b1 {#f-cuttheropedx-gamemain-bouncer-b1}

```csharp
public Vector b1
```

Bottom-left corner of the bouncer rectangle in world space (after rotation).

### b2 {#f-cuttheropedx-gamemain-bouncer-b2}

```csharp
public Vector b2
```

Bottom-right corner of the bouncer rectangle in world space (after rotation).

### instantVelocity {#f-cuttheropedx-gamemain-bouncer-instantvelocity}

```csharp
public Vector instantVelocity
```

Instantaneous velocity computed from the most recent [SetBindPoint](#m-cuttheropedx-gamemain-bouncer-setbindpoint-cuttheropedx-framework-core-vector) displacement.

### prevPosition2 {#f-cuttheropedx-gamemain-bouncer-prevposition2}

```csharp
public Vector prevPosition2
```

Position before the most recent [SetBindPoint](#m-cuttheropedx-gamemain-bouncer-setbindpoint-cuttheropedx-framework-core-vector) or [DidMoveToOtherSide](#m-cuttheropedx-gamemain-bouncer-didmovetootherside) call.

### skip {#f-cuttheropedx-gamemain-bouncer-skip}

```csharp
public bool skip
```

When `true`, collision checks skip this bouncer for the current frame.

### t1 {#f-cuttheropedx-gamemain-bouncer-t1}

```csharp
public Vector t1
```

Top-left corner of the bouncer rectangle in world space (after rotation).

### t2 {#f-cuttheropedx-gamemain-bouncer-t2}

```csharp
public Vector t2
```

Top-right corner of the bouncer rectangle in world space (after rotation).

### timeElapsedFromLastMove {#f-cuttheropedx-gamemain-bouncer-timeelapsedfromlastmove}

```csharp
private float timeElapsedFromLastMove
```

Seconds since the last [SetBindPoint](#m-cuttheropedx-gamemain-bouncer-setbindpoint-cuttheropedx-framework-core-vector) move, or −1 if never moved.

## Properties

### BindPoint {#p-cuttheropedx-gamemain-bouncer-bindpoint}

```csharp
public Vector BindPoint { get; }
```

World-space point where the item attaches to the transporter.

### CollisionRadius {#p-cuttheropedx-gamemain-bouncer-collisionradius}

```csharp
public float CollisionRadius { get; }
```

Collision radius used for transporter interaction.

### IsDrawnByTransporter {#p-cuttheropedx-gamemain-bouncer-isdrawnbytransporter}

```csharp
public bool IsDrawnByTransporter { get; set; }
```

Whether the transporter is responsible for drawing this item.

### MaxScale {#p-cuttheropedx-gamemain-bouncer-maxscale}

```csharp
public float MaxScale { get; }
```

Maximum scale applied while on the transporter.

### MinScale {#p-cuttheropedx-gamemain-bouncer-minscale}

```csharp
public float MinScale { get; }
```

Minimum scale applied while on the transporter.

### PositionOnTransporter {#p-cuttheropedx-gamemain-bouncer-positionontransporter}

```csharp
public float PositionOnTransporter { get; set; }
```

Normalized position along the transporter path (0–1).

### TransporterScale {#p-cuttheropedx-gamemain-bouncer-transporterscale}

```csharp
public float TransporterScale { get; set; }
```

Current scale factor applied by the transporter.

## Methods

### DidMoveToOtherSide() {#m-cuttheropedx-gamemain-bouncer-didmovetootherside}

```csharp
public void DidMoveToOtherSide()
```

Called when the object wraps to the opposite transporter side.

### InitWithPosXYWidthAndAngle(float px, float py, int w, float an) {#m-cuttheropedx-gamemain-bouncer-initwithposxywidthandangle-system-single-system-single-system-int32-system-single}

```csharp
public virtual Bouncer InitWithPosXYWidthAndAngle(float px, float py, int w, float an)
```

Initialises the bouncer at the given position with a width class and rotation angle.

Parameters:

- `px`: World-space X position.
- `py`: World-space Y position.
- `w`: Width class: [SmallBouncerWidth](#f-cuttheropedx-gamemain-bouncer-smallbouncerwidth) (1) or [LargeBouncerWidth](#f-cuttheropedx-gamemain-bouncer-largebouncerwidth) (2).
- `an`: Initial rotation angle in degrees.

Returns: This instance on success, or `null` if the width is invalid or the texture failed to load.

### SetBindPoint(Vector point) {#m-cuttheropedx-gamemain-bouncer-setbindpoint-cuttheropedx-framework-core-vector}

```csharp
public void SetBindPoint(Vector point)
```

Sets the bind point to `point`.

Parameters:

- `point`: New bind point.

### Update(float delta) {#m-cuttheropedx-gamemain-bouncer-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateRotation() {#m-cuttheropedx-gamemain-bouncer-updaterotation}

```csharp
public void UpdateRotation()
```

Recomputes the four rotated corner points ([t1](#f-cuttheropedx-gamemain-bouncer-t1), [t2](#f-cuttheropedx-gamemain-bouncer-t2), [b1](#f-cuttheropedx-gamemain-bouncer-b1), [b2](#f-cuttheropedx-gamemain-bouncer-b2)) from the current position, width and rotation.

### WillBind() {#m-cuttheropedx-gamemain-bouncer-willbind}

```csharp
public void WillBind()
```

Called right before the object is bound to a transporter.


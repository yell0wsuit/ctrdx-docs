---
title: Class Bubble
description: Bubble game object that can be bound to a transporter and optionally draw itself with a shadow.
---

# Class Bubble

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Bubble.cs`

Bubble game object that can be bound to a transporter and optionally draw itself with a shadow.

## Declaration

```csharp
internal class Bubble : GameObject, ITransporterItem, ITransporterBindAware
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [GameObject](../Framework/Helpers/GameObject.md)
- [Bubble](Bubble.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITransporterItem](ITransporterItem.md)
- [ITransporterBindAware](ITransporterBindAware.md)

## Derived

- [GhostBubble](GhostBubble.md)

## Fields

### capturedByBulb {#f-cuttheropedx-gamemain-bubble-capturedbybulb}

```csharp
public bool capturedByBulb
```

Whether the bubble is currently captured by a light bulb.

### initial_rotatedCircle {#f-cuttheropedx-gamemain-bubble-initial-rotatedcircle}

```csharp
public RotatedCircle initial_rotatedCircle
```

Initial rotated-circle binding used when restoring state.

### initial_rotation {#f-cuttheropedx-gamemain-bubble-initial-rotation}

```csharp
public float initial_rotation
```

Initial bubble rotation used when restoring state.

### initial_x {#f-cuttheropedx-gamemain-bubble-initial-x}

```csharp
public float initial_x
```

Initial X position used when restoring state.

### initial_y {#f-cuttheropedx-gamemain-bubble-initial-y}

```csharp
public float initial_y
```

Initial Y position used when restoring state.

### popped {#f-cuttheropedx-gamemain-bubble-popped}

```csharp
public bool popped
```

Whether the bubble has been popped.

### withoutShadow {#f-cuttheropedx-gamemain-bubble-withoutshadow}

```csharp
public bool withoutShadow
```

Whether the bubble should skip drawing its own shadow.

## Properties

### BindPoint {#p-cuttheropedx-gamemain-bubble-bindpoint}

```csharp
public Vector BindPoint { get; }
```

World-space point where the item attaches to the transporter.

### CollisionRadius {#p-cuttheropedx-gamemain-bubble-collisionradius}

```csharp
public float CollisionRadius { get; }
```

Collision radius used for transporter interaction.

### IsDrawnByTransporter {#p-cuttheropedx-gamemain-bubble-isdrawnbytransporter}

```csharp
public bool IsDrawnByTransporter { get; set; }
```

Whether the transporter is responsible for drawing this item.

### MaxScale {#p-cuttheropedx-gamemain-bubble-maxscale}

```csharp
public float MaxScale { get; }
```

Maximum scale applied while on the transporter.

### MinScale {#p-cuttheropedx-gamemain-bubble-minscale}

```csharp
public float MinScale { get; }
```

Minimum scale applied while on the transporter.

### PositionOnTransporter {#p-cuttheropedx-gamemain-bubble-positionontransporter}

```csharp
public float PositionOnTransporter { get; set; }
```

Normalized position along the transporter path (0–1).

### TransporterScale {#p-cuttheropedx-gamemain-bubble-transporterscale}

```csharp
public float TransporterScale { get; set; }
```

Current scale factor applied by the transporter.

## Methods

### Bubble_create(CTRTexture2D t) {#m-cuttheropedx-gamemain-bubble-bubble-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public static Bubble Bubble_create(CTRTexture2D t)
```

Creates a bubble from a texture.

Parameters:

- `t`: Texture used by the bubble.

Returns: The initialized bubble.

### Bubble_createWithResIDQuad(string resourceName, int q) {#m-cuttheropedx-gamemain-bubble-bubble-createwithresidquad-system-string-system-int32}

```csharp
public static Bubble Bubble_createWithResIDQuad(string resourceName, int q)
```

Creates a bubble using a texture resource name and applies the specified quad.

Parameters:

- `resourceName`: Texture resource name.
- `q`: Quad index to draw.

Returns: The initialized bubble.

### Draw() {#m-cuttheropedx-gamemain-bubble-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### SetBindPoint(Vector point) {#m-cuttheropedx-gamemain-bubble-setbindpoint-cuttheropedx-framework-core-vector}

```csharp
public void SetBindPoint(Vector point)
```

Sets the bind point to `point`.

Parameters:

- `point`: New bind point.

### WillBind() {#m-cuttheropedx-gamemain-bubble-willbind}

```csharp
public void WillBind()
```

Called right before the object is bound to a transporter.


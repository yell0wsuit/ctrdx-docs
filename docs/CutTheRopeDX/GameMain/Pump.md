---
title: Class Pump
description: Represents a pump object that can apply a directional flow and be placed on conveyors.
---

# Class Pump

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Pump.cs`

Represents a pump object that can apply a directional flow and be placed on conveyors.

## Declaration

```csharp
internal sealed class Pump : GameObject, ITransporterItem, ITransporterBindAware
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [GameObject](../Framework/Helpers/GameObject.md)
- [Pump](Pump.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITransporterItem](ITransporterItem.md)
- [ITransporterBindAware](ITransporterBindAware.md)

## Fields

### FlowLength {#f-cuttheropedx-gamemain-pump-flowlength}

```csharp
public const float FlowLength
```

Length of the pump flow influence area in world units.

### MouthOffset {#f-cuttheropedx-gamemain-pump-mouthoffset}

```csharp
public const float MouthOffset
```

Offset from the pump center to the mouth in local X before rotation.

### angle {#f-cuttheropedx-gamemain-pump-angle}

```csharp
public float angle
```

Current pump angle in radians.

### initial_rotatedCircle {#f-cuttheropedx-gamemain-pump-initial-rotatedcircle}

```csharp
public RotatedCircle initial_rotatedCircle
```

Initial rotated-circle binding used when restoring state.

### initial_rotation {#f-cuttheropedx-gamemain-pump-initial-rotation}

```csharp
public float initial_rotation
```

Initial rotation at placement time.

### initial_x {#f-cuttheropedx-gamemain-pump-initial-x}

```csharp
public float initial_x
```

Initial X position at placement time.

### initial_y {#f-cuttheropedx-gamemain-pump-initial-y}

```csharp
public float initial_y
```

Initial Y position at placement time.

### pumpTouch {#f-cuttheropedx-gamemain-pump-pumptouch}

```csharp
public int pumpTouch
```

Touch state flag.

### pumpTouchTimer {#f-cuttheropedx-gamemain-pump-pumptouchtimer}

```csharp
public float pumpTouchTimer
```

Timer used for touch feedback.

### t1 {#f-cuttheropedx-gamemain-pump-t1}

```csharp
public Vector t1
```

Left endpoint of the pump body after rotation.

### t2 {#f-cuttheropedx-gamemain-pump-t2}

```csharp
public Vector t2
```

Right endpoint of the pump body after rotation.

## Properties

### BindPoint {#p-cuttheropedx-gamemain-pump-bindpoint}

```csharp
public Vector BindPoint { get; }
```

World-space point where the item attaches to the transporter.

### CollisionRadius {#p-cuttheropedx-gamemain-pump-collisionradius}

```csharp
public float CollisionRadius { get; }
```

Collision radius used for transporter interaction.

### IsDrawnByTransporter {#p-cuttheropedx-gamemain-pump-isdrawnbytransporter}

```csharp
public bool IsDrawnByTransporter { get; set; }
```

Whether the transporter is responsible for drawing this item.

### MaxScale {#p-cuttheropedx-gamemain-pump-maxscale}

```csharp
public float MaxScale { get; }
```

Maximum scale applied while on the transporter.

### MinScale {#p-cuttheropedx-gamemain-pump-minscale}

```csharp
public float MinScale { get; }
```

Minimum scale applied while on the transporter.

### PositionOnTransporter {#p-cuttheropedx-gamemain-pump-positionontransporter}

```csharp
public float PositionOnTransporter { get; set; }
```

Normalized position along the transporter path (0–1).

### TransporterScale {#p-cuttheropedx-gamemain-pump-transporterscale}

```csharp
public float TransporterScale { get; set; }
```

Current scale factor applied by the transporter.

## Methods

### Pump_create(CTRTexture2D t) {#m-cuttheropedx-gamemain-pump-pump-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public static Pump Pump_create(CTRTexture2D t)
```

Creates a pump from a texture.

Parameters:

- `t`: Texture used by the pump.

Returns: The initialized pump.

### Pump_createWithResID(string resourceName) {#m-cuttheropedx-gamemain-pump-pump-createwithresid-system-string}

```csharp
public static Pump Pump_createWithResID(string resourceName)
```

Creates a pump from a texture resource name.

Parameters:

- `resourceName`: Texture resource name.

Returns: The initialized pump.

### Pump_createWithResID(string resourceName, int q) {#m-cuttheropedx-gamemain-pump-pump-createwithresid-system-string-system-int32}

```csharp
public static Pump Pump_createWithResID(string resourceName, int q)
```

Creates a pump using a texture resource name.

Parameters:

- `resourceName`: Texture resource name.
- `q`: Quad index to draw.

Returns: The initialized pump.

### SetBindPoint(Vector point) {#m-cuttheropedx-gamemain-pump-setbindpoint-cuttheropedx-framework-core-vector}

```csharp
public void SetBindPoint(Vector point)
```

Sets the bind point to `point`.

Parameters:

- `point`: New bind point.

### UpdateRotation() {#m-cuttheropedx-gamemain-pump-updaterotation}

```csharp
public void UpdateRotation()
```

Updates the internal endpoints and angle based on the current rotation.

### WillBind() {#m-cuttheropedx-gamemain-pump-willbind}

```csharp
public void WillBind()
```

Called right before the object is bound to a transporter.


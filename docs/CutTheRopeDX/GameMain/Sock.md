---
title: Class Sock
description: Magic hat teleporter object, rendered as a Christmas sock during the seasonal theme.
---

# Class Sock

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Sock.cs`

Magic hat teleporter object, rendered as a Christmas sock during the seasonal theme.

## Declaration

```csharp
internal sealed class Sock : CTRGameObject, ITransporterItem, ITransporterBindAware
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
- [Sock](Sock.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITransporterItem](ITransporterItem.md)
- [ITransporterBindAware](ITransporterBindAware.md)

## Fields

### BindPointOffsetX {#f-cuttheropedx-gamemain-sock-bindpointoffsetx}

```csharp
private const float BindPointOffsetX
```

Local X offset from object origin to transporter bind point.

### BindPointOffsetY {#f-cuttheropedx-gamemain-sock-bindpointoffsety}

```csharp
private const float BindPointOffsetY
```

Local Y offset from object origin to transporter bind point.

### SOCK_IDLE {#f-cuttheropedx-gamemain-sock-sock-idle}

```csharp
public const int SOCK_IDLE
```

Idle magic hat state value.

### SOCK_IDLE_TIMOUT {#f-cuttheropedx-gamemain-sock-sock-idle-timout}

```csharp
public const float SOCK_IDLE_TIMOUT
```

Time in seconds before the magic hat returns to idle.

### SOCK_RECEIVING {#f-cuttheropedx-gamemain-sock-sock-receiving}

```csharp
public const int SOCK_RECEIVING
```

State value used while the magic hat is receiving an object.

### SOCK_THROWING {#f-cuttheropedx-gamemain-sock-sock-throwing}

```csharp
public const int SOCK_THROWING
```

State value used while the magic hat is throwing an object out.

### ScalingCompensation {#f-cuttheropedx-gamemain-sock-scalingcompensation}

```csharp
private const float ScalingCompensation
```

Scale factor used to convert magic hat offsets into world units.

### XmasSock {#f-cuttheropedx-gamemain-sock-xmassock}

```csharp
private string XmasSock
```

Current visual resource used by the magic hat or Christmas sock theme.

### angle {#f-cuttheropedx-gamemain-sock-angle}

```csharp
public float angle
```

Current magic hat angle in radians.

### b1 {#f-cuttheropedx-gamemain-sock-b1}

```csharp
public Vector b1
```

Bottom-left rotated mouth bound point.

### b2 {#f-cuttheropedx-gamemain-sock-b2}

```csharp
public Vector b2
```

Bottom-right rotated mouth bound point.

### group {#f-cuttheropedx-gamemain-sock-group}

```csharp
public int group
```

Teleport group identifier used to pair magic hats.

### idleTimeout {#f-cuttheropedx-gamemain-sock-idletimeout}

```csharp
public float idleTimeout
```

Remaining idle timeout in seconds.

### light {#f-cuttheropedx-gamemain-sock-light}

```csharp
public Animation light
```

Teleport flash animation shown when an object exits the magic hat.

### t1 {#f-cuttheropedx-gamemain-sock-t1}

```csharp
public Vector t1
```

Top-left rotated mouth bound point.

### t2 {#f-cuttheropedx-gamemain-sock-t2}

```csharp
public Vector t2
```

Top-right rotated mouth bound point.

## Properties

### BindPoint {#p-cuttheropedx-gamemain-sock-bindpoint}

```csharp
public Vector BindPoint { get; }
```

Returns the effective position of the magic hat for transporter calculations, applying a scaled and rotated offset from the origin to the mouth position.

### CollisionRadius {#p-cuttheropedx-gamemain-sock-collisionradius}

```csharp
public float CollisionRadius { get; }
```

Collision radius used for transporter interaction.

### IsDrawnByTransporter {#p-cuttheropedx-gamemain-sock-isdrawnbytransporter}

```csharp
public bool IsDrawnByTransporter { get; set; }
```

Whether the transporter is responsible for drawing this item.

### MaxScale {#p-cuttheropedx-gamemain-sock-maxscale}

```csharp
public float MaxScale { get; }
```

Maximum scale applied while on the transporter.

### MinScale {#p-cuttheropedx-gamemain-sock-minscale}

```csharp
public float MinScale { get; }
```

Minimum scale applied while on the transporter.

### PositionOnTransporter {#p-cuttheropedx-gamemain-sock-positionontransporter}

```csharp
public float PositionOnTransporter { get; set; }
```

Normalized position along the transporter path (0–1).

### TransporterScale {#p-cuttheropedx-gamemain-sock-transporterscale}

```csharp
public float TransporterScale { get; set; }
```

Current scale factor applied by the transporter.

## Methods

### CreateAnimations() {#m-cuttheropedx-gamemain-sock-createanimations}

```csharp
public void CreateAnimations()
```

Creates the magic hat teleport flash animation, using the Christmas sock resource during the seasonal theme.

### Draw() {#m-cuttheropedx-gamemain-sock-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### DrawBB() {#m-cuttheropedx-gamemain-sock-drawbb}

```csharp
public override void DrawBB()
```

Draws the bounding box outline for debugging.

### GetCollisionRadius() {#m-cuttheropedx-gamemain-sock-getcollisionradius}

```csharp
private static float GetCollisionRadius()
```

Gets the transporter collision radius for magic hat instances.

Returns: The collision radius in world units.

### SetBindPoint(Vector point) {#m-cuttheropedx-gamemain-sock-setbindpoint-cuttheropedx-framework-core-vector}

```csharp
public void SetBindPoint(Vector point)
```

Sets the magic hat position such that its effective transporter bind point matches the given position, accounting for the rotated offset.

Parameters:

- `point`: Target world-space bind point.

### Sock_create(CTRTexture2D t) {#m-cuttheropedx-gamemain-sock-sock-create-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public static Sock Sock_create(CTRTexture2D t)
```

Creates a magic hat from a texture.

Parameters:

- `t`: Texture used by the magic hat.

Returns: The initialized magic hat.

### Sock_createWithResID(string resourceName) {#m-cuttheropedx-gamemain-sock-sock-createwithresid-system-string}

```csharp
public static Sock Sock_createWithResID(string resourceName)
```

Creates a magic hat from a texture resource name.

Parameters:

- `resourceName`: Texture resource name.

Returns: The initialized magic hat.

### Sock_createWithResIDQuad(string resourceName, int q) {#m-cuttheropedx-gamemain-sock-sock-createwithresidquad-system-string-system-int32}

```csharp
public static Sock Sock_createWithResIDQuad(string resourceName, int q)
```

Creates a magic hat using a texture resource name and quad index.

Parameters:

- `resourceName`: Texture resource name.
- `q`: Quad index.

Returns: The initialized magic hat.

### Update(float delta) {#m-cuttheropedx-gamemain-sock-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateRotation() {#m-cuttheropedx-gamemain-sock-updaterotation}

```csharp
public void UpdateRotation()
```

Recomputes the magic hat rotated mouth bounds from the current position and rotation.

### WillBind() {#m-cuttheropedx-gamemain-sock-willbind}

```csharp
public void WillBind()
```

Called right before the object is bound to a transporter.


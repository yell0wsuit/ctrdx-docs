---
title: Interface ITransporterItem
description: Defines properties and methods required for an object to ride on a transporter (conveyor belt).
---

# Interface ITransporterItem

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `ConveyorInterfaces.cs`

Defines properties and methods required for an object to ride on a transporter (conveyor belt).

## Declaration

```csharp
internal interface ITransporterItem
```

## Inheritance

- [ITransporterItem](ITransporterItem.md)

## Properties

### BindPoint {#p-cuttheropedx-gamemain-itransporteritem-bindpoint}

```csharp
public Vector BindPoint { get; }
```

World-space point where the item attaches to the transporter.

### CollisionRadius {#p-cuttheropedx-gamemain-itransporteritem-collisionradius}

```csharp
public float CollisionRadius { get; }
```

Collision radius used for transporter interaction.

### IsDrawnByTransporter {#p-cuttheropedx-gamemain-itransporteritem-isdrawnbytransporter}

```csharp
public bool IsDrawnByTransporter { get; set; }
```

Whether the transporter is responsible for drawing this item.

### MaxScale {#p-cuttheropedx-gamemain-itransporteritem-maxscale}

```csharp
public float MaxScale { get; }
```

Maximum scale applied while on the transporter.

### MinScale {#p-cuttheropedx-gamemain-itransporteritem-minscale}

```csharp
public float MinScale { get; }
```

Minimum scale applied while on the transporter.

### PositionOnTransporter {#p-cuttheropedx-gamemain-itransporteritem-positionontransporter}

```csharp
public float PositionOnTransporter { get; set; }
```

Normalized position along the transporter path (0–1).

### TransporterScale {#p-cuttheropedx-gamemain-itransporteritem-transporterscale}

```csharp
public float TransporterScale { get; set; }
```

Current scale factor applied by the transporter.

## Methods

### SetBindPoint(Vector point) {#m-cuttheropedx-gamemain-itransporteritem-setbindpoint-cuttheropedx-framework-core-vector}

```csharp
public abstract void SetBindPoint(Vector point)
```

Sets the bind point to `point`.

Parameters:

- `point`: New bind point.


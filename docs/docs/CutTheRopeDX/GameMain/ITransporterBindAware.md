---
title: Interface ITransporterBindAware
description: Optional callback invoked right before an object is bound to a transporter.
---

# Interface ITransporterBindAware

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `ConveyorInterfaces.cs`

Optional callback invoked right before an object is bound to a transporter.

## Declaration

```csharp
internal interface ITransporterBindAware
```

## Inheritance

- [ITransporterBindAware](ITransporterBindAware.md)

## Methods

### WillBind() {#m-cuttheropedx-gamemain-itransporterbindaware-willbind}

```csharp
public abstract void WillBind()
```

Called right before the object is bound to a transporter.


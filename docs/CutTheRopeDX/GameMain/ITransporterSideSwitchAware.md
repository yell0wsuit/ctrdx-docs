---
title: Interface ITransporterSideSwitchAware
description: Optional callback invoked when an object wraps to the opposite transporter side.
---

# Interface ITransporterSideSwitchAware

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `ConveyorInterfaces.cs`

Optional callback invoked when an object wraps to the opposite transporter side.

## Declaration

```csharp
internal interface ITransporterSideSwitchAware
```

## Inheritance

- [ITransporterSideSwitchAware](ITransporterSideSwitchAware.md)

## Methods

### DidMoveToOtherSide() {#m-cuttheropedx-gamemain-itransportersideswitchaware-didmovetootherside}

```csharp
public abstract void DidMoveToOtherSide()
```

Called when the object wraps to the opposite transporter side.


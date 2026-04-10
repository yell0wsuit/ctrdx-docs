---
title: Interface IRocketDelegate
description: Callback interface for receiving rocket lifecycle events.
---

# Interface IRocketDelegate

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `RocketDelegate.cs`

Callback interface for receiving rocket lifecycle events.

## Declaration

```csharp
internal interface IRocketDelegate
```

## Inheritance

- [IRocketDelegate](IRocketDelegate.md)

## Methods

### Exhausted(Rocket rocket) {#m-cuttheropedx-gamemain-irocketdelegate-exhausted-cuttheropedx-gamemain-rocket}

```csharp
public abstract void Exhausted(Rocket rocket)
```

Called when a rocket has exhausted its fuel and finished its scale-down animation.

Parameters:

- `rocket`: The rocket that has been exhausted.


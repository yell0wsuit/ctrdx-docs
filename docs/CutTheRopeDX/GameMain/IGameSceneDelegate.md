---
title: Interface IGameSceneDelegate
description: Receives win/lose notifications from the game scene.
---

# Interface IGameSceneDelegate

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `GameSceneDelegate.cs`

Receives win/lose notifications from the game scene.

## Declaration

```csharp
internal interface IGameSceneDelegate
```

## Inheritance

- [IGameSceneDelegate](IGameSceneDelegate.md)

## Methods

### GameLost() {#m-cuttheropedx-gamemain-igamescenedelegate-gamelost}

```csharp
public abstract void GameLost()
```

Called when the player loses the level.

### GameWon() {#m-cuttheropedx-gamemain-igamescenedelegate-gamewon}

```csharp
public abstract void GameWon()
```

Called when the player wins the level.


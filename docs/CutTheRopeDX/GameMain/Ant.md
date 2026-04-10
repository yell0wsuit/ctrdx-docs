---
title: Class Ant
description: A single ant instance marching along an AntsPath.
---

# Class Ant

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Ant.cs`

A single ant instance marching along an [AntsPath](AntsPath.md).

## Declaration

```csharp
internal sealed class Ant
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [Ant](Ant.md)

## Fields

### animation {#f-cuttheropedx-gamemain-ant-animation}

```csharp
public Animation animation
```

The sprite animation used to render this ant.

### baseScale {#f-cuttheropedx-gamemain-ant-basescale}

```csharp
public float baseScale
```

Per-instance scale multiplier, randomised in [0.8, 1.2] at spawn for visual variety.

### offset {#f-cuttheropedx-gamemain-ant-offset}

```csharp
public float offset
```

Current position along the path in world units, measured from the path start.


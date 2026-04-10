---
title: Struct Particle
description: State data for a single particle in a Particles system.
---

# Struct Particle

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `Particle.cs`

State data for a single particle in a [Particles](Particles.md) system.

## Declaration

```csharp
internal sealed struct Particle
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [Particle](Particle.md)

## Fields

### angle {#f-cuttheropedx-framework-visual-particle-angle}

```csharp
public float angle
```

Current rotation angle in degrees.

### color {#f-cuttheropedx-framework-visual-particle-color}

```csharp
public RGBAColor color
```

Current color.

### deltaAngle {#f-cuttheropedx-framework-visual-particle-deltaangle}

```csharp
public float deltaAngle
```

Per-second rotation change in degrees.

### deltaColor {#f-cuttheropedx-framework-visual-particle-deltacolor}

```csharp
public RGBAColor deltaColor
```

Per-second color change rate.

### deltaSize {#f-cuttheropedx-framework-visual-particle-deltasize}

```csharp
public float deltaSize
```

Per-second size change rate.

### dir {#f-cuttheropedx-framework-visual-particle-dir}

```csharp
public Vector dir
```

Current velocity direction and magnitude.

### height {#f-cuttheropedx-framework-visual-particle-height}

```csharp
public float height
```

Particle height.

### life {#f-cuttheropedx-framework-visual-particle-life}

```csharp
public float life
```

Remaining lifetime in seconds.

### pos {#f-cuttheropedx-framework-visual-particle-pos}

```csharp
public Vector pos
```

Current position relative to the emitter.

### radialAccel {#f-cuttheropedx-framework-visual-particle-radialaccel}

```csharp
public float radialAccel
```

Radial acceleration away from the emitter center.

### size {#f-cuttheropedx-framework-visual-particle-size}

```csharp
public float size
```

Current particle size.

### startPos {#f-cuttheropedx-framework-visual-particle-startpos}

```csharp
public Vector startPos
```

Position at spawn time.

### tangentialAccel {#f-cuttheropedx-framework-visual-particle-tangentialaccel}

```csharp
public float tangentialAccel
```

Tangential acceleration perpendicular to the radial direction.

### width {#f-cuttheropedx-framework-visual-particle-width}

```csharp
public float width
```

Particle width.


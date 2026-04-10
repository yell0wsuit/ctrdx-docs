---
title: Record Struct FingerParticlesConfig
description: Configuration for one reusable finger-trace particle emitter.
---

# Record Struct FingerParticlesConfig

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `FingerParticles.cs`

Configuration for one reusable finger-trace particle emitter.

## Declaration

```csharp
internal sealed readonly record struct FingerParticlesConfig : IEquatable<FingerParticlesConfig>
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [FingerParticlesConfig](FingerParticlesConfig.md)

## Implements

- [IEquatable<FingerParticlesConfig>](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1?view=net-10.0)

## Constructors

### FingerParticlesConfig(int FirstQuad, int QuadCount, float AngleVarianceDegrees, float Speed, float SpeedVariance, float Life, float LifeVariance, float StartScale, float StartScaleVariance, float EndScale, float SpinDegrees, float SpinVarianceDegrees, bool SpinIsTotalDegreesOverLife, float SpawnPositionVariance, float RadialAcceleration, float GravityY, FingerTraceBlendMode BlendMode, float Alpha, bool FadeAlphaWithLife, bool RotateToVelocity, int Capacity = 100) {#m-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-ctor-system-int32-system-int32-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-boolean-system-single-system-single-system-single-cuttheropedx-framework-visual-fingertraceblendmode-system-single-system-boolean-system-boolean-system-int32}

```csharp
public FingerParticlesConfig(int FirstQuad, int QuadCount, float AngleVarianceDegrees, float Speed, float SpeedVariance, float Life, float LifeVariance, float StartScale, float StartScaleVariance, float EndScale, float SpinDegrees, float SpinVarianceDegrees, bool SpinIsTotalDegreesOverLife, float SpawnPositionVariance, float RadialAcceleration, float GravityY, FingerTraceBlendMode BlendMode, float Alpha, bool FadeAlphaWithLife, bool RotateToVelocity, int Capacity = 100)
```

Configuration for one reusable finger-trace particle emitter.

Parameters:

- `FirstQuad`: The first particle quad index in the finger-trace atlas.
- `QuadCount`: The number of particle quads available starting at `FirstQuad`.
- `AngleVarianceDegrees`: The random angular spread in degrees around the emitter rotation.
- `Speed`: The base particle launch speed.
- `SpeedVariance`: The symmetric random speed delta applied around `Speed`.
- `Life`: The base lifetime in seconds for each spawned particle.
- `LifeVariance`: The symmetric random lifetime delta applied around `Life`.
- `StartScale`: The base starting scale of each particle sprite.
- `StartScaleVariance`: The symmetric random scale delta applied around `StartScale`.
- `EndScale`: The final scale approached at the end of the particle lifetime.
- `SpinDegrees`: The base spin in degrees applied to non-velocity-aligned particles.
- `SpinVarianceDegrees`: The symmetric random spin delta applied around `SpinDegrees`.
- `SpinIsTotalDegreesOverLife`: `true` to interpret `SpinDegrees` as total rotation over the whole lifetime; otherwise as per-second rotation.
- `SpawnPositionVariance`: The symmetric spawn-position jitter applied around the emitter position.
- `RadialAcceleration`: The inward radial acceleration toward the spawn point after emission.
- `GravityY`: The constant Y acceleration applied each frame.
- `BlendMode`: The blend mode used for emitted particle sprites.
- `Alpha`: The base alpha multiplier applied to emitted particle sprites.
- `FadeAlphaWithLife`: `true` to scale sprite alpha by remaining life ratio; otherwise keep `Alpha` constant.
- `RotateToVelocity`: `true` to align particle rotation to velocity; otherwise advance the configured spin value.
- `Capacity`: The maximum number of live particles retained by the emitter.

## Properties

### Alpha {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-alpha}

```csharp
public float Alpha { get; set; }
```

The base alpha multiplier applied to emitted particle sprites.

### AngleVarianceDegrees {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-anglevariancedegrees}

```csharp
public float AngleVarianceDegrees { get; set; }
```

The random angular spread in degrees around the emitter rotation.

### BlendMode {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-blendmode}

```csharp
public FingerTraceBlendMode BlendMode { get; set; }
```

The blend mode used for emitted particle sprites.

### Capacity {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-capacity}

```csharp
public int Capacity { get; set; }
```

The maximum number of live particles retained by the emitter.

### EndScale {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-endscale}

```csharp
public float EndScale { get; set; }
```

The final scale approached at the end of the particle lifetime.

### FadeAlphaWithLife {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-fadealphawithlife}

```csharp
public bool FadeAlphaWithLife { get; set; }
```

`true` to scale sprite alpha by remaining life ratio; otherwise keep `Alpha` constant.

### FirstQuad {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-firstquad}

```csharp
public int FirstQuad { get; set; }
```

The first particle quad index in the finger-trace atlas.

### GravityY {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-gravityy}

```csharp
public float GravityY { get; set; }
```

The constant Y acceleration applied each frame.

### Life {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-life}

```csharp
public float Life { get; set; }
```

The base lifetime in seconds for each spawned particle.

### LifeVariance {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-lifevariance}

```csharp
public float LifeVariance { get; set; }
```

The symmetric random lifetime delta applied around `Life`.

### QuadCount {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-quadcount}

```csharp
public int QuadCount { get; set; }
```

The number of particle quads available starting at `FirstQuad`.

### RadialAcceleration {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-radialacceleration}

```csharp
public float RadialAcceleration { get; set; }
```

The inward radial acceleration toward the spawn point after emission.

### RotateToVelocity {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-rotatetovelocity}

```csharp
public bool RotateToVelocity { get; set; }
```

`true` to align particle rotation to velocity; otherwise advance the configured spin value.

### SpawnPositionVariance {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-spawnpositionvariance}

```csharp
public float SpawnPositionVariance { get; set; }
```

The symmetric spawn-position jitter applied around the emitter position.

### Speed {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-speed}

```csharp
public float Speed { get; set; }
```

The base particle launch speed.

### SpeedVariance {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-speedvariance}

```csharp
public float SpeedVariance { get; set; }
```

The symmetric random speed delta applied around `Speed`.

### SpinDegrees {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-spindegrees}

```csharp
public float SpinDegrees { get; set; }
```

The base spin in degrees applied to non-velocity-aligned particles.

### SpinIsTotalDegreesOverLife {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-spinistotaldegreesoverlife}

```csharp
public bool SpinIsTotalDegreesOverLife { get; set; }
```

`true` to interpret `SpinDegrees` as total rotation over the whole lifetime; otherwise as per-second rotation.

### SpinVarianceDegrees {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-spinvariancedegrees}

```csharp
public float SpinVarianceDegrees { get; set; }
```

The symmetric random spin delta applied around `SpinDegrees`.

### StartScale {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-startscale}

```csharp
public float StartScale { get; set; }
```

The base starting scale of each particle sprite.

### StartScaleVariance {#p-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig-startscalevariance}

```csharp
public float StartScaleVariance { get; set; }
```

The symmetric random scale delta applied around `StartScale`.


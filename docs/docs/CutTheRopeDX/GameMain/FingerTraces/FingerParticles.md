---
title: Class FingerParticles
description: Shared particle emitter used by named finger traces.
---

# Class FingerParticles

Namespace: `CutTheRopeDX.GameMain.FingerTraces`

Assembly: `CutTheRope-DX.dll`

Source: `FingerParticles.cs`

Shared particle emitter used by named finger traces.

## Declaration

```csharp
internal sealed class FingerParticles : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../../Framework/FrameworkTypes.md)
- [FingerParticles](FingerParticles.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### FingerParticles(FingerParticlesConfig config) {#m-cuttheropedx-gamemain-fingertraces-fingerparticles-ctor-cuttheropedx-gamemain-fingertraces-fingerparticlesconfig}

```csharp
public FingerParticles(FingerParticlesConfig config)
```

Shared particle emitter used by named finger traces.

Parameters:

- `config`: The particle-emitter configuration that controls spawn and motion behavior.

## Fields

### config {#f-cuttheropedx-gamemain-fingertraces-fingerparticles-config}

```csharp
private readonly FingerParticlesConfig config
```

Immutable emitter configuration controlling spawn and update behavior.

### emissionRate {#f-cuttheropedx-gamemain-fingertraces-fingerparticles-emissionrate}

```csharp
private float emissionRate
```

Requested particle emission rate in particles per second.

### emitCounter {#f-cuttheropedx-gamemain-fingertraces-fingerparticles-emitcounter}

```csharp
private float emitCounter
```

Accumulated elapsed time toward the next particle emission.

### emitterPosition {#f-cuttheropedx-gamemain-fingertraces-fingerparticles-emitterposition}

```csharp
private Vector emitterPosition
```

Current emitter position used for newly spawned particles.

### emitterRotation {#f-cuttheropedx-gamemain-fingertraces-fingerparticles-emitterrotation}

```csharp
private float emitterRotation
```

Current emitter rotation in degrees used as the center emission direction.

### particles {#f-cuttheropedx-gamemain-fingertraces-fingerparticles-particles}

```csharp
private readonly List<FingerParticles.FingerParticle> particles
```

Live particles currently managed by the emitter.

## Properties

### HasLiveParticles {#p-cuttheropedx-gamemain-fingertraces-fingerparticles-hasliveparticles}

```csharp
public bool HasLiveParticles { get; }
```

Gets a value indicating whether live particles or active emission remain.

## Methods

### AppendSprites(List&lt;FingerTraceSpritePose&gt; sprites) {#m-cuttheropedx-gamemain-fingertraces-fingerparticles-appendsprites-system-collections-generic-list-cuttheropedx-framework-visual-fingertracespritepose}

```csharp
public void AppendSprites(List<FingerTraceSpritePose> sprites)
```

Appends the current particle visuals as trace snapshot sprites.

Parameters:

- `sprites`: Destination list that receives particle sprite poses.

### CreateParticle() {#m-cuttheropedx-gamemain-fingertraces-fingerparticles-createparticle}

```csharp
private FingerParticles.FingerParticle CreateParticle()
```

Creates one new particle from the current emitter state and configuration.

Returns: The initialized particle state for the next emitted particle.

### NextInt(int upperExclusive) {#m-cuttheropedx-gamemain-fingertraces-fingerparticles-nextint-system-int32}

```csharp
private static int NextInt(int upperExclusive)
```

Returns a random integer in the range `[0, `upperExclusive`)`.

Parameters:

- `upperExclusive`: The exclusive upper bound.

Returns: A random integer less than `upperExclusive`.

### Reset() {#m-cuttheropedx-gamemain-fingertraces-fingerparticles-reset}

```csharp
public void Reset()
```

Clears all particles and resets the emitter.

### SetEmissionRate(float rate) {#m-cuttheropedx-gamemain-fingertraces-fingerparticles-setemissionrate-system-single}

```csharp
public void SetEmissionRate(float rate)
```

Sets the requested particle emission rate in particles per second.

Parameters:

- `rate`: Requested emission rate in particles per second.

### SetPosition(Vector position) {#m-cuttheropedx-gamemain-fingertraces-fingerparticles-setposition-cuttheropedx-framework-core-vector}

```csharp
public void SetPosition(Vector position)
```

Sets the position used for newly emitted particles.

Parameters:

- `position`: Emitter position for newly spawned particles.

### SetRotation(float rotation) {#m-cuttheropedx-gamemain-fingertraces-fingerparticles-setrotation-system-single}

```csharp
public void SetRotation(float rotation)
```

Sets the center emission rotation in degrees.

Parameters:

- `rotation`: Emitter rotation in degrees.

### Update(float delta) {#m-cuttheropedx-gamemain-fingertraces-fingerparticles-update-system-single}

```csharp
public void Update(float delta)
```

Advances the emitter and all live particles for one frame.

Parameters:

- `delta`: Elapsed frame time in seconds.


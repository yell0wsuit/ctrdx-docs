---
title: Class Particles
description: A BaseElement that emits and simulates point-sprite particles with gravity, acceleration, and color transitions.
---

# Class Particles

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `Particles.cs`

A [BaseElement](BaseElement.md) that emits and simulates point-sprite particles with gravity, acceleration, and color transitions.

## Declaration

```csharp
internal class Particles : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Particles](Particles.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [MultiParticles](MultiParticles.md)

## Fields

### active {#f-cuttheropedx-framework-visual-particles-active}

```csharp
public bool active
```

Whether the system is currently emitting particles.

### angle {#f-cuttheropedx-framework-visual-particles-angle}

```csharp
public float angle
```

Emission angle in degrees.

### angleVar {#f-cuttheropedx-framework-visual-particles-anglevar}

```csharp
public float angleVar
```

Emission angle variance in degrees.

### blendAdditive {#f-cuttheropedx-framework-visual-particles-blendadditive}

```csharp
public bool blendAdditive
```

Whether additive blending is enabled.

### colors {#f-cuttheropedx-framework-visual-particles-colors}

```csharp
public RGBAColor[] colors
```

Per-particle colors for rendering.

### duration {#f-cuttheropedx-framework-visual-particles-duration}

```csharp
public float duration
```

Emission duration in seconds, or -1 for infinite.

### elapsed {#f-cuttheropedx-framework-visual-particles-elapsed}

```csharp
public float elapsed
```

Elapsed time since the system started.

### emissionRate {#f-cuttheropedx-framework-visual-particles-emissionrate}

```csharp
public float emissionRate
```

Number of particles emitted per second.

### emitCounter {#f-cuttheropedx-framework-visual-particles-emitcounter}

```csharp
public float emitCounter
```

Accumulated time for emission rate tracking.

### endColor {#f-cuttheropedx-framework-visual-particles-endcolor}

```csharp
public RGBAColor endColor
```

End color particles transition to over their lifetime.

### endColorVar {#f-cuttheropedx-framework-visual-particles-endcolorvar}

```csharp
public RGBAColor endColorVar
```

End color variance.

### gravity {#f-cuttheropedx-framework-visual-particles-gravity}

```csharp
public Vector gravity
```

Gravity vector applied to all particles.

### life {#f-cuttheropedx-framework-visual-particles-life}

```csharp
public float life
```

Particle lifetime in seconds.

### lifeVar {#f-cuttheropedx-framework-visual-particles-lifevar}

```csharp
public float lifeVar
```

Lifetime variance in seconds.

### particleCount {#f-cuttheropedx-framework-visual-particles-particlecount}

```csharp
public int particleCount
```

Current number of live particles.

### particleIdx {#f-cuttheropedx-framework-visual-particles-particleidx}

```csharp
public int particleIdx
```

Current particle index during update iteration.

### particles {#f-cuttheropedx-framework-visual-particles-particles}

```csharp
public Particle[] particles
```

Array of all particle instances.

### particlesDelegate {#f-cuttheropedx-framework-visual-particles-particlesdelegate}

```csharp
public Particles.ParticlesFinished particlesDelegate
```

Callback invoked when all particles have expired after the system stops.

### posVar {#f-cuttheropedx-framework-visual-particles-posvar}

```csharp
public Vector posVar
```

Position variance for randomized spawn offsets.

### radialAccel {#f-cuttheropedx-framework-visual-particles-radialaccel}

```csharp
public float radialAccel
```

Radial acceleration.

### radialAccelVar {#f-cuttheropedx-framework-visual-particles-radialaccelvar}

```csharp
public float radialAccelVar
```

Radial acceleration variance.

### size {#f-cuttheropedx-framework-visual-particles-size}

```csharp
public float size
```

Initial particle size.

### sizeVar {#f-cuttheropedx-framework-visual-particles-sizevar}

```csharp
public float sizeVar
```

Size variance.

### speed {#f-cuttheropedx-framework-visual-particles-speed}

```csharp
public float speed
```

Initial particle speed.

### speedVar {#f-cuttheropedx-framework-visual-particles-speedvar}

```csharp
public float speedVar
```

Speed variance.

### startColor {#f-cuttheropedx-framework-visual-particles-startcolor}

```csharp
public RGBAColor startColor
```

Start color for new particles.

### startColorVar {#f-cuttheropedx-framework-visual-particles-startcolorvar}

```csharp
public RGBAColor startColorVar
```

Start color variance.

### tangentialAccel {#f-cuttheropedx-framework-visual-particles-tangentialaccel}

```csharp
public float tangentialAccel
```

Tangential acceleration.

### tangentialAccelVar {#f-cuttheropedx-framework-visual-particles-tangentialaccelvar}

```csharp
public float tangentialAccelVar
```

Tangential acceleration variance.

### texture {#f-cuttheropedx-framework-visual-particles-texture}

```csharp
public Texture2D texture
```

Texture used for rendering particles.

### totalParticles {#f-cuttheropedx-framework-visual-particles-totalparticles}

```csharp
public int totalParticles
```

Maximum number of particles.

### vertices {#f-cuttheropedx-framework-visual-particles-vertices}

```csharp
public PointSprite[] vertices
```

Point sprite positions and sizes for rendering.

## Methods

### AddParticle() {#m-cuttheropedx-framework-visual-particles-addparticle}

```csharp
public virtual bool AddParticle()
```

Adds a new particle if the system is not full. Returns `true` if added.

Returns: `true` when a particle was added; otherwise `false`.

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-particles-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-framework-visual-particles-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### InitParticle(ref Particle particle) {#m-cuttheropedx-framework-visual-particles-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public virtual void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### InitWithTotalParticles(int numberOfParticles) {#m-cuttheropedx-framework-visual-particles-initwithtotalparticles-system-int32}

```csharp
public virtual Particles InitWithTotalParticles(int numberOfParticles)
```

Initializes the particle system with the specified capacity.

Parameters:

- `numberOfParticles`: Maximum number of particles.

Returns: The initialized particle system, or `null` if allocation fails.

### IsFull() {#m-cuttheropedx-framework-visual-particles-isfull}

```csharp
public virtual bool IsFull()
```

Returns `true` if the particle count has reached the maximum capacity.

Returns: `true` when the system is full; otherwise `false`.

### ResetSystem() {#m-cuttheropedx-framework-visual-particles-resetsystem}

```csharp
public virtual void ResetSystem()
```

Resets the elapsed time and emission counter without stopping the system.

### RotatePreCalc(Vector v, float cosA, float sinA, float cx, float cy) {#m-cuttheropedx-framework-visual-particles-rotateprecalc-cuttheropedx-framework-core-vector-system-single-system-single-system-single-system-single}

```csharp
public static Vector RotatePreCalc(Vector v, float cosA, float sinA, float cx, float cy)
```

Rotates a vector around a center point using precomputed cos/sin values.

Parameters:

- `v`: Vector to rotate.
- `cosA`: Cosine of the rotation angle.
- `sinA`: Sine of the rotation angle.
- `cx`: Center X.
- `cy`: Center Y.

Returns: The rotated vector.

### SetBlendAdditive(bool b) {#m-cuttheropedx-framework-visual-particles-setblendadditive-system-boolean}

```csharp
public virtual void SetBlendAdditive(bool b)
```

Sets whether particles use additive blending.

Parameters:

- `b`: `true` for additive blending, `false` for alpha blending.

### StartSystem(int initialParticles) {#m-cuttheropedx-framework-visual-particles-startsystem-system-int32}

```csharp
public virtual void StartSystem(int initialParticles)
```

Starts the particle system, spawning an initial batch of particles.

Parameters:

- `initialParticles`: Number of particles to spawn immediately.

### StopSystem() {#m-cuttheropedx-framework-visual-particles-stopsystem}

```csharp
public virtual void StopSystem()
```

Stops emitting new particles. Existing particles continue until they expire.

### Update(float delta) {#m-cuttheropedx-framework-visual-particles-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateParticle(ref Particle p, float delta) {#m-cuttheropedx-framework-visual-particles-updateparticle-cuttheropedx-framework-visual-particle-system-single}

```csharp
public virtual void UpdateParticle(ref Particle p, float delta)
```

Updates a single particle's physics, color, and lifetime. Removes it if dead.

Parameters:

- `p`: Particle to update.
- `delta`: Elapsed time in seconds.


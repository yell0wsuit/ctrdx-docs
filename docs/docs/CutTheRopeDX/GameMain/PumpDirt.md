---
title: Class PumpDirt
description: Particle system for the pump dirt/flow effect.
---

# Class PumpDirt

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `PumpDirt.cs`

Particle system for the pump dirt/flow effect.

## Declaration

```csharp
internal sealed class PumpDirt : MultiParticles
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Particles](../Framework/Visual/Particles.md)
- [MultiParticles](../Framework/Visual/MultiParticles.md)
- [PumpDirt](PumpDirt.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### FlowDragPerFrame {#f-cuttheropedx-gamemain-pumpdirt-flowdragperframe}

```csharp
private const float FlowDragPerFrame
```

Per-frame drag applied to particle velocity (at 60 FPS).

### TargetFps {#f-cuttheropedx-gamemain-pumpdirt-targetfps}

```csharp
private const float TargetFps
```

Target frame rate used to normalize drag and travel distance.

## Methods

### ConfigureForFlowLength(float flowLength) {#m-cuttheropedx-gamemain-pumpdirt-configureforflowlength-system-single}

```csharp
private void ConfigureForFlowLength(float flowLength)
```

Adjusts speed so particles travel approximately the requested flow length.

Parameters:

- `flowLength`: Approximate world-space distance particles should travel.

### InitParticle(ref Particle particle) {#m-cuttheropedx-gamemain-pumpdirt-initparticle-cuttheropedx-framework-visual-particle}

```csharp
public override void InitParticle(ref Particle particle)
```

Initializes a `particle` with randomized values based on emitter settings.

Parameters:

- `particle`: Particle to initialize.

### InitWithTotalParticlesAngleandImageGrid(int p, float a, Image grid) {#m-cuttheropedx-gamemain-pumpdirt-initwithtotalparticlesangleandimagegrid-system-int32-system-single-cuttheropedx-framework-visual-image}

```csharp
public PumpDirt InitWithTotalParticlesAngleandImageGrid(int p, float a, Image grid)
```

Initializes the pump dirt system with default parameters.

Parameters:

- `p`: Maximum number of particles managed by the system.
- `a`: Emission angle in degrees.
- `grid`: Image grid that supplies particle texture quads.

Returns: The initialized pump dirt system, or `null` if initialization failed.

### InitWithTotalParticlesAngleandImageGrid(int p, float a, Image grid, float flowLength) {#m-cuttheropedx-gamemain-pumpdirt-initwithtotalparticlesangleandimagegrid-system-int32-system-single-cuttheropedx-framework-visual-image-system-single}

```csharp
public PumpDirt InitWithTotalParticlesAngleandImageGrid(int p, float a, Image grid, float flowLength)
```

Initializes the pump dirt system and configures the travel length.

Parameters:

- `p`: Maximum number of particles managed by the system.
- `a`: Emission angle in degrees.
- `grid`: Image grid that supplies particle texture quads.
- `flowLength`: Approximate world-space distance particles should travel.

Returns: The initialized pump dirt system, or `null` if initialization failed.

### Update(float delta) {#m-cuttheropedx-gamemain-pumpdirt-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateParticle(ref Particle p, float delta) {#m-cuttheropedx-gamemain-pumpdirt-updateparticle-cuttheropedx-framework-visual-particle-system-single}

```csharp
public override void UpdateParticle(ref Particle p, float delta)
```

Updates a single particle's physics, color, and lifetime. Removes it if dead.

Parameters:

- `p`: Particle to update.
- `delta`: Elapsed time in seconds.


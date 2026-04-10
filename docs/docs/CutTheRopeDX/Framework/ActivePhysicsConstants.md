---
title: Class ActivePhysicsConstants
description: Runtime-selected physics constants. Applies raw Windows Phone constants transformed into PC world units, with PC fallback.
---

# Class ActivePhysicsConstants

Namespace: `CutTheRopeDX.Framework`

Assembly: `CutTheRope-DX.dll`

Source: `ActivePhysicsConstants.cs`

Runtime-selected physics constants. Applies raw Windows Phone constants transformed into PC world units, with PC fallback.

## Declaration

```csharp
internal static class ActivePhysicsConstants
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ActivePhysicsConstants](ActivePhysicsConstants.md)

## Fields

### DesktopMoverSpeedScale {#f-cuttheropedx-framework-activephysicsconstants-desktopmoverspeedscale}

```csharp
public const float DesktopMoverSpeedScale
```

Mover speed scale used by the desktop physics tuning.

### Wp7ToWorldScale {#f-cuttheropedx-framework-activephysicsconstants-wp7toworldscale}

```csharp
public const float Wp7ToWorldScale
```

Scale factor between Windows Phone coordinate units and desktop world units.

## Properties

### BouncerCollisionRadius {#p-cuttheropedx-framework-activephysicsconstants-bouncercollisionradius}

```csharp
public static float BouncerCollisionRadius { get; }
```

Collision radius used by bouncers.

### BouncerHeight {#p-cuttheropedx-framework-activephysicsconstants-bouncerheight}

```csharp
public static float BouncerHeight { get; }
```

Height offset used by bouncers.

### BouncerImpulseVelocityScale {#p-cuttheropedx-framework-activephysicsconstants-bouncerimpulsevelocityscale}

```csharp
public static float BouncerImpulseVelocityScale { get; }
```

Velocity scale applied to bouncer impulses.

### BouncerMinImpulse {#p-cuttheropedx-framework-activephysicsconstants-bouncerminimpulse}

```csharp
public static float BouncerMinImpulse { get; }
```

Minimum impulse applied by bouncers.

### BubbleCaptureRadius {#p-cuttheropedx-framework-activephysicsconstants-bubblecaptureradius}

```csharp
public static float BubbleCaptureRadius { get; }
```

Radius used when a bubble captures the candy.

### BubbleImpulseDamping {#p-cuttheropedx-framework-activephysicsconstants-bubbleimpulsedamping}

```csharp
public static float BubbleImpulseDamping { get; }
```

Damping applied while a bubble carries the candy.

### BubbleImpulseY {#p-cuttheropedx-framework-activephysicsconstants-bubbleimpulsey}

```csharp
public static float BubbleImpulseY { get; }
```

Upward impulse applied by bubbles.

### BungeeConstraintSlack {#p-cuttheropedx-framework-activephysicsconstants-bungeeconstraintslack}

```csharp
public static float BungeeConstraintSlack { get; }
```

Slack distance allowed in bungee constraints.

### BungeeDrawSamplePoints {#p-cuttheropedx-framework-activephysicsconstants-bungeedrawsamplepoints}

```csharp
public static int BungeeDrawSamplePoints { get; }
```

Number of sample points drawn for each bungee segment.

### BungeeRelaxThresholdHard {#p-cuttheropedx-framework-activephysicsconstants-bungeerelaxthresholdhard}

```csharp
public static float BungeeRelaxThresholdHard { get; }
```

Hard relaxation threshold for bungee constraints.

### BungeeRelaxThresholdMedium {#p-cuttheropedx-framework-activephysicsconstants-bungeerelaxthresholdmedium}

```csharp
public static float BungeeRelaxThresholdMedium { get; }
```

Medium relaxation threshold for bungee constraints.

### BungeeRelaxThresholdSoft {#p-cuttheropedx-framework-activephysicsconstants-bungeerelaxthresholdsoft}

```csharp
public static float BungeeRelaxThresholdSoft { get; }
```

Soft relaxation threshold for bungee constraints.

### BungeeRestLength {#p-cuttheropedx-framework-activephysicsconstants-bungeerestlength}

```csharp
public static float BungeeRestLength { get; }
```

Rest length used by bungee rope constraints.

### BungeeRollBackOverflowPadding {#p-cuttheropedx-framework-activephysicsconstants-bungeerollbackoverflowpadding}

```csharp
public static float BungeeRollBackOverflowPadding { get; }
```

Extra rollback padding allowed when a bungee stretches past its limit.

### BungeeStretchRedThreshold {#p-cuttheropedx-framework-activephysicsconstants-bungeestretchredthreshold}

```csharp
public static float BungeeStretchRedThreshold { get; }
```

Stretch threshold at which bungee ropes render in the warning state.

### CandyBreakGravityY {#p-cuttheropedx-framework-activephysicsconstants-candybreakgravityy}

```csharp
public static float CandyBreakGravityY { get; }
```

Gravity acceleration applied to candy break particles.

### CandyGrabPadding {#p-cuttheropedx-framework-activephysicsconstants-candygrabpadding}

```csharp
public static float CandyGrabPadding { get; }
```

Padding used around candy grab interactions.

### DrawPtsBufferSize {#p-cuttheropedx-framework-activephysicsconstants-drawptsbuffersize}

```csharp
public static int DrawPtsBufferSize { get; }
```

Number of float entries allocated for rope drawing point buffers.

### GrabRopeRollMaxLength {#p-cuttheropedx-framework-activephysicsconstants-grabroperollmaxlength}

```csharp
public static float GrabRopeRollMaxLength { get; }
```

Maximum rope roll length used by grab mechanics.

### GrabWheelRotateDeltaMax {#p-cuttheropedx-framework-activephysicsconstants-grabwheelrotatedeltamax}

```csharp
public static float GrabWheelRotateDeltaMax { get; }
```

Maximum wheel rotation delta used by grab mechanics.

### GravityEarthY {#p-cuttheropedx-framework-activephysicsconstants-gravityearthy}

```csharp
public static float GravityEarthY { get; }
```

Vertical gravity acceleration applied to physics bodies.

### MoverPathScale {#p-cuttheropedx-framework-activephysicsconstants-moverpathscale}

```csharp
public static float MoverPathScale { get; }
```

Scale applied to mover path coordinates.

### MoverSpeedScale {#p-cuttheropedx-framework-activephysicsconstants-moverspeedscale}

```csharp
public static float MoverSpeedScale { get; }
```

Speed scale applied to mover traversal.

### RocketActiveVelocityDamping {#p-cuttheropedx-framework-activephysicsconstants-rocketactivevelocitydamping}

```csharp
public static float RocketActiveVelocityDamping { get; }
```

Velocity damping applied while a rocket is active.

### RocketImpulseScale {#p-cuttheropedx-framework-activephysicsconstants-rocketimpulsescale}

```csharp
public static float RocketImpulseScale { get; }
```

Impulse scale applied to rocket thrust.

### RocketPointWeight {#p-cuttheropedx-framework-activephysicsconstants-rocketpointweight}

```csharp
public static float RocketPointWeight { get; }
```

Physics weight assigned to rocket control points.

### RopePhysicsSpeedMultiplier {#p-cuttheropedx-framework-activephysicsconstants-ropephysicsspeedmultiplier}

```csharp
public static float RopePhysicsSpeedMultiplier { get; }
```

Speed multiplier applied to rope physics updates.

### SockSpeedKoeff {#p-cuttheropedx-framework-activephysicsconstants-sockspeedkoeff}

```csharp
public static float SockSpeedKoeff { get; }
```

Speed coefficient applied to sock movement.

### SockTeleportSpeedMultiplier {#p-cuttheropedx-framework-activephysicsconstants-sockteleportspeedmultiplier}

```csharp
public static float SockTeleportSpeedMultiplier { get; }
```

Speed multiplier used when teleporting through socks.

### SpiderTraversalSpeed {#p-cuttheropedx-framework-activephysicsconstants-spidertraversalspeed}

```csharp
public static float SpiderTraversalSpeed { get; }
```

Spider's traversal speed.

### SteamTubeCollisionRadiusScale {#p-cuttheropedx-framework-activephysicsconstants-steamtubecollisionradiusscale}

```csharp
public static float SteamTubeCollisionRadiusScale { get; }
```

Collision radius scale used by steam tube force volumes.

### SteamTubeDamping {#p-cuttheropedx-framework-activephysicsconstants-steamtubedamping}

```csharp
public static float SteamTubeDamping { get; }
```

Damping applied by steam tubes.

### SteamTubeGravityCompensation {#p-cuttheropedx-framework-activephysicsconstants-steamtubegravitycompensation}

```csharp
public static float SteamTubeGravityCompensation { get; }
```

Gravity compensation applied by steam tubes.

### SteamTubeNonAlignedDampingMultiplier {#p-cuttheropedx-framework-activephysicsconstants-steamtubenonaligneddampingmultiplier}

```csharp
public static float SteamTubeNonAlignedDampingMultiplier { get; }
```

Additional damping multiplier applied when a body is not aligned with a steam tube.

### SteamTubeOppositeGravityDivisor {#p-cuttheropedx-framework-activephysicsconstants-steamtubeoppositegravitydivisor}

```csharp
public static float SteamTubeOppositeGravityDivisor { get; }
```

Gravity divisor used for opposite-direction steam tube forces.

### SteamTubeSideGravityDivisor {#p-cuttheropedx-framework-activephysicsconstants-steamtubesidegravitydivisor}

```csharp
public static float SteamTubeSideGravityDivisor { get; }
```

Gravity divisor used for side-aligned steam tube forces.

### SteamTubeVerticalOffsetScale {#p-cuttheropedx-framework-activephysicsconstants-steamtubeverticaloffsetscale}

```csharp
public static float SteamTubeVerticalOffsetScale { get; }
```

Vertical offset scale used by steam tube force volumes.

### SteamTubeWidthScale {#p-cuttheropedx-framework-activephysicsconstants-steamtubewidthscale}

```csharp
public static float SteamTubeWidthScale { get; }
```

Width scale used by steam tube force volumes.

### TimeScale {#p-cuttheropedx-framework-activephysicsconstants-timescale}

```csharp
public static float TimeScale { get; }
```

Simulation timestep scale applied to physics updates.

### UseMobilePhysicsModel {#p-cuttheropedx-framework-activephysicsconstants-usemobilephysicsmodel}

```csharp
public static bool UseMobilePhysicsModel { get; set; }
```

Gets or sets a value indicating whether mobile physics tuning should be used.

### WaterCandyCollisionRadius {#p-cuttheropedx-framework-activephysicsconstants-watercandycollisionradius}

```csharp
public static float WaterCandyCollisionRadius { get; }
```

Collision radius used when candy interacts with water.

### WaterDamping {#p-cuttheropedx-framework-activephysicsconstants-waterdamping}

```csharp
public static float WaterDamping { get; }
```

Damping applied to bodies moving through water.

### WaterRocketDampingMultiplier {#p-cuttheropedx-framework-activephysicsconstants-waterrocketdampingmultiplier}

```csharp
public static float WaterRocketDampingMultiplier { get; }
```

Damping multiplier applied to rockets while interacting with water.

### WaterRocketImpulseDivisor {#p-cuttheropedx-framework-activephysicsconstants-waterrocketimpulsedivisor}

```csharp
public static float WaterRocketImpulseDivisor { get; }
```

Divisor applied to rocket impulse while interacting with water.

### WaterRopeAnchorImpulse {#p-cuttheropedx-framework-activephysicsconstants-waterropeanchorimpulse}

```csharp
public static float WaterRopeAnchorImpulse { get; }
```

Impulse applied to rope anchors while interacting with water.

### WaterSplashParticleYOffset {#p-cuttheropedx-framework-activephysicsconstants-watersplashparticleyoffset}

```csharp
public static float WaterSplashParticleYOffset { get; }
```

Vertical offset applied when spawning water splash particles.

### WaterSurfaceDetectionHeight {#p-cuttheropedx-framework-activephysicsconstants-watersurfacedetectionheight}

```csharp
public static float WaterSurfaceDetectionHeight { get; }
```

Height band used for detecting the water surface.

### WaterVerticalImpulseBase {#p-cuttheropedx-framework-activephysicsconstants-waterverticalimpulsebase}

```csharp
public static float WaterVerticalImpulseBase { get; }
```

Base vertical impulse applied by water interactions.

## Methods

### SelectRaw(float pc, float mobile) {#m-cuttheropedx-framework-activephysicsconstants-selectraw-system-single-system-single}

```csharp
private static float SelectRaw(float pc, float mobile)
```

Selects one of two raw floating-point tuning values.

Parameters:

- `pc`: Desktop tuning value.
- `mobile`: Mobile tuning value.

Returns: The active raw tuning value.

### SelectRaw(int pc, int mobile) {#m-cuttheropedx-framework-activephysicsconstants-selectraw-system-int32-system-int32}

```csharp
private static int SelectRaw(int pc, int mobile)
```

Selects one of two raw integer tuning values.

Parameters:

- `pc`: Desktop tuning value.
- `mobile`: Mobile tuning value.

Returns: The active raw tuning value.

### SelectScaled(float pc, float mobile) {#m-cuttheropedx-framework-activephysicsconstants-selectscaled-system-single-system-single}

```csharp
private static float SelectScaled(float pc, float mobile)
```

Selects a floating-point tuning value, scaling `mobile` values to desktop world units.

Parameters:

- `pc`: Desktop tuning value.
- `mobile`: Mobile tuning value.

Returns: The active tuning value in desktop world units.

### ToWorld(float value) {#m-cuttheropedx-framework-activephysicsconstants-toworld-system-single}

```csharp
private static float ToWorld(float value)
```

Converts a Windows Phone coordinate-space `value` to desktop world units.

Parameters:

- `value`: Value in Windows Phone coordinate units.

Returns: The `value` scaled into desktop world units.


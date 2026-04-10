---
title: Class SnowfallOverlay
description: Snow overlay ported from the HTML5 implementation. It renders animated snowflakes across the entire screen and fades them in/out when toggled.
---

# Class SnowfallOverlay

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `SnowfallOverlay.cs`

Snow overlay ported from the HTML5 implementation. It renders animated snowflakes across the entire screen and fades them in/out when toggled.

## Declaration

```csharp
internal sealed class SnowfallOverlay : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [SnowfallOverlay](SnowfallOverlay.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### SnowfallOverlay() {#m-cuttheropedx-gamemain-snowfalloverlay-ctor}

```csharp
private SnowfallOverlay()
```

Private constructor to initialize the snowfall overlay. Only enabled if Christmas event is active.

## Fields

### DriftSpeedMax {#f-cuttheropedx-gamemain-snowfalloverlay-driftspeedmax}

```csharp
private const float DriftSpeedMax
```

Maximum horizontal drift speed in pixels per second (applied in both directions).

### EdgeBuffer {#f-cuttheropedx-gamemain-snowfalloverlay-edgebuffer}

```csharp
private const float EdgeBuffer
```

Buffer zone around screen edges where snowflakes can spawn/despawn without visible pop-in.

### FadeDuration {#f-cuttheropedx-gamemain-snowfalloverlay-fadeduration}

```csharp
private const float FadeDuration
```

Duration in seconds for fade-in and fade-out transitions.

### FallSpeedMax {#f-cuttheropedx-gamemain-snowfalloverlay-fallspeedmax}

```csharp
private const float FallSpeedMax
```

Maximum vertical fall speed in pixels per second.

### FallSpeedMin {#f-cuttheropedx-gamemain-snowfalloverlay-fallspeedmin}

```csharp
private const float FallSpeedMin
```

Minimum vertical fall speed in pixels per second.

### MaxSnowflakes {#f-cuttheropedx-gamemain-snowfalloverlay-maxsnowflakes}

```csharp
private const int MaxSnowflakes
```

Maximum number of snowflakes that can be rendered simultaneously.

### MinSnowflakes {#f-cuttheropedx-gamemain-snowfalloverlay-minsnowflakes}

```csharp
private const int MinSnowflakes
```

Minimum number of snowflakes that will be rendered.

### SwingAmplitudeMax {#f-cuttheropedx-gamemain-snowfalloverlay-swingamplitudemax}

```csharp
private const float SwingAmplitudeMax
```

Maximum amplitude for horizontal swinging motion in pixels.

### SwingAmplitudeMin {#f-cuttheropedx-gamemain-snowfalloverlay-swingamplitudemin}

```csharp
private const float SwingAmplitudeMin
```

Minimum amplitude for horizontal swinging motion in pixels.

### SwingSpeedMax {#f-cuttheropedx-gamemain-snowfalloverlay-swingspeedmax}

```csharp
private const float SwingSpeedMax
```

Maximum frequency for swinging motion (radians per second).

### SwingSpeedMin {#f-cuttheropedx-gamemain-snowfalloverlay-swingspeedmin}

```csharp
private const float SwingSpeedMin
```

Minimum frequency for swinging motion (radians per second).

### TwinkleSpeedMax {#f-cuttheropedx-gamemain-snowfalloverlay-twinklespeedmax}

```csharp
private const float TwinkleSpeedMax
```

Maximum frequency for opacity twinkling effect (radians per second).

### TwinkleSpeedMin {#f-cuttheropedx-gamemain-snowfalloverlay-twinklespeedmin}

```csharp
private const float TwinkleSpeedMin
```

Minimum frequency for opacity twinkling effect (radians per second).

### fadeElapsed {#f-cuttheropedx-gamemain-snowfalloverlay-fadeelapsed}

```csharp
private float fadeElapsed
```

Time elapsed in the current fade transition.

### fadingOut {#f-cuttheropedx-gamemain-snowfalloverlay-fadingout}

```csharp
private bool fadingOut
```

Whether the effect is currently fading out before stopping.

### globalAlpha {#f-cuttheropedx-gamemain-snowfalloverlay-globalalpha}

```csharp
private float globalAlpha
```

Global alpha multiplier for all snowflakes (0-1), controlled by fade transitions.

### random_ {#f-cuttheropedx-gamemain-snowfalloverlay-random}

```csharp
private static readonly Random random_
```

Shared random number generator for all snowflake randomization.

### running {#f-cuttheropedx-gamemain-snowfalloverlay-running}

```csharp
private bool running
```

Whether the snowfall effect is currently active.

### snowflakes {#f-cuttheropedx-gamemain-snowfalloverlay-snowflakes}

```csharp
private readonly List<SnowfallOverlay.Snowflake> snowflakes
```

Collection of active snowflakes being rendered.

### texture {#f-cuttheropedx-gamemain-snowfalloverlay-texture}

```csharp
private CTRTexture2D texture
```

Texture containing snowflake sprite frames.

### textureUnavailable {#f-cuttheropedx-gamemain-snowfalloverlay-textureunavailable}

```csharp
private bool textureUnavailable
```

Flag indicating the snowflake texture failed to load and should not retry.

## Properties

### BaseCanvasArea {#p-cuttheropedx-gamemain-snowfalloverlay-basecanvasarea}

```csharp
private static float BaseCanvasArea { get; }
```

Base canvas area used for scaling snowflake count relative to screen size.

## Methods

### ComputeSnowflakeCount() {#m-cuttheropedx-gamemain-snowfalloverlay-computesnowflakecount}

```csharp
private static int ComputeSnowflakeCount()
```

Calculates the appropriate number of snowflakes based on screen size, scaling from the base canvas area while respecting min/max limits.

Returns: Snowflake count scaled to screen size.

### CreateIfEnabled() {#m-cuttheropedx-gamemain-snowfalloverlay-createifenabled}

```csharp
public static SnowfallOverlay CreateIfEnabled()
```

Factory method to create a snowfall overlay only when Christmas event is enabled.

Returns: A new [SnowfallOverlay](SnowfallOverlay.md) instance if Christmas event is active; otherwise, `null`.

### CreateSnowflake(bool populateScreen) {#m-cuttheropedx-gamemain-snowfalloverlay-createsnowflake-system-boolean}

```csharp
private SnowfallOverlay.Snowflake CreateSnowflake(bool populateScreen)
```

Creates a new snowflake with randomized properties for natural variation.

Parameters:

- `populateScreen`: If `true`, spawns across entire screen width; if `false`, spawns at top center.

Returns: A new [Snowflake](SnowfallOverlay.md) with randomized animation parameters.

### Draw() {#m-cuttheropedx-gamemain-snowfalloverlay-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### EnsureTexture() {#m-cuttheropedx-gamemain-snowfalloverlay-ensuretexture}

```csharp
private bool EnsureTexture()
```

Ensures the snowflake texture is loaded, loading it on first call.

Returns: `true` if texture is available; `false` if loading failed.

### IsFinite(float value) {#m-cuttheropedx-gamemain-snowfalloverlay-isfinite-system-single}

```csharp
private static bool IsFinite(float value)
```

Checks if a float value is finite (not NaN or infinity).

Parameters:

- `value`: Value to check.

Returns: `true` if the value is finite; `false` otherwise.

### PrepareSnowflakes() {#m-cuttheropedx-gamemain-snowfalloverlay-preparesnowflakes}

```csharp
private void PrepareSnowflakes()
```

Initializes the snowflake collection with randomized positions spread across the screen. Called when starting the effect.

### RandomRange(float min, float max) {#m-cuttheropedx-gamemain-snowfalloverlay-randomrange-system-single-system-single}

```csharp
private static float RandomRange(float min, float max)
```

Generates a random float value within the specified range.

Parameters:

- `min`: Minimum value (inclusive).
- `max`: Maximum value (inclusive).

Returns: Random value between min and max.

### ResetSnowflake(ref SnowfallOverlay.Snowflake flake) {#m-cuttheropedx-gamemain-snowfalloverlay-resetsnowflake-cuttheropedx-gamemain-snowfalloverlay-snowflake}

```csharp
private void ResetSnowflake(ref SnowfallOverlay.Snowflake flake)
```

Resets a snowflake that has moved off-screen by replacing it with a newly created one.

Parameters:

- `flake`: Reference to the snowflake to reset.

### Start() {#m-cuttheropedx-gamemain-snowfalloverlay-start}

```csharp
public void Start()
```

Starts the snowfall effect with a fade-in transition. Loads texture and initializes snowflakes on first run.

### Stop(bool immediate = false) {#m-cuttheropedx-gamemain-snowfalloverlay-stop-system-boolean}

```csharp
public void Stop(bool immediate = false)
```

Stops the snowfall effect, either immediately or with a fade-out transition.

Parameters:

- `immediate`: If `true`, stops instantly without fade-out; otherwise fades out over [FadeDuration](#f-cuttheropedx-gamemain-snowfalloverlay-fadeduration).

### Update(float delta) {#m-cuttheropedx-gamemain-snowfalloverlay-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateFade(float delta) {#m-cuttheropedx-gamemain-snowfalloverlay-updatefade-system-single}

```csharp
private void UpdateFade(float delta)
```

Updates the global alpha fade transition for smooth start/stop effects.

Parameters:

- `delta`: Time elapsed since last update in seconds.

### UpdateSnowflakes(float delta) {#m-cuttheropedx-gamemain-snowfalloverlay-updatesnowflakes-system-single}

```csharp
private void UpdateSnowflakes(float delta)
```

Updates all snowflake positions and animation phases. Resets snowflakes that have moved off-screen.

Parameters:

- `delta`: Time elapsed since last update in seconds.


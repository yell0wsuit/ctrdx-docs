---
title: Class CtrRenderer
description: Bridges the game's shared runtime to the platform rendering and lifecycle callbacks.
---

# Class CtrRenderer

Namespace: `CutTheRopeDX.Commons`

Assembly: `CutTheRope-DX.dll`

Source: `CtrRenderer.cs`

Bridges the game's shared runtime to the platform rendering and lifecycle callbacks.

## Declaration

```csharp
internal sealed class CtrRenderer : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [CtrRenderer](CtrRenderer.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### DELTA_NANOS {#f-cuttheropedx-commons-ctrrenderer-delta-nanos}

```csharp
private static readonly long DELTA_NANOS
```

The nominal frame duration in nanoseconds for the fixed-step renderer.

### DELTA_NANOS_THRES {#f-cuttheropedx-commons-ctrrenderer-delta-nanos-thres}

```csharp
private static readonly long DELTA_NANOS_THRES
```

The maximum timing drift tolerated before the pacing timeline is clamped.

### DRAW_NOTHING {#f-cuttheropedx-commons-ctrrenderer-draw-nothing}

```csharp
private static bool DRAW_NOTHING
```

Indicates whether frame rendering should be skipped temporarily.

### fpsDeltas {#f-cuttheropedx-commons-ctrrenderer-fpsdeltas}

```csharp
private static readonly long[] fpsDeltas
```

Stores recent frame deltas for FPS calculation.

### fpsDeltasPos {#f-cuttheropedx-commons-ctrrenderer-fpsdeltaspos}

```csharp
private static int fpsDeltasPos
```

Tracks the insertion index within [fpsDeltas](#f-cuttheropedx-commons-ctrrenderer-fpsdeltas).

### gApp {#f-cuttheropedx-commons-ctrrenderer-gapp}

```csharp
private static CTRApp gApp
```

Holds the shared application instance owned by the renderer bridge.

### gPaused {#f-cuttheropedx-commons-ctrrenderer-gpaused}

```csharp
private static bool gPaused
```

Indicates whether the runtime is currently paused.

### onResumeTimeStamp {#f-cuttheropedx-commons-ctrrenderer-onresumetimestamp}

```csharp
private static long onResumeTimeStamp
```

Stores the timestamp recorded when a resume was requested.

### playedTicks {#f-cuttheropedx-commons-ctrrenderer-playedticks}

```csharp
private static long playedTicks
```

Accumulates the simulated playback timeline used for frame pacing.

### prevTick {#f-cuttheropedx-commons-ctrrenderer-prevtick}

```csharp
private static long prevTick
```

Stores the stopwatch timestamp captured for the previous rendered frame.

### state {#f-cuttheropedx-commons-ctrrenderer-state}

```csharp
private static int state
```

Tracks the current renderer lifecycle state.

## Methods

### Java_com_zeptolab_ctr_CtrRenderer_nativeBackPressed() {#m-cuttheropedx-commons-ctrrenderer-java-com-zeptolab-ctr-ctrrenderer-nativebackpressed}

```csharp
public static bool Java_com_zeptolab_ctr_CtrRenderer_nativeBackPressed()
```

Forwards the back-button action to the shared canvas.

Returns: `true` if the canvas handled the action; otherwise, `false`.

### Java_com_zeptolab_ctr_CtrRenderer_nativeDestroy() {#m-cuttheropedx-commons-ctrrenderer-java-com-zeptolab-ctr-ctrrenderer-nativedestroy}

```csharp
public static void Java_com_zeptolab_ctr_CtrRenderer_nativeDestroy()
```

Destroys the shared application runtime and saves any pending preferences.

### Java_com_zeptolab_ctr_CtrRenderer_nativeDrawFps(int fps) {#m-cuttheropedx-commons-ctrrenderer-java-com-zeptolab-ctr-ctrrenderer-nativedrawfps-system-int32}

```csharp
public static void Java_com_zeptolab_ctr_CtrRenderer_nativeDrawFps(int fps)
```

Draws the current frames-per-second counter on the shared canvas.

Parameters:

- `fps`: The frames-per-second value to display.

### Java_com_zeptolab_ctr_CtrRenderer_nativeInit(Language language) {#m-cuttheropedx-commons-ctrrenderer-java-com-zeptolab-ctr-ctrrenderer-nativeinit-cuttheropedx-framework-language}

```csharp
public static void Java_com_zeptolab_ctr_CtrRenderer_nativeInit(Language language)
```

Initializes the shared application runtime with the selected language.

Parameters:

- `language`: The language to assign to the runtime before launch.

### Java_com_zeptolab_ctr_CtrRenderer_nativeMenuPressed() {#m-cuttheropedx-commons-ctrrenderer-java-com-zeptolab-ctr-ctrrenderer-nativemenupressed}

```csharp
public static bool Java_com_zeptolab_ctr_CtrRenderer_nativeMenuPressed()
```

Forwards the menu-button action to the shared canvas.

Returns: `true` if the canvas handled the action; otherwise, `false`.

### Java_com_zeptolab_ctr_CtrRenderer_nativePause() {#m-cuttheropedx-commons-ctrrenderer-java-com-zeptolab-ctr-ctrrenderer-nativepause}

```csharp
public static void Java_com_zeptolab_ctr_CtrRenderer_nativePause()
```

Suspends audio, movie playback, textures, and app state.

### Java_com_zeptolab_ctr_CtrRenderer_nativeRender() {#m-cuttheropedx-commons-ctrrenderer-java-com-zeptolab-ctr-ctrrenderer-nativerender}

```csharp
public static void Java_com_zeptolab_ctr_CtrRenderer_nativeRender()
```

Clears the frame and delegates drawing to the root controller.

### Java_com_zeptolab_ctr_CtrRenderer_nativeResize(int width, int height, bool isLowMem) {#m-cuttheropedx-commons-ctrrenderer-java-com-zeptolab-ctr-ctrrenderer-nativeresize-system-int32-system-int32-system-boolean}

```csharp
public static void Java_com_zeptolab_ctr_CtrRenderer_nativeResize(int width, int height, bool isLowMem)
```

Recalculates the shared screen metrics for the current surface size.

Parameters:

- `width`: The surface width in pixels.
- `height`: The surface height in pixels.
- `isLowMem`: Whether the resize should use the low-memory layout path.

### Java_com_zeptolab_ctr_CtrRenderer_nativeResume() {#m-cuttheropedx-commons-ctrrenderer-java-com-zeptolab-ctr-ctrrenderer-nativeresume}

```csharp
public static void Java_com_zeptolab_ctr_CtrRenderer_nativeResume()
```

Resumes audio, movie playback, textures, and app state after a pause.

### Java_com_zeptolab_ctr_CtrRenderer_nativeTick(float delta) {#m-cuttheropedx-commons-ctrrenderer-java-com-zeptolab-ctr-ctrrenderer-nativetick-system-single}

```csharp
public static void Java_com_zeptolab_ctr_CtrRenderer_nativeTick(float delta)
```

Advances timers and the root controller by the specified frame delta.

Parameters:

- `delta`: The frame delta in milliseconds.

### Java_com_zeptolab_ctr_CtrRenderer_nativeTouchProcess(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-commons-ctrrenderer-java-com-zeptolab-ctr-ctrrenderer-nativetouchprocess-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public static void Java_com_zeptolab_ctr_CtrRenderer_nativeTouchProcess(IList<TouchLocation> touches)
```

Forwards touch input from the platform layer to the shared canvas.

Parameters:

- `touches`: The touch locations reported for the current frame.

### OnDestroy() {#m-cuttheropedx-commons-ctrrenderer-ondestroy}

```csharp
public static void OnDestroy()
```

Tears down the runtime when the platform surface is being destroyed.

### OnDrawFrame() {#m-cuttheropedx-commons-ctrrenderer-ondrawframe}

```csharp
public static void OnDrawFrame()
```

Renders a frame or clears the backbuffer when rendering is currently suspended.

### OnPause() {#m-cuttheropedx-commons-ctrrenderer-onpause}

```csharp
public static void OnPause()
```

Pauses rendering and runtime subsystems when the platform host is paused.

### OnPlaybackFinished() {#m-cuttheropedx-commons-ctrrenderer-onplaybackfinished}

```csharp
public static void OnPlaybackFinished()
```

Handles playback completion notifications.

### OnPlaybackStarted() {#m-cuttheropedx-commons-ctrrenderer-onplaybackstarted}

```csharp
public static void OnPlaybackStarted()
```

Marks the renderer as being in playback mode.

### OnResume() {#m-cuttheropedx-commons-ctrrenderer-onresume}

```csharp
public static void OnResume()
```

Schedules the runtime to resume after the platform host becomes active again.

### OnSurfaceChanged(int width, int height) {#m-cuttheropedx-commons-ctrrenderer-onsurfacechanged-system-int32-system-int32}

```csharp
public static void OnSurfaceChanged(int width, int height)
```

Updates the logical screen metrics after the platform surface size changes.

Parameters:

- `width`: The new surface width in pixels.
- `height`: The new surface height in pixels.

### OnSurfaceCreated() {#m-cuttheropedx-commons-ctrrenderer-onsurfacecreated}

```csharp
public static void OnSurfaceCreated()
```

Marks the rendering surface as created so the runtime can finish initialization on the next frame.

### TransformX(float x) {#m-cuttheropedx-commons-ctrrenderer-transformx-system-single}

```csharp
public static float TransformX(float x)
```

Converts a view-space X coordinate into game-space coordinates.

Parameters:

- `x`: The view-space X coordinate.

Returns: The transformed game-space X coordinate.

### TransformY(float y) {#m-cuttheropedx-commons-ctrrenderer-transformy-system-single}

```csharp
public static float TransformY(float y)
```

Converts a view-space Y coordinate into game-space coordinates.

Parameters:

- `y`: The view-space Y coordinate.

Returns: The transformed game-space Y coordinate.

### Update() {#m-cuttheropedx-commons-ctrrenderer-update}

```csharp
public static void Update()
```

Advances the game runtime using the fixed frame delta expected by the original renderer.


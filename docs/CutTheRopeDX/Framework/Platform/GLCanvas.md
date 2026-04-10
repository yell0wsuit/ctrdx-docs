---
title: Class GLCanvas
description: Shared rendering canvas that manages viewport sizing, projection setup, touch forwarding, and a lightweight FPS overlay.
---

# Class GLCanvas

Namespace: `CutTheRopeDX.Framework.Platform`

Assembly: `CutTheRope-DX.dll`

Source: `GLCanvas.cs`

Shared rendering canvas that manages viewport sizing, projection setup, touch forwarding, and a lightweight FPS overlay.

## Declaration

```csharp
internal sealed class GLCanvas : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [GLCanvas](GLCanvas.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### MASTER_HEIGHT {#f-cuttheropedx-framework-platform-glcanvas-master-height}

```csharp
public const float MASTER_HEIGHT
```

Default logical canvas height used by the game.

### MASTER_WIDTH {#f-cuttheropedx-framework-platform-glcanvas-master-width}

```csharp
public const float MASTER_WIDTH
```

Default logical canvas width used by the game.

### _bounds {#f-cuttheropedx-framework-platform-glcanvas-bounds}

```csharp
private Rectangle _bounds
```

Cached rectangle reused when returning [Bounds](#p-cuttheropedx-framework-platform-glcanvas-bounds).

### aspect {#f-cuttheropedx-framework-platform-glcanvas-aspect}

```csharp
public float aspect
```

Current backing-surface aspect ratio.

### backingHeight {#f-cuttheropedx-framework-platform-glcanvas-backingheight}

```csharp
public int backingHeight
```

Current backing-surface height after scaling and letterboxing.

### backingWidth {#f-cuttheropedx-framework-platform-glcanvas-backingwidth}

```csharp
public int backingWidth
```

Current backing-surface width after scaling and letterboxing.

### fpsFont {#f-cuttheropedx-framework-platform-glcanvas-fpsfont}

```csharp
private Font fpsFont
```

Font used by the FPS overlay.

### fpsText {#f-cuttheropedx-framework-platform-glcanvas-fpstext}

```csharp
private Text fpsText
```

Cached text element used to render the FPS overlay.

### isFullscreen {#f-cuttheropedx-framework-platform-glcanvas-isfullscreen}

```csharp
public bool isFullscreen
```

Whether the current view is fullscreen.

### origHeight {#f-cuttheropedx-framework-platform-glcanvas-origheight}

```csharp
private int origHeight
```

Logical canvas height used when building the default orthographic projection.

### origWidth {#f-cuttheropedx-framework-platform-glcanvas-origwidth}

```csharp
private int origWidth
```

Logical canvas width used when building the default orthographic projection.

### touchDelegate {#f-cuttheropedx-framework-platform-glcanvas-touchdelegate}

```csharp
public ITouchDelegate touchDelegate
```

Active input delegate that receives touch and button events.

### touchesCount {#f-cuttheropedx-framework-platform-glcanvas-touchescount}

```csharp
public int touchesCount
```

Number of touches currently tracked by the canvas.

### xOffset {#f-cuttheropedx-framework-platform-glcanvas-xoffset}

```csharp
public int xOffset
```

Horizontal viewport offset used for letterboxing.

### xOffsetScaled {#f-cuttheropedx-framework-platform-glcanvas-xoffsetscaled}

```csharp
public int xOffsetScaled
```

Horizontal viewport offset converted into logical screen space.

### yOffset {#f-cuttheropedx-framework-platform-glcanvas-yoffset}

```csharp
public int yOffset
```

Vertical viewport offset used for letterboxing.

## Properties

### Bounds {#p-cuttheropedx-framework-platform-glcanvas-bounds}

```csharp
public Rectangle Bounds { get; }
```

Gets the current scaled view bounds in desktop window coordinates.

## Methods

### AcceptsFirstResponder() {#m-cuttheropedx-framework-platform-glcanvas-acceptsfirstresponder}

```csharp
public static bool AcceptsFirstResponder()
```

Returns whether the canvas can become the first responder for input.

Returns: Always `true`.

### AfterRender() {#m-cuttheropedx-framework-platform-glcanvas-afterrender}

```csharp
public static void AfterRender()
```

Restores renderer state after a frame has been drawn. Retained as a no-op compatibility hook.

### BackButtonPressed() {#m-cuttheropedx-framework-platform-glcanvas-backbuttonpressed}

```csharp
public bool BackButtonPressed()
```

Returns whether the active touch delegate handled a back-button press.

Returns: `true` if the press was handled; otherwise `false`.

### BecomeFirstResponder() {#m-cuttheropedx-framework-platform-glcanvas-becomefirstresponder}

```csharp
public static bool BecomeFirstResponder()
```

Requests first-responder status for input handling.

Returns: Always `true`.

### BeforeRender() {#m-cuttheropedx-framework-platform-glcanvas-beforerender}

```csharp
public void BeforeRender()
```

Prepares renderer state for a frame before scene drawing begins.

### ConvertTouches(List&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-platform-glcanvas-converttouches-system-collections-generic-list-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public static List<TouchLocation> ConvertTouches(List<TouchLocation> touches)
```

Converts raw platform `touches` into the canvas touch format. Currently returns the input list unchanged.

Parameters:

- `touches`: Touch list to convert.

Returns: Converted touch list.

### DrawFPS(float fps) {#m-cuttheropedx-framework-platform-glcanvas-drawfps-system-single}

```csharp
public void DrawFPS(float fps)
```

Draws the current frames-per-second value in the top-left corner.

Parameters:

- `fps`: FPS value to display.

### DrawRect() {#m-cuttheropedx-framework-platform-glcanvas-drawrect}

```csharp
public static void DrawRect()
```

Compatibility hook for rectangle drawing setup.

### Hide() {#m-cuttheropedx-framework-platform-glcanvas-hide}

```csharp
public static void Hide()
```

Hides the canvas. Retained as a no-op compatibility hook.

### InitFPSMeterWithFont(Font font) {#m-cuttheropedx-framework-platform-glcanvas-initfpsmeterwithfont-cuttheropedx-framework-visual-font}

```csharp
public void InitFPSMeterWithFont(Font font)
```

Enables FPS text rendering using the supplied `font`.

Parameters:

- `font`: Font used to draw the FPS overlay.

### InitWithFrame() {#m-cuttheropedx-framework-platform-glcanvas-initwithframe}

```csharp
public GLCanvas InitWithFrame()
```

Initializes the canvas with the default master resolution and reset state.

Returns: The initialized canvas instance.

### MenuButtonPressed() {#m-cuttheropedx-framework-platform-glcanvas-menubuttonpressed}

```csharp
public bool MenuButtonPressed()
```

Returns whether the active touch delegate handled a menu-button press.

Returns: `true` if the press was handled; otherwise `false`.

### PrepareOpenGL() {#m-cuttheropedx-framework-platform-glcanvas-prepareopengl}

```csharp
public static void PrepareOpenGL()
```

Performs one-time OpenGL preparation work. Retained as a no-op compatibility hook.

### Reshape() {#m-cuttheropedx-framework-platform-glcanvas-reshape}

```csharp
public void Reshape()
```

Recomputes backing dimensions from the scaled view rectangle and reapplies projection state.

### SetDefaultProjection() {#m-cuttheropedx-framework-platform-glcanvas-setdefaultprojection}

```csharp
public void SetDefaultProjection()
```

Configures the renderer viewport and orthographic projection for the current scaled view.

### SetDefaultRealProjection() {#m-cuttheropedx-framework-platform-glcanvas-setdefaultrealprojection}

```csharp
public void SetDefaultRealProjection()
```

Sets the default projection used for rendering in real screen coordinates.

### Show() {#m-cuttheropedx-framework-platform-glcanvas-show}

```csharp
public void Show()
```

Makes the canvas active for rendering by applying the default projection.

### SwapBuffers() {#m-cuttheropedx-framework-platform-glcanvas-swapbuffers}

```csharp
public static void SwapBuffers()
```

Swaps the back buffer. Retained as a no-op because MonoGame handles presentation.

### TouchesBeganwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-platform-glcanvas-touchesbeganwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public void TouchesBeganwithEvent(IList<TouchLocation> touches)
```

Forwards touch-begin events to the active touch delegate.

Parameters:

- `touches`: Touches that began this frame.

### TouchesCancelledwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-platform-glcanvas-touchescancelledwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public void TouchesCancelledwithEvent(IList<TouchLocation> touches)
```

Forwards touch-cancel events to the active touch delegate.

Parameters:

- `touches`: Touches cancelled by the platform.

### TouchesEndedwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-platform-glcanvas-touchesendedwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public void TouchesEndedwithEvent(IList<TouchLocation> touches)
```

Forwards touch-end events to the active touch delegate.

Parameters:

- `touches`: Touches that ended this frame.

### TouchesMovedwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-platform-glcanvas-touchesmovedwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public void TouchesMovedwithEvent(IList<TouchLocation> touches)
```

Forwards touch-move events to the active touch delegate.

Parameters:

- `touches`: Touches that moved this frame.


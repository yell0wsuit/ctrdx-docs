---
title: Class ScreenSizeManager
description: Manages window, fullscreen, and scaled-view sizing for the desktop renderer. Handles aspect-ratio preservation, viewport updates, coordinate transforms, and persisted window settings.
---

# Class ScreenSizeManager

Namespace: `CutTheRopeDX.Desktop`

Assembly: `CutTheRope-DX.dll`

Source: `ScreenSizeManager.cs`

Manages window, fullscreen, and scaled-view sizing for the desktop renderer. Handles aspect-ratio preservation, viewport updates, coordinate transforms, and persisted window settings.

## Declaration

```csharp
internal sealed class ScreenSizeManager
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ScreenSizeManager](ScreenSizeManager.md)

## Constructors

### ScreenSizeManager(int gameWidth, int gameHeight) {#m-cuttheropedx-desktop-screensizemanager-ctor-system-int32-system-int32}

```csharp
public ScreenSizeManager(int gameWidth, int gameHeight)
```

Manages window, fullscreen, and scaled-view sizing for the desktop renderer. Handles aspect-ratio preservation, viewport updates, coordinate transforms, and persisted window settings.

Parameters:

- `gameWidth`: Logical game width.
- `gameHeight`: Logical game height.

## Fields

### MIN_WINDOW_WIDTH {#f-cuttheropedx-desktop-screensizemanager-min-window-width}

```csharp
public const int MIN_WINDOW_WIDTH
```

Minimum allowed window width.

### _fullScreenCropWidth {#f-cuttheropedx-desktop-screensizemanager-fullscreencropwidth}

```csharp
private bool _fullScreenCropWidth
```

Whether fullscreen scaling should crop width.

### _fullScreenRect {#f-cuttheropedx-desktop-screensizemanager-fullscreenrect}

```csharp
private Rectangle _fullScreenRect
```

Current fullscreen display rectangle.

### _gameAspectRatio {#f-cuttheropedx-desktop-screensizemanager-gameaspectratio}

```csharp
private readonly double _gameAspectRatio
```

Cached logical game aspect ratio.

### _scaledViewRect {#f-cuttheropedx-desktop-screensizemanager-scaledviewrect}

```csharp
private Rectangle _scaledViewRect
```

Current scaled render rectangle after aspect-ratio fitting or cropping.

### _windowRect {#f-cuttheropedx-desktop-screensizemanager-windowrect}

```csharp
private Rectangle _windowRect
```

Current window rectangle.

## Properties

### CurrentSize {#p-cuttheropedx-desktop-screensizemanager-currentsize}

```csharp
public Rectangle CurrentSize { get; }
```

Gets the active output rectangle, using fullscreen or window bounds as appropriate.

### FullScreenCropWidth {#p-cuttheropedx-desktop-screensizemanager-fullscreencropwidth}

```csharp
public bool FullScreenCropWidth { set; }
```

Sets whether fullscreen view scaling should crop width instead of fitting the full game width.

### GameHeight {#p-cuttheropedx-desktop-screensizemanager-gameheight}

```csharp
public int GameHeight { get; }
```

Gets the logical game height.

### GameWidth {#p-cuttheropedx-desktop-screensizemanager-gamewidth}

```csharp
public int GameWidth { get; }
```

Gets the logical game width.

### IsFullScreen {#p-cuttheropedx-desktop-screensizemanager-isfullscreen}

```csharp
public bool IsFullScreen { get; private set; }
```

Gets a value indicating whether fullscreen mode is currently enabled.

### MAX_WINDOW_WIDTH {#p-cuttheropedx-desktop-screensizemanager-max-window-width}

```csharp
public static int MAX_WINDOW_WIDTH { get; }
```

Maximum allowed window width for the active graphics profile.

### ScaledViewRect {#p-cuttheropedx-desktop-screensizemanager-scaledviewrect}

```csharp
public Rectangle ScaledViewRect { get; }
```

Gets the letterboxed or pillarboxed view rectangle used for rendering the game.

### ScreenHeight {#p-cuttheropedx-desktop-screensizemanager-screenheight}

```csharp
public int ScreenHeight { get; }
```

Gets the current fullscreen display height.

### ScreenWidth {#p-cuttheropedx-desktop-screensizemanager-screenwidth}

```csharp
public int ScreenWidth { get; }
```

Gets the current fullscreen display width.

### SkipSizeChanges {#p-cuttheropedx-desktop-screensizemanager-skipsizechanges}

```csharp
public bool SkipSizeChanges { get; private set; }
```

Gets a value indicating whether size-change reactions are temporarily disabled.

### WidthAspectRatio {#p-cuttheropedx-desktop-screensizemanager-widthaspectratio}

```csharp
public double WidthAspectRatio { get; }
```

Gets the horizontal scale factor from logical game width to the current scaled view width.

### WindowHeight {#p-cuttheropedx-desktop-screensizemanager-windowheight}

```csharp
public int WindowHeight { get; }
```

Gets the current window back-buffer height.

### WindowWidth {#p-cuttheropedx-desktop-screensizemanager-windowwidth}

```csharp
public int WindowWidth { get; }
```

Gets the current window back-buffer width.

## Methods

### ApplyViewportToDevice() {#m-cuttheropedx-desktop-screensizemanager-applyviewporttodevice}

```csharp
public void ApplyViewportToDevice()
```

Applies the current scaled view rectangle to the graphics device viewport.

### ApplyWindowSize(int width) {#m-cuttheropedx-desktop-screensizemanager-applywindowsize-system-int32}

```csharp
public void ApplyWindowSize(int width)
```

Applies a new window back-buffer `width` and updates the tracked window rectangle.

Parameters:

- `width`: Target window width.

### EnableFullScreen(bool bFull) {#m-cuttheropedx-desktop-screensizemanager-enablefullscreen-system-boolean}

```csharp
private void EnableFullScreen(bool bFull)
```

Updates the tracked fullscreen state and recomputes the scaled view rectangle.

Parameters:

- `bFull`: `true` to mark fullscreen as enabled; otherwise `false`.

### FixWindowSize(Rectangle newWindowRect) {#m-cuttheropedx-desktop-screensizemanager-fixwindowsize-microsoft-xna-framework-rectangle}

```csharp
public void FixWindowSize(Rectangle newWindowRect)
```

Normalizes window size changes to the game's aspect-ratio constraints and persists the result.

Parameters:

- `newWindowRect`: New window bounds reported by the host window.

### FullScreenRectChanged(DisplayMode d) {#m-cuttheropedx-desktop-screensizemanager-fullscreenrectchanged-microsoft-xna-framework-graphics-displaymode}

```csharp
private void FullScreenRectChanged(DisplayMode d)
```

Updates the stored fullscreen rectangle from a display mode.

Parameters:

- `d`: Display mode to copy.

### FullScreenRectChanged(Rectangle r) {#m-cuttheropedx-desktop-screensizemanager-fullscreenrectchanged-microsoft-xna-framework-rectangle}

```csharp
private void FullScreenRectChanged(Rectangle r)
```

Updates the stored fullscreen rectangle and recomputes the scaled view rectangle.

Parameters:

- `r`: New fullscreen rectangle.

### Init(DisplayMode displayMode, int windowWidth, bool isFullScreen) {#m-cuttheropedx-desktop-screensizemanager-init-microsoft-xna-framework-graphics-displaymode-system-int32-system-boolean}

```csharp
public void Init(DisplayMode displayMode, int windowWidth, bool isFullScreen)
```

Initializes screen sizing from the current display mode, preferred window width, and fullscreen state.

Parameters:

- `displayMode`: Current display mode.
- `windowWidth`: Preferred window width, or a non-positive value to derive one automatically.
- `isFullScreen`: `true` to start in fullscreen mode.

### Save() {#m-cuttheropedx-desktop-screensizemanager-save}

```csharp
public void Save()
```

Saves window dimensions and fullscreen state to preferences.

### ScaledGameHeight(int scaledWidth) {#m-cuttheropedx-desktop-screensizemanager-scaledgameheight-system-int32}

```csharp
public int ScaledGameHeight(int scaledWidth)
```

Returns the logical game height that preserves aspect ratio for the supplied scaled width.

Parameters:

- `scaledWidth`: Scaled view width.

Returns: Aspect-ratio-correct game height.

### ScaledGameWidth(int scaledHeight) {#m-cuttheropedx-desktop-screensizemanager-scaledgamewidth-system-int32}

```csharp
public int ScaledGameWidth(int scaledHeight)
```

Returns the logical game width that preserves aspect ratio for the supplied scaled height.

Parameters:

- `scaledHeight`: Scaled view height.

Returns: Aspect-ratio-correct game width.

### ToggleFullScreen() {#m-cuttheropedx-desktop-screensizemanager-togglefullscreen}

```csharp
public void ToggleFullScreen()
```

Toggles between windowed and fullscreen mode, updates the viewport, persists settings, and notifies the canvas and root controller.

### TransformViewToGameX(float x) {#m-cuttheropedx-desktop-screensizemanager-transformviewtogamex-system-single}

```csharp
public float TransformViewToGameX(float x)
```

Converts a scaled-view X coordinate into logical game space.

Parameters:

- `x`: Scaled-view X coordinate.

Returns: Logical game-space X coordinate.

### TransformViewToGameY(float y) {#m-cuttheropedx-desktop-screensizemanager-transformviewtogamey-system-single}

```csharp
public float TransformViewToGameY(float y)
```

Converts a scaled-view Y coordinate into logical game space.

Parameters:

- `y`: Scaled-view Y coordinate.

Returns: Logical game-space Y coordinate.

### TransformWindowToViewX(int x) {#m-cuttheropedx-desktop-screensizemanager-transformwindowtoviewx-system-int32}

```csharp
public int TransformWindowToViewX(int x)
```

Converts a window-space X coordinate into scaled-view space.

Parameters:

- `x`: Window-space X coordinate.

Returns: Scaled-view X coordinate.

### TransformWindowToViewY(int y) {#m-cuttheropedx-desktop-screensizemanager-transformwindowtoviewy-system-int32}

```csharp
public int TransformWindowToViewY(int y)
```

Converts a window-space Y coordinate into scaled-view space.

Parameters:

- `y`: Window-space Y coordinate.

Returns: Scaled-view Y coordinate.

### UpdateScaledView() {#m-cuttheropedx-desktop-screensizemanager-updatescaledview}

```csharp
private void UpdateScaledView()
```

Recomputes the scaled render rectangle for the current window or fullscreen bounds.

### WindowRectChanged(Rectangle newWindowRect) {#m-cuttheropedx-desktop-screensizemanager-windowrectchanged-microsoft-xna-framework-rectangle}

```csharp
private void WindowRectChanged(Rectangle newWindowRect)
```

Updates the stored window rectangle and recomputes the scaled view rectangle.

Parameters:

- `newWindowRect`: New window rectangle.


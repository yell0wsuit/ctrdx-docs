---
title: Class MouseCursor
description: Manages the desktop mouse cursor, including scaling and native cursor overrides.
---

# Class MouseCursor

Namespace: `CutTheRopeDX.Desktop`

Assembly: `CutTheRope-DX.dll`

Source: `MouseCursor.cs`

Manages the desktop mouse cursor, including scaling and native cursor overrides.

## Declaration

```csharp
internal sealed class MouseCursor : IDisposable
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [MouseCursor](MouseCursor.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### _currentScale {#f-cuttheropedx-desktop-mousecursor-currentscale}

```csharp
private double _currentScale
```

Stores the screen scale used to build the current cursor textures.

### _cursor {#f-cuttheropedx-desktop-mousecursor-cursor}

```csharp
private Texture2D _cursor
```

The base cursor texture used when the mouse button is not pressed.

### _cursorActive {#f-cuttheropedx-desktop-mousecursor-cursoractive}

```csharp
private Texture2D _cursorActive
```

The cursor texture used while the primary mouse button is pressed.

### _cursorOverrideActive {#f-cuttheropedx-desktop-mousecursor-cursoroverrideactive}

```csharp
private bool _cursorOverrideActive
```

Indicates whether a native cursor override is currently applied.

### _enabled {#f-cuttheropedx-desktop-mousecursor-enabled}

```csharp
private bool _enabled
```

Indicates whether the custom cursor system is enabled.

### _mouseStateOriginal {#f-cuttheropedx-desktop-mousecursor-mousestateoriginal}

```csharp
private MouseState _mouseStateOriginal
```

The last raw mouse state read from the platform window.

### _mouseStateTransformed {#f-cuttheropedx-desktop-mousecursor-mousestatetransformed}

```csharp
private MouseState _mouseStateTransformed
```

The last transformed mouse state used for touch emulation.

### _nativeCursor {#f-cuttheropedx-desktop-mousecursor-nativecursor}

```csharp
private MouseCursor _nativeCursor
```

The native cursor handle created from [_scaledCursor](#f-cuttheropedx-desktop-mousecursor-scaledcursor).

### _nativeCursorActive {#f-cuttheropedx-desktop-mousecursor-nativecursoractive}

```csharp
private MouseCursor _nativeCursorActive
```

The native cursor handle created from [_scaledCursorActive](#f-cuttheropedx-desktop-mousecursor-scaledcursoractive).

### _scaledCursor {#f-cuttheropedx-desktop-mousecursor-scaledcursor}

```csharp
private Texture2D _scaledCursor
```

The cached scaled version of [_cursor](#f-cuttheropedx-desktop-mousecursor-cursor).

### _scaledCursorActive {#f-cuttheropedx-desktop-mousecursor-scaledcursoractive}

```csharp
private Texture2D _scaledCursorActive
```

The cached scaled version of [_cursorActive](#f-cuttheropedx-desktop-mousecursor-cursoractive).

### _touchID {#f-cuttheropedx-desktop-mousecursor-touchid}

```csharp
private int _touchID
```

Tracks the current synthetic touch identifier for mouse-driven touch events.

### _usingActiveCursor {#f-cuttheropedx-desktop-mousecursor-usingactivecursor}

```csharp
private bool _usingActiveCursor
```

Indicates whether the active cursor variant is currently selected.

## Methods

### Dispose() {#m-cuttheropedx-desktop-mousecursor-dispose}

```csharp
public void Dispose()
```

Releases cursor-related native and managed resources.

### DisposeNativeCursors() {#m-cuttheropedx-desktop-mousecursor-disposenativecursors}

```csharp
private void DisposeNativeCursors()
```

Disposes any native cursor handles created from the scaled cursor textures.

### Draw() {#m-cuttheropedx-desktop-mousecursor-draw}

```csharp
public void Draw()
```

Updates the native cursor based on current mouse state and screen scale.

### Enable(bool b) {#m-cuttheropedx-desktop-mousecursor-enable-system-boolean}

```csharp
public void Enable(bool b)
```

Enables or disables cursor rendering and native cursor overrides.

Parameters:

- `b`: `true` to enable the custom cursor, `false` to hide it.

### GetMouseState() {#m-cuttheropedx-desktop-mousecursor-getmousestate}

```csharp
public static MouseState GetMouseState()
```

Gets the current mouse state transformed into view coordinates.

Returns: The transformed mouse state.

### GetTouchLocation() {#m-cuttheropedx-desktop-mousecursor-gettouchlocation}

```csharp
public List<TouchLocation> GetTouchLocation()
```

Translates mouse button activity into touch events for desktop input emulation.

Returns: The current touch locations derived from mouse input.

### Lerp(float a, float b, float t) {#m-cuttheropedx-desktop-mousecursor-lerp-system-single-system-single-system-single}

```csharp
private static float Lerp(float a, float b, float t)
```

Linearly interpolates between two values.

Parameters:

- `a`: The starting value.
- `b`: The ending value.
- `t`: The interpolation factor.

Returns: The interpolated value.

### Load(ContentManager cm) {#m-cuttheropedx-desktop-mousecursor-load-microsoft-xna-framework-content-contentmanager}

```csharp
public void Load(ContentManager cm)
```

Loads cursor textures from content and resets scaled caches.

Parameters:

- `cm`: Content manager used to load cursor assets.

### ReleaseButtons() {#m-cuttheropedx-desktop-mousecursor-releasebuttons}

```csharp
public void ReleaseButtons()
```

Releases any pressed mouse buttons tracked by the cursor.

### ScaleTexture(Texture2D source, double scale) {#m-cuttheropedx-desktop-mousecursor-scaletexture-microsoft-xna-framework-graphics-texture2d-system-double}

```csharp
private static Texture2D ScaleTexture(Texture2D source, double scale)
```

Creates a scaled copy of a cursor texture using bilinear interpolation.

Parameters:

- `source`: The source texture to scale.
- `scale`: The scale factor to apply.

Returns: A newly allocated scaled texture.

### TransformMouseState(MouseState mouseState) {#m-cuttheropedx-desktop-mousecursor-transformmousestate-microsoft-xna-framework-input-mousestate}

```csharp
private static MouseState TransformMouseState(MouseState mouseState)
```

Converts a window-space mouse state into the game's logical view space.

Parameters:

- `mouseState`: The source mouse state in window coordinates.

Returns: The transformed mouse state.

### UpdateScaledCursors(double scale) {#m-cuttheropedx-desktop-mousecursor-updatescaledcursors-system-double}

```csharp
private void UpdateScaledCursors(double scale)
```

Rebuilds the scaled cursor textures and native cursor handles when the UI `scale` changes.

Parameters:

- `scale`: The screen scale factor to apply to the cursor textures.


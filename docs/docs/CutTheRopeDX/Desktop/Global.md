---
title: Class Global
description: Holds shared desktop runtime services used across the MonoGame host layer.
---

# Class Global

Namespace: `CutTheRopeDX.Desktop`

Assembly: `CutTheRope-DX.dll`

Source: `Global.cs`

Holds shared desktop runtime services used across the MonoGame host layer.

## Declaration

```csharp
internal sealed class Global
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [Global](Global.md)

## Properties

### GraphicsDevice {#p-cuttheropedx-desktop-global-graphicsdevice}

```csharp
public static GraphicsDevice GraphicsDevice { get; set; }
```

Gets or sets the active graphics device.

### GraphicsDeviceManager {#p-cuttheropedx-desktop-global-graphicsdevicemanager}

```csharp
public static GraphicsDeviceManager GraphicsDeviceManager { get; set; }
```

Gets or sets the graphics device manager that owns the graphics device.

### MouseCursor {#p-cuttheropedx-desktop-global-mousecursor}

```csharp
public static MouseCursor MouseCursor { get; }
```

Gets the shared desktop mouse cursor helper.

### ScreenSizeManager {#p-cuttheropedx-desktop-global-screensizemanager}

```csharp
public static ScreenSizeManager ScreenSizeManager { get; set; }
```

Gets or sets the screen size manager responsible for logical-to-window transforms.

### SpriteBatch {#p-cuttheropedx-desktop-global-spritebatch}

```csharp
public static SpriteBatch SpriteBatch { get; set; }
```

Gets or sets the shared sprite batch used for 2D rendering.

### XnaGame {#p-cuttheropedx-desktop-global-xnagame}

```csharp
public static Game1 XnaGame { get; set; }
```

Gets or sets the active MonoGame host instance.


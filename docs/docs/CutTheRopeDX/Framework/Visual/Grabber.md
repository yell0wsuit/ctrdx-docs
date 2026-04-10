---
title: Class Grabber
description: Captures the current screen into a texture and can redraw it later.
---

# Class Grabber

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `Grabber.cs`

Captures the current screen into a texture and can redraw it later.

## Declaration

```csharp
internal sealed class Grabber : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [Grabber](Grabber.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Methods

### DrawGrabbedImage(CTRTexture2D t, int x, int y) {#m-cuttheropedx-framework-visual-grabber-drawgrabbedimage-cuttheropedx-framework-visual-ctrtexture2d-system-int32-system-int32}

```csharp
public static void DrawGrabbedImage(CTRTexture2D t, int x, int y)
```

Draws a previously grabbed texture at the specified position.

Parameters:

- `t`: Grabbed texture to draw.
- `x`: X position.
- `y`: Y position.

### Grab() {#m-cuttheropedx-framework-visual-grabber-grab}

```csharp
public static CTRTexture2D Grab()
```

Captures the current screen contents into a new texture.

Returns: A texture containing the captured frame.


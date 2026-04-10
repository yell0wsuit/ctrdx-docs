---
title: Class FontManager
description: Manages loading and caching of FontStashSharp fonts.
---

# Class FontManager

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `FontManager.cs`

Manages loading and caching of FontStashSharp fonts.

## Declaration

```csharp
internal static class FontManager
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FontManager](FontManager.md)

## Fields

### fontCache {#f-cuttheropedx-framework-visual-fontmanager-fontcache}

```csharp
private static readonly Dictionary<string, FontStashFont> fontCache
```

Cached font instances keyed by a composite cache key.

### fontSystems {#f-cuttheropedx-framework-visual-fontmanager-fontsystems}

```csharp
private static readonly Dictionary<string, FontSystem> fontSystems
```

Loaded font systems keyed by font file path.

### graphicsDevice {#f-cuttheropedx-framework-visual-fontmanager-graphicsdevice}

```csharp
private static GraphicsDevice graphicsDevice
```

The graphics device used for font rendering.

## Methods

### ClearCache() {#m-cuttheropedx-framework-visual-fontmanager-clearcache}

```csharp
public static void ClearCache()
```

Clears all cached fonts and font systems.

### GetEffectHash(FontEffectSettings effects) {#m-cuttheropedx-framework-visual-fontmanager-geteffecthash-cuttheropedx-framework-visual-fonteffectsettings}

```csharp
private static int GetEffectHash(FontEffectSettings effects)
```

Computes a hash code for the effect settings used in cache key generation.

Parameters:

- `effects`: Font effect settings to hash.

Returns: A deterministic hash value for the provided settings.

### Initialize(GraphicsDevice device) {#m-cuttheropedx-framework-visual-fontmanager-initialize-microsoft-xna-framework-graphics-graphicsdevice}

```csharp
public static void Initialize(GraphicsDevice device)
```

Initializes the font manager with the specified graphics `device`.

Parameters:

- `device`: Graphics device for font rendering.

### LoadFont(string fontPath, float fontSize, Color color, FontEffectSettings effects, float lineSpacing = 0, float topSpacing = 0) {#m-cuttheropedx-framework-visual-fontmanager-loadfont-system-string-system-single-microsoft-xna-framework-color-cuttheropedx-framework-visual-fonteffectsettings-system-single-system-single}

```csharp
public static FontStashFont LoadFont(string fontPath, float fontSize, Color color, FontEffectSettings effects, float lineSpacing = 0, float topSpacing = 0)
```

Loads a FontStashSharp font from a TTF/OTF file.

Parameters:

- `fontPath`: Path to the TTF/OTF font file.
- `fontSize`: Font size in pixels.
- `color`: Text color.
- `effects`: Stroke and shadow effect settings.
- `lineSpacing`: Extra spacing between lines.
- `topSpacing`: Extra spacing above the first line.

Returns: A cached or newly created [FontStashFont](FontStashFont.md) instance.

### LoadFontSystem(string fontPath) {#m-cuttheropedx-framework-visual-fontmanager-loadfontsystem-system-string}

```csharp
private static FontSystem LoadFontSystem(string fontPath)
```

Loads a `FontSystem` from the specified font file path.

Parameters:

- `fontPath`: Path to the TTF/OTF font file.

Returns: The loaded `FontSystem`.


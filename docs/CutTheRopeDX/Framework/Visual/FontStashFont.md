---
title: Class FontStashFont
description: FontStashSharp-based font implementation that replaces sprite/texture-based fonts.
---

# Class FontStashFont

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `FontStashFont.cs`

FontStashSharp-based font implementation that replaces sprite/texture-based fonts.

## Declaration

```csharp
internal sealed class FontStashFont : FontGeneric
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [FontGeneric](FontGeneric.md)
- [FontStashFont](FontStashFont.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### charImageCache {#f-cuttheropedx-framework-visual-fontstashfont-charimagecache}

```csharp
private readonly Dictionary<char, Image> charImageCache
```

Cache for rendered character images.

### effectSettings {#f-cuttheropedx-framework-visual-fontstashfont-effectsettings}

```csharp
private FontEffectSettings effectSettings
```

Stroke and shadow effect settings.

### font {#f-cuttheropedx-framework-visual-fontstashfont-font}

```csharp
private DynamicSpriteFont font
```

The underlying FontStashSharp dynamic font.

### fontSize {#f-cuttheropedx-framework-visual-fontstashfont-fontsize}

```csharp
private float fontSize
```

Font size in pixels.

### textColor {#f-cuttheropedx-framework-visual-fontstashfont-textcolor}

```csharp
private Color textColor
```

Text rendering color.

## Methods

### CanDraw(char c) {#m-cuttheropedx-framework-visual-fontstashfont-candraw-system-char}

```csharp
public override bool CanDraw(char c)
```

Returns `true` if the font can draw the specified character.

Parameters:

- `c`: Character to check.

Returns: `true` if the font has a glyph for `c`.

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-fontstashfont-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### FontHeight() {#m-cuttheropedx-framework-visual-fontstashfont-fontheight}

```csharp
public override float FontHeight()
```

Returns the font height in pixels.

Returns: The line height of the font in pixels.

### GetCharOffset(char[] s, int c, int len) {#m-cuttheropedx-framework-visual-fontstashfont-getcharoffset-system-char-system-int32-system-int32}

```csharp
public override float GetCharOffset(char[] s, int c, int len)
```

Returns the character offset (spacing) for the character at position `c` in the string.

Parameters:

- `s`: Character array of the string.
- `c`: Index of the current character.
- `len`: Total length of the string.

Returns: The spacing in pixels to apply after the character at index `c`.

### GetCharQuad(char c) {#m-cuttheropedx-framework-visual-fontstashfont-getcharquad-system-char}

```csharp
public override int GetCharQuad(char c)
```

Returns the quad index for the specified character.

Parameters:

- `c`: Character to look up.

Returns: The quad index for `c` within its charmap.

### GetCharWidth(char c) {#m-cuttheropedx-framework-visual-fontstashfont-getcharwidth-system-char}

```csharp
public override float GetCharWidth(char c)
```

Returns the pixel width of the specified character.

Parameters:

- `c`: Character to measure.

Returns: The width of `c` in pixels.

### GetCharmap(int i) {#m-cuttheropedx-framework-visual-fontstashfont-getcharmap-system-int32}

```csharp
public override Image GetCharmap(int i)
```

Returns the charmap [Image](Image.md) at the specified index.

Parameters:

- `i`: Charmap index.

Returns: The charmap [Image](Image.md) at index `i`.

### GetCharmapIndex(char c) {#m-cuttheropedx-framework-visual-fontstashfont-getcharmapindex-system-char}

```csharp
public override int GetCharmapIndex(char c)
```

Returns the charmap index for the specified character.

Parameters:

- `c`: Character to look up.

Returns: The index of the charmap containing `c`.

### GetColor() {#m-cuttheropedx-framework-visual-fontstashfont-getcolor}

```csharp
public Color GetColor()
```

Returns the current text rendering color.

Returns: The color currently used for text rendering.

### GetEffectSettings() {#m-cuttheropedx-framework-visual-fontstashfont-geteffectsettings}

```csharp
public FontEffectSettings GetEffectSettings()
```

Returns the current effect settings.

Returns: The active stroke and shadow effect settings.

### GetInternalFont() {#m-cuttheropedx-framework-visual-fontstashfont-getinternalfont}

```csharp
public DynamicSpriteFont GetInternalFont()
```

Returns the underlying FontStashSharp dynamic font, or `null` if disposed.

Returns: The internal dynamic font instance, or `null`.

### InitWithFont(DynamicSpriteFont dynamicFont, float size, Color color, FontEffectSettings effects, float lineSpacing = 0, float topSpacing = 0) {#m-cuttheropedx-framework-visual-fontstashfont-initwithfont-fontstashsharp-dynamicspritefont-system-single-microsoft-xna-framework-color-cuttheropedx-framework-visual-fonteffectsettings-system-single-system-single}

```csharp
public FontStashFont InitWithFont(DynamicSpriteFont dynamicFont, float size, Color color, FontEffectSettings effects, float lineSpacing = 0, float topSpacing = 0)
```

Initializes the font with the specified dynamic font, `size`, `color`, and `effects`.

Parameters:

- `dynamicFont`: FontStashSharp dynamic font instance.
- `size`: Font size in pixels.
- `color`: Text rendering color.
- `effects`: Stroke and shadow effect settings.
- `lineSpacing`: Extra spacing between lines.
- `topSpacing`: Extra spacing above the first line.

Returns: The initialized [FontStashFont](FontStashFont.md) instance.

### MeasureCharWidth(char c) {#m-cuttheropedx-framework-visual-fontstashfont-measurecharwidth-system-char}

```csharp
private float MeasureCharWidth(char c)
```

Measures the pixel width of a single character using FontStashSharp.

Parameters:

- `c`: Character to measure.

Returns: The measured width in pixels.

### SetCharOffsetLineOffsetSpaceWidth(float co, float lo, float sw) {#m-cuttheropedx-framework-visual-fontstashfont-setcharoffsetlineoffsetspacewidth-system-single-system-single-system-single}

```csharp
public override void SetCharOffsetLineOffsetSpaceWidth(float co, float lo, float sw)
```

Sets the character spacing, line spacing, and space character width.

Parameters:

- `co`: Character offset (spacing between characters).
- `lo`: Line offset (spacing between lines).
- `sw`: Width of the space character.

### SetColor(Color color) {#m-cuttheropedx-framework-visual-fontstashfont-setcolor-microsoft-xna-framework-color}

```csharp
public void SetColor(Color color)
```

Sets the text rendering `color`.

Parameters:

- `color`: New text color.

### TotalCharmaps() {#m-cuttheropedx-framework-visual-fontstashfont-totalcharmaps}

```csharp
public override int TotalCharmaps()
```

Returns the total number of charmaps in this font.

Returns: The number of charmap textures used by this font.


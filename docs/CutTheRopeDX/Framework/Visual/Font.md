---
title: Class Font
description: A variable-width bitmap font backed by a single charmap texture atlas.
---

# Class Font

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `Font.cs`

A variable-width bitmap font backed by a single charmap texture atlas.

## Declaration

```csharp
internal sealed class Font : FontGeneric
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [FontGeneric](FontGeneric.md)
- [Font](Font.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### _isWvga {#f-cuttheropedx-framework-visual-font-iswvga}

```csharp
private bool _isWvga
```

Whether the charmap texture uses WVGA scaling.

### charmap {#f-cuttheropedx-framework-visual-font-charmap}

```csharp
private Image charmap
```

Charmap image containing all character quads.

### chars {#f-cuttheropedx-framework-visual-font-chars}

```csharp
private string chars
```

String of characters in the order they appear in the atlas.

### height {#f-cuttheropedx-framework-visual-font-height}

```csharp
private float height
```

Font height in pixels.

### sortedChars {#f-cuttheropedx-framework-visual-font-sortedchars}

```csharp
private char[] sortedChars
```

Sorted copy of [chars](#f-cuttheropedx-framework-visual-font-chars) for binary search in [CanDraw](#m-cuttheropedx-framework-visual-font-candraw-system-char).

## Methods

### CanDraw(char c) {#m-cuttheropedx-framework-visual-font-candraw-system-char}

```csharp
public override bool CanDraw(char c)
```

Returns `true` if the font can draw the specified character.

Parameters:

- `c`: Character to check.

Returns: `true` if the font has a glyph for `c`.

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-font-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### FontHeight() {#m-cuttheropedx-framework-visual-font-fontheight}

```csharp
public override float FontHeight()
```

Returns the font height in pixels.

Returns: The line height of the font in pixels.

### GetCharOffset(char[] s, int c, int len) {#m-cuttheropedx-framework-visual-font-getcharoffset-system-char-system-int32-system-int32}

```csharp
public override float GetCharOffset(char[] s, int c, int len)
```

Returns the character offset (spacing) for the character at position `c` in the string.

Parameters:

- `s`: Character array of the string.
- `c`: Index of the current character.
- `len`: Total length of the string.

Returns: The spacing in pixels to apply after the character at index `c`.

### GetCharQuad(char c) {#m-cuttheropedx-framework-visual-font-getcharquad-system-char}

```csharp
public override int GetCharQuad(char c)
```

Returns the quad index for the specified character.

Parameters:

- `c`: Character to look up.

Returns: The quad index for `c` within its charmap.

### GetCharWidth(char c) {#m-cuttheropedx-framework-visual-font-getcharwidth-system-char}

```csharp
public override float GetCharWidth(char c)
```

Returns the pixel width of the specified character.

Parameters:

- `c`: Character to measure.

Returns: The width of `c` in pixels.

### GetCharmap(int i) {#m-cuttheropedx-framework-visual-font-getcharmap-system-int32}

```csharp
public override Image GetCharmap(int i)
```

Returns the charmap [Image](Image.md) at the specified index.

Parameters:

- `i`: Charmap index.

Returns: The charmap [Image](Image.md) at index `i`.

### GetCharmapIndex(char c) {#m-cuttheropedx-framework-visual-font-getcharmapindex-system-char}

```csharp
public override int GetCharmapIndex(char c)
```

Returns the charmap index for the specified character.

Parameters:

- `c`: Character to look up.

Returns: The index of the charmap containing `c`.

### InitWithVariableSizeCharscharMapFileKerning(string strParam, CTRTexture2D charmapfile) {#m-cuttheropedx-framework-visual-font-initwithvariablesizecharscharmapfilekerning-system-string-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
public Font InitWithVariableSizeCharscharMapFileKerning(string strParam, CTRTexture2D charmapfile)
```

Initializes the font from a character string and charmap texture.

Parameters:

- `strParam`: String of characters in the order they appear in the atlas.
- `charmapfile`: Texture atlas containing character quads.

Returns: The initialized font instance.

### SetCharOffsetLineOffsetSpaceWidth(float co, float lo, float sw) {#m-cuttheropedx-framework-visual-font-setcharoffsetlineoffsetspacewidth-system-single-system-single-system-single}

```csharp
public override void SetCharOffsetLineOffsetSpaceWidth(float co, float lo, float sw)
```

Sets the character spacing, line spacing, and space character width.

Parameters:

- `co`: Character offset (spacing between characters).
- `lo`: Line offset (spacing between lines).
- `sw`: Width of the space character.

### TotalCharmaps() {#m-cuttheropedx-framework-visual-font-totalcharmaps}

```csharp
public override int TotalCharmaps()
```

Returns the total number of charmaps in this font.

Returns: The number of charmap textures used by this font.


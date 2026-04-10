---
title: Class FontGeneric
description: Abstract base class for bitmap fonts, providing character measurement and charmap access.
---

# Class FontGeneric

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `FontGeneric.cs`

Abstract base class for bitmap fonts, providing character measurement and charmap access.

## Declaration

```csharp
internal abstract class FontGeneric : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [FontGeneric](FontGeneric.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [Font](Font.md)
- [FontStashFont](FontStashFont.md)

## Fields

### charOffset {#f-cuttheropedx-framework-visual-fontgeneric-charoffset}

```csharp
protected float charOffset
```

Spacing between characters in pixels.

### lineOffset {#f-cuttheropedx-framework-visual-fontgeneric-lineoffset}

```csharp
protected float lineOffset
```

Spacing between lines in pixels.

### spaceWidth {#f-cuttheropedx-framework-visual-fontgeneric-spacewidth}

```csharp
protected float spaceWidth
```

Width of the space character in pixels.

### topSpacing {#f-cuttheropedx-framework-visual-fontgeneric-topspacing}

```csharp
protected float topSpacing
```

Extra spacing above the first line in pixels.

## Methods

### CanDraw(char c) {#m-cuttheropedx-framework-visual-fontgeneric-candraw-system-char}

```csharp
public abstract bool CanDraw(char c)
```

Returns `true` if the font can draw the specified character.

Parameters:

- `c`: Character to check.

Returns: `true` if the font has a glyph for `c`.

### FontHeight() {#m-cuttheropedx-framework-visual-fontgeneric-fontheight}

```csharp
public abstract float FontHeight()
```

Returns the font height in pixels.

Returns: The line height of the font in pixels.

### GetCharOffset(char[] s, int c, int len) {#m-cuttheropedx-framework-visual-fontgeneric-getcharoffset-system-char-system-int32-system-int32}

```csharp
public abstract float GetCharOffset(char[] s, int c, int len)
```

Returns the character offset (spacing) for the character at position `c` in the string.

Parameters:

- `s`: Character array of the string.
- `c`: Index of the current character.
- `len`: Total length of the string.

Returns: The spacing in pixels to apply after the character at index `c`.

### GetCharQuad(char c) {#m-cuttheropedx-framework-visual-fontgeneric-getcharquad-system-char}

```csharp
public abstract int GetCharQuad(char c)
```

Returns the quad index for the specified character.

Parameters:

- `c`: Character to look up.

Returns: The quad index for `c` within its charmap.

### GetCharWidth(char c) {#m-cuttheropedx-framework-visual-fontgeneric-getcharwidth-system-char}

```csharp
public abstract float GetCharWidth(char c)
```

Returns the pixel width of the specified character.

Parameters:

- `c`: Character to measure.

Returns: The width of `c` in pixels.

### GetCharmap(int i) {#m-cuttheropedx-framework-visual-fontgeneric-getcharmap-system-int32}

```csharp
public abstract Image GetCharmap(int i)
```

Returns the charmap [Image](Image.md) at the specified index.

Parameters:

- `i`: Charmap index.

Returns: The charmap [Image](Image.md) at index `i`.

### GetCharmapIndex(char c) {#m-cuttheropedx-framework-visual-fontgeneric-getcharmapindex-system-char}

```csharp
public abstract int GetCharmapIndex(char c)
```

Returns the charmap index for the specified character.

Parameters:

- `c`: Character to look up.

Returns: The index of the charmap containing `c`.

### GetLineOffset() {#m-cuttheropedx-framework-visual-fontgeneric-getlineoffset}

```csharp
public virtual float GetLineOffset()
```

Returns the line offset (spacing between lines).

Returns: The vertical spacing between lines in pixels.

### GetTopSpacing() {#m-cuttheropedx-framework-visual-fontgeneric-gettopspacing}

```csharp
public virtual float GetTopSpacing()
```

Returns the top spacing above the first line.

Returns: The extra spacing above the first line in pixels.

### NotifyTextChanged(Text st) {#m-cuttheropedx-framework-visual-fontgeneric-notifytextchanged-cuttheropedx-framework-visual-text}

```csharp
public virtual void NotifyTextChanged(Text st)
```

Called when a [Text](Text.md) element using this font changes its content.

Parameters:

- `st`: Text element that changed.

### NotifyTextCreated(Text st) {#m-cuttheropedx-framework-visual-fontgeneric-notifytextcreated-cuttheropedx-framework-visual-text}

```csharp
public virtual void NotifyTextCreated(Text st)
```

Called when a [Text](Text.md) element is created with this font.

Parameters:

- `st`: Text element that was created.

### NotifyTextDeleted(Text st) {#m-cuttheropedx-framework-visual-fontgeneric-notifytextdeleted-cuttheropedx-framework-visual-text}

```csharp
public virtual void NotifyTextDeleted(Text st)
```

Called when a [Text](Text.md) element using this font is deleted.

Parameters:

- `st`: Text element that was deleted.

### SetCharOffsetLineOffsetSpaceWidth(float co, float lo, float sw) {#m-cuttheropedx-framework-visual-fontgeneric-setcharoffsetlineoffsetspacewidth-system-single-system-single-system-single}

```csharp
public abstract void SetCharOffsetLineOffsetSpaceWidth(float co, float lo, float sw)
```

Sets the character spacing, line spacing, and space character width.

Parameters:

- `co`: Character offset (spacing between characters).
- `lo`: Line offset (spacing between lines).
- `sw`: Width of the space character.

### StringWidth(string str) {#m-cuttheropedx-framework-visual-fontgeneric-stringwidth-system-string}

```csharp
public virtual float StringWidth(string str)
```

Computes the total pixel width of the given string.

Parameters:

- `str`: String to measure.

Returns: The total width of `str` in pixels.

### TotalCharmaps() {#m-cuttheropedx-framework-visual-fontgeneric-totalcharmaps}

```csharp
public abstract int TotalCharmaps()
```

Returns the total number of charmaps in this font.

Returns: The number of charmap textures used by this font.


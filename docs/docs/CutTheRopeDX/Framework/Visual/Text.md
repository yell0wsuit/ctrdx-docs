---
title: Class Text
description: A BaseElement that renders formatted text using either sprite-based or FontStashSharp fonts.
---

# Class Text

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `Text.cs`

A [BaseElement](BaseElement.md) that renders formatted text using either sprite-based or FontStashSharp fonts.

## Declaration

```csharp
internal class Text : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Text](Text.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### ScissorRasterizerState {#f-cuttheropedx-framework-visual-text-scissorrasterizerstate}

```csharp
private static readonly RasterizerState ScissorRasterizerState
```

Rasterizer state with scissor test enabled for text clipping.

### align {#f-cuttheropedx-framework-visual-text-align}

```csharp
public int align
```

Text alignment (1 = left, 2 = center, 3 = right).

### font {#f-cuttheropedx-framework-visual-text-font}

```csharp
public FontGeneric font
```

Font used for measuring and rendering.

### formattedStrings {#f-cuttheropedx-framework-visual-text-formattedstrings}

```csharp
private List<FormattedString> formattedStrings
```

Word-wrapped lines of text.

### maxHeight {#f-cuttheropedx-framework-visual-text-maxheight}

```csharp
public float maxHeight
```

Maximum rendered height in pixels, or -1 for unlimited.

### multiDrawers {#f-cuttheropedx-framework-visual-text-multidrawers}

```csharp
private List<ImageMultiDrawer> multiDrawers
```

Multi-drawers for sprite font character quads.

### stringLength {#f-cuttheropedx-framework-visual-text-stringlength}

```csharp
public int stringLength
```

Number of rendered characters (sprite font path).

### string_ {#f-cuttheropedx-framework-visual-text-string}

```csharp
public string string_
```

The raw display string.

### wrapLongWords {#f-cuttheropedx-framework-visual-text-wraplongwords}

```csharp
public bool wrapLongWords
```

Whether to break long words that exceed the wrap width.

### wrapWidth {#f-cuttheropedx-framework-visual-text-wrapwidth}

```csharp
public float wrapWidth
```

Width at which text wraps to the next line.

## Methods

### CreateWithFontandString(string fontResourceName, string str) {#m-cuttheropedx-framework-visual-text-createwithfontandstring-system-string-system-string}

```csharp
public static Text CreateWithFontandString(string fontResourceName, string str)
```

Creates a text element from a font resource name and string.

Parameters:

- `fontResourceName`: Font resource name.
- `str`: Text to display.

Returns: A new text element initialized with the requested font and string.

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-text-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-framework-visual-text-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### DrawFontStashText(FontStashFont fontStashFont, Color parentColor) {#m-cuttheropedx-framework-visual-text-drawfontstashtext-cuttheropedx-framework-visual-fontstashfont-microsoft-xna-framework-color}

```csharp
private void DrawFontStashText(FontStashFont fontStashFont, Color parentColor)
```

Renders text using FontStashSharp with stroke, shadow, and color modulation.

Parameters:

- `fontStashFont`: FontStash-backed font used for glyph rendering.
- `parentColor`: Inherited parent color modulation.

### FormatText() {#m-cuttheropedx-framework-visual-text-formattext}

```csharp
public virtual void FormatText()
```

Word-wraps the current string into [FormattedString](FormattedString.md) lines based on [wrapWidth](#f-cuttheropedx-framework-visual-text-wrapwidth).

### GetString() {#m-cuttheropedx-framework-visual-text-getstring}

```csharp
public virtual string GetString()
```

Returns the current display text.

Returns: The currently assigned display text.

### InitWithFont(FontGeneric i) {#m-cuttheropedx-framework-visual-text-initwithfont-cuttheropedx-framework-visual-fontgeneric}

```csharp
public virtual Text InitWithFont(FontGeneric i)
```

Initializes the text element with the specified font.

Parameters:

- `i`: Font to use for rendering.

Returns: The initialized text instance.

### SetAlignment(int a) {#m-cuttheropedx-framework-visual-text-setalignment-system-int32}

```csharp
public virtual void SetAlignment(int a)
```

Sets the text alignment (1 = left, 2 = center, 3 = right).

Parameters:

- `a`: Alignment value.

### SetString(string newString) {#m-cuttheropedx-framework-visual-text-setstring-system-string}

```csharp
public virtual void SetString(string newString)
```

Sets the display text, auto-wrapping to fit the font's measured width.

Parameters:

- `newString`: Text to display.

### SetStringandWidth(string newString, float w) {#m-cuttheropedx-framework-visual-text-setstringandwidth-system-string-system-single}

```csharp
public virtual void SetStringandWidth(string newString, float w)
```

Sets the display text with an explicit wrap width.

Parameters:

- `newString`: Text to display.
- `w`: Wrap width in pixels, or -1 to auto-measure.

### UpdateDrawerValues() {#m-cuttheropedx-framework-visual-text-updatedrawervalues}

```csharp
public virtual void UpdateDrawerValues()
```

Rebuilds the multi-drawer quad data from the formatted strings (sprite font path).


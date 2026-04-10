---
title: Class FontEffectSettings
description: Configuration for font effects (stroke, shadow).
---

# Class FontEffectSettings

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `FontStashFont.cs`

Configuration for font effects (stroke, shadow).

## Declaration

```csharp
internal sealed class FontEffectSettings
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FontEffectSettings](FontEffectSettings.md)

## Properties

### HasShadow {#p-cuttheropedx-framework-visual-fonteffectsettings-hasshadow}

```csharp
public bool HasShadow { get; set; }
```

Whether shadow is enabled.

### HasStroke {#p-cuttheropedx-framework-visual-fonteffectsettings-hasstroke}

```csharp
public bool HasStroke { get; set; }
```

Whether stroke is enabled.

### None {#p-cuttheropedx-framework-visual-fonteffectsettings-none}

```csharp
public static FontEffectSettings None { get; }
```

Returns a settings instance with no effects.

### ShadowColor {#p-cuttheropedx-framework-visual-fonteffectsettings-shadowcolor}

```csharp
public Color ShadowColor { get; set; }
```

Shadow color.

### ShadowOffsetX {#p-cuttheropedx-framework-visual-fonteffectsettings-shadowoffsetx}

```csharp
public int ShadowOffsetX { get; set; }
```

Shadow horizontal offset in pixels.

### ShadowOffsetY {#p-cuttheropedx-framework-visual-fonteffectsettings-shadowoffsety}

```csharp
public int ShadowOffsetY { get; set; }
```

Shadow vertical offset in pixels.

### StrokeAmount {#p-cuttheropedx-framework-visual-fonteffectsettings-strokeamount}

```csharp
public int StrokeAmount { get; set; }
```

Stroke thickness in pixels.

### StrokeColor {#p-cuttheropedx-framework-visual-fonteffectsettings-strokecolor}

```csharp
public Color StrokeColor { get; set; }
```

Stroke color.

## Methods

### CreateShadow(int offsetX, int offsetY, Color? color = null) {#m-cuttheropedx-framework-visual-fonteffectsettings-createshadow-system-int32-system-int32-system-nullable-microsoft-xna-framework-color}

```csharp
public static FontEffectSettings CreateShadow(int offsetX, int offsetY, Color? color = null)
```

Creates settings with shadow only.

Parameters:

- `offsetX`: Shadow horizontal offset.
- `offsetY`: Shadow vertical offset.
- `color`: Shadow color, defaults to black.

Returns: A [FontEffectSettings](FontEffectSettings.md) instance configured with shadow only.

### CreateStroke(int amount = 1, Color? color = null) {#m-cuttheropedx-framework-visual-fonteffectsettings-createstroke-system-int32-system-nullable-microsoft-xna-framework-color}

```csharp
public static FontEffectSettings CreateStroke(int amount = 1, Color? color = null)
```

Creates settings with stroke only.

Parameters:

- `amount`: Stroke thickness in pixels.
- `color`: Stroke color, defaults to black.

Returns: A [FontEffectSettings](FontEffectSettings.md) instance configured with stroke only.

### CreateStrokeAndShadow(int strokeAmount, int shadowX, int shadowY) {#m-cuttheropedx-framework-visual-fonteffectsettings-createstrokeandshadow-system-int32-system-int32-system-int32}

```csharp
public static FontEffectSettings CreateStrokeAndShadow(int strokeAmount, int shadowX, int shadowY)
```

Creates settings with both stroke and shadow using black color.

Parameters:

- `strokeAmount`: Stroke thickness in pixels.
- `shadowX`: Shadow horizontal offset.
- `shadowY`: Shadow vertical offset.

Returns: A [FontEffectSettings](FontEffectSettings.md) instance configured with both stroke and shadow.


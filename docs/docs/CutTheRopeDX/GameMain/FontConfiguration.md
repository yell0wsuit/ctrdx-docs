---
title: Class FontConfiguration
description: Configuration for a font including size, color, and effects.
---

# Class FontConfiguration

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Resources.cs`

Configuration for a font including size, color, and effects.

## Declaration

```csharp
internal sealed class FontConfiguration
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FontConfiguration](FontConfiguration.md)

## Properties

### Color {#p-cuttheropedx-gamemain-fontconfiguration-color}

```csharp
public Color Color { get; set; }
```

Gets or sets the base text color.

### Effects {#p-cuttheropedx-gamemain-fontconfiguration-effects}

```csharp
public FontEffectSettings Effects { get; set; }
```

Gets or sets stroke and shadow effects applied while drawing the font.

### FontFile {#p-cuttheropedx-gamemain-fontconfiguration-fontfile}

```csharp
public string FontFile { get; set; }
```

Gets or sets the font file name.

### LineSpacing {#p-cuttheropedx-gamemain-fontconfiguration-linespacing}

```csharp
public float LineSpacing { get; set; }
```

Gets or sets the extra line spacing.

### Size {#p-cuttheropedx-gamemain-fontconfiguration-size}

```csharp
public float Size { get; set; }
```

Gets or sets the font size in pixels.

### TopSpacing {#p-cuttheropedx-gamemain-fontconfiguration-topspacing}

```csharp
public float TopSpacing { get; set; }
```

Gets or sets the top spacing adjustment.


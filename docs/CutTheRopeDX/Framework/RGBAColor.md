---
title: Struct RGBAColor
description: Represents a color with red, green, blue, and alpha channels as floats in the 0–1 range.
---

# Struct RGBAColor

Namespace: `CutTheRopeDX.Framework`

Assembly: `CutTheRope-DX.dll`

Source: `RGBAColor.cs`

Represents a color with red, green, blue, and alpha channels as floats in the 0–1 range.

## Declaration

```csharp
public sealed struct RGBAColor
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [RGBAColor](RGBAColor.md)

## Constructors

### RGBAColor(float R, float G, float B, float A) {#m-cuttheropedx-framework-rgbacolor-ctor-system-single-system-single-system-single-system-single}

```csharp
public RGBAColor(float R, float G, float B, float A)
```

Represents a color with red, green, blue, and alpha channels as floats in the 0–1 range.

Parameters:

- `R`: Red channel value.
- `G`: Green channel value.
- `B`: Blue channel value.
- `A`: Alpha channel value.

## Fields

### blackRGBA {#f-cuttheropedx-framework-rgbacolor-blackrgba}

```csharp
public static readonly RGBAColor blackRGBA
```

Fully opaque black (0, 0, 0, 1).

### blueRGBA {#f-cuttheropedx-framework-rgbacolor-bluergba}

```csharp
public static readonly RGBAColor blueRGBA
```

Fully opaque blue (0, 0, 1, 1).

### greenRGBA {#f-cuttheropedx-framework-rgbacolor-greenrgba}

```csharp
public static readonly RGBAColor greenRGBA
```

Fully opaque green (0, 1, 0, 1).

### redRGBA {#f-cuttheropedx-framework-rgbacolor-redrgba}

```csharp
public static readonly RGBAColor redRGBA
```

Fully opaque red (1, 0, 0, 1).

### solidOpaqueRGBA {#f-cuttheropedx-framework-rgbacolor-solidopaquergba}

```csharp
public static readonly RGBAColor solidOpaqueRGBA
```

Fully opaque white (1, 1, 1, 1).

### solidOpaqueRGBAXna {#f-cuttheropedx-framework-rgbacolor-solidopaquergbaxna}

```csharp
public static readonly Color solidOpaqueRGBAXna
```

XNA [White](https://docs.monogame.net/api/Microsoft.Xna.Framework.Color.html) equivalent of [solidOpaqueRGBA](#f-cuttheropedx-framework-rgbacolor-solidopaquergba).

### transparentRGBA {#f-cuttheropedx-framework-rgbacolor-transparentrgba}

```csharp
public static readonly RGBAColor transparentRGBA
```

Fully transparent black (0, 0, 0, 0).

### whiteRGBA {#f-cuttheropedx-framework-rgbacolor-whitergba}

```csharp
public static readonly RGBAColor whiteRGBA
```

Fully opaque white (1, 1, 1, 1).

## Properties

### AlphaChannel {#p-cuttheropedx-framework-rgbacolor-alphachannel}

```csharp
public float AlphaChannel { get; set; }
```

Alpha channel value (0–1).

### BlueColor {#p-cuttheropedx-framework-rgbacolor-bluecolor}

```csharp
public float BlueColor { get; set; }
```

Blue channel value (0–1).

### GreenColor {#p-cuttheropedx-framework-rgbacolor-greencolor}

```csharp
public float GreenColor { get; set; }
```

Green channel value (0–1).

### RedColor {#p-cuttheropedx-framework-rgbacolor-redcolor}

```csharp
public float RedColor { get; set; }
```

Red channel value (0–1).

## Methods

### MakeRGBA(float r, float g, float b, float a) {#m-cuttheropedx-framework-rgbacolor-makergba-system-single-system-single-system-single-system-single}

```csharp
public static RGBAColor MakeRGBA(float r, float g, float b, float a)
```

Creates a new [RGBAColor](RGBAColor.md) from the specified channel values.

Parameters:

- `r`: Red channel.
- `g`: Green channel.
- `b`: Blue channel.
- `a`: Alpha channel.

Returns: A new [RGBAColor](RGBAColor.md) instance.

### RGBAEqual(RGBAColor a, RGBAColor b) {#m-cuttheropedx-framework-rgbacolor-rgbaequal-cuttheropedx-framework-rgbacolor-cuttheropedx-framework-rgbacolor}

```csharp
public static bool RGBAEqual(RGBAColor a, RGBAColor b)
```

Returns `true` if all four channels of `a` and `b` are equal.

Parameters:

- `a`: First color.
- `b`: Second color.

Returns: `true` when all channels match; otherwise `false`.

### ToFloatArray() {#m-cuttheropedx-framework-rgbacolor-tofloatarray}

```csharp
public float[] ToFloatArray()
```

Returns the four channel values as a float array [R, G, B, A].

Returns: A float array in RGBA order.

### ToFloatArray(RGBAColor[] colors) {#m-cuttheropedx-framework-rgbacolor-tofloatarray-cuttheropedx-framework-rgbacolor}

```csharp
public static float[] ToFloatArray(RGBAColor[] colors)
```

Converts an array of `colors` to a flat float array of channel values.

Parameters:

- `colors`: Colors to convert.

Returns: A flat float array containing RGBA values for each input color.

### ToWhiteAlphaXNA() {#m-cuttheropedx-framework-rgbacolor-towhitealphaxna}

```csharp
public Color ToWhiteAlphaXNA()
```

Converts to an XNA [Color](https://docs.monogame.net/api/Microsoft.Xna.Framework.Color.html) with white RGB and this color's alpha.

Returns: An XNA color with white RGB and this instance's alpha channel.

### ToXNA() {#m-cuttheropedx-framework-rgbacolor-toxna}

```csharp
public Color ToXNA()
```

Converts this color to an XNA [Color](https://docs.monogame.net/api/Microsoft.Xna.Framework.Color.html).

Returns: The converted XNA color.


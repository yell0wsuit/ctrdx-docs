---
title: Enum BlendingFactor
description: Defines the OpenGL-style blend factors supported by the desktop renderer.
---

# Enum BlendingFactor

Namespace: `CutTheRopeDX.Desktop`

Assembly: `CutTheRope-DX.dll`

Source: `BlendingFactor.cs`

Defines the OpenGL-style blend factors supported by the desktop renderer.

## Declaration

```csharp
public enum BlendingFactor
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [Enum](https://learn.microsoft.com/en-us/dotnet/api/system.enum?view=net-10.0)
- [BlendingFactor](BlendingFactor.md)

## Implements

- [IComparable](https://learn.microsoft.com/en-us/dotnet/api/system.icomparable?view=net-10.0)
- [IConvertible](https://learn.microsoft.com/en-us/dotnet/api/system.iconvertible?view=net-10.0)
- [ISpanFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.ispanformattable?view=net-10.0)
- [IFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.iformattable?view=net-10.0)

## Remarks

Values match the OpenGL constants defined by Khronos in `glcorearb.h`. Reference: https://registry.khronos.org/OpenGL/api/GL/glcorearb.h

## Fields

### GLDSTALPHA {#f-cuttheropedx-desktop-blendingfactor-gldstalpha}

```csharp
public const BlendingFactor GLDSTALPHA
```

Uses the destination alpha.

### GLDSTCOLOR {#f-cuttheropedx-desktop-blendingfactor-gldstcolor}

```csharp
public const BlendingFactor GLDSTCOLOR
```

Uses the destination color.

### GLONE {#f-cuttheropedx-desktop-blendingfactor-glone}

```csharp
public const BlendingFactor GLONE
```

Uses a factor of one.

### GLONEMINUSDSTALPHA {#f-cuttheropedx-desktop-blendingfactor-gloneminusdstalpha}

```csharp
public const BlendingFactor GLONEMINUSDSTALPHA
```

Uses one minus the destination alpha.

### GLONEMINUSDSTCOLOR {#f-cuttheropedx-desktop-blendingfactor-gloneminusdstcolor}

```csharp
public const BlendingFactor GLONEMINUSDSTCOLOR
```

Uses one minus the destination color.

### GLONEMINUSSRCALPHA {#f-cuttheropedx-desktop-blendingfactor-gloneminussrcalpha}

```csharp
public const BlendingFactor GLONEMINUSSRCALPHA
```

Uses one minus the source alpha.

### GLONEMINUSSRCCOLOR {#f-cuttheropedx-desktop-blendingfactor-gloneminussrccolor}

```csharp
public const BlendingFactor GLONEMINUSSRCCOLOR
```

Uses one minus the source color.

### GLSRCALPHA {#f-cuttheropedx-desktop-blendingfactor-glsrcalpha}

```csharp
public const BlendingFactor GLSRCALPHA
```

Uses the source alpha.

### GLSRCALPHASATURATE {#f-cuttheropedx-desktop-blendingfactor-glsrcalphasaturate}

```csharp
public const BlendingFactor GLSRCALPHASATURATE
```

Uses saturated source alpha.

### GLSRCCOLOR {#f-cuttheropedx-desktop-blendingfactor-glsrccolor}

```csharp
public const BlendingFactor GLSRCCOLOR
```

Uses the source color.

### GLZERO {#f-cuttheropedx-desktop-blendingfactor-glzero}

```csharp
public const BlendingFactor GLZERO
```

Uses a factor of zero.


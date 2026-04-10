---
title: Enum CAMERATYPE
description: Movement modes supported by Camera2D.
---

# Enum CAMERATYPE

Namespace: `CutTheRopeDX.Framework.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `CAMERA_TYPE.cs`

Movement modes supported by [Camera2D](Camera2D.md).

## Declaration

```csharp
public enum CAMERATYPE
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [Enum](https://learn.microsoft.com/en-us/dotnet/api/system.enum?view=net-10.0)
- [CAMERATYPE](CAMERATYPE.md)

## Implements

- [IComparable](https://learn.microsoft.com/en-us/dotnet/api/system.icomparable?view=net-10.0)
- [IConvertible](https://learn.microsoft.com/en-us/dotnet/api/system.iconvertible?view=net-10.0)
- [ISpanFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.ispanformattable?view=net-10.0)
- [IFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.iformattable?view=net-10.0)

## Fields

### CAMERASPEEDDELAY {#f-cuttheropedx-framework-helpers-cameratype-cameraspeeddelay}

```csharp
public const CAMERATYPE CAMERASPEEDDELAY
```

Moves toward the target using a proportional offset based on the current distance.

### CAMERASPEEDPIXELS {#f-cuttheropedx-framework-helpers-cameratype-cameraspeedpixels}

```csharp
public const CAMERATYPE CAMERASPEEDPIXELS
```

Moves toward the target using a fixed speed measured in pixels per second.


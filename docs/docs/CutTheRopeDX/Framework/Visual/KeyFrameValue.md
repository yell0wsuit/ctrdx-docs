---
title: Class KeyFrameValue
description: Holds all possible parameter types for a keyframe (action, position, scale, rotation, skew, color).
---

# Class KeyFrameValue

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `KeyFrameValue.cs`

Holds all possible parameter types for a keyframe (action, position, scale, rotation, skew, color).

## Declaration

```csharp
internal sealed class KeyFrameValue
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [KeyFrameValue](KeyFrameValue.md)

## Constructors

### KeyFrameValue() {#m-cuttheropedx-framework-visual-keyframevalue-ctor}

```csharp
public KeyFrameValue()
```

Initializes a new [KeyFrameValue](KeyFrameValue.md) with default parameter instances.

## Fields

### action {#f-cuttheropedx-framework-visual-keyframevalue-action}

```csharp
public ActionParams action
```

Action parameters.

### color {#f-cuttheropedx-framework-visual-keyframevalue-color}

```csharp
public ColorParams color
```

Color parameters.

### pos {#f-cuttheropedx-framework-visual-keyframevalue-pos}

```csharp
public PosParams pos
```

Position parameters.

### rotation {#f-cuttheropedx-framework-visual-keyframevalue-rotation}

```csharp
public RotationParams rotation
```

Rotation parameters.

### scale {#f-cuttheropedx-framework-visual-keyframevalue-scale}

```csharp
public ScaleParams scale
```

Scale parameters.

### skew {#f-cuttheropedx-framework-visual-keyframevalue-skew}

```csharp
public SkewParams skew
```

Skew parameters.


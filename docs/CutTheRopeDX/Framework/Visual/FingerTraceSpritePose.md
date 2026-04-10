---
title: Record Struct FingerTraceSpritePose
description: Captures one sprite draw request produced by a trace for rendering or inspection.
---

# Record Struct FingerTraceSpritePose

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `FingerTrace.cs`

Captures one sprite draw request produced by a trace for rendering or inspection.

## Declaration

```csharp
internal sealed readonly record struct FingerTraceSpritePose : IEquatable<FingerTraceSpritePose>
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [FingerTraceSpritePose](FingerTraceSpritePose.md)

## Implements

- [IEquatable<FingerTraceSpritePose>](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1?view=net-10.0)

## Constructors

### FingerTraceSpritePose(FingerTraceSpriteKind Kind, string TextureResourceName, int QuadIndex, Vector Position, float Rotation, float Scale, float Alpha, FingerTraceBlendMode BlendMode, float TranslateY = 0) {#m-cuttheropedx-framework-visual-fingertracespritepose-ctor-cuttheropedx-framework-visual-fingertracespritekind-system-string-system-int32-cuttheropedx-framework-core-vector-system-single-system-single-system-single-cuttheropedx-framework-visual-fingertraceblendmode-system-single}

```csharp
public FingerTraceSpritePose(FingerTraceSpriteKind Kind, string TextureResourceName, int QuadIndex, Vector Position, float Rotation, float Scale, float Alpha, FingerTraceBlendMode BlendMode, float TranslateY = 0)
```

Captures one sprite draw request produced by a trace for rendering or inspection.

Parameters:

- `Kind`: Logical sprite role for rendering behavior.
- `TextureResourceName`: Texture resource containing the sprite quad.
- `QuadIndex`: Quad index in the texture atlas.
- `Position`: World-space sprite position.
- `Rotation`: Sprite rotation.
- `Scale`: Uniform sprite scale factor.
- `Alpha`: Sprite opacity multiplier.
- `BlendMode`: Blend mode used to draw the sprite.
- `TranslateY`: Local Y translation applied before drawing.

## Properties

### Alpha {#p-cuttheropedx-framework-visual-fingertracespritepose-alpha}

```csharp
public float Alpha { get; set; }
```

Sprite opacity multiplier.

### BlendMode {#p-cuttheropedx-framework-visual-fingertracespritepose-blendmode}

```csharp
public FingerTraceBlendMode BlendMode { get; set; }
```

Blend mode used to draw the sprite.

### Kind {#p-cuttheropedx-framework-visual-fingertracespritepose-kind}

```csharp
public FingerTraceSpriteKind Kind { get; set; }
```

Logical sprite role for rendering behavior.

### Position {#p-cuttheropedx-framework-visual-fingertracespritepose-position}

```csharp
public Vector Position { get; set; }
```

World-space sprite position.

### QuadIndex {#p-cuttheropedx-framework-visual-fingertracespritepose-quadindex}

```csharp
public int QuadIndex { get; set; }
```

Quad index in the texture atlas.

### Rotation {#p-cuttheropedx-framework-visual-fingertracespritepose-rotation}

```csharp
public float Rotation { get; set; }
```

Sprite rotation.

### Scale {#p-cuttheropedx-framework-visual-fingertracespritepose-scale}

```csharp
public float Scale { get; set; }
```

Uniform sprite scale factor.

### TextureResourceName {#p-cuttheropedx-framework-visual-fingertracespritepose-textureresourcename}

```csharp
public string TextureResourceName { get; set; }
```

Texture resource containing the sprite quad.

### TranslateY {#p-cuttheropedx-framework-visual-fingertracespritepose-translatey}

```csharp
public float TranslateY { get; set; }
```

Local Y translation applied before drawing.


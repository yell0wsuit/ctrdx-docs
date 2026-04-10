---
title: Class ParsedTexturePackerAtlas
description: Parsed TexturePacker atlas data prepared for the engine's rectangle/offset-based consumers.
---

# Class ParsedTexturePackerAtlas

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `TexturePackerAtlasParser.cs`

Parsed TexturePacker atlas data prepared for the engine's rectangle/offset-based consumers.

## Declaration

```csharp
internal sealed class ParsedTexturePackerAtlas
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ParsedTexturePackerAtlas](ParsedTexturePackerAtlas.md)

## Properties

### HasNonZeroOffset {#p-cuttheropedx-framework-core-parsedtexturepackeratlas-hasnonzerooffset}

```csharp
public bool HasNonZeroOffset { get; set; }
```

Whether any parsed frame has a non-zero offset.

### Offsets {#p-cuttheropedx-framework-core-parsedtexturepackeratlas-offsets}

```csharp
public List<Vector> Offsets { get; }
```

Per-frame offsets applied when drawing trimmed sprites.

### PreCutHeight {#p-cuttheropedx-framework-core-parsedtexturepackeratlas-precutheight}

```csharp
public float PreCutHeight { get; set; }
```

Maximum original source height observed across all frames.

### PreCutWidth {#p-cuttheropedx-framework-core-parsedtexturepackeratlas-precutwidth}

```csharp
public float PreCutWidth { get; set; }
```

Maximum original source width observed across all frames.

### Rects {#p-cuttheropedx-framework-core-parsedtexturepackeratlas-rects}

```csharp
public List<CTRRectangle> Rects { get; }
```

Parsed frame rectangles in atlas texture coordinates.

### SourceSizes {#p-cuttheropedx-framework-core-parsedtexturepackeratlas-sourcesizes}

```csharp
public List<Vector> SourceSizes { get; }
```

Original untrimmed source size for each frame.


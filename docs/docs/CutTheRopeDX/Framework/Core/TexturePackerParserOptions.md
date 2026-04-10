---
title: Class TexturePackerParserOptions
description: Options that control TexturePacker atlas parsing and post-processing.
---

# Class TexturePackerParserOptions

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `TexturePackerAtlasParser.cs`

Options that control TexturePacker atlas parsing and post-processing.

## Declaration

```csharp
internal sealed class TexturePackerParserOptions
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [TexturePackerParserOptions](TexturePackerParserOptions.md)

## Properties

### FrameOrder {#p-cuttheropedx-framework-core-texturepackerparseroptions-frameorder}

```csharp
public IReadOnlyList<string> FrameOrder { get; set; }
```

Optional explicit frame ordering applied after parsing.

### NormalizeOffsetsToCenter {#p-cuttheropedx-framework-core-texturepackerparseroptions-normalizeoffsetstocenter}

```csharp
public bool NormalizeOffsetsToCenter { get; set; }
```

Whether frame offsets should be normalized to centered trim offsets.


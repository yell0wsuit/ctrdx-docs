---
title: Class TextureAtlasConfig
description: Configuration describing how to load a texture atlas resource.
---

# Class TextureAtlasConfig

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `TextureAtlasConfig.cs`

Configuration describing how to load a texture atlas resource.

## Declaration

```csharp
internal sealed class TextureAtlasConfig
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [TextureAtlasConfig](TextureAtlasConfig.md)

## Properties

### AtlasPath {#p-cuttheropedx-framework-core-textureatlasconfig-atlaspath}

```csharp
public string AtlasPath { get; set; }
```

Relative path to the atlas JSON file.

### CenterOffsets {#p-cuttheropedx-framework-core-textureatlasconfig-centeroffsets}

```csharp
public bool CenterOffsets { get; set; }
```

Whether sprite centers should be offset to their geometric centers.

### ResourceName {#p-cuttheropedx-framework-core-textureatlasconfig-resourcename}

```csharp
public string ResourceName { get; set; }
```

String resource name associated with the atlas.

### ScaleRes {#p-cuttheropedx-framework-core-textureatlasconfig-scaleres}

```csharp
public int? ScaleRes { get; set; }
```

Optional iOS legacy scale-res flag. A value of `0` maps to aspect-ratio X scaling.

### UseAntialias {#p-cuttheropedx-framework-core-textureatlasconfig-useantialias}

```csharp
public bool UseAntialias { get; set; }
```

Whether antialiasing should be applied when loading the atlas.


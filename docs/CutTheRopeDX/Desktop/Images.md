---
title: Class Images
description: Loads and caches image content through per-asset content managers.
---

# Class Images

Namespace: `CutTheRopeDX.Desktop`

Assembly: `CutTheRope-DX.dll`

Source: `Images.cs`

Loads and caches image content through per-asset content managers.

## Declaration

```csharp
internal sealed class Images
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [Images](Images.md)

## Fields

### _contentManagers {#f-cuttheropedx-desktop-images-contentmanagers}

```csharp
private static readonly Dictionary<string, ContentManager> _contentManagers
```

Stores per-image content managers so individual assets can be unloaded independently.

## Methods

### Free(string imgName) {#m-cuttheropedx-desktop-images-free-system-string}

```csharp
public static void Free(string imgName)
```

Unloads the cached content manager for the specified image asset.

Parameters:

- `imgName`: The image asset name.

### Get(string imgName) {#m-cuttheropedx-desktop-images-get-system-string}

```csharp
public static Texture2D Get(string imgName)
```

Loads an image texture by asset name.

Parameters:

- `imgName`: The image asset name.

Returns: The loaded texture, or `null` if loading fails.

### GetContentManager(string imgName) {#m-cuttheropedx-desktop-images-getcontentmanager-system-string}

```csharp
private static ContentManager GetContentManager(string imgName)
```

Returns the content manager used to load and unload a specific image asset.

Parameters:

- `imgName`: The image asset name.

Returns: The content manager associated with `imgName`.


---
title: Class TileEntry
description: Maps a tile ID to its drawer and quad index within the TileMap.
---

# Class TileEntry

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `TileEntry.cs`

Maps a tile ID to its drawer and quad index within the [TileMap](TileMap.md).

## Declaration

```csharp
internal sealed class TileEntry : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [TileEntry](TileEntry.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### drawerIndex {#f-cuttheropedx-framework-visual-tileentry-drawerindex}

```csharp
public int drawerIndex
```

Index into the [TileMap](TileMap.md)'s drawer list.

### quad {#f-cuttheropedx-framework-visual-tileentry-quad}

```csharp
public int quad
```

Quad index within the drawer's texture, or -1 for full image.


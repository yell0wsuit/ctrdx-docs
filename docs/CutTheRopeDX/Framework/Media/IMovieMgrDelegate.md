---
title: Interface IMovieMgrDelegate
description: Receives notification when movie playback completes.
---

# Interface IMovieMgrDelegate

Namespace: `CutTheRopeDX.Framework.Media`

Assembly: `CutTheRope-DX.dll`

Source: `MovieMgrDelegate.cs`

Receives notification when movie playback completes.

## Declaration

```csharp
internal interface IMovieMgrDelegate
```

## Inheritance

- [IMovieMgrDelegate](IMovieMgrDelegate.md)

## Methods

### MoviePlaybackFinished(string url) {#m-cuttheropedx-framework-media-imoviemgrdelegate-movieplaybackfinished-system-string}

```csharp
public abstract void MoviePlaybackFinished(string url)
```

Called when the movie at `url` finishes playing.

Parameters:

- `url`: URL of the movie that finished.


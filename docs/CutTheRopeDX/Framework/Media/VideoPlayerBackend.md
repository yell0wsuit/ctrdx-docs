---
title: Enum VideoPlayerBackend
description: Available video player backend implementations.
---

# Enum VideoPlayerBackend

Namespace: `CutTheRopeDX.Framework.Media`

Assembly: `CutTheRope-DX.dll`

Source: `VideoPlayerBackendSelector.cs`

Available video player backend implementations.

## Declaration

```csharp
internal enum VideoPlayerBackend
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [Enum](https://learn.microsoft.com/en-us/dotnet/api/system.enum?view=net-10.0)
- [VideoPlayerBackend](VideoPlayerBackend.md)

## Implements

- [IComparable](https://learn.microsoft.com/en-us/dotnet/api/system.icomparable?view=net-10.0)
- [IConvertible](https://learn.microsoft.com/en-us/dotnet/api/system.iconvertible?view=net-10.0)
- [ISpanFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.ispanformattable?view=net-10.0)
- [IFormattable](https://learn.microsoft.com/en-us/dotnet/api/system.iformattable?view=net-10.0)

## Fields

### AVFoundation {#f-cuttheropedx-framework-media-videoplayerbackend-avfoundation}

```csharp
public const VideoPlayerBackend AVFoundation
```

macOS AVFoundation framework (requires macOS 26+).

### Ffmpeg {#f-cuttheropedx-framework-media-videoplayerbackend-ffmpeg}

```csharp
public const VideoPlayerBackend Ffmpeg
```

FFmpeg libraries for cross-platform video decoding.

### MonoGame {#f-cuttheropedx-framework-media-videoplayerbackend-monogame}

```csharp
public const VideoPlayerBackend MonoGame
```

Stub implementation that skips video playback.


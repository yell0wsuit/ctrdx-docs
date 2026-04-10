---
title: Class VideoPlayerBackendSelector
description: Selects the appropriate video player backend based on platform and available libraries.
---

# Class VideoPlayerBackendSelector

Namespace: `CutTheRopeDX.Framework.Media`

Assembly: `CutTheRope-DX.dll`

Source: `VideoPlayerBackendSelector.cs`

Selects the appropriate video player backend based on platform and available libraries.

## Declaration

```csharp
internal static class VideoPlayerBackendSelector
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [VideoPlayerBackendSelector](VideoPlayerBackendSelector.md)

## Methods

### Select(bool isMac, bool isMac26OrLater, bool hasAvFoundation, bool hasFfmpeg) {#m-cuttheropedx-framework-media-videoplayerbackendselector-select-system-boolean-system-boolean-system-boolean-system-boolean}

```csharp
public static VideoPlayerBackend Select(bool isMac, bool isMac26OrLater, bool hasAvFoundation, bool hasFfmpeg)
```

Determines the best available video player backend.

Parameters:

- `isMac`: Whether the current platform is macOS.
- `isMac26OrLater`: Whether the macOS version is 26 or later.
- `hasAvFoundation`: Whether AVFoundation support is compiled in.
- `hasFfmpeg`: Whether FFmpeg support is compiled in.

Returns: The selected [VideoPlayerBackend](VideoPlayerBackend.md) to use.


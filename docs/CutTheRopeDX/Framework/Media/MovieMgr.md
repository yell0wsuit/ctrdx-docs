---
title: Class MovieMgr
description: Manages video playback and provides a unified interface for movie operations.
---

# Class MovieMgr

Namespace: `CutTheRopeDX.Framework.Media`

Assembly: `CutTheRope-DX.dll`

Source: `MovieMgr.cs`

Manages video playback and provides a unified interface for movie operations.

## Declaration

```csharp
internal sealed class MovieMgr : FrameworkTypes, IDisposable
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [MovieMgr](MovieMgr.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Remarks

This class wraps platform-specific video player implementations (FFmpeg, AVFoundation, or MonoGame stub) and notifies delegates when playback finishes.

## Constructors

### MovieMgr() {#m-cuttheropedx-framework-media-moviemgr-ctor}

```csharp
public MovieMgr()
```

Initializes a new instance of the [MovieMgr](MovieMgr.md) class.

## Fields

### delegateMovieMgrDelegate {#f-cuttheropedx-framework-media-moviemgr-delegatemoviemgrdelegate}

```csharp
public IMovieMgrDelegate delegateMovieMgrDelegate
```

Delegate to notify when movie playback events occur.

### url {#f-cuttheropedx-framework-media-moviemgr-url}

```csharp
public string url
```

The URL or path of the currently playing video.

### videoPlayer {#f-cuttheropedx-framework-media-moviemgr-videoplayer}

```csharp
private readonly IVideoPlayer videoPlayer
```

The underlying video player implementation.

## Methods

### Dispose() {#m-cuttheropedx-framework-media-moviemgr-dispose}

```csharp
public void Dispose()
```

Releases all resources used by the movie manager.

### GetTexture() {#m-cuttheropedx-framework-media-moviemgr-gettexture}

```csharp
public Texture2D GetTexture()
```

Gets the current video frame as a texture.

Returns: A [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html) containing the current video frame, or `null` if no video is playing or playback has finished.

### IsPaused() {#m-cuttheropedx-framework-media-moviemgr-ispaused}

```csharp
public bool IsPaused()
```

Determines whether playback is currently paused.

Returns: `true` if playback is paused; otherwise, `false`.

### IsPlaying() {#m-cuttheropedx-framework-media-moviemgr-isplaying}

```csharp
public bool IsPlaying()
```

Determines whether a video is currently loaded and potentially playing.

Returns: `true` if a video is active; otherwise, `false`.

### IsTextureReady() {#m-cuttheropedx-framework-media-moviemgr-istextureready}

```csharp
public bool IsTextureReady()
```

Determines whether the video texture is ready for rendering.

Returns: `true` if the texture can be rendered; otherwise, `false`.

### OnPlaybackFinished() {#m-cuttheropedx-framework-media-moviemgr-onplaybackfinished}

```csharp
private void OnPlaybackFinished()
```

Handles the video player's playback finished event and notifies the delegate.

### Pause() {#m-cuttheropedx-framework-media-moviemgr-pause}

```csharp
public void Pause()
```

Pauses the current video playback.

### PlayURL(string moviePath, bool mute) {#m-cuttheropedx-framework-media-moviemgr-playurl-system-string-system-boolean}

```csharp
public void PlayURL(string moviePath, bool mute)
```

Prepares and initiates video playback from the specified path.

Parameters:

- `moviePath`: The relative path to the video file without extension.
- `mute`: If `true`, audio will be muted during playback.

### Resume() {#m-cuttheropedx-framework-media-moviemgr-resume}

```csharp
public void Resume()
```

Resumes video playback after being paused.

### Start() {#m-cuttheropedx-framework-media-moviemgr-start}

```csharp
public void Start()
```

Starts video playback after a video has been prepared with [PlayURL](#m-cuttheropedx-framework-media-moviemgr-playurl-system-string-system-boolean).

### Stop() {#m-cuttheropedx-framework-media-moviemgr-stop}

```csharp
public void Stop()
```

Stops the current video playback.

### Update() {#m-cuttheropedx-framework-media-moviemgr-update}

```csharp
public void Update()
```

Updates the video player state each frame.


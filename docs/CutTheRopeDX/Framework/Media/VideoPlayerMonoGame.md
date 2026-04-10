---
title: Class VideoPlayerMonoGame
description: Stub video player when VLC, AVFoundation or FFmpeg is unavailable. Skips video playback immediately.
---

# Class VideoPlayerMonoGame

Namespace: `CutTheRopeDX.Framework.Media`

Assembly: `CutTheRope-DX.dll`

Source: `VideoPlayerMonoGame.cs`

Stub video player when VLC, AVFoundation or FFmpeg is unavailable. Skips video playback immediately.

## Declaration

```csharp
internal sealed class VideoPlayerMonoGame : IVideoPlayer
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [VideoPlayerMonoGame](VideoPlayerMonoGame.md)

## Implements

- [IVideoPlayer](IVideoPlayer.md)
- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Properties

### IsPaused {#p-cuttheropedx-framework-media-videoplayermonogame-ispaused}

```csharp
public bool IsPaused { get; private set; }
```

Gets a value indicating whether playback is currently paused.

## Methods

### Dispose() {#m-cuttheropedx-framework-media-videoplayermonogame-dispose}

```csharp
public void Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

### GetTexture() {#m-cuttheropedx-framework-media-videoplayermonogame-gettexture}

```csharp
public Texture2D GetTexture()
```

Gets the current video frame as a texture.

Returns: A [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html) containing the current video frame, or `null` if no video is playing or playback has finished.

### IsPlaying() {#m-cuttheropedx-framework-media-videoplayermonogame-isplaying}

```csharp
public bool IsPlaying()
```

Determines whether a video is currently loaded and potentially playing.

Returns: `true` if a video is active; otherwise, `false`.

### IsTextureReady() {#m-cuttheropedx-framework-media-videoplayermonogame-istextureready}

```csharp
public bool IsTextureReady()
```

Determines whether the video texture is ready for rendering.

Returns: `true` if the texture can be rendered; otherwise, `false`.

### Pause() {#m-cuttheropedx-framework-media-videoplayermonogame-pause}

```csharp
public void Pause()
```

Pauses the current video playback.

### Play(string moviePath, bool mute) {#m-cuttheropedx-framework-media-videoplayermonogame-play-system-string-system-boolean}

```csharp
public void Play(string moviePath, bool mute)
```

Prepares a video for playback from the specified path.

Parameters:

- `moviePath`: The relative path to the video file without extension.
- `mute`: If `true`, audio will be muted during playback.

### Resume() {#m-cuttheropedx-framework-media-videoplayermonogame-resume}

```csharp
public void Resume()
```

Resumes video playback after being paused.

### Start() {#m-cuttheropedx-framework-media-videoplayermonogame-start}

```csharp
public void Start()
```

Starts video playback after a video has been prepared with [Play](IVideoPlayer.md#m-cuttheropedx-framework-media-ivideoplayer-play-system-string-system-boolean).

### Stop() {#m-cuttheropedx-framework-media-videoplayermonogame-stop}

```csharp
public void Stop()
```

Stops the current video playback.

### Update() {#m-cuttheropedx-framework-media-videoplayermonogame-update}

```csharp
public void Update()
```

Updates the video player state each frame.

## Events

### PlaybackFinished {#e-cuttheropedx-framework-media-videoplayermonogame-playbackfinished}

```csharp
public event Action PlaybackFinished
```

Occurs when video playback has finished or was skipped.


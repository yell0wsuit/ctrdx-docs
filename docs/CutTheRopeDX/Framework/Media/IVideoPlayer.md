---
title: Interface IVideoPlayer
description: Defines the contract for video playback functionality.
---

# Interface IVideoPlayer

Namespace: `CutTheRopeDX.Framework.Media`

Assembly: `CutTheRope-DX.dll`

Source: `IVideoPlayer.cs`

Defines the contract for video playback functionality.

## Declaration

```csharp
internal interface IVideoPlayer : IDisposable
```

## Inheritance

- [IVideoPlayer](IVideoPlayer.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Properties

### IsPaused {#p-cuttheropedx-framework-media-ivideoplayer-ispaused}

```csharp
public bool IsPaused { get; }
```

Gets a value indicating whether playback is currently paused.

## Methods

### GetTexture() {#m-cuttheropedx-framework-media-ivideoplayer-gettexture}

```csharp
public abstract Texture2D GetTexture()
```

Gets the current video frame as a texture.

Returns: A [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html) containing the current video frame, or `null` if no video is playing or playback has finished.

### IsPlaying() {#m-cuttheropedx-framework-media-ivideoplayer-isplaying}

```csharp
public abstract bool IsPlaying()
```

Determines whether a video is currently loaded and potentially playing.

Returns: `true` if a video is active; otherwise, `false`.

### IsTextureReady() {#m-cuttheropedx-framework-media-ivideoplayer-istextureready}

```csharp
public abstract bool IsTextureReady()
```

Determines whether the video texture is ready for rendering.

Returns: `true` if the texture can be rendered; otherwise, `false`.

### Pause() {#m-cuttheropedx-framework-media-ivideoplayer-pause}

```csharp
public abstract void Pause()
```

Pauses the current video playback.

### Play(string moviePath, bool mute) {#m-cuttheropedx-framework-media-ivideoplayer-play-system-string-system-boolean}

```csharp
public abstract void Play(string moviePath, bool mute)
```

Prepares a video for playback from the specified path.

Parameters:

- `moviePath`: The relative path to the video file without extension.
- `mute`: If `true`, audio will be muted during playback.

### Resume() {#m-cuttheropedx-framework-media-ivideoplayer-resume}

```csharp
public abstract void Resume()
```

Resumes video playback after being paused.

### Start() {#m-cuttheropedx-framework-media-ivideoplayer-start}

```csharp
public abstract void Start()
```

Starts video playback after a video has been prepared with [Play](#m-cuttheropedx-framework-media-ivideoplayer-play-system-string-system-boolean).

### Stop() {#m-cuttheropedx-framework-media-ivideoplayer-stop}

```csharp
public abstract void Stop()
```

Stops the current video playback.

### Update() {#m-cuttheropedx-framework-media-ivideoplayer-update}

```csharp
public abstract void Update()
```

Updates the video player state each frame.

## Events

### PlaybackFinished {#e-cuttheropedx-framework-media-ivideoplayer-playbackfinished}

```csharp
public event Action PlaybackFinished
```

Occurs when video playback has finished or was skipped.


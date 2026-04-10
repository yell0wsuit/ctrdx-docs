---
title: Class VideoPlayerFFmpeg
description: Video player implementation using FFmpeg for decoding and playback.
---

# Class VideoPlayerFFmpeg

Namespace: `CutTheRopeDX.Framework.Media`

Assembly: `CutTheRope-DX.dll`

Source: `VideoPlayerFFmpeg.cs`

Video player implementation using FFmpeg for decoding and playback.

## Declaration

```csharp
internal sealed class VideoPlayerFFmpeg : IVideoPlayer
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [VideoPlayerFFmpeg](VideoPlayerFFmpeg.md)

## Implements

- [IVideoPlayer](IVideoPlayer.md)
- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Remarks

This player uses FFmpeg libraries for video/audio decoding and converts frames to RGBA format for MonoGame texture rendering. Decoding runs on a background thread to keep the main game loop responsive. Audio is played through [DynamicSoundEffectInstance](https://docs.monogame.net/api/Microsoft.Xna.Framework.Audio.DynamicSoundEffectInstance.html) with resampling handled by libswresample.

## Constructors

### VideoPlayerFFmpeg() {#m-cuttheropedx-framework-media-videoplayerffmpeg-ctor}

```csharp
public VideoPlayerFFmpeg()
```

Initializes a new instance of the [VideoPlayerFFmpeg](VideoPlayerFFmpeg.md) class.

### VideoPlayerFFmpeg(Func&lt;string, bool&gt; fileExists, Func&lt;string, string&gt; resolveRootPath) {#m-cuttheropedx-framework-media-videoplayerffmpeg-ctor-system-func-system-string-system-boolean-system-func-system-string-system-string}

```csharp
internal VideoPlayerFFmpeg(Func<string, bool> fileExists, Func<string, string> resolveRootPath)
```

Initializes a new instance of the [VideoPlayerFFmpeg](VideoPlayerFFmpeg.md) class with custom dependencies.

Parameters:

- `fileExists`: Function to check file existence.
- `resolveRootPath`: Function to resolve FFmpeg library path.

## Fields

### BytesPerSample {#f-cuttheropedx-framework-media-videoplayerffmpeg-bytespersample}

```csharp
private const int BytesPerSample
```

Bytes per audio sample (16-bit audio = 2 bytes).

### MaxQueuedAudioBuffers {#f-cuttheropedx-framework-media-videoplayerffmpeg-maxqueuedaudiobuffers}

```csharp
private const int MaxQueuedAudioBuffers
```

Maximum number of audio buffers to queue for playback.

### TextureReadyTimeoutMs {#f-cuttheropedx-framework-media-videoplayerffmpeg-texturereadytimeoutms}

```csharp
private const int TextureReadyTimeoutMs
```

Timeout in milliseconds before considering texture ready even without frames.

### audioBuffer {#f-cuttheropedx-framework-media-videoplayerffmpeg-audiobuffer}

```csharp
private byte* audioBuffer
```

Native buffer for resampled audio data.

### audioBufferCapacity {#f-cuttheropedx-framework-media-videoplayerffmpeg-audiobuffercapacity}

```csharp
private int audioBufferCapacity
```

Current capacity of the audio buffer.

### audioBuffersSubmitted {#f-cuttheropedx-framework-media-videoplayerffmpeg-audiobufferssubmitted}

```csharp
private int audioBuffersSubmitted
```

Number of audio buffers submitted to the sound instance.

### audioBytesDrained {#f-cuttheropedx-framework-media-videoplayerffmpeg-audiobytesdrained}

```csharp
private long audioBytesDrained
```

Total bytes of audio data drained to the sound instance.

### audioChannels {#f-cuttheropedx-framework-media-videoplayerffmpeg-audiochannels}

```csharp
private int audioChannels
```

Number of audio channels (1 for mono, 2 for stereo).

### audioCodecContext {#f-cuttheropedx-framework-media-videoplayerffmpeg-audiocodeccontext}

```csharp
private AVCodecContext* audioCodecContext
```

Audio decoder context.

### audioFrame {#f-cuttheropedx-framework-media-videoplayerffmpeg-audioframe}

```csharp
private AVFrame* audioFrame
```

Decoded audio frame.

### audioInstance {#f-cuttheropedx-framework-media-videoplayerffmpeg-audioinstance}

```csharp
private DynamicSoundEffectInstance audioInstance
```

MonoGame dynamic sound effect for audio playback.

### audioLock {#f-cuttheropedx-framework-media-videoplayerffmpeg-audiolock}

```csharp
private readonly Lock audioLock
```

Lock for thread-safe audio queue access.

### audioSampleRate {#f-cuttheropedx-framework-media-videoplayerffmpeg-audiosamplerate}

```csharp
private int audioSampleRate
```

Audio sample rate in Hz.

### audioStreamIndex {#f-cuttheropedx-framework-media-videoplayerffmpeg-audiostreamindex}

```csharp
private int audioStreamIndex
```

Index of the audio stream in the container.

### bufferLock {#f-cuttheropedx-framework-media-videoplayerffmpeg-bufferlock}

```csharp
private readonly Lock bufferLock
```

Lock for thread-safe frame buffer access.

### decodeThread {#f-cuttheropedx-framework-media-videoplayerffmpeg-decodethread}

```csharp
private Thread decodeThread
```

Background thread for decoding video/audio frames.

### disposed {#f-cuttheropedx-framework-media-videoplayerffmpeg-disposed}

```csharp
private bool disposed
```

Tracks whether this instance has been disposed.

### fileExists {#f-cuttheropedx-framework-media-videoplayerffmpeg-fileexists}

```csharp
private readonly Func<string, bool> fileExists
```

Function to check if a file exists.

### formatContext {#f-cuttheropedx-framework-media-videoplayerffmpeg-formatcontext}

```csharp
private AVFormatContext* formatContext
```

FFmpeg format/demuxer context for the video file.

### frameCount {#f-cuttheropedx-framework-media-videoplayerffmpeg-framecount}

```csharp
private int frameCount
```

Number of frames decoded so far.

### frameReady {#f-cuttheropedx-framework-media-videoplayerffmpeg-frameready}

```csharp
private bool frameReady
```

Indicates a new frame is ready to be uploaded to the texture.

### librariesLoaded {#f-cuttheropedx-framework-media-videoplayerffmpeg-librariesloaded}

```csharp
private readonly bool librariesLoaded
```

Whether FFmpeg native libraries were found and loaded.

### mute {#f-cuttheropedx-framework-media-videoplayerffmpeg-mute}

```csharp
private bool mute
```

Indicates audio should be muted.

### nextFramePts {#f-cuttheropedx-framework-media-videoplayerffmpeg-nextframepts}

```csharp
private double nextFramePts
```

Presentation timestamp of the next frame to display.

### packet {#f-cuttheropedx-framework-media-videoplayerffmpeg-packet}

```csharp
private AVPacket* packet
```

Reusable packet for reading compressed data.

### pauseGate {#f-cuttheropedx-framework-media-videoplayerffmpeg-pausegate}

```csharp
private readonly ManualResetEventSlim pauseGate
```

Gate that blocks the decode thread when playback is paused.

### pendingAudioQueue {#f-cuttheropedx-framework-media-videoplayerffmpeg-pendingaudioqueue}

```csharp
private readonly Queue<byte[]> pendingAudioQueue
```

Queue of decoded audio buffers waiting to be submitted.

### playbackStopwatch {#f-cuttheropedx-framework-media-videoplayerffmpeg-playbackstopwatch}

```csharp
private readonly Stopwatch playbackStopwatch
```

Stopwatch for tracking playback time and synchronization.

### rgbaBuffer {#f-cuttheropedx-framework-media-videoplayerffmpeg-rgbabuffer}

```csharp
private byte* rgbaBuffer
```

Native buffer for RGBA frame data.

### rgbaFrame {#f-cuttheropedx-framework-media-videoplayerffmpeg-rgbaframe}

```csharp
private AVFrame* rgbaFrame
```

Video frame converted to RGBA format.

### swrContext {#f-cuttheropedx-framework-media-videoplayerffmpeg-swrcontext}

```csharp
private SwrContext* swrContext
```

Audio resampling context.

### swsContext {#f-cuttheropedx-framework-media-videoplayerffmpeg-swscontext}

```csharp
private SwsContext* swsContext
```

Pixel format conversion context.

### textureHeight {#f-cuttheropedx-framework-media-videoplayerffmpeg-textureheight}

```csharp
private int textureHeight
```

Current texture height.

### textureWidth {#f-cuttheropedx-framework-media-videoplayerffmpeg-texturewidth}

```csharp
private int textureWidth
```

Current texture width.

### videoBuffer {#f-cuttheropedx-framework-media-videoplayerffmpeg-videobuffer}

```csharp
private byte[] videoBuffer
```

Managed buffer for transferring frame data to the texture.

### videoCodecContext {#f-cuttheropedx-framework-media-videoplayerffmpeg-videocodeccontext}

```csharp
private AVCodecContext* videoCodecContext
```

Video decoder context.

### videoFrame {#f-cuttheropedx-framework-media-videoplayerffmpeg-videoframe}

```csharp
private AVFrame* videoFrame
```

Decoded video frame in native pixel format.

### videoHeight {#f-cuttheropedx-framework-media-videoplayerffmpeg-videoheight}

```csharp
private int videoHeight
```

Video height in pixels.

### videoStreamIndex {#f-cuttheropedx-framework-media-videoplayerffmpeg-videostreamindex}

```csharp
private int videoStreamIndex
```

Index of the video stream in the container.

### videoTexture {#f-cuttheropedx-framework-media-videoplayerffmpeg-videotexture}

```csharp
private Texture2D videoTexture
```

MonoGame texture for rendering video frames.

### videoTimeBase {#f-cuttheropedx-framework-media-videoplayerffmpeg-videotimebase}

```csharp
private double videoTimeBase
```

Time base for converting video timestamps to seconds.

### videoWidth {#f-cuttheropedx-framework-media-videoplayerffmpeg-videowidth}

```csharp
private int videoWidth
```

Video width in pixels.

### waitForStart {#f-cuttheropedx-framework-media-videoplayerffmpeg-waitforstart}

```csharp
private bool waitForStart
```

Indicates the player is waiting for Start() to be called.

## Properties

### HasPlaybackFinished {#p-cuttheropedx-framework-media-videoplayerffmpeg-hasplaybackfinished}

```csharp
private bool HasPlaybackFinished { get; set; }
```

Thread-safe accessor for the playback-finished flag.

### HasStopRequested {#p-cuttheropedx-framework-media-videoplayerffmpeg-hasstoprequested}

```csharp
private bool HasStopRequested { get; set; }
```

Thread-safe accessor for the stop-requested flag.

### IsPaused {#p-cuttheropedx-framework-media-videoplayerffmpeg-ispaused}

```csharp
public bool IsPaused { get; private set; }
```

Gets a value indicating whether playback is currently paused.

## Methods

### Cleanup() {#m-cuttheropedx-framework-media-videoplayerffmpeg-cleanup}

```csharp
private void Cleanup()
```

Releases all FFmpeg and video resources.

### CleanupAudio() {#m-cuttheropedx-framework-media-videoplayerffmpeg-cleanupaudio}

```csharp
private void CleanupAudio()
```

Releases all audio-related resources.

### DecodeAudioPacket(AVPacket* audioPacket) {#m-cuttheropedx-framework-media-videoplayerffmpeg-decodeaudiopacket-ffmpeg-autogen-avpacket}

```csharp
private void DecodeAudioPacket(AVPacket* audioPacket)
```

Decodes an audio packet and queues the samples for playback.

Parameters:

- `audioPacket`: The FFmpeg audio packet to decode.

### DecodeLoop() {#m-cuttheropedx-framework-media-videoplayerffmpeg-decodeloop}

```csharp
private void DecodeLoop()
```

Background decode loop that runs on the decode thread.

### DecodeNextFrame() {#m-cuttheropedx-framework-media-videoplayerffmpeg-decodenextframe}

```csharp
private void DecodeNextFrame()
```

Decodes the next video frame and updates the frame buffer.

### Dispose() {#m-cuttheropedx-framework-media-videoplayerffmpeg-dispose}

```csharp
public void Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

### DrainAudioQueue() {#m-cuttheropedx-framework-media-videoplayerffmpeg-drainaudioqueue}

```csharp
private void DrainAudioQueue()
```

Submits queued audio buffers to the sound effect instance. Called from the main thread.

### EnqueueAudioBuffer(int size) {#m-cuttheropedx-framework-media-videoplayerffmpeg-enqueueaudiobuffer-system-int32}

```csharp
private void EnqueueAudioBuffer(int size)
```

Copies audio data to managed memory and enqueues it for playback. Called from the decode thread.

Parameters:

- `size`: The size of audio data in bytes.

### EnsureAudioBuffer(int requiredSize) {#m-cuttheropedx-framework-media-videoplayerffmpeg-ensureaudiobuffer-system-int32}

```csharp
private void EnsureAudioBuffer(int requiredSize)
```

Ensures the audio buffer has sufficient capacity.

Parameters:

- `requiredSize`: The minimum required buffer size in bytes.

### EnsureBuffer(int width, int height) {#m-cuttheropedx-framework-media-videoplayerffmpeg-ensurebuffer-system-int32-system-int32}

```csharp
private void EnsureBuffer(int width, int height)
```

Ensures the video buffer array has sufficient capacity for the frame data.

Parameters:

- `width`: Frame width in pixels.
- `height`: Frame height in pixels.

### EnsureTexture(int width, int height) {#m-cuttheropedx-framework-media-videoplayerffmpeg-ensuretexture-system-int32-system-int32}

```csharp
private void EnsureTexture(int width, int height)
```

Ensures the video texture exists and matches the specified dimensions.

Parameters:

- `width`: Required texture width.
- `height`: Required texture height.

### GetPlaybackClock() {#m-cuttheropedx-framework-media-videoplayerffmpeg-getplaybackclock}

```csharp
private double GetPlaybackClock()
```

Gets the current playback position in seconds.

Returns: The elapsed playback time in seconds.

### GetTexture() {#m-cuttheropedx-framework-media-videoplayerffmpeg-gettexture}

```csharp
public Texture2D GetTexture()
```

Gets the current video frame as a texture.

Returns: A [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html) containing the current video frame, or `null` if no video is playing or playback has finished.

### InitializeAudio() {#m-cuttheropedx-framework-media-videoplayerffmpeg-initializeaudio}

```csharp
private bool InitializeAudio()
```

Initializes audio decoding and playback components.

Returns: `true` if audio initialization succeeded or no audio stream exists; otherwise, `false`.

### InitializeFfmpeg(string filePath) {#m-cuttheropedx-framework-media-videoplayerffmpeg-initializeffmpeg-system-string}

```csharp
private bool InitializeFfmpeg(string filePath)
```

Initializes FFmpeg contexts and opens the video file for decoding.

Parameters:

- `filePath`: Full path to the video file.

Returns: `true` if initialization succeeded; otherwise, `false`.

### IsAudioPlaybackDrained() {#m-cuttheropedx-framework-media-videoplayerffmpeg-isaudioplaybackdrained}

```csharp
private bool IsAudioPlaybackDrained()
```

Checks whether all decoded audio has fully finished playing.

Returns: `true` when no queued or pending audio buffers remain.

### IsPlaying() {#m-cuttheropedx-framework-media-videoplayerffmpeg-isplaying}

```csharp
public bool IsPlaying()
```

Determines whether a video is currently loaded and potentially playing.

Returns: `true` if a video is active; otherwise, `false`.

### IsTextureReady() {#m-cuttheropedx-framework-media-videoplayerffmpeg-istextureready}

```csharp
public bool IsTextureReady()
```

Determines whether the video texture is ready for rendering.

Returns: `true` if the texture can be rendered; otherwise, `false`.

### Pause() {#m-cuttheropedx-framework-media-videoplayerffmpeg-pause}

```csharp
public void Pause()
```

Pauses the current video playback.

### Play(string moviePath, bool mute) {#m-cuttheropedx-framework-media-videoplayerffmpeg-play-system-string-system-boolean}

```csharp
public void Play(string moviePath, bool mute)
```

Prepares a video for playback from the specified path.

Parameters:

- `moviePath`: The relative path to the video file without extension.
- `mute`: If `true`, audio will be muted during playback.

### Resume() {#m-cuttheropedx-framework-media-videoplayerffmpeg-resume}

```csharp
public void Resume()
```

Resumes video playback after being paused.

### Start() {#m-cuttheropedx-framework-media-videoplayerffmpeg-start}

```csharp
public void Start()
```

Starts video playback after a video has been prepared with [Play](IVideoPlayer.md#m-cuttheropedx-framework-media-ivideoplayer-play-system-string-system-boolean).

### Stop() {#m-cuttheropedx-framework-media-videoplayerffmpeg-stop}

```csharp
public void Stop()
```

Stops the current video playback.

### Update() {#m-cuttheropedx-framework-media-videoplayerffmpeg-update}

```csharp
public void Update()
```

Updates the video player state each frame.

## Events

### PlaybackFinished {#e-cuttheropedx-framework-media-videoplayerffmpeg-playbackfinished}

```csharp
public event Action PlaybackFinished
```

Occurs when video playback has finished or was skipped.


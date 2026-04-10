---
title: Class SoundMgr
description: Manages sound effects and music playback using MonoGame's audio framework. Handles loading, caching, and playing of sound effects and background music.
---

# Class SoundMgr

Namespace: `CutTheRopeDX.Framework.Media`

Assembly: `CutTheRope-DX.dll`

Source: `SoundMgr.cs`

Manages sound effects and music playback using MonoGame's audio framework. Handles loading, caching, and playing of sound effects and background music.

## Declaration

```csharp
internal sealed class SoundMgr : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [SoundMgr](SoundMgr.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### SoundMgr() {#m-cuttheropedx-framework-media-soundmgr-ctor}

```csharp
public SoundMgr()
```

Initializes a new instance of the [SoundMgr](SoundMgr.md) class.

## Fields

### LoadedSounds {#f-cuttheropedx-framework-media-soundmgr-loadedsounds}

```csharp
private readonly Dictionary<string, SoundEffect> LoadedSounds
```

Cache of loaded sound effects keyed by localized resource name.

### _contentManager {#f-cuttheropedx-framework-media-soundmgr-contentmanager}

```csharp
private static ContentManager _contentManager
```

Content manager used to load sound effects and songs.

### activeLoopedSounds {#f-cuttheropedx-framework-media-soundmgr-activeloopedsounds}

```csharp
private readonly List<SoundEffectInstance> activeLoopedSounds
```

Active looped sound instances managed by pause and stop operations.

### activeSounds {#f-cuttheropedx-framework-media-soundmgr-activesounds}

```csharp
private List<SoundEffectInstance> activeSounds
```

Active one-shot sound instances that may still be playing.

## Methods

### ChangeListState(List&lt;SoundEffectInstance&gt; list, SoundState fromState, SoundState toState) {#m-cuttheropedx-framework-media-soundmgr-changeliststate-system-collections-generic-list-microsoft-xna-framework-audio-soundeffectinstance-microsoft-xna-framework-audio-soundstate-microsoft-xna-framework-audio-soundstate}

```csharp
private static void ChangeListState(List<SoundEffectInstance> list, SoundState fromState, SoundState toState)
```

Changes the playback state of all sound effect instances in the specified `list`.

Parameters:

- `list`: The list of sound effect instances to modify.
- `fromState`: The current state to match.
- `toState`: The target state to transition to.

### ClearStopped() {#m-cuttheropedx-framework-media-soundmgr-clearstopped}

```csharp
private void ClearStopped()
```

Removes stopped sound instances from the active sounds list.

### FreeSound(string soundResourceName) {#m-cuttheropedx-framework-media-soundmgr-freesound-system-string}

```csharp
public void FreeSound(string soundResourceName)
```

Removes a cached sound effect from memory by resource name.

Parameters:

- `soundResourceName`: Logical sound resource name to remove from the cache.

### GetSound(string soundResourceName) {#m-cuttheropedx-framework-media-soundmgr-getsound-system-string}

```csharp
public SoundEffect GetSound(string soundResourceName)
```

Gets or loads a sound effect by its resource name.

Parameters:

- `soundResourceName`: Logical sound resource name to resolve and load.

Returns: The loaded sound effect, or `null` when the name is invalid, localized lookup fails, or the resource is music.

### Pause() {#m-cuttheropedx-framework-media-soundmgr-pause}

```csharp
public void Pause()
```

Pauses all looped sound effects and background music.

### Play(string resourceName, bool loop) {#m-cuttheropedx-framework-media-soundmgr-play-system-string-system-boolean}

```csharp
private SoundEffectInstance Play(string resourceName, bool loop)
```

Creates and plays a sound effect instance for the specified resource.

Parameters:

- `resourceName`: Logical sound resource name to resolve.
- `loop`: Whether the created instance should loop.

Returns: The playing sound effect instance, or `null` if playback could not be started.

### PlayMusic(string musicResourceName) {#m-cuttheropedx-framework-media-soundmgr-playmusic-system-string}

```csharp
public static void PlayMusic(string musicResourceName)
```

Plays background music by its resource name. Stops any currently playing music first.

Parameters:

- `musicResourceName`: Logical music resource name to load and play.

### PlaySound(string soundResourceName) {#m-cuttheropedx-framework-media-soundmgr-playsound-system-string}

```csharp
public void PlaySound(string soundResourceName)
```

Plays a one-shot sound effect by its resource name.

Parameters:

- `soundResourceName`: Logical sound resource name to play once.

### PlaySoundLooped(string soundResourceName) {#m-cuttheropedx-framework-media-soundmgr-playsoundlooped-system-string}

```csharp
public SoundEffectInstance PlaySoundLooped(string soundResourceName)
```

Plays a looping sound effect by its resource name.

Parameters:

- `soundResourceName`: Logical sound resource name to play in a loop.

Returns: The sound effect instance for controlling playback, or `null` on failure.

### Resume() {#m-cuttheropedx-framework-media-soundmgr-resume}

```csharp
public static void Resume()
```

Resumes audio playback after suspension. No-op maintained for API compatibility.

### SetContentManager(ContentManager contentManager) {#m-cuttheropedx-framework-media-soundmgr-setcontentmanager-microsoft-xna-framework-content-contentmanager}

```csharp
public static void SetContentManager(ContentManager contentManager)
```

Sets the content manager used for loading audio assets.

Parameters:

- `contentManager`: The MonoGame content manager.

### StopAllSounds() {#m-cuttheropedx-framework-media-soundmgr-stopallsounds}

```csharp
public void StopAllSounds()
```

Stops all currently playing sound effects, including looped sounds.

### StopList(List&lt;SoundEffectInstance&gt; list) {#m-cuttheropedx-framework-media-soundmgr-stoplist-system-collections-generic-list-microsoft-xna-framework-audio-soundeffectinstance}

```csharp
private static void StopList(List<SoundEffectInstance> list)
```

Stops all sound effect instances in the specified `list`.

Parameters:

- `list`: The list of sound effect instances to stop.

### StopLoopedSounds() {#m-cuttheropedx-framework-media-soundmgr-stoploopedsounds}

```csharp
public void StopLoopedSounds()
```

Stops all currently playing looped sound effects.

### StopMusic() {#m-cuttheropedx-framework-media-soundmgr-stopmusic}

```csharp
public static void StopMusic()
```

Stops the currently playing background music.

### Suspend() {#m-cuttheropedx-framework-media-soundmgr-suspend}

```csharp
public static void Suspend()
```

Suspends audio playback. No-op maintained for API compatibility.

### Unpause() {#m-cuttheropedx-framework-media-soundmgr-unpause}

```csharp
public void Unpause()
```

Resumes all paused looped sound effects and background music.


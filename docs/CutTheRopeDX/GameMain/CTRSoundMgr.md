---
title: Class CTRSoundMgr
description: Game-specific sound manager that wraps SoundMgr with user preference checks. All sound and music playback respects the SOUND_ON and MUSIC_ON user preferences.
---

# Class CTRSoundMgr

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CTRSoundMgr.cs`

Game-specific sound manager that wraps [SoundMgr](../Framework/Media/SoundMgr.md) with user preference checks. All sound and music playback respects the SOUND_ON and MUSIC_ON user preferences.

## Declaration

```csharp
internal sealed class CTRSoundMgr : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [CTRSoundMgr](CTRSoundMgr.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### prevMusic {#f-cuttheropedx-gamemain-ctrsoundmgr-prevmusic}

```csharp
private static string prevMusic
```

Tracks the previously played music name to avoid immediate repetition in random playback.

### s_EnableLoopedSounds {#f-cuttheropedx-gamemain-ctrsoundmgr-s-enableloopedsounds}

```csharp
private static bool s_EnableLoopedSounds
```

Indicates whether looped sound playback is currently enabled.

## Methods

### EnableLoopedSounds(bool bEnable) {#m-cuttheropedx-gamemain-ctrsoundmgr-enableloopedsounds-system-boolean}

```csharp
public static void EnableLoopedSounds(bool bEnable)
```

Enables or disables looped sound playback globally.

Parameters:

- `bEnable`: If `true`, looped sounds are enabled; otherwise, they are stopped and disabled.

### Pause() {#m-cuttheropedx-gamemain-ctrsoundmgr-pause}

```csharp
public static void Pause()
```

Pauses all sound effects and music playback.

### PlayMusic(string musicResourceName) {#m-cuttheropedx-gamemain-ctrsoundmgr-playmusic-system-string}

```csharp
public static void PlayMusic(string musicResourceName)
```

Plays background music identified by its resource name.

Parameters:

- `musicResourceName`: The music resource name to play.

### PlayOmNomSound(string soundResourceName) {#m-cuttheropedx-gamemain-ctrsoundmgr-playomnomsound-system-string}

```csharp
public static void PlayOmNomSound(string soundResourceName)
```

Plays an Om Nom sound, swapping to a skin-specific variant when available.

Parameters:

- `soundResourceName`: The base sound resource name to resolve and play.

### PlayRandomMusic(params string[] musicNames) {#m-cuttheropedx-gamemain-ctrsoundmgr-playrandommusic-system-string}

```csharp
public static void PlayRandomMusic(params string[] musicNames)
```

Plays a random music track from the supplied resource names, avoiding immediate repetition.

Parameters:

- `musicNames`: One or more music resource names to choose from.

### PlayRandomOmNomSound(params string[] soundNames) {#m-cuttheropedx-gamemain-ctrsoundmgr-playrandomomnomsound-system-string}

```csharp
public static void PlayRandomOmNomSound(params string[] soundNames)
```

Plays a random Om Nom sound, resolving candidates for the selected skin first.

Parameters:

- `soundNames`: One or more base sound resource names to resolve and choose from.

### PlayRandomSound(params string[] soundNames) {#m-cuttheropedx-gamemain-ctrsoundmgr-playrandomsound-system-string}

```csharp
public static void PlayRandomSound(params string[] soundNames)
```

Plays a random sound from the provided list of sound resource names.

Parameters:

- `soundNames`: One or more sound resource names to choose from.

### PlaySound(string soundResourceName) {#m-cuttheropedx-gamemain-ctrsoundmgr-playsound-system-string}

```csharp
public static void PlaySound(string soundResourceName)
```

Plays a sound effect identified by its resource name.

Parameters:

- `soundResourceName`: The sound resource name to play.

### PlaySoundLooped(string soundResourceName) {#m-cuttheropedx-gamemain-ctrsoundmgr-playsoundlooped-system-string}

```csharp
public static SoundEffectInstance PlaySoundLooped(string soundResourceName)
```

Plays a looped sound effect identified by its resource name.

Parameters:

- `soundResourceName`: The sound resource name to loop.

Returns: The looping [SoundEffectInstance](https://docs.monogame.net/api/Microsoft.Xna.Framework.Audio.SoundEffectInstance.html), or `null` if looped sounds are disabled.

### StopAll() {#m-cuttheropedx-gamemain-ctrsoundmgr-stopall}

```csharp
public static void StopAll()
```

Stops all currently playing sounds and music.

### StopLoopedSounds() {#m-cuttheropedx-gamemain-ctrsoundmgr-stoploopedsounds}

```csharp
public static void StopLoopedSounds()
```

Stops all currently playing looped sound effects.

### StopMusic() {#m-cuttheropedx-gamemain-ctrsoundmgr-stopmusic}

```csharp
public static void StopMusic()
```

Stops the currently playing background music.

### StopSounds() {#m-cuttheropedx-gamemain-ctrsoundmgr-stopsounds}

```csharp
public static void StopSounds()
```

Stops all currently playing sound effects.

### Unpause() {#m-cuttheropedx-gamemain-ctrsoundmgr-unpause}

```csharp
public static void Unpause()
```

Resumes all paused sound effects and music playback.


---
title: Class OmNomSkinDefinition
description: Immutable definition of a single Om Nom skin loaded from the skins manifest.
---

# Class OmNomSkinDefinition

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `OmNomSkinDefinition.cs`

Immutable definition of a single Om Nom skin loaded from the skins manifest.

## Declaration

```csharp
internal sealed class OmNomSkinDefinition
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [OmNomSkinDefinition](OmNomSkinDefinition.md)

## Constructors

### OmNomSkinDefinition(string id, string name, string animationXmlPath, IReadOnlyDictionary&lt;TargetAnimationState, int&gt; timelineMappings, IReadOnlyDictionary&lt;int, int&gt; followups, int[] idleVariants, int idleToSleepTrimFrames, int[] slowTimelineIds, bool startWithGreeting, string[] uniqueSounds) {#m-cuttheropedx-gamemain-omnomskindefinition-ctor-system-string-system-string-system-string-system-collections-generic-ireadonlydictionary-cuttheropedx-gamemain-targetanimationstate-system-int32-system-collections-generic-ireadonlydictionary-system-int32-system-int32-system-int32-system-int32-system-int32-system-boolean-system-string}

```csharp
public OmNomSkinDefinition(string id, string name, string animationXmlPath, IReadOnlyDictionary<TargetAnimationState, int> timelineMappings, IReadOnlyDictionary<int, int> followups, int[] idleVariants, int idleToSleepTrimFrames, int[] slowTimelineIds, bool startWithGreeting, string[] uniqueSounds)
```

Immutable definition of a single Om Nom skin loaded from the skins manifest.

## Properties

### AnimationXmlPath {#p-cuttheropedx-gamemain-omnomskindefinition-animationxmlpath}

```csharp
public string AnimationXmlPath { get; }
```

Absolute path to the animation XML file.

### Followups {#p-cuttheropedx-gamemain-omnomskindefinition-followups}

```csharp
public IReadOnlyDictionary<int, int> Followups { get; }
```

Maps finished timeline ID to the next timeline ID to play.

### Id {#p-cuttheropedx-gamemain-omnomskindefinition-id}

```csharp
public string Id { get; }
```

Identifier for the skin.

### IdleToSleepTrimFrames {#p-cuttheropedx-gamemain-omnomskindefinition-idletosleeptrimframes}

```csharp
public int IdleToSleepTrimFrames { get; }
```

Frames to skip from the start of the idle-to-sleep transition.

### IdleVariants {#p-cuttheropedx-gamemain-omnomskindefinition-idlevariants}

```csharp
public int[] IdleVariants { get; }
```

Timeline IDs to randomly pick from for idle variations.

### Name {#p-cuttheropedx-gamemain-omnomskindefinition-name}

```csharp
public string Name { get; }
```

Skin name/prefix.

### SlowTimelineIds {#p-cuttheropedx-gamemain-omnomskindefinition-slowtimelineids}

```csharp
public int[] SlowTimelineIds { get; }
```

Timeline IDs that should run at the slowed iOS Flash playback rate.

### StartWithGreeting {#p-cuttheropedx-gamemain-omnomskindefinition-startwithgreeting}

```csharp
public bool StartWithGreeting { get; }
```

Whether to play the greeting animation immediately on initialization.

### TimelineMappings {#p-cuttheropedx-gamemain-omnomskindefinition-timelinemappings}

```csharp
public IReadOnlyDictionary<TargetAnimationState, int> TimelineMappings { get; }
```

Maps animation states to timeline IDs in the XML.

### UniqueSounds {#p-cuttheropedx-gamemain-omnomskindefinition-uniquesounds}

```csharp
public string[] UniqueSounds { get; }
```

Classic Om Nom sounds that this skin overrides or explicitly uses.

## Methods

### GetTimelineId(TargetAnimationState state) {#m-cuttheropedx-gamemain-omnomskindefinition-gettimelineid-cuttheropedx-gamemain-targetanimationstate}

```csharp
public int GetTimelineId(TargetAnimationState state)
```

Gets the timeline ID for a given state, or -1 if unmapped.

Parameters:

- `state`: Animation state to resolve.

Returns: The timeline ID mapped to `state`, or -1 when unmapped.

### HasUniqueSound(string soundResourceName) {#m-cuttheropedx-gamemain-omnomskindefinition-hasuniquesound-system-string}

```csharp
public bool HasUniqueSound(string soundResourceName)
```

Whether this skin declares a unique behavior for the given Om Nom sound.

Parameters:

- `soundResourceName`: Sound resource name to check.

Returns: `true` when the sound is explicitly listed as unique; otherwise `false`.

### ShouldBindFollowupDelegate(int timelineId) {#m-cuttheropedx-gamemain-omnomskindefinition-shouldbindfollowupdelegate-system-int32}

```csharp
public bool ShouldBindFollowupDelegate(int timelineId)
```

Whether the given timeline should bind a delegate for followup/cadence.

Parameters:

- `timelineId`: Timeline to test for followup binding.

Returns: `true` when the timeline has a configured followup; otherwise `false`.

### TryGetFollowupTimeline(int finishedTimelineId, out int followupTimelineId) {#m-cuttheropedx-gamemain-omnomskindefinition-trygetfollowuptimeline-system-int32-system-int32}

```csharp
public bool TryGetFollowupTimeline(int finishedTimelineId, out int followupTimelineId)
```

Whether a followup timeline should play after the given timeline finishes.

Parameters:

- `finishedTimelineId`: Timeline that just finished.
- `followupTimelineId`: Resolved followup timeline ID when one exists.

Returns: `true` when a followup timeline mapping exists; otherwise `false`.


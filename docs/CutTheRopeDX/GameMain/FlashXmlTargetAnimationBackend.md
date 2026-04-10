---
title: Class FlashXmlTargetAnimationBackend
description: Target animation backend that builds Om Nom animation timelines from Flash XML exports.
---

# Class FlashXmlTargetAnimationBackend

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FlashXmlTargetAnimationBackend.cs`

Target animation backend that builds Om Nom animation timelines from Flash XML exports.

## Declaration

```csharp
internal sealed class FlashXmlTargetAnimationBackend : ITargetAnimationBackend, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FlashXmlTargetAnimationBackend](FlashXmlTargetAnimationBackend.md)

## Implements

- [ITargetAnimationBackend](ITargetAnimationBackend.md)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Constructors

### FlashXmlTargetAnimationBackend(OmNomSkinDefinition skinDefinition) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-ctor-cuttheropedx-gamemain-omnomskindefinition}

```csharp
public FlashXmlTargetAnimationBackend(OmNomSkinDefinition skinDefinition)
```

Initializes a new Flash XML target animation backend for a skin.

Parameters:

- `skinDefinition`: Skin definition that provides animation paths and timeline IDs.

## Fields

### BaseTargetScale {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-basetargetscale}

```csharp
private const float BaseTargetScale
```

Base scale applied to Flash XML target roots to match the classic target size.

### FlashXmlFrameDurationSeconds {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-flashxmlframedurationseconds}

```csharp
private const float FlashXmlFrameDurationSeconds
```

Duration of one exported Flash frame in seconds.

### IosSlowPlaybackRate {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-iosslowplaybackrate}

```csharp
private const float IosSlowPlaybackRate
```

Playback rate used by timelines marked as slow in the skin definition.

### PirateBubbleSpawnDelaySeconds {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-piratebubblespawndelayseconds}

```csharp
private const float PirateBubbleSpawnDelaySeconds
```

Initial delay before spawning pirate bubble overlays.

### PirateSkinName {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-pirateskinname}

```csharp
private const string PirateSkinName
```

Skin ID that enables the pirate bubble overlay.

### SleepOverlayTimeline {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-sleepoverlaytimeline}

```csharp
private const int SleepOverlayTimeline
```

Timeline ID used by the sleep overlay export.

### _activeBubbleOverlays {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-activebubbleoverlays}

```csharp
private readonly List<FlashXmlTargetAnimationBackend.PirateBubbleOverlayInstance> _activeBubbleOverlays
```

Active pirate bubble overlay instances.

### _activeTimelineId {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-activetimelineid}

```csharp
private int _activeTimelineId
```

Currently active target timeline ID, or -1 when no timeline is active.

### _additionalOverlayX {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-additionaloverlayx}

```csharp
private float _additionalOverlayX
```

X position used when spawning additional overlay roots.

### _additionalOverlayY {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-additionaloverlayy}

```csharp
private float _additionalOverlayY
```

Y position used when spawning additional overlay roots.

### _bubbleOverlayDefinition {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-bubbleoverlaydefinition}

```csharp
private readonly FlashXmlAnimationDefinition _bubbleOverlayDefinition
```

Parsed Flash XML definition for pirate bubble overlays, or `null` for other skins.

### _definition {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-definition}

```csharp
private readonly FlashXmlAnimationDefinition _definition
```

Parsed Flash XML animation definition for the selected skin.

### _driverTimeline {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-drivertimeline}

```csharp
private Timeline _driverTimeline
```

Timeline used as the active driver for callbacks.

### _driverTimelineDurationSeconds {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-drivertimelinedurationseconds}

```csharp
private float _driverTimelineDurationSeconds
```

Duration of the active driver timeline in seconds.

### _driverTimelineId {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-drivertimelineid}

```csharp
private int _driverTimelineId
```

Timeline ID for the active driver timeline, or -1 when no driver is bound.

### _driverTimelinePlaybackRate {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-drivertimelineplaybackrate}

```csharp
private float _driverTimelinePlaybackRate
```

Playback-rate multiplier for the active driver timeline.

### _driverTimelineUsesRootDefinition {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-drivertimelineusesrootdefinition}

```csharp
private bool _driverTimelineUsesRootDefinition
```

Whether the active driver timeline came from the root definition.

### _externalTimelineDelegate {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-externaltimelinedelegate}

```csharp
private ITimelineDelegate _externalTimelineDelegate
```

External delegate that receives target timeline callbacks.

### _idleCadenceClock {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-idlecadenceclock}

```csharp
private readonly FlashXmlTargetAnimationBackend.FlashXmlIdleCadenceClock _idleCadenceClock
```

Clock that converts looping idle timeline progress into synthetic cadence callbacks.

### _pendingPirateBubbleDelaySeconds {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-pendingpiratebubbledelayseconds}

```csharp
private float _pendingPirateBubbleDelaySeconds
```

Remaining delay before the next pirate bubble overlay spawn, or -1 when disabled.

### _skinDefinition {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-skindefinition}

```csharp
private readonly OmNomSkinDefinition _skinDefinition
```

Skin definition that maps target states to Flash XML timeline IDs.

### _skipIdleToSleepTransitionUntilWake {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-skipidletosleeptransitionuntilwake}

```csharp
private bool _skipIdleToSleepTransitionUntilWake
```

Whether idle-to-sleep transition playback is blocked until a wake animation has played.

### _sleepOverlayObject {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-sleepoverlayobject}

```csharp
private readonly FlashXmlStageRoot _sleepOverlayObject
```

Root object used for the sleep overlay animation.

### _sleepOverlayParts {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-sleepoverlayparts}

```csharp
private readonly List<Image> _sleepOverlayParts
```

Image parts that make up the sleep overlay animation.

### parts {#f-cuttheropedx-gamemain-flashxmltargetanimationbackend-parts}

```csharp
private readonly List<Image> parts
```

Image parts that make up the target animation.

## Properties

### HandlesOwnSleepPulse {#p-cuttheropedx-gamemain-flashxmltargetanimationbackend-handlesownsleeppulse}

```csharp
public bool HandlesOwnSleepPulse { get; }
```

Whether this backend owns sleep pulse overlay playback.

### StartsWithGreeting {#p-cuttheropedx-gamemain-flashxmltargetanimationbackend-startswithgreeting}

```csharp
public bool StartsWithGreeting { get; }
```

Whether this skin should start by playing its greeting animation.

### TargetObject {#p-cuttheropedx-gamemain-flashxmltargetanimationbackend-targetobject}

```csharp
public GameObject TargetObject { get; }
```

Root object that owns the target animation parts and timelines.

## Methods

### BindDriverDelegateForTimeline(int timelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-binddriverdelegatefortimeline-system-int32}

```csharp
private void BindDriverDelegateForTimeline(int timelineId)
```

Binds this backend as the timeline delegate for the best callback driver timeline.

Parameters:

- `timelineId`: Timeline ID that needs callback driving.

### BuildAction(Image part, FlashXmlActionCommand action, Dictionary&lt;string, Image&gt; partsByName) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-buildaction-cuttheropedx-framework-visual-image-cuttheropedx-gamemain-flashxmlactioncommand-system-collections-generic-dictionary-system-string-cuttheropedx-framework-visual-image}

```csharp
private static CTRAction BuildAction(Image part, FlashXmlActionCommand action, Dictionary<string, Image> partsByName)
```

Builds a runtime action from one exported Flash XML action command.

Parameters:

- `part`: Part that owns the action when the exported target is self.
- `action`: Action command to convert.
- `partsByName`: Lookup table for named action targets.

Returns: The generated action, or `null` when the action cannot be resolved.

### BuildParts(FlashXmlAnimationDefinition definition, GameObject rootObject, List&lt;Image&gt; targetParts, int idleLoopTimelineId, int sleepingTimelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-buildparts-cuttheropedx-gamemain-flashxmlanimationdefinition-cuttheropedx-framework-helpers-gameobject-system-collections-generic-list-cuttheropedx-framework-visual-image-system-int32-system-int32}

```csharp
internal static void BuildParts(FlashXmlAnimationDefinition definition, GameObject rootObject, List<Image> targetParts, int idleLoopTimelineId, int sleepingTimelineId)
```

Creates Flash XML image parts and attaches their timelines to a root object.

Parameters:

- `definition`: Parsed Flash XML animation definition.
- `rootObject`: Root object that will own the created parts.
- `targetParts`: Collection that receives the created image parts.
- `idleLoopTimelineId`: Timeline ID that should loop as the idle animation.
- `sleepingTimelineId`: Timeline ID that should loop as the sleeping animation.

### BuildRootTimelines(FlashXmlAnimationDefinition definition, GameObject rootObject, int idleLoopTimelineId, int sleepingTimelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-buildroottimelines-cuttheropedx-gamemain-flashxmlanimationdefinition-cuttheropedx-framework-helpers-gameobject-system-int32-system-int32}

```csharp
internal static void BuildRootTimelines(FlashXmlAnimationDefinition definition, GameObject rootObject, int idleLoopTimelineId, int sleepingTimelineId)
```

Creates root driver timelines and attaches them to a root object.

Parameters:

- `definition`: Parsed Flash XML animation definition.
- `rootObject`: Root object that receives the root timelines.
- `idleLoopTimelineId`: Timeline ID that should loop as the idle animation.
- `sleepingTimelineId`: Timeline ID that should loop as the sleeping animation.

### BuildTimelines(FlashXmlImage part, FlashXmlPartDefinition partDefinition, Dictionary&lt;string, Image&gt; partsByName, int idleLoopTimelineId, int sleepingTimelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-buildtimelines-cuttheropedx-gamemain-flashxmlimage-cuttheropedx-gamemain-flashxmlpartdefinition-system-collections-generic-dictionary-system-string-cuttheropedx-framework-visual-image-system-int32-system-int32}

```csharp
private static void BuildTimelines(FlashXmlImage part, FlashXmlPartDefinition partDefinition, Dictionary<string, Image> partsByName, int idleLoopTimelineId, int sleepingTimelineId)
```

Builds and attaches timelines for one Flash XML image part.

Parameters:

- `part`: Part that receives the generated timelines.
- `partDefinition`: Parsed definition for the part.
- `partsByName`: Lookup table for action targets by exported part name.
- `idleLoopTimelineId`: Timeline ID that should loop as the idle animation.
- `sleepingTimelineId`: Timeline ID that should loop as the sleeping animation.

### ComputeTimelineDurationSeconds(FlashXmlTimelineDefinition timelineDefinition) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-computetimelinedurationseconds-cuttheropedx-gamemain-flashxmltimelinedefinition}

```csharp
private static float ComputeTimelineDurationSeconds(FlashXmlTimelineDefinition timelineDefinition)
```

Computes the duration of a Flash XML timeline from its key-frame offsets.

Parameters:

- `timelineDefinition`: Timeline definition to inspect.

Returns: The computed duration in seconds.

### CreateHiddenTimeline() {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-createhiddentimeline}

```csharp
private static Timeline CreateHiddenTimeline()
```

Creates a timeline that hides a part for timelines missing from the Flash XML export.

Returns: The hidden placeholder timeline.

### CreateRootDriverTimeline(FlashXmlRootTimelineDefinition timelineDefinition) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-createrootdrivertimeline-cuttheropedx-gamemain-flashxmlroottimelinedefinition}

```csharp
private static Timeline CreateRootDriverTimeline(FlashXmlRootTimelineDefinition timelineDefinition)
```

Creates a root driver timeline from root action key frames.

Parameters:

- `timelineDefinition`: Root timeline definition to convert.

Returns: The generated root driver timeline.

### CreateStageRoot(FlashXmlAnimationDefinition definition) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-createstageroot-cuttheropedx-gamemain-flashxmlanimationdefinition}

```csharp
private static FlashXmlStageRoot CreateStageRoot(FlashXmlAnimationDefinition definition)
```

Creates and configures a Flash XML stage root.

Parameters:

- `definition`: Animation definition that provides stage dimensions.

Returns: The configured stage root.

### DrawSleepOverlays() {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-drawsleepoverlays}

```csharp
public void DrawSleepOverlays()
```

Draws sleep overlays when they are visible.

### FindBestDriverPartWithTimeline(int timelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-findbestdriverpartwithtimeline-system-int32}

```csharp
private Image FindBestDriverPartWithTimeline(int timelineId)
```

Finds the best part timeline to use as the callback driver for a timeline ID.

Parameters:

- `timelineId`: Timeline ID to inspect.

Returns: The best driver part, or `null` if no part contains the timeline.

### FindFirstPartWithTimeline(int timelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-findfirstpartwithtimeline-system-int32}

```csharp
private Image FindFirstPartWithTimeline(int timelineId)
```

Finds the first target part that contains a timeline.

Parameters:

- `timelineId`: Timeline ID to find.

Returns: The first matching part, or `null` if none exists.

### GetIdleToSleepSkipSeconds(float idleToSleepDurationSeconds) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-getidletosleepskipseconds-system-single}

```csharp
private float GetIdleToSleepSkipSeconds(float idleToSleepDurationSeconds)
```

Gets the number of seconds to skip from the start of the idle-to-sleep transition.

Parameters:

- `idleToSleepDurationSeconds`: Total idle-to-sleep transition duration in seconds.

Returns: The clamped skip duration in seconds.

### GetPirateBubbleLoopIntervalSeconds() {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-getpiratebubbleloopintervalseconds}

```csharp
private static float GetPirateBubbleLoopIntervalSeconds()
```

Gets the randomized interval before the next pirate bubble overlay.

Returns: Delay in seconds before the next pirate bubble overlay.

### GetSleepPulseDelaySeconds() {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-getsleeppulsedelayseconds}

```csharp
public float GetSleepPulseDelaySeconds()
```

Gets the delay before the sleep pulse overlay should be triggered.

Returns: Delay in seconds before the sleep pulse overlay should play.

### GetTargetBaseScaleX() {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-gettargetbasescalex}

```csharp
public float GetTargetBaseScaleX()
```

Gets the base X scale applied to the target root.

Returns: The target root's base X scale.

### GetTargetBaseScaleY() {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-gettargetbasescaley}

```csharp
public float GetTargetBaseScaleY()
```

Gets the base Y scale applied to the target root.

Returns: The target root's base Y scale.

### GetTimelineDurationSeconds(Image part, int timelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-gettimelinedurationseconds-cuttheropedx-framework-visual-image-system-int32}

```csharp
private float GetTimelineDurationSeconds(Image part, int timelineId)
```

Gets a part timeline duration from the parsed Flash XML definition.

Parameters:

- `part`: Part whose timeline duration should be read.
- `timelineId`: Timeline ID to inspect.

Returns: The timeline duration in seconds, or 0 when the part has no matching definition.

### GetTimelineDurationSeconds(int timelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-gettimelinedurationseconds-system-int32}

```csharp
private float GetTimelineDurationSeconds(int timelineId)
```

Gets the best known duration for a timeline.

Parameters:

- `timelineId`: Timeline ID to inspect.

Returns: The timeline duration in seconds, or 0 when the timeline is unknown.

### GetTimelinePlaybackRate(OmNomSkinDefinition skinDefinition, int activeTimelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-gettimelineplaybackrate-cuttheropedx-gamemain-omnomskindefinition-system-int32}

```csharp
private static float GetTimelinePlaybackRate(OmNomSkinDefinition skinDefinition, int activeTimelineId)
```

Gets the playback-rate multiplier for a timeline.

Parameters:

- `skinDefinition`: Skin definition containing slow timeline IDs.
- `activeTimelineId`: Timeline ID to inspect.

Returns: The playback-rate multiplier for the timeline.

### Initialize(ITimelineDelegate timelineDelegate) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-initialize-cuttheropedx-framework-visual-itimelinedelegate}

```csharp
public void Initialize(ITimelineDelegate timelineDelegate)
```

Initializes playback and binds the external timeline delegate.

Parameters:

- `timelineDelegate`: Delegate that receives timeline callbacks from the target animation.

### IsPlaying(TargetAnimationState state) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-isplaying-cuttheropedx-gamemain-targetanimationstate}

```csharp
public bool IsPlaying(TargetAnimationState state)
```

Determines whether the timeline for a target animation state is currently playing.

Parameters:

- `state`: Target animation state to inspect.

Returns: `true` if the mapped timeline is active and playing; otherwise, `false`.

### IsTimelinePlaying(List&lt;Image&gt; targetParts, int timelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-istimelineplaying-system-collections-generic-list-cuttheropedx-framework-visual-image-system-int32}

```csharp
private static bool IsTimelinePlaying(List<Image> targetParts, int timelineId)
```

Determines whether a timeline is currently playing on any target part.

Parameters:

- `targetParts`: Parts to inspect.
- `timelineId`: Timeline ID to inspect.

Returns: `true` when the timeline is active and playing on a part; otherwise, `false`.

### MapTransition(int interpolation) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-maptransition-system-int32}

```csharp
private static KeyFrame.TransitionType MapTransition(int interpolation)
```

Maps an exported Flash interpolation code to a runtime transition type.

Parameters:

- `interpolation`: Flash interpolation code.

Returns: The mapped runtime transition type.

### ParseActionFloat(string raw) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-parseactionfloat-system-string}

```csharp
private static float ParseActionFloat(string raw)
```

Parses a Flash XML action parameter as a floating-point value.

Parameters:

- `raw`: Raw action parameter text.

Returns: The parsed floating-point value, or 0 when parsing fails.

### ParseActionInt(string raw) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-parseactionint-system-string}

```csharp
private static int ParseActionInt(string raw)
```

Parses a Flash XML action parameter as an integer.

Parameters:

- `raw`: Raw action parameter text.

Returns: The parsed integer value, or 0 when parsing fails.

### Play(TargetAnimationState state) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-play-cuttheropedx-gamemain-targetanimationstate}

```csharp
public void Play(TargetAnimationState state)
```

Plays the timeline mapped to a target animation state.

Parameters:

- `state`: Target animation state to play.

### PlayRandomIdleVariant(Func&lt;int, int, int&gt; rng) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-playrandomidlevariant-system-func-system-int32-system-int32-system-int32}

```csharp
public void PlayRandomIdleVariant(Func<int, int, int> rng)
```

Plays one of the configured idle variant timelines.

Parameters:

- `rng`: Random integer provider called with inclusive minimum and maximum indexes.

### PlayRootTimeline(GameObject rootObject, int timelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-playroottimeline-cuttheropedx-framework-helpers-gameobject-system-int32}

```csharp
internal static void PlayRootTimeline(GameObject rootObject, int timelineId)
```

Plays a root timeline if present, or stops the current root timeline otherwise.

Parameters:

- `rootObject`: Root object that owns the timeline.
- `timelineId`: Flash timeline ID to play.

### PlayTimeline(List&lt;Image&gt; targetParts, int timelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-playtimeline-system-collections-generic-list-cuttheropedx-framework-visual-image-system-int32}

```csharp
internal static void PlayTimeline(List<Image> targetParts, int timelineId)
```

Plays a timeline across all parts, hiding parts that do not contain the requested timeline.

Parameters:

- `targetParts`: Parts that should play or stop the timeline.
- `timelineId`: Flash timeline ID to play.

### PlayTimelineById(int timelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-playtimelinebyid-system-int32}

```csharp
private void PlayTimelineById(int timelineId)
```

Plays a Flash XML timeline by ID on the target root and all parts.

Parameters:

- `timelineId`: Flash XML timeline ID to play.

### ResetBlink() {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-resetblink}

```csharp
public void ResetBlink()
```

Resets blink state for backends that synthesize blinks.

### SeekCurrentTimeline(float timeSeconds) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-seekcurrenttimeline-system-single}

```csharp
private void SeekCurrentTimeline(float timeSeconds)
```

Seeks the currently active timeline on the root object and parts.

Parameters:

- `timeSeconds`: Target timeline time in seconds.

### SeekTimeline(List&lt;Image&gt; targetParts, int timelineId, float timeSeconds) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-seektimeline-system-collections-generic-list-cuttheropedx-framework-visual-image-system-int32-system-single}

```csharp
private void SeekTimeline(List<Image> targetParts, int timelineId, float timeSeconds)
```

Seeks a playing timeline on all target parts.

Parameters:

- `targetParts`: Parts whose timeline should be seeked.
- `timelineId`: Timeline ID to seek.
- `timeSeconds`: Target timeline time in seconds.

### SetSleepOverlayVisible(bool visible) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-setsleepoverlayvisible-system-boolean}

```csharp
public void SetSleepOverlayVisible(bool visible)
```

Sets whether the sleep overlay is visible and playing.

Parameters:

- `visible`: `true` to show and restart the sleep overlay; otherwise, `false`.

### ShouldStartVisible(FlashXmlPartDefinition partDefinition, int idleLoopTimelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-shouldstartvisible-cuttheropedx-gamemain-flashxmlpartdefinition-system-int32}

```csharp
private static bool ShouldStartVisible(FlashXmlPartDefinition partDefinition, int idleLoopTimelineId)
```

Determines whether a part should be visible before playback starts.

Parameters:

- `partDefinition`: Part definition to inspect.
- `idleLoopTimelineId`: Idle loop timeline ID.

Returns: `true` when the part participates in the idle loop; otherwise, `false`.

### ShouldUseIdleToSleepTransition() {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-shoulduseidletosleeptransition}

```csharp
private bool ShouldUseIdleToSleepTransition()
```

Gets whether the idle-to-sleep transition is currently allowed.

Returns: `true` when idle-to-sleep transition playback is allowed; otherwise, `false`.

### SkipCurrentTimelineFrames(int frameCount) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-skipcurrenttimelineframes-system-int32}

```csharp
internal void SkipCurrentTimelineFrames(int frameCount)
```

Skips forward in the active timeline by a number of Flash frames.

Parameters:

- `frameCount`: Number of 30 FPS Flash frames to skip.

### SumTimeOffsets(IReadOnlyList&lt;FlashXmlFloat2KeyFrame&gt; frames) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-sumtimeoffsets-system-collections-generic-ireadonlylist-cuttheropedx-gamemain-flashxmlfloat2keyframe}

```csharp
private static float SumTimeOffsets(IReadOnlyList<FlashXmlFloat2KeyFrame> frames)
```

Sums the time offsets in a sequence of two-value key frames.

Parameters:

- `frames`: Frames whose time offsets should be summed.

Returns: The total duration represented by the frames.

### SumTimeOffsets(IReadOnlyList&lt;FlashXmlFloat4KeyFrame&gt; frames) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-sumtimeoffsets-system-collections-generic-ireadonlylist-cuttheropedx-gamemain-flashxmlfloat4keyframe}

```csharp
private static float SumTimeOffsets(IReadOnlyList<FlashXmlFloat4KeyFrame> frames)
```

Sums the time offsets in a sequence of four-value key frames.

Parameters:

- `frames`: Frames whose time offsets should be summed.

Returns: The total duration represented by the frames.

### SumTimeOffsets(IReadOnlyList&lt;FlashXmlFloat1KeyFrame&gt; frames) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-sumtimeoffsets-system-collections-generic-ireadonlylist-cuttheropedx-gamemain-flashxmlfloat1keyframe}

```csharp
private static float SumTimeOffsets(IReadOnlyList<FlashXmlFloat1KeyFrame> frames)
```

Sums the time offsets in a sequence of one-value key frames.

Parameters:

- `frames`: Frames whose time offsets should be summed.

Returns: The total duration represented by the frames.

### SumTimeOffsets(IReadOnlyList&lt;FlashXmlActionGroupKeyFrame&gt; frames) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-sumtimeoffsets-system-collections-generic-ireadonlylist-cuttheropedx-gamemain-flashxmlactiongroupkeyframe}

```csharp
private static float SumTimeOffsets(IReadOnlyList<FlashXmlActionGroupKeyFrame> frames)
```

Sums the time offsets in a sequence of action key frames.

Parameters:

- `frames`: Frames whose time offsets should be summed.

Returns: The total duration represented by the frames.

### SyncAdditionalOverlayPosition(float x, float y) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-syncadditionaloverlayposition-system-single-system-single}

```csharp
public void SyncAdditionalOverlayPosition(float x, float y)
```

Synchronizes non-sleep overlay roots to the target.

Parameters:

- `x`: Screen-space X position for additional overlay roots.
- `y`: Screen-space Y position for additional overlay roots.

### SyncSleepOverlayPosition(float x, float y) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-syncsleepoverlayposition-system-single-system-single}

```csharp
public void SyncSleepOverlayPosition(float x, float y)
```

Synchronizes the sleep overlay root position to the target.

Parameters:

- `x`: Screen-space X position for the overlay root.
- `y`: Screen-space Y position for the overlay root.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.

### TriggerBlink() {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-triggerblink}

```csharp
public void TriggerBlink()
```

Triggers a blink for backends that synthesize blinks.

### TriggerPirateBubbleOverlay() {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-triggerpiratebubbleoverlay}

```csharp
private void TriggerPirateBubbleOverlay()
```

Creates and starts one pirate bubble overlay animation.

### TryGetCompletionTargetTimelineId(OmNomSkinDefinition skinDefinition, int finishedTimelineId, out int followupTimelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-trygetcompletiontargettimelineid-cuttheropedx-gamemain-omnomskindefinition-system-int32-system-int32}

```csharp
private static bool TryGetCompletionTargetTimelineId(OmNomSkinDefinition skinDefinition, int finishedTimelineId, out int followupTimelineId)
```

Gets the follow-up timeline that should play after a timeline completes.

Parameters:

- `skinDefinition`: Skin definition containing follow-up timeline mappings.
- `finishedTimelineId`: Timeline ID that just completed.
- `followupTimelineId`: Follow-up timeline ID, when one is configured.

Returns: `true` when a follow-up timeline is configured; otherwise, `false`.

### TryMapState(TargetAnimationState state, out int timelineId) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-trymapstate-cuttheropedx-gamemain-targetanimationstate-system-int32}

```csharp
private bool TryMapState(TargetAnimationState state, out int timelineId)
```

Maps a target animation state to a configured Flash XML timeline ID.

Parameters:

- `state`: Target animation state to map.
- `timelineId`: Mapped timeline ID, when one exists.

Returns: `true` when the state maps to a configured timeline; otherwise, `false`.

### TryPlayIdleToSleepTransition() {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-tryplayidletosleeptransition}

```csharp
private bool TryPlayIdleToSleepTransition()
```

Attempts to play the idle-to-sleep transition timeline.

Returns: `true` when the transition started; otherwise, `false`.

### UpdateAdditionalOverlays(float delta) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-updateadditionaloverlays-system-single}

```csharp
public void UpdateAdditionalOverlays(float delta)
```

Updates non-sleep overlay animations owned by the backend.

Parameters:

- `delta`: Elapsed time in seconds since the last update.

### UpdateIdleToSleepTransitionAvailability(TargetAnimationState state) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-updateidletosleeptransitionavailability-cuttheropedx-gamemain-targetanimationstate}

```csharp
private void UpdateIdleToSleepTransitionAvailability(TargetAnimationState state)
```

Updates whether idle-to-sleep transition playback is allowed after a state change.

Parameters:

- `state`: State that was just requested.

### UpdatePirateBubbleOverlays(float delta) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-updatepiratebubbleoverlays-system-single}

```csharp
private void UpdatePirateBubbleOverlays(float delta)
```

Updates pirate bubble overlay scheduling and active overlay animations.

Parameters:

- `delta`: Elapsed time in seconds since the last update.

### UpdatePirateBubbleScheduleForState(TargetAnimationState state) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-updatepiratebubblescheduleforstate-cuttheropedx-gamemain-targetanimationstate}

```csharp
private void UpdatePirateBubbleScheduleForState(TargetAnimationState state)
```

Updates pirate bubble overlay scheduling for a target animation state.

Parameters:

- `state`: Target animation state that was just requested.

### UpdateSleepOverlays(float delta) {#m-cuttheropedx-gamemain-flashxmltargetanimationbackend-updatesleepoverlays-system-single}

```csharp
public void UpdateSleepOverlays(float delta)
```

Updates sleep overlay animations.

Parameters:

- `delta`: Elapsed time in seconds since the last update.


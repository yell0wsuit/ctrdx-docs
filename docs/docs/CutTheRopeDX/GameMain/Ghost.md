---
title: Class Ghost
description: Interactive ghost that can transform between idle, bubble, grab, and bouncer states.
---

# Class Ghost

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Ghost.cs`

Interactive ghost that can transform between idle, bubble, grab, and bouncer states.

## Declaration

```csharp
internal sealed class Ghost : BaseElement, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Ghost](Ghost.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Fields

### GHOST_MORPHING_APPEAR_TIME {#f-cuttheropedx-gamemain-ghost-ghost-morphing-appear-time}

```csharp
private const float GHOST_MORPHING_APPEAR_TIME
```

Duration of the ghost morph-in fade, in seconds.

### GHOST_MORPHING_BUBBLES_COUNT {#f-cuttheropedx-gamemain-ghost-ghost-morphing-bubbles-count}

```csharp
private const int GHOST_MORPHING_BUBBLES_COUNT
```

Number of particles emitted when the ghost morphs.

### GHOST_MORPHING_DISAPPEAR_TIME {#f-cuttheropedx-gamemain-ghost-ghost-morphing-disappear-time}

```csharp
private const float GHOST_MORPHING_DISAPPEAR_TIME
```

Duration of the ghost morph-out fade, in seconds.

### GHOST_TOUCH_RADIUS {#f-cuttheropedx-gamemain-ghost-ghost-touch-radius}

```csharp
private const float GHOST_TOUCH_RADIUS
```

Touch radius used for cycling ghost state.

### bouncer {#f-cuttheropedx-gamemain-ghost-bouncer}

```csharp
public Bouncer bouncer
```

Bouncer object currently owned by the ghost state.

### bouncerAngle {#f-cuttheropedx-gamemain-ghost-bouncerangle}

```csharp
public float bouncerAngle
```

Bouncer angle used when the ghost morphs into a bouncer.

### bubble {#f-cuttheropedx-gamemain-ghost-bubble}

```csharp
public Bubble bubble
```

Bubble object currently owned by the ghost state.

### candyBreak {#f-cuttheropedx-gamemain-ghost-candybreak}

```csharp
public bool candyBreak
```

Whether the candy has broken and should block ghost cycling.

### cyclingEnabled {#f-cuttheropedx-gamemain-ghost-cyclingenabled}

```csharp
public bool cyclingEnabled
```

Whether touch input may cycle this ghost to another state.

### ghostImage {#f-cuttheropedx-gamemain-ghost-ghostimage}

```csharp
public BaseElement ghostImage
```

Root element for the ghost body and face images.

### ghostImageBody {#f-cuttheropedx-gamemain-ghost-ghostimagebody}

```csharp
public Image ghostImageBody
```

Ghost body image.

### ghostImageFace {#f-cuttheropedx-gamemain-ghost-ghostimageface}

```csharp
public Image ghostImageFace
```

Ghost face image.

### ghostState {#f-cuttheropedx-gamemain-ghost-ghoststate}

```csharp
public int ghostState
```

Current ghost state bit.

### grab {#f-cuttheropedx-gamemain-ghost-grab}

```csharp
public Grab grab
```

Grab object currently owned by the ghost state.

### grabRadius {#f-cuttheropedx-gamemain-ghost-grabradius}

```csharp
public float grabRadius
```

Grab radius used when the ghost morphs into a grab.

### gsBouncers {#f-cuttheropedx-gamemain-ghost-gsbouncers}

```csharp
public List<Bouncer> gsBouncers
```

Scene bouncer collection that receives ghost-created bouncers.

### gsBubbles {#f-cuttheropedx-gamemain-ghost-gsbubbles}

```csharp
public List<Bubble> gsBubbles
```

Scene bubble collection that receives ghost-created bubbles.

### gsBungees {#f-cuttheropedx-gamemain-ghost-gsbungees}

```csharp
public List<Grab> gsBungees
```

Scene grab collection that receives ghost-created grabs.

### hostScene {#f-cuttheropedx-gamemain-ghost-hostscene}

```csharp
private GameScene hostScene
```

Owning game scene used for ghost-created rope anchors.

### morphingBubbles {#f-cuttheropedx-gamemain-ghost-morphingbubbles}

```csharp
public GhostMorphingParticles morphingBubbles
```

Particles emitted during ghost morph transitions.

### morphingCloud {#f-cuttheropedx-gamemain-ghost-morphingcloud}

```csharp
public GhostMorphingCloud morphingCloud
```

Cloud effect emitted during ghost morph transitions.

### possibleStatesMask {#f-cuttheropedx-gamemain-ghost-possiblestatesmask}

```csharp
public int possibleStatesMask
```

Bitmask of ghost states this ghost may cycle through.

## Methods

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-ghost-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### InitWithPositionPossibleStatesMaskGrabRadiusBouncerAngleBubblesBungeesBouncers(Vector position, int possibleStateMask, float grabRadius, float bouncerAngle, List&lt;Bubble&gt; bubbles, List&lt;Grab&gt; bungees, List&lt;Bouncer&gt; bouncers, GameScene owner) {#m-cuttheropedx-gamemain-ghost-initwithpositionpossiblestatesmaskgrabradiusbounceranglebubblesbungeesbouncers-cuttheropedx-framework-core-vector-system-int32-system-single-system-single-system-collections-generic-list-cuttheropedx-gamemain-bubble-system-collections-generic-list-cuttheropedx-gamemain-grab-system-collections-generic-list-cuttheropedx-gamemain-bouncer-cuttheropedx-gamemain-gamescene}

```csharp
public Ghost InitWithPositionPossibleStatesMaskGrabRadiusBouncerAngleBubblesBungeesBouncers(Vector position, int possibleStateMask, float grabRadius, float bouncerAngle, List<Bubble> bubbles, List<Grab> bungees, List<Bouncer> bouncers, GameScene owner)
```

Initializes a ghost and its morphing visuals at a level position.

Parameters:

- `position`: World position of the ghost.
- `possibleStateMask`: Bitmask of ghost states that this ghost may cycle through.
- `grabRadius`: Grab radius used when the ghost morphs into a grab.
- `bouncerAngle`: Bouncer angle used when the ghost morphs into a bouncer.
- `bubbles`: Scene bubble collection that receives ghost-created bubbles.
- `bungees`: Scene grab collection that receives ghost-created grabs.
- `bouncers`: Scene bouncer collection that receives ghost-created bouncers.
- `owner`: Owning game scene.

Returns: The initialized ghost.

### OnTouchDownXY(float tx, float ty) {#m-cuttheropedx-gamemain-ghost-ontouchdownxy-system-single-system-single}

```csharp
public override bool OnTouchDownXY(float tx, float ty)
```

Dispatches a touch-down event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### ResetToNextState() {#m-cuttheropedx-gamemain-ghost-resettonextstate}

```csharp
public void ResetToNextState()
```

Cycles the ghost to the next allowed non-idle state.

### ResetToState(int newState) {#m-cuttheropedx-gamemain-ghost-resettostate-system-int32}

```csharp
public void ResetToState(int newState)
```

Morphs the ghost into a specific allowed state.

Parameters:

- `newState`: Ghost state bit to activate.

### TimelineFinished(Timeline timeline) {#m-cuttheropedx-gamemain-ghost-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline timeline)
```

Called when the timeline finishes playback.

### TimelinereachedKeyFramewithIndex(Timeline timeline, KeyFrame keyFrame, int index) {#m-cuttheropedx-gamemain-ghost-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline timeline, KeyFrame keyFrame, int index)
```

Called when the timeline reaches keyframe `k` at index `i`.

### Update(float delta) {#m-cuttheropedx-gamemain-ghost-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


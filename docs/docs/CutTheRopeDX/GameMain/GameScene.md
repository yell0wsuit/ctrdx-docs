---
title: Class GameScene
description: Core gameplay scene that owns the loaded level state, interactive objects, and HUD.
---

# Class GameScene

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `GameScene.Ants.cs`

Core gameplay scene that owns the loaded level state, interactive objects, and HUD.

## Declaration

```csharp
internal sealed class GameScene : BaseElement, ITimelineDelegate, IButtonDelegation, IRocketDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [GameScene](GameScene.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)
- [IButtonDelegation](../Framework/Visual/IButtonDelegation.md)
- [IRocketDelegate](IRocketDelegate.md)

## Constructors

### GameScene() {#m-cuttheropedx-gamemain-gamescene-ctor}

```csharp
public GameScene()
```

Initializes the game scene and the pack background layers.

## Fields

### GameScene.cs

#### BLINK_SKIP {#f-cuttheropedx-gamemain-gamescene-blink-skip}

```csharp
public const int BLINK_SKIP
```

The frame skip interval applied to blink timing.

#### BUBBLE_RADIUS {#f-cuttheropedx-gamemain-gamescene-bubble-radius}

```csharp
public const int BUBBLE_RADIUS
```

The interaction radius used for bubbles.

#### BUTTON_GRAVITY {#f-cuttheropedx-gamemain-gamescene-button-gravity}

```csharp
public const int BUTTON_GRAVITY
```

Button identifier for the gravity toggle.

#### CAMERA_MOVE_TO_CANDY {#f-cuttheropedx-gamemain-gamescene-camera-move-to-candy}

```csharp
public const int CAMERA_MOVE_TO_CANDY
```

Camera mode that tracks the full candy body.

#### CAMERA_MOVE_TO_CANDY_PART {#f-cuttheropedx-gamemain-gamescene-camera-move-to-candy-part}

```csharp
public const int CAMERA_MOVE_TO_CANDY_PART
```

Camera mode that tracks a split candy half.

#### CAMERA_SPEED {#f-cuttheropedx-gamemain-gamescene-camera-speed}

```csharp
public const int CAMERA_SPEED
```

The default camera follow speed.

#### CANDY_BLINK_INITIAL {#f-cuttheropedx-gamemain-gamescene-candy-blink-initial}

```csharp
public const int CANDY_BLINK_INITIAL
```

Initial state for the candy blink sequence.

#### CANDY_BLINK_STAR {#f-cuttheropedx-gamemain-gamescene-candy-blink-star}

```csharp
public const int CANDY_BLINK_STAR
```

State for blinking the candy star highlight.

#### DIM_TIMEOUT {#f-cuttheropedx-gamemain-gamescene-dim-timeout}

```csharp
public const float DIM_TIMEOUT
```

The delay before the restart dim animation advances.

#### EARTH_NORMAL_ANIM {#f-cuttheropedx-gamemain-gamescene-earth-normal-anim}

```csharp
public const int EARTH_NORMAL_ANIM
```

Animation index for the normal earth state.

#### EARTH_UPSIDEDOWN_ANIM {#f-cuttheropedx-gamemain-gamescene-earth-upsidedown-anim}

```csharp
public const int EARTH_UPSIDEDOWN_ANIM
```

Animation index for the inverted earth state.

#### GRAB_MOVE_RADIUS {#f-cuttheropedx-gamemain-gamescene-grab-move-radius}

```csharp
public const int GRAB_MOVE_RADIUS
```

The movement radius used for grab interactions.

#### MAX_LOST_CANDIES {#f-cuttheropedx-gamemain-gamescene-max-lost-candies}

```csharp
public const int MAX_LOST_CANDIES
```

The maximum number of candy losses allowed before game over handling changes.

#### MAX_TOUCHES {#f-cuttheropedx-gamemain-gamescene-max-touches}

```csharp
public const int MAX_TOUCHES
```

The maximum number of concurrent touches tracked by the scene.

#### MOUTH_OPEN_RADIUS {#f-cuttheropedx-gamemain-gamescene-mouth-open-radius}

```csharp
public const float MOUTH_OPEN_RADIUS
```

The radius around Om Nom that triggers mouth-open behavior.

#### MOUTH_OPEN_TIME {#f-cuttheropedx-gamemain-gamescene-mouth-open-time}

```csharp
public const float MOUTH_OPEN_TIME
```

The duration to keep the mouth-open state active.

#### NightConstraintRelaxationSteps {#f-cuttheropedx-gamemain-gamescene-nightconstraintrelaxationsteps}

```csharp
private const int NightConstraintRelaxationSteps
```

The number of physics relaxation steps used for night levels.

#### NightSleepSoundInterval {#f-cuttheropedx-gamemain-gamescene-nightsleepsoundinterval}

```csharp
private const float NightSleepSoundInterval
```

The interval between looping night sleep sounds.

#### PARTS_DIST {#f-cuttheropedx-gamemain-gamescene-parts-dist}

```csharp
public const int PARTS_DIST
```

Split-candy mode where the part distance is animated.

#### PARTS_NONE {#f-cuttheropedx-gamemain-gamescene-parts-none}

```csharp
public const int PARTS_NONE
```

Split-candy mode where no extra part behavior is active.

#### PARTS_SEPARATE {#f-cuttheropedx-gamemain-gamescene-parts-separate}

```csharp
public const int PARTS_SEPARATE
```

Split-candy mode where both candy parts move independently.

#### PUMP_TIMEOUT {#f-cuttheropedx-gamemain-gamescene-pump-timeout}

```csharp
public const float PUMP_TIMEOUT
```

The minimum delay between pump activations.

#### RC_CONTROLLER_RADIUS {#f-cuttheropedx-gamemain-gamescene-rc-controller-radius}

```csharp
public const int RC_CONTROLLER_RADIUS
```

The interaction radius for remote-control objects.

#### RESTART_STATE_FADE_IN {#f-cuttheropedx-gamemain-gamescene-restart-state-fade-in}

```csharp
public const int RESTART_STATE_FADE_IN
```

Restart state value for fading the dim overlay in.

#### RESTART_STATE_FADE_OUT {#f-cuttheropedx-gamemain-gamescene-restart-state-fade-out}

```csharp
public const int RESTART_STATE_FADE_OUT
```

Restart state value for fading the dim overlay out.

#### ROPE_CUT_AT_ONCE_TIMEOUT {#f-cuttheropedx-gamemain-gamescene-rope-cut-at-once-timeout}

```csharp
public const float ROPE_CUT_AT_ONCE_TIMEOUT
```

The time window for counting multiple ropes cut at once.

#### SCOMBO_TIMEOUT {#f-cuttheropedx-gamemain-gamescene-scombo-timeout}

```csharp
public const float SCOMBO_TIMEOUT
```

The timeout window for combo rope cuts.

#### SCUT_SCORE {#f-cuttheropedx-gamemain-gamescene-scut-score}

```csharp
public const int SCUT_SCORE
```

The score awarded for a rope cut.

#### SOCK_COLLISION_Y_OFFSET {#f-cuttheropedx-gamemain-gamescene-sock-collision-y-offset}

```csharp
public const int SOCK_COLLISION_Y_OFFSET
```

The vertical offset used when testing sock collisions.

#### SOCK_SPEED_K {#f-cuttheropedx-gamemain-gamescene-sock-speed-k}

```csharp
public const float SOCK_SPEED_K
```

The speed multiplier applied to moving socks.

#### STAR_RADIUS {#f-cuttheropedx-gamemain-gamescene-star-radius}

```csharp
public const int STAR_RADIUS
```

The pickup radius used for stars.

#### S_MOVE_DOWN {#f-cuttheropedx-gamemain-gamescene-s-move-down}

```csharp
public const int S_MOVE_DOWN
```

Selector state for moving an element downward.

#### S_MOVE_UP {#f-cuttheropedx-gamemain-gamescene-s-move-up}

```csharp
public const int S_MOVE_UP
```

Selector state for moving an element upward.

#### S_WAIT {#f-cuttheropedx-gamemain-gamescene-s-wait}

```csharp
public const int S_WAIT
```

Selector state for waiting between movements.

#### SleepPulsePivotYRatio {#f-cuttheropedx-gamemain-gamescene-sleeppulsepivotyratio}

```csharp
private const float SleepPulsePivotYRatio
```

The target-relative Y pivot ratio used by the night sleep pulse overlay.

#### TUTORIAL_HIDE_ANIM {#f-cuttheropedx-gamemain-gamescene-tutorial-hide-anim}

```csharp
public const int TUTORIAL_HIDE_ANIM
```

Tutorial animation state for hiding the prompt.

#### TUTORIAL_SHOW_ANIM {#f-cuttheropedx-gamemain-gamescene-tutorial-show-anim}

```csharp
public const int TUTORIAL_SHOW_ANIM
```

Tutorial animation state for showing the prompt.

#### WHEEL_RADIUS {#f-cuttheropedx-gamemain-gamescene-wheel-radius}

```csharp
public const int WHEEL_RADIUS
```

The interaction radius used for wheel objects.

#### activeRocket {#f-cuttheropedx-gamemain-gamescene-activerocket}

```csharp
private Rocket activeRocket
```

The rocket currently carrying the candy anchor, if any.

#### aniPool {#f-cuttheropedx-gamemain-gamescene-anipool}

```csharp
private readonly AnimationsPool aniPool
```

Animation pool for gameplay objects.

#### animateRestartDim {#f-cuttheropedx-gamemain-gamescene-animaterestartdim}

```csharp
public bool animateRestartDim
```

Whether restart should animate through the dim overlay.

#### antsPathSegmentCooldown {#f-cuttheropedx-gamemain-gamescene-antspathsegmentcooldown}

```csharp
private float antsPathSegmentCooldown
```

Cooldown before the candy can reattach to another ant segment.

#### antsPathSegmentWithCandy {#f-cuttheropedx-gamemain-gamescene-antspathsegmentwithcandy}

```csharp
private AntsPathSegment antsPathSegmentWithCandy
```

The ant path segment currently carrying the candy.

#### antsPaths {#f-cuttheropedx-gamemain-gamescene-antspaths}

```csharp
private List<AntsPath> antsPaths
```

All ant paths in the current level.

#### antsPathsSegments {#f-cuttheropedx-gamemain-gamescene-antspathssegments}

```csharp
private List<AntsPathSegment> antsPathsSegments
```

All ant path segments in the current level.

#### back {#f-cuttheropedx-gamemain-gamescene-back}

```csharp
private TileMap back
```

Primary background tile map.

#### backTexture {#f-cuttheropedx-gamemain-gamescene-backtexture}

```csharp
private readonly CTRTexture2D backTexture
```

Primary background texture used for computing scale.

#### backgroundScale {#f-cuttheropedx-gamemain-gamescene-backgroundscale}

```csharp
private float backgroundScale
```

Cached background scale derived from internal screen width.

#### bambooTubes {#f-cuttheropedx-gamemain-gamescene-bambootubes}

```csharp
private List<BambooTube> bambooTubes
```

All active bamboo tube objects in the loaded level.

#### blinkTimer {#f-cuttheropedx-gamemain-gamescene-blinktimer}

```csharp
private int blinkTimer
```

Frame counter used for blink timing.

#### bouncers {#f-cuttheropedx-gamemain-gamescene-bouncers}

```csharp
private List<Bouncer> bouncers
```

All active bouncer objects in the loaded level.

#### bubbles {#f-cuttheropedx-gamemain-gamescene-bubbles}

```csharp
private List<Bubble> bubbles
```

All active bubble objects in the loaded level.

#### bungees {#f-cuttheropedx-gamemain-gamescene-bungees}

```csharp
private List<Grab> bungees
```

All active grab/bungee objects in the loaded level.

#### camera {#f-cuttheropedx-gamemain-gamescene-camera}

```csharp
private Camera2D camera
```

The gameplay camera.

#### cameraMoveMode {#f-cuttheropedx-gamemain-gamescene-cameramovemode}

```csharp
public int cameraMoveMode
```

The current camera follow mode.

#### candy {#f-cuttheropedx-gamemain-gamescene-candy}

```csharp
private GameObject candy
```

The main candy gameplay object.

#### candyBlink {#f-cuttheropedx-gamemain-gamescene-candyblink}

```csharp
private Animation candyBlink
```

Animation used for the candy blink effect.

#### candyBubble {#f-cuttheropedx-gamemain-gamescene-candybubble}

```csharp
private GameObject candyBubble
```

The main candy bubble gameplay object.

#### candyBubbleAnimation {#f-cuttheropedx-gamemain-gamescene-candybubbleanimation}

```csharp
private Animation candyBubbleAnimation
```

Animation used for the main candy bubble effect.

#### candyBubbleAnimationL {#f-cuttheropedx-gamemain-gamescene-candybubbleanimationl}

```csharp
private Animation candyBubbleAnimationL
```

Animation used for the left split candy bubble effect.

#### candyBubbleAnimationR {#f-cuttheropedx-gamemain-gamescene-candybubbleanimationr}

```csharp
private Animation candyBubbleAnimationR
```

Animation used for the right split candy bubble effect.

#### candyBubbleL {#f-cuttheropedx-gamemain-gamescene-candybubblel}

```csharp
private GameObject candyBubbleL
```

The left split candy bubble gameplay object.

#### candyBubbleR {#f-cuttheropedx-gamemain-gamescene-candybubbler}

```csharp
private GameObject candyBubbleR
```

The right split candy bubble gameplay object.

#### candyGhostBubbleAnimation {#f-cuttheropedx-gamemain-gamescene-candyghostbubbleanimation}

```csharp
private CandyInGhostBubbleAnimation candyGhostBubbleAnimation
```

Ghost bubble animation for the main candy.

#### candyGhostBubbleAnimationL {#f-cuttheropedx-gamemain-gamescene-candyghostbubbleanimationl}

```csharp
private CandyInGhostBubbleAnimation candyGhostBubbleAnimationL
```

Ghost bubble animation for the left candy half.

#### candyGhostBubbleAnimationR {#f-cuttheropedx-gamemain-gamescene-candyghostbubbleanimationr}

```csharp
private CandyInGhostBubbleAnimation candyGhostBubbleAnimationR
```

Ghost bubble animation for the right candy half.

#### candyL {#f-cuttheropedx-gamemain-gamescene-candyl}

```csharp
private GameObject candyL
```

The left candy half when split mode is active.

#### candyMain {#f-cuttheropedx-gamemain-gamescene-candymain}

```csharp
private GameObject candyMain
```

The base candy sprite for split or layered visuals.

#### candyR {#f-cuttheropedx-gamemain-gamescene-candyr}

```csharp
private GameObject candyR
```

The right candy half when split mode is active.

#### candyTop {#f-cuttheropedx-gamemain-gamescene-candytop}

```csharp
private GameObject candyTop
```

The top candy sprite for split or layered visuals.

#### candyWaitForFlyBeforeAttachingToConveyor {#f-cuttheropedx-gamemain-gamescene-candywaitforflybeforeattachingtoconveyor}

```csharp
private bool candyWaitForFlyBeforeAttachingToConveyor
```

Whether conveyor attachment is deferred until the candy finishes flying.

#### clickToCut {#f-cuttheropedx-gamemain-gamescene-clicktocut}

```csharp
private readonly bool clickToCut
```

Whether click-to-cut input mode is enabled.

#### conveyors {#f-cuttheropedx-gamemain-gamescene-conveyors}

```csharp
private ConveyorBeltObject conveyors
```

Manager for conveyor belt interactions.

#### dd {#f-cuttheropedx-gamemain-gamescene-dd}

```csharp
private DelayedDispatcher dd
```

Dispatcher used for delayed selector callbacks.

#### decalsLayer {#f-cuttheropedx-gamemain-gamescene-decalslayer}

```csharp
private readonly BaseElement decalsLayer
```

Layer containing decals and other overlay visuals.

#### dimTime {#f-cuttheropedx-gamemain-gamescene-dimtime}

```csharp
public float dimTime
```

The current dim animation timer.

#### dragging {#f-cuttheropedx-gamemain-gamescene-dragging}

```csharp
private readonly bool[] dragging
```

Per-touch flags indicating which touches are currently dragging.

#### earthAnims {#f-cuttheropedx-gamemain-gamescene-earthanims}

```csharp
public List<Image> earthAnims
```

Earth animation images used by gravity-switch levels.

#### fastenCamera {#f-cuttheropedx-gamemain-gamescene-fastencamera}

```csharp
private bool fastenCamera
```

Whether the camera should remain locked to its current target.

#### fingerCuts {#f-cuttheropedx-gamemain-gamescene-fingercuts}

```csharp
public List<GameScene.FingerCut>[] fingerCuts
```

Per-touch finger cut ribbons used for cut visualization.

#### fingerTraceDownPos {#f-cuttheropedx-gamemain-gamescene-fingertracedownpos}

```csharp
private readonly Vector[] fingerTraceDownPos
```

Touch-down positions used by the finger trace system.

#### fingerTraceDragging {#f-cuttheropedx-gamemain-gamescene-fingertracedragging}

```csharp
private readonly bool[] fingerTraceDragging
```

Whether each touch is actively driving a finger trace drag.

#### fingerTraces {#f-cuttheropedx-gamemain-gamescene-fingertraces}

```csharp
public FingerTrace[] fingerTraces
```

Per-touch finger trace effects.

#### freezeCamera {#f-cuttheropedx-gamemain-gamescene-freezecamera}

```csharp
public bool freezeCamera
```

Whether camera motion is temporarily frozen.

#### gameLostTriggered {#f-cuttheropedx-gamemain-gamescene-gamelosttriggered}

```csharp
public bool gameLostTriggered
```

Whether the game-lost state has already been triggered.

#### gameSceneDelegate {#f-cuttheropedx-gamemain-gamescene-gamescenedelegate}

```csharp
public IGameSceneDelegate gameSceneDelegate
```

Delegate notified when the scene reaches win or loss conditions.

#### ghosts {#f-cuttheropedx-gamemain-gamescene-ghosts}

```csharp
private List<Ghost> ghosts
```

All active ghost objects in the loaded level.

#### gravityButton {#f-cuttheropedx-gamemain-gamescene-gravitybutton}

```csharp
public ToggleButton gravityButton
```

The UI button that toggles gravity orientation.

#### gravityNormal {#f-cuttheropedx-gamemain-gamescene-gravitynormal}

```csharp
public bool gravityNormal
```

Whether gravity is currently in the normal orientation.

#### gravityTouchDown {#f-cuttheropedx-gamemain-gamescene-gravitytouchdown}

```csharp
public int gravityTouchDown
```

The touch index currently holding the gravity button, or an invalid marker.

#### hands {#f-cuttheropedx-gamemain-gamescene-hands}

```csharp
private List<MechanicalHand> hands
```

All active mechanical hand objects in the loaded level.

#### hudStar {#f-cuttheropedx-gamemain-gamescene-hudstar}

```csharp
private readonly Animation[] hudStar
```

The HUD star animations that show collected stars.

#### idlesTimer {#f-cuttheropedx-gamemain-gamescene-idlestimer}

```csharp
private int idlesTimer
```

Frame counter used for idle animation timing.

#### ignoreTouches {#f-cuttheropedx-gamemain-gamescene-ignoretouches}

```csharp
public bool ignoreTouches
```

Whether touch input is temporarily ignored.

#### initialCameraToStarDistance {#f-cuttheropedx-gamemain-gamescene-initialcameratostardistance}

```csharp
public float initialCameraToStarDistance
```

The initial camera distance to the candy anchor.

#### isCandyInGhostBubbleAnimationLeftLoaded {#f-cuttheropedx-gamemain-gamescene-iscandyinghostbubbleanimationleftloaded}

```csharp
private bool isCandyInGhostBubbleAnimationLeftLoaded
```

Whether the left ghost bubble animation has been loaded.

#### isCandyInGhostBubbleAnimationLoaded {#f-cuttheropedx-gamemain-gamescene-iscandyinghostbubbleanimationloaded}

```csharp
private bool isCandyInGhostBubbleAnimationLoaded
```

Whether the main ghost bubble animation has been loaded.

#### isCandyInGhostBubbleAnimationRightLoaded {#f-cuttheropedx-gamemain-gamescene-iscandyinghostbubbleanimationrightloaded}

```csharp
private bool isCandyInGhostBubbleAnimationRightLoaded
```

Whether the right ghost bubble animation has been loaded.

#### isCandyInLantern {#f-cuttheropedx-gamemain-gamescene-iscandyinlantern}

```csharp
private bool isCandyInLantern
```

Whether the candy is currently hidden inside a lantern.

#### isNightTargetAwake {#f-cuttheropedx-gamemain-gamescene-isnighttargetawake}

```csharp
private bool? isNightTargetAwake
```

Cached awake state for night-level Om Nom overlays.

#### lastAntsPathSegmentWithCandy {#f-cuttheropedx-gamemain-gamescene-lastantspathsegmentwithcandy}

```csharp
private AntsPathSegment lastAntsPathSegmentWithCandy
```

The previous ant path segment that carried the candy.

#### lastCandyRotateDelta {#f-cuttheropedx-gamemain-gamescene-lastcandyrotatedelta}

```csharp
private float lastCandyRotateDelta
```

Cached rotation delta for the main candy.

#### lastCandyRotateDeltaL {#f-cuttheropedx-gamemain-gamescene-lastcandyrotatedeltal}

```csharp
private float lastCandyRotateDeltaL
```

Cached rotation delta for the left candy half.

#### lastCandyRotateDeltaR {#f-cuttheropedx-gamemain-gamescene-lastcandyrotatedeltar}

```csharp
private float lastCandyRotateDeltaR
```

Cached rotation delta for the right candy half.

#### lightBulbs {#f-cuttheropedx-gamemain-gamescene-lightbulbs}

```csharp
private List<LightBulb> lightBulbs
```

All active light bulb objects in the loaded level.

#### mapHeight {#f-cuttheropedx-gamemain-gamescene-mapheight}

```csharp
private float mapHeight
```

The height of the loaded map in world units.

#### mapOriginX {#f-cuttheropedx-gamemain-gamescene-maporiginx}

```csharp
private float mapOriginX
```

The X origin of the loaded map.

#### mapOriginY {#f-cuttheropedx-gamemain-gamescene-maporiginy}

```csharp
private float mapOriginY
```

The Y origin of the loaded map.

#### mapWidth {#f-cuttheropedx-gamemain-gamescene-mapwidth}

```csharp
private float mapWidth
```

The width of the loaded map in world units.

#### mice {#f-cuttheropedx-gamemain-gamescene-mice}

```csharp
private List<Mouse> mice
```

All active mouse objects in the loaded level.

#### miceManager {#f-cuttheropedx-gamemain-gamescene-micemanager}

```csharp
private MiceObject miceManager
```

Manager for composite mouse interactions.

#### mouthCloseTimer {#f-cuttheropedx-gamemain-gamescene-mouthclosetimer}

```csharp
private float mouthCloseTimer
```

Remaining time before the mouth closes.

#### mouthOpen {#f-cuttheropedx-gamemain-gamescene-mouthopen}

```csharp
private bool mouthOpen
```

Whether Om Nom's mouth is currently open.

#### nightLevel {#f-cuttheropedx-gamemain-gamescene-nightlevel}

```csharp
public bool nightLevel
```

Whether the loaded level uses night-specific behavior.

#### nightSleepOverlayVisible {#f-cuttheropedx-gamemain-gamescene-nightsleepoverlayvisible}

```csharp
private bool nightSleepOverlayVisible
```

Whether the night sleep overlay is currently visible.

#### noCandy {#f-cuttheropedx-gamemain-gamescene-nocandy}

```csharp
private bool noCandy
```

Whether the main candy has been removed from play.

#### noCandyL {#f-cuttheropedx-gamemain-gamescene-nocandyl}

```csharp
public bool noCandyL
```

Whether the left candy half has been removed from play.

#### noCandyR {#f-cuttheropedx-gamemain-gamescene-nocandyr}

```csharp
public bool noCandyR
```

Whether the right candy half has been removed from play.

#### particlesAniPool {#f-cuttheropedx-gamemain-gamescene-particlesanipool}

```csharp
private readonly AnimationsPool particlesAniPool
```

Animation pool for particle effects.

#### partsDist {#f-cuttheropedx-gamemain-gamescene-partsdist}

```csharp
public float partsDist
```

The current distance between split candy parts.

#### pollenDrawer {#f-cuttheropedx-gamemain-gamescene-pollendrawer}

```csharp
private PollenDrawer pollenDrawer
```

Pollen particle renderer used by applicable levels.

#### prevStartPos {#f-cuttheropedx-gamemain-gamescene-prevstartpos}

```csharp
private readonly Vector[] prevStartPos
```

Previous starting positions for active touches.

#### pumps {#f-cuttheropedx-gamemain-gamescene-pumps}

```csharp
private List<Pump> pumps
```

All active pump objects in the loaded level.

#### razors {#f-cuttheropedx-gamemain-gamescene-razors}

```csharp
private List<Razor> razors
```

All active razor objects in the loaded level.

#### restartState {#f-cuttheropedx-gamemain-gamescene-restartstate}

```csharp
public int restartState
```

The current restart animation state.

#### rockets {#f-cuttheropedx-gamemain-gamescene-rockets}

```csharp
private List<Rocket> rockets
```

All active rocket objects in the loaded level.

#### ropeAtOnceTimer {#f-cuttheropedx-gamemain-gamescene-ropeatoncetimer}

```csharp
private float ropeAtOnceTimer
```

Remaining time in the active rope-cut combo window.

#### ropePhysicsSpeed {#f-cuttheropedx-gamemain-gamescene-ropephysicsspeed}

```csharp
private float ropePhysicsSpeed
```

Current rope physics time scale.

#### ropesCutAtOnce {#f-cuttheropedx-gamemain-gamescene-ropescutatonce}

```csharp
private int ropesCutAtOnce
```

The number of ropes cut within the active combo window.

#### rotatedCircles {#f-cuttheropedx-gamemain-gamescene-rotatedcircles}

```csharp
private List<RotatedCircle> rotatedCircles
```

All active rotated circle objects in the loaded level.

#### savedSockSpeed {#f-cuttheropedx-gamemain-gamescene-savedsockspeed}

```csharp
private float savedSockSpeed
```

Cached sock speed used while overriding movement.

#### score {#f-cuttheropedx-gamemain-gamescene-score}

```csharp
public int score
```

The current total score.

#### shouldRestoreSecondGhost {#f-cuttheropedx-gamemain-gamescene-shouldrestoresecondghost}

```csharp
private bool shouldRestoreSecondGhost
```

Whether the second ghost should be restored after a transition.

#### slastTouch {#f-cuttheropedx-gamemain-gamescene-slasttouch}

```csharp
public Vector slastTouch
```

The last recorded touch position for scene-level gestures.

#### sleepPulseActive {#f-cuttheropedx-gamemain-gamescene-sleeppulseactive}

```csharp
private bool sleepPulseActive
```

Whether the night sleep pulse overlay is active.

#### sleepPulseBaseY {#f-cuttheropedx-gamemain-gamescene-sleeppulsebasey}

```csharp
private float sleepPulseBaseY
```

Base Y position used by the sleep pulse overlay.

#### sleepPulseDelay {#f-cuttheropedx-gamemain-gamescene-sleeppulsedelay}

```csharp
private float sleepPulseDelay
```

Delay remaining before the next sleep pulse starts.

#### sleepPulseTime {#f-cuttheropedx-gamemain-gamescene-sleeppulsetime}

```csharp
private float sleepPulseTime
```

Elapsed time within the current sleep pulse.

#### sleepSoundTimer {#f-cuttheropedx-gamemain-gamescene-sleepsoundtimer}

```csharp
private float sleepSoundTimer
```

Accumulator used to time repeated night sleep sounds.

#### snailobjects {#f-cuttheropedx-gamemain-gamescene-snailobjects}

```csharp
private List<Snail> snailobjects
```

All active snail objects in the loaded level.

#### socks {#f-cuttheropedx-gamemain-gamescene-socks}

```csharp
private List<Sock> socks
```

All active sock objects in the loaded level.

#### special {#f-cuttheropedx-gamemain-gamescene-special}

```csharp
private int special
```

Special-case level behavior flag.

#### spikes {#f-cuttheropedx-gamemain-gamescene-spikes}

```csharp
private List<Spikes> spikes
```

All active spike objects in the loaded level.

#### splashes {#f-cuttheropedx-gamemain-gamescene-splashes}

```csharp
private bool splashes
```

Whether splash effects are currently enabled.

#### star {#f-cuttheropedx-gamemain-gamescene-star}

```csharp
private ConstraintedPoint star
```

The constrained point currently representing the candy anchor.

#### starBonus {#f-cuttheropedx-gamemain-gamescene-starbonus}

```csharp
public int starBonus
```

The score bonus awarded from collected stars.

#### starL {#f-cuttheropedx-gamemain-gamescene-starl}

```csharp
private ConstraintedPoint starL
```

The left constrained point when split mode is active.

#### starR {#f-cuttheropedx-gamemain-gamescene-starr}

```csharp
private ConstraintedPoint starR
```

The right constrained point when split mode is active.

#### stars {#f-cuttheropedx-gamemain-gamescene-stars}

```csharp
private List<Star> stars
```

All collectible stars in the loaded level.

#### starsCollected {#f-cuttheropedx-gamemain-gamescene-starscollected}

```csharp
public int starsCollected
```

The number of stars collected in the level.

#### startPos {#f-cuttheropedx-gamemain-gamescene-startpos}

```csharp
private readonly Vector[] startPos
```

Starting positions for active touches.

#### staticAniPool {#f-cuttheropedx-gamemain-gamescene-staticanipool}

```csharp
private readonly AnimationsPool staticAniPool
```

Animation pool for static HUD and decoration objects.

#### support {#f-cuttheropedx-gamemain-gamescene-support}

```csharp
private Image support
```

Support visual attached to certain level setups.

#### targetAnimationController {#f-cuttheropedx-gamemain-gamescene-targetanimationcontroller}

```csharp
private TargetAnimationController targetAnimationController
```

Controller for Om Nom animation state transitions.

#### targetBambooTube {#f-cuttheropedx-gamemain-gamescene-targetbambootube}

```csharp
private BambooTube targetBambooTube
```

The bamboo tube currently interacting with the candy.

#### targetBaseScaleX {#f-cuttheropedx-gamemain-gamescene-targetbasescalex}

```csharp
private float targetBaseScaleX
```

The default horizontal scale applied to the Om Nom target.

#### targetBaseScaleY {#f-cuttheropedx-gamemain-gamescene-targetbasescaley}

```csharp
private float targetBaseScaleY
```

The default vertical scale applied to the Om Nom target.

#### targetObject {#f-cuttheropedx-gamemain-gamescene-targetobject}

```csharp
private GameObject targetObject
```

The active Om Nom gameplay object.

#### targetSock {#f-cuttheropedx-gamemain-gamescene-targetsock}

```csharp
private Sock targetSock
```

The sock currently interacting with the candy.

#### time {#f-cuttheropedx-gamemain-gamescene-time}

```csharp
public float time
```

The elapsed level time.

#### timeBonus {#f-cuttheropedx-gamemain-gamescene-timebonus}

```csharp
public int timeBonus
```

The score bonus awarded from remaining time.

#### tubes {#f-cuttheropedx-gamemain-gamescene-tubes}

```csharp
private List<SteamTube> tubes
```

All active steam tube objects in the loaded level.

#### tummyTeasers {#f-cuttheropedx-gamemain-gamescene-tummyteasers}

```csharp
public int tummyTeasers
```

Count of tummy teaser interactions completed in the scene.

#### tutorialImages {#f-cuttheropedx-gamemain-gamescene-tutorialimages}

```csharp
private List<CTRGameObject> tutorialImages
```

All tutorial image objects attached to the scene.

#### tutorials {#f-cuttheropedx-gamemain-gamescene-tutorials}

```csharp
private List<Text> tutorials
```

All tutorial text labels attached to the scene.

#### twoParts {#f-cuttheropedx-gamemain-gamescene-twoparts}

```csharp
public int twoParts
```

The current split-candy state.

#### underwater {#f-cuttheropedx-gamemain-gamescene-underwater}

```csharp
private bool underwater
```

Whether the scene is currently underwater.

#### waterLayer {#f-cuttheropedx-gamemain-gamescene-waterlayer}

```csharp
private WaterElement waterLayer
```

Water simulation layer for underwater levels.

#### waterLevel {#f-cuttheropedx-gamemain-gamescene-waterlevel}

```csharp
private float waterLevel
```

Current water surface height.

#### waterSpeed {#f-cuttheropedx-gamemain-gamescene-waterspeed}

```csharp
private float waterSpeed
```

Current water movement speed.


### LoadSocks.cs

#### XmasSock {#f-cuttheropedx-gamemain-gamescene-xmassock}

```csharp
private Sock XmasSock
```

Christmas magic sock.


## Methods

### GameScene.Ants.cs

#### ApplyAntCarryToCandyPosition() {#m-cuttheropedx-gamemain-gamescene-applyantcarrytocandyposition}

```csharp
private void ApplyAntCarryToCandyPosition()
```

Overwrites the candy's world position with the carrier follow position computed by [ComputeCarrierFollowPosition](AntConveyorLogic.md#m-cuttheropedx-gamemain-antconveyorlogic-computecarrierfollowposition-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-single-system-single). No-op if no segment is currently carrying the candy.

#### BlockConveyor() {#m-cuttheropedx-gamemain-gamescene-blockconveyor}

```csharp
private void BlockConveyor()
```

Prevents all segments from attaching to the candy. Used during certain game-state transitions.

#### GetAntConveyorScale() {#m-cuttheropedx-gamemain-gamescene-getantconveyorscale}

```csharp
private static float GetAntConveyorScale()
```

Returns the scale factor for ant-conveyor sizing. Always 1 on PC.

Returns: The device scale multiplier.

#### HandleConveyorTouchConstraintedPointXY(ConstraintedPoint point, float tx, float ty) {#m-cuttheropedx-gamemain-gamescene-handleconveyortouchconstraintedpointxy-cuttheropedx-framework-physics-constraintedpoint-system-single-system-single}

```csharp
private bool HandleConveyorTouchConstraintedPointXY(ConstraintedPoint point, float tx, float ty)
```

Handles a touch event on the candy while it is being carried by the conveyor. If the touch lands inside the carrier touch zone the candy is detached and released to physics.

Parameters:

- `point`: The candy's constraint point.
- `tx`: Touch X coordinate in screen space.
- `ty`: Touch Y coordinate in screen space.

Returns: `true` if the touch was consumed; otherwise, `false`.

#### PlayAntConveyorAttachSound() {#m-cuttheropedx-gamemain-gamescene-playantconveyorattachsound}

```csharp
private static void PlayAntConveyorAttachSound()
```

Plays the sound effect for the candy attaching to the ant conveyor.

#### PlayAntConveyorDetachSound() {#m-cuttheropedx-gamemain-gamescene-playantconveyordetachsound}

```csharp
private static void PlayAntConveyorDetachSound()
```

Plays the sound effect for the candy detaching from the ant conveyor.

#### ResetConveyor() {#m-cuttheropedx-gamemain-gamescene-resetconveyor}

```csharp
private void ResetConveyor()
```

Immediately detaches the candy from any active segment and restores all segments to the interactable state. Used when the level resets.

#### TryStartAntInteraction(AntsPathSegment segment, bool useExternalBounds) {#m-cuttheropedx-gamemain-gamescene-trystartantinteraction-cuttheropedx-gamemain-antspathsegment-system-boolean}

```csharp
private bool TryStartAntInteraction(AntsPathSegment segment, bool useExternalBounds)
```

Attempts to attach the candy to `segment`. Returns `true` and starts the interaction if all preconditions pass: the segment is idle and interactable, the candy is not in the wait-before-attach state, and the candy lies inside the segment's bounding rectangle.

Parameters:

- `segment`: The segment to test.
- `useExternalBounds`: Whether to use the wider external bounding rectangle.

Returns: `true` if the candy was attached to the segment; otherwise, `false`.

#### UnblockConveyor() {#m-cuttheropedx-gamemain-gamescene-unblockconveyor}

```csharp
private void UnblockConveyor()
```

Re-enables all segments to attach to the candy after a [BlockConveyor](#m-cuttheropedx-gamemain-gamescene-blockconveyor) call.

#### UpdateAntConveyor(float delta) {#m-cuttheropedx-gamemain-gamescene-updateantconveyor-system-single}

```csharp
private void UpdateAntConveyor(float delta)
```

Per-frame driver for the ant-conveyor system. Updates all paths, manages the wait-before-attach flag, drains the segment cooldown, handles detach when the candy leaves a segment's internal rectangle, and runs the priority search for a new segment to carry the candy.

Parameters:

- `delta`: Elapsed time in seconds since the last frame.

#### UpdateRopeWithAntCarryOverride(Bungee rope, float delta) {#m-cuttheropedx-gamemain-gamescene-updateropewithantcarryoverride-cuttheropedx-gamemain-bungee-system-single}

```csharp
private void UpdateRopeWithAntCarryOverride(Bungee rope, float delta)
```

Calls [Update](Bungee.md#m-cuttheropedx-gamemain-bungee-update-system-single) for `rope` while preventing rope tension from displacing the candy when it is being carried by the ant conveyor. The candy position is locked before the rope physics step and restored afterward.

Parameters:

- `rope`: The bungee rope to update.
- `delta`: Elapsed time in seconds since the last frame.


### GameScene.BoundingBoxes.cs

#### GetBubbleBoundingBox() {#m-cuttheropedx-gamemain-gamescene-getbubbleboundingbox}

```csharp
internal static CTRRectangle GetBubbleBoundingBox()
```

Returns the bounding box for the bubble.

Returns: The bubble bounding box.

#### GetCandyBoundingBox() {#m-cuttheropedx-gamemain-gamescene-getcandyboundingbox}

```csharp
private static CTRRectangle GetCandyBoundingBox()
```

Returns the bounding box for the candy.

Returns: The candy bounding box.

#### GetPumpBoundingBox() {#m-cuttheropedx-gamemain-gamescene-getpumpboundingbox}

```csharp
private static CTRRectangle GetPumpBoundingBox()
```

Returns the bounding box for the air pump.

Returns: The pump bounding box.

#### GetSnailBoundingBox() {#m-cuttheropedx-gamemain-gamescene-getsnailboundingbox}

```csharp
internal static CTRRectangle GetSnailBoundingBox()
```

Returns the bounding box for the snail.

Returns: The snail bounding box.

#### GetSplitCandyBoundingBox() {#m-cuttheropedx-gamemain-gamescene-getsplitcandyboundingbox}

```csharp
private static CTRRectangle GetSplitCandyBoundingBox()
```

Returns the bounding box for the split candy (after being cut in half).

Returns: The split candy bounding box.

#### GetStarBoundingBox() {#m-cuttheropedx-gamemain-gamescene-getstarboundingbox}

```csharp
private static CTRRectangle GetStarBoundingBox()
```

Returns the bounding box for a collectible star.

Returns: The star bounding box.

#### SelectPhysicsBoundingBox(float desktopX, float desktopY, float desktopWidth, float desktopHeight, float phoneX, float phoneY, float phoneWidth, float phoneHeight) {#m-cuttheropedx-gamemain-gamescene-selectphysicsboundingbox-system-single-system-single-system-single-system-single-system-single-system-single-system-single-system-single}

```csharp
private static CTRRectangle SelectPhysicsBoundingBox(float desktopX, float desktopY, float desktopWidth, float desktopHeight, float phoneX, float phoneY, float phoneWidth, float phoneHeight)
```

Selects a bounding box from desktop or phone dimensions depending on the active physics model.

Parameters:

- `desktopX`: Desktop bounding box X offset.
- `desktopY`: Desktop bounding box Y offset.
- `desktopWidth`: Desktop bounding box width.
- `desktopHeight`: Desktop bounding box height.
- `phoneX`: Phone bounding box X offset (pre-scale).
- `phoneY`: Phone bounding box Y offset (pre-scale).
- `phoneWidth`: Phone bounding box width (pre-scale).
- `phoneHeight`: Phone bounding box height (pre-scale).

Returns: The selected bounding box rectangle.


### GameScene.Draw.cs

#### Draw() {#m-cuttheropedx-gamemain-gamescene-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

#### DrawCuts() {#m-cuttheropedx-gamemain-gamescene-drawcuts}

```csharp
public void DrawCuts()
```

Renders finger cut trails as triangle strips with Bézier-smoothed paths that grow in width from start to end.


### GameScene.GameLogic.cs

#### AnimateLevelRestart() {#m-cuttheropedx-gamemain-gamescene-animatelevelrestart}

```csharp
public void AnimateLevelRestart()
```

Starts the level restart dimming animation.

#### CalculateScore() {#m-cuttheropedx-gamemain-gamescene-calculatescore}

```csharp
public void CalculateScore()
```

Calculates time, star, and total score bonuses for the completed level.

#### DestroyRopesForCandy(int candyNumber, Grab except) {#m-cuttheropedx-gamemain-gamescene-destroyropesforcandy-system-int32-cuttheropedx-gamemain-grab}

```csharp
private void DestroyRopesForCandy(int candyNumber, Grab except)
```

Cuts all ropes for the specified candy number, except the one belonging to the given Grab. Matches iOS destroyRopesForCandy:except:.

Parameters:

- `candyNumber`: Candy number whose ropes should be destroyed.
- `except`: Grab whose rope should be preserved.

#### DetachActiveHands() {#m-cuttheropedx-gamemain-gamescene-detachactivehands}

```csharp
public void DetachActiveHands()
```

Releases all mechanical hands currently holding the candy and unblocks conveyors if needed.

#### DetachActiveSnails() {#m-cuttheropedx-gamemain-gamescene-detachactivesnails}

```csharp
public void DetachActiveSnails()
```

Detaches all active snails from the candy.

#### DisableGhostCycleForBubble(GameObject bubbleObj) {#m-cuttheropedx-gamemain-gamescene-disableghostcycleforbubble-cuttheropedx-framework-helpers-gameobject}

```csharp
private bool DisableGhostCycleForBubble(GameObject bubbleObj)
```

Disables ghost cycling for any ghost that owns the specified bubble.

Parameters:

- `bubbleObj`: Bubble object whose owning ghost should stop cycling.

Returns: `true` if at least one ghost was affected; otherwise, `false`.

#### DropLightBulbFromSock(LightBulb bulb) {#m-cuttheropedx-gamemain-gamescene-droplightbulbfromsock-cuttheropedx-gamemain-lightbulb}

```csharp
private static void DropLightBulbFromSock(LightBulb bulb)
```

Releases a light bulb from its attached sock and applies the sock exit velocity.

Parameters:

- `bulb`: Light bulb to drop from its attached sock.

#### EnableGhostCycleForBubble(GameObject bubbleObj) {#m-cuttheropedx-gamemain-gamescene-enableghostcycleforbubble-cuttheropedx-framework-helpers-gameobject}

```csharp
private void EnableGhostCycleForBubble(GameObject bubbleObj)
```

Re-enables ghost cycling for any ghost that owns the specified bubble.

Parameters:

- `bubbleObj`: Bubble object whose owning ghost should resume cycling.

#### GameLost() {#m-cuttheropedx-gamemain-gamescene-gamelost}

```csharp
public void GameLost()
```

Handles the level-lost sequence and schedules the restart animation.

#### GameWon() {#m-cuttheropedx-gamemain-gamescene-gamewon}

```csharp
public void GameWon()
```

Handles the level-won sequence, including candy consumption, scoring, cleanup, and delegate notification.

#### IsCandyPoint(ConstraintedPoint point) {#m-cuttheropedx-gamemain-gamescene-iscandypoint-cuttheropedx-framework-physics-constraintedpoint}

```csharp
private bool IsCandyPoint(ConstraintedPoint point)
```

Checks if the given constraint point is a candy (star, starL, or starR). Used to distinguish candy from other objects like light bulbs.

Parameters:

- `point`: Constraint point to test.

Returns: `true` if the point belongs to a candy body; otherwise, `false`.

#### OnButtonPressed(GameSceneButtonId _) {#m-cuttheropedx-gamemain-gamescene-onbuttonpressed-cuttheropedx-gamemain-gamescenebuttonid}

```csharp
public void OnButtonPressed(GameSceneButtonId _)
```

Handles game-scene button actions such as toggling gravity.

Parameters:

- `_`: Game scene button identifier.

#### PopBubbleAtXY(float bx, float by) {#m-cuttheropedx-gamemain-gamescene-popbubbleatxy-system-single-system-single}

```csharp
public void PopBubbleAtXY(float bx, float by)
```

Plays bubble-pop effects at a world position.

Parameters:

- `bx`: World-space X position for the pop effect.
- `by`: World-space Y position for the pop effect.

#### PopCandyBubble(bool left) {#m-cuttheropedx-gamemain-gamescene-popcandybubble-system-boolean}

```csharp
public void PopCandyBubble(bool left)
```

Pops the bubble currently holding the candy or one of its split halves.

Parameters:

- `left`: `true` to pop the left candy bubble when the candy is split; `false` to pop the right or whole-candy bubble.

#### PopLightBulbBubble(LightBulb bulb) {#m-cuttheropedx-gamemain-gamescene-poplightbulbbubble-cuttheropedx-gamemain-lightbulb}

```csharp
private void PopLightBulbBubble(LightBulb bulb)
```

Pops the bubble captured by a light bulb and restores any ghost cycling state.

Parameters:

- `bulb`: Light bulb whose captured bubble should be popped.

#### ReleaseAllRopes(bool left) {#m-cuttheropedx-gamemain-gamescene-releaseallropes-system-boolean}

```csharp
public void ReleaseAllRopes(bool left)
```

Releases all ropes attached to the active candy body or candy half.

Parameters:

- `left`: `true` to release ropes attached to the left candy half; `false` to release the right half or whole candy.

#### ReleaseLightBulbRopes(LightBulb bulb) {#m-cuttheropedx-gamemain-gamescene-releaselightbulbropes-cuttheropedx-gamemain-lightbulb}

```csharp
private void ReleaseLightBulbRopes(LightBulb bulb)
```

Cuts or hides ropes attached to a light bulb.

Parameters:

- `bulb`: Light bulb whose ropes should be released.

#### ResetBungeeHighlight() {#m-cuttheropedx-gamemain-gamescene-resetbungeehighlight}

```csharp
public void ResetBungeeHighlight()
```

Clears the highlighted state from all uncut bungee ropes.

#### RotateAllSpikesWithID(int sid) {#m-cuttheropedx-gamemain-gamescene-rotateallspikeswithid-system-int32}

```csharp
public void RotateAllSpikesWithID(int sid)
```

Rotates every spike object matching the supplied toggle ID.

Parameters:

- `sid`: Spike toggle identifier to match.

#### Teleport() {#m-cuttheropedx-gamemain-gamescene-teleport}

```csharp
public void Teleport()
```

Completes pending candy teleportation through a bamboo tube or sock.


### GameScene.GhostSupport.cs

#### GetGhostRopeAnchor(Vector ghostPosition) {#m-cuttheropedx-gamemain-gamescene-getghostropeanchor-cuttheropedx-framework-core-vector}

```csharp
internal ConstraintedPoint GetGhostRopeAnchor(Vector ghostPosition)
```

Chooses the best candy constraint point for a ghost-created rope anchor.

Parameters:

- `ghostPosition`: World position of the ghost creating the rope.

Returns: The closest available candy constraint point, or a fallback candy point when none are active.


### GameScene.Init.cs

#### CreateEarthImageWithOffsetXY(float xs, float ys) {#m-cuttheropedx-gamemain-gamescene-createearthimagewithoffsetxy-system-single-system-single}

```csharp
public void CreateEarthImageWithOffsetXY(float xs, float ys)
```

Creates a gravity earth animation image and offsets it from the configured pack position.

Parameters:

- `xs`: Additional X offset for the image.
- `ys`: Additional Y offset for the image.

#### CreateGravityButtonWithDelegate(IButtonDelegation d) {#m-cuttheropedx-gamemain-gamescene-creategravitybuttonwithdelegate-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public static ToggleButton CreateGravityButtonWithDelegate(IButtonDelegation d)
```

Creates the gravity toggle button used by the game scene.

Parameters:

- `d`: Button delegate that receives gravity button events.

Returns: The initialized gravity toggle button.

#### LoadNextMap() {#m-cuttheropedx-gamemain-gamescene-loadnextmap}

```csharp
public void LoadNextMap()
```

Loads the next map in the active pack or advances the map picker.

#### Reload() {#m-cuttheropedx-gamemain-gamescene-reload}

```csharp
public void Reload()
```

Reloads the current map or map-picker scene.

#### Restart() {#m-cuttheropedx-gamemain-gamescene-restart}

```csharp
public void Restart()
```

Restarts the current scene by hiding and showing it again.


### GameScene.Initialize.cs

#### EnsureCandyGhostBubbleAnimations() {#m-cuttheropedx-gamemain-gamescene-ensurecandyghostbubbleanimations}

```csharp
private void EnsureCandyGhostBubbleAnimations()
```

Ensures candy ghost-bubble overlay animations exist for each active candy sprite.

#### InitializeCandyObjects() {#m-cuttheropedx-gamemain-gamescene-initializecandyobjects}

```csharp
private void InitializeCandyObjects()
```

Initializes candy and constraint point objects Sets up the main candy, candy variants (left/right), and related animations

#### InitializeGameState() {#m-cuttheropedx-gamemain-gamescene-initializegamestate}

```csharp
private void InitializeGameState()
```

Initializes core Game state and object collections Resets all state variables and creates fresh collections

#### InitializeHUDStars() {#m-cuttheropedx-gamemain-gamescene-initializehudstars}

```csharp
private void InitializeHUDStars()
```

Initializes HUD stars visibility Resets the HUD star timeline animations


### GameScene.Input.cs

#### HandleBubbleTouchXY(ConstraintedPoint s, float tx, float ty) {#m-cuttheropedx-gamemain-gamescene-handlebubbletouchxy-cuttheropedx-framework-physics-constraintedpoint-system-single-system-single}

```csharp
public bool HandleBubbleTouchXY(ConstraintedPoint s, float tx, float ty)
```

Handles tapping a candy bubble and pops it when the touch is inside the bubble touch area.

Parameters:

- `s`: Candy constraint point associated with the bubble.
- `tx`: Touch x-coordinate in screen space.
- `ty`: Touch y-coordinate in screen space.

Returns: `true` when the bubble was touched and popped; otherwise, `false`.

#### HandleLightBulbBubbleTouch(LightBulb bulb, float tx, float ty) {#m-cuttheropedx-gamemain-gamescene-handlelightbulbbubbletouch-cuttheropedx-gamemain-lightbulb-system-single-system-single}

```csharp
private bool HandleLightBulbBubbleTouch(LightBulb bulb, float tx, float ty)
```

Handles tapping a bubble captured by a light bulb.

Parameters:

- `bulb`: Light bulb that may currently hold a bubble.
- `tx`: Touch x-coordinate in screen space.
- `ty`: Touch y-coordinate in screen space.

Returns: `true` when the captured bubble was touched and popped; otherwise, `false`.

#### TouchDownXYIndex(float tx, float ty, int ti) {#m-cuttheropedx-gamemain-gamescene-touchdownxyindex-system-single-system-single-system-int32}

```csharp
public bool TouchDownXYIndex(float tx, float ty, int ti)
```

Handles a touch-down event for gameplay objects and rope-cut gestures.

Parameters:

- `tx`: Touch x-coordinate in screen space.
- `ty`: Touch y-coordinate in screen space.
- `ti`: Touch index.

Returns: `true` when the touch-down event was consumed; otherwise, `false`.

#### TouchDraggedXYIndex(float tx, float ty, int index) {#m-cuttheropedx-gamemain-gamescene-touchdraggedxyindex-system-single-system-single-system-int32}

```csharp
public bool TouchDraggedXYIndex(float tx, float ty, int index)
```

Records the latest dragged touch location.

Parameters:

- `tx`: Touch x-coordinate in screen space.
- `ty`: Touch y-coordinate in screen space.
- `index`: Touch index.

Returns: `true` when the drag was recorded; otherwise, `false`.

#### TouchMoveXYIndex(float tx, float ty, int ti) {#m-cuttheropedx-gamemain-gamescene-touchmovexyindex-system-single-system-single-system-int32}

```csharp
public bool TouchMoveXYIndex(float tx, float ty, int ti)
```

Handles a touch-move event for active gameplay gestures, draggable objects, and rope cutting.

Parameters:

- `tx`: Touch x-coordinate in screen space.
- `ty`: Touch y-coordinate in screen space.
- `ti`: Touch index.

Returns: `true` when the touch-move event was consumed; otherwise, `false`.

#### TouchUpXYIndex(float tx, float ty, int ti) {#m-cuttheropedx-gamemain-gamescene-touchupxyindex-system-single-system-single-system-int32}

```csharp
public bool TouchUpXYIndex(float tx, float ty, int ti)
```

Handles a touch-up event for gameplay objects and active touch gestures.

Parameters:

- `tx`: Touch x-coordinate in screen space.
- `ty`: Touch y-coordinate in screen space.
- `ti`: Touch index.

Returns: `true` when the touch-up event was consumed; otherwise, `false`.


### GameScene.LoadMetadata.cs

#### LoadAllLevelMetadata(XElement mapNode, float scale, float offsetY, out float offsetX, out int mapOffsetX, out int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadalllevelmetadata-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadAllLevelMetadata(XElement mapNode, float scale, float offsetY, out float offsetX, out int mapOffsetX, out int mapOffsetY)
```

Loads all level metadata from XML in a single pass Extracts map dimensions, Game design settings, and candy positions

Parameters:

- `mapNode`: Root XML node for the current map.
- `scale`: Level scale factor.
- `offsetY`: Vertical offset applied to map coordinates.
- `offsetX`: Computed horizontal offset for map coordinates.
- `mapOffsetX`: Computed integer map X offset.
- `mapOffsetY`: Computed integer map Y offset.


### GameScene.LoadObjects.cs

#### LoadObjectsFromMap(XElement map, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadobjectsfrommap-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadObjectsFromMap(XElement map, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads all game objects from XML map data using a dispatch switch Iterates through XML nodes and calls appropriate Load* method for each object type

Parameters:

- `map`: The XML map node containing object definitions.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### GameScene.NightLevel.cs

#### GetSleepPulsePivotOffsetY(float height) {#m-cuttheropedx-gamemain-gamescene-getsleeppulsepivotoffsety-system-single}

```csharp
private static float GetSleepPulsePivotOffsetY(float height)
```

Calculates the Y offset for the sleep pulse animation pivot point.

Parameters:

- `height`: The height of the target object.

Returns: The Y offset from center for the rotation pivot.

#### ResolveConstraintCollision(ConstraintedPoint a, ConstraintedPoint b, float minDistance) {#m-cuttheropedx-gamemain-gamescene-resolveconstraintcollision-cuttheropedx-framework-physics-constraintedpoint-cuttheropedx-framework-physics-constraintedpoint-system-single}

```csharp
private static void ResolveConstraintCollision(ConstraintedPoint a, ConstraintedPoint b, float minDistance)
```

Resolves collision between two constraint points by separating them and exchanging velocities.

Parameters:

- `a`: The first constraint point.
- `b`: The second constraint point.
- `minDistance`: The minimum allowed distance between the points.

#### SetNightSleepVisibility(bool visible) {#m-cuttheropedx-gamemain-gamescene-setnightsleepvisibility-system-boolean}

```csharp
private void SetNightSleepVisibility(bool visible)
```

Controls the visibility and playback of zzz animations.

Parameters:

- `visible`: Whether the zzz animations should be visible.

#### UpdateLightBulbPhysics(float delta) {#m-cuttheropedx-gamemain-gamescene-updatelightbulbphysics-system-single}

```csharp
private void UpdateLightBulbPhysics(float delta)
```

Updates physics simulation for all light bulbs in the level.

Parameters:

- `delta`: Time elapsed since the last frame in seconds.

#### UpdateNightLevel(float delta) {#m-cuttheropedx-gamemain-gamescene-updatenightlevel-system-single}

```csharp
private void UpdateNightLevel(float delta)
```

Updates night level specific game logic each frame.

Parameters:

- `delta`: Time elapsed since the last frame in seconds.

#### UpdateNightTargetAwake(bool isAwake) {#m-cuttheropedx-gamemain-gamescene-updatenighttargetawake-system-boolean}

```csharp
private void UpdateNightTargetAwake(bool isAwake)
```

Handles transitions between Om Nom's awake and sleeping states.

Parameters:

- `isAwake`: Whether Om Nom should be awake (illuminated by a light bulb).


### GameScene.Show.cs

#### DoCandyBlink() {#m-cuttheropedx-gamemain-gamescene-docandyblink}

```csharp
public void DoCandyBlink()
```

Plays the candy blink animation.

#### Show() {#m-cuttheropedx-gamemain-gamescene-show}

```csharp
public override void Show()
```

Recursively shows all visible children.

#### StartCamera() {#m-cuttheropedx-gamemain-gamescene-startcamera}

```csharp
public void StartCamera()
```

Positions the camera for the newly loaded map and sets the initial camera movement mode.

#### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-gamescene-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

#### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-gamescene-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.


### GameScene.Systems.cs

#### CutWithRazorOrLine1Line2Immediate(Razor r, Vector v1, Vector v2, bool im) {#m-cuttheropedx-gamemain-gamescene-cutwithrazororline1line2immediate-cuttheropedx-gamemain-razor-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-system-boolean}

```csharp
public int CutWithRazorOrLine1Line2Immediate(Razor r, Vector v1, Vector v2, bool im)
```

Cuts ropes with a razor or line. Returns number of ropes cut.

Parameters:

- `r`: Razor bounds source; when null, line intersection is used.
- `v1`: Line start point when line cutting is used.
- `v2`: Line end point when line cutting is used.
- `im`: Whether to remove the rope part immediately after cutting.

Returns: The number of ropes cut during this call.

#### GetNearestBungeeSegmentByBeziersPointsatXYgrab(ref Vector s, float tx, float ty, ref Grab grab) {#m-cuttheropedx-gamemain-gamescene-getnearestbungeesegmentbybezierspointsatxygrab-cuttheropedx-framework-core-vector-system-single-system-single-cuttheropedx-gamemain-grab}

```csharp
public Bungee GetNearestBungeeSegmentByBeziersPointsatXYgrab(ref Vector s, float tx, float ty, ref Grab grab)
```

Finds the nearest bungee segment using bezier drawing points

Parameters:

- `s`: Receives the nearest sampled point on the rope.
- `tx`: Query X position.
- `ty`: Query Y position.
- `grab`: Receives the grab that owns the nearest segment.

Returns: The nearest bungee segment, or `null` when none is within range.

#### GetNearestBungeeSegmentByConstraintsforGrab(ref Vector s, Grab g) {#m-cuttheropedx-gamemain-gamescene-getnearestbungeesegmentbyconstraintsforgrab-cuttheropedx-framework-core-vector-cuttheropedx-gamemain-grab}

```csharp
public static Bungee GetNearestBungeeSegmentByConstraintsforGrab(ref Vector s, Grab g)
```

Finds the nearest bungee segment using constraint points

Parameters:

- `s`: Input query position and output nearest constraint position.
- `g`: Grab whose rope is searched.

Returns: The nearest bungee segment, or `null` when no valid segment is found.

#### HandleBouncePtDelta(Bouncer b, ConstraintedPoint s, float delta) {#m-cuttheropedx-gamemain-gamescene-handlebounceptdelta-cuttheropedx-gamemain-bouncer-cuttheropedx-framework-physics-constraintedpoint-system-single}

```csharp
public static void HandleBouncePtDelta(Bouncer b, ConstraintedPoint s, float delta)
```

Handles bouncer physics interaction with a constrained point

Parameters:

- `b`: Bouncer source.
- `s`: Constrained point affected by the bounce.
- `delta`: Frame delta time used when applying impulse.

#### HandlePumpFlowPtSkin(Pump p, ConstraintedPoint s, GameObject c) {#m-cuttheropedx-gamemain-gamescene-handlepumpflowptskin-cuttheropedx-gamemain-pump-cuttheropedx-framework-physics-constraintedpoint-cuttheropedx-framework-helpers-gameobject}

```csharp
public static void HandlePumpFlowPtSkin(Pump p, ConstraintedPoint s, GameObject c)
```

Handles pump physics interaction with a constrained point and game object

Parameters:

- `p`: Pump producing the flow impulse.
- `s`: Constrained point to receive the impulse.
- `c`: Game object tested against the pump flow area.

#### OperateBambooTube(BambooTube bambooTube) {#m-cuttheropedx-gamemain-gamescene-operatebambootube-cuttheropedx-gamemain-bambootube}

```csharp
public void OperateBambooTube(BambooTube bambooTube)
```

Starts bamboo tube teleport sequence for the main candy.

Parameters:

- `bambooTube`: Bamboo tube that receives the candy.

#### OperatePump(Pump p) {#m-cuttheropedx-gamemain-gamescene-operatepump-cuttheropedx-gamemain-pump}

```csharp
public void OperatePump(Pump p)
```

Operates a pump - creates particles and applies force

Parameters:

- `p`: Pump to animate and process.

#### OperateSteamTube(SteamTube tube, float delta) {#m-cuttheropedx-gamemain-gamescene-operatesteamtube-cuttheropedx-gamemain-steamtube-system-single}

```csharp
public void OperateSteamTube(SteamTube tube, float delta)
```

Applies steam tube forces and interacts with candy pieces inside the flow area. Uses a dedicated mobile formula when mobile physics model is enabled.

Parameters:

- `tube`: Steam tube that emits the force field.
- `delta`: Frame delta time used when applying impulses.

#### SpiderBusted(Grab g) {#m-cuttheropedx-gamemain-gamescene-spiderbusted-cuttheropedx-gamemain-grab}

```csharp
public void SpiderBusted(Grab g)
```

Called when a spider is busted - handles animation and achievements

Parameters:

- `g`: Grab whose spider was busted.

#### SpiderWon(Grab sg) {#m-cuttheropedx-gamemain-gamescene-spiderwon-cuttheropedx-gamemain-grab}

```csharp
public void SpiderWon(Grab sg)
```

Called when a spider successfully captures the candy

Parameters:

- `sg`: Grab whose spider captured the candy.


### GameScene.Update.cs

#### PlayMechanicalHandClapEffectAt(Vector position) {#m-cuttheropedx-gamemain-gamescene-playmechanicalhandclapeffectat-cuttheropedx-framework-core-vector}

```csharp
private void PlayMechanicalHandClapEffectAt(Vector position)
```

Spawns a short-lived clap effect for idle hand proximity claps.

Parameters:

- `position`: World position where the effect should appear.

#### TriggerSpecialTutorial(int tutorialId) {#m-cuttheropedx-gamemain-gamescene-triggerspecialtutorial-system-int32}

```csharp
private void TriggerSpecialTutorial(int tutorialId)
```

Plays the matching special tutorial and hides all other special tutorial prompts.

Parameters:

- `tutorialId`: Special tutorial identifier to trigger.

#### Update(float delta) {#m-cuttheropedx-gamemain-gamescene-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

#### UpdateHands(float delta) {#m-cuttheropedx-gamemain-gamescene-updatehands-system-single}

```csharp
private void UpdateHands(float delta)
```

Updates mechanical hand behavior, candy attachment, hand claps, and hand ordering.

Parameters:

- `delta`: Elapsed time in seconds since the last update.


### GameScene.cs

#### Dispose(bool disposing) {#m-cuttheropedx-gamemain-gamescene-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

#### Exhausted(Rocket r) {#m-cuttheropedx-gamemain-gamescene-exhausted-cuttheropedx-gamemain-rocket}

```csharp
public void Exhausted(Rocket r)
```

Handles exhaustion of a rocket currently carrying the candy.

Parameters:

- `r`: The rocket that has exhausted its fuel.

#### FBOUND_PI(float a) {#m-cuttheropedx-gamemain-gamescene-fbound-pi-system-single}

```csharp
public static float FBOUND_PI(float a)
```

Normalizes an angle into the range of negative PI to positive PI.

Parameters:

- `a`: The angle to normalize.

Returns: The normalized angle.

#### FullscreenToggled(bool isFullscreen) {#m-cuttheropedx-gamemain-gamescene-fullscreentoggled-system-boolean}

```csharp
public void FullscreenToggled(bool isFullscreen)
```

Updates scene layout when fullscreen mode changes.

Parameters:

- `isFullscreen`: Whether fullscreen mode is enabled.

#### GetBackgroundWidthScale(CTRTexture2D texture) {#m-cuttheropedx-gamemain-gamescene-getbackgroundwidthscale-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
private static float GetBackgroundWidthScale(CTRTexture2D texture)
```

Computes a width-based scale so a background texture matches the internal screen width.

Parameters:

- `texture`: Background texture to measure.

Returns: A safe width scale for the background texture.

#### Hide() {#m-cuttheropedx-gamemain-gamescene-hide}

```csharp
public override void Hide()
```

Recursively hides all visible children.

#### MaxOf4(float v1, float v2, float v3, float v4) {#m-cuttheropedx-gamemain-gamescene-maxof4-system-single-system-single-system-single-system-single}

```csharp
private static float MaxOf4(float v1, float v2, float v3, float v4)
```

Returns the largest value from four candidates.

Parameters:

- `v1`: The first candidate value.
- `v2`: The second candidate value.
- `v3`: The third candidate value.
- `v4`: The fourth candidate value.

Returns: The maximum of the supplied values.

#### MinAngleBetweenAandB(float a, float b) {#m-cuttheropedx-gamemain-gamescene-minanglebetweenaandb-system-single-system-single}

```csharp
private static float MinAngleBetweenAandB(float a, float b)
```

Calculates the smallest angular difference between two angles.

Parameters:

- `a`: The first angle.
- `b`: The second angle.

Returns: The absolute minimum angle between the two inputs.

#### MinOf4(float v1, float v2, float v3, float v4) {#m-cuttheropedx-gamemain-gamescene-minof4-system-single-system-single-system-single-system-single}

```csharp
private static float MinOf4(float v1, float v2, float v3, float v4)
```

Returns the smallest value from four candidates.

Parameters:

- `v1`: The first candidate value.
- `v2`: The second candidate value.
- `v3`: The third candidate value.
- `v4`: The fourth candidate value.

Returns: The minimum of the supplied values.

#### NearestAngleTofrom(float ta, float fa) {#m-cuttheropedx-gamemain-gamescene-nearestangletofrom-system-single-system-single}

```csharp
private static float NearestAngleTofrom(float ta, float fa)
```

Chooses the equivalent source angle nearest to a target angle.

Parameters:

- `ta`: The target angle to compare against.
- `fa`: The source angle to normalize near the target.

Returns: The source angle adjusted by full rotations to be closest to the target angle.

#### PointOutOfScreen(ConstraintedPoint p) {#m-cuttheropedx-gamemain-gamescene-pointoutofscreen-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public bool PointOutOfScreen(ConstraintedPoint p)
```

Determines whether a constrained point has moved outside the playable screen bounds.

Parameters:

- `p`: The point to evaluate.

Returns: `true` when the point is beyond the allowed bounds; otherwise, `false`.

#### ResolveMapName(string source) {#m-cuttheropedx-gamemain-gamescene-resolvemapname-system-string}

```csharp
private static string ResolveMapName(string source)
```

Resolves the persisted map name from an XML loader source string.

Parameters:

- `source`: The XML loader source path or virtual identifier.

Returns: The filename for disk-backed maps, or the current root-controller map name for virtual reload sources.

#### RestoreCandyProperties() {#m-cuttheropedx-gamemain-gamescene-restorecandyproperties}

```csharp
private void RestoreCandyProperties()
```

Restores the candy transform and color after temporary visual effects.

#### Selector_animateLevelRestart(FrameworkTypes param) {#m-cuttheropedx-gamemain-gamescene-selector-animatelevelrestart-cuttheropedx-framework-frameworktypes}

```csharp
private void Selector_animateLevelRestart(FrameworkTypes param)
```

Timeline selector callback that begins the level restart animation.

Parameters:

- `param`: Unused timeline payload.

#### Selector_doCandyBlink(FrameworkTypes param) {#m-cuttheropedx-gamemain-gamescene-selector-docandyblink-cuttheropedx-framework-frameworktypes}

```csharp
private void Selector_doCandyBlink(FrameworkTypes param)
```

Timeline selector callback that starts the candy blink animation.

Parameters:

- `param`: Unused timeline payload.

#### Selector_dropLightBulbFromSock(FrameworkTypes param) {#m-cuttheropedx-gamemain-gamescene-selector-droplightbulbfromsock-cuttheropedx-framework-frameworktypes}

```csharp
private void Selector_dropLightBulbFromSock(FrameworkTypes param)
```

Timeline selector callback that drops a light bulb from a sock when the payload contains one.

Parameters:

- `param`: The timeline payload that may contain a [LightBulb](LightBulb.md).

#### Selector_gameLost(FrameworkTypes param) {#m-cuttheropedx-gamemain-gamescene-selector-gamelost-cuttheropedx-framework-frameworktypes}

```csharp
private void Selector_gameLost(FrameworkTypes param)
```

Timeline selector callback that transitions the scene to the lost state.

Parameters:

- `param`: Unused timeline payload.

#### Selector_gameWon(FrameworkTypes param) {#m-cuttheropedx-gamemain-gamescene-selector-gamewon-cuttheropedx-framework-frameworktypes}

```csharp
private void Selector_gameWon(FrameworkTypes param)
```

Timeline selector callback that transitions the scene to the won state.

Parameters:

- `param`: Unused timeline payload.

#### Selector_revealCandyFromLantern(FrameworkTypes param) {#m-cuttheropedx-gamemain-gamescene-selector-revealcandyfromlantern-cuttheropedx-framework-frameworktypes}

```csharp
private void Selector_revealCandyFromLantern(FrameworkTypes param)
```

Timeline selector callback that restores the candy after it leaves a lantern.

Parameters:

- `param`: Unused timeline payload.

#### Selector_showGreeting(FrameworkTypes param) {#m-cuttheropedx-gamemain-gamescene-selector-showgreeting-cuttheropedx-framework-frameworktypes}

```csharp
private void Selector_showGreeting(FrameworkTypes param)
```

Timeline selector callback that triggers the greeting animation and sound.

Parameters:

- `param`: Unused timeline payload.

#### Selector_teleport(FrameworkTypes param) {#m-cuttheropedx-gamemain-gamescene-selector-teleport-cuttheropedx-framework-frameworktypes}

```csharp
private void Selector_teleport(FrameworkTypes param)
```

Timeline selector callback that teleports the active object.

Parameters:

- `param`: Unused timeline payload.

#### ShouldSkipTutorialElement(XElement c) {#m-cuttheropedx-gamemain-gamescene-shouldskiptutorialelement-system-xml-linq-xelement}

```csharp
public static bool ShouldSkipTutorialElement(XElement c)
```

Determines whether a tutorial element should be skipped for the active language.

Parameters:

- `c`: The tutorial XML element to inspect.

Returns: `true` when the element does not match the active locale; otherwise, `false`.

#### ShowGreeting() {#m-cuttheropedx-gamemain-gamescene-showgreeting}

```csharp
public void ShowGreeting()
```

Plays the active Om Nom greeting animation and matching sounds.

#### UpdateBackgroundScale() {#m-cuttheropedx-gamemain-gamescene-updatebackgroundscale}

```csharp
private void UpdateBackgroundScale()
```

Updates background scaling using the internal resolution.

#### XmlLoaderFinishedWithfromwithSuccess(XElement rootNode, string _, bool _1) {#m-cuttheropedx-gamemain-gamescene-xmlloaderfinishedwithfromwithsuccess-system-xml-linq-xelement-system-string-system-boolean}

```csharp
public void XmlLoaderFinishedWithfromwithSuccess(XElement rootNode, string _, bool _1)
```

Handles completion of XML loading for the current map and restarts the scene state.

Parameters:

- `rootNode`: The loaded XML root node.
- `_`: The XML loader source identifier.
- `_1`: The XML loader success flag.


### LoadAnts.cs

#### LoadAnts(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadants-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadAnts(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Parses an ant-path XML node and adds the resulting [AntsPath](AntsPath.md) and its segments to the scene's ant conveyor lists.

Parameters:

- `xmlNode`: The XML node describing the ants path.
- `scale`: The level scale factor applied to path coordinates and speed.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadBambooTubes.cs

#### LoadBambooTube(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadbambootube-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadBambooTube(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a bamboo tube object from XML node data.

Parameters:

- `xmlNode`: The XML node describing the bamboo tube.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadBouncers.cs

#### LoadBouncer(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadbouncer-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadBouncer(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a bouncer object from XML node data

Parameters:

- `xmlNode`: The XML node describing the bouncer.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadBubbles.cs

#### LoadBubble(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadbubble-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadBubble(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a bubble object from XML node data

Parameters:

- `xmlNode`: The XML node describing the bubble.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadCandy.cs

#### LoadCandyBubbleAnimations() {#m-cuttheropedx-gamemain-gamescene-loadcandybubbleanimations}

```csharp
private void LoadCandyBubbleAnimations()
```

Initializes split candy bubble animations Called when level has split candy (left and right variants)


### LoadConveyorBelts.cs

#### LoadConveyorBelt(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadconveyorbelt-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadConveyorBelt(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a conveyor belt object from XML node data.

Parameters:

- `xmlNode`: The XML node describing the conveyor belt.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadGhosts.cs

#### LoadGhost(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadghost-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadGhost(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a ghost object from XML node data.

Parameters:

- `xmlNode`: The XML node describing the ghost.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadGrabs.cs

#### FindLightBulbForBinding(string bulbNumber) {#m-cuttheropedx-gamemain-gamescene-findlightbulbforbinding-system-string}

```csharp
private LightBulb FindLightBulbForBinding(string bulbNumber)
```

Finds the light bulb that should be bound to a grab by bulb number.

Parameters:

- `bulbNumber`: The optional bulb identifier requested by the XML node.

Returns: The matching light bulb, or the last loaded bulb when no explicit match exists.

#### LoadGrab(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadgrab-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadGrab(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a grab/rope object from XML node data Handles spider and bee variants, path-based movement, and rope physics

Parameters:

- `xmlNode`: The XML node describing the grab.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadGravityButton.cs

#### LoadGravityButton(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadgravitybutton-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadGravityButton(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads the gravity switch button from XML node data Creates and positions the gravity toggle button

Parameters:

- `xmlNode`: The XML node describing the gravity switch.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadHands.cs

#### LoadHand(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadhand-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadHand(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a mechanical hand object from XML node data.

Parameters:

- `xmlNode`: The XML node describing the mechanical hand.
- `scale`: The level scale factor applied to object coordinates and segment lengths.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadLanterns.cs

#### LoadLantern(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadlantern-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadLantern(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a lantern object from XML node data.

Parameters:

- `xmlNode`: The XML node describing the lantern.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadLightBulb.cs

#### LoadLightBulb(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadlightbulb-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadLightBulb(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a light bulb object from XML node data

Parameters:

- `xmlNode`: The XML node describing the light bulb.
- `scale`: The level scale factor applied to object coordinates and radius.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadMice.cs

#### LoadMouse(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadmouse-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadMouse(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a mouse object from XML node data.

Parameters:

- `xmlNode`: The XML node describing the mouse.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadPumps.cs

#### LoadPump(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadpump-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadPump(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a pump object from XML node data

Parameters:

- `xmlNode`: The XML node describing the pump.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadRockets.cs

#### LoadRocket(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadrocket-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadRocket(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a rocket object from XML node data.

Parameters:

- `xmlNode`: The XML node describing the rocket.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadRotatedCircles.cs

#### LoadRotatedCircle(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadrotatedcircle-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadRotatedCircle(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a rotated circle (vinyl) object from XML node data

Parameters:

- `xmlNode`: The XML node describing the rotated circle.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadSnails.cs

#### LoadSnail(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadsnail-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadSnail(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a snail object from XML node data.

Parameters:

- `xmlNode`: The XML node describing the snail.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadSocks.cs

#### LoadSock(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadsock-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadSock(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a sock object from XML node data

Parameters:

- `xmlNode`: The XML node describing the sock.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadSpikes.cs

#### LoadSpike(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadspike-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadSpike(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a spike object from XML node data Supports regular spikes (spike1-4) and electro spikes

Parameters:

- `xmlNode`: The XML node describing the spikes.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadStars.cs

#### LoadStar(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadstar-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadStar(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a star object from XML node data

Parameters:

- `xmlNode`: The XML node describing the collectible star.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadSteamTubes.cs

#### LoadSteamTube(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadsteamtube-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadSteamTube(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a steam tube from XML node data and positions it in the scene.

Parameters:

- `xmlNode`: The XML node describing the steam tube.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadTarget.cs

#### LoadTarget(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadtarget-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadTarget(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads Om Nom from XML node data Sets up Om Nom animations, blink animation, and greeting if needed

Parameters:

- `xmlNode`: The XML node describing Om Nom.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.


### LoadTutorials.cs

#### LoadTutorialImage(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadtutorialimage-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadTutorialImage(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a tutorial image element from XML node data

Parameters:

- `xmlNode`: The XML node describing the tutorial image element.
- `scale`: The level scale factor applied to object coordinates.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.

#### LoadTutorialText(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY) {#m-cuttheropedx-gamemain-gamescene-loadtutorialtext-system-xml-linq-xelement-system-single-system-single-system-single-system-int32-system-int32}

```csharp
private void LoadTutorialText(XElement xmlNode, float scale, float offsetX, float offsetY, int mapOffsetX, int mapOffsetY)
```

Loads a tutorial text element from XML node data

Parameters:

- `xmlNode`: The XML node describing the tutorial text element.
- `scale`: The level scale factor applied to object coordinates and width.
- `offsetX`: The base X offset applied to loaded objects.
- `offsetY`: The base Y offset applied to loaded objects.
- `mapOffsetX`: The additional map X offset applied during loading.
- `mapOffsetY`: The additional map Y offset applied during loading.



---
title: Class Grab
description: Rope anchor hook object that can appear as a fixed hook, movable hook, wheel hook, gun hook, spider hook, or suction cup hook.
---

# Class Grab

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `Grab.cs`

Rope anchor hook object that can appear as a fixed hook, movable hook, wheel hook, gun hook, spider hook, or suction cup hook.

## Declaration

```csharp
internal class Grab : CTRGameObject, ITransporterItem, ITransporterBindAware, ITransporterSideSwitchAware, ITransporterScaleAware
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [GameObject](../Framework/Helpers/GameObject.md)
- [CTRGameObject](CTRGameObject.md)
- [Grab](Grab.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITransporterItem](ITransporterItem.md)
- [ITransporterBindAware](ITransporterBindAware.md)
- [ITransporterSideSwitchAware](ITransporterSideSwitchAware.md)
- [ITransporterScaleAware](ITransporterScaleAware.md)

## Derived

- [GhostGrab](GhostGrab.md)

## Constructors

### Grab() {#m-cuttheropedx-gamemain-grab-ctor}

```csharp
public Grab()
```

Initializes a new grab with default rope, gun, balloon, suction cup, and stick state.

## Fields

### BeeQuad {#f-cuttheropedx-gamemain-grab-beequad}

```csharp
private const int BeeQuad
```

Bee body quad.

### GUN_CUP_DROP_AND_HIDE {#f-cuttheropedx-gamemain-grab-gun-cup-drop-and-hide}

```csharp
public const int GUN_CUP_DROP_AND_HIDE
```

Timeline ID for dropping and hiding the gun cup.

### GUN_CUP_HIDE {#f-cuttheropedx-gamemain-grab-gun-cup-hide}

```csharp
public const int GUN_CUP_HIDE
```

Timeline ID for hiding the gun cup in place.

### GUN_CUP_SHOW {#f-cuttheropedx-gamemain-grab-gun-cup-show}

```csharp
public const int GUN_CUP_SHOW
```

Timeline ID for showing the gun cup.

### GUN_CUT_RADIUS {#f-cuttheropedx-gamemain-grab-gun-cut-radius}

```csharp
public const int GUN_CUT_RADIUS
```

Cut radius used by the gun hook.

### GUN_TAP_RADIUS {#f-cuttheropedx-gamemain-grab-gun-tap-radius}

```csharp
public const int GUN_TAP_RADIUS
```

Tap radius used by the gun hook.

### GunArrowQuad {#f-cuttheropedx-gamemain-grab-gunarrowquad}

```csharp
private const int GunArrowQuad
```

Gun hook arrow quad.

### GunBackQuad {#f-cuttheropedx-gamemain-grab-gunbackquad}

```csharp
private const int GunBackQuad
```

Gun hook back quad.

### GunFrontQuad {#f-cuttheropedx-gamemain-grab-gunfrontquad}

```csharp
private const int GunFrontQuad
```

Gun hook front quad.

### Hook01BackQuad {#f-cuttheropedx-gamemain-grab-hook01backquad}

```csharp
private const int Hook01BackQuad
```

First random fixed hook back quad.

### Hook02BackQuad {#f-cuttheropedx-gamemain-grab-hook02backquad}

```csharp
private const int Hook02BackQuad
```

Second random fixed hook back quad.

### HookAutoBackQuad {#f-cuttheropedx-gamemain-grab-hookautobackquad}

```csharp
private const int HookAutoBackQuad
```

Automatic-radius hook back quad.

### HookAutoFrontQuad {#f-cuttheropedx-gamemain-grab-hookautofrontquad}

```csharp
private const int HookAutoFrontQuad
```

Automatic-radius hook front quad.

### KICK_CUT_RADIUS {#f-cuttheropedx-gamemain-grab-kick-cut-radius}

```csharp
public const int KICK_CUT_RADIUS
```

Cut radius used by suction cup behavior.

### KICK_MOVE_LENGTH {#f-cuttheropedx-gamemain-grab-kick-move-length}

```csharp
public const int KICK_MOVE_LENGTH
```

Movement length used by suction cup behavior.

### KICK_TAP_RADIUS {#f-cuttheropedx-gamemain-grab-kick-tap-radius}

```csharp
public const int KICK_TAP_RADIUS
```

Tap radius used by suction cup behavior.

### MAX_STAINS {#f-cuttheropedx-gamemain-grab-max-stains}

```csharp
public const int MAX_STAINS
```

Maximum number of stain marks available to suction cup grabs.

### MovableHookHighlightQuad {#f-cuttheropedx-gamemain-grab-movablehookhighlightquad}

```csharp
private const int MovableHookHighlightQuad
```

Movable hook highlight quad.

### MovableHookQuad {#f-cuttheropedx-gamemain-grab-movablehookquad}

```csharp
private const int MovableHookQuad
```

Movable hook foreground quad.

### MovableRailCenterQuad {#f-cuttheropedx-gamemain-grab-movablerailcenterquad}

```csharp
private const int MovableRailCenterQuad
```

Movable rail center tile quad.

### MovableRailLeftQuad {#f-cuttheropedx-gamemain-grab-movablerailleftquad}

```csharp
private const int MovableRailLeftQuad
```

Movable rail left cap quad.

### MovableRailRightQuad {#f-cuttheropedx-gamemain-grab-movablerailrightquad}

```csharp
private const int MovableRailRightQuad
```

Movable rail right cap quad.

### RegulatedWheelQuadArm {#f-cuttheropedx-gamemain-grab-regulatedwheelquadarm}

```csharp
private const int RegulatedWheelQuadArm
```

Regulated wheel arm quad.

### RegulatedWheelQuadBase {#f-cuttheropedx-gamemain-grab-regulatedwheelquadbase}

```csharp
private const int RegulatedWheelQuadBase
```

Regulated wheel base quad.

### RegulatedWheelQuadHighlight {#f-cuttheropedx-gamemain-grab-regulatedwheelquadhighlight}

```csharp
private const int RegulatedWheelQuadHighlight
```

Regulated wheel highlight quad.

### RegulatedWheelQuadIndicator {#f-cuttheropedx-gamemain-grab-regulatedwheelquadindicator}

```csharp
private const int RegulatedWheelQuadIndicator
```

Regulated wheel indicator quad.

### SPIDER_SPEED {#f-cuttheropedx-gamemain-grab-spider-speed}

```csharp
public const float SPIDER_SPEED
```

Base spider traversal speed along the rope.

### STICK_DELAY {#f-cuttheropedx-gamemain-grab-stick-delay}

```csharp
public const float STICK_DELAY
```

Delay before a sticking suction cup grab becomes active.

### back {#f-cuttheropedx-gamemain-grab-back}

```csharp
public Image back
```

Back visual layer for the hook.

### baloon {#f-cuttheropedx-gamemain-grab-baloon}

```csharp
public bool baloon
```

Whether this grab uses survival balloon behavior.

### bee {#f-cuttheropedx-gamemain-grab-bee}

```csharp
public Image bee
```

Bee visual attached to this grab.

### candyNumber {#f-cuttheropedx-gamemain-grab-candynumber}

```csharp
public int candyNumber
```

Index of the candy attached to this grab, or -1 when no candy is attached.

### front {#f-cuttheropedx-gamemain-grab-front}

```csharp
public Image front
```

Front visual layer for the hook.

### grabMover {#f-cuttheropedx-gamemain-grab-grabmover}

```csharp
public Image grabMover
```

Movable hook foreground visual.

### grabMoverHighlight {#f-cuttheropedx-gamemain-grab-grabmoverhighlight}

```csharp
public Image grabMoverHighlight
```

Movable hook highlight visual.

### gun {#f-cuttheropedx-gamemain-grab-gun}

```csharp
public bool gun
```

Whether this grab uses gun hook behavior.

### gunArrow {#f-cuttheropedx-gamemain-grab-gunarrow}

```csharp
public Image gunArrow
```

Aim arrow visual for the gun hook.

### gunBack {#f-cuttheropedx-gamemain-grab-gunback}

```csharp
private Image gunBack
```

Back visual layer for the gun hook.

### gunCandyInitialRotation {#f-cuttheropedx-gamemain-grab-guncandyinitialrotation}

```csharp
public float gunCandyInitialRotation
```

Initial candy rotation captured when the gun hook fires.

### gunCup {#f-cuttheropedx-gamemain-grab-guncup}

```csharp
public Animation gunCup
```

Animated suction cup fired by the gun hook.

### gunFired {#f-cuttheropedx-gamemain-grab-gunfired}

```csharp
public bool gunFired
```

Whether the gun hook has fired its cup.

### gunFront {#f-cuttheropedx-gamemain-grab-gunfront}

```csharp
public Image gunFront
```

Front visual layer for the gun hook.

### gunInitialRotation {#f-cuttheropedx-gamemain-grab-guninitialrotation}

```csharp
public float gunInitialRotation
```

Initial gun hook rotation used when restoring state.

### hasSpider {#f-cuttheropedx-gamemain-grab-hasspider}

```csharp
public bool hasSpider
```

Whether this grab has a spider attachment.

### hideRadius {#f-cuttheropedx-gamemain-grab-hideradius}

```csharp
public bool hideRadius
```

Whether the grab-radius visualization is fading out.

### initial_rotatedCircle {#f-cuttheropedx-gamemain-grab-initial-rotatedcircle}

```csharp
public RotatedCircle initial_rotatedCircle
```

Initial rotated-circle binding used when restoring state.

### initial_rotation {#f-cuttheropedx-gamemain-grab-initial-rotation}

```csharp
public float initial_rotation
```

Initial grab rotation used when restoring state.

### initial_x {#f-cuttheropedx-gamemain-grab-initial-x}

```csharp
public float initial_x
```

Initial X position used when restoring state.

### initial_y {#f-cuttheropedx-gamemain-grab-initial-y}

```csharp
public float initial_y
```

Initial Y position used when restoring state.

### invisible {#f-cuttheropedx-gamemain-grab-invisible}

```csharp
public bool invisible
```

Whether this grab should skip drawing.

### kickActive {#f-cuttheropedx-gamemain-grab-kickactive}

```csharp
public bool kickActive
```

Whether suction cup behavior is active.

### kickable {#f-cuttheropedx-gamemain-grab-kickable}

```csharp
public bool kickable
```

Whether this grab uses suction cup behavior.

### kicked {#f-cuttheropedx-gamemain-grab-kicked}

```csharp
public bool kicked
```

Whether suction cup behavior has been triggered.

### lastWheelTouch {#f-cuttheropedx-gamemain-grab-lastwheeltouch}

```csharp
public Vector lastWheelTouch
```

Last touch point used to compute wheel rotation deltas.

### launcher {#f-cuttheropedx-gamemain-grab-launcher}

```csharp
public bool launcher
```

Whether this grab moves as a launcher.

### launcherIncreaseSpeed {#f-cuttheropedx-gamemain-grab-launcherincreasespeed}

```csharp
public bool launcherIncreaseSpeed
```

Whether launcher speed is currently increasing.

### launcherSpeed {#f-cuttheropedx-gamemain-grab-launcherspeed}

```csharp
public float launcherSpeed
```

Current launcher movement speed.

### maxMoveValue {#f-cuttheropedx-gamemain-grab-maxmovevalue}

```csharp
public float maxMoveValue
```

Maximum coordinate value allowed while moving along the rail.

### minMoveValue {#f-cuttheropedx-gamemain-grab-minmovevalue}

```csharp
public float minMoveValue
```

Minimum coordinate value allowed while moving along the rail.

### moveBackground {#f-cuttheropedx-gamemain-grab-movebackground}

```csharp
public HorizontallyTiledImage moveBackground
```

Tiled rail background for a movable hook.

### moveLength {#f-cuttheropedx-gamemain-grab-movelength}

```csharp
public float moveLength
```

Length of the movable hook rail.

### moveOffset {#f-cuttheropedx-gamemain-grab-moveoffset}

```csharp
public float moveOffset
```

Offset of the grab along its movable rail.

### moveVertical {#f-cuttheropedx-gamemain-grab-movevertical}

```csharp
public bool moveVertical
```

Whether the movable hook rail is vertical.

### moverDragging {#f-cuttheropedx-gamemain-grab-moverdragging}

```csharp
public int moverDragging
```

Identifier for the active movable-hook drag, or -1 when idle.

### radius {#f-cuttheropedx-gamemain-grab-radius}

```csharp
public float radius
```

Grab radius used for rope creation and radius visualization.

### radiusAlpha {#f-cuttheropedx-gamemain-grab-radiusalpha}

```csharp
public float radiusAlpha
```

Alpha multiplier for the grab-radius visualization.

### rope {#f-cuttheropedx-gamemain-grab-rope}

```csharp
public Bungee rope
```

Rope attached to this grab.

### s_grabCircleVerticesCache {#f-cuttheropedx-gamemain-grab-s-grabcircleverticescache}

```csharp
private static VertexPositionColor[] s_grabCircleVerticesCache
```

Reusable vertex buffer used when drawing grab radius circles.

### s_movableRailTrimmed {#f-cuttheropedx-gamemain-grab-s-movablerailtrimmed}

```csharp
private static bool s_movableRailTrimmed
```

Whether the shared movable rail texture quads have been trimmed.

### shouldActivate {#f-cuttheropedx-gamemain-grab-shouldactivate}

```csharp
public bool shouldActivate
```

Whether the spider should activate on the next update.

### spider {#f-cuttheropedx-gamemain-grab-spider}

```csharp
public Animation spider
```

Spider attachment animation.

### spiderActive {#f-cuttheropedx-gamemain-grab-spideractive}

```csharp
public bool spiderActive
```

Whether the spider attachment is currently walking along the rope.

### spiderPos {#f-cuttheropedx-gamemain-grab-spiderpos}

```csharp
public float spiderPos
```

Current spider traversal distance along the rope.

### stainCounter {#f-cuttheropedx-gamemain-grab-staincounter}

```csharp
public int stainCounter
```

Remaining stain marks available to the suction cup hook.

### stickTimer {#f-cuttheropedx-gamemain-grab-sticktimer}

```csharp
public float stickTimer
```

Timer used by suction cup sticking behavior.

### vertexCount {#f-cuttheropedx-gamemain-grab-vertexcount}

```csharp
public int vertexCount
```

Number of radius circle vertices stored in [vertices](#f-cuttheropedx-gamemain-grab-vertices).

### vertices {#f-cuttheropedx-gamemain-grab-vertices}

```csharp
public float[] vertices
```

Cached radius circle vertex positions.

### wheel {#f-cuttheropedx-gamemain-grab-wheel}

```csharp
public bool wheel
```

Whether this grab uses the regulated wheel hook behavior.

### wheelDirty {#f-cuttheropedx-gamemain-grab-wheeldirty}

```csharp
public bool wheelDirty
```

Whether the wheel arm scale needs to be recomputed.

### wheelHighlight {#f-cuttheropedx-gamemain-grab-wheelhighlight}

```csharp
public Image wheelHighlight
```

Highlight visual shown while the wheel hook is being operated.

### wheelImage {#f-cuttheropedx-gamemain-grab-wheelimage}

```csharp
public Image wheelImage
```

Base wheel hook visual.

### wheelImage2 {#f-cuttheropedx-gamemain-grab-wheelimage2}

```csharp
public Image wheelImage2
```

Wheel hook arm visual.

### wheelImage3 {#f-cuttheropedx-gamemain-grab-wheelimage3}

```csharp
public Image wheelImage3
```

Wheel hook indicator visual.

### wheelOperating {#f-cuttheropedx-gamemain-grab-wheeloperating}

```csharp
public int wheelOperating
```

Identifier for the active wheel touch, or -1 when idle.

## Properties

### BindPoint {#p-cuttheropedx-gamemain-grab-bindpoint}

```csharp
public Vector BindPoint { get; }
```

World-space point where the item attaches to the transporter.

### CollisionRadius {#p-cuttheropedx-gamemain-grab-collisionradius}

```csharp
public float CollisionRadius { get; }
```

Collision radius used for transporter interaction.

### IsDrawnByTransporter {#p-cuttheropedx-gamemain-grab-isdrawnbytransporter}

```csharp
public bool IsDrawnByTransporter { get; set; }
```

Whether the transporter is responsible for drawing this item.

### MaxScale {#p-cuttheropedx-gamemain-grab-maxscale}

```csharp
public float MaxScale { get; }
```

Maximum scale applied while on the transporter.

### MinScale {#p-cuttheropedx-gamemain-grab-minscale}

```csharp
public float MinScale { get; }
```

Minimum scale applied while on the transporter.

### PositionOnTransporter {#p-cuttheropedx-gamemain-grab-positionontransporter}

```csharp
public float PositionOnTransporter { get; set; }
```

Normalized position along the transporter path (0–1).

### TransporterScale {#p-cuttheropedx-gamemain-grab-transporterscale}

```csharp
public float TransporterScale { get; set; }
```

Current scale factor applied by the transporter.

## Methods

### DestroyRope() {#m-cuttheropedx-gamemain-grab-destroyrope}

```csharp
public void DestroyRope()
```

Disposes the attached rope and clears the rope reference.

### DidMoveToOtherSide() {#m-cuttheropedx-gamemain-grab-didmovetootherside}

```csharp
public void DidMoveToOtherSide()
```

Called when the object wraps to the opposite transporter side.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-grab-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-gamemain-grab-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### DrawBack() {#m-cuttheropedx-gamemain-grab-drawback}

```csharp
public virtual void DrawBack()
```

Draws the hook background layer and optional grab-radius outline.

### DrawBungee() {#m-cuttheropedx-gamemain-grab-drawbungee}

```csharp
public void DrawBungee()
```

Draws the attached rope behind the grab.

### DrawGrabCircle(Grab s, RGBAColor color) {#m-cuttheropedx-gamemain-grab-drawgrabcircle-cuttheropedx-gamemain-grab-cuttheropedx-framework-rgbacolor}

```csharp
protected static void DrawGrabCircle(Grab s, RGBAColor color)
```

Draws the circular grab radius using the cached antialiased line vertex buffer.

Parameters:

- `s`: Grab whose radius vertices should be drawn.
- `color`: Color used for the radius outline.

### DrawGunCup() {#m-cuttheropedx-gamemain-grab-drawguncup}

```csharp
public void DrawGunCup()
```

Draws the fired gun cup overlay.

### DrawSpider() {#m-cuttheropedx-gamemain-grab-drawspider}

```csharp
public void DrawSpider()
```

Draws the spider attachment animation.

### GetGrabCircleVertexCache(int vertexCount) {#m-cuttheropedx-gamemain-grab-getgrabcirclevertexcache-system-int32}

```csharp
private static VertexPositionColor[] GetGrabCircleVertexCache(int vertexCount)
```

Gets a reusable vertex buffer with at least the requested capacity.

Parameters:

- `vertexCount`: Minimum number of vertices required.

Returns: A reusable vertex buffer.

### GetRotateAngleForStartEndCenter(Vector v1, Vector v2, Vector c) {#m-cuttheropedx-gamemain-grab-getrotateangleforstartendcenter-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
public static float GetRotateAngleForStartEndCenter(Vector v1, Vector v2, Vector c)
```

Calculates the signed angle from one point to another around a center point.

Parameters:

- `v1`: Starting point.
- `v2`: Ending point.
- `c`: Rotation center.

Returns: The rotation angle in degrees.

### HandleWheelRotate(Vector v) {#m-cuttheropedx-gamemain-grab-handlewheelrotate-cuttheropedx-framework-core-vector}

```csharp
public void HandleWheelRotate(Vector v)
```

Rotates a wheel hook from the last touch point and rolls the attached rope when possible.

Parameters:

- `v`: Current world-space touch point.

### HandleWheelTouch(Vector v) {#m-cuttheropedx-gamemain-grab-handlewheeltouch-cuttheropedx-framework-core-vector}

```csharp
public void HandleWheelTouch(Vector v)
```

Records the starting touch point for wheel rotation.

Parameters:

- `v`: World-space touch point.

### RandomHookBaseQuad() {#m-cuttheropedx-gamemain-grab-randomhookbasequad}

```csharp
private static int RandomHookBaseQuad()
```

Selects one of the fixed hook back quad variants.

Returns: The selected fixed hook back quad index.

### ReCalcCircle() {#m-cuttheropedx-gamemain-grab-recalccircle}

```csharp
public void ReCalcCircle()
```

Recomputes the cached grab-radius circle vertices.

### SetBee() {#m-cuttheropedx-gamemain-grab-setbee}

```csharp
public void SetBee()
```

Adds the bee visual overlay to this grab.

### SetBindPoint(Vector point) {#m-cuttheropedx-gamemain-grab-setbindpoint-cuttheropedx-framework-core-vector}

```csharp
public void SetBindPoint(Vector point)
```

Sets the bind point to `point`.

Parameters:

- `point`: New bind point.

### SetLauncher() {#m-cuttheropedx-gamemain-grab-setlauncher}

```csharp
public void SetLauncher()
```

Configures this grab as a launcher that oscillates along a circular path.

### SetMoveLengthVerticalOffset(float l, bool v, float o) {#m-cuttheropedx-gamemain-grab-setmovelengthverticaloffset-system-single-system-boolean-system-single}

```csharp
public void SetMoveLengthVerticalOffset(float l, bool v, float o)
```

Configures this grab as a movable hook along a horizontal or vertical rail.

Parameters:

- `l`: Movable rail length.
- `v`: Whether the rail is vertical.
- `o`: Offset of the grab along the rail.

### SetRadius(float r) {#m-cuttheropedx-gamemain-grab-setradius-system-single}

```csharp
public void SetRadius(float r)
```

Configures this grab's radius and creates the visual resources for its active mode.

Parameters:

- `r`: Grab radius, or -1 for a fixed hook without a visible radius.

### SetRope(Bungee r) {#m-cuttheropedx-gamemain-grab-setrope-cuttheropedx-gamemain-bungee}

```csharp
public void SetRope(Bungee r)
```

Attaches a rope to this grab and activates spider startup when needed.

Parameters:

- `r`: Rope to attach.

### SetSpider(bool s) {#m-cuttheropedx-gamemain-grab-setspider-system-boolean}

```csharp
public void SetSpider(bool s)
```

Configures spider support for this grab.

Parameters:

- `s`: Whether this grab has an attached spider.

### SetTransporterScale(float scale) {#m-cuttheropedx-gamemain-grab-settransporterscale-system-single}

```csharp
public void SetTransporterScale(float scale)
```

Applies a custom transporter scale to the object.

Parameters:

- `scale`: Scale factor to apply.

### TrimMovableRailTileEdges(CTRTexture2D texture) {#m-cuttheropedx-gamemain-grab-trimmovablerailtileedges-cuttheropedx-framework-visual-ctrtexture2d}

```csharp
private static void TrimMovableRailTileEdges(CTRTexture2D texture)
```

Trims 1px transparent edges from movable rail tiles to prevent tiling seams. Only applies once to avoid compounding mutations on the shared texture.

Parameters:

- `texture`: Hook texture containing movable rail quads.

### Update(float delta) {#m-cuttheropedx-gamemain-grab-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.

### UpdateKickState() {#m-cuttheropedx-gamemain-grab-updatekickstate}

```csharp
public void UpdateKickState()
```

Updates suction cup visuals and synchronizes position to the attached rope.

### UpdateSpider(float delta) {#m-cuttheropedx-gamemain-grab-updatespider-system-single}

```csharp
public void UpdateSpider(float delta)
```

Updates spider movement along the attached rope.

Parameters:

- `delta`: Elapsed time in seconds since the previous update.

### WillBind() {#m-cuttheropedx-gamemain-grab-willbind}

```csharp
public void WillBind()
```

Called right before the object is bound to a transporter.


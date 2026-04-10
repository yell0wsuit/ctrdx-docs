---
title: Class BaseElement
description: Base class for all visual elements in the scene graph. Provides positioning, anchoring, transforms, child management, timeline playback, and touch dispatch.
---

# Class BaseElement

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `BaseElement.cs`

Base class for all visual elements in the scene graph. Provides positioning, anchoring, transforms, child management, timeline playback, and touch dispatch.

## Declaration

```csharp
internal class BaseElement : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [AnimationsPool](AnimationsPool.md)
- [BoxOpenClose](../../GameMain/BoxOpenClose.md)
- [Button](Button.md)
- [CircleElement](CircleElement.md)
- [ColorRect](ColorRect.md)
- [ConveyorBelt](../../GameMain/ConveyorBelt.md)
- [GameScene](../../GameMain/GameScene.md)
- [Ghost](../../GameMain/Ghost.md)
- [HBox](HBox.md)
- [Image](Image.md)
- [ImageMultiDrawer](ImageMultiDrawer.md)
- [MechanicalHand](../../GameMain/MechanicalHand.md)
- [MechanicalHandClaw](../../GameMain/MechanicalHandClaw.md)
- [MechanicalHandSegment](../../GameMain/MechanicalHandSegment.md)
- [Mouse](../../GameMain/Mouse.md)
- [Particles](Particles.md)
- [PollenDrawer](../../GameMain/PollenDrawer.md)
- [Popup](../../Commons/Popup.md)
- [RectangleElement](RectangleElement.md)
- [RotatedCircle](../../GameMain/RotatedCircle.md)
- [RotatedCircle2](../../GameMain/RotatedCircle2.md)
- [ScissorElement](../../GameMain/ScissorElement.md)
- [ScrollableContainer](ScrollableContainer.md)
- [SnowfallOverlay](../../GameMain/SnowfallOverlay.md)
- [SteamTube](../../GameMain/SteamTube.md)
- [Text](Text.md)
- [TileMap](TileMap.md)
- [ToggleButton](ToggleButton.md)
- [VBox](VBox.md)
- [View](../Core/View.md)

## Constructors

### BaseElement() {#m-cuttheropedx-framework-visual-baseelement-ctor}

```csharp
public BaseElement()
```

Initializes a new [BaseElement](BaseElement.md) with default values.

## Fields

### ACTION_JUMP_TO_TIMELINE_FRAME {#f-cuttheropedx-framework-visual-baseelement-action-jump-to-timeline-frame}

```csharp
public const string ACTION_JUMP_TO_TIMELINE_FRAME
```

Timeline action name for jumping to a specific keyframe.

### ACTION_PAUSE_TIMELINE {#f-cuttheropedx-framework-visual-baseelement-action-pause-timeline}

```csharp
public const string ACTION_PAUSE_TIMELINE
```

Timeline action name for pausing the current timeline.

### ACTION_PLAY_TIMELINE {#f-cuttheropedx-framework-visual-baseelement-action-play-timeline}

```csharp
public const string ACTION_PLAY_TIMELINE
```

Timeline action name for playing a timeline by index.

### ACTION_SET_CUSTOM_ANCHOR {#f-cuttheropedx-framework-visual-baseelement-action-set-custom-anchor}

```csharp
public const string ACTION_SET_CUSTOM_ANCHOR
```

Timeline action name for setting a custom anchor point.

### ACTION_SET_ROTATION_CENTER {#f-cuttheropedx-framework-visual-baseelement-action-set-rotation-center}

```csharp
public const string ACTION_SET_ROTATION_CENTER
```

Timeline action name for setting the rotation center offset.

### ACTION_SET_TOUCHABLE {#f-cuttheropedx-framework-visual-baseelement-action-set-touchable}

```csharp
public const string ACTION_SET_TOUCHABLE
```

Timeline action name for setting touchability.

### ACTION_SET_UPDATEABLE {#f-cuttheropedx-framework-visual-baseelement-action-set-updateable}

```csharp
public const string ACTION_SET_UPDATEABLE
```

Timeline action name for setting updateability.

### ACTION_SET_VISIBLE {#f-cuttheropedx-framework-visual-baseelement-action-set-visible}

```csharp
public const string ACTION_SET_VISIBLE
```

Timeline action name for setting visibility.

### ACTION_STOP_TIMELINE {#f-cuttheropedx-framework-visual-baseelement-action-stop-timeline}

```csharp
public const string ACTION_STOP_TIMELINE
```

Timeline action name for stopping the current timeline.

### anchor {#f-cuttheropedx-framework-visual-baseelement-anchor}

```csharp
public sbyte anchor
```

Bitmask controlling how this element anchors within its own bounds.

### blendingMode {#f-cuttheropedx-framework-visual-baseelement-blendingmode}

```csharp
public int blendingMode
```

Blending mode index (-1 = default, 0 = alpha, 1 = premultiplied, 2 = additive).

### childs {#f-cuttheropedx-framework-visual-baseelement-childs}

```csharp
protected Dictionary<int, BaseElement> childs
```

Child elements keyed by slot ID.

### color {#f-cuttheropedx-framework-visual-baseelement-color}

```csharp
public RGBAColor color
```

Tint color applied when drawing.

### currentTimeline {#f-cuttheropedx-framework-visual-baseelement-currenttimeline}

```csharp
private Timeline currentTimeline
```

The currently active timeline, or `null` if none.

### currentTimelineIndex {#f-cuttheropedx-framework-visual-baseelement-currenttimelineindex}

```csharp
private int currentTimelineIndex
```

Index of the currently active timeline, or -1 if none.

### customAnchorX {#f-cuttheropedx-framework-visual-baseelement-customanchorx}

```csharp
public float customAnchorX
```

Custom anchor X offset applied when [useCustomAnchor](#f-cuttheropedx-framework-visual-baseelement-usecustomanchor) is `true`.

### customAnchorY {#f-cuttheropedx-framework-visual-baseelement-customanchory}

```csharp
public float customAnchorY
```

Custom anchor Y offset applied when [useCustomAnchor](#f-cuttheropedx-framework-visual-baseelement-usecustomanchor) is `true`.

### drawX {#f-cuttheropedx-framework-visual-baseelement-drawx}

```csharp
public float drawX
```

Computed draw X position in screen coordinates.

### drawY {#f-cuttheropedx-framework-visual-baseelement-drawy}

```csharp
public float drawY
```

Computed draw Y position in screen coordinates.

### height {#f-cuttheropedx-framework-visual-baseelement-height}

```csharp
public int height
```

Height of this element in pixels.

### name {#f-cuttheropedx-framework-visual-baseelement-name}

```csharp
private string name
```

Optional name used for lookup via [GetChildWithName](#m-cuttheropedx-framework-visual-baseelement-getchildwithname-system-string).

### parent {#f-cuttheropedx-framework-visual-baseelement-parent}

```csharp
public BaseElement parent
```

Parent element in the scene graph, or `null` if this is a root element.

### parentAnchor {#f-cuttheropedx-framework-visual-baseelement-parentanchor}

```csharp
public sbyte parentAnchor
```

Bitmask controlling how this element anchors relative to its parent.

### passColorToChilds {#f-cuttheropedx-framework-visual-baseelement-passcolortochilds}

```csharp
public bool passColorToChilds
```

Whether color tint is passed down to children during drawing.

### passTouchEventsToAllChilds {#f-cuttheropedx-framework-visual-baseelement-passtoucheventstoallchilds}

```csharp
private readonly bool passTouchEventsToAllChilds
```

Whether touch events are dispatched to all children instead of stopping at the first handler.

### passTransformationsToChilds {#f-cuttheropedx-framework-visual-baseelement-passtransformationstochilds}

```csharp
public bool passTransformationsToChilds
```

Whether transforms are passed down to children during drawing.

### pushM {#f-cuttheropedx-framework-visual-baseelement-pushm}

```csharp
private bool pushM
```

Whether a matrix push is pending and needs to be popped.

### rotation {#f-cuttheropedx-framework-visual-baseelement-rotation}

```csharp
public float rotation
```

Rotation angle in degrees.

### rotationCenterX {#f-cuttheropedx-framework-visual-baseelement-rotationcenterx}

```csharp
public float rotationCenterX
```

X offset of the rotation center from the element's center.

### rotationCenterY {#f-cuttheropedx-framework-visual-baseelement-rotationcentery}

```csharp
public float rotationCenterY
```

Y offset of the rotation center from the element's center.

### scaleX {#f-cuttheropedx-framework-visual-baseelement-scalex}

```csharp
public float scaleX
```

Horizontal scale factor (1 = no scaling).

### scaleY {#f-cuttheropedx-framework-visual-baseelement-scaley}

```csharp
public float scaleY
```

Vertical scale factor (1 = no scaling).

### skewX {#f-cuttheropedx-framework-visual-baseelement-skewx}

```csharp
public float skewX
```

Horizontal skew factor.

### skewY {#f-cuttheropedx-framework-visual-baseelement-skewy}

```csharp
public float skewY
```

Vertical skew factor.

### timelines {#f-cuttheropedx-framework-visual-baseelement-timelines}

```csharp
protected Dictionary<int, Timeline> timelines
```

Timelines keyed by slot ID.

### touchable {#f-cuttheropedx-framework-visual-baseelement-touchable}

```csharp
public bool touchable
```

Whether this element receives touch events.

### translateX {#f-cuttheropedx-framework-visual-baseelement-translatex}

```csharp
private readonly float translateX
```

Horizontal translation offset applied during drawing.

### translateY {#f-cuttheropedx-framework-visual-baseelement-translatey}

```csharp
public float translateY
```

Vertical translation offset applied during drawing.

### updateable {#f-cuttheropedx-framework-visual-baseelement-updateable}

```csharp
public bool updateable
```

Whether this element is updated each frame.

### useCustomAnchor {#f-cuttheropedx-framework-visual-baseelement-usecustomanchor}

```csharp
public bool useCustomAnchor
```

Whether to apply [customAnchorX](#f-cuttheropedx-framework-visual-baseelement-customanchorx) and [customAnchorY](#f-cuttheropedx-framework-visual-baseelement-customanchory).

### visible {#f-cuttheropedx-framework-visual-baseelement-visible}

```csharp
public bool visible
```

Whether this element is drawn.

### width {#f-cuttheropedx-framework-visual-baseelement-width}

```csharp
public int width
```

Width of this element in pixels.

### x {#f-cuttheropedx-framework-visual-baseelement-x}

```csharp
public float x
```

Local X position relative to the parent.

### y {#f-cuttheropedx-framework-visual-baseelement-y}

```csharp
public float y
```

Local Y position relative to the parent.

## Properties

### HasParent {#p-cuttheropedx-framework-visual-baseelement-hasparent}

```csharp
public bool HasParent { get; }
```

`true` if this element has a parent in the scene graph.

## Methods

### AddChild(BaseElement c) {#m-cuttheropedx-framework-visual-baseelement-addchild-cuttheropedx-framework-visual-baseelement}

```csharp
public virtual int AddChild(BaseElement c)
```

Adds a child element and returns its assigned ID.

Parameters:

- `c`: Child element to add.

Returns: The slot ID assigned to the child.

### AddChildwithID(BaseElement c, int i) {#m-cuttheropedx-framework-visual-baseelement-addchildwithid-cuttheropedx-framework-visual-baseelement-system-int32}

```csharp
public virtual int AddChildwithID(BaseElement c, int i)
```

Adds a child element at the specified ID slot, disposing any existing child at that slot.

Parameters:

- `c`: Child element to add.
- `i`: Slot ID, or -1 to auto-assign.

Returns: The slot ID at which the child was inserted.

### AddTimeline(Timeline t) {#m-cuttheropedx-framework-visual-baseelement-addtimeline-cuttheropedx-framework-visual-timeline}

```csharp
public virtual int AddTimeline(Timeline t)
```

Adds a timeline and returns its auto-assigned ID.

Parameters:

- `t`: Timeline to add.

Returns: The slot ID assigned to the timeline.

### AddTimelinewithID(Timeline t, int i) {#m-cuttheropedx-framework-visual-baseelement-addtimelinewithid-cuttheropedx-framework-visual-timeline-system-int32}

```csharp
public virtual void AddTimelinewithID(Timeline t, int i)
```

Adds a timeline at the specified ID slot.

Parameters:

- `t`: Timeline to add.
- `i`: Slot ID to assign.

### AnchorHas(int f) {#m-cuttheropedx-framework-visual-baseelement-anchorhas-system-int32}

```csharp
public bool AnchorHas(int f)
```

Returns `true` if `f` is set in the element's anchor flags.

Parameters:

- `f`: Anchor flag bitmask to test.

Returns: `true` if any of the bits in `f` are set in [anchor](#f-cuttheropedx-framework-visual-baseelement-anchor).

### CalculateTopLeft(BaseElement e) {#m-cuttheropedx-framework-visual-baseelement-calculatetopleft-cuttheropedx-framework-visual-baseelement}

```csharp
public static void CalculateTopLeft(BaseElement e)
```

Computes [drawX](#f-cuttheropedx-framework-visual-baseelement-drawx)/[drawY](#f-cuttheropedx-framework-visual-baseelement-drawy) for `e` based on its anchor, parent-anchor, and parent position.

Parameters:

- `e`: Element to compute draw position for.

### ChildsCount() {#m-cuttheropedx-framework-visual-baseelement-childscount}

```csharp
public virtual int ChildsCount()
```

Returns the number of children.

Returns: The number of children currently attached to this element.

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-baseelement-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-framework-visual-baseelement-draw}

```csharp
public virtual void Draw()
```

Draws this element by calling [PreDraw](#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](#m-cuttheropedx-framework-visual-baseelement-postdraw).

### GetChild(int i) {#m-cuttheropedx-framework-visual-baseelement-getchild-system-int32}

```csharp
public virtual BaseElement GetChild(int i)
```

Returns the child at slot `i`, or `null`.

Parameters:

- `i`: Slot ID to look up.

Returns: The child at the slot, or `null` if no child exists there.

### GetChildId(BaseElement c) {#m-cuttheropedx-framework-visual-baseelement-getchildid-cuttheropedx-framework-visual-baseelement}

```csharp
public virtual int GetChildId(BaseElement c)
```

Returns the slot ID of the specified child, or -1 if not found.

Parameters:

- `c`: Child element to find.

Returns: The slot ID of `c`, or -1 if it is not a child.

### GetChildWithName(string n) {#m-cuttheropedx-framework-visual-baseelement-getchildwithname-system-string}

```csharp
public BaseElement GetChildWithName(string n)
```

Recursively searches for a child element with the given name.

Parameters:

- `n`: Name to search for.

Returns: The first matching child, or `null` if no match is found.

### GetChilds() {#m-cuttheropedx-framework-visual-baseelement-getchilds}

```csharp
public virtual Dictionary<int, BaseElement> GetChilds()
```

Returns the children dictionary.

Returns: The dictionary mapping slot IDs to child elements.

### GetCurrentTimeline() {#m-cuttheropedx-framework-visual-baseelement-getcurrenttimeline}

```csharp
public virtual Timeline GetCurrentTimeline()
```

Returns the currently active timeline, or `null`.

Returns: The currently active timeline, or `null` if none is playing.

### GetCurrentTimelineIndex() {#m-cuttheropedx-framework-visual-baseelement-getcurrenttimelineindex}

```csharp
public int GetCurrentTimelineIndex()
```

Returns the ID of the currently active timeline, or -1.

Returns: The slot ID of the active timeline, or -1 if none is playing.

### GetTimeline(int n) {#m-cuttheropedx-framework-visual-baseelement-gettimeline-system-int32}

```csharp
public virtual Timeline GetTimeline(int n)
```

Returns the timeline at slot `n`, or `null`.

Parameters:

- `n`: Slot ID to look up.

Returns: The timeline at the slot, or `null` if no timeline exists there.

### HandleAction(ActionData a) {#m-cuttheropedx-framework-visual-baseelement-handleaction-cuttheropedx-framework-visual-actiondata}

```csharp
public virtual bool HandleAction(ActionData a)
```

Handles a timeline action. Returns `true` if the action was recognized.

Parameters:

- `a`: Action data to process.

Returns: `true` if the action was recognized and handled.

### Hide() {#m-cuttheropedx-framework-visual-baseelement-hide}

```csharp
public virtual void Hide()
```

Recursively hides all visible children.

### IsEnabled() {#m-cuttheropedx-framework-visual-baseelement-isenabled}

```csharp
public bool IsEnabled()
```

Returns `true` if visible, touchable, and updateable are all `true`.

Returns: `true` if the element is fully enabled.

### OnTouchDownXY(float tx, float ty) {#m-cuttheropedx-framework-visual-baseelement-ontouchdownxy-system-single-system-single}

```csharp
public virtual bool OnTouchDownXY(float tx, float ty)
```

Dispatches a touch-down event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchMoveXY(float tx, float ty) {#m-cuttheropedx-framework-visual-baseelement-ontouchmovexy-system-single-system-single}

```csharp
public virtual bool OnTouchMoveXY(float tx, float ty)
```

Dispatches a touch-move event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchUpXY(float tx, float ty) {#m-cuttheropedx-framework-visual-baseelement-ontouchupxy-system-single-system-single}

```csharp
public virtual bool OnTouchUpXY(float tx, float ty)
```

Dispatches a touch-up event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### ParentAnchorHas(int f) {#m-cuttheropedx-framework-visual-baseelement-parentanchorhas-system-int32}

```csharp
public bool ParentAnchorHas(int f)
```

Returns `true` if `f` is set in the parent-anchor flags.

Parameters:

- `f`: Parent-anchor flag bitmask to test.

Returns: `true` if any of the bits in `f` are set in [parentAnchor](#f-cuttheropedx-framework-visual-baseelement-parentanchor).

### PauseCurrentTimeline() {#m-cuttheropedx-framework-visual-baseelement-pausecurrenttimeline}

```csharp
public virtual void PauseCurrentTimeline()
```

Pauses the currently playing timeline.

### PlayTimeline(int t) {#m-cuttheropedx-framework-visual-baseelement-playtimeline-system-int32}

```csharp
public virtual void PlayTimeline(int t)
```

Starts playback of the timeline at slot `t`, stopping any active timeline.

Parameters:

- `t`: Slot ID of the timeline to play.

### PostDraw() {#m-cuttheropedx-framework-visual-baseelement-postdraw}

```csharp
public virtual void PostDraw()
```

Draws visible children and restores transforms/color.

### PreDraw() {#m-cuttheropedx-framework-visual-baseelement-predraw}

```csharp
public virtual void PreDraw()
```

Applies transforms, color, and blending before drawing.

### RemoveAllChilds() {#m-cuttheropedx-framework-visual-baseelement-removeallchilds}

```csharp
public void RemoveAllChilds()
```

Removes all children without disposing them.

### RemoveChild(BaseElement c) {#m-cuttheropedx-framework-visual-baseelement-removechild-cuttheropedx-framework-visual-baseelement}

```csharp
public virtual void RemoveChild(BaseElement c)
```

Removes the specified child element by reference.

Parameters:

- `c`: Child element to remove.

### RemoveChildWithID(int i) {#m-cuttheropedx-framework-visual-baseelement-removechildwithid-system-int32}

```csharp
public virtual void RemoveChildWithID(int i)
```

Removes the child at slot `i` without disposing it.

Parameters:

- `i`: Slot ID of the child to remove.

### RemoveTimeline(int i) {#m-cuttheropedx-framework-visual-baseelement-removetimeline-system-int32}

```csharp
public virtual void RemoveTimeline(int i)
```

Removes the timeline at slot `i`, stopping it if active.

Parameters:

- `i`: Slot ID of the timeline to remove.

### RestoreColor(BaseElement t) {#m-cuttheropedx-framework-visual-baseelement-restorecolor-cuttheropedx-framework-visual-baseelement}

```csharp
protected static void RestoreColor(BaseElement t)
```

Resets the renderer color to solid opaque if `t` has a custom color.

Parameters:

- `t`: Element whose color to restore.

### RestoreTransformations(BaseElement t) {#m-cuttheropedx-framework-visual-baseelement-restoretransformations-cuttheropedx-framework-visual-baseelement}

```csharp
protected static void RestoreTransformations(BaseElement t)
```

Pops the matrix stack if any transforms were applied to `t`.

Parameters:

- `t`: Element whose transforms to restore.

### SetEnabled(bool e) {#m-cuttheropedx-framework-visual-baseelement-setenabled-system-boolean}

```csharp
public void SetEnabled(bool e)
```

Sets visible, touchable, and updateable to `e`.

Parameters:

- `e`: Whether to enable or disable.

### SetName(string n) {#m-cuttheropedx-framework-visual-baseelement-setname-system-string}

```csharp
public void SetName(string n)
```

Sets the element's name used by [GetChildWithName](#m-cuttheropedx-framework-visual-baseelement-getchildwithname-system-string).

Parameters:

- `n`: Name to assign.

### SetSizeToChildsBounds() {#m-cuttheropedx-framework-visual-baseelement-setsizetochildsbounds}

```csharp
public void SetSizeToChildsBounds()
```

Expands this element's size to encompass all children.

### Show() {#m-cuttheropedx-framework-visual-baseelement-show}

```csharp
public virtual void Show()
```

Recursively shows all visible children.

### StopCurrentTimeline() {#m-cuttheropedx-framework-visual-baseelement-stopcurrenttimeline}

```csharp
public virtual void StopCurrentTimeline()
```

Stops the currently playing timeline and clears it.

### Update(float delta) {#m-cuttheropedx-framework-visual-baseelement-update-system-single}

```csharp
public virtual void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


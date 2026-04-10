---
title: Class ScrollableContainer
description: A BaseElement that provides scrollable, clipped content with touch-based drag, inertia, bounce, and scroll-point snapping.
---

# Class ScrollableContainer

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `ScrollableContainer.cs`

A [BaseElement](BaseElement.md) that provides scrollable, clipped content with touch-based drag, inertia, bounce, and scroll-point snapping.

## Declaration

```csharp
internal sealed class ScrollableContainer : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [ScrollableContainer](ScrollableContainer.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### canSkipScrollPoints {#f-cuttheropedx-framework-visual-scrollablecontainer-canskipscrollpoints}

```csharp
private bool canSkipScrollPoints
```

Whether snap selection may skip intermediate scroll points instead of moving point-by-point.

### container {#f-cuttheropedx-framework-visual-scrollablecontainer-container}

```csharp
private BaseElement container
```

Root content element that is clipped and translated during scrolling.

### delegateScrollableContainerProtocol {#f-cuttheropedx-framework-visual-scrollablecontainer-delegatescrollablecontainerprotocol}

```csharp
public IScrollableContainerProtocol delegateScrollableContainerProtocol
```

Receives notifications when the active target or reached scroll point changes.

### dontHandleTouchDownsHandledByChilds {#f-cuttheropedx-framework-visual-scrollablecontainer-donthandletouchdownshandledbychilds}

```csharp
public bool dontHandleTouchDownsHandledByChilds
```

Whether the container stops processing touch-down events already handled by a child.

### dontHandleTouchMovesHandledByChilds {#f-cuttheropedx-framework-visual-scrollablecontainer-donthandletouchmoveshandledbychilds}

```csharp
public bool dontHandleTouchMovesHandledByChilds
```

Whether the container stops processing touch-move events already handled by a child.

### dontHandleTouchUpsHandledByChilds {#f-cuttheropedx-framework-visual-scrollablecontainer-donthandletouchupshandledbychilds}

```csharp
public bool dontHandleTouchUpsHandledByChilds
```

Whether the container stops processing touch-up events already handled by a child.

### dragStart {#f-cuttheropedx-framework-visual-scrollablecontainer-dragstart}

```csharp
private Vector dragStart
```

Last touch position used to measure incremental drag movement.

### impossibleTouch {#f-cuttheropedx-framework-visual-scrollablecontainer-impossibletouch}

```csharp
private static readonly Vector impossibleTouch
```

Sentinel touch position used to mark the absence of an active drag gesture.

### inertiaTimeout {#f-cuttheropedx-framework-visual-scrollablecontainer-inertiatimeout}

```csharp
private float inertiaTimeout
```

Maximum time after a drag movement during which inertia can still be applied on release.

### inertiaTimeoutLeft {#f-cuttheropedx-framework-visual-scrollablecontainer-inertiatimeoutleft}

```csharp
private float inertiaTimeoutLeft
```

Remaining time window during which drag motion can be converted into inertial movement.

### lastTargetSpoint {#f-cuttheropedx-framework-visual-scrollablecontainer-lasttargetspoint}

```csharp
private int lastTargetSpoint
```

Index of the previously selected snap point.

### maxTouchMoveLength {#f-cuttheropedx-framework-visual-scrollablecontainer-maxtouchmovelength}

```csharp
private float maxTouchMoveLength
```

Maximum per-frame drag delta applied from touch movement before clamping.

### minAutoScrollToSpointLength {#f-cuttheropedx-framework-visual-scrollablecontainer-minautoscrolltospointlength}

```csharp
public float minAutoScrollToSpointLength
```

Minimum release movement length required to choose a snap target from release direction. Use `-1` to disable the directional threshold.

### move {#f-cuttheropedx-framework-visual-scrollablecontainer-move}

```csharp
private Vector move
```

Current scrolling velocity used for inertia and mouse-wheel momentum.

### movingToSpoint {#f-cuttheropedx-framework-visual-scrollablecontainer-movingtospoint}

```csharp
private bool movingToSpoint
```

Whether the container is currently animating toward a snap point.

### passTouches {#f-cuttheropedx-framework-visual-scrollablecontainer-passtouches}

```csharp
public bool passTouches
```

Whether touch events should currently be forwarded to child elements.

### resetScrollOnShow {#f-cuttheropedx-framework-visual-scrollablecontainer-resetscrollonshow}

```csharp
public bool resetScrollOnShow
```

Whether [Show](#m-cuttheropedx-framework-visual-scrollablecontainer-show) resets the scroll offset to the origin.

### savedTouch {#f-cuttheropedx-framework-visual-scrollablecontainer-savedtouch}

```csharp
private Vector savedTouch
```

Cached touch position used when touch delivery to children is deferred.

### shouldBounceHorizontally {#f-cuttheropedx-framework-visual-scrollablecontainer-shouldbouncehorizontally}

```csharp
public bool shouldBounceHorizontally
```

Whether horizontal overscroll is allowed and springs back after release.

### shouldBounceVertically {#f-cuttheropedx-framework-visual-scrollablecontainer-shouldbouncevertically}

```csharp
public bool shouldBounceVertically
```

Whether vertical overscroll is allowed and springs back after release.

### spointMoveMultiplier {#f-cuttheropedx-framework-visual-scrollablecontainer-spointmovemultiplier}

```csharp
private float spointMoveMultiplier
```

Speed multiplier applied while animating toward the selected snap point.

### spoints {#f-cuttheropedx-framework-visual-scrollablecontainer-spoints}

```csharp
private Vector[] spoints
```

Stored snap-point container offsets.

### spointsCapacity {#f-cuttheropedx-framework-visual-scrollablecontainer-spointscapacity}

```csharp
private int spointsCapacity
```

Allocated capacity of the snap-point storage array.

### spointsNum {#f-cuttheropedx-framework-visual-scrollablecontainer-spointsnum}

```csharp
private int spointsNum
```

Number of snap points currently registered in [spoints](#f-cuttheropedx-framework-visual-scrollablecontainer-spoints).

### staticMove {#f-cuttheropedx-framework-visual-scrollablecontainer-staticmove}

```csharp
private Vector staticMove
```

Most recent drag displacement, reused to seed inertial scrolling on release.

### targetPoint {#f-cuttheropedx-framework-visual-scrollablecontainer-targetpoint}

```csharp
private Vector targetPoint
```

Most recent explicit movement target used by helper movement routines.

### targetSpoint {#f-cuttheropedx-framework-visual-scrollablecontainer-targetspoint}

```csharp
private int targetSpoint
```

Index of the current snap-point target, or `-1` when no target is active.

### totalDrag {#f-cuttheropedx-framework-visual-scrollablecontainer-totaldrag}

```csharp
private Vector totalDrag
```

Total drag distance accumulated during the current gesture.

### touchMoveIgnoreLength {#f-cuttheropedx-framework-visual-scrollablecontainer-touchmoveignorelength}

```csharp
public float touchMoveIgnoreLength
```

Drag distance required before pending child touches are cancelled and scrolling takes control.

### touchPassTimeout {#f-cuttheropedx-framework-visual-scrollablecontainer-touchpasstimeout}

```csharp
private float touchPassTimeout
```

Delay before touch events are passed through to child elements.

### touchReleaseTimer {#f-cuttheropedx-framework-visual-scrollablecontainer-touchreleasetimer}

```csharp
private float touchReleaseTimer
```

Delay before a deferred child touch-up event is replayed.

### touchState {#f-cuttheropedx-framework-visual-scrollablecontainer-touchstate}

```csharp
private ScrollableContainer.TOUCH_STATE touchState
```

Current touch interaction phase for the container.

### touchTimer {#f-cuttheropedx-framework-visual-scrollablecontainer-touchtimer}

```csharp
public float touchTimer
```

Remaining delay before touch input is forwarded to child elements.

### untouchChildsOnMove {#f-cuttheropedx-framework-visual-scrollablecontainer-untouchchildsonmove}

```csharp
private bool untouchChildsOnMove
```

Whether dragging should explicitly cancel touches already delivered to children.

## Methods

### AddChild(BaseElement c) {#m-cuttheropedx-framework-visual-scrollablecontainer-addchild-cuttheropedx-framework-visual-baseelement}

```csharp
public override int AddChild(BaseElement c)
```

Adds a child element and returns its assigned ID.

Parameters:

- `c`: Child element to add.

Returns: The slot ID assigned to the child.

### AddChildwithID(BaseElement c, int i) {#m-cuttheropedx-framework-visual-scrollablecontainer-addchildwithid-cuttheropedx-framework-visual-baseelement-system-int32}

```csharp
public override int AddChildwithID(BaseElement c, int i)
```

Adds a child element at the specified ID slot, disposing any existing child at that slot.

Parameters:

- `c`: Child element to add.
- `i`: Slot ID, or -1 to auto-assign.

Returns: The slot ID at which the child was inserted.

### AddScrollPointAtXY(float sx, float sy) {#m-cuttheropedx-framework-visual-scrollablecontainer-addscrollpointatxy-system-single-system-single}

```csharp
public int AddScrollPointAtXY(float sx, float sy)
```

Adds a scroll point using logical scroll coordinates.

Parameters:

- `sx`: Horizontal scroll position associated with the point.
- `sy`: Vertical scroll position associated with the point.

Returns: The index assigned to the new scroll point.

### AddScrollPointAtXYwithID(float sx, float sy, int i) {#m-cuttheropedx-framework-visual-scrollablecontainer-addscrollpointatxywithid-system-single-system-single-system-int32}

```csharp
public void AddScrollPointAtXYwithID(float sx, float sy, int i)
```

Stores a scroll point at the specified index.

Parameters:

- `sx`: Horizontal scroll position associated with the point.
- `sy`: Vertical scroll position associated with the point.
- `i`: Target scroll point index.

### CalculateNearsetScrollPointInDirection(Vector d) {#m-cuttheropedx-framework-visual-scrollablecontainer-calculatenearsetscrollpointindirection-cuttheropedx-framework-core-vector}

```csharp
public void CalculateNearsetScrollPointInDirection(Vector d)
```

Selects the nearest valid scroll point, preferring points that lie in the supplied direction. Updates the target scroll-point state and delegate notifications.

Parameters:

- `d`: Preferred movement direction. Use `vectZero` to ignore direction.

### ChildsCount() {#m-cuttheropedx-framework-visual-scrollablecontainer-childscount}

```csharp
public override int ChildsCount()
```

Returns the number of children.

Returns: The number of children currently attached to this element.

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-scrollablecontainer-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-framework-visual-scrollablecontainer-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### GetChild(int i) {#m-cuttheropedx-framework-visual-scrollablecontainer-getchild-system-int32}

```csharp
public override BaseElement GetChild(int i)
```

Returns the child at slot `i`, or `null`.

Parameters:

- `i`: Slot ID to look up.

Returns: The child at the slot, or `null` if no child exists there.

### GetMaxScroll() {#m-cuttheropedx-framework-visual-scrollablecontainer-getmaxscroll}

```csharp
public Vector GetMaxScroll()
```

Returns the maximum logical scroll offset allowed by the current content size.

Returns: Maximum horizontal and vertical scroll offset.

### GetScroll() {#m-cuttheropedx-framework-visual-scrollablecontainer-getscroll}

```csharp
public Vector GetScroll()
```

Returns the current logical scroll offset.

Returns: Current horizontal and vertical scroll offset.

### GetScrollPoint(int i) {#m-cuttheropedx-framework-visual-scrollablecontainer-getscrollpoint-system-int32}

```csharp
public Vector GetScrollPoint(int i)
```

Returns the stored container offset for the specified scroll point.

Parameters:

- `i`: Scroll point index.

Returns: Container offset used when snapping to the scroll point.

### GetTotalScrollPoints() {#m-cuttheropedx-framework-visual-scrollablecontainer-gettotalscrollpoints}

```csharp
public int GetTotalScrollPoints()
```

Returns the number of registered scroll points.

Returns: Total registered scroll points.

### HandleMouseWheel(int scrollDelta) {#m-cuttheropedx-framework-visual-scrollablecontainer-handlemousewheel-system-int32}

```csharp
public void HandleMouseWheel(int scrollDelta)
```

Provides smooth, momentum-based scrolling in response to mouse wheel input.

Parameters:

- `scrollDelta`: The mouse wheel delta value. Positive values scroll up (content moves down), negative values scroll down (content moves up).

### InitWithWidthHeightContainer(float w, float h, BaseElement c) {#m-cuttheropedx-framework-visual-scrollablecontainer-initwithwidthheightcontainer-system-single-system-single-cuttheropedx-framework-visual-baseelement}

```csharp
public ScrollableContainer InitWithWidthHeightContainer(float w, float h, BaseElement c)
```

Initializes the container with the specified viewport size and content element. Resets scroll-point state, touch handling, and scrolling behavior to defaults.

Parameters:

- `w`: Viewport width.
- `h`: Viewport height.
- `c`: Content element that will be clipped and scrolled inside the viewport.

Returns: The initialized container instance.

### InitWithWidthHeightContainerWidthHeight(float w, float h, float cw, float ch) {#m-cuttheropedx-framework-visual-scrollablecontainer-initwithwidthheightcontainerwidthheight-system-single-system-single-system-single-system-single}

```csharp
public ScrollableContainer InitWithWidthHeightContainerWidthHeight(float w, float h, float cw, float ch)
```

Initializes the container with an empty content element sized to the specified content bounds.

Parameters:

- `w`: Viewport width.
- `h`: Viewport height.
- `cw`: Scrollable content width.
- `ch`: Scrollable content height.

Returns: The initialized container instance.

### MoveContainerBy(Vector off) {#m-cuttheropedx-framework-visual-scrollablecontainer-movecontainerby-cuttheropedx-framework-core-vector}

```csharp
public Vector MoveContainerBy(Vector off)
```

Moves the content container by the requested offset, clamping to bounds unless bounce is enabled.

Parameters:

- `off`: Requested movement offset in container space.

Returns: The actual applied movement after bounds checks.

### MoveToPointDeltaSpeed(Vector tsp, float delta, float speed) {#m-cuttheropedx-framework-visual-scrollablecontainer-movetopointdeltaspeed-cuttheropedx-framework-core-vector-system-single-system-single}

```csharp
public void MoveToPointDeltaSpeed(Vector tsp, float delta, float speed)
```

Advances the content container toward a target position at the provided `speed` for the current frame.

Parameters:

- `tsp`: Target position in container space.
- `delta`: Elapsed frame time in seconds.
- `speed`: Movement speed applied toward the target.

### MoveToScrollPointmoveMultiplier(int sp, float m) {#m-cuttheropedx-framework-visual-scrollablecontainer-movetoscrollpointmovemultiplier-system-int32-system-single}

```csharp
public void MoveToScrollPointmoveMultiplier(int sp, float m)
```

Starts animating toward the specified scroll point.

Parameters:

- `sp`: Target scroll point index.
- `m`: Speed multiplier applied while moving toward the point.

### OnTouchDownXY(float tx, float ty) {#m-cuttheropedx-framework-visual-scrollablecontainer-ontouchdownxy-system-single-system-single}

```csharp
public override bool OnTouchDownXY(float tx, float ty)
```

Dispatches a touch-down event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchMoveXY(float tx, float ty) {#m-cuttheropedx-framework-visual-scrollablecontainer-ontouchmovexy-system-single-system-single}

```csharp
public override bool OnTouchMoveXY(float tx, float ty)
```

Dispatches a touch-move event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchUpXY(float tx, float ty) {#m-cuttheropedx-framework-visual-scrollablecontainer-ontouchupxy-system-single-system-single}

```csharp
public override bool OnTouchUpXY(float tx, float ty)
```

Dispatches a touch-up event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### PlaceToScrollPoint(int sp) {#m-cuttheropedx-framework-visual-scrollablecontainer-placetoscrollpoint-system-int32}

```csharp
public void PlaceToScrollPoint(int sp)
```

Jumps directly to the specified scroll point and notifies the delegate that it was reached.

Parameters:

- `sp`: Scroll point index.

### PostDraw() {#m-cuttheropedx-framework-visual-scrollablecontainer-postdraw}

```csharp
public override void PostDraw()
```

Draws visible children and restores transforms/color.

### ProvideScrollPosMaxScrollPosScrollCoeff(ref Vector sp, ref Vector mp, ref Vector sc) {#m-cuttheropedx-framework-visual-scrollablecontainer-providescrollposmaxscrollposscrollcoeff-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector-cuttheropedx-framework-core-vector}

```csharp
public void ProvideScrollPosMaxScrollPosScrollCoeff(ref Vector sp, ref Vector mp, ref Vector sc)
```

Outputs the current scroll position, maximum scroll position, and scroll coefficients.

Parameters:

- `sp`: Receives the current scroll position.
- `mp`: Receives the maximum scroll position.
- `sc`: Receives the scroll coefficients (container/viewport ratio).

### RemoveChild(BaseElement c) {#m-cuttheropedx-framework-visual-scrollablecontainer-removechild-cuttheropedx-framework-visual-baseelement}

```csharp
public override void RemoveChild(BaseElement c)
```

Removes the specified child element by reference.

Parameters:

- `c`: Child element to remove.

### RemoveChildWithID(int i) {#m-cuttheropedx-framework-visual-scrollablecontainer-removechildwithid-system-int32}

```csharp
public override void RemoveChildWithID(int i)
```

Removes the child at slot `i` without disposing it.

Parameters:

- `i`: Slot ID of the child to remove.

### SetScroll(Vector s) {#m-cuttheropedx-framework-visual-scrollablecontainer-setscroll-cuttheropedx-framework-core-vector}

```csharp
public void SetScroll(Vector s)
```

Sets the current scroll offset immediately and cancels inertial or snap-to-point movement.

Parameters:

- `s`: Logical scroll offset to apply.

### Show() {#m-cuttheropedx-framework-visual-scrollablecontainer-show}

```csharp
public override void Show()
```

Recursively shows all visible children.

### StartMovingToSpointInDirection(Vector d) {#m-cuttheropedx-framework-visual-scrollablecontainer-startmovingtospointindirection-cuttheropedx-framework-core-vector}

```csharp
public void StartMovingToSpointInDirection(Vector d)
```

Starts snap-to-point movement by selecting the nearest scroll point in the supplied direction.

Parameters:

- `d`: Preferred movement direction used to choose a scroll point.

### TurnScrollPointsOnWithCapacity(int n) {#m-cuttheropedx-framework-visual-scrollablecontainer-turnscrollpointsonwithcapacity-system-int32}

```csharp
public void TurnScrollPointsOnWithCapacity(int n)
```

Enables scroll-point support and allocates storage for up to `n` points.

Parameters:

- `n`: Maximum number of scroll points to store.

### Update(float delta) {#m-cuttheropedx-framework-visual-scrollablecontainer-update-system-single}

```csharp
public override void Update(float delta)
```

Updates children and advances the current timeline by `delta` seconds.

Parameters:

- `delta`: Elapsed time in seconds.


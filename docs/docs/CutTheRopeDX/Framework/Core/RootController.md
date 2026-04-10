---
title: Class RootController
description: Top-level controller that owns the currently active controller, routes input, and manages screen-transition capture/drawing.
---

# Class RootController

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `RootController.cs`

Top-level controller that owns the currently active controller, routes input, and manages screen-transition capture/drawing.

## Declaration

```csharp
internal class RootController : ViewController
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [ViewController](ViewController.md)
- [RootController](RootController.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITouchDelegate](../Visual/ITouchDelegate.md)

## Derived

- [CTRRootController](../../GameMain/CTRRootController.md)

## Constructors

### RootController(ViewController parent) {#m-cuttheropedx-framework-core-rootcontroller-ctor-cuttheropedx-framework-core-viewcontroller}

```csharp
public RootController(ViewController parent)
```

Top-level controller that owns the currently active controller, routes input, and manages screen-transition capture/drawing.

Parameters:

- `parent`: Parent controller reference passed to the base controller.

## Fields

### TRANSITIONS_COUNT {#f-cuttheropedx-framework-core-rootcontroller-transitions-count}

```csharp
public const int TRANSITIONS_COUNT
```

Total number of transition identifiers.

### TRANSITION_DEFAULT_DELAY {#f-cuttheropedx-framework-core-rootcontroller-transition-default-delay}

```csharp
public const float TRANSITION_DEFAULT_DELAY
```

Default transition duration in seconds.

### TRANSITION_FADE_OUT_BLACK {#f-cuttheropedx-framework-core-rootcontroller-transition-fade-out-black}

```csharp
public const int TRANSITION_FADE_OUT_BLACK
```

Fade-out transition using a black overlay.

### TRANSITION_FADE_OUT_WHITE {#f-cuttheropedx-framework-core-rootcontroller-transition-fade-out-white}

```csharp
public const int TRANSITION_FADE_OUT_WHITE
```

Fade-out transition using a white overlay.

### TRANSITION_REVEAL {#f-cuttheropedx-framework-core-rootcontroller-transition-reveal}

```csharp
public const int TRANSITION_REVEAL
```

Reveal transition identifier.

### TRANSITION_SLIDE_HORIZONTAL_LEFT {#f-cuttheropedx-framework-core-rootcontroller-transition-slide-horizontal-left}

```csharp
public const int TRANSITION_SLIDE_HORIZONTAL_LEFT
```

Horizontal slide transition entering from the left.

### TRANSITION_SLIDE_HORIZONTAL_RIGHT {#f-cuttheropedx-framework-core-rootcontroller-transition-slide-horizontal-right}

```csharp
public const int TRANSITION_SLIDE_HORIZONTAL_RIGHT
```

Horizontal slide transition entering from the right.

### TRANSITION_SLIDE_VERTICAL_DON {#f-cuttheropedx-framework-core-rootcontroller-transition-slide-vertical-don}

```csharp
public const int TRANSITION_SLIDE_VERTICAL_DON
```

Vertical slide transition moving downward.

### TRANSITION_SLIDE_VERTICAL_UP {#f-cuttheropedx-framework-core-rootcontroller-transition-slide-vertical-up}

```csharp
public const int TRANSITION_SLIDE_VERTICAL_UP
```

Vertical slide transition moving upward.

### currentController {#f-cuttheropedx-framework-core-rootcontroller-currentcontroller}

```csharp
private ViewController currentController
```

Controller currently receiving routed updates and input.

### deactivateCurrentController {#f-cuttheropedx-framework-core-rootcontroller-deactivatecurrentcontroller}

```csharp
private bool deactivateCurrentController
```

Whether the current controller should be deactivated on the next tick.

### lastTime {#f-cuttheropedx-framework-core-rootcontroller-lasttime}

```csharp
private float lastTime
```

Accumulated root-controller time in seconds.

### nextScreenImage {#f-cuttheropedx-framework-core-rootcontroller-nextscreenimage}

```csharp
private CTRTexture2D nextScreenImage
```

Captured image of the next view during transitions.

### prevScreenImage {#f-cuttheropedx-framework-core-rootcontroller-prevscreenimage}

```csharp
private CTRTexture2D prevScreenImage
```

Captured image of the previous view during transitions.

### previousView {#f-cuttheropedx-framework-core-rootcontroller-previousview}

```csharp
private View previousView
```

Last view hidden by the root controller, used for transition capture.

### suspended {#f-cuttheropedx-framework-core-rootcontroller-suspended}

```csharp
public bool suspended
```

Whether the root controller is suspended.

### transitionDelay {#f-cuttheropedx-framework-core-rootcontroller-transitiondelay}

```csharp
private readonly float transitionDelay
```

Duration of each transition in seconds.

### transitionTime {#f-cuttheropedx-framework-core-rootcontroller-transitiontime}

```csharp
public float transitionTime
```

Absolute time when the current transition should finish, or `-1` when inactive.

### viewTransition {#f-cuttheropedx-framework-core-rootcontroller-viewtransition}

```csharp
public int viewTransition
```

Currently selected transition type, or `-1` when transitions are disabled.

## Methods

### Activate() {#m-cuttheropedx-framework-core-rootcontroller-activate}

```csharp
public override void Activate()
```

Activates the controller and notifies the root controller.

### ApplyLandscape() {#m-cuttheropedx-framework-core-rootcontroller-applylandscape}

```csharp
private static void ApplyLandscape()
```

Applies any renderer transforms required for landscape orientation. Retained as a compatibility hook.

### BackButtonPressed() {#m-cuttheropedx-framework-core-rootcontroller-backbuttonpressed}

```csharp
public override bool BackButtonPressed()
```

Handles a back-button press.

Returns: Always `false`.

### DrawViewTransition() {#m-cuttheropedx-framework-core-rootcontroller-drawviewtransition}

```csharp
private void DrawViewTransition()
```

Draws the current transition frame using the captured previous and next view images.

### FullscreenToggled(bool isFullscreen) {#m-cuttheropedx-framework-core-rootcontroller-fullscreentoggled-system-boolean}

```csharp
public override void FullscreenToggled(bool isFullscreen)
```

Notifies the controller that fullscreen state changed.

Parameters:

- `isFullscreen`: New fullscreen state.

### GetCurrentController() {#m-cuttheropedx-framework-core-rootcontroller-getcurrentcontroller}

```csharp
public virtual ViewController GetCurrentController()
```

Returns the controller that currently receives routed updates and input.

Returns: Current controller, or `null` if none is active.

### HandleMouseWheel(int scrollDelta) {#m-cuttheropedx-framework-core-rootcontroller-handlemousewheel-system-int32}

```csharp
public override bool HandleMouseWheel(int scrollDelta)
```

Handles mouse wheel scrolling input for the controller.

Parameters:

- `scrollDelta`: The mouse wheel scroll delta. Positive values indicate scrolling up (away from user), negative values indicate scrolling down (toward user).

Returns: `true` if the scroll input was handled by this controller or its active view, `false` otherwise.

### IsSuspended() {#m-cuttheropedx-framework-core-rootcontroller-issuspended}

```csharp
public virtual bool IsSuspended()
```

Returns whether the root controller is currently suspended.

Returns: `true` if suspended; otherwise `false`.

### IsTransitionActive() {#m-cuttheropedx-framework-core-rootcontroller-istransitionactive}

```csharp
public bool IsTransitionActive()
```

Returns whether a view transition is currently in progress.

Returns: `true` if a transition is active; otherwise `false`.

### MenuButtonPressed() {#m-cuttheropedx-framework-core-rootcontroller-menubuttonpressed}

```csharp
public override bool MenuButtonPressed()
```

Handles a menu-button press.

Returns: Always `false`.

### MouseMoved(float x, float y) {#m-cuttheropedx-framework-core-rootcontroller-mousemoved-system-single-system-single}

```csharp
public override bool MouseMoved(float x, float y)
```

Handles mouse-move input.

Parameters:

- `x`: Mouse X coordinate.
- `y`: Mouse Y coordinate.

Returns: Always `false`.

### OnControllerActivated(ViewController controller) {#m-cuttheropedx-framework-core-rootcontroller-oncontrolleractivated-cuttheropedx-framework-core-viewcontroller}

```csharp
public virtual void OnControllerActivated(ViewController controller)
```

Called when a `controller` becomes active and should become the current routed controller.

Parameters:

- `controller`: Controller that was activated.

### OnControllerDeactivated(ViewController controller) {#m-cuttheropedx-framework-core-rootcontroller-oncontrollerdeactivated-cuttheropedx-framework-core-viewcontroller}

```csharp
public virtual void OnControllerDeactivated(ViewController controller)
```

Called when a `controller` has deactivated and should no longer receive routed input.

Parameters:

- `controller`: Controller that was deactivated.

### OnControllerDeactivationRequest(ViewController controller) {#m-cuttheropedx-framework-core-rootcontroller-oncontrollerdeactivationrequest-cuttheropedx-framework-core-viewcontroller}

```csharp
public virtual void OnControllerDeactivationRequest(ViewController controller)
```

Marks the current `controller` for deferred deactivation on the next tick.

Parameters:

- `controller`: Controller requesting deactivation.

### OnControllerPaused(ViewController controller) {#m-cuttheropedx-framework-core-rootcontroller-oncontrollerpaused-cuttheropedx-framework-core-viewcontroller}

```csharp
public virtual void OnControllerPaused(ViewController controller)
```

Called when a `controller` pauses and should temporarily stop receiving routed input.

Parameters:

- `controller`: Controller that was paused.

### OnControllerUnpaused(ViewController controller) {#m-cuttheropedx-framework-core-rootcontroller-oncontrollerunpaused-cuttheropedx-framework-core-viewcontroller}

```csharp
public virtual void OnControllerUnpaused(ViewController controller)
```

Called when a `controller` resumes and should once again receive routed input.

Parameters:

- `controller`: Controller that was unpaused.

### OnControllerViewHide(View view) {#m-cuttheropedx-framework-core-rootcontroller-oncontrollerviewhide-cuttheropedx-framework-core-view}

```csharp
public virtual void OnControllerViewHide(View view)
```

Called before a controller `view` is hidden. Captures the outgoing `view` image when transitions are enabled.

Parameters:

- `view`: View that is about to be hidden.

### OnControllerViewShow(View view) {#m-cuttheropedx-framework-core-rootcontroller-oncontrollerviewshow-cuttheropedx-framework-core-view}

```csharp
public virtual void OnControllerViewShow(View view)
```

Called before a controller `view` is shown. Captures the incoming `view` image when transitions are enabled.

Parameters:

- `view`: View that is about to be shown.

### PerformDraw() {#m-cuttheropedx-framework-core-rootcontroller-performdraw}

```csharp
public void PerformDraw()
```

Draws the active controller view or the current transition frame.

### PerformTick(float delta) {#m-cuttheropedx-framework-core-rootcontroller-performtick-system-single}

```csharp
public void PerformTick(float delta)
```

Advances the active controller and applies any pending deactivation requests.

Parameters:

- `delta`: Elapsed frame time in seconds.

### Resume() {#m-cuttheropedx-framework-core-rootcontroller-resume}

```csharp
public virtual void Resume()
```

Resumes input routing and other root-controller activity.

### SetCurrentController(ViewController controller) {#m-cuttheropedx-framework-core-rootcontroller-setcurrentcontroller-cuttheropedx-framework-core-viewcontroller}

```csharp
public virtual void SetCurrentController(ViewController controller)
```

Sets the `controller` that currently receives routed updates and input.

Parameters:

- `controller`: Controller to make current, or `null` to clear routing.

### SetViewTransition(int transition) {#m-cuttheropedx-framework-core-rootcontroller-setviewtransition-system-int32}

```csharp
public virtual void SetViewTransition(int transition)
```

Sets the `transition` effect used when switching views.

Parameters:

- `transition`: Transition type constant to use.

### Suspend() {#m-cuttheropedx-framework-core-rootcontroller-suspend}

```csharp
public virtual void Suspend()
```

Suspends input routing and other root-controller activity.

### TouchesBeganwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-core-rootcontroller-touchesbeganwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public override bool TouchesBeganwithEvent(IList<TouchLocation> touches)
```

Forwards the first pressed touch in the collection to the active view.

Parameters:

- `touches`: Touch collection to inspect.

Returns: `true` if the active view handled the touch; otherwise `false`.

### TouchesCancelledwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-core-rootcontroller-touchescancelledwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public override bool TouchesCancelledwithEvent(IList<TouchLocation> touches)
```

Handles touch-cancel notifications.

Parameters:

- `touches`: Cancelled touches.

Returns: Always `false`.

### TouchesEndedwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-core-rootcontroller-touchesendedwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public override bool TouchesEndedwithEvent(IList<TouchLocation> touches)
```

Forwards the first released touch in the collection to the active view.

Parameters:

- `touches`: Touch collection to inspect.

Returns: `true` if the active view handled the touch; otherwise `false`.

### TouchesMovedwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-core-rootcontroller-touchesmovedwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public override bool TouchesMovedwithEvent(IList<TouchLocation> touches)
```

Forwards the first moved touch in the collection to the active view.

Parameters:

- `touches`: Touch collection to inspect.

Returns: `true` if the active view handled the touch; otherwise `false`.


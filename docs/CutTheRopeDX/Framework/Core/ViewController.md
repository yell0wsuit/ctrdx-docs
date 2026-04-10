---
title: Class ViewController
description: Base controller that manages views, child controllers, and input forwarding.
---

# Class ViewController

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `ViewController.cs`

Base controller that manages views, child controllers, and input forwarding.

## Declaration

```csharp
internal class ViewController : FrameworkTypes, ITouchDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [ViewController](ViewController.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITouchDelegate](../Visual/ITouchDelegate.md)

## Derived

- [GameController](../../GameMain/GameController.md)
- [LoadingController](../../GameMain/LoadingController.md)
- [MapPickerController](../../GameMain/MapPickerController.md)
- [MenuController](../../GameMain/MenuController.md)
- [RootController](RootController.md)
- [StartupController](../../GameMain/StartupController.md)

## Constructors

### ViewController() {#m-cuttheropedx-framework-core-viewcontroller-ctor}

```csharp
protected ViewController()
```

Initializes a controller with no parent.

### ViewController(ViewController parent) {#m-cuttheropedx-framework-core-viewcontroller-ctor-cuttheropedx-framework-core-viewcontroller}

```csharp
protected ViewController(ViewController parent)
```

Initializes a controller with the specified `parent` controller.

Parameters:

- `parent`: Parent controller that owns this controller as a child.

## Fields

### FAKE_TOUCH_UP_TO_DEACTIVATE_BUTTONS {#f-cuttheropedx-framework-core-viewcontroller-fake-touch-up-to-deactivate-buttons}

```csharp
public const int FAKE_TOUCH_UP_TO_DEACTIVATE_BUTTONS
```

Sentinel Y coordinate used when sending a fake touch-up to clear pressed buttons.

### activeChildID {#f-cuttheropedx-framework-core-viewcontroller-activechildid}

```csharp
public int activeChildID
```

Identifier of the currently active child controller, or `-1` when none is active.

### activeViewID {#f-cuttheropedx-framework-core-viewcontroller-activeviewid}

```csharp
public int activeViewID
```

Identifier of the currently active view, or `-1` when none is active.

### childs {#f-cuttheropedx-framework-core-viewcontroller-childs}

```csharp
public Dictionary<int, ViewController> childs
```

Registered child controllers keyed by identifier.

### controllerState {#f-cuttheropedx-framework-core-viewcontroller-controllerstate}

```csharp
public ViewController.ControllerState controllerState
```

Current lifecycle state of the controller.

### parent {#f-cuttheropedx-framework-core-viewcontroller-parent}

```csharp
public ViewController parent
```

Parent controller that owns this controller as a child, if any.

### pausedViewID {#f-cuttheropedx-framework-core-viewcontroller-pausedviewid}

```csharp
public int pausedViewID
```

Identifier of the view that was active when the controller was paused.

### views {#f-cuttheropedx-framework-core-viewcontroller-views}

```csharp
public Dictionary<int, View> views
```

Registered views keyed by identifier.

## Methods

### Activate() {#m-cuttheropedx-framework-core-viewcontroller-activate}

```csharp
public virtual void Activate()
```

Activates the controller and notifies the root controller.

### ActivateChild(int n) {#m-cuttheropedx-framework-core-viewcontroller-activatechild-system-int32}

```csharp
public virtual void ActivateChild(int n)
```

Activates the specified child controller after pausing this controller.

Parameters:

- `n`: Child identifier to activate.

### ActiveChild() {#m-cuttheropedx-framework-core-viewcontroller-activechild}

```csharp
public virtual ViewController ActiveChild()
```

Returns the currently active child controller.

Returns: Active child controller.

### ActiveView() {#m-cuttheropedx-framework-core-viewcontroller-activeview}

```csharp
public virtual View ActiveView()
```

Returns the currently active view.

Returns: Active view instance.

### AddChildwithID(ViewController c, int n) {#m-cuttheropedx-framework-core-viewcontroller-addchildwithid-cuttheropedx-framework-core-viewcontroller-system-int32}

```csharp
public virtual void AddChildwithID(ViewController c, int n)
```

Registers a child controller under the specified identifier. Replaces and disposes any different existing child at that identifier.

Parameters:

- `c`: Child controller to register.
- `n`: Child identifier.

### AddViewwithID(View v, int n) {#m-cuttheropedx-framework-core-viewcontroller-addviewwithid-cuttheropedx-framework-core-view-system-int32}

```csharp
public virtual void AddViewwithID(View v, int n)
```

Registers a view under the specified identifier.

Parameters:

- `v`: View to register.
- `n`: View identifier.

### BackButtonPressed() {#m-cuttheropedx-framework-core-viewcontroller-backbuttonpressed}

```csharp
public virtual bool BackButtonPressed()
```

Handles a back-button press.

Returns: Always `false`.

### ConvertTouchForLandscape(Vector t) {#m-cuttheropedx-framework-core-viewcontroller-converttouchforlandscape-cuttheropedx-framework-core-vector}

```csharp
public Vector ConvertTouchForLandscape(Vector t)
```

Converts a touch coordinate for landscape orientation handling.

Parameters:

- `t`: Touch position to convert.

Returns: Converted touch position.

### Deactivate() {#m-cuttheropedx-framework-core-viewcontroller-deactivate}

```csharp
public virtual void Deactivate()
```

Requests deactivation through the root controller.

### DeactivateActiveChild() {#m-cuttheropedx-framework-core-viewcontroller-deactivateactivechild}

```csharp
public virtual void DeactivateActiveChild()
```

Requests deactivation of the currently active child controller.

### DeactivateAllButtons() {#m-cuttheropedx-framework-core-viewcontroller-deactivateallbuttons}

```csharp
public void DeactivateAllButtons()
```

Cancels active button presses on the current view or active child controller.

### DeactivateImmediately() {#m-cuttheropedx-framework-core-viewcontroller-deactivateimmediately}

```csharp
public virtual void DeactivateImmediately()
```

Deactivates the controller immediately, hides the active view, and notifies the parent.

### DeleteChild(int n) {#m-cuttheropedx-framework-core-viewcontroller-deletechild-system-int32}

```csharp
public virtual void DeleteChild(int n)
```

Disposes and removes the child controller registered under the specified identifier.

Parameters:

- `n`: Child identifier.

### DeleteView(int n) {#m-cuttheropedx-framework-core-viewcontroller-deleteview-system-int32}

```csharp
public virtual void DeleteView(int n)
```

Removes the view reference stored under the specified identifier.

Parameters:

- `n`: View identifier.

### Dispose(bool disposing) {#m-cuttheropedx-framework-core-viewcontroller-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### FullscreenToggled(bool isFullscreen) {#m-cuttheropedx-framework-core-viewcontroller-fullscreentoggled-system-boolean}

```csharp
public virtual void FullscreenToggled(bool isFullscreen)
```

Notifies the controller that fullscreen state changed.

Parameters:

- `isFullscreen`: New fullscreen state.

### GetChild(int n) {#m-cuttheropedx-framework-core-viewcontroller-getchild-system-int32}

```csharp
public virtual ViewController GetChild(int n)
```

Returns the child controller registered under the specified identifier.

Parameters:

- `n`: Child identifier.

Returns: Registered child controller.

### GetView(int n) {#m-cuttheropedx-framework-core-viewcontroller-getview-system-int32}

```csharp
public virtual View GetView(int n)
```

Returns the view registered under the specified identifier.

Parameters:

- `n`: View identifier.

Returns: Registered view, or `null` if not found.

### HandleMouseWheel(int scrollDelta) {#m-cuttheropedx-framework-core-viewcontroller-handlemousewheel-system-int32}

```csharp
public virtual bool HandleMouseWheel(int scrollDelta)
```

Handles mouse wheel scrolling input for the controller.

Parameters:

- `scrollDelta`: The mouse wheel scroll delta. Positive values indicate scrolling up (away from user), negative values indicate scrolling down (toward user).

Returns: `true` if the scroll input was handled by this controller or its active view, `false` otherwise.

### HideActiveView() {#m-cuttheropedx-framework-core-viewcontroller-hideactiveview}

```csharp
public virtual void HideActiveView()
```

Hides the currently active view and clears the active view identifier.

### MenuButtonPressed() {#m-cuttheropedx-framework-core-viewcontroller-menubuttonpressed}

```csharp
public virtual bool MenuButtonPressed()
```

Handles a menu-button press.

Returns: Always `false`.

### MouseMoved(float x, float y) {#m-cuttheropedx-framework-core-viewcontroller-mousemoved-system-single-system-single}

```csharp
public virtual bool MouseMoved(float x, float y)
```

Handles mouse-move input.

Parameters:

- `x`: Mouse X coordinate.
- `y`: Mouse Y coordinate.

Returns: Always `false`.

### OnChildDeactivated(int n) {#m-cuttheropedx-framework-core-viewcontroller-onchilddeactivated-system-int32}

```csharp
public virtual void OnChildDeactivated(int n)
```

Called when a child controller has deactivated. The default implementation simply unpauses this controller.

Parameters:

- `n`: Identifier of the child that deactivated.

### Pause() {#m-cuttheropedx-framework-core-viewcontroller-pause}

```csharp
public virtual void Pause()
```

Pauses the controller and hides the active view until unpaused.

### ShowView(int n) {#m-cuttheropedx-framework-core-viewcontroller-showview-system-int32}

```csharp
public virtual void ShowView(int n)
```

Shows the view with the specified identifier, hiding any currently active view first.

Parameters:

- `n`: View identifier to show.

### TouchesBeganwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-core-viewcontroller-touchesbeganwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public virtual bool TouchesBeganwithEvent(IList<TouchLocation> touches)
```

Forwards the first pressed touch in the collection to the active view.

Parameters:

- `touches`: Touch collection to inspect.

Returns: `true` if the active view handled the touch; otherwise `false`.

### TouchesCancelledwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-core-viewcontroller-touchescancelledwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public virtual bool TouchesCancelledwithEvent(IList<TouchLocation> touches)
```

Handles touch-cancel notifications.

Parameters:

- `touches`: Cancelled touches.

Returns: Always `false`.

### TouchesEndedwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-core-viewcontroller-touchesendedwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public virtual bool TouchesEndedwithEvent(IList<TouchLocation> touches)
```

Forwards the first released touch in the collection to the active view.

Parameters:

- `touches`: Touch collection to inspect.

Returns: `true` if the active view handled the touch; otherwise `false`.

### TouchesMovedwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-core-viewcontroller-touchesmovedwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public virtual bool TouchesMovedwithEvent(IList<TouchLocation> touches)
```

Forwards the first moved touch in the collection to the active view.

Parameters:

- `touches`: Touch collection to inspect.

Returns: `true` if the active view handled the touch; otherwise `false`.

### Unpause() {#m-cuttheropedx-framework-core-viewcontroller-unpause}

```csharp
public virtual void Unpause()
```

Restores the controller to the active state and re-shows any paused view.

### Update(float delta) {#m-cuttheropedx-framework-core-viewcontroller-update-system-single}

```csharp
public virtual void Update(float delta)
```

Updates the active view, if one is currently shown.

Parameters:

- `delta`: Elapsed frame time in seconds.


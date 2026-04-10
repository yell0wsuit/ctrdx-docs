---
title: Class Popup
description: Represents a modal popup dialog with animated show/hide effects and an optional scrollable content area.
---

# Class Popup

Namespace: `CutTheRopeDX.Commons`

Assembly: `CutTheRope-DX.dll`

Source: `Popup.cs`

Represents a modal popup dialog with animated show/hide effects and an optional scrollable content area.

## Declaration

```csharp
internal sealed class Popup : BaseElement, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Popup](Popup.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Constructors

### Popup() {#m-cuttheropedx-commons-popup-ctor}

```csharp
public Popup()
```

Initializes a popup with default show/hide timelines and a centered content root.

## Fields

### isShow {#f-cuttheropedx-commons-popup-isshow}

```csharp
private bool isShow
```

Indicates whether the popup is currently shown and should accept input.

### scrollContainer {#f-cuttheropedx-commons-popup-scrollcontainer}

```csharp
private ScrollableContainer scrollContainer
```

The optional scroll container that receives mouse-wheel forwarding while the popup is visible.

## Properties

### ContentRoot {#p-cuttheropedx-commons-popup-contentroot}

```csharp
public BaseElement ContentRoot { get; }
```

Gets the root element that hosts popup content (background, text, buttons, etc.).

## Methods

### Draw() {#m-cuttheropedx-commons-popup-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](../Framework/Visual/BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### HandleMouseWheel(int scrollDelta) {#m-cuttheropedx-commons-popup-handlemousewheel-system-int32}

```csharp
public bool HandleMouseWheel(int scrollDelta)
```

Forwards mouse wheel input to the registered scroll container, if present.

Parameters:

- `scrollDelta`: Mouse wheel delta.

Returns: `true` if the popup consumed the scroll input; otherwise `false`.

### HidePopup() {#m-cuttheropedx-commons-popup-hidepopup}

```csharp
public void HidePopup()
```

Hides the popup. Text elements fade out first, then the popup shrinks away.

### OnTouchDownXY(float tx, float ty) {#m-cuttheropedx-commons-popup-ontouchdownxy-system-single-system-single}

```csharp
public override bool OnTouchDownXY(float tx, float ty)
```

Dispatches a touch-down event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchMoveXY(float tx, float ty) {#m-cuttheropedx-commons-popup-ontouchmovexy-system-single-system-single}

```csharp
public override bool OnTouchMoveXY(float tx, float ty)
```

Dispatches a touch-move event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchUpXY(float tx, float ty) {#m-cuttheropedx-commons-popup-ontouchupxy-system-single-system-single}

```csharp
public override bool OnTouchUpXY(float tx, float ty)
```

Dispatches a touch-up event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### RegisterScrollableContainer(ScrollableContainer container) {#m-cuttheropedx-commons-popup-registerscrollablecontainer-cuttheropedx-framework-visual-scrollablecontainer}

```csharp
public void RegisterScrollableContainer(ScrollableContainer container)
```

Registers a scrollable container to receive mouse-wheel scrolling while the popup is shown.

Parameters:

- `container`: Scrollable container hosting long text or content.

### SetContentScale(float sx, float sy) {#m-cuttheropedx-commons-popup-setcontentscale-system-single-system-single}

```csharp
public void SetContentScale(float sx, float sy)
```

Applies a uniform or non-uniform scale to the popup content root.

Parameters:

- `sx`: Horizontal scale factor.
- `sy`: Vertical scale factor.

### ShowPopup() {#m-cuttheropedx-commons-popup-showpopup}

```csharp
public void ShowPopup()
```

Shows the popup with a bounce animation. Text elements will fade in after the popup appears.

### TimelineFinished(Timeline t) {#m-cuttheropedx-commons-popup-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-commons-popup-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.


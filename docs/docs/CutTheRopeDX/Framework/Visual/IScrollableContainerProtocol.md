---
title: Interface IScrollableContainerProtocol
description: Receives scroll position callbacks from a ScrollableContainer.
---

# Interface IScrollableContainerProtocol

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `ScrollableContainerProtocol.cs`

Receives scroll position callbacks from a [ScrollableContainer](ScrollableContainer.md).

## Declaration

```csharp
internal interface IScrollableContainerProtocol
```

## Inheritance

- [IScrollableContainerProtocol](IScrollableContainerProtocol.md)

## Methods

### ScrollableContainerchangedTargetScrollPoint(ScrollableContainer e, int i) {#m-cuttheropedx-framework-visual-iscrollablecontainerprotocol-scrollablecontainerchangedtargetscrollpoint-cuttheropedx-framework-visual-scrollablecontainer-system-int32}

```csharp
public abstract void ScrollableContainerchangedTargetScrollPoint(ScrollableContainer e, int i)
```

Called when the target scroll point changes to `i`.

Parameters:

- `e`: Scrollable container whose target changed.
- `i`: New target scroll point index.

### ScrollableContainerreachedScrollPoint(ScrollableContainer e, int i) {#m-cuttheropedx-framework-visual-iscrollablecontainerprotocol-scrollablecontainerreachedscrollpoint-cuttheropedx-framework-visual-scrollablecontainer-system-int32}

```csharp
public abstract void ScrollableContainerreachedScrollPoint(ScrollableContainer e, int i)
```

Called when the container has settled at scroll point `i`.

Parameters:

- `e`: Scrollable container that reached the point.
- `i`: Scroll point index.


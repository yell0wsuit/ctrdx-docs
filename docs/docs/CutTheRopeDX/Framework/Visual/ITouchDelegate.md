---
title: Interface ITouchDelegate
description: Receives touch and button input events from the framework.
---

# Interface ITouchDelegate

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `TouchDelegate.cs`

Receives touch and button input events from the framework.

## Declaration

```csharp
internal interface ITouchDelegate
```

## Inheritance

- [ITouchDelegate](ITouchDelegate.md)

## Methods

### BackButtonPressed() {#m-cuttheropedx-framework-visual-itouchdelegate-backbuttonpressed}

```csharp
public abstract bool BackButtonPressed()
```

Called when the back/escape button is pressed.

Returns: `true` when the event was handled; otherwise `false`.

### MenuButtonPressed() {#m-cuttheropedx-framework-visual-itouchdelegate-menubuttonpressed}

```csharp
public abstract bool MenuButtonPressed()
```

Called when the menu button is pressed.

Returns: `true` when the event was handled; otherwise `false`.

### TouchesBeganwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-visual-itouchdelegate-touchesbeganwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public abstract bool TouchesBeganwithEvent(IList<TouchLocation> touches)
```

Called when one or more `touches` begin.

Parameters:

- `touches`: Touch locations that began.

Returns: `true` when the event was handled; otherwise `false`.

### TouchesCancelledwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-visual-itouchdelegate-touchescancelledwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public abstract bool TouchesCancelledwithEvent(IList<TouchLocation> touches)
```

Called when one or more `touches` are cancelled by the system.

Parameters:

- `touches`: Touch locations that were cancelled.

Returns: `true` when the event was handled; otherwise `false`.

### TouchesEndedwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-visual-itouchdelegate-touchesendedwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public abstract bool TouchesEndedwithEvent(IList<TouchLocation> touches)
```

Called when one or more `touches` end.

Parameters:

- `touches`: Touch locations that ended.

Returns: `true` when the event was handled; otherwise `false`.

### TouchesMovedwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-framework-visual-itouchdelegate-touchesmovedwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public abstract bool TouchesMovedwithEvent(IList<TouchLocation> touches)
```

Called when one or more active `touches` move.

Parameters:

- `touches`: Touch locations that moved.

Returns: `true` when the event was handled; otherwise `false`.


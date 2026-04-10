---
title: Class ToggleButton
description: A two-state toggle button composed of two Button instances that alternate visibility on press.
---

# Class ToggleButton

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `ToggleButton.cs`

A two-state toggle button composed of two [Button](Button.md) instances that alternate visibility on press.

## Declaration

```csharp
internal sealed class ToggleButton : BaseElement, IButtonDelegation
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [ToggleButton](ToggleButton.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [IButtonDelegation](IButtonDelegation.md)

## Fields

### b1 {#f-cuttheropedx-framework-visual-togglebutton-b1}

```csharp
private Button b1
```

Button for the first toggle state.

### b2 {#f-cuttheropedx-framework-visual-togglebutton-b2}

```csharp
private Button b2
```

Button for the second toggle state.

### buttonID {#f-cuttheropedx-framework-visual-togglebutton-buttonid}

```csharp
private ButtonId buttonID
```

Identifier forwarded to the delegate upon activation.

### delegateButtonDelegate {#f-cuttheropedx-framework-visual-togglebutton-delegatebuttondelegate}

```csharp
public IButtonDelegation delegateButtonDelegate
```

Delegate notified when the toggle button is pressed.

## Methods

### InitWithUpElement1DownElement1UpElement2DownElement2andID(BaseElement u1, BaseElement d1, BaseElement u2, BaseElement d2, ButtonId bid) {#m-cuttheropedx-framework-visual-togglebutton-initwithupelement1downelement1upelement2downelement2andid-cuttheropedx-framework-visual-baseelement-cuttheropedx-framework-visual-baseelement-cuttheropedx-framework-visual-baseelement-cuttheropedx-framework-visual-baseelement-cuttheropedx-framework-visual-buttonid}

```csharp
public ToggleButton InitWithUpElement1DownElement1UpElement2DownElement2andID(BaseElement u1, BaseElement d1, BaseElement u2, BaseElement d2, ButtonId bid)
```

Initializes the toggle button with two pairs of up/down elements and an identifier.

Parameters:

- `u1`: Up element for state 1.
- `d1`: Down element for state 1.
- `u2`: Up element for state 2.
- `d2`: Down element for state 2.
- `bid`: Button identifier forwarded to the delegate.

Returns: The initialized toggle button instance.

### On() {#m-cuttheropedx-framework-visual-togglebutton-on}

```csharp
public bool On()
```

Returns `true` if the toggle is in its second (on) state.

Returns: `true` when the toggle is on; otherwise `false`.

### OnButtonPressed(ButtonId n) {#m-cuttheropedx-framework-visual-togglebutton-onbuttonpressed-cuttheropedx-framework-visual-buttonid}

```csharp
public void OnButtonPressed(ButtonId n)
```

Invoked when the button is pressed.

### SetTouchIncreaseLeftRightTopBottom(float l, float r, float t, float b) {#m-cuttheropedx-framework-visual-togglebutton-settouchincreaseleftrighttopbottom-system-single-system-single-system-single-system-single}

```csharp
public void SetTouchIncreaseLeftRightTopBottom(float l, float r, float t, float b)
```

Expands the touch zone on both internal buttons.

Parameters:

- `l`: Left expansion in pixels.
- `r`: Right expansion in pixels.
- `t`: Top expansion in pixels.
- `b`: Bottom expansion in pixels.

### Toggle() {#m-cuttheropedx-framework-visual-togglebutton-toggle}

```csharp
public void Toggle()
```

Toggles between the two button states.


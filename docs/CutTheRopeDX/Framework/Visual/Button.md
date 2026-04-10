---
title: Class Button
description: A BaseElement with up/down states, touch handling, and delegate-based press notification.
---

# Class Button

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `Button.cs`

A [BaseElement](BaseElement.md) with up/down states, touch handling, and delegate-based press notification.

## Declaration

```csharp
internal class Button : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [Button](Button.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [Lift](../../Commons/Lift.md)
- [MechanicalHandButton](../../GameMain/MechanicalHandButton.md)

## Fields

### TOUCH_MOVE_AND_UP_ZONE_INCREASE {#f-cuttheropedx-framework-visual-button-touch-move-and-up-zone-increase}

```csharp
public const float TOUCH_MOVE_AND_UP_ZONE_INCREASE
```

Extra padding in pixels added to the touch zone on move and up events.

### buttonID {#f-cuttheropedx-framework-visual-button-buttonid}

```csharp
public ButtonId buttonID
```

Identifier forwarded to the delegate upon activation.

### delegateButtonDelegate {#f-cuttheropedx-framework-visual-button-delegatebuttondelegate}

```csharp
public IButtonDelegation delegateButtonDelegate
```

Delegate notified when the button is pressed.

### forcedTouchZone {#f-cuttheropedx-framework-visual-button-forcedtouchzone}

```csharp
public CTRRectangle forcedTouchZone
```

Forced touch zone rectangle, or (-1,-1,-1,-1) to use the default.

### state {#f-cuttheropedx-framework-visual-button-state}

```csharp
public Button.BUTTON_STATE state
```

Current press state of the button.

### touchBottomInc {#f-cuttheropedx-framework-visual-button-touchbottominc}

```csharp
public float touchBottomInc
```

Touch zone expansion on the bottom side in pixels.

### touchLeftInc {#f-cuttheropedx-framework-visual-button-touchleftinc}

```csharp
public float touchLeftInc
```

Touch zone expansion on the left side in pixels.

### touchRightInc {#f-cuttheropedx-framework-visual-button-touchrightinc}

```csharp
public float touchRightInc
```

Touch zone expansion on the right side in pixels.

### touchTopInc {#f-cuttheropedx-framework-visual-button-touchtopinc}

```csharp
public float touchTopInc
```

Touch zone expansion on the top side in pixels.

## Methods

### AddChildwithID(BaseElement c, int i) {#m-cuttheropedx-framework-visual-button-addchildwithid-cuttheropedx-framework-visual-baseelement-system-int32}

```csharp
public override int AddChildwithID(BaseElement c, int i)
```

Adds a child element at the specified ID slot, disposing any existing child at that slot.

Parameters:

- `c`: Child element to add.
- `i`: Slot ID, or -1 to auto-assign.

Returns: The slot ID at which the child was inserted.

### CreateFromXML(XElement xml) {#m-cuttheropedx-framework-visual-button-createfromxml-system-xml-linq-xelement}

```csharp
public virtual BaseElement CreateFromXML(XElement xml)
```

Creates a [BaseElement](BaseElement.md) from an XML definition. Not implemented in this class.

Parameters:

- `xml`: XML element to create from.

Returns: The created element.

### CreateWithTextureUpDownID(CTRTexture2D up, CTRTexture2D down, ButtonId bID) {#m-cuttheropedx-framework-visual-button-createwithtextureupdownid-cuttheropedx-framework-visual-ctrtexture2d-cuttheropedx-framework-visual-ctrtexture2d-cuttheropedx-framework-visual-buttonid}

```csharp
public static Button CreateWithTextureUpDownID(CTRTexture2D up, CTRTexture2D down, ButtonId bID)
```

Creates a button using separate `up`/`down` textures and assigns the provided identifier.

Parameters:

- `up`: Texture for the unpressed state.
- `down`: Texture for the pressed state.
- `bID`: Typed button identifier.

Returns: A new [Button](Button.md) initialized with the given textures and identifier.

### ForceTouchRect(CTRRectangle r) {#m-cuttheropedx-framework-visual-button-forcetouchrect-cuttheropedx-framework-ctrrectangle}

```csharp
public virtual void ForceTouchRect(CTRRectangle r)
```

Overrides the default touch zone with a fixed rectangle.

Parameters:

- `r`: Rectangle defining the forced touch zone.

### InitWithID(ButtonId n) {#m-cuttheropedx-framework-visual-button-initwithid-cuttheropedx-framework-visual-buttonid}

```csharp
public virtual Button InitWithID(ButtonId n)
```

Initializes the button with its identifier.

Parameters:

- `n`: Typed button identifier.

Returns: This button instance for chaining.

### InitWithUpElementDownElementandID(BaseElement up, BaseElement down, ButtonId n) {#m-cuttheropedx-framework-visual-button-initwithupelementdownelementandid-cuttheropedx-framework-visual-baseelement-cuttheropedx-framework-visual-baseelement-cuttheropedx-framework-visual-buttonid}

```csharp
public virtual Button InitWithUpElementDownElementandID(BaseElement up, BaseElement down, ButtonId n)
```

Initializes the button with separate elements for `up`/`down` states and an identifier.

Parameters:

- `up`: Element to render while the button is up.
- `down`: Element to render while the button is pressed.
- `n`: Typed button identifier.

Returns: This button instance for chaining.

### IsInTouchZoneXYforTouchDown(float tx, float ty, bool td) {#m-cuttheropedx-framework-visual-button-isintouchzonexyfortouchdown-system-single-system-single-system-boolean}

```csharp
public virtual bool IsInTouchZoneXYforTouchDown(float tx, float ty, bool td)
```

Tests whether the touch point is within the button's touch zone.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.
- `td`: `true` for touch-down (no padding); `false` for move/up (adds padding).

Returns: `true` if the touch point lies within the button's touch zone.

### OnTouchDownXY(float tx, float ty) {#m-cuttheropedx-framework-visual-button-ontouchdownxy-system-single-system-single}

```csharp
public override bool OnTouchDownXY(float tx, float ty)
```

Dispatches a touch-down event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchMoveXY(float tx, float ty) {#m-cuttheropedx-framework-visual-button-ontouchmovexy-system-single-system-single}

```csharp
public override bool OnTouchMoveXY(float tx, float ty)
```

Dispatches a touch-move event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### OnTouchUpXY(float tx, float ty) {#m-cuttheropedx-framework-visual-button-ontouchupxy-system-single-system-single}

```csharp
public override bool OnTouchUpXY(float tx, float ty)
```

Dispatches a touch-up event to children. Returns `true` if handled.

Parameters:

- `tx`: Touch X coordinate.
- `ty`: Touch Y coordinate.

Returns: `true` if the event was handled by a child.

### SetState(Button.BUTTON_STATE s) {#m-cuttheropedx-framework-visual-button-setstate-cuttheropedx-framework-visual-button-button-state}

```csharp
public virtual void SetState(Button.BUTTON_STATE s)
```

Sets the button state and toggles visibility of up/down child elements.

Parameters:

- `s`: New button state.

### SetTouchIncreaseLeftRightTopBottom(float l, float r, float t, float b) {#m-cuttheropedx-framework-visual-button-settouchincreaseleftrighttopbottom-system-single-system-single-system-single-system-single}

```csharp
public virtual void SetTouchIncreaseLeftRightTopBottom(float l, float r, float t, float b)
```

Expands the touch zone by the specified amounts on each side.

Parameters:

- `l`: Left expansion in pixels.
- `r`: Right expansion in pixels.
- `t`: Top expansion in pixels.
- `b`: Bottom expansion in pixels.


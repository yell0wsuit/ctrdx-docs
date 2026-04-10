---
title: Interface IButtonDelegation
description: Receives button press events identified by a ButtonId.
---

# Interface IButtonDelegation

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `ButtonDelegation.cs`

Receives button press events identified by a [ButtonId](ButtonId.md).

## Declaration

```csharp
public interface IButtonDelegation
```

## Inheritance

- [IButtonDelegation](IButtonDelegation.md)

## Methods

### OnButtonPressed(ButtonId buttonId) {#m-cuttheropedx-framework-visual-ibuttondelegation-onbuttonpressed-cuttheropedx-framework-visual-buttonid}

```csharp
public abstract void OnButtonPressed(ButtonId buttonId)
```

Invoked when the button is pressed.

Parameters:

- `buttonId`: Typed button identifier.


---
title: Class CTRAction
description: Represents a single action that can be dispatched to a BaseElement during timeline playback.
---

# Class CTRAction

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `CTRAction.cs`

Represents a single action that can be dispatched to a [BaseElement](BaseElement.md) during timeline playback.

## Declaration

```csharp
internal sealed class CTRAction : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [CTRAction](CTRAction.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### CTRAction() {#m-cuttheropedx-framework-visual-ctraction-ctor}

```csharp
public CTRAction()
```

Initializes a new [CTRAction](CTRAction.md) with empty action data.

## Fields

### actionTarget {#f-cuttheropedx-framework-visual-ctraction-actiontarget}

```csharp
public BaseElement actionTarget
```

Element that will receive and handle this action.

### data {#f-cuttheropedx-framework-visual-ctraction-data}

```csharp
public ActionData data
```

Action name and parameters.

## Methods

### CreateAction(BaseElement target, string action, int p, int sp) {#m-cuttheropedx-framework-visual-ctraction-createaction-cuttheropedx-framework-visual-baseelement-system-string-system-int32-system-int32}

```csharp
public static CTRAction CreateAction(BaseElement target, string action, int p, int sp)
```

Creates an `action` targeting `target` with integer parameters.

Parameters:

- `target`: Element that will handle the action.
- `action`: Action name.
- `p`: Primary integer parameter.
- `sp`: Secondary integer parameter.

Returns: The created action instance.

### CreateAction(BaseElement target, string action, float p, float sp) {#m-cuttheropedx-framework-visual-ctraction-createaction-cuttheropedx-framework-visual-baseelement-system-string-system-single-system-single}

```csharp
public static CTRAction CreateAction(BaseElement target, string action, float p, float sp)
```

Creates an `action` targeting `target` with float parameters.

Parameters:

- `target`: Element that will handle the action.
- `action`: Action name.
- `p`: Primary float parameter.
- `sp`: Secondary float parameter.

Returns: The created action instance.


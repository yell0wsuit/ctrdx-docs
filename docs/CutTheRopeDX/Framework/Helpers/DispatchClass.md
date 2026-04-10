---
title: Class DispatchClass
description: Stores a delayed callback together with its parameter and remaining delay time.
---

# Class DispatchClass

Namespace: `CutTheRopeDX.Framework.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `Dispatch.cs`

Stores a delayed callback together with its parameter and remaining delay time.

## Declaration

```csharp
internal sealed class DispatchClass : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [DispatchClass](DispatchClass.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### callThis {#f-cuttheropedx-framework-helpers-dispatchclass-callthis}

```csharp
public DelayedDispatcher.DispatchFunc callThis
```

Callback to invoke when the delay expires.

### delay {#f-cuttheropedx-framework-helpers-dispatchclass-delay}

```csharp
public float delay
```

Remaining delay before dispatch, in seconds.

### param {#f-cuttheropedx-framework-helpers-dispatchclass-param}

```csharp
public FrameworkTypes param
```

Parameter passed to [callThis](#f-cuttheropedx-framework-helpers-dispatchclass-callthis) during dispatch.

## Methods

### Dispatch() {#m-cuttheropedx-framework-helpers-dispatchclass-dispatch}

```csharp
public void Dispatch()
```

Invokes the stored callback with the stored parameter.

### InitWithObjectSelectorParamafterDelay(DelayedDispatcher.DispatchFunc callThisFunc, FrameworkTypes p, float d) {#m-cuttheropedx-framework-helpers-dispatchclass-initwithobjectselectorparamafterdelay-cuttheropedx-framework-helpers-delayeddispatcher-dispatchfunc-cuttheropedx-framework-frameworktypes-system-single}

```csharp
public DispatchClass InitWithObjectSelectorParamafterDelay(DelayedDispatcher.DispatchFunc callThisFunc, FrameworkTypes p, float d)
```

Initializes this dispatch record with a callback, parameter, and delay.

Parameters:

- `callThisFunc`: Callback to invoke when the delay expires.
- `p`: Parameter passed to the callback.
- `d`: Initial delay in seconds.

Returns: The initialized dispatch record.


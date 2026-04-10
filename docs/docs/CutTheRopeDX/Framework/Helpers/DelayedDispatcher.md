---
title: Class DelayedDispatcher
description: Queues callbacks for later execution after a specified delay.
---

# Class DelayedDispatcher

Namespace: `CutTheRopeDX.Framework.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `DelayedDispatcher.cs`

Queues callbacks for later execution after a specified delay.

## Declaration

```csharp
internal sealed class DelayedDispatcher : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [DelayedDispatcher](DelayedDispatcher.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### DelayedDispatcher() {#m-cuttheropedx-framework-helpers-delayeddispatcher-ctor}

```csharp
public DelayedDispatcher()
```

Initializes an empty delayed-dispatch queue.

## Fields

### dispatchers {#f-cuttheropedx-framework-helpers-delayeddispatcher-dispatchers}

```csharp
private List<DispatchClass> dispatchers
```

Pending delayed dispatch records.

## Methods

### CallObjectSelectorParamafterDelay(DelayedDispatcher.DispatchFunc s, FrameworkTypes p, float d) {#m-cuttheropedx-framework-helpers-delayeddispatcher-callobjectselectorparamafterdelay-cuttheropedx-framework-helpers-delayeddispatcher-dispatchfunc-cuttheropedx-framework-frameworktypes-system-single}

```csharp
public void CallObjectSelectorParamafterDelay(DelayedDispatcher.DispatchFunc s, FrameworkTypes p, float d)
```

Queues a callback to be invoked after the specified delay.

Parameters:

- `s`: Callback to invoke.
- `p`: Parameter passed to the callback.
- `d`: Delay in seconds before invocation.

### CancelAllDispatches() {#m-cuttheropedx-framework-helpers-delayeddispatcher-cancelalldispatches}

```csharp
public void CancelAllDispatches()
```

Removes all pending dispatches without invoking them.

### CancelDispatchWithObjectSelectorParam(DelayedDispatcher.DispatchFunc s, FrameworkTypes p) {#m-cuttheropedx-framework-helpers-delayeddispatcher-canceldispatchwithobjectselectorparam-cuttheropedx-framework-helpers-delayeddispatcher-dispatchfunc-cuttheropedx-framework-frameworktypes}

```csharp
public void CancelDispatchWithObjectSelectorParam(DelayedDispatcher.DispatchFunc s, FrameworkTypes p)
```

Cancels a queued dispatch that matches the specified callback and parameter.

Parameters:

- `s`: Callback to match.
- `p`: Parameter to match.

### Dispose(bool disposing) {#m-cuttheropedx-framework-helpers-delayeddispatcher-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Update(float d) {#m-cuttheropedx-framework-helpers-delayeddispatcher-update-system-single}

```csharp
public void Update(float d)
```

Advances queued dispatch timers and invokes callbacks whose delay has expired.

Parameters:

- `d`: Elapsed frame time in seconds.


---
title: Class TimerManager
description: Manages recurring timers and one-shot delayed callbacks, updated each frame.
---

# Class TimerManager

Namespace: `CutTheRopeDX.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `TimerManager.cs`

Manages recurring timers and one-shot delayed callbacks, updated each frame.

## Declaration

```csharp
internal static class TimerManager
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [TimerManager](TimerManager.md)

## Fields

### delayedDispatcher {#f-cuttheropedx-helpers-timermanager-delayeddispatcher}

```csharp
private static DelayedDispatcher delayedDispatcher
```

Dispatcher that handles one-shot delayed callbacks.

### initLock {#f-cuttheropedx-helpers-timermanager-initlock}

```csharp
private static readonly Lock initLock
```

Lock used for thread-safe lazy initialization.

### initialized {#f-cuttheropedx-helpers-timermanager-initialized}

```csharp
private static bool initialized
```

Whether the manager has been initialized.

### nextTimerId {#f-cuttheropedx-helpers-timermanager-nexttimerid}

```csharp
private static int nextTimerId
```

Next timer identifier to assign.

### timers {#f-cuttheropedx-helpers-timermanager-timers}

```csharp
private static readonly Dictionary<int, TimerManager.TimerEntry> timers
```

Active recurring timers keyed by their identifier.

### updateKeys {#f-cuttheropedx-helpers-timermanager-updatekeys}

```csharp
private static readonly List<int> updateKeys
```

Temporary list of timer keys used during update iteration to allow safe removal.

## Methods

### EnsureInitialized() {#m-cuttheropedx-helpers-timermanager-ensureinitialized}

```csharp
private static void EnsureInitialized()
```

Lazily initializes the delayed dispatcher in a thread-safe manner.

### RegisterDelayedObjectCall(DelayedDispatcher.DispatchFunc callback, FrameworkTypes parameter, float interval) {#m-cuttheropedx-helpers-timermanager-registerdelayedobjectcall-cuttheropedx-framework-helpers-delayeddispatcher-dispatchfunc-cuttheropedx-framework-frameworktypes-system-single}

```csharp
public static void RegisterDelayedObjectCall(DelayedDispatcher.DispatchFunc callback, FrameworkTypes parameter, float interval)
```

Registers a one-shot delayed callback that fires once after the specified interval.

Parameters:

- `callback`: Function to invoke after the delay.
- `parameter`: Parameter passed to the callback.
- `interval`: Delay in seconds before the callback fires.

### Schedule(DelayedDispatcher.DispatchFunc callback, FrameworkTypes parameter, float interval) {#m-cuttheropedx-helpers-timermanager-schedule-cuttheropedx-framework-helpers-delayeddispatcher-dispatchfunc-cuttheropedx-framework-frameworktypes-system-single}

```csharp
public static int Schedule(DelayedDispatcher.DispatchFunc callback, FrameworkTypes parameter, float interval)
```

Schedules a recurring timer that fires at the given interval.

Parameters:

- `callback`: Function to invoke each time the timer fires.
- `parameter`: Parameter passed to the callback.
- `interval`: Time in seconds between invocations.

Returns: A timer identifier that can be passed to [StopTimer](#m-cuttheropedx-helpers-timermanager-stoptimer-system-int32) to cancel it.

### StopTimer(int timerId) {#m-cuttheropedx-helpers-timermanager-stoptimer-system-int32}

```csharp
public static void StopTimer(int timerId)
```

Stops and removes a previously scheduled recurring timer.

Parameters:

- `timerId`: Timer identifier returned by [Schedule](#m-cuttheropedx-helpers-timermanager-schedule-cuttheropedx-framework-helpers-delayeddispatcher-dispatchfunc-cuttheropedx-framework-frameworktypes-system-single). Negative values are ignored.

### Update(float delta) {#m-cuttheropedx-helpers-timermanager-update-system-single}

```csharp
public static void Update(float delta)
```

Advances all recurring timers and delayed callbacks by the elapsed frame time.

Parameters:

- `delta`: Elapsed time in seconds since the last update.


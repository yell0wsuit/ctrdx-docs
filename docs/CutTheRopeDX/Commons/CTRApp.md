---
title: Class CTRApp
description: Application entry point for the shared Cut the Rope runtime.
---

# Class CTRApp

Namespace: `CutTheRopeDX.Commons`

Assembly: `CutTheRope-DX.dll`

Source: `CTRApp.cs`

Application entry point for the shared Cut the Rope runtime.

## Declaration

```csharp
internal sealed class CTRApp : Application
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [Application](../Framework/Core/Application.md)
- [CTRApp](CTRApp.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Methods

### ApplicationDidBecomeActive() {#m-cuttheropedx-commons-ctrapp-applicationdidbecomeactive}

```csharp
public static void ApplicationDidBecomeActive()
```

Resumes the root controller when the application becomes active again.

### ApplicationDidReceiveMemoryWarning() {#m-cuttheropedx-commons-ctrapp-applicationdidreceivememorywarning}

```csharp
public void ApplicationDidReceiveMemoryWarning()
```

Handles platform memory-pressure notifications.

### ApplicationWillResignActive() {#m-cuttheropedx-commons-ctrapp-applicationwillresignactive}

```csharp
public static void ApplicationWillResignActive()
```

Saves preferences and suspends the root controller when the application loses focus.

### ApplicationWillTerminate() {#m-cuttheropedx-commons-ctrapp-applicationwillterminate}

```csharp
public static void ApplicationWillTerminate()
```

Persists application preferences before the process terminates.

### ChallengeStartedWithGameConfig(string gameConfig) {#m-cuttheropedx-commons-ctrapp-challengestartedwithgameconfig-system-string}

```csharp
public void ChallengeStartedWithGameConfig(string gameConfig)
```

Starts a challenge session using the provided game configuration payload.

Parameters:

- `gameConfig`: The serialized game configuration for the challenge.

### Dispose(bool disposing) {#m-cuttheropedx-commons-ctrapp-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.


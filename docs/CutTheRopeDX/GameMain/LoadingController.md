---
title: Class LoadingController
description: Controller for the pack loading screen and transition back to the root controller.
---

# Class LoadingController

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `LoadingController.cs`

Controller for the pack loading screen and transition back to the root controller.

## Declaration

```csharp
internal sealed class LoadingController : ViewController, IResourceMgrDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [ViewController](../Framework/Core/ViewController.md)
- [LoadingController](LoadingController.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITouchDelegate](../Framework/Visual/ITouchDelegate.md)
- [IResourceMgrDelegate](../Framework/Core/IResourceMgrDelegate.md)

## Constructors

### LoadingController(ViewController parent) {#m-cuttheropedx-gamemain-loadingcontroller-ctor-cuttheropedx-framework-core-viewcontroller}

```csharp
public LoadingController(ViewController parent)
```

Initializes a loading controller and its loading label.

Parameters:

- `parent`: Parent view controller.

## Fields

### nextController {#f-cuttheropedx-gamemain-loadingcontroller-nextcontroller}

```csharp
public int nextController
```

Controller ID to activate after the loading screen completes.

### resourcesLoaded {#f-cuttheropedx-gamemain-loadingcontroller-resourcesloaded}

```csharp
private bool resourcesLoaded
```

Whether the resource manager has finished loading the requested resources.

## Methods

### Activate() {#m-cuttheropedx-gamemain-loadingcontroller-activate}

```csharp
public override void Activate()
```

Activates the controller and notifies the root controller.

### AllResourcesLoaded() {#m-cuttheropedx-gamemain-loadingcontroller-allresourcesloaded}

```csharp
public void AllResourcesLoaded()
```

Marks pending resources as loaded so the controller can transition after the loading animation finishes.

### DeactivateImmediately() {#m-cuttheropedx-gamemain-loadingcontroller-deactivateimmediately}

```csharp
public override void DeactivateImmediately()
```

Deactivates the controller immediately, hides the active view, and notifies the parent.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-loadingcontroller-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Update(float t) {#m-cuttheropedx-gamemain-loadingcontroller-update-system-single}

```csharp
public override void Update(float t)
```

Updates the active view, if one is currently shown.


---
title: Interface IResourceMgrDelegate
description: Receives notification when the resource manager finishes loading all queued resources.
---

# Interface IResourceMgrDelegate

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `ResourceMgrDelegate.cs`

Receives notification when the resource manager finishes loading all queued resources.

## Declaration

```csharp
internal interface IResourceMgrDelegate
```

## Inheritance

- [IResourceMgrDelegate](IResourceMgrDelegate.md)

## Methods

### AllResourcesLoaded() {#m-cuttheropedx-framework-core-iresourcemgrdelegate-allresourcesloaded}

```csharp
public abstract void AllResourcesLoaded()
```

Called when all queued resources have been loaded.


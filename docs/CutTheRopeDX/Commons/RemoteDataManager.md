---
title: Class RemoteDataManager
description: Provides remote configuration values for promotional and social network visibility settings.
---

# Class RemoteDataManager

Namespace: `CutTheRopeDX.Commons`

Assembly: `CutTheRope-DX.dll`

Source: `RemoteDataManager.cs`

Provides remote configuration values for promotional and social network visibility settings.

## Declaration

```csharp
internal sealed class RemoteDataManager
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [RemoteDataManager](RemoteDataManager.md)

## Remarks

Currently no-op, but it can be implemented in the future.

## Methods

### GetBoxForCrossPromo() {#m-cuttheropedx-commons-remotedatamanager-getboxforcrosspromo}

```csharp
public static int GetBoxForCrossPromo()
```

Returns the box index to use for cross-promotion display.

Returns: The selected cross-promo box index.

### GetHideMainPromo() {#m-cuttheropedx-commons-remotedatamanager-gethidemainpromo}

```csharp
public static bool GetHideMainPromo()
```

Returns whether the main promotional banner should be hidden.

Returns: `true` when the main promo banner should be hidden; otherwise `false`.

### GetHideSocialNetworks() {#m-cuttheropedx-commons-remotedatamanager-gethidesocialnetworks}

```csharp
public static bool GetHideSocialNetworks()
```

Returns whether social network buttons should be hidden.

Returns: `true` when social network buttons should be hidden; otherwise `false`.


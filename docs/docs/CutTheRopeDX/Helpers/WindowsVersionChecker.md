---
title: Class WindowsVersionChecker
description: Detects whether the application is running on an outdated Windows version.
---

# Class WindowsVersionChecker

Namespace: `CutTheRopeDX.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `WindowsVersionChecker.cs`

Detects whether the application is running on an outdated Windows version.

## Declaration

```csharp
internal static class WindowsVersionChecker
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [WindowsVersionChecker](WindowsVersionChecker.md)

## Methods

### IsOutdatedWindows() {#m-cuttheropedx-helpers-windowsversionchecker-isoutdatedwindows}

```csharp
public static bool IsOutdatedWindows()
```

Check if the current running Windows version is outdated.

Returns: `true` when running on Windows 8.1 or earlier (i.e. below Windows 10).

### ShowOutdatedWindowsPopup(PopupBuilder builder) {#m-cuttheropedx-helpers-windowsversionchecker-showoutdatedwindowspopup-cuttheropedx-commons-popupbuilder}

```csharp
public static void ShowOutdatedWindowsPopup(PopupBuilder builder)
```

Shows a warning popup when running on an outdated Windows version.

Parameters:

- `builder`: The popup builder used to create and display the popup.


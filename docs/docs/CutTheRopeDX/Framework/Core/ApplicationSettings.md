---
title: Class ApplicationSettings
description: Provides access to application-level configuration values such as FPS, orientation, and locale.
---

# Class ApplicationSettings

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `ApplicationSettings.cs`

Provides access to application-level configuration values such as FPS, orientation, and locale.

## Declaration

```csharp
internal sealed class ApplicationSettings : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [ApplicationSettings](ApplicationSettings.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### DEFAULT_APP_SETTINGS {#f-cuttheropedx-framework-core-applicationsettings-default-app-settings}

```csharp
private static readonly Dictionary<ApplicationSettings.AppSettings, bool> DEFAULT_APP_SETTINGS
```

Default boolean values for supported application settings.

### fps {#f-cuttheropedx-framework-core-applicationsettings-fps}

```csharp
private static readonly int fps
```

Default target frame rate.

### locale {#f-cuttheropedx-framework-core-applicationsettings-locale}

```csharp
private string locale
```

Current locale override, if one has been explicitly set.

### orientation {#f-cuttheropedx-framework-core-applicationsettings-orientation}

```csharp
private static readonly ApplicationSettings.ORIENTATION orientation
```

Default application orientation.

## Methods

### GetBool(int s) {#m-cuttheropedx-framework-core-applicationsettings-getbool-system-int32}

```csharp
public static bool GetBool(int s)
```

Gets a boolean application setting.

Parameters:

- `s`: The setting identifier (see [AppSettings](ApplicationSettings.md)).

Returns: The configured boolean value for the requested setting, or `false` if the key is not present.

### GetInt(int s) {#m-cuttheropedx-framework-core-applicationsettings-getint-system-int32}

```csharp
public static int GetInt(int s)
```

Gets an integer application setting.

Parameters:

- `s`: The setting identifier (see [AppSettings](ApplicationSettings.md)).

Returns: The configured FPS or orientation value for the supported setting identifiers.

### GetString(int s) {#m-cuttheropedx-framework-core-applicationsettings-getstring-system-int32}

```csharp
public string GetString(int s)
```

Gets a string application setting.

Parameters:

- `s`: The setting identifier (see [AppSettings](ApplicationSettings.md)).

Returns: The locale code if `s` is [APP_SETTING_LOCALE](ApplicationSettings.md), otherwise an empty string.

### SetString(int sid, string str) {#m-cuttheropedx-framework-core-applicationsettings-setstring-system-int32-system-string}

```csharp
public void SetString(int sid, string str)
```

Sets a string application setting.

Parameters:

- `sid`: The setting identifier (see [AppSettings](ApplicationSettings.md)).
- `str`: The string value to set.


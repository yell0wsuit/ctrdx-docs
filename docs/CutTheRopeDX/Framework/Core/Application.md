---
title: Class Application
description: Application bootstrap and shared-service access point for core framework systems.
---

# Class Application

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `Application.cs`

Application bootstrap and shared-service access point for core framework systems.

## Declaration

```csharp
internal class Application : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [Application](Application.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [CTRApp](../../Commons/CTRApp.md)

## Fields

### _canvas {#f-cuttheropedx-framework-core-application-canvas}

```csharp
private static readonly GLCanvas _canvas
```

Shared rendering canvas instance.

### appSettings {#f-cuttheropedx-framework-core-application-appsettings}

```csharp
private static ApplicationSettings appSettings
```

Shared application-settings instance.

### movieMgr {#f-cuttheropedx-framework-core-application-moviemgr}

```csharp
private static MovieMgr movieMgr
```

Shared movie manager instance.

### prefs {#f-cuttheropedx-framework-core-application-prefs}

```csharp
private static CTRPreferences prefs
```

Shared preferences instance.

### resourceMgr {#f-cuttheropedx-framework-core-application-resourcemgr}

```csharp
private static readonly CTRResourceMgr resourceMgr
```

Shared resource manager instance.

### root {#f-cuttheropedx-framework-core-application-root}

```csharp
protected static RootController root
```

Shared root controller instance.

### soundMgr {#f-cuttheropedx-framework-core-application-soundmgr}

```csharp
private static SoundMgr soundMgr
```

Shared sound manager instance.

## Methods

### ApplicationDidFinishLaunching() {#m-cuttheropedx-framework-core-application-applicationdidfinishlaunching}

```csharp
public virtual void ApplicationDidFinishLaunching()
```

Performs application startup by creating shared services, loading preferences, configuring orientation, and activating the root controller.

### CreateAppSettings() {#m-cuttheropedx-framework-core-application-createappsettings}

```csharp
public virtual ApplicationSettings CreateAppSettings()
```

Creates the application-settings instance used at startup.

Returns: New application-settings instance.

### CreateCanvas() {#m-cuttheropedx-framework-core-application-createcanvas}

```csharp
public virtual GLCanvas CreateCanvas()
```

Creates the rendering canvas used by the application.

Returns: Initialized canvas instance.

### CreateMovieMgr() {#m-cuttheropedx-framework-core-application-createmoviemgr}

```csharp
public virtual MovieMgr CreateMovieMgr()
```

Creates the movie manager used by the application.

Returns: New movie manager instance.

### CreatePreferences() {#m-cuttheropedx-framework-core-application-createpreferences}

```csharp
public virtual CTRPreferences CreatePreferences()
```

Creates the preferences store used by the application.

Returns: New preferences instance.

### CreateResourceMgr() {#m-cuttheropedx-framework-core-application-createresourcemgr}

```csharp
public virtual CTRResourceMgr CreateResourceMgr()
```

Creates the resource manager used by the application.

Returns: New resource manager instance.

### CreateRootController() {#m-cuttheropedx-framework-core-application-createrootcontroller}

```csharp
public virtual RootController CreateRootController()
```

Creates the root controller that will own the active controller stack.

Returns: New root controller instance.

### CreateSoundMgr() {#m-cuttheropedx-framework-core-application-createsoundmgr}

```csharp
public static SoundMgr CreateSoundMgr()
```

Creates the shared sound manager instance.

Returns: New sound manager instance.

### GetFont(string fontResourceName) {#m-cuttheropedx-framework-core-application-getfont-system-string}

```csharp
internal static FontGeneric GetFont(string fontResourceName)
```

Gets a font by its resource name.

Parameters:

- `fontResourceName`: Logical font resource name.

Returns: Loaded font resource, or `null` if loading failed.

### GetString(string stringKey, bool forceEnglish = false) {#m-cuttheropedx-framework-core-application-getstring-system-string-system-boolean}

```csharp
internal static string GetString(string stringKey, bool forceEnglish = false)
```

Gets a localized string by its key.

Parameters:

- `stringKey`: Localization key to resolve.
- `forceEnglish`: `true` to always use English; otherwise uses the current language.

Returns: Localized string, or an empty string when the key is `null` or empty.

### GetTexture(string textureResourceName) {#m-cuttheropedx-framework-core-application-gettexture-system-string}

```csharp
internal static CTRTexture2D GetTexture(string textureResourceName)
```

Gets a texture by its resource name.

Parameters:

- `textureResourceName`: Logical texture resource name.

Returns: Loaded texture resource.

### SharedAppSettings() {#m-cuttheropedx-framework-core-application-sharedappsettings}

```csharp
public static ApplicationSettings SharedAppSettings()
```

Returns the shared application-settings instance.

Returns: Shared application settings.

### SharedCanvas() {#m-cuttheropedx-framework-core-application-sharedcanvas}

```csharp
public static GLCanvas SharedCanvas()
```

Returns the shared rendering canvas.

Returns: Shared canvas instance.

### SharedMovieMgr() {#m-cuttheropedx-framework-core-application-sharedmoviemgr}

```csharp
public static MovieMgr SharedMovieMgr()
```

Returns the shared movie manager, creating it on first access.

Returns: Shared movie manager.

### SharedPreferences() {#m-cuttheropedx-framework-core-application-sharedpreferences}

```csharp
public static CTRPreferences SharedPreferences()
```

Returns the shared preferences instance.

Returns: Shared preferences instance.

### SharedResourceMgr() {#m-cuttheropedx-framework-core-application-sharedresourcemgr}

```csharp
public static CTRResourceMgr SharedResourceMgr()
```

Returns the shared resource manager instance.

Returns: Shared resource manager.

### SharedRootController() {#m-cuttheropedx-framework-core-application-sharedrootcontroller}

```csharp
public static RootController SharedRootController()
```

Returns the shared root controller, creating it on first access.

Returns: Shared root controller.

### SharedSoundMgr() {#m-cuttheropedx-framework-core-application-sharedsoundmgr}

```csharp
public static SoundMgr SharedSoundMgr()
```

Returns the shared sound manager, creating it on first access.

Returns: Shared sound manager.

### UpdateOrientation() {#m-cuttheropedx-framework-core-application-updateorientation}

```csharp
public virtual void UpdateOrientation()
```

Updates the framework's logical screen dimensions for the current orientation. The base implementation keeps the game in its default landscape layout.


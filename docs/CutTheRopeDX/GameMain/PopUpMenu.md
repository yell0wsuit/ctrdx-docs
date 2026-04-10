---
title: Class PopUpMenu
description: Provides pre-built popup dialogs for common menu scenarios.
---

# Class PopUpMenu

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `PopUpMenu.cs`

Provides pre-built popup dialogs for common menu scenarios.

## Declaration

```csharp
internal sealed class PopUpMenu
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [PopUpMenu](PopUpMenu.md)

## Constructors

### PopUpMenu(MenuController controller) {#m-cuttheropedx-gamemain-popupmenu-ctor-cuttheropedx-gamemain-menucontroller}

```csharp
public PopUpMenu(MenuController controller)
```

Provides pre-built popup dialogs for common menu scenarios.

## Fields

### builder {#f-cuttheropedx-gamemain-popupmenu-builder}

```csharp
internal readonly PopupBuilder builder
```

Popup builder bound to the owning menu controller.

## Methods

### ShowCantUnlockPopup() {#m-cuttheropedx-gamemain-popupmenu-showcantunlockpopup}

```csharp
public void ShowCantUnlockPopup()
```

Shows the "can't unlock" popup with required stars and explanatory text.

### ShowGameFinishedPopup() {#m-cuttheropedx-gamemain-popupmenu-showgamefinishedpopup}

```csharp
public void ShowGameFinishedPopup()
```

Shows the "game finished" popup with completion text and button.

### ShowUpdateAvailablePopup(string currentVersion, string latestVersion, MenuButtonId buttonDownload, MenuButtonId buttonCancel) {#m-cuttheropedx-gamemain-popupmenu-showupdateavailablepopup-system-string-system-string-cuttheropedx-gamemain-menubuttonid-cuttheropedx-gamemain-menubuttonid}

```csharp
public Popup ShowUpdateAvailablePopup(string currentVersion, string latestVersion, MenuButtonId buttonDownload, MenuButtonId buttonCancel)
```

Shows the update-available popup with current/latest versions and action buttons.

Parameters:

- `currentVersion`: The currently installed version string.
- `latestVersion`: The latest available version string.
- `buttonDownload`: Menu button id for the download action.
- `buttonCancel`: Menu button id for the cancel/close action.

Returns: The created update popup instance.

### ShowYesNoPopup(string str, MenuButtonId buttonYesId, MenuButtonId buttonNoId) {#m-cuttheropedx-gamemain-popupmenu-showyesnopopup-system-string-cuttheropedx-gamemain-menubuttonid-cuttheropedx-gamemain-menubuttonid}

```csharp
public Popup ShowYesNoPopup(string str, MenuButtonId buttonYesId, MenuButtonId buttonNoId)
```

Shows a confirmation popup with Yes/No buttons.

Parameters:

- `str`: Main message to display.
- `buttonYesId`: Menu button id for the "Yes" action.
- `buttonNoId`: Menu button id for the "No" action.

Returns: The created popup instance.


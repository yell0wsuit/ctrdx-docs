---
title: Class MapPickerController
description: Controller that either presents the map picker view or auto-loads a selected map.
---

# Class MapPickerController

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MapPickerController.cs`

Controller that either presents the map picker view or auto-loads a selected map.

## Declaration

```csharp
internal sealed class MapPickerController : ViewController, IButtonDelegation
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [ViewController](../Framework/Core/ViewController.md)
- [MapPickerController](MapPickerController.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITouchDelegate](../Framework/Visual/ITouchDelegate.md)
- [IButtonDelegation](../Framework/Visual/IButtonDelegation.md)

## Constructors

### MapPickerController(ViewController parent) {#m-cuttheropedx-gamemain-mappickercontroller-ctor-cuttheropedx-framework-core-viewcontroller}

```csharp
public MapPickerController(ViewController parent)
```

Initializes a map picker controller and its picker/loading views.

Parameters:

- `parent`: Parent view controller.

## Fields

### autoLoad {#f-cuttheropedx-gamemain-mappickercontroller-autoload}

```csharp
private bool autoLoad
```

Whether the controller should load [selectedMap](#f-cuttheropedx-gamemain-mappickercontroller-selectedmap) immediately on activation.

### maplist {#f-cuttheropedx-gamemain-mappickercontroller-maplist}

```csharp
private readonly Dictionary<string, XElement> maplist
```

Loaded map XML documents keyed by map name.

### selectedMap {#f-cuttheropedx-gamemain-mappickercontroller-selectedmap}

```csharp
private string selectedMap
```

Selected map file name used in auto-load mode.

## Methods

### Activate() {#m-cuttheropedx-gamemain-mappickercontroller-activate}

```csharp
public override void Activate()
```

Activates the controller and notifies the root controller.

### CreatePickerView() {#m-cuttheropedx-gamemain-mappickercontroller-createpickerview}

```csharp
public void CreatePickerView()
```

Creates the basic map picker start view.

### Deactivate() {#m-cuttheropedx-gamemain-mappickercontroller-deactivate}

```csharp
public override void Deactivate()
```

Requests deactivation through the root controller.

### LoadList() {#m-cuttheropedx-gamemain-mappickercontroller-loadlist}

```csharp
public static void LoadList()
```

Starts loading the available map list.

### OnButtonPressed(MapPickerControllerButtonId n) {#m-cuttheropedx-gamemain-mappickercontroller-onbuttonpressed-cuttheropedx-gamemain-mappickercontrollerbuttonid}

```csharp
public static void OnButtonPressed(MapPickerControllerButtonId n)
```

Handles a typed map picker button press.

Parameters:

- `n`: Map picker button identifier that was pressed.

### SetAutoLoadMap(string map) {#m-cuttheropedx-gamemain-mappickercontroller-setautoloadmap-system-string}

```csharp
public void SetAutoLoadMap(string map)
```

Enables auto-load mode for a specific map.

Parameters:

- `map`: Map file name to load when the controller activates.

### SetNormalMode() {#m-cuttheropedx-gamemain-mappickercontroller-setnormalmode}

```csharp
public void SetNormalMode()
```

Enables normal picker mode instead of auto-loading a map.

### XmlLoaderFinishedWithfromwithSuccess(XElement rootNode, string _, bool _1) {#m-cuttheropedx-gamemain-mappickercontroller-xmlloaderfinishedwithfromwithsuccess-system-xml-linq-xelement-system-string-system-boolean}

```csharp
public void XmlLoaderFinishedWithfromwithSuccess(XElement rootNode, string _, bool _1)
```

Handles completion of map XML loading.

Parameters:

- `rootNode`: Loaded map XML root node.
- `_`: Path or source identifier reported by the XML loader.
- `_1`: Whether the XML loader reported success.


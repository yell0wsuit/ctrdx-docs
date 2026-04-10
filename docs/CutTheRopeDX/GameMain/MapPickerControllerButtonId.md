---
title: Record Struct MapPickerControllerButtonId
description: Identifier set for the map picker view.
---

# Record Struct MapPickerControllerButtonId

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MapPickerControllerButtonId.cs`

Identifier set for the map picker view.

## Declaration

```csharp
internal sealed readonly record struct MapPickerControllerButtonId : IButtonIdentifier, IEquatable<MapPickerControllerButtonId>
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [MapPickerControllerButtonId](MapPickerControllerButtonId.md)

## Implements

- [IButtonIdentifier](../Framework/Visual/IButtonIdentifier.md)
- [IEquatable<MapPickerControllerButtonId>](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1?view=net-10.0)

## Constructors

### MapPickerControllerButtonId(int Value) {#m-cuttheropedx-gamemain-mappickercontrollerbuttonid-ctor-system-int32}

```csharp
public MapPickerControllerButtonId(int Value)
```

Identifier set for the map picker view.

Parameters:

- `Value`: Underlying button identifier value.

## Properties

### Start {#p-cuttheropedx-gamemain-mappickercontrollerbuttonid-start}

```csharp
public static MapPickerControllerButtonId Start { get; }
```

Button that triggers loading the selected map list.

### Value {#p-cuttheropedx-gamemain-mappickercontrollerbuttonid-value}

```csharp
public int Value { get; set; }
```

Underlying button identifier value.

## Methods

### FromButtonId(ButtonId buttonId) {#m-cuttheropedx-gamemain-mappickercontrollerbuttonid-frombuttonid-cuttheropedx-framework-visual-buttonid}

```csharp
public static MapPickerControllerButtonId FromButtonId(ButtonId buttonId)
```

Creates a [MapPickerControllerButtonId](MapPickerControllerButtonId.md) from a generic [ButtonId](../Framework/Visual/ButtonId.md).

Parameters:

- `buttonId`: Shared identifier emitted by the button infrastructure.

Returns: Typed identifier specific to the map picker.


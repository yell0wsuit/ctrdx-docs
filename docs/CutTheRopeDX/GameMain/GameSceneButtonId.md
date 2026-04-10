---
title: Record Struct GameSceneButtonId
description: Identifier set for in-level scene specific controls.
---

# Record Struct GameSceneButtonId

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `GameSceneButtonId.cs`

Identifier set for in-level scene specific controls.

## Declaration

```csharp
internal sealed readonly record struct GameSceneButtonId : IButtonIdentifier, IEquatable<GameSceneButtonId>
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [GameSceneButtonId](GameSceneButtonId.md)

## Implements

- [IButtonIdentifier](../Framework/Visual/IButtonIdentifier.md)
- [IEquatable<GameSceneButtonId>](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1?view=net-10.0)

## Constructors

### GameSceneButtonId(int Value) {#m-cuttheropedx-gamemain-gamescenebuttonid-ctor-system-int32}

```csharp
public GameSceneButtonId(int Value)
```

Identifier set for in-level scene specific controls.

Parameters:

- `Value`: Underlying numeric button identifier.

## Properties

### GravityToggle {#p-cuttheropedx-gamemain-gamescenebuttonid-gravitytoggle}

```csharp
public static GameSceneButtonId GravityToggle { get; }
```

Toggles gravity in the active scene.

### Value {#p-cuttheropedx-gamemain-gamescenebuttonid-value}

```csharp
public int Value { get; set; }
```

Underlying numeric button identifier.

## Methods

### FromButtonId(ButtonId buttonId) {#m-cuttheropedx-gamemain-gamescenebuttonid-frombuttonid-cuttheropedx-framework-visual-buttonid}

```csharp
public static GameSceneButtonId FromButtonId(ButtonId buttonId)
```

Converts a generic button identifier to a scene button identifier.

Parameters:

- `buttonId`: Generic button identifier.

Returns: A scene button identifier with the same raw value.


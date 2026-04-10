---
title: Record Struct GameControllerButtonId
description: Identifier set for in-game HUD and pause menu controls.
---

# Record Struct GameControllerButtonId

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `GameControllerButtonId.cs`

Identifier set for in-game HUD and pause menu controls.

## Declaration

```csharp
internal sealed readonly record struct GameControllerButtonId : IButtonIdentifier, IEquatable<GameControllerButtonId>
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [GameControllerButtonId](GameControllerButtonId.md)

## Implements

- [IButtonIdentifier](../Framework/Visual/IButtonIdentifier.md)
- [IEquatable<GameControllerButtonId>](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1?view=net-10.0)

## Constructors

### GameControllerButtonId(int Value) {#m-cuttheropedx-gamemain-gamecontrollerbuttonid-ctor-system-int32}

```csharp
public GameControllerButtonId(int Value)
```

Identifier set for in-game HUD and pause menu controls.

Parameters:

- `Value`: Underlying numeric button identifier.

## Properties

### Continue {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-continue}

```csharp
public static GameControllerButtonId Continue { get; }
```

Continues from an interstitial or results screen.

### ExitFromLose {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-exitfromlose}

```csharp
public static GameControllerButtonId ExitFromLose { get; }
```

Exits from the lose screen.

### ExitFromWin {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-exitfromwin}

```csharp
public static GameControllerButtonId ExitFromWin { get; }
```

Exits from the win screen.

### LevelSelect {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-levelselect}

```csharp
public static GameControllerButtonId LevelSelect { get; }
```

Opens level selection.

### MainMenu {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-mainmenu}

```csharp
public static GameControllerButtonId MainMenu { get; }
```

Returns to the main menu.

### NextLevel {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-nextlevel}

```csharp
public static GameControllerButtonId NextLevel { get; }
```

Advances to the next level.

### Pause {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-pause}

```csharp
public static GameControllerButtonId Pause { get; }
```

Opens or represents the pause action.

### Restart {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-restart}

```csharp
public static GameControllerButtonId Restart { get; }
```

Restarts the current level.

### SkipLevel {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-skiplevel}

```csharp
public static GameControllerButtonId SkipLevel { get; }
```

Skips the current level.

### ToggleMusic {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-togglemusic}

```csharp
public static GameControllerButtonId ToggleMusic { get; }
```

Toggles music playback.

### ToggleSound {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-togglesound}

```csharp
public static GameControllerButtonId ToggleSound { get; }
```

Toggles sound effects playback.

### Value {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-value}

```csharp
public int Value { get; set; }
```

Underlying numeric button identifier.

### WinContinue {#p-cuttheropedx-gamemain-gamecontrollerbuttonid-wincontinue}

```csharp
public static GameControllerButtonId WinContinue { get; }
```

Continues from the win screen.

## Methods

### FromButtonId(ButtonId buttonId) {#m-cuttheropedx-gamemain-gamecontrollerbuttonid-frombuttonid-cuttheropedx-framework-visual-buttonid}

```csharp
public static GameControllerButtonId FromButtonId(ButtonId buttonId)
```

Converts a generic button identifier to a game-controller button identifier.

Parameters:

- `buttonId`: Generic button identifier.

Returns: A game-controller button identifier with the same raw value.


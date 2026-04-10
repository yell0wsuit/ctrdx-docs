---
title: Class GameController
description: Coordinates the active game scene, pause menu, level result flow, input routing, and game-view transitions.
---

# Class GameController

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `GameController.cs`

Coordinates the active game scene, pause menu, level result flow, input routing, and game-view transitions.

## Declaration

```csharp
internal sealed class GameController : ViewController, IButtonDelegation, IGameSceneDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [ViewController](../Framework/Core/ViewController.md)
- [GameController](GameController.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITouchDelegate](../Framework/Visual/ITouchDelegate.md)
- [IButtonDelegation](../Framework/Visual/IButtonDelegation.md)
- [IGameSceneDelegate](IGameSceneDelegate.md)

## Constructors

### GameController(ViewController parent) {#m-cuttheropedx-gamemain-gamecontroller-ctor-cuttheropedx-framework-core-viewcontroller}

```csharp
public GameController(ViewController parent)
```

Initializes a new game controller.

Parameters:

- `parent`: Parent view controller.

## Fields

### BUTTON_WIN_EXIT {#f-cuttheropedx-gamemain-gamecontroller-button-win-exit}

```csharp
public const int BUTTON_WIN_EXIT
```

Button ID for exiting from the win result panel.

### BUTTON_WIN_NEXT_LEVEL {#f-cuttheropedx-gamemain-gamecontroller-button-win-next-level}

```csharp
public const int BUTTON_WIN_NEXT_LEVEL
```

Button ID for advancing to the next level from the win result panel.

### BUTTON_WIN_RESTART {#f-cuttheropedx-gamemain-gamecontroller-button-win-restart}

```csharp
public const int BUTTON_WIN_RESTART
```

Button ID for restarting from the win result panel.

### EXIT_CODE_FROM_PAUSE_MENU {#f-cuttheropedx-gamemain-gamecontroller-exit-code-from-pause-menu}

```csharp
public const int EXIT_CODE_FROM_PAUSE_MENU
```

Exit code for returning to the main menu from the pause menu.

### EXIT_CODE_FROM_PAUSE_MENU_LEVEL_SELECT {#f-cuttheropedx-gamemain-gamecontroller-exit-code-from-pause-menu-level-select}

```csharp
public const int EXIT_CODE_FROM_PAUSE_MENU_LEVEL_SELECT
```

Exit code for returning to level select from the pause menu.

### EXIT_CODE_FROM_PAUSE_MENU_LEVEL_SELECT_NEXT_PACK {#f-cuttheropedx-gamemain-gamecontroller-exit-code-from-pause-menu-level-select-next-pack}

```csharp
public const int EXIT_CODE_FROM_PAUSE_MENU_LEVEL_SELECT_NEXT_PACK
```

Exit code for returning to level select and advancing to the next pack.

### boxCloseHandled {#f-cuttheropedx-gamemain-gamecontroller-boxclosehandled}

```csharp
private bool boxCloseHandled
```

Whether the result box close flow has already persisted score and achievement state.

### exitCode {#f-cuttheropedx-gamemain-gamecontroller-exitcode}

```csharp
public int exitCode
```

Exit code describing the selected controller deactivation route.

### isGamePaused {#f-cuttheropedx-gamemain-gamecontroller-isgamepaused}

```csharp
private bool isGamePaused
```

Whether gameplay is currently paused.

### mapNameLabel {#f-cuttheropedx-gamemain-gamecontroller-mapnamelabel}

```csharp
private Text mapNameLabel
```

Pause-menu label that displays the active map or best score.

### name {#f-cuttheropedx-gamemain-gamecontroller-name}

```csharp
internal static readonly string[] name
```

Achievement identifiers for perfect pack completion by pack index.

### nameArray {#f-cuttheropedx-gamemain-gamecontroller-namearray}

```csharp
internal static readonly string[] nameArray
```

Achievement identifiers for pack completion by pack index.

### tmpDimTime {#f-cuttheropedx-gamemain-gamecontroller-tmpdimtime}

```csharp
private int tmpDimTime
```

Temporary dim-time value saved while the pause menu is open.

### touchAddressMap {#f-cuttheropedx-gamemain-gamecontroller-touchaddressmap}

```csharp
private readonly int[] touchAddressMap
```

Maps tracked touch slots to platform touch IDs.

## Methods

### Activate() {#m-cuttheropedx-gamemain-gamecontroller-activate}

```csharp
public override void Activate()
```

Activates the controller and notifies the root controller.

### BackButtonPressed() {#m-cuttheropedx-gamemain-gamecontroller-backbuttonpressed}

```csharp
public override bool BackButtonPressed()
```

Handles a back-button press.

Returns: Always `false`.

### BoxClosed() {#m-cuttheropedx-gamemain-gamecontroller-boxclosed}

```csharp
public void BoxClosed()
```

Handles result-box close completion, achievements, score persistence, and close state.

### CheckForBoxPerfect(int box, int pack) {#m-cuttheropedx-gamemain-gamecontroller-checkforboxperfect-system-int32-system-int32}

```csharp
public static void CheckForBoxPerfect(int box, int pack)
```

Posts the box-perfect achievement when every level in a pack have 3 stars.

Parameters:

- `box`: Box index containing the pack.
- `pack`: Pack index to check.

### CheckForBoxPerfect(int pack) {#m-cuttheropedx-gamemain-gamecontroller-checkforboxperfect-system-int32}

```csharp
public static void CheckForBoxPerfect(int pack)
```

Posts the box-perfect achievement for a pack using its configured box index.

Parameters:

- `pack`: Pack index to check.

### CreateGameView() {#m-cuttheropedx-gamemain-gamecontroller-creategameview}

```csharp
public void CreateGameView()
```

Creates the game scene, HUD buttons, pause menu, result box, and optional overlays.

### FullscreenToggled(bool isFullscreen) {#m-cuttheropedx-gamemain-gamecontroller-fullscreentoggled-system-boolean}

```csharp
public override void FullscreenToggled(bool isFullscreen)
```

Notifies the controller that fullscreen state changed.

Parameters:

- `isFullscreen`: New fullscreen state.

### GameLost() {#m-cuttheropedx-gamemain-gamecontroller-gamelost}

```csharp
public void GameLost()
```

Handles the game-scene loss callback.

### GameWon() {#m-cuttheropedx-gamemain-gamecontroller-gamewon}

```csharp
public void GameWon()
```

Handles the game-scene win callback.

### InitGameView() {#m-cuttheropedx-gamemain-gamecontroller-initgameview}

```csharp
public void InitGameView()
```

Initializes the game view for a fresh level start.

### LastLevelInPack() {#m-cuttheropedx-gamemain-gamecontroller-lastlevelinpack}

```csharp
public bool LastLevelInPack()
```

Determines whether the current level is the last level in the active pack.

Returns: `true` when the current level is the final pack level; otherwise, `false`.

### LevelFirstStart() {#m-cuttheropedx-gamemain-gamecontroller-levelfirststart}

```csharp
public void LevelFirstStart()
```

Starts the first-level open transition and enables gameplay input.

### LevelLost() {#m-cuttheropedx-gamemain-gamecontroller-levellost}

```csharp
public void LevelLost()
```

Starts the level-lost box transition.

### LevelQuit() {#m-cuttheropedx-gamemain-gamecontroller-levelquit}

```csharp
public void LevelQuit()
```

Starts the level quit transition and disables gameplay input.

### LevelStart() {#m-cuttheropedx-gamemain-gamecontroller-levelstart}

```csharp
public void LevelStart()
```

Starts a normal level open transition and enables gameplay input.

### LevelWon() {#m-cuttheropedx-gamemain-gamecontroller-levelwon}

```csharp
public void LevelWon()
```

Updates level result UI, persists improved score data, and starts the level-won result flow.

### MenuButtonPressed() {#m-cuttheropedx-gamemain-gamecontroller-menubuttonpressed}

```csharp
public override bool MenuButtonPressed()
```

Handles a menu-button press.

Returns: Always `false`.

### MouseMoved(float x, float y) {#m-cuttheropedx-gamemain-gamecontroller-mousemoved-system-single-system-single}

```csharp
public override bool MouseMoved(float x, float y)
```

Handles mouse-move input.

Parameters:

- `x`: Mouse X coordinate.
- `y`: Mouse Y coordinate.

Returns: Always `false`.

### OnButtonPressed(GameControllerButtonId n) {#m-cuttheropedx-gamemain-gamecontroller-onbuttonpressed-cuttheropedx-gamemain-gamecontrollerbuttonid}

```csharp
public void OnButtonPressed(GameControllerButtonId n)
```

Handles pause, result, audio, restart, and navigation buttons for the game controller.

Parameters:

- `n`: Game controller button identifier.

### OnNextLevel() {#m-cuttheropedx-gamemain-gamecontroller-onnextlevel}

```csharp
public void OnNextLevel()
```

Advances to the next level or deactivates the controller at the end of a non-picker pack.

### PlayMusic() {#m-cuttheropedx-gamemain-gamecontroller-playmusic}

```csharp
private static void PlayMusic()
```

Plays the appropriate gameplay music for the active pack and seasonal event.

### PostFlurryLevelEvent(string _) {#m-cuttheropedx-gamemain-gamecontroller-postflurrylevelevent-system-string}

```csharp
private static void PostFlurryLevelEvent(string _)
```

Posts a level analytics event.

Parameters:

- `_`: Analytics event name.

### ReleaseAllTouches(GameScene gs) {#m-cuttheropedx-gamemain-gamecontroller-releasealltouches-cuttheropedx-gamemain-gamescene}

```csharp
public void ReleaseAllTouches(GameScene gs)
```

Clears all tracked touch slots and sends release events to the game scene.

Parameters:

- `gs`: Game scene that should receive synthetic touch releases.

### SetAdSkipper() {#m-cuttheropedx-gamemain-gamecontroller-setadskipper}

```csharp
public void SetAdSkipper()
```

Initializes ad-skipper state for the active game view.

### SetPaused(bool p) {#m-cuttheropedx-gamemain-gamecontroller-setpaused-system-boolean}

```csharp
public void SetPaused(bool p)
```

Sets pause state, toggles HUD/menu visibility, and updates audio pause state.

Parameters:

- `p`: `true` to pause the game; `false` to resume it.

### TouchesBeganwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-gamemain-gamecontroller-touchesbeganwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public override bool TouchesBeganwithEvent(IList<TouchLocation> touches)
```

Forwards the first pressed touch in the collection to the active view.

Parameters:

- `touches`: Touch collection to inspect.

Returns: `true` if the active view handled the touch; otherwise `false`.

### TouchesEndedwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-gamemain-gamecontroller-touchesendedwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public override bool TouchesEndedwithEvent(IList<TouchLocation> touches)
```

Forwards the first released touch in the collection to the active view.

Parameters:

- `touches`: Touch collection to inspect.

Returns: `true` if the active view handled the touch; otherwise `false`.

### TouchesMovedwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-gamemain-gamecontroller-touchesmovedwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public override bool TouchesMovedwithEvent(IList<TouchLocation> touches)
```

Forwards the first moved touch in the collection to the active view.

Parameters:

- `touches`: Touch collection to inspect.

Returns: `true` if the active view handled the touch; otherwise `false`.

### UnlockNextLevel() {#m-cuttheropedx-gamemain-gamecontroller-unlocknextlevel}

```csharp
public static void UnlockNextLevel()
```

Unlocks the next level in the active pack when one exists and is still locked.

### Update(float t) {#m-cuttheropedx-gamemain-gamecontroller-update-system-single}

```csharp
public override void Update(float t)
```

Updates the active view, if one is currently shown.


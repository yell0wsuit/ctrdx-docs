---
title: Class Game1
description: Main game class that manages the MonoGame lifecycle, input handling, rendering, and Discord Rich Presence.
---

# Class Game1

Namespace: `CutTheRopeDX`

Assembly: `CutTheRope-DX.dll`

Source: `Game1.cs`

Main game class that manages the MonoGame lifecycle, input handling, rendering, and Discord Rich Presence.

## Declaration

```csharp
public class Game1 : Game
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [Game](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html)
- [Game1](Game1.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### Game1() {#m-cuttheropedx-game1-ctor}

```csharp
public Game1()
```

Initializes the game window, graphics device manager, and event handlers.

## Fields

### _DrawMovie {#f-cuttheropedx-game1-drawmovie}

```csharp
private bool _DrawMovie
```

Whether a movie is currently being drawn instead of the game scene.

### _altEnterPressed {#f-cuttheropedx-game1-altenterpressed}

```csharp
private bool _altEnterPressed
```

Whether Alt + Enter was held on the previous frame.

### _currentMouseState {#f-cuttheropedx-game1-currentmousestate}

```csharp
private MouseState _currentMouseState
```

Mouse state captured during the current frame.

### _f11Pressed {#f-cuttheropedx-game1-f11pressed}

```csharp
private bool _f11Pressed
```

Whether F11 was held on the previous frame.

### _ignoreMouseClick {#f-cuttheropedx-game1-ignoremouseclick}

```csharp
private int _ignoreMouseClick
```

Remaining frames to ignore mouse clicks after the window regains focus.

### bFirstFrame {#f-cuttheropedx-game1-bfirstframe}

```csharp
private bool bFirstFrame
```

Whether the first frame has not yet been rendered.

### elapsedTime {#f-cuttheropedx-game1-elapsedtime}

```csharp
private TimeSpan elapsedTime
```

Accumulated elapsed time used to measure the one-second FPS interval.

### frameCounter {#f-cuttheropedx-game1-framecounter}

```csharp
private int frameCounter
```

Number of frames rendered in the current one-second interval.

### frameRate {#f-cuttheropedx-game1-framerate}

```csharp
private int frameRate
```

Measured frames per second from the previous one-second interval.

### keyState {#f-cuttheropedx-game1-keystate}

```csharp
private readonly Dictionary<Keys, bool> keyState
```

Tracks previous-frame key states for edge detection in [IsKeyPressed](#m-cuttheropedx-game1-iskeypressed-microsoft-xna-framework-input-keys).

### keyboardStateXna {#f-cuttheropedx-game1-keyboardstatexna}

```csharp
private KeyboardState keyboardStateXna
```

Current keyboard state used for input polling.

## Properties

### RPC {#p-cuttheropedx-game1-rpc}

```csharp
public static RPCHelpers RPC { get; private set; }
```

Discord Rich Presence helper instance.

## Methods

### Draw(GameTime gameTime) {#m-cuttheropedx-game1-draw-microsoft-xna-framework-gametime}

```csharp
protected override void Draw(GameTime gameTime)
```

Called when the game should draw a frame. Draws the [DrawableGameComponent](https://docs.monogame.net/api/Microsoft.Xna.Framework.DrawableGameComponent.html) instances attached to this game. Override this to render your game.

Parameters:

- `gameTime`: A [GameTime](https://docs.monogame.net/api/Microsoft.Xna.Framework.GameTime.html) instance containing the elapsed time since the last call to [Draw](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html) and the total time elapsed since the game started.

### DrawMovie() {#m-cuttheropedx-game1-drawmovie}

```csharp
public void DrawMovie()
```

Renders the current video frame to the screen, stopping playback on mouse click.

### Game1_Activated(object sender, EventArgs e) {#m-cuttheropedx-game1-game1-activated-system-object-system-eventargs}

```csharp
private void Game1_Activated(object sender, EventArgs e)
```

Resumes the game when the window regains focus.

Parameters:

- `sender`: The game instance raising the event.
- `e`: Event arguments for the activation notification.

### Game1_Deactivated(object sender, EventArgs e) {#m-cuttheropedx-game1-game1-deactivated-system-object-system-eventargs}

```csharp
private void Game1_Deactivated(object sender, EventArgs e)
```

Pauses the game when the window loses focus.

Parameters:

- `sender`: The game instance raising the event.
- `e`: Event arguments for the deactivation notification.

### Game1_Exiting(object sender, EventArgs e) {#m-cuttheropedx-game1-game1-exiting-system-object-system-eventargs}

```csharp
private void Game1_Exiting(object sender, EventArgs e)
```

Saves preferences and disposes resources when the game is closing.

Parameters:

- `sender`: The game instance raising the event.
- `e`: Event arguments for the exit notification.

### GetMouseState() {#m-cuttheropedx-game1-getmousestate}

```csharp
public MouseState GetMouseState()
```

Returns the current mouse state captured during the last update.

Returns: The most recently polled [MouseState](https://docs.monogame.net/api/Microsoft.Xna.Framework.Input.MouseState.html).

### GetSystemLanguage() {#m-cuttheropedx-game1-getsystemlanguage}

```csharp
private static Language GetSystemLanguage()
```

Returns the system language detected from the current culture.

Returns: The [Language](Framework/Language.md) matching the current system culture.

### GraphicsDeviceManager_PreparingDeviceSettings(object sender, PreparingDeviceSettingsEventArgs e) {#m-cuttheropedx-game1-graphicsdevicemanager-preparingdevicesettings-system-object-microsoft-xna-framework-preparingdevicesettingseventargs}

```csharp
private void GraphicsDeviceManager_PreparingDeviceSettings(object sender, PreparingDeviceSettingsEventArgs e)
```

Disables the depth-stencil buffer since the game is 2D only.

Parameters:

- `sender`: The graphics device manager raising the event.
- `e`: Event arguments containing the device settings being prepared.

### HandleFullscreenToggle(KeyboardState keyboardState) {#m-cuttheropedx-game1-handlefullscreentoggle-microsoft-xna-framework-input-keyboardstate}

```csharp
private void HandleFullscreenToggle(KeyboardState keyboardState)
```

Toggles fullscreen mode when Alt + Enter or F11 is pressed.

Parameters:

- `keyboardState`: Current keyboard state.

### Initialize() {#m-cuttheropedx-game1-initialize}

```csharp
protected override void Initialize()
```

Override this to initialize the game and load any needed non-graphical resources. Initializes attached [GameComponent](https://docs.monogame.net/api/Microsoft.Xna.Framework.GameComponent.html) instances and calls [LoadContent](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html).

### IsKeyDown(Keys key) {#m-cuttheropedx-game1-iskeydown-microsoft-xna-framework-input-keys}

```csharp
public bool IsKeyDown(Keys key)
```

Returns whether the specified key is currently held down.

Parameters:

- `key`: The key to check.

Returns: `true` if `key` is currently held; otherwise `false`.

### IsKeyPressed(Keys key) {#m-cuttheropedx-game1-iskeypressed-microsoft-xna-framework-input-keys}

```csharp
public bool IsKeyPressed(Keys key)
```

Returns whether the specified key was just pressed this frame (not held).

Parameters:

- `key`: The key to check.

Returns: `true` if `key` transitioned from up to down this frame; otherwise `false`.

### LoadContent() {#m-cuttheropedx-game1-loadcontent}

```csharp
protected override void LoadContent()
```

Override this to load graphical resources required by the game.

### UnloadContent() {#m-cuttheropedx-game1-unloadcontent}

```csharp
protected override void UnloadContent()
```

Override this to unload graphical resources loaded by the game.

### Update(GameTime gameTime) {#m-cuttheropedx-game1-update-microsoft-xna-framework-gametime}

```csharp
protected override void Update(GameTime gameTime)
```

Called when the game should update. Updates the [GameComponent](https://docs.monogame.net/api/Microsoft.Xna.Framework.GameComponent.html) instances attached to this game. Override this to update your game.

Parameters:

- `gameTime`: The elapsed time since the last call to [Update](https://docs.monogame.net/api/Microsoft.Xna.Framework.Game.html).

### Window_ClientSizeChanged(object sender, EventArgs e) {#m-cuttheropedx-game1-window-clientsizechanged-system-object-system-eventargs}

```csharp
private void Window_ClientSizeChanged(object sender, EventArgs e)
```

Handles window resize events, adjusting the viewport while ignoring fullscreen and minimized states.

Parameters:

- `sender`: The window raising the event.
- `e`: Event arguments for the size change.


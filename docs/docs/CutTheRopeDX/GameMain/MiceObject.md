---
title: Class MiceObject
description: Manages all mouse entities within a game scene, including activation, rendering, candy handoff, and mouse switching logic.
---

# Class MiceObject

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MiceObject.cs`

Manages all mouse entities within a game scene, including activation, rendering, candy handoff, and mouse switching logic.

## Declaration

```csharp
internal sealed class MiceObject
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [MiceObject](MiceObject.md)

## Constructors

### MiceObject(GameScene scene) {#m-cuttheropedx-gamemain-miceobject-ctor-cuttheropedx-gamemain-gamescene}

```csharp
public MiceObject(GameScene scene)
```

Manages all mouse entities within a game scene, including activation, rendering, candy handoff, and mouse switching logic.

Parameters:

- `scene`: Game scene that owns the mouse system.

## Fields

### activeIndex {#f-cuttheropedx-gamemain-miceobject-activeindex}

```csharp
private int activeIndex
```

Logical index of the currently active mouse.

### activeMouse {#f-cuttheropedx-gamemain-miceobject-activemouse}

```csharp
private Mouse activeMouse
```

Mouse currently active for candy interaction.

### advanceLocked {#f-cuttheropedx-gamemain-miceobject-advancelocked}

```csharp
private bool advanceLocked
```

Whether active mouse advancement is locked.

### carriedCandy {#f-cuttheropedx-gamemain-miceobject-carriedcandy}

```csharp
private GameObject carriedCandy
```

Candy object currently being handed off between mice.

### carriedStar {#f-cuttheropedx-gamemain-miceobject-carriedstar}

```csharp
private ConstraintedPoint carriedStar
```

Star point currently being handed off between mice.

### mice {#f-cuttheropedx-gamemain-miceobject-mice}

```csharp
private readonly List<Mouse> mice
```

Registered mice controlled by this manager.

### scene {#f-cuttheropedx-gamemain-miceobject-scene}

```csharp
private readonly GameScene scene
```

Game scene that owns this mouse manager.

### sharedSpriteContainer {#f-cuttheropedx-gamemain-miceobject-sharedspritecontainer}

```csharp
private Mouse.SharedMouseSprites? sharedSpriteContainer
```

Shared sprite container transferred between active mice.

## Methods

### ActiveMouseHasCandy() {#m-cuttheropedx-gamemain-miceobject-activemousehascandy}

```csharp
public bool ActiveMouseHasCandy()
```

Indicates whether the active mouse is currently holding candy.

Returns: `true` if the active mouse has candy; otherwise `false`.

### AdvanceToNextMouse() {#m-cuttheropedx-gamemain-miceobject-advancetonextmouse}

```csharp
public void AdvanceToNextMouse()
```

Advances control to the next mouse in index order, transferring any carried candy and star state.

### CreateSharedSprites() {#m-cuttheropedx-gamemain-miceobject-createsharedsprites}

```csharp
private static Mouse.SharedMouseSprites CreateSharedSprites()
```

Creates and configures the shared sprite container used by all mice.

Returns: The shared mouse sprite container, body animation, and eye animation.

### DrawHoles() {#m-cuttheropedx-gamemain-miceobject-drawholes}

```csharp
public void DrawHoles()
```

Draws the mouse holes for all registered mice.

### DrawMice() {#m-cuttheropedx-gamemain-miceobject-drawmice}

```csharp
public void DrawMice()
```

Iterates through all registered mice and draws only the currently active mouse.

### ForceDropCandy() {#m-cuttheropedx-gamemain-miceobject-forcedropcandy}

```csharp
public void ForceDropCandy()
```

Forces the active mouse to drop candy and retreat back into its hole.

### GrabWithActiveMouse(ConstraintedPoint star, GameObject candy, bool isLeft) {#m-cuttheropedx-gamemain-miceobject-grabwithactivemouse-cuttheropedx-framework-physics-constraintedpoint-cuttheropedx-framework-helpers-gameobject-system-boolean}

```csharp
public void GrabWithActiveMouse(ConstraintedPoint star, GameObject candy, bool isLeft)
```

Commands the active mouse to grab a candy from a star point.

Parameters:

- `star`: The constrained star point.
- `candy`: The candy game object.
- `isLeft`: Indicates whether the interaction originates from the left side (used for rope release logic).

### HandleClick(float x, float y) {#m-cuttheropedx-gamemain-miceobject-handleclick-system-single-system-single}

```csharp
public bool HandleClick(float x, float y)
```

Handles click interaction for dropping candy from the active mouse.

Parameters:

- `x`: X coordinate of the click.
- `y`: Y coordinate of the click.

Returns: `true` if the click was handled and candy was dropped; otherwise `false`.

### IsActiveMouseInRange(ConstraintedPoint target) {#m-cuttheropedx-gamemain-miceobject-isactivemouseinrange-cuttheropedx-framework-physics-constraintedpoint}

```csharp
public bool IsActiveMouseInRange(ConstraintedPoint target)
```

Checks whether the active mouse is within grab range of a target point.

Parameters:

- `target`: The constrained point to test against.

Returns: `true` if the active mouse exists, is active, and within grab radius; otherwise `false`.

### LockActiveMouse() {#m-cuttheropedx-gamemain-miceobject-lockactivemouse}

```csharp
public void LockActiveMouse()
```

Locks the active mouse, preventing further advancement to other mice.

### RegisterMouse(Mouse mouse, int index) {#m-cuttheropedx-gamemain-miceobject-registermouse-cuttheropedx-gamemain-mouse-system-int32}

```csharp
public void RegisterMouse(Mouse mouse, int index)
```

Registers a mouse with a given index and initializes shared sprite resources if needed. May activate and spawn the mouse depending on index rules.

Parameters:

- `mouse`: The mouse instance to register.
- `index`: Logical index used for ordering and activation.

### Update(float delta) {#m-cuttheropedx-gamemain-miceobject-update-system-single}

```csharp
public void Update(float delta)
```

Updates all registered mice.

Parameters:

- `delta`: Elapsed time since the last update, in seconds.


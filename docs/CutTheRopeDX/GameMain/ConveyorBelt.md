---
title: Class ConveyorBelt
description: Represents a conveyor belt game element that transports items along a linear path. Items placed on the belt are automatically moved in the belt's direction, with support for both automatic (constant velocity) and manual (user-draggable) operation modes.
---

# Class ConveyorBelt

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `ConveyorBelt.cs`

Represents a conveyor belt game element that transports items along a linear path. Items placed on the belt are automatically moved in the belt's direction, with support for both automatic (constant velocity) and manual (user-draggable) operation modes.

## Declaration

```csharp
internal sealed class ConveyorBelt : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [ConveyorBelt](ConveyorBelt.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### ConveyorBelt() {#m-cuttheropedx-gamemain-conveyorbelt-ctor}

```csharp
public ConveyorBelt()
```

Initializes a new instance of the [ConveyorBelt](ConveyorBelt.md) class with default anchor settings. Use [Create](#m-cuttheropedx-gamemain-conveyorbelt-create-system-int32-system-single-system-single-system-single-system-single-system-single-system-boolean-system-single) or [InitializeBelt](#m-cuttheropedx-gamemain-conveyorbelt-initializebelt-system-int32-system-single-system-single-system-single-system-single-system-single-system-boolean-system-single) to fully configure the belt.

## Fields

### ActiveThreshold {#f-cuttheropedx-gamemain-conveyorbelt-activethreshold}

```csharp
private const float ActiveThreshold
```

Minimum [offsetDelta](#f-cuttheropedx-gamemain-conveyorbelt-offsetdelta) magnitude to consider the belt active.

### AlignmentSpeed {#f-cuttheropedx-gamemain-conveyorbelt-alignmentspeed}

```csharp
private const float AlignmentSpeed
```

Speed at which items are pushed out of the transition zone during alignment.

### CenterlineHardSnapDistance {#f-cuttheropedx-gamemain-conveyorbelt-centerlinehardsnapdistance}

```csharp
private const float CenterlineHardSnapDistance
```

Side-offset below which the item hard-snaps to zero instead of lerping.

### CenterlineReturnFactor {#f-cuttheropedx-gamemain-conveyorbelt-centerlinereturnfactor}

```csharp
private const float CenterlineReturnFactor
```

Lerp factor applied each frame to return items to the belt centreline.

### CenterlineSnapThreshold {#f-cuttheropedx-gamemain-conveyorbelt-centerlinesnapthreshold}

```csharp
private const float CenterlineSnapThreshold
```

Side-offset below which an item is snapped exactly onto the belt centreline.

### ConveyorScale {#f-cuttheropedx-gamemain-conveyorbelt-conveyorscale}

```csharp
private const float ConveyorScale
```

World-scale multiplier applied to all iOS-derived tuning constants.

### DistributionMinSpacing {#f-cuttheropedx-gamemain-conveyorbelt-distributionminspacing}

```csharp
private const float DistributionMinSpacing
```

Minimum gap between two items when distributing overlapping objects.

### ImgObjConveyorEnd {#f-cuttheropedx-gamemain-conveyorbelt-imgobjconveyorend}

```csharp
private const int ImgObjConveyorEnd
```

Quad index for the conveyor end-cap sprite.

### ImgObjConveyorEndSide {#f-cuttheropedx-gamemain-conveyorbelt-imgobjconveyorendside}

```csharp
private const int ImgObjConveyorEndSide
```

Quad index for the conveyor end-cap side corner sprite.

### ImgObjConveyorHighlight {#f-cuttheropedx-gamemain-conveyorbelt-imgobjconveyorhighlight}

```csharp
private const int ImgObjConveyorHighlight
```

Quad index for the conveyor highlight overlay sprite.

### ImgObjConveyorMiddle {#f-cuttheropedx-gamemain-conveyorbelt-imgobjconveyormiddle}

```csharp
private const int ImgObjConveyorMiddle
```

Quad index for the conveyor middle background sprite.

### ImgObjConveyorMiddleSide {#f-cuttheropedx-gamemain-conveyorbelt-imgobjconveyormiddleside}

```csharp
private const int ImgObjConveyorMiddleSide
```

Quad index for the conveyor middle side rail sprite.

### ImgObjConveyorPlate {#f-cuttheropedx-gamemain-conveyorbelt-imgobjconveyorplate}

```csharp
private const int ImgObjConveyorPlate
```

Quad index for the conveyor plate (moving surface tile) sprite.

### ImgObjConveyorPlateArrow {#f-cuttheropedx-gamemain-conveyorbelt-imgobjconveyorplatearrow}

```csharp
private const int ImgObjConveyorPlateArrow
```

Quad index for the directional arrow overlay on the plate sprite.

### ManualMoveSoundDistance {#f-cuttheropedx-gamemain-conveyorbelt-manualmovesounddistance}

```csharp
private const float ManualMoveSoundDistance
```

Accumulated drag distance between manual-move sound effects.

### ManualStopThreshold {#f-cuttheropedx-gamemain-conveyorbelt-manualstopthreshold}

```csharp
private const float ManualStopThreshold
```

Below this delta the manual belt stops and alignment begins.

### OnDestroyRopesForCandy {#f-cuttheropedx-gamemain-conveyorbelt-ondestroyropesforcandy}

```csharp
public Action<int, Grab> OnDestroyRopesForCandy
```

Callback invoked when a Grab wraps around the belt edge, requesting all other ropes for the same candy to be cut. Parameters: candyNumber, the Grab that wrapped (excluded from cutting).

### OnTransporterMoves {#f-cuttheropedx-gamemain-conveyorbelt-ontransportermoves}

```csharp
public Action<ConveyorBelt> OnTransporterMoves
```

Callback invoked after MoveBoundObjects completes. Used by ConveyorBeltObject for transporter-to-transporter handoff (iOS transporterMoves: delegate).

### active {#f-cuttheropedx-gamemain-conveyorbelt-active}

```csharp
private bool active
```

Whether the belt is currently moving.

### activePointerId {#f-cuttheropedx-gamemain-conveyorbelt-activepointerid}

```csharp
private int activePointerId
```

Platform pointer ID currently dragging this manual belt, or −1 if idle.

### alignmentSign {#f-cuttheropedx-gamemain-conveyorbelt-alignmentsign}

```csharp
private int alignmentSign
```

Direction of the alignment push: 1 pushes toward the right end, −1 toward the left.

### beltHeight {#f-cuttheropedx-gamemain-conveyorbelt-beltheight}

```csharp
private float beltHeight
```

Thickness of the belt perpendicular to its direction in world units.

### beltVisual {#f-cuttheropedx-gamemain-conveyorbelt-beltvisual}

```csharp
private ConveyorBelt.ConveyorBeltVisual beltVisual
```

The scrolling plate visual that renders the belt surface.

### beltWidth {#f-cuttheropedx-gamemain-conveyorbelt-beltwidth}

```csharp
private float beltWidth
```

Length of the belt along its direction in world units.

### boundObjects {#f-cuttheropedx-gamemain-conveyorbelt-boundobjects}

```csharp
private readonly List<ITransporterItem> boundObjects
```

Items currently bound to and riding on this belt.

### direction {#f-cuttheropedx-gamemain-conveyorbelt-direction}

```csharp
private Vector direction
```

Unit direction vector along the belt's length in world space.

### lastDragPosition {#f-cuttheropedx-gamemain-conveyorbelt-lastdragposition}

```csharp
private Vector lastDragPosition
```

Local-space position of the pointer at the last drag event.

### manualTravelDistance {#f-cuttheropedx-gamemain-conveyorbelt-manualtraveldistance}

```csharp
private float manualTravelDistance
```

Accumulated manual drag distance since the last move sound was played.

### needsAlignment {#f-cuttheropedx-gamemain-conveyorbelt-needsalignment}

```csharp
private bool needsAlignment
```

When `true`, an alignment push is applied next update to clear the transition zone.

### objectsDistributed {#f-cuttheropedx-gamemain-conveyorbelt-objectsdistributed}

```csharp
private bool objectsDistributed
```

When `true`, bound objects are sufficiently separated and no distribution is needed.

### offsetDelta {#f-cuttheropedx-gamemain-conveyorbelt-offsetdelta}

```csharp
private float offsetDelta
```

Movement delta applied this frame, in local belt units.

### rotationRad {#f-cuttheropedx-gamemain-conveyorbelt-rotationrad}

```csharp
private float rotationRad
```

Belt rotation in radians (derived from the degree-based `rotation` property).

### transitionDist {#f-cuttheropedx-gamemain-conveyorbelt-transitiondist}

```csharp
private float transitionDist
```

Distance from each belt edge defining the wrap-around transition zone.

### velocity {#f-cuttheropedx-gamemain-conveyorbelt-velocity}

```csharp
private float velocity
```

Automatic movement speed in world units per second.

## Properties

### ActiveSetTime {#p-cuttheropedx-gamemain-conveyorbelt-activesettime}

```csharp
public double ActiveSetTime { get; private set; }
```

Gets the timestamp when this transporter was most recently activated by touch. Used for iOS-style transporter handoff arbitration.

### BoundObjects {#p-cuttheropedx-gamemain-conveyorbelt-boundobjects}

```csharp
public IReadOnlyList<ITransporterItem> BoundObjects { get; }
```

The list of items currently bound to this belt.

### Direction {#p-cuttheropedx-gamemain-conveyorbelt-direction}

```csharp
public Vector Direction { get; }
```

Gets the normalized direction vector along the belt's length.

### IsManual {#p-cuttheropedx-gamemain-conveyorbelt-ismanual}

```csharp
public bool IsManual { get; private set; }
```

Gets whether this belt is controlled manually by user drag input.

## Methods

### ApplyItemScale(ITransporterItem item, float scale) {#m-cuttheropedx-gamemain-conveyorbelt-applyitemscale-cuttheropedx-gamemain-itransporteritem-system-single}

```csharp
private static void ApplyItemScale(ITransporterItem item, float scale)
```

Applies a uniform scale to `item`, delegating to [ITransporterScaleAware](ITransporterScaleAware.md) if implemented, otherwise setting scaleX/scaleY directly.

Parameters:

- `item`: The item to scale.
- `scale`: The scale factor to apply.

### BindObject(ITransporterItem item) {#m-cuttheropedx-gamemain-conveyorbelt-bindobject-cuttheropedx-gamemain-itransporteritem}

```csharp
public void BindObject(ITransporterItem item)
```

Binds an item to this conveyor belt, setting its initial position along the belt.

Parameters:

- `item`: The transporter item to bind.

### BuildVisuals() {#m-cuttheropedx-gamemain-conveyorbelt-buildvisuals}

```csharp
private void BuildVisuals()
```

Constructs the belt's visual components including frame, pillars, and moving surface.

### CollidesWithCircle(Vector center, float radius) {#m-cuttheropedx-gamemain-conveyorbelt-collideswithcircle-cuttheropedx-framework-core-vector-system-single}

```csharp
public bool CollidesWithCircle(Vector center, float radius)
```

Checks whether a circle (center + radius) overlaps the belt's axis-aligned bounds.

Parameters:

- `center`: The center of the circle in world space.
- `radius`: The radius of the circle.

Returns: `true` if the circle overlaps the belt bounds; `false` otherwise.

### Contains(Vector worldPoint) {#m-cuttheropedx-gamemain-conveyorbelt-contains-cuttheropedx-framework-core-vector}

```csharp
public bool Contains(Vector worldPoint)
```

Determines whether a world-space point is within the belt's bounds.

Parameters:

- `worldPoint`: The point to test in world coordinates.

Returns: `true` if the point is inside the belt area; `false` otherwise.

### ContainsWithPadding(Vector worldPoint, float padding) {#m-cuttheropedx-gamemain-conveyorbelt-containswithpadding-cuttheropedx-framework-core-vector-system-single}

```csharp
public bool ContainsWithPadding(Vector worldPoint, float padding)
```

Determines whether a world-space point is within the belt's bounds plus a padding margin.

Parameters:

- `worldPoint`: The point to test in world coordinates.
- `padding`: The extra margin around the belt bounds.

Returns: `true` if the point is inside the padded belt area; `false` otherwise.

### Create(int id, float x, float y, float length, float height, float rotation, bool isManual, float velocity) {#m-cuttheropedx-gamemain-conveyorbelt-create-system-int32-system-single-system-single-system-single-system-single-system-single-system-boolean-system-single}

```csharp
public static ConveyorBelt Create(int id, float x, float y, float length, float height, float rotation, bool isManual, float velocity)
```

Creates and initializes a new conveyor belt instance.

Parameters:

- `id`: Unique identifier for this belt.
- `x`: The x-coordinate of the belt's left edge origin.
- `y`: The y-coordinate of the belt's left edge origin.
- `length`: The length of the belt along its direction.
- `height`: The height (thickness) of the belt.
- `rotation`: The rotation angle in degrees.
- `isManual`: If `true`, the belt is controlled by user drag; otherwise it moves automatically.
- `velocity`: The automatic movement speed (used only when not manual).

Returns: A fully initialized conveyor belt.

### CreatePiece(int quad, int anchors) {#m-cuttheropedx-gamemain-conveyorbelt-createpiece-system-int32-system-int32}

```csharp
private static Image CreatePiece(int quad, int anchors)
```

Creates a visual piece for the belt frame from the transporter sprite sheet.

Parameters:

- `quad`: Texture quad index from the conveyor sprite sheet.
- `anchors`: The anchor value for both anchor and parentAnchor.

Returns: The configured [Image](../Framework/Visual/Image.md) piece.

### DistributeObjects(float deltaTime) {#m-cuttheropedx-gamemain-conveyorbelt-distributeobjects-system-single}

```csharp
private void DistributeObjects(float deltaTime)
```

Separates overlapping items on the belt by pushing them apart. Matches iOS distributeObjects:/pushObject:.

Parameters:

- `deltaTime`: Elapsed seconds since the last frame.

### HasItem(ITransporterItem item) {#m-cuttheropedx-gamemain-conveyorbelt-hasitem-cuttheropedx-gamemain-itransporteritem}

```csharp
public bool HasItem(ITransporterItem item)
```

Checks whether an item is currently bound to this belt.

Parameters:

- `item`: The transporter item to check.

Returns: `true` if the item is on this belt; `false` otherwise.

### InitializeBelt(int id, float x, float y, float length, float height, float rotation, bool isManual, float velocity) {#m-cuttheropedx-gamemain-conveyorbelt-initializebelt-system-int32-system-single-system-single-system-single-system-single-system-single-system-boolean-system-single}

```csharp
public void InitializeBelt(int id, float x, float y, float length, float height, float rotation, bool isManual, float velocity)
```

Configures the belt with the specified parameters and rebuilds its visuals.

Parameters:

- `id`: Unique identifier for this belt.
- `x`: The x-coordinate of the belt's left edge origin.
- `y`: The y-coordinate of the belt's left edge origin.
- `length`: The length of the belt along its direction.
- `height`: The height (thickness) of the belt.
- `rotation`: The rotation angle in degrees.
- `isManual`: If `true`, the belt is controlled by user drag; otherwise it moves automatically.
- `velocity`: The automatic movement speed (used only when not manual).

### IsActive() {#m-cuttheropedx-gamemain-conveyorbelt-isactive}

```csharp
public bool IsActive()
```

Determines whether the belt is currently moving.

Returns: `true` if the belt has non-zero movement delta; `false` otherwise.

### MoveBoundObjects(float delta) {#m-cuttheropedx-gamemain-conveyorbelt-moveboundobjects-system-single}

```csharp
private void MoveBoundObjects(float delta)
```

Moves all bound objects along the belt by the given delta, handling wrapping and scale transitions at belt edges.

Parameters:

- `delta`: The distance to move items along the belt.

### OnPointerDown(float pointerX, float pointerY, int pointerId) {#m-cuttheropedx-gamemain-conveyorbelt-onpointerdown-system-single-system-single-system-int32}

```csharp
public bool OnPointerDown(float pointerX, float pointerY, int pointerId)
```

Handles pointer down events for manual belt dragging.

Parameters:

- `pointerX`: The x-coordinate of the pointer in world space.
- `pointerY`: The y-coordinate of the pointer in world space.
- `pointerId`: The unique identifier of the pointer.

Returns: `true` if the belt captured the pointer; `false` otherwise.

### OnPointerMove(float pointerX, float pointerY, int pointerId) {#m-cuttheropedx-gamemain-conveyorbelt-onpointermove-system-single-system-single-system-int32}

```csharp
public bool OnPointerMove(float pointerX, float pointerY, int pointerId)
```

Handles pointer move events to drag the manual belt.

Parameters:

- `pointerX`: The x-coordinate of the pointer in world space.
- `pointerY`: The y-coordinate of the pointer in world space.
- `pointerId`: The unique identifier of the pointer.

Returns: `true` if the belt handled the movement; `false` otherwise.

### OnPointerUp(float pointerX, float pointerY, int pointerId) {#m-cuttheropedx-gamemain-conveyorbelt-onpointerup-system-single-system-single-system-int32}

```csharp
public bool OnPointerUp(float pointerX, float pointerY, int pointerId)
```

Handles pointer up events to release manual belt dragging.

Parameters:

- `pointerX`: The x-coordinate of the pointer in world space.
- `pointerY`: The y-coordinate of the pointer in world space.
- `pointerId`: The unique identifier of the pointer.

Returns: `true` if the belt released its captured pointer; `false` otherwise.

### PlayManualMoveSound() {#m-cuttheropedx-gamemain-conveyorbelt-playmanualmovesound}

```csharp
private static void PlayManualMoveSound()
```

Plays a random conveyor movement sound effect for manual dragging feedback.

### PushObject(ITransporterItem item, float currentPos, float distance) {#m-cuttheropedx-gamemain-conveyorbelt-pushobject-cuttheropedx-gamemain-itransporteritem-system-single-system-single}

```csharp
private void PushObject(ITransporterItem item, float currentPos, float distance)
```

Pushes an item along the belt, clamping to transition zone boundaries.

Parameters:

- `item`: The item to push.
- `currentPos`: The item's current position along the belt.
- `distance`: Signed push distance in belt-local units.

### Remove(ITransporterItem item) {#m-cuttheropedx-gamemain-conveyorbelt-remove-cuttheropedx-gamemain-itransporteritem}

```csharp
public void Remove(ITransporterItem item)
```

Removes a bound item from this belt.

Parameters:

- `item`: The transporter item to remove.

### StartAlignmentIfNeeded() {#m-cuttheropedx-gamemain-conveyorbelt-startalignmentifneeded}

```csharp
private void StartAlignmentIfNeeded()
```

Checks if any bound object is in the transition zone and starts alignment if so. Matches iOS startAlignmentIfNeeded.

### ToLocalSpace(Vector worldPoint) {#m-cuttheropedx-gamemain-conveyorbelt-tolocalspace-cuttheropedx-framework-core-vector}

```csharp
public Vector ToLocalSpace(Vector worldPoint)
```

Transforms a world-space point into the belt's local coordinate space. Local X runs along the belt length; local Y is perpendicular to the belt.

Parameters:

- `worldPoint`: The point in world coordinates.

Returns: The point in belt-local coordinates.

### Update(float deltaTime) {#m-cuttheropedx-gamemain-conveyorbelt-update-system-single}

```csharp
public override void Update(float deltaTime)
```

Updates children and advances the current timeline by `delta` seconds.

### VecToWorldSpace(float localX, float localY) {#m-cuttheropedx-gamemain-conveyorbelt-vectoworldspace-system-single-system-single}

```csharp
private Vector VecToWorldSpace(float localX, float localY)
```

Transforms a local-space vector to world-space coordinates.

Parameters:

- `localX`: The local X coordinate (along belt length).
- `localY`: The local Y coordinate (perpendicular to belt).

Returns: The world-space position.


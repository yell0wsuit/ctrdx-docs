---
title: Class ConveyorBeltObject
description: Manages a collection of conveyor belts in a level, handling their updates, rendering, item attachment, and coordinating pointer input across overlapping belts.
---

# Class ConveyorBeltObject

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `ConveyorBeltObject.cs`

Manages a collection of conveyor belts in a level, handling their updates, rendering, item attachment, and coordinating pointer input across overlapping belts.

## Declaration

```csharp
internal sealed class ConveyorBeltObject
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ConveyorBeltObject](ConveyorBeltObject.md)

## Fields

### OnDestroyRopesForCandy {#f-cuttheropedx-gamemain-conveyorbeltobject-ondestroyropesforcandy}

```csharp
public Action<int, Grab> OnDestroyRopesForCandy
```

Set by [GameScene](GameScene.md). Called when a Grab wraps and other ropes for the same candy should be cut. Parameters: candyNumber, the Grab that wrapped.

### list {#f-cuttheropedx-gamemain-conveyorbeltobject-list}

```csharp
private readonly List<ConveyorBelt> list
```

All conveyor belts managed by this object.

### touchCandidates {#f-cuttheropedx-gamemain-conveyorbeltobject-touchcandidates}

```csharp
private readonly List<ConveyorBelt> touchCandidates
```

Reusable scratch list for sorting manual belts during draw and input handling.

## Methods

### AutoTransportersOwnObject(ITransporterItem item) {#m-cuttheropedx-gamemain-conveyorbeltobject-autotransportersownobject-cuttheropedx-gamemain-itransporteritem}

```csharp
private bool AutoTransportersOwnObject(ITransporterItem item)
```

Returns `true` if any non-manual (automatic) belt currently owns `item`.

Parameters:

- `item`: The item to check.

Returns: `true` if an automatic belt owns the item; otherwise `false`.

### Clear() {#m-cuttheropedx-gamemain-conveyorbeltobject-clear}

```csharp
public void Clear()
```

Removes all conveyor belts and resets the collection state.

### Count() {#m-cuttheropedx-gamemain-conveyorbeltobject-count}

```csharp
public int Count()
```

Gets the number of conveyor belts in this collection.

Returns: The count of belts.

### Draw() {#m-cuttheropedx-gamemain-conveyorbeltobject-draw}

```csharp
public void Draw()
```

Draws all conveyor belts in the collection.

### Iterator() {#m-cuttheropedx-gamemain-conveyorbeltobject-iterator}

```csharp
public IEnumerable<ConveyorBelt> Iterator()
```

Returns an enumerable for iterating over all belts in the collection.

Returns: An enumerable of conveyor belts.

### OnPointerDown(float pointerX, float pointerY, int pointerId) {#m-cuttheropedx-gamemain-conveyorbeltobject-onpointerdown-system-single-system-single-system-int32}

```csharp
public bool OnPointerDown(float pointerX, float pointerY, int pointerId)
```

Handles pointer down events by selecting the most recently activated manual transporter first.

Parameters:

- `pointerX`: The x-coordinate of the pointer.
- `pointerY`: The y-coordinate of the pointer.
- `pointerId`: The unique identifier of the pointer.

Returns: `true` if a belt captured the pointer; `false` otherwise.

### OnPointerMove(float pointerX, float pointerY, int pointerId) {#m-cuttheropedx-gamemain-conveyorbeltobject-onpointermove-system-single-system-single-system-int32}

```csharp
public bool OnPointerMove(float pointerX, float pointerY, int pointerId)
```

Handles pointer move events.

Parameters:

- `pointerX`: The x-coordinate of the pointer.
- `pointerY`: The y-coordinate of the pointer.
- `pointerId`: The unique identifier of the pointer.

Returns: `true` if a belt handled the movement; `false` otherwise.

### OnPointerUp(float pointerX, float pointerY, int pointerId) {#m-cuttheropedx-gamemain-conveyorbeltobject-onpointerup-system-single-system-single-system-int32}

```csharp
public bool OnPointerUp(float pointerX, float pointerY, int pointerId)
```

Handles pointer up events, releasing any captured belt.

Parameters:

- `pointerX`: The x-coordinate of the pointer.
- `pointerY`: The y-coordinate of the pointer.
- `pointerId`: The unique identifier of the pointer.

Returns: `true` if a belt released the pointer; `false` otherwise.

### ProcessItems&lt;T&gt;(IEnumerable&lt;T&gt; items) {#m-cuttheropedx-gamemain-conveyorbeltobject-processitems-1-system-collections-generic-ienumerable-0}

```csharp
public void ProcessItems<T>(IEnumerable<T> items)
```

For each belt, checks each item for collision and binds if matching. Items already bound to any belt are skipped.

Parameters:

- `items`: The items to check for collision and bind.

### Push(ConveyorBelt belt) {#m-cuttheropedx-gamemain-conveyorbeltobject-push-cuttheropedx-gamemain-conveyorbelt}

```csharp
public void Push(ConveyorBelt belt)
```

Adds a conveyor belt to the collection.

Parameters:

- `belt`: The belt to add.

### Remove(ITransporterItem item) {#m-cuttheropedx-gamemain-conveyorbeltobject-remove-cuttheropedx-gamemain-itransporteritem}

```csharp
public void Remove(ITransporterItem item)
```

Removes an item from all belts in the collection.

Parameters:

- `item`: The item to remove.

### SortBelts() {#m-cuttheropedx-gamemain-conveyorbeltobject-sortbelts}

```csharp
public void SortBelts()
```

Sorts belts so that active manual belts have higher priority, followed by all manual belts. This ensures proper input handling when belts overlap.

### SortByManualFlag() {#m-cuttheropedx-gamemain-conveyorbeltobject-sortbymanualflag}

```csharp
private void SortByManualFlag()
```

Secondary sort pass that moves all manual belts to the end of the list.

### SwapBelts(int fromIndex, int toIndex) {#m-cuttheropedx-gamemain-conveyorbeltobject-swapbelts-system-int32-system-int32}

```csharp
private void SwapBelts(int fromIndex, int toIndex)
```

Swaps two belts in the list by their indices.

Parameters:

- `fromIndex`: Index of the first belt.
- `toIndex`: Index of the second belt.

### TransporterMoves(ConveyorBelt movingBelt) {#m-cuttheropedx-gamemain-conveyorbeltobject-transportermoves-cuttheropedx-gamemain-conveyorbelt}

```csharp
private void TransporterMoves(ConveyorBelt movingBelt)
```

Handles transporter-to-transporter handoff. Called after a belt moves its items. Checks if any item bound to another belt now overlaps this belt and should transfer.

Parameters:

- `movingBelt`: The belt that just moved its items.

### UnbindObjectFromTransporters(ITransporterItem item) {#m-cuttheropedx-gamemain-conveyorbeltobject-unbindobjectfromtransporters-cuttheropedx-gamemain-itransporteritem}

```csharp
private bool UnbindObjectFromTransporters(ITransporterItem item)
```

Removes `item` from every belt that currently owns it.

Parameters:

- `item`: The item to unbind.

Returns: `true` if the item was removed from at least one belt; otherwise `false`.

### Update(float deltaTime) {#m-cuttheropedx-gamemain-conveyorbeltobject-update-system-single}

```csharp
public void Update(float deltaTime)
```

Updates all conveyor belts.

Parameters:

- `deltaTime`: The time elapsed since the last frame in seconds.


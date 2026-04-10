---
title: Record Struct SpikesButtonId
description: Identifier set for spike rotation controls.
---

# Record Struct SpikesButtonId

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `SpikesButtonId.cs`

Identifier set for spike rotation controls.

## Declaration

```csharp
internal sealed readonly record struct SpikesButtonId : IButtonIdentifier, IEquatable<SpikesButtonId>
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [SpikesButtonId](SpikesButtonId.md)

## Implements

- [IButtonIdentifier](../Framework/Visual/IButtonIdentifier.md)
- [IEquatable<SpikesButtonId>](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1?view=net-10.0)

## Constructors

### SpikesButtonId(int Value) {#m-cuttheropedx-gamemain-spikesbuttonid-ctor-system-int32}

```csharp
public SpikesButtonId(int Value)
```

Identifier set for spike rotation controls.

Parameters:

- `Value`: Underlying button identifier value.

## Properties

### Rotate {#p-cuttheropedx-gamemain-spikesbuttonid-rotate}

```csharp
public static SpikesButtonId Rotate { get; }
```

Button identifier for rotating spikes.

### Value {#p-cuttheropedx-gamemain-spikesbuttonid-value}

```csharp
public int Value { get; set; }
```

Underlying button identifier value.

## Methods

### FromButtonId(ButtonId buttonId) {#m-cuttheropedx-gamemain-spikesbuttonid-frombuttonid-cuttheropedx-framework-visual-buttonid}

```csharp
public static SpikesButtonId FromButtonId(ButtonId buttonId)
```

Creates a spike button identifier from a generic button identifier.

Parameters:

- `buttonId`: Generic button identifier to convert.

Returns: The converted spike button identifier.


---
title: Class CTRGameObject
description: Game-specific GameObject subclass that parses mover paths and rotation from level XML.
---

# Class CTRGameObject

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CTRGameObject.cs`

Game-specific [GameObject](../Framework/Helpers/GameObject.md) subclass that parses mover paths and rotation from level XML.

## Declaration

```csharp
internal class CTRGameObject : GameObject
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [BaseElement](../Framework/Visual/BaseElement.md)
- [Image](../Framework/Visual/Image.md)
- [Animation](../Framework/Visual/Animation.md)
- [GameObject](../Framework/Helpers/GameObject.md)
- [CTRGameObject](CTRGameObject.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [BambooTube](BambooTube.md)
- [Bouncer](Bouncer.md)
- [Grab](Grab.md)
- [Lantern](Lantern.md)
- [LightBulb](LightBulb.md)
- [Rocket](Rocket.md)
- [Sock](Sock.md)
- [Spikes](Spikes.md)
- [Star](Star.md)

## Methods

### ParseMover(XElement xml) {#m-cuttheropedx-gamemain-ctrgameobject-parsemover-system-xml-linq-xelement}

```csharp
public override void ParseMover(XElement xml)
```

Parses mover path and speed attributes from the XML element.

Parameters:

- `xml`: XML element containing mover attributes.


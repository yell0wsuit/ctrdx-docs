---
title: Class FlashXmlActionCommand
description: Flash XML action command exported in an action track.
---

# Class FlashXmlActionCommand

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `FlashXmlImporter.cs`

Flash XML action command exported in an action track.

## Declaration

```csharp
public sealed class FlashXmlActionCommand
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [FlashXmlActionCommand](FlashXmlActionCommand.md)

## Properties

### Command {#p-cuttheropedx-gamemain-flashxmlactioncommand-command}

```csharp
public string Command { get; set; }
```

Flash action command identifier.

### Param1 {#p-cuttheropedx-gamemain-flashxmlactioncommand-param1}

```csharp
public string Param1 { get; set; }
```

First exported action parameter.

### Param2 {#p-cuttheropedx-gamemain-flashxmlactioncommand-param2}

```csharp
public string Param2 { get; set; }
```

Second exported action parameter.

### Target {#p-cuttheropedx-gamemain-flashxmlactioncommand-target}

```csharp
public string Target { get; set; }
```

Action target name, or self for the current part.


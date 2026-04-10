---
title: Class RPCHelpers
description: Manages Discord Rich Presence integration, showing menu browsing and level progress.
---

# Class RPCHelpers

Namespace: `CutTheRopeDX.Helpers`

Assembly: `CutTheRope-DX.dll`

Source: `RPCHelpers.cs`

Manages Discord Rich Presence integration, showing menu browsing and level progress.

## Declaration

```csharp
public class RPCHelpers : IDisposable
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [RPCHelpers](RPCHelpers.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### DISCORD_APP_ID {#f-cuttheropedx-helpers-rpchelpers-discord-app-id}

```csharp
private readonly string DISCORD_APP_ID
```

Discord Application ID used for Rich Presence.

### _client {#f-cuttheropedx-helpers-rpchelpers-client}

```csharp
private DiscordIpcClient _client
```

The active Discord IPC client, or `null` if not connected.

### startTimestamp {#f-cuttheropedx-helpers-rpchelpers-starttimestamp}

```csharp
private DateTime? startTimestamp
```

UTC timestamp of when the session started, used for the "elapsed" display in Discord.

## Properties

### IsRpcEnabled {#p-cuttheropedx-helpers-rpchelpers-isrpcenabled}

```csharp
private static bool IsRpcEnabled { get; }
```

Check if RPC is enabled in the save file. By default, RPC is enabled.

## Methods

### Dispose() {#m-cuttheropedx-helpers-rpchelpers-dispose}

```csharp
public void Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

### GetOrCreateEpochSeconds() {#m-cuttheropedx-helpers-rpchelpers-getorcreateepochseconds}

```csharp
private long GetOrCreateEpochSeconds()
```

Returns the session start time as Unix epoch seconds, creating it on first call.

Returns: Unix epoch seconds of the session start.

### MenuPresence() {#m-cuttheropedx-helpers-rpchelpers-menupresence}

```csharp
public void MenuPresence()
```

Updates Discord Rich Presence to show the user is browsing the menu.

### SetLevelPresence(int pack, int level, int stars, bool isWon = false, int? score = null, int? time = null) {#m-cuttheropedx-helpers-rpchelpers-setlevelpresence-system-int32-system-int32-system-int32-system-boolean-system-nullable-system-int32-system-nullable-system-int32}

```csharp
public void SetLevelPresence(int pack, int level, int stars, bool isWon = false, int? score = null, int? time = null)
```

Updates Discord Rich Presence with the current level information.

Parameters:

- `pack`: Zero-based pack index.
- `level`: Zero-based level index within the pack.
- `stars`: Number of stars collected (0-3).
- `isWon`: Whether the level has been completed.
- `score`: Final score if the level was won.
- `time`: Elapsed time in seconds if the level was won.

### Setup() {#m-cuttheropedx-helpers-rpchelpers-setup}

```csharp
public void Setup()
```

Starts the Discord IPC connection on a background thread.


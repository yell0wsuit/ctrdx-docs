---
title: Class DiscordIpcConnection
description: Cross-platform connection to a Discord IPC pipe. Windows uses named pipes; Unix/macOS uses Unix domain sockets.
---

# Class DiscordIpcConnection

Namespace: `CutTheRopeDX.Helpers.Discord`

Assembly: `CutTheRope-DX.dll`

Source: `DiscordIpcConnection.cs`

Cross-platform connection to a Discord IPC pipe. Windows uses named pipes; Unix/macOS uses Unix domain sockets.

## Declaration

```csharp
internal sealed class DiscordIpcConnection : IDisposable
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [DiscordIpcConnection](DiscordIpcConnection.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### _networkStream {#f-cuttheropedx-helpers-discord-discordipcconnection-networkstream}

```csharp
private NetworkStream _networkStream
```

Network stream wrapping the Unix domain socket.

### _pipeStream {#f-cuttheropedx-helpers-discord-discordipcconnection-pipestream}

```csharp
private NamedPipeClientStream _pipeStream
```

Windows named-pipe stream, set when connected on Windows.

### _unixSocket {#f-cuttheropedx-helpers-discord-discordipcconnection-unixsocket}

```csharp
private Socket _unixSocket
```

Unix domain socket, set when connected on Unix/macOS.

## Properties

### Stream {#p-cuttheropedx-helpers-discord-discordipcconnection-stream}

```csharp
public Stream Stream { get; private set; }
```

Gets the connected stream for reading and writing IPC messages.

## Methods

### Dispose() {#m-cuttheropedx-helpers-discord-discordipcconnection-dispose}

```csharp
public void Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

### TryConnect() {#m-cuttheropedx-helpers-discord-discordipcconnection-tryconnect}

```csharp
public bool TryConnect()
```

Attempts to connect to Discord IPC pipe indices 0 through 9.

Returns: `true` on the first successful connection; otherwise `false`.

### TryConnectUnix(int pipeIndex) {#m-cuttheropedx-helpers-discord-discordipcconnection-tryconnectunix-system-int32}

```csharp
private bool TryConnectUnix(int pipeIndex)
```

Connects via Unix domain socket at standard paths (XDG_RUNTIME_DIR, TMPDIR, /tmp).

Parameters:

- `pipeIndex`: The pipe index to try (0-9).

Returns: `true` if the connection succeeded.

### TryConnectWindows(int pipeIndex) {#m-cuttheropedx-helpers-discord-discordipcconnection-tryconnectwindows-system-int32}

```csharp
private bool TryConnectWindows(int pipeIndex)
```

Connects via Windows named pipe (`\\.\pipe\discord-ipc-{pipeIndex}`).

Parameters:

- `pipeIndex`: The pipe index to try (0-9).

Returns: `true` if the connection succeeded.


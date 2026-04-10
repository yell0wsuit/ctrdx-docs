---
title: Class DiscordIpcClient
description: Minimal Discord IPC client supporting only Rich Presence (SET_ACTIVITY).
---

# Class DiscordIpcClient

Namespace: `CutTheRopeDX.Helpers.Discord`

Assembly: `CutTheRope-DX.dll`

Source: `DiscordIpcClient.cs`

Minimal Discord IPC client supporting only Rich Presence (SET_ACTIVITY).

## Declaration

```csharp
internal sealed class DiscordIpcClient : IDisposable
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [DiscordIpcClient](DiscordIpcClient.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### DiscordIpcClient(string clientId) {#m-cuttheropedx-helpers-discord-discordipcclient-ctor-system-string}

```csharp
public DiscordIpcClient(string clientId)
```

Minimal Discord IPC client supporting only Rich Presence (SET_ACTIVITY).

Parameters:

- `clientId`: Discord application (client) ID.

## Fields

### OP_CLOSE {#f-cuttheropedx-helpers-discord-discordipcclient-op-close}

```csharp
private const int OP_CLOSE
```

IPC opcode for a connection close frame.

### OP_FRAME {#f-cuttheropedx-helpers-discord-discordipcclient-op-frame}

```csharp
private const int OP_FRAME
```

IPC opcode for a standard command/response frame.

### OP_HANDSHAKE {#f-cuttheropedx-helpers-discord-discordipcclient-op-handshake}

```csharp
private const int OP_HANDSHAKE
```

IPC opcode for the initial handshake frame.

### _clientId {#f-cuttheropedx-helpers-discord-discordipcclient-clientid}

```csharp
private readonly string _clientId
```

Discord application (client) ID sent during the handshake.

### _connection {#f-cuttheropedx-helpers-discord-discordipcclient-connection}

```csharp
private DiscordIpcConnection _connection
```

The underlying IPC connection to Discord.

### _nonce {#f-cuttheropedx-helpers-discord-discordipcclient-nonce}

```csharp
private int _nonce
```

Incrementing nonce used to uniquely identify each JSON-RPC request.

## Properties

### IsConnected {#p-cuttheropedx-helpers-discord-discordipcclient-isconnected}

```csharp
public bool IsConnected { get; private set; }
```

Gets whether the client is currently connected and has completed the handshake.

## Methods

### BuildClearActivityPayload() {#m-cuttheropedx-helpers-discord-discordipcclient-buildclearactivitypayload}

```csharp
private byte[] BuildClearActivityPayload()
```

Builds a SET_ACTIVITY payload with `"activity": null` to clear the presence.

Returns: UTF-8 encoded JSON bytes.

### BuildHandshakePayload() {#m-cuttheropedx-helpers-discord-discordipcclient-buildhandshakepayload}

```csharp
private byte[] BuildHandshakePayload()
```

Builds the JSON payload for the initial handshake: `{"v":1,"client_id":"..."}`.

Returns: UTF-8 encoded JSON bytes.

### BuildSetActivityPayload(string details, string state, long? startTimestamp, string smallImageKey, string smallImageText) {#m-cuttheropedx-helpers-discord-discordipcclient-buildsetactivitypayload-system-string-system-string-system-nullable-system-int64-system-string-system-string}

```csharp
private byte[] BuildSetActivityPayload(string details, string state, long? startTimestamp, string smallImageKey, string smallImageText)
```

Builds the JSON-RPC payload for the SET_ACTIVITY command.

Parameters:

- `details`: Top line of the presence.
- `state`: Second line of the presence.
- `startTimestamp`: Unix epoch seconds for elapsed time.
- `smallImageKey`: Asset key for the small image.
- `smallImageText`: Tooltip text for the small image.

Returns: UTF-8 encoded JSON bytes.

### ClearActivity() {#m-cuttheropedx-helpers-discord-discordipcclient-clearactivity}

```csharp
public void ClearActivity()
```

Clears the current Rich Presence from Discord.

### Dispose() {#m-cuttheropedx-helpers-discord-discordipcclient-dispose}

```csharp
public void Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

### ReadExactly(Stream stream, Span&lt;byte&gt; buffer) {#m-cuttheropedx-helpers-discord-discordipcclient-readexactly-system-io-stream-system-span-system-byte}

```csharp
private static void ReadExactly(Stream stream, Span<byte> buffer)
```

Reads exactly `buffer`.Length bytes from the stream.

Parameters:

- `stream`: The stream to read from.
- `buffer`: The buffer to fill.

### SetActivity(string details = null, string state = null, long? startTimestamp = null, string smallImageKey = null, string smallImageText = null) {#m-cuttheropedx-helpers-discord-discordipcclient-setactivity-system-string-system-string-system-nullable-system-int64-system-string-system-string}

```csharp
public void SetActivity(string details = null, string state = null, long? startTimestamp = null, string smallImageKey = null, string smallImageText = null)
```

Sends a SET_ACTIVITY command to update the Rich Presence shown on Discord.

Parameters:

- `details`: Top line of the presence (e.g. level name).
- `state`: Second line of the presence (e.g. star count).
- `startTimestamp`: Unix epoch seconds for the elapsed-time counter.
- `smallImageKey`: Asset key for the small image.
- `smallImageText`: Tooltip text for the small image.

### TryConnect() {#m-cuttheropedx-helpers-discord-discordipcclient-tryconnect}

```csharp
public bool TryConnect()
```

Connects to the local Discord client and performs the IPC handshake.

Returns: `true` if the handshake succeeded; otherwise `false`.

### TryReadFrame(out int opcode, out string payload) {#m-cuttheropedx-helpers-discord-discordipcclient-tryreadframe-system-int32-system-string}

```csharp
private bool TryReadFrame(out int opcode, out string payload)
```

Reads a single IPC response frame from Discord.

Parameters:

- `opcode`: The opcode of the received frame.
- `payload`: The JSON payload of the received frame.

Returns: `true` if a frame was successfully read; otherwise `false`.

### WriteFrame(int opcode, byte[] payload) {#m-cuttheropedx-helpers-discord-discordipcclient-writeframe-system-int32-system-byte}

```csharp
private void WriteFrame(int opcode, byte[] payload)
```

Writes a single IPC frame: 8-byte header (opcode + length) followed by the payload.

Parameters:

- `opcode`: The IPC opcode (handshake, frame, or close).
- `payload`: The UTF-8 JSON payload bytes.


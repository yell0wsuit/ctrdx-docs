---
title: Class ResourceMgr
description: Loads, caches, frees, and background-prefetches framework resources such as textures, fonts, and sounds.
---

# Class ResourceMgr

Namespace: `CutTheRopeDX.Framework.Core`

Assembly: `CutTheRope-DX.dll`

Source: `ResourceMgr.cs`

Loads, caches, frees, and background-prefetches framework resources such as textures, fonts, and sounds.

## Declaration

```csharp
internal class ResourceMgr : FrameworkTypes
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [ResourceMgr](ResourceMgr.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Derived

- [CTRResourceMgr](../../GameMain/CTRResourceMgr.md)

## Fields

### Timer {#f-cuttheropedx-framework-core-resourcemgr-timer}

```csharp
private int Timer
```

Timer identifier used for incremental loading.

### loadCount {#f-cuttheropedx-framework-core-resourcemgr-loadcount}

```csharp
private int loadCount
```

Total number of resources queued in the current batch.

### loadQueue {#f-cuttheropedx-framework-core-resourcemgr-loadqueue}

```csharp
private readonly List<string> loadQueue
```

Pending resource names for batch loading.

### loaded {#f-cuttheropedx-framework-core-resourcemgr-loaded}

```csharp
private int loaded
```

Number of resources loaded in the current batch.

### prefetchQueue {#f-cuttheropedx-framework-core-resourcemgr-prefetchqueue}

```csharp
private readonly List<string> prefetchQueue
```

Pending resource names for background prefetch.

### prefetchQueueSet {#f-cuttheropedx-framework-core-resourcemgr-prefetchqueueset}

```csharp
private readonly HashSet<string> prefetchQueueSet
```

Set mirror used to avoid duplicate entries in [prefetchQueue](#f-cuttheropedx-framework-core-resourcemgr-prefetchqueue).

### resourcesDelegate {#f-cuttheropedx-framework-core-resourcemgr-resourcesdelegate}

```csharp
public IResourceMgrDelegate resourcesDelegate
```

Delegate notified when asynchronous loading completes.

### s_Resources {#f-cuttheropedx-framework-core-resourcemgr-s-resources}

```csharp
private readonly Dictionary<string, object> s_Resources
```

Stores all cached resources (textures, fonts, sounds, strings)

## Methods

### AddResourceToLoadQueue(string resourceName) {#m-cuttheropedx-framework-core-resourcemgr-addresourcetoloadqueue-system-string}

```csharp
public void AddResourceToLoadQueue(string resourceName)
```

Adds a resource to the load queue by resource name.

Parameters:

- `resourceName`: Logical resource name to enqueue.

### ApplyTexturePackerInfo(CTRTexture2D texture, ParsedTexturePackerAtlas atlas, bool isWvga, float scaleX, float scaleY) {#m-cuttheropedx-framework-core-resourcemgr-applytexturepackerinfo-cuttheropedx-framework-visual-ctrtexture2d-cuttheropedx-framework-core-parsedtexturepackeratlas-system-boolean-system-single-system-single}

```csharp
private static void ApplyTexturePackerInfo(CTRTexture2D texture, ParsedTexturePackerAtlas atlas, bool isWvga, float scaleX, float scaleY)
```

Applies parsed `atlas` rectangles, offsets, and source sizes to a `texture`.

Parameters:

- `texture`: Texture to update.
- `atlas`: Parsed atlas metadata.
- `isWvga`: Whether WVGA scaling rules should be applied.
- `scaleX`: Horizontal texture scale.
- `scaleY`: Vertical texture scale.

### ClearCachedFonts() {#m-cuttheropedx-framework-core-resourcemgr-clearcachedfonts}

```csharp
public void ClearCachedFonts()
```

Removes cached font resources and clears the shared font cache.

### ClearPrefetchQueue() {#m-cuttheropedx-framework-core-resourcemgr-clearprefetchqueue}

```csharp
public void ClearPrefetchQueue()
```

Clears all queued prefetch work without touching already-cached resources.

### FreePack(string[] pack) {#m-cuttheropedx-framework-core-resourcemgr-freepack-system-string}

```csharp
public virtual void FreePack(string[] pack)
```

Frees each resource in a `null`-terminated `pack` array.

Parameters:

- `pack`: Pack array of logical resource names.

### FreeResource(string resourceName) {#m-cuttheropedx-framework-core-resourcemgr-freeresource-system-string}

```csharp
public void FreeResource(string resourceName)
```

Frees a cached resource by its string identifier if it has been loaded.

Parameters:

- `resourceName`: Logical resource name to free.

### GetAspectRatioScaleX() {#m-cuttheropedx-framework-core-resourcemgr-getaspectratioscalex}

```csharp
protected virtual float GetAspectRatioScaleX()
```

Returns the aspect-ratio compensation scale applied to the X axis.

Returns: Aspect-ratio scale factor.

### GetLoadCount() {#m-cuttheropedx-framework-core-resourcemgr-getloadcount}

```csharp
private int GetLoadCount()
```

Returns the number of resources currently queued for loading.

Returns: Queued resource count.

### GetNormalScaleX(string resourceName) {#m-cuttheropedx-framework-core-resourcemgr-getnormalscalex-system-string}

```csharp
public virtual float GetNormalScaleX(string resourceName)
```

Returns the default horizontal scale used for the specified resource.

Parameters:

- `resourceName`: Logical resource name.

Returns: Horizontal scale factor.

### GetNormalScaleY(string resourceName) {#m-cuttheropedx-framework-core-resourcemgr-getnormalscaley-system-string}

```csharp
public virtual float GetNormalScaleY(string resourceName)
```

Returns the default vertical scale used for the specified resource.

Parameters:

- `resourceName`: Logical resource name.

Returns: Vertical scale factor.

### GetPercentLoaded() {#m-cuttheropedx-framework-core-resourcemgr-getpercentloaded}

```csharp
public virtual int GetPercentLoaded()
```

Returns the percentage of queued resources that have completed loading.

Returns: Load completion percentage from 0 to 100.

### GetTextureAtlasConfig(string resourceName) {#m-cuttheropedx-framework-core-resourcemgr-gettextureatlasconfig-system-string}

```csharp
protected virtual TextureAtlasConfig GetTextureAtlasConfig(string resourceName)
```

Returns atlas configuration for the specified texture resource, if any.

Parameters:

- `resourceName`: Logical texture resource name.

Returns: Atlas configuration, or `null` when the texture is not atlas-backed.

### HasPendingPrefetchResources() {#m-cuttheropedx-framework-core-resourcemgr-haspendingprefetchresources}

```csharp
public bool HasPendingPrefetchResources()
```

Indicates whether any background prefetch work remains queued.

Returns: `true` when at least one prefetched resource is still pending.

### InitLoading() {#m-cuttheropedx-framework-core-resourcemgr-initloading}

```csharp
public virtual void InitLoading()
```

Resets queued loading state before building a new load batch.

### LoadImmediately() {#m-cuttheropedx-framework-core-resourcemgr-loadimmediately}

```csharp
public virtual void LoadImmediately()
```

Loads every currently queued resource immediately on the calling thread.

### LoadPack(string[] pack) {#m-cuttheropedx-framework-core-resourcemgr-loadpack-system-string}

```csharp
public virtual void LoadPack(string[] pack)
```

Queues each resource in a `null`-terminated `pack` array for loading.

Parameters:

- `pack`: Pack array of logical resource names.

### LoadResource(string resourceName, ResourceMgr.ResourceType resType) {#m-cuttheropedx-framework-core-resourcemgr-loadresource-system-string-cuttheropedx-framework-core-resourcemgr-resourcetype}

```csharp
public virtual object LoadResource(string resourceName, ResourceMgr.ResourceType resType)
```

Loads a resource using its string identifier while preserving caching semantics.

Parameters:

- `resourceName`: Logical resource name to load.
- `resType`: Expected resource type.

Returns: Loaded resource instance, or `null` when the name cannot be resolved.

### LoadResource(string resourceName) {#m-cuttheropedx-framework-core-resourcemgr-loadresource-system-string}

```csharp
private static void LoadResource(string resourceName)
```

Loads a single resource by logical name using the application-level resource entry points.

Parameters:

- `resourceName`: Logical resource name to load.

### LoadResourceInternal(string resourceName, ResourceMgr.ResourceType resType) {#m-cuttheropedx-framework-core-resourcemgr-loadresourceinternal-system-string-cuttheropedx-framework-core-resourcemgr-resourcetype}

```csharp
private object LoadResourceInternal(string resourceName, ResourceMgr.ResourceType resType)
```

Loads or retrieves a cached resource using a resolved resource name.

Parameters:

- `resourceName`: Resolved resource name.
- `resType`: Expected resource type.

Returns: Loaded resource instance, or `null` on failure.

### LoadSoundInfo(string path) {#m-cuttheropedx-framework-core-resourcemgr-loadsoundinfo-system-string}

```csharp
public virtual FrameworkTypes LoadSoundInfo(string path)
```

Loads sound metadata for the specified content `path`. The base implementation returns a placeholder object.

Parameters:

- `path`: Resolved content path.

Returns: Loaded sound metadata object.

### LoadSpriteFontInfo(string path, string resourceName) {#m-cuttheropedx-framework-core-resourcemgr-loadspritefontinfo-system-string-system-string}

```csharp
private static Font LoadSpriteFontInfo(string path, string resourceName)
```

Legacy sprite font loading (kept for backward compatibility).

Parameters:

- `path`: Resolved XML font definition path.
- `resourceName`: Logical texture resource name that backs the sprite font.

Returns: Loaded sprite-font instance.

### LoadTextureImageInfo(string resourceName, string path, XElement i, bool isWvga, float scaleX, float scaleY) {#m-cuttheropedx-framework-core-resourcemgr-loadtextureimageinfo-system-string-system-string-system-xml-linq-xelement-system-boolean-system-single-system-single}

```csharp
public virtual CTRTexture2D LoadTextureImageInfo(string resourceName, string path, XElement i, bool isWvga, float scaleX, float scaleY)
```

Loads a texture resource together with optional atlas/quad metadata.

Parameters:

- `resourceName`: Logical texture resource name.
- `path`: Resolved content path.
- `i`: Legacy XML metadata node, unused by the current implementation.
- `isWvga`: Whether WVGA scaling rules should be applied.
- `scaleX`: Horizontal texture scale.
- `scaleY`: Vertical texture scale.

Returns: Loaded texture resource.

### LoadTexturePackerAtlas(TextureAtlasConfig config, string resourceName) {#m-cuttheropedx-framework-core-resourcemgr-loadtexturepackeratlas-cuttheropedx-framework-core-textureatlasconfig-system-string}

```csharp
private static ParsedTexturePackerAtlas LoadTexturePackerAtlas(TextureAtlasConfig config, string resourceName)
```

Loads and parses TexturePacker atlas metadata for the specified resource.

Parameters:

- `config`: Atlas configuration for the resource.
- `resourceName`: Logical texture resource name.

Returns: Parsed atlas metadata, or `null` when no atlas is configured.

### LoadVariableFontInfo(string path, string resourceName, bool isWvga) {#m-cuttheropedx-framework-core-resourcemgr-loadvariablefontinfo-system-string-system-string-system-boolean}

```csharp
public virtual FontGeneric LoadVariableFontInfo(string path, string resourceName, bool isWvga)
```

Loads a variable font resource using the configured font system.

Parameters:

- `path`: Resolved content path.
- `resourceName`: Logical font resource name.
- `isWvga`: Whether WVGA scaling rules should be applied.

Returns: Loaded font resource.

### PrefetchNextResource(out string loadedResourceName) {#m-cuttheropedx-framework-core-resourcemgr-prefetchnextresource-system-string}

```csharp
public bool PrefetchNextResource(out string loadedResourceName)
```

Loads the next queued prefetch resource, if any remain.

Parameters:

- `loadedResourceName`: The resource name that was loaded, or `null` if nothing was loaded.

Returns: `true` when a resource was loaded; otherwise, `false`.

### QueuePrefetchPack(IEnumerable&lt;string&gt; pack) {#m-cuttheropedx-framework-core-resourcemgr-queueprefetchpack-system-collections-generic-ienumerable-system-string}

```csharp
public void QueuePrefetchPack(IEnumerable<string> pack)
```

Queues a batch of resources for opportunistic background prefetch.

Parameters:

- `pack`: Resource names to enqueue for silent warming.

### QueuePrefetchResource(string resourceName) {#m-cuttheropedx-framework-core-resourcemgr-queueprefetchresource-system-string}

```csharp
public void QueuePrefetchResource(string resourceName)
```

Queues a single resource for background prefetch if it is not already cached or queued.

Parameters:

- `resourceName`: The string resource identifier to enqueue.

### ResolveTextureScales(float defaultScaleX, float defaultScaleY, int? scaleRes, float aspectRatioScaleX) {#m-cuttheropedx-framework-core-resourcemgr-resolvetexturescales-system-single-system-single-system-nullable-system-int32-system-single}

```csharp
private static (float scaleX, float scaleY) ResolveTextureScales(float defaultScaleX, float defaultScaleY, int? scaleRes, float aspectRatioScaleX)
```

Adjusts texture scales according to atlas configuration and aspect-ratio rules.

Parameters:

- `defaultScaleX`: Default horizontal scale.
- `defaultScaleY`: Default vertical scale.
- `scaleRes`: Optional atlas scale mode.
- `aspectRatioScaleX`: Aspect-ratio X scale used by legacy assets.

Returns: Resolved texture scales.

### Rmgr_internalUpdate(FrameworkTypes obj) {#m-cuttheropedx-framework-core-resourcemgr-rmgr-internalupdate-cuttheropedx-framework-frameworktypes}

```csharp
private static void Rmgr_internalUpdate(FrameworkTypes obj)
```

Timer callback adapter that forwards timer updates to the resource manager instance.

Parameters:

- `obj`: Resource manager instance to update.

### SetOffsetsInfo(CTRTexture2D texture, float[] data, int offsetDataSize, float scaleX, float scaleY) {#m-cuttheropedx-framework-core-resourcemgr-setoffsetsinfo-cuttheropedx-framework-visual-ctrtexture2d-system-single-system-int32-system-single-system-single}

```csharp
private static void SetOffsetsInfo(CTRTexture2D texture, float[] data, int offsetDataSize, float scaleX, float scaleY)
```

Applies parsed atlas offset `data` to `texture` quad offsets.

Parameters:

- `texture`: Texture to update.
- `data`: Flat offset data array.
- `offsetDataSize`: Number of float entries stored in `data`.
- `scaleX`: Horizontal texture scale.
- `scaleY`: Vertical texture scale.

### SetQuadsInfo(CTRTexture2D texture, float[] data, float scaleX, float scaleY) {#m-cuttheropedx-framework-core-resourcemgr-setquadsinfo-cuttheropedx-framework-visual-ctrtexture2d-system-single-system-single-system-single}

```csharp
private static void SetQuadsInfo(CTRTexture2D texture, float[] data, float scaleX, float scaleY)
```

Converts parsed atlas rectangle `data` into engine quad information on the `texture`.

Parameters:

- `texture`: Texture to update.
- `data`: Flat quad rectangle data array.
- `scaleX`: Horizontal texture scale.
- `scaleY`: Vertical texture scale.

### StartLoading() {#m-cuttheropedx-framework-core-resourcemgr-startloading}

```csharp
public virtual void StartLoading()
```

Starts timer-driven incremental loading when a resource delegate is available.

### TryResolveResource(string resourceName, out string localizedName) {#m-cuttheropedx-framework-core-resourcemgr-tryresolveresource-system-string-system-string}

```csharp
private static bool TryResolveResource(string resourceName, out string localizedName)
```

Resolves a logical resource name to its localized runtime resource name and validates it.

Parameters:

- `resourceName`: Logical resource name.
- `localizedName`: Resolved localized resource name when successful.

Returns: `true` when the resource name is valid and resolved; otherwise `false`.

### Update() {#m-cuttheropedx-framework-core-resourcemgr-update}

```csharp
public void Update()
```

Loads the next queued resource and notifies the delegate when the batch is complete.


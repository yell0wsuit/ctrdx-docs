---
title: Class CTRRootController
description: Top-level game controller that manages the startup → menu → loading → gameplay lifecycle, resource loading/unloading across transitions, and background prefetch of box-level resources.
---

# Class CTRRootController

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CTRRootController.cs`

Top-level game controller that manages the startup → menu → loading → gameplay lifecycle, resource loading/unloading across transitions, and background prefetch of box-level resources.

## Declaration

```csharp
internal sealed class CTRRootController : RootController
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [ViewController](../Framework/Core/ViewController.md)
- [RootController](../Framework/Core/RootController.md)
- [CTRRootController](CTRRootController.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITouchDelegate](../Framework/Visual/ITouchDelegate.md)

## Constructors

### CTRRootController(ViewController parent) {#m-cuttheropedx-gamemain-ctrrootcontroller-ctor-cuttheropedx-framework-core-viewcontroller}

```csharp
public CTRRootController(ViewController parent)
```

Initialises the root controller, loads startup resources, and adds the startup child controller.

Parameters:

- `parent`: Parent view controller that hosts this root controller.

## Fields

### CHILD_GAME {#f-cuttheropedx-gamemain-ctrrootcontroller-child-game}

```csharp
public const int CHILD_GAME
```

Child slot index for the game controller.

### CHILD_LOADING {#f-cuttheropedx-gamemain-ctrrootcontroller-child-loading}

```csharp
public const int CHILD_LOADING
```

Child slot index for the loading controller.

### CHILD_MENU {#f-cuttheropedx-gamemain-ctrrootcontroller-child-menu}

```csharp
public const int CHILD_MENU
```

Child slot index for the menu controller.

### CHILD_START {#f-cuttheropedx-gamemain-ctrrootcontroller-child-start}

```csharp
public const int CHILD_START
```

Child slot index for the startup controller.

### NEXT_GAME {#f-cuttheropedx-gamemain-ctrrootcontroller-next-game}

```csharp
public const int NEXT_GAME
```

Exit code: proceed to the next game level.

### NEXT_MENU {#f-cuttheropedx-gamemain-ctrrootcontroller-next-menu}

```csharp
public const int NEXT_MENU
```

Exit code: return to the main menu.

### NEXT_PICKER {#f-cuttheropedx-gamemain-ctrrootcontroller-next-picker}

```csharp
public const int NEXT_PICKER
```

Exit code: return to the level picker.

### NEXT_PICKER_NEXT_PACK {#f-cuttheropedx-gamemain-ctrrootcontroller-next-picker-next-pack}

```csharp
public const int NEXT_PICKER_NEXT_PACK
```

Exit code: return to the level picker and advance to the next pack.

### NEXT_PICKER_SHOW_UNLOCK {#f-cuttheropedx-gamemain-ctrrootcontroller-next-picker-show-unlock}

```csharp
public const int NEXT_PICKER_SHOW_UNLOCK
```

Exit code: return to the level picker and show the unlock animation.

### PackGame {#f-cuttheropedx-gamemain-ctrrootcontroller-packgame}

```csharp
private static readonly string[] PackGame
```

Resource pack loaded for gameplay (HUD, candy, spider, etc.).

### PackMenu {#f-cuttheropedx-gamemain-ctrrootcontroller-packmenu}

```csharp
private static readonly string[] PackMenu
```

Resource pack loaded for the main menu.

### PackStartup {#f-cuttheropedx-gamemain-ctrrootcontroller-packstartup}

```csharp
private static readonly string[] PackStartup
```

Resource pack loaded during the startup splash screen.

### box {#f-cuttheropedx-gamemain-ctrrootcontroller-box}

```csharp
public int box
```

Current box index.

### boxResourceScanPack {#f-cuttheropedx-gamemain-ctrrootcontroller-boxresourcescanpack}

```csharp
private int boxResourceScanPack
```

Pack index that [boxResourceScanTask](#f-cuttheropedx-gamemain-ctrrootcontroller-boxresourcescantask) is scanning, or −1.

### boxResourceScanTask {#f-cuttheropedx-gamemain-ctrrootcontroller-boxresourcescantask}

```csharp
private Task<HashSet<string>> boxResourceScanTask
```

Async task scanning all levels in the current box for their resource union.

### boxScanPollTimer {#f-cuttheropedx-gamemain-ctrrootcontroller-boxscanpolltimer}

```csharp
private int boxScanPollTimer
```

Timer handle polling [boxResourceScanTask](#f-cuttheropedx-gamemain-ctrrootcontroller-boxresourcescantask) completion, or −1 if inactive.

### inCrystal {#f-cuttheropedx-gamemain-ctrrootcontroller-incrystal}

```csharp
private bool inCrystal
```

Whether the Crystal overlay is currently shown.

### level {#f-cuttheropedx-gamemain-ctrrootcontroller-level}

```csharp
private int level
```

Current level index within the active box.

### loadedMap {#f-cuttheropedx-gamemain-ctrrootcontroller-loadedmap}

```csharp
private XElement loadedMap
```

Parsed XML of the currently loaded map, or `null`.

### mapName {#f-cuttheropedx-gamemain-ctrrootcontroller-mapname}

```csharp
private string mapName
```

Filename of the currently loaded map.

### pack {#f-cuttheropedx-gamemain-ctrrootcontroller-pack}

```csharp
public int pack
```

Current pack (box group) index.

### picker {#f-cuttheropedx-gamemain-ctrrootcontroller-picker}

```csharp
private bool picker
```

Whether the level picker is active.

### prefetchDrainTimer {#f-cuttheropedx-gamemain-ctrrootcontroller-prefetchdraintimer}

```csharp
private int prefetchDrainTimer
```

Timer handle draining the background prefetch queue, or −1 if inactive.

### sessionResources {#f-cuttheropedx-gamemain-ctrrootcontroller-sessionresources}

```csharp
private readonly HashSet<string> sessionResources
```

Set of resource names loaded during the current gameplay session, freed on exit.

### showGreeting {#f-cuttheropedx-gamemain-ctrrootcontroller-showgreeting}

```csharp
private bool showGreeting
```

Whether the Om Nom greeting should play on the next level start.

### survival {#f-cuttheropedx-gamemain-ctrrootcontroller-survival}

```csharp
private bool survival
```

Whether survival mode is active.

## Methods

### Activate() {#m-cuttheropedx-gamemain-ctrrootcontroller-activate}

```csharp
public override void Activate()
```

Activates the controller and notifies the root controller.

### CheckMapIsValid() {#m-cuttheropedx-gamemain-ctrrootcontroller-checkmapisvalid}

```csharp
public static void CheckMapIsValid()
```

Map validation.

### DeleteMenu() {#m-cuttheropedx-gamemain-ctrrootcontroller-deletemenu}

```csharp
public void DeleteMenu()
```

Removes the menu child controller and frees menu resources.

### DisableGameCenter() {#m-cuttheropedx-gamemain-ctrrootcontroller-disablegamecenter}

```csharp
public static void DisableGameCenter()
```

Disabling Game Center.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-ctrrootcontroller-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### DrainPrefetchQueue() {#m-cuttheropedx-gamemain-ctrrootcontroller-drainprefetchqueue}

```csharp
private void DrainPrefetchQueue()
```

Advances background gameplay prefetch by at most one queued resource.

### EnableGameCenter() {#m-cuttheropedx-gamemain-ctrrootcontroller-enablegamecenter}

```csharp
public static void EnableGameCenter()
```

Enabling Game Center.

### EnsureCurrentMapLoaded() {#m-cuttheropedx-gamemain-ctrrootcontroller-ensurecurrentmaploaded}

```csharp
private void EnsureCurrentMapLoaded()
```

Loads the current map XML from disk when only the pack/level identity is known.

### GetBox() {#m-cuttheropedx-gamemain-ctrrootcontroller-getbox}

```csharp
public int GetBox()
```

Gets the current box index.

Returns: The zero-based box index.

### GetLevel() {#m-cuttheropedx-gamemain-ctrrootcontroller-getlevel}

```csharp
public int GetLevel()
```

Gets the current level index within the active box.

Returns: The zero-based level index.

### GetMap() {#m-cuttheropedx-gamemain-ctrrootcontroller-getmap}

```csharp
public XElement GetMap()
```

Gets the parsed gameplay map XML currently cached on the root controller.

Returns: The current map XML, or `null` when no map is loaded.

### GetMapName() {#m-cuttheropedx-gamemain-ctrrootcontroller-getmapname}

```csharp
public string GetMapName()
```

Gets the current map filename tracked for reload and transition flows.

Returns: The current map filename, or `null` when none has been assigned.

### GetPack() {#m-cuttheropedx-gamemain-ctrrootcontroller-getpack}

```csharp
public int GetPack()
```

Gets the current pack (box group) index.

Returns: The zero-based pack index.

### IsPicker() {#m-cuttheropedx-gamemain-ctrrootcontroller-ispicker}

```csharp
public bool IsPicker()
```

Gets whether the level picker is active.

Returns: `true` if the level picker is shown; otherwise `false`.

### IsShowGreeting() {#m-cuttheropedx-gamemain-ctrrootcontroller-isshowgreeting}

```csharp
public static bool IsShowGreeting()
```

Gets whether the Om Nom greeting animation should play on the next level start.

Returns: `true` if the greeting should be shown.

### IsSurvival() {#m-cuttheropedx-gamemain-ctrrootcontroller-issurvival}

```csharp
public bool IsSurvival()
```

Gets whether survival mode(?) is active.

Returns: `true` if survival mode is enabled; otherwise `false`.

### LogEvent(string _) {#m-cuttheropedx-gamemain-ctrrootcontroller-logevent-system-string}

```csharp
public static void LogEvent(string _)
```

Stub for analytics event logging.

Parameters:

- `_`: Event name.

### OnChildDeactivated(int n) {#m-cuttheropedx-gamemain-ctrrootcontroller-onchilddeactivated-system-int32}

```csharp
public override void OnChildDeactivated(int n)
```

Called when a child controller has deactivated. The default implementation simply unpauses this controller.

Parameters:

- `n`: Identifier of the child that deactivated.

### OpenFullVersionPage() {#m-cuttheropedx-gamemain-ctrrootcontroller-openfullversionpage}

```csharp
public static void OpenFullVersionPage()
```

Stub for opening the full version store page.

### PollBoxResourceScan() {#m-cuttheropedx-gamemain-ctrrootcontroller-pollboxresourcescan}

```csharp
private void PollBoxResourceScan()
```

Polls the asynchronous box scan task and queues prefetch work once it completes successfully.

### PostAchievementName(string _, string _1) {#m-cuttheropedx-gamemain-ctrrootcontroller-postachievementname-system-string-system-string}

```csharp
public static void PostAchievementName(string _, string _1)
```

Stub for posting a named achievement with a value.

Parameters:

- `_`: Achievement name.
- `_1`: Achievement value.

### PostAchievementName(string name) {#m-cuttheropedx-gamemain-ctrrootcontroller-postachievementname-system-string}

```csharp
public static void PostAchievementName(string name)
```

Posts a named achievement to the scorer.

Parameters:

- `name`: The achievement identifier.

### PrepareMapAndEnsureResources(XElement map, string newMapName) {#m-cuttheropedx-gamemain-ctrrootcontroller-preparemapandensureresources-system-xml-linq-xelement-system-string}

```csharp
public void PrepareMapAndEnsureResources(XElement map, string newMapName)
```

Synchronously ensures the resources required by a map are loaded, then stores the map as current.

Parameters:

- `map`: The parsed map XML to prepare.
- `newMapName`: Optional map filename to persist on the root controller.

### QueueOrPollBoxPrefetch() {#m-cuttheropedx-gamemain-ctrrootcontroller-queueorpollboxprefetch}

```csharp
private void QueueOrPollBoxPrefetch()
```

Starts gameplay prefetch immediately if the box scan is done, or polls until scan results are ready.

### QueueRemainingBoxResourcesForPrefetch(HashSet&lt;string&gt; boxResources) {#m-cuttheropedx-gamemain-ctrrootcontroller-queueremainingboxresourcesforprefetch-system-collections-generic-hashset-system-string}

```csharp
private void QueueRemainingBoxResourcesForPrefetch(HashSet<string> boxResources)
```

Queues the subset of whole-box resources that were not already loaded for the current session.

Parameters:

- `boxResources`: The full resource union discovered for the current box.

### RecreateLoadingController() {#m-cuttheropedx-gamemain-ctrrootcontroller-recreateloadingcontroller}

```csharp
internal void RecreateLoadingController()
```

Destroys and re-creates the loading controller child (slot 2).

### ResetGameplayResourceSession() {#m-cuttheropedx-gamemain-ctrrootcontroller-resetgameplayresourcesession}

```csharp
private void ResetGameplayResourceSession()
```

Clears session-scoped loading state before starting a fresh gameplay resource session.

### Resume() {#m-cuttheropedx-gamemain-ctrrootcontroller-resume}

```csharp
public override void Resume()
```

Resumes input routing and other root-controller activity.

### SetBox(int b) {#m-cuttheropedx-gamemain-ctrrootcontroller-setbox-system-int32}

```csharp
public void SetBox(int b)
```

Sets the current box index.

Parameters:

- `b`: Zero-based box index.

### SetInCrystal(bool b) {#m-cuttheropedx-gamemain-ctrrootcontroller-setincrystal-system-boolean}

```csharp
public static void SetInCrystal(bool b)
```

Sets the Chillingo's Crystal overlay state on the shared root controller.

Parameters:

- `b`: Whether the Crystal overlay is active.

### SetLevel(int l) {#m-cuttheropedx-gamemain-ctrrootcontroller-setlevel-system-int32}

```csharp
public void SetLevel(int l)
```

Sets the current level index within the active box.

Parameters:

- `l`: Zero-based level index.

### SetMap(XElement map) {#m-cuttheropedx-gamemain-ctrrootcontroller-setmap-system-xml-linq-xelement}

```csharp
public void SetMap(XElement map)
```

Stores the currently prepared gameplay map XML on the root controller.

Parameters:

- `map`: The parsed map XML that should be treated as current.

### SetMapName(string map) {#m-cuttheropedx-gamemain-ctrrootcontroller-setmapname-system-string}

```csharp
public void SetMapName(string map)
```

Stores the current map filename tracked for reload and transition flows.

Parameters:

- `map`: The map filename to persist on the root controller.

### SetMapsList(Dictionary&lt;string, XElement&gt; _) {#m-cuttheropedx-gamemain-ctrrootcontroller-setmapslist-system-collections-generic-dictionary-system-string-system-xml-linq-xelement}

```csharp
public static void SetMapsList(Dictionary<string, XElement> _)
```

Stub for setting a maps dictionary.

Parameters:

- `_`: Maps dictionary.

### SetPack(int p) {#m-cuttheropedx-gamemain-ctrrootcontroller-setpack-system-int32}

```csharp
public void SetPack(int p)
```

Sets the current pack (box group) index.

Parameters:

- `p`: Zero-based pack index.

### SetPicker(bool p) {#m-cuttheropedx-gamemain-ctrrootcontroller-setpicker-system-boolean}

```csharp
public void SetPicker(bool p)
```

Sets whether the level picker is active.

Parameters:

- `p`: Whether the level picker should be shown.

### SetShowGreeting(bool s) {#m-cuttheropedx-gamemain-ctrrootcontroller-setshowgreeting-system-boolean}

```csharp
public static void SetShowGreeting(bool s)
```

Sets whether the Om Nom greeting animation should play on the next level start.

Parameters:

- `s`: Whether to show the greeting.

### SetSurvival(bool s) {#m-cuttheropedx-gamemain-ctrrootcontroller-setsurvival-system-boolean}

```csharp
public void SetSurvival(bool s)
```

Sets whether survival mode is active.

Parameters:

- `s`: Whether survival mode is enabled.

### StartBoxResourceScanIfNeeded() {#m-cuttheropedx-gamemain-ctrrootcontroller-startboxresourcescanifneeded}

```csharp
private void StartBoxResourceScanIfNeeded()
```

Starts the asynchronous scan that discovers the union of resources used across the current box.

### StopBoxScanPollTimer() {#m-cuttheropedx-gamemain-ctrrootcontroller-stopboxscanpolltimer}

```csharp
private void StopBoxScanPollTimer()
```

Stops the timer that waits for whole-box scan completion.

### StopGameplayPrefetch() {#m-cuttheropedx-gamemain-ctrrootcontroller-stopgameplayprefetch}

```csharp
private void StopGameplayPrefetch()
```

Stops all gameplay-prefetch timers and clears any queued prefetch work.

### StopPrefetchDrainTimer() {#m-cuttheropedx-gamemain-ctrrootcontroller-stopprefetchdraintimer}

```csharp
private void StopPrefetchDrainTimer()
```

Stops the timer that drains the silent gameplay-prefetch queue.

### Suspend() {#m-cuttheropedx-gamemain-ctrrootcontroller-suspend}

```csharp
public override void Suspend()
```

Suspends input routing and other root-controller activity.

### TrackSessionResources(IEnumerable&lt;string&gt; resources) {#m-cuttheropedx-gamemain-ctrrootcontroller-tracksessionresources-system-collections-generic-ienumerable-system-string}

```csharp
private void TrackSessionResources(IEnumerable<string> resources)
```

Adds resource identifiers to the set that will be freed when gameplay ends.

Parameters:

- `resources`: Gameplay resources to track for session cleanup.


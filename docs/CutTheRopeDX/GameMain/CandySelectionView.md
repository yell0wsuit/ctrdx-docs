---
title: Class CandySelectionView
description: Builds and updates the candy, rope, Om Nom, and finger trace skin selection menu.
---

# Class CandySelectionView

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CandySelectionView.cs`

Builds and updates the candy, rope, Om Nom, and finger trace skin selection menu.

## Declaration

```csharp
internal static class CandySelectionView
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CandySelectionView](CandySelectionView.md)

## Fields

### GridItemsPerRow {#f-cuttheropedx-gamemain-candyselectionview-griditemsperrow}

```csharp
private const int GridItemsPerRow
```

Number of skin slots shown per grid row.

### OmNomWarmupSlotsPerTick {#f-cuttheropedx-gamemain-candyselectionview-omnomwarmupslotspertick}

```csharp
private const int OmNomWarmupSlotsPerTick
```

Number of Om Nom preview slots built per warmup tick.

### OriginalFlashSkinName {#f-cuttheropedx-gamemain-candyselectionview-originalflashskinname}

```csharp
private const string OriginalFlashSkinName
```

Skin ID used by the original Flash-backed Om Nom skin.

### XmlPreviewSkipFrames {#f-cuttheropedx-gamemain-candyselectionview-xmlpreviewskipframes}

```csharp
private const int XmlPreviewSkipFrames
```

Number of Flash XML frames skipped for static XML Om Nom previews.

### activePreviewBackend {#f-cuttheropedx-gamemain-candyselectionview-activepreviewbackend}

```csharp
private static ITargetAnimationBackend activePreviewBackend
```

Backend currently driving the active preview object.

### activePreviewObject {#f-cuttheropedx-gamemain-candyselectionview-activepreviewobject}

```csharp
private static GameObject activePreviewObject
```

Preview object currently animated in the active grid.

### candyTabButton {#f-cuttheropedx-gamemain-candyselectionview-candytabbutton}

```csharp
private static Button candyTabButton
```

Candy tab button.

### currentButtonDelegate {#f-cuttheropedx-gamemain-candyselectionview-currentbuttondelegate}

```csharp
private static IButtonDelegation currentButtonDelegate
```

Delegate used by slot and tab buttons.

### currentContainer {#f-cuttheropedx-gamemain-candyselectionview-currentcontainer}

```csharp
private static ScrollableContainer currentContainer
```

Scrollable container that hosts the active selection grid.

### currentMode {#f-cuttheropedx-gamemain-candyselectionview-currentmode}

```csharp
private static CandySelectionMode currentMode
```

Currently active selection mode.

### gridContainer {#f-cuttheropedx-gamemain-candyselectionview-gridcontainer}

```csharp
private static BaseElement gridContainer
```

Outer grid container passed to the scrollable container.

### modeCache {#f-cuttheropedx-gamemain-candyselectionview-modecache}

```csharp
private static CandySelectionModeCache modeCache
```

Cached grids and preview state for each selection mode.

### omNomTabButton {#f-cuttheropedx-gamemain-candyselectionview-omnomtabbutton}

```csharp
private static Button omNomTabButton
```

Om Nom tab button.

### omNomWarmupState {#f-cuttheropedx-gamemain-candyselectionview-omnomwarmupstate}

```csharp
private static CandySelectionView.OmNomWarmupState omNomWarmupState
```

Incremental warmup state for building the Om Nom grid.

### omNomXmlPreparseTask {#f-cuttheropedx-gamemain-candyselectionview-omnomxmlpreparsetask}

```csharp
private static Task omNomXmlPreparseTask
```

Background task that preparses Om Nom Flash XML definitions.

### previewRandom {#f-cuttheropedx-gamemain-candyselectionview-previewrandom}

```csharp
private static readonly Random previewRandom
```

Random source used for animated preview idle variants.

### ropeTabButton {#f-cuttheropedx-gamemain-candyselectionview-ropetabbutton}

```csharp
private static Button ropeTabButton
```

Rope tab button.

### slotButtons {#f-cuttheropedx-gamemain-candyselectionview-slotbuttons}

```csharp
private static List<CandySelectionView.SlotButtonData> slotButtons
```

Slot button data for the currently active selection mode.

### traceTabButton {#f-cuttheropedx-gamemain-candyselectionview-tracetabbutton}

```csharp
private static Button traceTabButton
```

Finger trace tab button.

## Methods

### AttachCachedGrid(CandySelectionModeState state) {#m-cuttheropedx-gamemain-candyselectionview-attachcachedgrid-cuttheropedx-gamemain-candyselectionmodestate}

```csharp
private static void AttachCachedGrid(CandySelectionModeState state)
```

Attaches a cached mode grid and restores its slot and preview state.

Parameters:

- `state`: Cached mode state to attach.

### AttachCurrentModeGrid() {#m-cuttheropedx-gamemain-candyselectionview-attachcurrentmodegrid}

```csharp
private static void AttachCurrentModeGrid()
```

Attaches the cached or newly built grid for the current selection mode.

### BuildAndAttachGrid(CandySelectionMode mode) {#m-cuttheropedx-gamemain-candyselectionview-buildandattachgrid-cuttheropedx-gamemain-candyselectionmode}

```csharp
private static void BuildAndAttachGrid(CandySelectionMode mode)
```

Builds a grid for a mode and attaches it to the current scroll container.

Parameters:

- `mode`: Selection mode whose grid should be built.

### BuildOmNomWarmupSlots(CandySelectionView.OmNomWarmupState warmupState, int slotCount) {#m-cuttheropedx-gamemain-candyselectionview-buildomnomwarmupslots-cuttheropedx-gamemain-candyselectionview-omnomwarmupstate-system-int32}

```csharp
private static void BuildOmNomWarmupSlots(CandySelectionView.OmNomWarmupState warmupState, int slotCount)
```

Builds a batch of Om Nom skin slots into an in-progress warmup grid.

Parameters:

- `warmupState`: Warmup state that owns the grid under construction.
- `slotCount`: Maximum number of slots to build.

### CalculateGridLayout() {#m-cuttheropedx-gamemain-candyselectionview-calculategridlayout}

```csharp
private static CandySelectionView.SelectionGridLayoutInfo CalculateGridLayout()
```

Calculates shared layout values for selection grids.

Returns: The calculated selection grid layout.

### CleanupPreview() {#m-cuttheropedx-gamemain-candyselectionview-cleanuppreview}

```csharp
private static void CleanupPreview()
```

Cleans up the current preview animation and removes it from the display tree.

### CompleteOmNomWarmupSynchronously() {#m-cuttheropedx-gamemain-candyselectionview-completeomnomwarmupsynchronously}

```csharp
private static void CompleteOmNomWarmupSynchronously()
```

Completes any remaining Om Nom grid warmup work synchronously.

### ConfigureOmNomPreviewLayout(GameObject previewObject, OmNomSlotPreviewLayoutInfo layout) {#m-cuttheropedx-gamemain-candyselectionview-configureomnompreviewlayout-cuttheropedx-framework-helpers-gameobject-cuttheropedx-gamemain-omnomslotpreviewlayoutinfo}

```csharp
private static void ConfigureOmNomPreviewLayout(GameObject previewObject, OmNomSlotPreviewLayoutInfo layout)
```

Applies slot preview layout values to an Om Nom preview object.

Parameters:

- `previewObject`: Preview object to configure.
- `layout`: Layout values to apply.

### CreateAndAttachOmNomPreview(Image parentImage, int skinIndex, OmNomSlotPreviewMode previewMode, bool animated, CandySelectionView.OmNomPreviewBuildState previewState) {#m-cuttheropedx-gamemain-candyselectionview-createandattachomnompreview-cuttheropedx-framework-visual-image-system-int32-cuttheropedx-gamemain-omnomslotpreviewmode-system-boolean-cuttheropedx-gamemain-candyselectionview-omnompreviewbuildstate}

```csharp
private static BaseElement CreateAndAttachOmNomPreview(Image parentImage, int skinIndex, OmNomSlotPreviewMode previewMode, bool animated, CandySelectionView.OmNomPreviewBuildState previewState)
```

Creates and attaches an Om Nom preview matching the requested mode.

Parameters:

- `parentImage`: Slot image that receives the preview child.
- `skinIndex`: Om Nom skin index to preview.
- `previewMode`: Preview mode to create.
- `animated`: Whether the preview should be animated.
- `previewState`: Preview build state updated when an animated preview is created.

Returns: The attached preview object.

### CreateCandySelection(IButtonDelegation buttonDelegate, out ScrollableContainer candyContainer) {#m-cuttheropedx-gamemain-candyselectionview-createcandyselection-cuttheropedx-framework-visual-ibuttondelegation-cuttheropedx-framework-visual-scrollablecontainer}

```csharp
public static MenuView CreateCandySelection(IButtonDelegation buttonDelegate, out ScrollableContainer candyContainer)
```

Creates the full candy and skin selection menu view.

Parameters:

- `buttonDelegate`: Button delegate that receives tab, slot, and back button events.
- `candyContainer`: Receives the scrollable selection container.

Returns: The configured candy selection menu view.

### CreateClassicOmNomPreview(bool animated, CandySelectionView.OmNomPreviewBuildState previewState) {#m-cuttheropedx-gamemain-candyselectionview-createclassicomnompreview-system-boolean-cuttheropedx-gamemain-candyselectionview-omnompreviewbuildstate}

```csharp
private static GameObject CreateClassicOmNomPreview(bool animated, CandySelectionView.OmNomPreviewBuildState previewState)
```

Creates a classic Om Nom preview object.

Parameters:

- `animated`: Whether the preview should be animated.
- `previewState`: Preview build state updated when an animated preview is created.

Returns: The created classic Om Nom preview object.

### CreateGrid(CandySelectionMode mode) {#m-cuttheropedx-gamemain-candyselectionview-creategrid-cuttheropedx-gamemain-candyselectionmode}

```csharp
private static VBox CreateGrid(CandySelectionMode mode)
```

Builds the grid for the requested mode.

Parameters:

- `mode`: Selection mode whose grid should be created.

Returns: The created grid.

### CreateOmNomPreview(int skinIndex, OmNomSlotPreviewMode previewMode, bool animated, CandySelectionView.OmNomPreviewBuildState previewState) {#m-cuttheropedx-gamemain-candyselectionview-createomnompreview-system-int32-cuttheropedx-gamemain-omnomslotpreviewmode-system-boolean-cuttheropedx-gamemain-candyselectionview-omnompreviewbuildstate}

```csharp
private static GameObject CreateOmNomPreview(int skinIndex, OmNomSlotPreviewMode previewMode, bool animated, CandySelectionView.OmNomPreviewBuildState previewState)
```

Creates an Om Nom preview object for a skin and preview mode.

Parameters:

- `skinIndex`: Om Nom skin index to preview.
- `previewMode`: Preview mode to create.
- `animated`: Whether the preview should be animated.
- `previewState`: Preview build state updated when an animated preview is created.

Returns: The created preview object.

### CreateOmNomSlotButton(int skinIndex, int selectedIndex, float slotScale, MenuButtonId buttonId, List&lt;CandySelectionView.SlotButtonData&gt; targetSlotButtons, CandySelectionView.OmNomPreviewBuildState previewState) {#m-cuttheropedx-gamemain-candyselectionview-createomnomslotbutton-system-int32-system-int32-system-single-cuttheropedx-gamemain-menubuttonid-system-collections-generic-list-cuttheropedx-gamemain-candyselectionview-slotbuttondata-cuttheropedx-gamemain-candyselectionview-omnompreviewbuildstate}

```csharp
private static Button CreateOmNomSlotButton(int skinIndex, int selectedIndex, float slotScale, MenuButtonId buttonId, List<CandySelectionView.SlotButtonData> targetSlotButtons, CandySelectionView.OmNomPreviewBuildState previewState)
```

Creates a slot button for an Om Nom skin.

Parameters:

- `skinIndex`: Om Nom skin index represented by the slot.
- `selectedIndex`: Currently selected Om Nom skin index.
- `slotScale`: Scale applied to the slot background.
- `buttonId`: Button identifier assigned to the slot.
- `targetSlotButtons`: Slot button list that receives cached slot data.
- `previewState`: Preview build state updated when an animated preview is created.

Returns: The configured Om Nom slot button.

### CreateOmNomWarmupState() {#m-cuttheropedx-gamemain-candyselectionview-createomnomwarmupstate}

```csharp
private static CandySelectionView.OmNomWarmupState CreateOmNomWarmupState()
```

Creates initial incremental warmup state for the Om Nom grid.

Returns: The initialized warmup state.

### CreateSlotButton(int itemIndex, int selectedIndex, string itemResourceName, int itemQuadIndex, float slotScale, MenuButtonId buttonId, float itemYOffset = -20, bool doRestoreTransparency = false) {#m-cuttheropedx-gamemain-candyselectionview-createslotbutton-system-int32-system-int32-system-string-system-int32-system-single-cuttheropedx-gamemain-menubuttonid-system-single-system-boolean}

```csharp
private static Button CreateSlotButton(int itemIndex, int selectedIndex, string itemResourceName, int itemQuadIndex, float slotScale, MenuButtonId buttonId, float itemYOffset = -20, bool doRestoreTransparency = false)
```

Creates a slot button with background and item image.

Parameters:

- `itemIndex`: Skin item index represented by the slot.
- `selectedIndex`: Currently selected skin index for the mode.
- `itemResourceName`: Texture resource name for the slot item.
- `itemQuadIndex`: Quad index for the slot item.
- `slotScale`: Scale applied to the slot background.
- `buttonId`: Button identifier assigned to the slot.
- `itemYOffset`: Vertical offset applied to the item image.
- `doRestoreTransparency`: Whether to restore cut transparency on the item image.

Returns: The configured slot button.

### CreateTabButton(string textKey, MenuButtonId buttonId, FontGeneric font, IButtonDelegation buttonDelegate, out float width) {#m-cuttheropedx-gamemain-candyselectionview-createtabbutton-system-string-cuttheropedx-gamemain-menubuttonid-cuttheropedx-framework-visual-fontgeneric-cuttheropedx-framework-visual-ibuttondelegation-system-single}

```csharp
private static Button CreateTabButton(string textKey, MenuButtonId buttonId, FontGeneric font, IButtonDelegation buttonDelegate, out float width)
```

Creates a tab button for a selection mode.

Parameters:

- `textKey`: Localization key for the tab text.
- `buttonId`: Button identifier assigned to the tab.
- `font`: Font used by the tab text.
- `buttonDelegate`: Button delegate that receives tab press events.
- `width`: Receives the tab button width.

Returns: The configured tab button.

### CreateXmlOmNomPreview(int skinIndex, bool animated, CandySelectionView.OmNomPreviewBuildState previewState) {#m-cuttheropedx-gamemain-candyselectionview-createxmlomnompreview-system-int32-system-boolean-cuttheropedx-gamemain-candyselectionview-omnompreviewbuildstate}

```csharp
private static GameObject CreateXmlOmNomPreview(int skinIndex, bool animated, CandySelectionView.OmNomPreviewBuildState previewState)
```

Creates a Flash XML-backed Om Nom preview object.

Parameters:

- `skinIndex`: Om Nom skin index to preview.
- `animated`: Whether the preview should be animated.
- `previewState`: Preview build state updated when an animated preview is created.

Returns: The created XML-backed Om Nom preview object.

### DetachModeGrid(CandySelectionMode mode) {#m-cuttheropedx-gamemain-candyselectionview-detachmodegrid-cuttheropedx-gamemain-candyselectionmode}

```csharp
private static void DetachModeGrid(CandySelectionMode mode)
```

Detaches the cached grid for a mode from the current scroll container.

Parameters:

- `mode`: Selection mode whose grid should be detached.

### EnsureOmNomGridReady() {#m-cuttheropedx-gamemain-candyselectionview-ensureomnomgridready}

```csharp
private static void EnsureOmNomGridReady()
```

Ensures the Om Nom grid has been fully built before it is displayed.

### FindSlotButtonData(int slotIndex) {#m-cuttheropedx-gamemain-candyselectionview-findslotbuttondata-system-int32}

```csharp
private static CandySelectionView.SlotButtonData FindSlotButtonData(int slotIndex)
```

Finds cached slot button data for a skin slot index.

Parameters:

- `slotIndex`: Skin slot index to find.

Returns: The matching slot data, or `null` if no slot matches.

### GetPressedPreviewMode(int skinIndex) {#m-cuttheropedx-gamemain-candyselectionview-getpressedpreviewmode-system-int32}

```csharp
private static OmNomSlotPreviewMode GetPressedPreviewMode(int skinIndex)
```

Gets the preview mode used by a pressed Om Nom slot.

Parameters:

- `skinIndex`: Om Nom skin index represented by the slot.

Returns: The pressed-state preview mode.

### PlayStaticXmlPreviewState(FlashXmlTargetAnimationBackend backend, OmNomSkinDefinition skin) {#m-cuttheropedx-gamemain-candyselectionview-playstaticxmlpreviewstate-cuttheropedx-gamemain-flashxmltargetanimationbackend-cuttheropedx-gamemain-omnomskindefinition}

```csharp
private static void PlayStaticXmlPreviewState(FlashXmlTargetAnimationBackend backend, OmNomSkinDefinition skin)
```

Plays a representative static state for an XML-backed Om Nom preview.

Parameters:

- `backend`: Backend that owns the preview animation.
- `skin`: Skin definition for the preview.

### PreparseOmNomXmlDefinitions() {#m-cuttheropedx-gamemain-candyselectionview-preparseomnomxmldefinitions}

```csharp
private static void PreparseOmNomXmlDefinitions()
```

Preparses XML animation definitions used by Om Nom preview skins.

### ReplaceUpPreview(CandySelectionView.SlotButtonData slotData, OmNomSlotPreviewMode previewMode, bool animated) {#m-cuttheropedx-gamemain-candyselectionview-replaceuppreview-cuttheropedx-gamemain-candyselectionview-slotbuttondata-cuttheropedx-gamemain-omnomslotpreviewmode-system-boolean}

```csharp
private static void ReplaceUpPreview(CandySelectionView.SlotButtonData slotData, OmNomSlotPreviewMode previewMode, bool animated)
```

Replaces the up-state Om Nom preview for a slot.

Parameters:

- `slotData`: Slot data whose up-state preview should be replaced.
- `previewMode`: Preview mode to create.
- `animated`: Whether the replacement preview should be animated.

### SelectOmNomSlot(int newSelectedIndex) {#m-cuttheropedx-gamemain-candyselectionview-selectomnomslot-system-int32}

```csharp
public static void SelectOmNomSlot(int newSelectedIndex)
```

Selects an Om Nom skin slot and swaps the live preview to it.

Parameters:

- `newSelectedIndex`: Newly selected Om Nom skin index.

### SetTabActive(Button tab, bool active) {#m-cuttheropedx-gamemain-candyselectionview-settabactive-cuttheropedx-framework-visual-button-system-boolean}

```csharp
private static void SetTabActive(Button tab, bool active)
```

Updates one tab button to its active or inactive visual state.

Parameters:

- `tab`: Tab button to update.
- `active`: Whether the tab should appear active.

### StartOmNomWarmup() {#m-cuttheropedx-gamemain-candyselectionview-startomnomwarmup}

```csharp
private static void StartOmNomWarmup()
```

Starts incremental Om Nom grid warmup and background XML preparse work.

### StoreCompletedOmNomWarmupState(CandySelectionView.OmNomWarmupState warmupState) {#m-cuttheropedx-gamemain-candyselectionview-storecompletedomnomwarmupstate-cuttheropedx-gamemain-candyselectionview-omnomwarmupstate}

```csharp
private static void StoreCompletedOmNomWarmupState(CandySelectionView.OmNomWarmupState warmupState)
```

Stores a completed Om Nom warmup grid in the mode cache.

Parameters:

- `warmupState`: Completed warmup state to store.

### StoreCurrentModeState() {#m-cuttheropedx-gamemain-candyselectionview-storecurrentmodestate}

```csharp
private static void StoreCurrentModeState()
```

Stores the active mode grid, slot button list, and preview state in the mode cache.

### SwitchToCandyMode() {#m-cuttheropedx-gamemain-candyselectionview-switchtocandymode}

```csharp
public static void SwitchToCandyMode()
```

Switches the selection menu to candy skin mode.

### SwitchToMode(CandySelectionMode mode) {#m-cuttheropedx-gamemain-candyselectionview-switchtomode-cuttheropedx-gamemain-candyselectionmode}

```csharp
private static void SwitchToMode(CandySelectionMode mode)
```

Switches between candy, rope, and Om Nom selection modes.

Parameters:

- `mode`: Selection mode to switch to.

### SwitchToOmNomMode() {#m-cuttheropedx-gamemain-candyselectionview-switchtoomnommode}

```csharp
public static void SwitchToOmNomMode()
```

Switches the selection menu to Om Nom skin mode.

### SwitchToRopeMode() {#m-cuttheropedx-gamemain-candyselectionview-switchtoropemode}

```csharp
public static void SwitchToRopeMode()
```

Switches the selection menu to rope skin mode.

### SwitchToTraceMode() {#m-cuttheropedx-gamemain-candyselectionview-switchtotracemode}

```csharp
public static void SwitchToTraceMode()
```

Switches the selection menu to finger trace skin mode.

### Update(float delta) {#m-cuttheropedx-gamemain-candyselectionview-update-system-single}

```csharp
public static void Update(float delta)
```

Ticks the preview animation each frame.

Parameters:

- `delta`: Elapsed time in seconds since the last update.

### UpdateCandySlotButtons(int newSelectedCandyIndex) {#m-cuttheropedx-gamemain-candyselectionview-updatecandyslotbuttons-system-int32}

```csharp
public static void UpdateCandySlotButtons(int newSelectedCandyIndex)
```

Updates all candy slot buttons to reflect the newly selected candy skin. This updates the button backgrounds without recreating the entire view.

Parameters:

- `newSelectedCandyIndex`: Newly selected slot index.

### UpdateTabButtonStates() {#m-cuttheropedx-gamemain-candyselectionview-updatetabbuttonstates}

```csharp
private static void UpdateTabButtonStates()
```

Updates the tab button visual states to show which mode is active.

### WarmOmNomGridIncrementally() {#m-cuttheropedx-gamemain-candyselectionview-warmomnomgridincrementally}

```csharp
private static void WarmOmNomGridIncrementally()
```

Builds a small batch of Om Nom grid slots when background preparse work is complete.


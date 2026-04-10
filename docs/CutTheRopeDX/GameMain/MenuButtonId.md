---
title: Record Struct MenuButtonId
description: Identifier set for menu-related buttons.
---

# Record Struct MenuButtonId

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MenuButtonId.cs`

Identifier set for menu-related buttons.

## Declaration

```csharp
internal sealed readonly record struct MenuButtonId : IButtonIdentifier, IEquatable<MenuButtonId>
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype?view=net-10.0)
- [MenuButtonId](MenuButtonId.md)

## Implements

- [IButtonIdentifier](../Framework/Visual/IButtonIdentifier.md)
- [IEquatable<MenuButtonId>](https://learn.microsoft.com/en-us/dotnet/api/system.iequatable-1?view=net-10.0)

## Constructors

### MenuButtonId(int Value) {#m-cuttheropedx-gamemain-menubuttonid-ctor-system-int32}

```csharp
public MenuButtonId(int Value)
```

Identifier set for menu-related buttons.

Parameters:

- `Value`: Underlying numeric button identifier.

## Fields

### BackFromAchievements {#f-cuttheropedx-gamemain-menubuttonid-backfromachievements}

```csharp
public static readonly MenuButtonId BackFromAchievements
```

Navigates back from achievements.

### BackFromCandySelect {#f-cuttheropedx-gamemain-menubuttonid-backfromcandyselect}

```csharp
public static readonly MenuButtonId BackFromCandySelect
```

Navigates back from candy skin selection.

### BackFromLanguage {#f-cuttheropedx-gamemain-menubuttonid-backfromlanguage}

```csharp
public static readonly MenuButtonId BackFromLanguage
```

Navigates back from language selection.

### BackFromLeaderboards {#f-cuttheropedx-gamemain-menubuttonid-backfromleaderboards}

```csharp
public static readonly MenuButtonId BackFromLeaderboards
```

Navigates back from leaderboards.

### BackFromOptions {#f-cuttheropedx-gamemain-menubuttonid-backfromoptions}

```csharp
public static readonly MenuButtonId BackFromOptions
```

Navigates back from options.

### BackFromPackSelect {#f-cuttheropedx-gamemain-menubuttonid-backfrompackselect}

```csharp
public static readonly MenuButtonId BackFromPackSelect
```

Navigates back from pack selection.

### BackToOptions {#f-cuttheropedx-gamemain-menubuttonid-backtooptions}

```csharp
public static readonly MenuButtonId BackToOptions
```

Navigates back to options.

### CandySelect {#f-cuttheropedx-gamemain-menubuttonid-candyselect}

```csharp
public static readonly MenuButtonId CandySelect
```

Opens candy skin selection.

### CandySlotTag {#f-cuttheropedx-gamemain-menubuttonid-candyslottag}

```csharp
private const int CandySlotTag
```

Tag used for dynamically generated candy skin slot buttons.

### ClosePopup {#f-cuttheropedx-gamemain-menubuttonid-closepopup}

```csharp
public static readonly MenuButtonId ClosePopup
```

Closes the active popup.

### ConfirmResetNo {#f-cuttheropedx-gamemain-menubuttonid-confirmresetno}

```csharp
public static readonly MenuButtonId ConfirmResetNo
```

Cancels reset (no).

### ConfirmResetYes {#f-cuttheropedx-gamemain-menubuttonid-confirmresetyes}

```csharp
public static readonly MenuButtonId ConfirmResetYes
```

Confirms reset (yes).

### FanworkCtrhWebsite {#f-cuttheropedx-gamemain-menubuttonid-fanworkctrhwebsite}

```csharp
public static readonly MenuButtonId FanworkCtrhWebsite
```

Opens the fanwork Cut the Rope Home website.

### FanworkProjectWebsite {#f-cuttheropedx-gamemain-menubuttonid-fanworkprojectwebsite}

```csharp
public static readonly MenuButtonId FanworkProjectWebsite
```

Opens the fanwork project website.

### IndexMask {#f-cuttheropedx-gamemain-menubuttonid-indexmask}

```csharp
private const int IndexMask
```

Mask used to extract the dynamic button index from a tagged identifier.

### Language {#f-cuttheropedx-gamemain-menubuttonid-language}

```csharp
public static readonly MenuButtonId Language
```

Opens language selection.

### LanguageSelectTag {#f-cuttheropedx-gamemain-menubuttonid-languageselecttag}

```csharp
private const int LanguageSelectTag
```

Tag used for dynamically generated language selection buttons.

### Leaderboards {#f-cuttheropedx-gamemain-menubuttonid-leaderboards}

```csharp
public static readonly MenuButtonId Leaderboards
```

Opens leaderboards.

### LevelTag {#f-cuttheropedx-gamemain-menubuttonid-leveltag}

```csharp
private const int LevelTag
```

Tag used for dynamically generated level buttons.

### NextPack {#f-cuttheropedx-gamemain-menubuttonid-nextpack}

```csharp
public static readonly MenuButtonId NextPack
```

Scrolls to the next pack.

### OmNomSelect {#f-cuttheropedx-gamemain-menubuttonid-omnomselect}

```csharp
public static readonly MenuButtonId OmNomSelect
```

Opens Om Nom skin selection.

### OmNomSlotTag {#f-cuttheropedx-gamemain-menubuttonid-omnomslottag}

```csharp
private const int OmNomSlotTag
```

Tag used for dynamically generated Om Nom skin slot buttons.

### OpenFacebook {#f-cuttheropedx-gamemain-menubuttonid-openfacebook}

```csharp
public static readonly MenuButtonId OpenFacebook
```

Opens the Facebook page.

### OpenFullVersion {#f-cuttheropedx-gamemain-menubuttonid-openfullversion}

```csharp
public static readonly MenuButtonId OpenFullVersion
```

Opens the full-version/store page. Leftover from free version on mobile.

### OpenTwitter {#f-cuttheropedx-gamemain-menubuttonid-opentwitter}

```csharp
public static readonly MenuButtonId OpenTwitter
```

Opens the Twitter/X page.

### Options {#f-cuttheropedx-gamemain-menubuttonid-options}

```csharp
public static readonly MenuButtonId Options
```

Opens the options menu.

### PackSelect {#f-cuttheropedx-gamemain-menubuttonid-packselect}

```csharp
public static readonly MenuButtonId PackSelect
```

Opens box pack selection.

### PackTag {#f-cuttheropedx-gamemain-menubuttonid-packtag}

```csharp
private const int PackTag
```

Tag used for dynamically generated pack buttons.

### Play {#f-cuttheropedx-gamemain-menubuttonid-play}

```csharp
public static readonly MenuButtonId Play
```

Starts the game flow from the main menu.

### PlayPack0 {#f-cuttheropedx-gamemain-menubuttonid-playpack0}

```csharp
public static readonly MenuButtonId PlayPack0
```

Starts playing directly for first pack.

### PopupOk {#f-cuttheropedx-gamemain-menubuttonid-popupok}

```csharp
public static readonly MenuButtonId PopupOk
```

Confirms a single-button popup.

### PreviousPack {#f-cuttheropedx-gamemain-menubuttonid-previouspack}

```csharp
public static readonly MenuButtonId PreviousPack
```

Scrolls to the previous pack.

### QuitGame {#f-cuttheropedx-gamemain-menubuttonid-quitgame}

```csharp
public static readonly MenuButtonId QuitGame
```

Quits the game.

### RopeSelect {#f-cuttheropedx-gamemain-menubuttonid-ropeselect}

```csharp
public static readonly MenuButtonId RopeSelect
```

Opens rope skin selection.

### RopeSlotTag {#f-cuttheropedx-gamemain-menubuttonid-ropeslottag}

```csharp
private const int RopeSlotTag
```

Tag used for dynamically generated rope skin slot buttons.

### ShowCredits {#f-cuttheropedx-gamemain-menubuttonid-showcredits}

```csharp
public static readonly MenuButtonId ShowCredits
```

Opens credits.

### ShowLanguage {#f-cuttheropedx-gamemain-menubuttonid-showlanguage}

```csharp
public static readonly MenuButtonId ShowLanguage
```

Opens language selection view.

### ShowQuitPopup {#f-cuttheropedx-gamemain-menubuttonid-showquitpopup}

```csharp
public static readonly MenuButtonId ShowQuitPopup
```

Opens quit gmae confirmation.

### ShowReset {#f-cuttheropedx-gamemain-menubuttonid-showreset}

```csharp
public static readonly MenuButtonId ShowReset
```

Opens reset progress confirmation.

### SurvivalMode {#f-cuttheropedx-gamemain-menubuttonid-survivalmode}

```csharp
public static readonly MenuButtonId SurvivalMode
```

Enters survival mode (?). Unused.

### ToggleClickToCut {#f-cuttheropedx-gamemain-menubuttonid-toggleclicktocut}

```csharp
public static readonly MenuButtonId ToggleClickToCut
```

Toggles click-to-cut controls.

### ToggleMusic {#f-cuttheropedx-gamemain-menubuttonid-togglemusic}

```csharp
public static readonly MenuButtonId ToggleMusic
```

Toggles music playback.

### ToggleSound {#f-cuttheropedx-gamemain-menubuttonid-togglesound}

```csharp
public static readonly MenuButtonId ToggleSound
```

Toggles sound effects.

### TraceSelect {#f-cuttheropedx-gamemain-menubuttonid-traceselect}

```csharp
public static readonly MenuButtonId TraceSelect
```

Opens finger trace skin selection.

### TraceSlotTag {#f-cuttheropedx-gamemain-menubuttonid-traceslottag}

```csharp
private const int TraceSlotTag
```

Tag used for dynamically generated finger trace skin slot buttons.

### UpdateDownload {#f-cuttheropedx-gamemain-menubuttonid-updatedownload}

```csharp
public static readonly MenuButtonId UpdateDownload
```

Starts update checker flow.

## Properties

### Value {#p-cuttheropedx-gamemain-menubuttonid-value}

```csharp
public int Value { get; set; }
```

Underlying numeric button identifier.

## Methods

### ForCandySlot(int candyIndex) {#m-cuttheropedx-gamemain-menubuttonid-forcandyslot-system-int32}

```csharp
public static MenuButtonId ForCandySlot(int candyIndex)
```

Creates an identifier for a candy skin slot button.

Parameters:

- `candyIndex`: Zero-based candy skin slot index.

Returns: A tagged menu button identifier for the given candy skin slot.

### ForLanguage(int languageIndex) {#m-cuttheropedx-gamemain-menubuttonid-forlanguage-system-int32}

```csharp
public static MenuButtonId ForLanguage(int languageIndex)
```

Creates an identifier for a language selection button.

Parameters:

- `languageIndex`: Zero-based language index in the UI language list.

Returns: A tagged menu button identifier for the given language.

### ForLevel(int levelIndex) {#m-cuttheropedx-gamemain-menubuttonid-forlevel-system-int32}

```csharp
public static MenuButtonId ForLevel(int levelIndex)
```

Creates an identifier for a level button.

Parameters:

- `levelIndex`: Zero-based level index.

Returns: A tagged menu button identifier for the given level.

### ForOmNomSlot(int omNomIndex) {#m-cuttheropedx-gamemain-menubuttonid-foromnomslot-system-int32}

```csharp
public static MenuButtonId ForOmNomSlot(int omNomIndex)
```

Creates an identifier for an Om Nom skin slot button.

Parameters:

- `omNomIndex`: Zero-based Om Nom skin index.

Returns: A tagged menu button identifier for the given Om Nom skin slot.

### ForPack(int packIndex) {#m-cuttheropedx-gamemain-menubuttonid-forpack-system-int32}

```csharp
public static MenuButtonId ForPack(int packIndex)
```

Creates an identifier for a pack button.

Parameters:

- `packIndex`: Zero-based pack index.

Returns: A tagged menu button identifier for the given pack.

### ForRopeSlot(int ropeIndex) {#m-cuttheropedx-gamemain-menubuttonid-forropeslot-system-int32}

```csharp
public static MenuButtonId ForRopeSlot(int ropeIndex)
```

Creates an identifier for a rope skin slot button.

Parameters:

- `ropeIndex`: Zero-based rope skin slot index.

Returns: A tagged menu button identifier for the given rope skin slot.

### ForTraceSlot(int traceIndex) {#m-cuttheropedx-gamemain-menubuttonid-fortraceslot-system-int32}

```csharp
public static MenuButtonId ForTraceSlot(int traceIndex)
```

Creates an identifier for a finger trace skin slot button.

Parameters:

- `traceIndex`: Zero-based finger trace skin index.

Returns: A tagged menu button identifier for the given finger trace slot.

### FromButtonId(ButtonId buttonId) {#m-cuttheropedx-gamemain-menubuttonid-frombuttonid-cuttheropedx-framework-visual-buttonid}

```csharp
public static MenuButtonId FromButtonId(ButtonId buttonId)
```

Converts a shared [ButtonId](../Framework/Visual/ButtonId.md) into a typed menu identifier.

Parameters:

- `buttonId`: Shared button identifier.

Returns: Typed menu identifier.

### GetCandyIndex() {#m-cuttheropedx-gamemain-menubuttonid-getcandyindex}

```csharp
public int GetCandyIndex()
```

Gets the zero-based candy skin slot index when this identifier is a candy skin slot button.

Returns: The candy skin slot index, or `-1` when this is not a candy skin slot button.

### GetLanguageSelectIndex() {#m-cuttheropedx-gamemain-menubuttonid-getlanguageselectindex}

```csharp
public int GetLanguageSelectIndex()
```

Gets the zero-based language index when this identifier is a language selection button.

Returns: The language index, or `-1` when this is not a language selection button.

### GetLevelIndex() {#m-cuttheropedx-gamemain-menubuttonid-getlevelindex}

```csharp
public int GetLevelIndex()
```

Gets the zero-based level index when this identifier is a level button.

Returns: The level index, or `-1` when this is not a level button.

### GetOmNomIndex() {#m-cuttheropedx-gamemain-menubuttonid-getomnomindex}

```csharp
public int GetOmNomIndex()
```

Gets the zero-based Om Nom skin index when this identifier is an Om Nom slot button.

Returns: The Om Nom skin index, or `-1` when this is not an Om Nom slot button.

### GetPackIndex() {#m-cuttheropedx-gamemain-menubuttonid-getpackindex}

```csharp
public int GetPackIndex()
```

Gets the zero-based pack index when this identifier is a pack button.

Returns: The pack index, or `-1` when this is not a pack button.

### GetRopeIndex() {#m-cuttheropedx-gamemain-menubuttonid-getropeindex}

```csharp
public int GetRopeIndex()
```

Gets the zero-based rope skin slot index when this identifier is a rope slot button.

Returns: The rope skin slot index, or `-1` when this is not a rope skin slot button.

### GetTraceIndex() {#m-cuttheropedx-gamemain-menubuttonid-gettraceindex}

```csharp
public int GetTraceIndex()
```

Gets the zero-based finger trace slot index when this identifier is a trace slot button.

Returns: The trace slot index, or `-1` when this is not a trace slot button.

### IsCandySlotButton() {#m-cuttheropedx-gamemain-menubuttonid-iscandyslotbutton}

```csharp
public bool IsCandySlotButton()
```

Determines whether this identifier represents a dynamic candy skin slot button.

Returns: `true` when this is a candy skin slot button; otherwise `false`.

### IsLanguageSelectButton() {#m-cuttheropedx-gamemain-menubuttonid-islanguageselectbutton}

```csharp
public bool IsLanguageSelectButton()
```

Determines whether this identifier represents a dynamic language selection button.

Returns: `true` when this is a language selection button; otherwise `false`.

### IsLevelButton() {#m-cuttheropedx-gamemain-menubuttonid-islevelbutton}

```csharp
public bool IsLevelButton()
```

Determines whether this identifier represents a dynamic level button.

Returns: `true` when this is a level button; otherwise `false`.

### IsOmNomSlotButton() {#m-cuttheropedx-gamemain-menubuttonid-isomnomslotbutton}

```csharp
public bool IsOmNomSlotButton()
```

Determines whether this identifier represents a dynamic Om Nom skin slot button.

Returns: `true` when this is an Om Nom skin slot button; otherwise `false`.

### IsPackButton() {#m-cuttheropedx-gamemain-menubuttonid-ispackbutton}

```csharp
public bool IsPackButton()
```

Determines whether this identifier represents a dynamic pack button.

Returns: `true` when this is a pack button; otherwise `false`.

### IsRopeSlotButton() {#m-cuttheropedx-gamemain-menubuttonid-isropeslotbutton}

```csharp
public bool IsRopeSlotButton()
```

Determines whether this identifier represents a dynamic rope skin slot button.

Returns: `true` when this is a rope skin slot button; otherwise `false`.

### IsTraceSlotButton() {#m-cuttheropedx-gamemain-menubuttonid-istraceslotbutton}

```csharp
public bool IsTraceSlotButton()
```

Determines whether this identifier represents a dynamic finger trace slot button.

Returns: `true` when this is a finger trace slot button; otherwise `false`.


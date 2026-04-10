---
title: Class MenuController
description: Main menu controller that builds menu views, handles menu buttons, and coordinates transitions into gameplay.
---

# Class MenuController

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `MenuController.cs`

Main menu controller that builds menu views, handles menu buttons, and coordinates transitions into gameplay.

## Declaration

```csharp
internal sealed class MenuController : ViewController, IButtonDelegation, IMovieMgrDelegate, IScrollableContainerProtocol, ITimelineDelegate
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [ViewController](../Framework/Core/ViewController.md)
- [MenuController](MenuController.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)
- [ITouchDelegate](../Framework/Visual/ITouchDelegate.md)
- [IButtonDelegation](../Framework/Visual/IButtonDelegation.md)
- [IMovieMgrDelegate](../Framework/Media/IMovieMgrDelegate.md)
- [IScrollableContainerProtocol](../Framework/Visual/IScrollableContainerProtocol.md)
- [ITimelineDelegate](../Framework/Visual/ITimelineDelegate.md)

## Constructors

### MenuController(ViewController parent) {#m-cuttheropedx-gamemain-menucontroller-ctor-cuttheropedx-framework-core-viewcontroller}

```csharp
public MenuController(ViewController parent)
```

Initializes the menu controller and creates its child views.

Parameters:

- `parent`: Parent view controller.

## Fields

### PackLocalizationMenu {#f-cuttheropedx-gamemain-menucontroller-packlocalizationmenu}

```csharp
private static readonly string[] PackLocalizationMenu
```

Localized menu resource pack reloaded when the UI language changes.

### VIEW_ABOUT {#f-cuttheropedx-gamemain-menucontroller-view-about}

```csharp
public const int VIEW_ABOUT
```

About and credits view identifier.

### VIEW_ACHIEVEMENTS {#f-cuttheropedx-gamemain-menucontroller-view-achievements}

```csharp
public const int VIEW_ACHIEVEMENTS
```

Achievements view identifier.

### VIEW_CANDY_SELECT {#f-cuttheropedx-gamemain-menucontroller-view-candy-select}

```csharp
public const int VIEW_CANDY_SELECT
```

Candy and skin selection view identifier.

### VIEW_HELP {#f-cuttheropedx-gamemain-menucontroller-view-help}

```csharp
public const int VIEW_HELP
```

Help view identifier.

### VIEW_LANGUAGE_SELECT {#f-cuttheropedx-gamemain-menucontroller-view-language-select}

```csharp
public const int VIEW_LANGUAGE_SELECT
```

Language selection view identifier.

### VIEW_LEADERBOARDS {#f-cuttheropedx-gamemain-menucontroller-view-leaderboards}

```csharp
public const int VIEW_LEADERBOARDS
```

Leaderboards view identifier.

### VIEW_LEVEL_SELECT {#f-cuttheropedx-gamemain-menucontroller-view-level-select}

```csharp
public const int VIEW_LEVEL_SELECT
```

Level selection view identifier.

### VIEW_MAIN_MENU {#f-cuttheropedx-gamemain-menucontroller-view-main-menu}

```csharp
public const int VIEW_MAIN_MENU
```

Main menu view identifier.

### VIEW_MOVIE {#f-cuttheropedx-gamemain-menucontroller-view-movie}

```csharp
public const int VIEW_MOVIE
```

Movie playback view identifier.

### VIEW_OPTIONS {#f-cuttheropedx-gamemain-menucontroller-view-options}

```csharp
public const int VIEW_OPTIONS
```

Options view identifier.

### VIEW_PACK_SELECT {#f-cuttheropedx-gamemain-menucontroller-view-pack-select}

```csharp
public const int VIEW_PACK_SELECT
```

Pack selection view identifier.

### VIEW_RESET {#f-cuttheropedx-gamemain-menucontroller-view-reset}

```csharp
public const int VIEW_RESET
```

Reset-confirmation view identifier.

### aboutView {#f-cuttheropedx-gamemain-menucontroller-aboutview}

```csharp
private AboutView aboutView
```

About view instance used for credits auto-scroll handling.

### bScrolling {#f-cuttheropedx-gamemain-menucontroller-bscrolling}

```csharp
private bool bScrolling
```

Whether the pack container is currently auto-scrolling.

### boxes {#f-cuttheropedx-gamemain-menucontroller-boxes}

```csharp
private readonly BaseElement[] boxes
```

Pack box elements shown in the pack selection container.

### candyContainer {#f-cuttheropedx-gamemain-menucontroller-candycontainer}

```csharp
private ScrollableContainer candyContainer
```

Scrollable container for candy and skin selection.

### currentPack {#f-cuttheropedx-gamemain-menucontroller-currentpack}

```csharp
private int currentPack
```

Currently selected pack index in the pack selection view.

### ddMainMenu {#f-cuttheropedx-gamemain-menucontroller-ddmainmenu}

```csharp
public DelayedDispatcher ddMainMenu
```

Delayed dispatcher used by the main menu and options view.

### ddPackSelect {#f-cuttheropedx-gamemain-menucontroller-ddpackselect}

```csharp
public DelayedDispatcher ddPackSelect
```

Delayed dispatcher used by the pack selection view.

### ep {#f-cuttheropedx-gamemain-menucontroller-ep}

```csharp
private Popup ep
```

Currently displayed popup, if any.

### level {#f-cuttheropedx-gamemain-menucontroller-level}

```csharp
private int level
```

Current level index used for gameplay launch.

### levelContainer {#f-cuttheropedx-gamemain-menucontroller-levelcontainer}

```csharp
private ScrollableContainer levelContainer
```

Scrollable container for level selection when a pack has many levels.

### nextb {#f-cuttheropedx-gamemain-menucontroller-nextb}

```csharp
private Button nextb
```

Next-pack arrow button.

### outdatedWindowsPopupShown {#f-cuttheropedx-gamemain-menucontroller-outdatedwindowspopupshown}

```csharp
private bool outdatedWindowsPopupShown
```

Whether the outdated Windows popup has already been shown.

### pack {#f-cuttheropedx-gamemain-menucontroller-pack}

```csharp
private int pack
```

Current pack index used for level selection and gameplay launch.

### packContainer {#f-cuttheropedx-gamemain-menucontroller-packcontainer}

```csharp
private ScrollableContainer packContainer
```

Scrollable container for pack selection.

### popUpMenu {#f-cuttheropedx-gamemain-menucontroller-popupmenu}

```csharp
private readonly PopUpMenu popUpMenu
```

Popup menu helper used for menu popups.

### prevb {#f-cuttheropedx-gamemain-menucontroller-prevb}

```csharp
private Button prevb
```

Previous-pack arrow button.

### replayingIntroMovie {#f-cuttheropedx-gamemain-menucontroller-replayingintromovie}

```csharp
private bool replayingIntroMovie
```

Whether the intro movie is being replayed before entering gameplay.

### scrollPacksLeft {#f-cuttheropedx-gamemain-menucontroller-scrollpacksleft}

```csharp
private int scrollPacksLeft
```

Pending leftward pack scroll count from repeated next-button presses.

### scrollPacksRight {#f-cuttheropedx-gamemain-menucontroller-scrollpacksright}

```csharp
private int scrollPacksRight
```

Pending rightward pack scroll count from repeated previous-button presses.

### showNextPackStatus {#f-cuttheropedx-gamemain-menucontroller-shownextpackstatus}

```csharp
private bool showNextPackStatus
```

Whether to show the next-pack unlock status after scrolling.

### updatePopupShown {#f-cuttheropedx-gamemain-menucontroller-updatepopupshown}

```csharp
private bool updatePopupShown
```

Whether the update-available popup has already been shown.

### updateReleaseUrl {#f-cuttheropedx-gamemain-menucontroller-updatereleaseurl}

```csharp
private string updateReleaseUrl
```

Release URL opened by the update popup download button.

### viewToShow {#f-cuttheropedx-gamemain-menucontroller-viewtoshow}

```csharp
public int viewToShow
```

View identifier to show when the menu controller is activated.

## Properties

### IsSinglePack {#p-cuttheropedx-gamemain-menucontroller-issinglepack}

```csharp
private static bool IsSinglePack { get; }
```

Whether the game is configured with a single playable pack.

## Methods

### Activate() {#m-cuttheropedx-gamemain-menucontroller-activate}

```csharp
public override void Activate()
```

Activates the controller and notifies the root controller.

### AttachSnowfallOverlay(View menuView) {#m-cuttheropedx-gamemain-menucontroller-attachsnowfalloverlay-cuttheropedx-framework-core-view}

```csharp
private static void AttachSnowfallOverlay(View menuView)
```

Adds the seasonal snowfall overlay to a menu view when the event is enabled.

Parameters:

- `menuView`: View that should receive the overlay.

### BackButtonPressed() {#m-cuttheropedx-gamemain-menucontroller-backbuttonpressed}

```csharp
public override bool BackButtonPressed()
```

Handles a back-button press.

Returns: Always `false`.

### CreateAbout() {#m-cuttheropedx-gamemain-menucontroller-createabout}

```csharp
public void CreateAbout()
```

Builds the about and credits view.

### CreateAchievements() {#m-cuttheropedx-gamemain-menucontroller-createachievements}

```csharp
public static void CreateAchievements()
```

Creates the achievements view placeholder.

### CreateAudioButtonWithQuadDelegateIDiconOffset(int q, IButtonDelegation delegateValue, ButtonId bid) {#m-cuttheropedx-gamemain-menucontroller-createaudiobuttonwithquaddelegateidiconoffset-system-int32-cuttheropedx-framework-visual-ibuttondelegation-cuttheropedx-framework-visual-buttonid}

```csharp
public static ToggleButton CreateAudioButtonWithQuadDelegateIDiconOffset(int q, IButtonDelegation delegateValue, ButtonId bid)
```

Creates a toggle button for an audio option.

Parameters:

- `q`: Audio icon quad index.
- `delegateValue`: Button delegate that receives press events.
- `bid`: Button identifier assigned to the created toggle.

Returns: The configured audio toggle button.

### CreateAudioElementForQuadwithCrosspressediconOffset(int q, bool b, bool p) {#m-cuttheropedx-gamemain-menucontroller-createaudioelementforquadwithcrosspressediconoffset-system-int32-system-boolean-system-boolean}

```csharp
public static Image CreateAudioElementForQuadwithCrosspressediconOffset(int q, bool b, bool p)
```

Creates an audio option element for a specific icon quad and toggle state.

Parameters:

- `q`: Audio icon quad index.
- `b`: Whether to draw the disabled cross overlay.
- `p`: Whether to use the pressed-state background quad.

Returns: The configured audio option image.

### CreateBackButtonWithDelegateID(IButtonDelegation d, ButtonId bid) {#m-cuttheropedx-gamemain-menucontroller-createbackbuttonwithdelegateid-cuttheropedx-framework-visual-ibuttondelegation-cuttheropedx-framework-visual-buttonid}

```csharp
public static Button CreateBackButtonWithDelegateID(IButtonDelegation d, ButtonId bid)
```

Creates the standard back button.

Parameters:

- `d`: Button delegate that receives press events.
- `bid`: Button identifier assigned to the back button.

Returns: The configured back button.

### CreateBackgroundWithLogo(bool l) {#m-cuttheropedx-gamemain-menucontroller-createbackgroundwithlogo-system-boolean}

```csharp
public BaseElement CreateBackgroundWithLogo(bool l)
```

Creates the menu background with an optional logo and the default shadow layer.

Parameters:

- `l`: Whether to include the menu logo and logo candy button.

Returns: The configured background element.

### CreateBackgroundWithLogowithShadow(bool l, bool s) {#m-cuttheropedx-gamemain-menucontroller-createbackgroundwithlogowithshadow-system-boolean-system-boolean}

```csharp
public BaseElement CreateBackgroundWithLogowithShadow(bool l, bool s)
```

Creates the menu background with optional logo and rotating shadow layer.

Parameters:

- `l`: Whether to include the menu logo and logo candy button.
- `s`: Whether to include the rotating shadow layer.

Returns: The configured background element.

### CreateBlankScoresButtonWithIconpressed(int quad, bool pressed) {#m-cuttheropedx-gamemain-menucontroller-createblankscoresbuttonwithiconpressed-system-int32-system-boolean}

```csharp
public static Image CreateBlankScoresButtonWithIconpressed(int quad, bool pressed)
```

Creates the visual element for an achievement or leaderboard button state.

Parameters:

- `quad`: Icon quad index.
- `pressed`: Whether to use the pressed-state button background.

Returns: The configured scores button image.

### CreateButton2WithImageQuad1Quad2IDDelegate(string resourceName, int q1, int q2, ButtonId bid, IButtonDelegation d) {#m-cuttheropedx-gamemain-menucontroller-createbutton2withimagequad1quad2iddelegate-system-string-system-int32-system-int32-cuttheropedx-framework-visual-buttonid-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public static Button CreateButton2WithImageQuad1Quad2IDDelegate(string resourceName, int q1, int q2, ButtonId bid, IButtonDelegation d)
```

Creates an image button whose down-state quad is position-adjusted relative to the up-state quad.

Parameters:

- `resourceName`: Texture resource name containing both quads.
- `q1`: Up-state quad index.
- `q2`: Down-state quad index.
- `bid`: Button identifier assigned to the created button.
- `d`: Button delegate that receives press events.

Returns: The configured image button.

### CreateButtonForLevelPack(int l, int p) {#m-cuttheropedx-gamemain-menucontroller-createbuttonforlevelpack-system-int32-system-int32}

```csharp
public BaseElement CreateButtonForLevelPack(int l, int p)
```

Creates one level selection button for a pack.

Parameters:

- `l`: Level index within the pack.
- `p`: Pack index.

Returns: The configured level button element.

### CreateButtonWithImageIDDelegate(string resourceName, ButtonId bid, IButtonDelegation d) {#m-cuttheropedx-gamemain-menucontroller-createbuttonwithimageiddelegate-system-string-cuttheropedx-framework-visual-buttonid-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public static Button CreateButtonWithImageIDDelegate(string resourceName, ButtonId bid, IButtonDelegation d)
```

Creates an image button from a texture resource.

Parameters:

- `resourceName`: Texture resource name for the button image.
- `bid`: Button identifier assigned to the created button.
- `d`: Button delegate that receives press events.

Returns: The configured image button.

### CreateButtonWithImageQuad1Quad2IDDelegate(string resourceName, int q1, int q2, ButtonId bid, IButtonDelegation d) {#m-cuttheropedx-gamemain-menucontroller-createbuttonwithimagequad1quad2iddelegate-system-string-system-int32-system-int32-cuttheropedx-framework-visual-buttonid-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public static Button CreateButtonWithImageQuad1Quad2IDDelegate(string resourceName, int q1, int q2, ButtonId bid, IButtonDelegation d)
```

Creates an image button from explicit up and down quad indices.

Parameters:

- `resourceName`: Texture resource name containing both quads.
- `q1`: Up-state quad index.
- `q2`: Down-state quad index.
- `bid`: Button identifier assigned to the created button.
- `d`: Button delegate that receives press events.

Returns: The configured image button.

### CreateButtonWithImageQuadIDDelegate(string resourceName, int quad, int bid, IButtonDelegation d) {#m-cuttheropedx-gamemain-menucontroller-createbuttonwithimagequadiddelegate-system-string-system-int32-system-int32-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public static Button CreateButtonWithImageQuadIDDelegate(string resourceName, int quad, int bid, IButtonDelegation d)
```

Creates an image button that reuses one quad for both button states.

Parameters:

- `resourceName`: Texture resource name containing the quad.
- `quad`: Quad index used by the button states.
- `bid`: Raw button identifier assigned to the created button.
- `d`: Button delegate that receives press events.

Returns: The configured image button.

### CreateButtonWithTextIDDelegate(string str, ButtonId bid, IButtonDelegation d) {#m-cuttheropedx-gamemain-menucontroller-createbuttonwithtextiddelegate-system-string-cuttheropedx-framework-visual-buttonid-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public static Button CreateButtonWithTextIDDelegate(string str, ButtonId bid, IButtonDelegation d)
```

Creates a full-width text button using the standard menu button quads.

Parameters:

- `str`: Button label text.
- `bid`: Button identifier assigned to the created button.
- `d`: Button delegate that receives press events.

Returns: The configured menu button.

### CreateCandySelection() {#m-cuttheropedx-gamemain-menucontroller-createcandyselection}

```csharp
public void CreateCandySelection()
```

Builds the candy, rope, Om Nom, and trace skin selection view.

### CreateControlButtontitleAnchortextbuttonIDdelegate(int q, string str, int bId, IButtonDelegation delegateValue) {#m-cuttheropedx-gamemain-menucontroller-createcontrolbuttontitleanchortextbuttoniddelegate-system-int32-system-string-system-int32-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public static BaseElement CreateControlButtontitleAnchortextbuttonIDdelegate(int q, string str, int bId, IButtonDelegation delegateValue)
```

Creates a control illustration with a label and either a check toggle or fixed check mark.

Parameters:

- `q`: Illustration quad index in the menu options texture.
- `str`: Label text shown under the illustration.
- `bId`: Raw button identifier for the toggle, or -1 for a non-interactive check mark.
- `delegateValue`: Button delegate that receives toggle events.

Returns: The configured control option element.

### CreateElementWithResIdquad(string resourceName, int quad) {#m-cuttheropedx-gamemain-menucontroller-createelementwithresidquad-system-string-system-int32}

```csharp
public static BaseElement CreateElementWithResIdquad(string resourceName, int quad)
```

Creates an image element for a resource quad, or an empty element when no valid quad is provided.

Parameters:

- `resourceName`: Texture resource name.
- `quad`: Quad index to create, or -1 for an empty element.

Returns: The created image or empty element.

### CreateLanguageSelection() {#m-cuttheropedx-gamemain-menucontroller-createlanguageselection}

```csharp
public void CreateLanguageSelection()
```

Builds the language selection view from the available UI language list.

### CreateLeaderboards() {#m-cuttheropedx-gamemain-menucontroller-createleaderboards}

```csharp
public static void CreateLeaderboards()
```

Creates the leaderboards view placeholder.

### CreateLevelSelect() {#m-cuttheropedx-gamemain-menucontroller-createlevelselect}

```csharp
public void CreateLevelSelect()
```

Builds the level selection view for the current pack.

### CreateMainMenu() {#m-cuttheropedx-gamemain-menucontroller-createmainmenu}

```csharp
public void CreateMainMenu()
```

Builds the main menu view.

### CreateMovieView() {#m-cuttheropedx-gamemain-menucontroller-createmovieview}

```csharp
public void CreateMovieView()
```

Builds the movie playback view.

### CreateOptions() {#m-cuttheropedx-gamemain-menucontroller-createoptions}

```csharp
public void CreateOptions()
```

Builds the options view.

### CreatePackElementforContainer(int n, ScrollableContainer c) {#m-cuttheropedx-gamemain-menucontroller-createpackelementforcontainer-system-int32-cuttheropedx-framework-visual-scrollablecontainer}

```csharp
public BaseElement CreatePackElementforContainer(int n, ScrollableContainer c)
```

Creates one pack tile for the pack selection scroll container.

Parameters:

- `n`: Displayed pack index.
- `c`: Scrollable container that owns the pack tile.

Returns: The configured pack tile element.

### CreatePackSelect() {#m-cuttheropedx-gamemain-menucontroller-createpackselect}

```csharp
public void CreatePackSelect()
```

Builds the pack selection view.

### CreateReset() {#m-cuttheropedx-gamemain-menucontroller-createreset}

```csharp
public void CreateReset()
```

Builds the reset-confirmation view.

### CreateScoresButtonWithIconbuttonIDdelegate(int quad, int bId, IButtonDelegation delegateValue) {#m-cuttheropedx-gamemain-menucontroller-createscoresbuttonwithiconbuttoniddelegate-system-int32-system-int32-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public static Button CreateScoresButtonWithIconbuttonIDdelegate(int quad, int bId, IButtonDelegation delegateValue)
```

Creates an achievement or leaderboard button.

Parameters:

- `quad`: Icon quad index.
- `bId`: Raw button identifier assigned to the created button.
- `delegateValue`: Button delegate that receives press events.

Returns: The configured scores button.

### CreateShortButtonWithTextIDDelegate(string str, ButtonId bid, IButtonDelegation d, bool selected = false) {#m-cuttheropedx-gamemain-menucontroller-createshortbuttonwithtextiddelegate-system-string-cuttheropedx-framework-visual-buttonid-cuttheropedx-framework-visual-ibuttondelegation-system-boolean}

```csharp
public static Button CreateShortButtonWithTextIDDelegate(string str, ButtonId bid, IButtonDelegation d, bool selected = false)
```

Creates a shorter text button, optionally rendering it in the selected state.

Parameters:

- `str`: Button label text.
- `bid`: Button identifier assigned to the created button.
- `d`: Button delegate that receives press events.
- `selected`: Whether the button should render with its selected-state quads.

Returns: The configured short menu button.

### CreateTextWithStar(string t) {#m-cuttheropedx-gamemain-menucontroller-createtextwithstar-system-string}

```csharp
public static HBox CreateTextWithStar(string t)
```

Creates a horizontal star-count label.

Parameters:

- `t`: Text shown before the star icon.

Returns: The configured label row.

### CreateToggleButtonWithResquadquad2buttonIDdelegate(string resourceName, int quad, int quad2, int bId, IButtonDelegation delegateValue) {#m-cuttheropedx-gamemain-menucontroller-createtogglebuttonwithresquadquad2buttoniddelegate-system-string-system-int32-system-int32-system-int32-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public static ToggleButton CreateToggleButtonWithResquadquad2buttonIDdelegate(string resourceName, int quad, int quad2, int bId, IButtonDelegation delegateValue)
```

Creates a toggle button from two resource quads.

Parameters:

- `resourceName`: Texture resource name containing both quads.
- `quad`: First toggle-state quad index.
- `quad2`: Second toggle-state quad index.
- `bId`: Raw button identifier assigned to the created toggle.
- `delegateValue`: Button delegate that receives press events.

Returns: The configured toggle button.

### CreateToggleButtonWithText1Text2IDDelegate(string str1, string str2, ButtonId bid, IButtonDelegation d) {#m-cuttheropedx-gamemain-menucontroller-createtogglebuttonwithtext1text2iddelegate-system-string-system-string-cuttheropedx-framework-visual-buttonid-cuttheropedx-framework-visual-ibuttondelegation}

```csharp
public static ToggleButton CreateToggleButtonWithText1Text2IDDelegate(string str1, string str2, ButtonId bid, IButtonDelegation d)
```

Creates a two-state text toggle button using the standard menu button quads.

Parameters:

- `str1`: Label text for the first toggle state.
- `str2`: Label text for the second toggle state.
- `bid`: Button identifier assigned to the created toggle.
- `d`: Button delegate that receives press events.

Returns: The configured toggle button.

### Dispose(bool disposing) {#m-cuttheropedx-gamemain-menucontroller-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../Framework/FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### FixScrollPoint(int moveToPack) {#m-cuttheropedx-gamemain-menucontroller-fixscrollpoint-system-int32}

```csharp
private int FixScrollPoint(int moveToPack)
```

Clamps a requested pack scroll point to the available scroll point range.

Parameters:

- `moveToPack`: Requested pack scroll point.

Returns: The clamped scroll point.

### FullscreenToggled(bool isFullscreen) {#m-cuttheropedx-gamemain-menucontroller-fullscreentoggled-system-boolean}

```csharp
public override void FullscreenToggled(bool isFullscreen)
```

Notifies the controller that fullscreen state changed.

Parameters:

- `isFullscreen`: New fullscreen state.

### GetBoxWidth() {#m-cuttheropedx-gamemain-menucontroller-getboxwidth}

```csharp
public static float GetBoxWidth()
```

Gets the rendered width of a pack box in the pack picker.

Returns: The box width including its quad offset padding.

### GetPackOffset() {#m-cuttheropedx-gamemain-menucontroller-getpackoffset}

```csharp
public static float GetPackOffset()
```

Gets the horizontal pack offset used when the screen can only show two boxes comfortably.

Returns: The pack offset in screen units.

### HandleMouseWheel(int scrollDelta) {#m-cuttheropedx-gamemain-menucontroller-handlemousewheel-system-int32}

```csharp
public override bool HandleMouseWheel(int scrollDelta)
```

Handles mouse wheel scrolling input for the controller.

Parameters:

- `scrollDelta`: The mouse wheel scroll delta. Positive values indicate scrolling up (away from user), negative values indicate scrolling down (toward user).

Returns: `true` if the scroll input was handled by this controller or its active view, `false` otherwise.

### MoviePlaybackFinished(string url) {#m-cuttheropedx-gamemain-menucontroller-movieplaybackfinished-system-string}

```csharp
public void MoviePlaybackFinished(string url)
```

Handles completion of intro or outro movie playback.

Parameters:

- `url`: Completed movie URL, or `null` when entering the menu flow directly.

### OnButtonPressed(MenuButtonId n) {#m-cuttheropedx-gamemain-menucontroller-onbuttonpressed-cuttheropedx-gamemain-menubuttonid}

```csharp
public void OnButtonPressed(MenuButtonId n)
```

Handles a typed menu button press.

Parameters:

- `n`: Menu button identifier that was pressed.

### OnChildDeactivated(int n) {#m-cuttheropedx-gamemain-menucontroller-onchilddeactivated-system-int32}

```csharp
public override void OnChildDeactivated(int n)
```

Called when a child controller has deactivated. The default implementation simply unpauses this controller.

Parameters:

- `n`: Identifier of the child that deactivated.

### PreLevelSelect() {#m-cuttheropedx-gamemain-menucontroller-prelevelselect}

```csharp
public void PreLevelSelect()
```

Loads pack cover resources and recreates the level selection view before it is shown.

### RecreateOptions() {#m-cuttheropedx-gamemain-menucontroller-recreateoptions}

```csharp
public void RecreateOptions()
```

Recreates the options view after localized resources or settings change.

### ScrollableContainerchangedTargetScrollPoint(ScrollableContainer e, int i) {#m-cuttheropedx-gamemain-menucontroller-scrollablecontainerchangedtargetscrollpoint-cuttheropedx-framework-visual-scrollablecontainer-system-int32}

```csharp
public void ScrollableContainerchangedTargetScrollPoint(ScrollableContainer e, int i)
```

Handles the pack scroll container changing its target scroll point.

Parameters:

- `e`: Scrollable container whose target changed.
- `i`: Target scroll point index.

### ScrollableContainerreachedScrollPoint(ScrollableContainer e, int i) {#m-cuttheropedx-gamemain-menucontroller-scrollablecontainerreachedscrollpoint-cuttheropedx-framework-visual-scrollablecontainer-system-int32}

```csharp
public void ScrollableContainerreachedScrollPoint(ScrollableContainer e, int i)
```

Handles a pack scroll container reaching a target scroll point.

Parameters:

- `e`: Scrollable container that reached the point.
- `i`: Reached scroll point index.

### Selector_recreateOptions(FrameworkTypes param) {#m-cuttheropedx-gamemain-menucontroller-selector-recreateoptions-cuttheropedx-framework-frameworktypes}

```csharp
public void Selector_recreateOptions(FrameworkTypes param)
```

Delayed-dispatcher callback that recreates the options view.

Parameters:

- `param`: Unused dispatcher parameter.

### ShowCantUnlockPopup() {#m-cuttheropedx-gamemain-menucontroller-showcantunlockpopup}

```csharp
public void ShowCantUnlockPopup()
```

Shows the popup used when the selected pack cannot be unlocked.

### ShowGameFinishedPopup() {#m-cuttheropedx-gamemain-menucontroller-showgamefinishedpopup}

```csharp
public void ShowGameFinishedPopup()
```

Shows the popup displayed after the game is completed.

### ShowNextPack() {#m-cuttheropedx-gamemain-menucontroller-shownextpack}

```csharp
public void ShowNextPack()
```

Advances from the current pack to the next pack or outro flow.

### ShowYesNoPopup(string str, MenuButtonId buttonYesId, MenuButtonId buttonNoId) {#m-cuttheropedx-gamemain-menucontroller-showyesnopopup-system-string-cuttheropedx-gamemain-menubuttonid-cuttheropedx-gamemain-menubuttonid}

```csharp
public void ShowYesNoPopup(string str, MenuButtonId buttonYesId, MenuButtonId buttonNoId)
```

Shows a generic yes/no popup.

Parameters:

- `str`: Popup text.
- `buttonYesId`: Button identifier for the yes action.
- `buttonNoId`: Button identifier for the no action.

### TimelineFinished(Timeline t) {#m-cuttheropedx-gamemain-menucontroller-timelinefinished-cuttheropedx-framework-visual-timeline}

```csharp
public void TimelineFinished(Timeline t)
```

Called when the timeline finishes playback.

Parameters:

- `t`: Timeline that finished.

### TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i) {#m-cuttheropedx-gamemain-menucontroller-timelinereachedkeyframewithindex-cuttheropedx-framework-visual-timeline-cuttheropedx-framework-visual-keyframe-system-int32}

```csharp
public void TimelinereachedKeyFramewithIndex(Timeline t, KeyFrame k, int i)
```

Called when the timeline reaches keyframe `k` at index `i`.

Parameters:

- `t`: Timeline that reached the keyframe.
- `k`: Keyframe that was reached.
- `i`: Index of the keyframe.

### TouchesBeganwithEvent(IList&lt;TouchLocation&gt; touches) {#m-cuttheropedx-gamemain-menucontroller-touchesbeganwithevent-system-collections-generic-ilist-microsoft-xna-framework-input-touch-touchlocation}

```csharp
public override bool TouchesBeganwithEvent(IList<TouchLocation> touches)
```

Forwards the first pressed touch in the collection to the active view.

Parameters:

- `touches`: Touch collection to inspect.

Returns: `true` if the active view handled the touch; otherwise `false`.

### TryShowOutdatedWindowsPopup() {#m-cuttheropedx-gamemain-menucontroller-tryshowoutdatedwindowspopup}

```csharp
private void TryShowOutdatedWindowsPopup()
```

Shows the outdated Windows popup once when the main menu is active and the platform needs it.

### TryShowUpdatePopup() {#m-cuttheropedx-gamemain-menucontroller-tryshowupdatepopup}

```csharp
private void TryShowUpdatePopup()
```

Shows the update-available popup once when update information is ready on the main menu.

### Update(float delta) {#m-cuttheropedx-gamemain-menucontroller-update-system-single}

```csharp
public override void Update(float delta)
```

Updates the active view, if one is currently shown.

Parameters:

- `delta`: Elapsed frame time in seconds.


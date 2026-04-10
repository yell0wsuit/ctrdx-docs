---
title: Class CTRPreferences
description: Manages game preferences including level progress, scores, stars, pack unlocks, and user settings.
---

# Class CTRPreferences

Namespace: `CutTheRopeDX.GameMain`

Assembly: `CutTheRope-DX.dll`

Source: `CTRPreferences.cs`

Manages game preferences including level progress, scores, stars, pack unlocks, and user settings.

## Declaration

```csharp
internal sealed class CTRPreferences : Preferences
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Framework/Helpers/CTRMathHelper.md)
- [FrameworkTypes](../Framework/FrameworkTypes.md)
- [Preferences](../Framework/Core/Preferences.md)
- [CTRPreferences](CTRPreferences.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Constructors

### CTRPreferences() {#m-cuttheropedx-gamemain-ctrpreferences-ctor}

```csharp
public CTRPreferences()
```

Initializes preferences, performing first-launch setup or migration from older versions as needed.

## Fields

### EXPERIMENTS_LINK {#f-cuttheropedx-gamemain-ctrpreferences-experiments-link}

```csharp
public const string EXPERIMENTS_LINK
```

Cut the Rope: Experiments Amazon Store listing URL.

### FACEBOOK_LINK {#f-cuttheropedx-gamemain-ctrpreferences-facebook-link}

```csharp
public const string FACEBOOK_LINK
```

Cut the Rope Facebook page URL.

### TWITTER_LINK {#f-cuttheropedx-gamemain-ctrpreferences-twitter-link}

```csharp
public const string TWITTER_LINK
```

ZeptoLab Twitter profile URL.

### firstLaunch {#f-cuttheropedx-gamemain-ctrpreferences-firstlaunch}

```csharp
private readonly bool firstLaunch
```

Whether this is the first time the game has been launched.

### playLevelScroll {#f-cuttheropedx-gamemain-ctrpreferences-playlevelscroll}

```csharp
private bool playLevelScroll
```

Whether the level scroll animation should play on the next level screen display.

### remoteDataManager {#f-cuttheropedx-gamemain-ctrpreferences-remotedatamanager}

```csharp
public RemoteDataManager remoteDataManager
```

Manages fetching and caching of remote configuration data.

## Methods

### CheckForUnlockIAP() {#m-cuttheropedx-gamemain-ctrpreferences-checkforunlockiap}

```csharp
private static void CheckForUnlockIAP()
```

If the unlock-all IAP has been purchased, unlocks the first level of every locked pack.

### DisablePlayLevelScroll() {#m-cuttheropedx-gamemain-ctrpreferences-disableplaylevelscroll}

```csharp
public static void DisablePlayLevelScroll()
```

Disables the level scroll animation on the next level screen display.

### EnsureSlotEntryPacksUnlocked() {#m-cuttheropedx-gamemain-ctrpreferences-ensureslotentrypacksunlocked}

```csharp
private static void EnsureSlotEntryPacksUnlocked()
```

Ensures the first level of each slot-entry pack is unlocked so players can always access at least one level per save slot.

### GameViewChanged(string _) {#m-cuttheropedx-gamemain-ctrpreferences-gameviewchanged-system-string}

```csharp
public static void GameViewChanged(string _)
```

Called when the game view changes. Currently a no-op.

Parameters:

- `_`: Unused parameter.

### GetBoxForPack(int pack) {#m-cuttheropedx-gamemain-ctrpreferences-getboxforpack-system-int32}

```csharp
public static int GetBoxForPack(int pack)
```

Gets the save slot index for the specified pack.

Parameters:

- `pack`: The pack index.

Returns: The save slot index.

### GetLastBox() {#m-cuttheropedx-gamemain-ctrpreferences-getlastbox}

```csharp
public static int GetLastBox()
```

Gets the last selected save slot index, defaulting to 0 if out of range.

Returns: The save slot index.

### GetLastGamePack() {#m-cuttheropedx-gamemain-ctrpreferences-getlastgamepack}

```csharp
public static int GetLastGamePack()
```

Gets the last selected game pack index, defaulting to 0 if not set.

Returns: The game pack index.

### GetLevelsInPackCount(int pack) {#m-cuttheropedx-gamemain-ctrpreferences-getlevelsinpackcount-system-int32}

```csharp
public static int GetLevelsInPackCount(int pack)
```

Gets the number of levels in the specified pack, limited by shareware restrictions if applicable.

Parameters:

- `pack`: The pack index.

Returns: The number of levels.

### GetLevelsInPackCount() {#m-cuttheropedx-gamemain-ctrpreferences-getlevelsinpackcount}

```csharp
public static int GetLevelsInPackCount()
```

Gets the maximum number of levels per pack.

Returns: The maximum level count.

### GetPackLevelKey(string prefs, int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-getpacklevelkey-system-string-system-int32-system-int32}

```csharp
private static string GetPackLevelKey(string prefs, int p, int l)
```

Builds a preference key string for a specific pack and level.

Parameters:

- `prefs`: The key prefix (e.g. `"STARS_"`, `"SCORE_"`).
- `p`: The pack index.
- `l`: The level index within the pack.

Returns: The composite preference key.

### GetPacksCount() {#m-cuttheropedx-gamemain-ctrpreferences-getpackscount}

```csharp
public static int GetPacksCount()
```

Gets the total number of available packs, limited by shareware restrictions if applicable.

Returns: The number of packs.

### GetScoreForPackLevel(int box, int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-getscoreforpacklevel-system-int32-system-int32-system-int32}

```csharp
public static int GetScoreForPackLevel(int box, int p, int l)
```

Gets the score for a specific level in a save slot.

Parameters:

- `box`: The save slot index.
- `p`: The pack index.
- `l`: The level index within the pack.

Returns: The level score.

### GetScoreForPackLevel(int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-getscoreforpacklevel-system-int32-system-int32}

```csharp
public static int GetScoreForPackLevel(int p, int l)
```

Gets the score for a specific level, using the pack's default save slot.

Parameters:

- `p`: The pack index.
- `l`: The level index within the pack.

Returns: The level score.

### GetStarsForPackLevel(int box, int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-getstarsforpacklevel-system-int32-system-int32-system-int32}

```csharp
public static int GetStarsForPackLevel(int box, int p, int l)
```

Gets the number of stars earned for a specific level in a save slot.

Parameters:

- `box`: The save slot index.
- `p`: The pack index.
- `l`: The level index within the pack.

Returns: The number of stars earned (0–3).

### GetStarsForPackLevel(int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-getstarsforpacklevel-system-int32-system-int32}

```csharp
public static int GetStarsForPackLevel(int p, int l)
```

Gets the number of stars earned for a specific level, using the pack's default save slot.

Parameters:

- `p`: The pack index.
- `l`: The level index within the pack.

Returns: The number of stars earned (0–3).

### GetTotalScore() {#m-cuttheropedx-gamemain-ctrpreferences-gettotalscore}

```csharp
private static int GetTotalScore()
```

Calculates the sum of all level scores across every pack and save slot.

Returns: The total score.

### GetTotalStars() {#m-cuttheropedx-gamemain-ctrpreferences-gettotalstars}

```csharp
public static int GetTotalStars()
```

Gets the total stars earned in the current pack's save slot.

Returns: The total star count.

### GetTotalStarsInBox(int box) {#m-cuttheropedx-gamemain-ctrpreferences-gettotalstarsinbox-system-int32}

```csharp
public static int GetTotalStarsInBox(int box)
```

Gets the total stars earned across all packs in the specified save slot.

Parameters:

- `box`: The save slot index.

Returns: The total star count.

### GetTotalStarsInPack(int box, int p) {#m-cuttheropedx-gamemain-ctrpreferences-gettotalstarsinpack-system-int32-system-int32}

```csharp
public static int GetTotalStarsInPack(int box, int p)
```

Gets the total stars earned across all levels in a pack within the specified save slot.

Parameters:

- `box`: The save slot index.
- `p`: The pack index.

Returns: The total star count for the pack.

### GetTotalStarsInPack(int p) {#m-cuttheropedx-gamemain-ctrpreferences-gettotalstarsinpack-system-int32}

```csharp
public static int GetTotalStarsInPack(int p)
```

Gets the total stars earned across all levels in a pack, using the pack's default save slot.

Parameters:

- `p`: The pack index.

Returns: The total star count for the pack.

### GetUnlockedForPackLevel(int box, int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-getunlockedforpacklevel-system-int32-system-int32-system-int32}

```csharp
public static UNLOCKEDSTATE GetUnlockedForPackLevel(int box, int p, int l)
```

Gets the unlock state of a specific level in a save slot.

Parameters:

- `box`: The save slot index.
- `p`: The pack index.
- `l`: The level index within the pack.

Returns: The [UNLOCKEDSTATE](UNLOCKEDSTATE.md) of the level.

### GetUnlockedForPackLevel(int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-getunlockedforpacklevel-system-int32-system-int32}

```csharp
public static UNLOCKEDSTATE GetUnlockedForPackLevel(int p, int l)
```

Gets the unlock state of a specific level, using the pack's default save slot.

Parameters:

- `p`: The pack index.
- `l`: The level index within the pack.

Returns: The [UNLOCKEDSTATE](UNLOCKEDSTATE.md) of the level.

### IsBannersMustBeShown() {#m-cuttheropedx-gamemain-ctrpreferences-isbannersmustbeshown}

```csharp
public static bool IsBannersMustBeShown()
```

Returns whether advertisement banners should be displayed.

Returns: Always `false` in this build.

### IsFirstLaunch() {#m-cuttheropedx-gamemain-ctrpreferences-isfirstlaunch}

```csharp
internal static bool IsFirstLaunch()
```

Returns whether this is the first time the game has been launched.

Returns: `true` on first launch; otherwise, `false`.

### IsLiteVersion() {#m-cuttheropedx-gamemain-ctrpreferences-isliteversion}

```csharp
public static bool IsLiteVersion()
```

Returns whether this is the lite (free) version of the game.

Returns: Always `false` in this build.

### IsPackPerfect(int box, int p) {#m-cuttheropedx-gamemain-ctrpreferences-ispackperfect-system-int32-system-int32}

```csharp
public static bool IsPackPerfect(int box, int p)
```

Returns whether every level in the pack has 3 stars in the specified save slot.

Parameters:

- `box`: The save slot index.
- `p`: The pack index.

Returns: `true` if all levels have 3 stars; otherwise, `false`.

### IsPackPerfect(int p) {#m-cuttheropedx-gamemain-ctrpreferences-ispackperfect-system-int32}

```csharp
public static bool IsPackPerfect(int p)
```

Returns whether every level in the pack has 3 stars, using the pack's default save slot.

Parameters:

- `p`: The pack index.

Returns: `true` if all levels have 3 stars; otherwise, `false`.

### IsScoreHashValid() {#m-cuttheropedx-gamemain-ctrpreferences-isscorehashvalid}

```csharp
internal static bool IsScoreHashValid()
```

Validates the stored score hash against the current total score.

Returns: Always `true` in this build.

### IsShareware() {#m-cuttheropedx-gamemain-ctrpreferences-isshareware}

```csharp
private static bool IsShareware()
```

Returns whether the game is a shareware build.

Returns: Always `false` in this build.

### IsSharewareUnlocked() {#m-cuttheropedx-gamemain-ctrpreferences-issharewareunlocked}

```csharp
public static bool IsSharewareUnlocked()
```

Returns whether the shareware content has been unlocked.

Returns: `true` if not shareware or if the shareware IAP has been purchased.

### IsSlotEntryPack(int pack) {#m-cuttheropedx-gamemain-ctrpreferences-isslotentrypack-system-int32}

```csharp
private static bool IsSlotEntryPack(int pack)
```

Returns whether the specified pack is the first pack in its save slot.

Parameters:

- `pack`: The pack index.

Returns: `true` if no earlier pack shares the same save slot; otherwise, `false`.

### IsUpdateCheckEnabled() {#m-cuttheropedx-gamemain-ctrpreferences-isupdatecheckenabled}

```csharp
public static bool IsUpdateCheckEnabled()
```

Returns whether automatic update checking is enabled.

Returns: `true` if update checking is enabled; otherwise, `false`.

### PackUnlockStars(int n) {#m-cuttheropedx-gamemain-ctrpreferences-packunlockstars-system-int32}

```csharp
public static int PackUnlockStars(int n)
```

Gets the number of stars required to unlock the specified pack.

Parameters:

- `n`: The pack index.

Returns: The star threshold for unlocking.

### ResetMusicSound() {#m-cuttheropedx-gamemain-ctrpreferences-resetmusicsound}

```csharp
private static void ResetMusicSound()
```

Resets sound and music preferences to enabled.

### ResetToDefaults() {#m-cuttheropedx-gamemain-ctrpreferences-resettodefaults}

```csharp
public static void ResetToDefaults()
```

Resets all progress and preferences to their default values.

### SetLastBox(int p) {#m-cuttheropedx-gamemain-ctrpreferences-setlastbox-system-int32}

```csharp
public static void SetLastBox(int p)
```

Saves the last selected save slot index.

Parameters:

- `p`: The save slot index.

### SetLastGamePack(int b) {#m-cuttheropedx-gamemain-ctrpreferences-setlastgamepack-system-int32}

```csharp
public static void SetLastGamePack(int b)
```

Saves the last selected game pack index.

Parameters:

- `b`: The game pack index.

### SetRpcPreferenceInJson() {#m-cuttheropedx-gamemain-ctrpreferences-setrpcpreferenceinjson}

```csharp
private static void SetRpcPreferenceInJson()
```

Ensures the Discord RPC preference exists until settings UI can create it.

### SetScoreForPackLevel(int box, int s, int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-setscoreforpacklevel-system-int32-system-int32-system-int32-system-int32}

```csharp
public static void SetScoreForPackLevel(int box, int s, int p, int l)
```

Sets the score for a specific level in a save slot.

Parameters:

- `box`: The save slot index.
- `s`: The score to set.
- `p`: The pack index.
- `l`: The level index within the pack.

### SetScoreForPackLevel(int s, int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-setscoreforpacklevel-system-int32-system-int32-system-int32}

```csharp
public static void SetScoreForPackLevel(int s, int p, int l)
```

Sets the score for a specific level, using the pack's default save slot.

Parameters:

- `s`: The score to set.
- `p`: The pack index.
- `l`: The level index within the pack.

### SetScoreHash() {#m-cuttheropedx-gamemain-ctrpreferences-setscorehash}

```csharp
public static void SetScoreHash()
```

Computes and stores a SHA-256 hash of the total score for integrity validation.

### SetStarsForPackLevel(int box, int s, int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-setstarsforpacklevel-system-int32-system-int32-system-int32-system-int32}

```csharp
public static void SetStarsForPackLevel(int box, int s, int p, int l)
```

Sets the star count for a specific level in a save slot.

Parameters:

- `box`: The save slot index.
- `s`: The number of stars to set.
- `p`: The pack index.
- `l`: The level index within the pack.

### SetStarsForPackLevel(int s, int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-setstarsforpacklevel-system-int32-system-int32-system-int32}

```csharp
public static void SetStarsForPackLevel(int s, int p, int l)
```

Sets the star count for a specific level, using the pack's default save slot.

Parameters:

- `s`: The number of stars to set.
- `p`: The pack index.
- `l`: The level index within the pack.

### SetUnlockedForPackLevel(int box, UNLOCKEDSTATE s, int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-setunlockedforpacklevel-system-int32-cuttheropedx-gamemain-unlockedstate-system-int32-system-int32}

```csharp
public static void SetUnlockedForPackLevel(int box, UNLOCKEDSTATE s, int p, int l)
```

Sets the unlock state of a specific level in a save slot.

Parameters:

- `box`: The save slot index.
- `s`: The unlock state to set.
- `p`: The pack index.
- `l`: The level index within the pack.

### SetUnlockedForPackLevel(UNLOCKEDSTATE s, int p, int l) {#m-cuttheropedx-gamemain-ctrpreferences-setunlockedforpacklevel-cuttheropedx-gamemain-unlockedstate-system-int32-system-int32}

```csharp
public static void SetUnlockedForPackLevel(UNLOCKEDSTATE s, int p, int l)
```

Sets the unlock state of a specific level, using the pack's default save slot.

Parameters:

- `s`: The unlock state to set.
- `p`: The pack index.
- `l`: The level index within the pack.

### SetUpdateCheckPreferenceInJson() {#m-cuttheropedx-gamemain-ctrpreferences-setupdatecheckpreferenceinjson}

```csharp
private static void SetUpdateCheckPreferenceInJson()
```

Ensures the update-check preference exists until settings UI can create it.

### SharewareFreeLevels() {#m-cuttheropedx-gamemain-ctrpreferences-sharewarefreelevels}

```csharp
public static int SharewareFreeLevels()
```

Gets the number of free levels available in the shareware version.

Returns: The free level count.

### SharewareFreePacks() {#m-cuttheropedx-gamemain-ctrpreferences-sharewarefreepacks}

```csharp
public static int SharewareFreePacks()
```

Gets the number of free packs available in the shareware version.

Returns: The free pack count.

### ShouldPlayLevelScroll() {#m-cuttheropedx-gamemain-ctrpreferences-shouldplaylevelscroll}

```csharp
internal static bool ShouldPlayLevelScroll()
```

Returns whether the level scroll animation should play.

Returns: `true` if level scroll should play; otherwise, `false`.


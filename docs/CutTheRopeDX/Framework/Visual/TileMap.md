---
title: Class TileMap
description: A grid-based tile map that renders tiles using ImageMultiDrawer instances, supporting parallax, repeating, and random tile selection.
---

# Class TileMap

Namespace: `CutTheRopeDX.Framework.Visual`

Assembly: `CutTheRope-DX.dll`

Source: `TileMap.cs`

A grid-based tile map that renders tiles using [ImageMultiDrawer](ImageMultiDrawer.md) instances, supporting parallax, repeating, and random tile selection.

## Declaration

```csharp
internal sealed class TileMap : BaseElement
```

## Inheritance

- [object](https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-10.0)
- [CTRMathHelper](../Helpers/CTRMathHelper.md)
- [FrameworkTypes](../FrameworkTypes.md)
- [BaseElement](BaseElement.md)
- [TileMap](TileMap.md)

## Implements

- [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-10.0)

## Fields

### cameraViewHeight {#f-cuttheropedx-framework-visual-tilemap-cameraviewheight}

```csharp
private int cameraViewHeight
```

Camera viewport height in pixels.

### cameraViewWidth {#f-cuttheropedx-framework-visual-tilemap-cameraviewwidth}

```csharp
private int cameraViewWidth
```

Camera viewport width in pixels.

### columns {#f-cuttheropedx-framework-visual-tilemap-columns}

```csharp
private int columns
```

Number of columns in the grid.

### drawers {#f-cuttheropedx-framework-visual-tilemap-drawers}

```csharp
private List<ImageMultiDrawer> drawers
```

List of drawers, one per unique texture.

### horizontalRandom {#f-cuttheropedx-framework-visual-tilemap-horizontalrandom}

```csharp
private bool horizontalRandom
```

Whether columns are selected randomly instead of sequentially.

### matrix {#f-cuttheropedx-framework-visual-tilemap-matrix}

```csharp
public int[,] matrix
```

2D grid mapping (column, row) to tile IDs.

### maxColsOnScreen {#f-cuttheropedx-framework-visual-tilemap-maxcolsonscreen}

```csharp
private int maxColsOnScreen
```

Maximum number of tile columns visible on screen.

### maxRowsOnScreen {#f-cuttheropedx-framework-visual-tilemap-maxrowsonscreen}

```csharp
private int maxRowsOnScreen
```

Maximum number of tile rows visible on screen.

### parallaxRatio {#f-cuttheropedx-framework-visual-tilemap-parallaxratio}

```csharp
private float parallaxRatio
```

Parallax scroll ratio (1 = no parallax).

### randomSeed {#f-cuttheropedx-framework-visual-tilemap-randomseed}

```csharp
private int randomSeed
```

Seed for random tile selection.

### repeatedHorizontally {#f-cuttheropedx-framework-visual-tilemap-repeatedhorizontally}

```csharp
private TileMap.Repeat repeatedHorizontally
```

Horizontal repeat mode.

### repeatedVertically {#f-cuttheropedx-framework-visual-tilemap-repeatedvertically}

```csharp
private TileMap.Repeat repeatedVertically
```

Vertical repeat mode.

### rows {#f-cuttheropedx-framework-visual-tilemap-rows}

```csharp
private int rows
```

Number of rows in the grid.

### tileHeight {#f-cuttheropedx-framework-visual-tilemap-tileheight}

```csharp
private int tileHeight
```

Height of a single tile in pixels.

### tileMapHeight {#f-cuttheropedx-framework-visual-tilemap-tilemapheight}

```csharp
private int tileMapHeight
```

Total tile map height in pixels.

### tileMapWidth {#f-cuttheropedx-framework-visual-tilemap-tilemapwidth}

```csharp
private int tileMapWidth
```

Total tile map width in pixels.

### tileWidth {#f-cuttheropedx-framework-visual-tilemap-tilewidth}

```csharp
private int tileWidth
```

Width of a single tile in pixels.

### tiles {#f-cuttheropedx-framework-visual-tilemap-tiles}

```csharp
private Dictionary<int, TileEntry> tiles
```

Tile definitions keyed by tile ID.

### verticalRandom {#f-cuttheropedx-framework-visual-tilemap-verticalrandom}

```csharp
private bool verticalRandom
```

Whether rows are selected randomly instead of sequentially.

## Methods

### AddTileQuadwithID(CTRTexture2D t, int q, int ti) {#m-cuttheropedx-framework-visual-tilemap-addtilequadwithid-cuttheropedx-framework-visual-ctrtexture2d-system-int32-system-int32}

```csharp
public void AddTileQuadwithID(CTRTexture2D t, int q, int ti)
```

Registers a tile from a texture quad and assigns it a tile ID.

Parameters:

- `t`: Texture containing the tile.
- `q`: Quad index within the texture, or -1 for full image.
- `ti`: Tile ID used in the matrix.

### Dispose(bool disposing) {#m-cuttheropedx-framework-visual-tilemap-dispose-system-boolean}

```csharp
protected override void Dispose(bool disposing)
```

Releases resources. Override in derived classes to free owned resources.

Parameters:

- `disposing`: `true` when called from [Dispose](../FrameworkTypes.md#m-cuttheropedx-framework-frameworktypes-dispose); `false` from finalizer.

### Draw() {#m-cuttheropedx-framework-visual-tilemap-draw}

```csharp
public override void Draw()
```

Draws this element by calling [PreDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-predraw) and [PostDraw](BaseElement.md#m-cuttheropedx-framework-visual-baseelement-postdraw).

### FillStartAtRowColumnRowsColumnswithTile(int r, int c, int rs, int cs, int ti) {#m-cuttheropedx-framework-visual-tilemap-fillstartatrowcolumnrowscolumnswithtile-system-int32-system-int32-system-int32-system-int32-system-int32}

```csharp
public void FillStartAtRowColumnRowsColumnswithTile(int r, int c, int rs, int cs, int ti)
```

Fills a rectangular region of the matrix with the specified tile ID.

Parameters:

- `r`: Starting row.
- `c`: Starting column.
- `rs`: Number of rows to fill.
- `cs`: Number of columns to fill.
- `ti`: Tile ID to fill with.

### InitWithRowsColumns(int r, int c) {#m-cuttheropedx-framework-visual-tilemap-initwithrowscolumns-system-int32-system-int32}

```csharp
public TileMap InitWithRowsColumns(int r, int c)
```

Initializes the tile map with the specified grid dimensions.

Parameters:

- `r`: Number of rows.
- `c`: Number of columns.

Returns: The initialized tile map instance.

### SetParallaxRatio(float r) {#m-cuttheropedx-framework-visual-tilemap-setparallaxratio-system-single}

```csharp
public void SetParallaxRatio(float r)
```

Sets the parallax scroll ratio (1 = no parallax).

Parameters:

- `r`: Parallax ratio.

### SetRepeatHorizontally(TileMap.Repeat r) {#m-cuttheropedx-framework-visual-tilemap-setrepeathorizontally-cuttheropedx-framework-visual-tilemap-repeat}

```csharp
public void SetRepeatHorizontally(TileMap.Repeat r)
```

Sets the horizontal repeat mode.

Parameters:

- `r`: Repeat mode.

### SetRepeatVertically(TileMap.Repeat r) {#m-cuttheropedx-framework-visual-tilemap-setrepeatvertically-cuttheropedx-framework-visual-tilemap-repeat}

```csharp
public void SetRepeatVertically(TileMap.Repeat r)
```

Sets the vertical repeat mode.

Parameters:

- `r`: Repeat mode.

### UpdateVars() {#m-cuttheropedx-framework-visual-tilemap-updatevars}

```csharp
public void UpdateVars()
```

Recalculates visible tile counts and total map dimensions.

### UpdateWithCameraPos(Vector pos) {#m-cuttheropedx-framework-visual-tilemap-updatewithcamerapos-cuttheropedx-framework-core-vector}

```csharp
public void UpdateWithCameraPos(Vector pos)
```

Updates visible tiles and populates drawers based on the camera position.

Parameters:

- `pos`: Camera position in world coordinates.


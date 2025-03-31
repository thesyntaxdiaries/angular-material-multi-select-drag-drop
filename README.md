# Angular Material Drag and Drop

This project demonstrates Angular Material's Drag and Drop functionality, allowing users to move items between two lists. The functionality includes:

- Drag and drop items between lists
- Multi-select items and drag them together
- Move selected items using buttons
- Visual highlighting of selected items

## Features

1. **Drag and Drop Functionality**
   - Uses Angular Material's DragDropModule
   - Supports single-item drag and drop
   - Supports multi-select drag and drop

2. **Multi-Select Feature**
   - Click to select/deselect items
   - Visual indication of selected items
   - Move multiple selected items at once

3. **Button-Based Transfer**
   - "Move to Right" button to transfer selected items from left to right
   - "Move to Left" button to transfer selected items from right to left

## Technical Implementation

- Angular (latest version)
- Angular Material components
- CDK DragDropModule
- Responsive design for various screen sizes

## Running the Application

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   ng serve
   ```
4. Open your browser to `http://localhost:4200/`

## How to Use

1. Click on an item to select it (click again to deselect)
2. Select multiple items by clicking on them
3. Drag selected items to the other list
4. Alternatively, use the "Move to Right" or "Move to Left" buttons to transfer selected items

## Development Notes

The application maintains two separate lists and tracks selections in each list. When items are moved (either by drag or button), they are transferred between lists and the selection state is cleared.

The code includes special handling for multi-select drag operations to ensure all selected items are moved while maintaining their relative order.

## Future Enhancements

- Support for keyboard navigation
- Sorting functionality within lists
- Filter and search capabilities
- Customizable item templates

Read full article - [Multi-Select Drag and Drop in Angular - A Complete Implementation Guide](https://thesyntaxdiaries.com/multi-select-drag-and-drop-in-angular-a-complete-implementation-guide/)



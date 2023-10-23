# **Nesine React.JS Challenge: Bet System**

## **Introduction**

This project showcases a frontend implementation of a betting application. Emphasis was placed on performance optimization, state management, modular and atomic design, along with the robustness of TypeScript for type-safety and enhanced developer experience and best practices in React development.

## **Key Features & Decisions**

### **Performance Enhancement with `react-window`**

To enhance the app's performance, I integrated the `react-window` library. This library optimizes rendering for large lists and tabular data by only rendering items that fit the screen, drastically reducing the number of DOM nodes created and speeding up the rendering process.

**Performance Metrics (Lighthouse Scores)**

- **Mobile**:

  - Before `react-window`:
    - Performance: 46
    - Total Blocking Time: 18,270 ms
    - Speed Index: 5.3 s
  - After `react-window`:
    - Performance: 72
    - Total Blocking Time: 330 ms
    - Speed Index: 1.5 s

- **Desktop**:
  - Before `react-window`:
    - Performance: 65
    - Total Blocking Time: 4,250 ms
    - Speed Index: 1.6s
  - After `react-window`:
    - Performance: 94
    - Total Blocking Time: 0 ms
    - Speed Index: 0.5 s

### **State Management: Context API**

The state of selected bets and potential returns is managed using the Context API. The `useBet` hook provides access to shared state and dispatch functions across components.

- **Bet Context:** Central hub for shared state and actions.
- **Reducer:** Manages bet state modifications.
- **Bet Provider:** Offers state and dispatch functions to component tree.

### **Data Fetching with Axios**

I chose Axios for data fetching due to its automatic error handling, built-in timeout feature, and broader browser compatibility over Fetch.

### **Atomic Design Approach**

I structured the UI components following the Atomic Design methodology, which breaks down UI components into atoms, molecules, organisms, templates, and pages. This hierarchical structure promotes consistency, reusability, and maintainability.

### **Modular Design: Feature-based Structure**

The project uses a feature-based design, ensuring clarity, scalability, and separation of concerns. All related functionalities for a domain, like bets, are grouped into distinct modules.

### **TableCell Component: Avoiding Anonymous Functions**

For performance optimization in the TableCell component, I used named functions over anonymous ones, enhancing readability and reducing unnecessary re-renders.

### **Higher Order Components (HOCs) for TableCell Logic & Styling**

- **Centralize Logic for Clickability:** I encapsulated the logic to determine whether a cell is clickable (based on bet data, its type, and index) within the HOC.
- **Consistent Styling:** Using HOCs, each cell, irrespective of its content or type, receives consistent styles, thus promoting a harmonious user experience across the table.
- **Flexibility:** The HOC structure offers the flexibility to easily wrap any cell component, allowing for adaptability and ease of future modifications.

In essence, by using an HOC, I centralized the decision-making and styling logic for the table cells, making the codebase more maintainable and scalable.

## **Conclusion**

The 'nesine-reactjs-challenge' is a testament to effective React and TypeScript development, focusing on state management, performance, and a structured design approach. The architecture is poised for scalability, maintainability, and an optimal user experience.

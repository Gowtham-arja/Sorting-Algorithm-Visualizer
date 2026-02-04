# 🚀 Features

- 📊 Visualizes sorting algorithms using dynamic bars
- 🎚️ Adjustable speed control (Slow / Medium / Fast)
- ⏳ Async/await based animation with controlled delays
- 🔄 State-based interrupt mechanism
  - Sorting stops immediately if:
    - New data is randomized
    - Array size is changed mid-execution
- 🎨 Color-coded bars to represent:
  - Comparing elements
  - Swapping elements
  - Sorted elements

# 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- CSS
- Vercel (for deployment)

# ⚙️ How It Works

- The array is represented as vertical bars.
- Sorting algorithms operate on adjacent or selected elements and visualize each operation step-by-step.
- Implemented sorting algorithms:
  - Bubble Sort — compares adjacent elements and swaps them if they are out of order.
  - Selection Sort — repeatedly selects the minimum element from the unsorted portion and places it in its correct position.
  - Insertion Sort — builds the sorted array incrementally by inserting elements into their correct position.
- `async/await` and controlled delays are used to animate each step.
- A state-based interrupt mechanism ensures:
  - No race conditions
  - No overlapping swaps
  - Sorting halts cleanly when user input changes
- The visualization updates in real time based on the selected algorithm and speed settings.

# 📸 Preview
<img width="1919" height="1026" alt="image" src="https://github.com/user-attachments/assets/a2a6fc62-3ebf-4757-8767-f337f3d87362" />

# 🔗 Live Demo
https://sorting-algorithm-visualizer-six-sigma.vercel.app/

# 🌱 Future Improvements
- Add Merge Sort and Quick Sort
- Display time and space complexity for each algorithm
- Improve mobile responsiveness

# Circle Intersection Detector

This project demonstrates how to dynamically append circles to an HTML dom on mouse click and detect if any two circles intersect.
The intersection detection logic is implemented using JavaScript and the results are logged to the browser's developer console.

## Features

* Dynamically add circles to a canvas on mouse click.
* Detect if any two circles on the canvas intersect.
* Log intersection results to the developer console.


## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shrivastavpush/circle-intersection.git
    ```

2.  **Open `index.html` in your web browser.**

3.  **Click on the canvas to add circles.**

4.  **Open the browser's developer console (usually by pressing F12) to see intersection detection results.**

## Technical Details

* **HTML:** Used to create the dom element.
* **CSS:** Used to style the canvas.
* **JavaScript:** Used to handle mouse clicks, draw circles, and implement the intersection detection logic.

## Intersection Detection Logic

The JavaScript code calculates the distance between the centers of any two circles.
If the distance is less than or equal to the sum of their radii, the circles are considered to be intersecting.

```bash
Math.hypot(x1 - x2, y1 - y2) <= r1 + r2;
```

## Developer Notes

* The radii of the circles are currently set to a random value between 100-150.
* The console.log shows the index of the intersecting circles.
* You can expand this by adding visual feedback for the intersection.

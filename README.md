# Components Modal React

A simple, customizable modal component for React

## Getting Started

Install this package:

```shell
npm i @nmiton/modal
```

Import the Modal component:

```js
import Modal from "@nmiton/modal";
```

## Usage

```js
import React, { useState } from 'react';
import Modal from "@nmiton/modal";


const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
				<Modal id="My modal" closeModal={() => setShowModal(false)} title={<h2>Modal Title</h2>}>
          <h3>This is a Modal</h3>
          <p>Here is some modal content!</p>
				</Modal>
			)}
    </div>
  );
};

export default App;

```

# Props

The Modal component accepts the following props:

| Prop         | Type              | Required | Description                                    |
| ------------ | ----------------- | -------- | ---------------------------------------------- |
| `closeModal` | `() => void`      | Yes      | Callback function to handle closing the modal  |
| `children`   | `React.ReactNode` | No       | The content to be displayed inside the modal   |
| `id`         | `String`          | No       | Modal Identifier                               |
| `className`  | `String`          | No       | Modal className                                |
| `title`      | `React.ReactNode` | No       | The modal title content                        |

# CSS Styling

If you want to customize the styles, you can either modify Modal.css or override the styles in your own stylesheet by targeting the following class names:

- **`.modal-overlay`** – The overlay behind the modal.
- **`.modal-header`** – The header modal container.
- **`.modal-content`** – The main modal container.
- **`.btn-close`** – The close button inside the modal.

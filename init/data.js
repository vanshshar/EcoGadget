const data = [
    {
        "id": 1,
        "name": "Wireless Bluetooth Headphones",
        "price": 59.99,
        "description": "High-quality wireless headphones with noise cancellation.",
        "category": "Audio",
        "imageURL": "https://images.samsung.com/is/image/samsung/p6pim/levant/level-u2-eo-bg920bsbgae/gallery/levant-level-u2-eo-bg920bsbgae-372140544?$720_576_PNG$"
    },
    {
        "id": 2,
        "name": "4K Action Camera",
        "price": 199.99,
        "description": "Waterproof action camera with 4K recording and image stabilization.",
        "category": "Cameras",
        "imageURL": "https://m.media-amazon.com/images/I/61Lr-Jsyc+L._AC_SL1500_.jpg"
    },
    {
        "id": 3,
        "name": "Smartphone with 128GB Storage",
        "price": 699.99,
        "description": "High-performance smartphone with 6.5-inch display and 128GB internal storage.",
        "category": "Mobile Phones",
        "imageURL": "https://m.media-amazon.com/images/I/61c5rlPfp4L._SL1500_.jpg"
    },
    {
        "id": 4,
        "name": "Wireless Charger",
        "price": 24.99,
        "description": "Fast wireless charging pad for Qi-enabled devices.",
        "category": "Accessories",
        "imageURL": "https://m.media-amazon.com/images/I/71sWcvhZ7cL._SL1500_.jpg"
    },
    {
        "id": 5,
        "name": "Gaming Laptop",
        "price": 1499.99,
        "description": "High-end gaming laptop with Intel i7 processor and RTX 3060 GPU.",
        "category": "Computers",
        "imageURL": "https://m.media-amazon.com/images/I/71vvXGmdKWL._SL1500_.jpg"
    },
    {
        "id": 6,
        "name": "Smartwatch",
        "price": 249.99,
        "description": "Fitness-focused smartwatch with heart rate monitoring and GPS.",
        "category": "Wearables",
        "imageURL": "https://m.media-amazon.com/images/I/71wHBhWLxiL._SL1500_.jpg"
    },
    {
        "id": 7,
        "name": "Noise Cancelling Earbuds",
        "price": 129.99,
        "description": "True wireless earbuds with active noise cancellation.",
        "category": "Audio",
        "imageURL": "https://m.media-amazon.com/images/I/61sZmD5t7jL._SL1500_.jpg"
    },
    {
        "id": 8,
        "name": "1080p HD Webcam",
        "price": 49.99,
        "description": "HD webcam with built-in microphone for video calls.",
        "category": "Accessories",
        "imageURL": "https://m.media-amazon.com/images/I/61Akh9mZrxL._SL1500_.jpg"
    },
    {
        "id": 9,
        "name": "Portable Bluetooth Speaker",
        "price": 79.99,
        "description": "Compact and powerful Bluetooth speaker with 12-hour battery life.",
        "category": "Audio",
        "imageURL": "https://m.media-amazon.com/images/I/81S+7k2NWgL._SL1500_.jpg"
    },
    {
        "id": 10,
        "name": "Drone with Camera",
        "price": 499.99,
        "description": "Drone with 4K camera and 30-minute flight time.",
        "category": "Drones",
        "imageURL": "https://m.media-amazon.com/images/I/71Z4Su92KSL._SL1500_.jpg"
    },
    {
        "id": 11,
        "name": "Smart Light Bulbs (4-Pack)",
        "price": 39.99,
        "description": "Smart LED light bulbs that work with Alexa and Google Home.",
        "category": "Smart Home",
        "imageURL": "https://m.media-amazon.com/images/I/51v9FtfzXmL._AC_SL1500_.jpg"
    },
    {
        "id": 12,
        "name": "Tablet with Stylus",
        "price": 299.99,
        "description": "10-inch tablet with stylus for note-taking and drawing.",
        "category": "Tablets",
        "imageURL": "https://m.media-amazon.com/images/I/61Lf8vW97BL._SL1500_.jpg"
    },
    {
        "id": 13,
        "name": "USB-C Hub",
        "price": 29.99,
        "description": "Multi-port USB-C hub with HDMI, USB, and SD card slots.",
        "category": "Accessories",
        "imageURL": "https://m.media-amazon.com/images/I/61EDvoWioAL._SL1500_.jpg"
    },
    {
        "id": 14,
        "name": "Fitness Tracker",
        "price": 99.99,
        "description": "Waterproof fitness tracker with heart rate monitor and step counter.",
        "category": "Wearables",
        "imageURL": "https://m.media-amazon.com/images/I/61zvq1A8+7L._SL1500_.jpg"
    },
    {
        "id": 15,
        "name": "Smart Thermostat",
        "price": 149.99,
        "description": "Smart thermostat compatible with Alexa and Google Assistant.",
        "category": "Smart Home",
        "imageURL": "https://m.media-amazon.com/images/I/51Byg+RVshL._AC_SL1500_.jpg"
    },
    {
        "id": 16,
        "name": "External Hard Drive (1TB)",
        "price": 59.99,
        "description": "Portable 1TB external hard drive for data backup and storage.",
        "category": "Storage",
        "imageURL": "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"
    },
    {
        "id": 17,
        "name": "Wireless Gaming Mouse",
        "price": 49.99,
        "description": "Ergonomic wireless gaming mouse with customizable buttons.",
        "category": "Gaming",
        "imageURL": "https://m.media-amazon.com/images/I/61ZPO5ak+DL._SL1500_.jpg"
    },
    {
        "id": 18,
        "name": "Bluetooth Keyboard",
        "price": 39.99,
        "description": "Slim Bluetooth keyboard compatible with multiple devices.",
        "category": "Accessories",
        "imageURL": "https://m.media-amazon.com/images/I/61scDR6efpL._SL1500_.jpg"
    },
    {
        "id": 19,
        "name": "Noise Cancelling Headphones",
        "price": 199.99,
        "description": "Over-ear headphones with advanced noise cancellation technology.",
        "category": "Audio",
        "imageURL": "https://m.media-amazon.com/images/I/71-Ux2KJoBL._SL1500_.jpg"
    },
    {
        "id": 20,
        "name": "Smart Plug",
        "price": 24.99,
        "description": "Smart plug that allows remote control of home devices via an app.",
        "category": "Smart Home",
        "imageURL": "https://m.media-amazon.com/images/I/51yqFENiZ+L._AC_SL1500_.jpg"
    }
]

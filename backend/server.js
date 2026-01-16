const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const items = [
  // ELECTRONICS
  {
    id: 1,
    name: "Wireless Headphones",
    price: 299.99,
    description:
      "Industry-leading noise cancellation and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 159.0,
    description: "Tactile switches and customizable RGB backlighting.",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 249.5,
    description: "Track your fitness, heart rate, and notifications on the go.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    description: "Waterproof speaker with deep bass and 360-degree sound.",
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=800",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Mirrorless Camera",
    price: 899.0,
    description: "Capture stunning 4K videos and high-resolution photos.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    category: "Electronics",
  },

  // HOME & DECOR
  {
    id: 6,
    name: "Minimalist Desk Lamp",
    price: 45.0,
    description: "Adjustable LED lamp with three color temperature modes.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
    category: "Home",
  },
  {
    id: 7,
    name: "Ceramic Coffee Mug",
    price: 18.0,
    description: "Hand-thrown ceramic mug with a matte speckled finish.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800",
    category: "Home",
  },
  {
    id: 8,
    name: "Velvet Throw Pillow",
    price: 35.0,
    description: "Soft velvet texture to add comfort and style to your sofa.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800",
    category: "Home",
  },
  {
    id: 9,
    name: "Aromatic Diffuser",
    price: 55.0,
    description: "Ultrasonic technology to fill your room with essential oils.",
    image: "https://images.unsplash.com/photo-1602928294221-4418b49da496?w=800",
    category: "Home",
  },
  {
    id: 10,
    name: "Modern Wall Clock",
    price: 60.0,
    description: "Silent movement with a clean, wood-framed aesthetic.",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800",
    category: "Home",
  },

  // LIFESTYLE & ACCESSORIES
  {
    id: 11,
    name: "Leather Backpack",
    price: 120.0,
    description: "Durable top-grain leather with a padded laptop sleeve.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
    category: "Lifestyle",
  },
  {
    id: 12,
    name: "Polarized Sunglasses",
    price: 110.0,
    description: "UV protection with a classic lightweight frame.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
    category: "Lifestyle",
  },
  {
    id: 13,
    name: "Stainless Steel Bottle",
    price: 28.0,
    description: "Vacuum insulated to keep drinks cold for 24 hours.",
    image: "https://images.unsplash.com/photo-1602143307185-8319dd9bb9a5?w=800",
    category: "Lifestyle",
  },
  {
    id: 14,
    name: "Yoga Mat",
    price: 40.0,
    description: "Non-slip eco-friendly rubber with extra cushioning.",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800",
    category: "Lifestyle",
  },
  {
    id: 15,
    name: "Travel Journal",
    price: 22.0,
    description: "Refillable pages with a vintage string closure.",
    image: "https://images.unsplash.com/photo-1544816153-199d821b146d?w=800",
    category: "Lifestyle",
  },
];

// GET / all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// GET / items by id
app.get("/api/items/:id", (req, res) => {
  const id = req.params.id;
  const item = items.find((item) => item.id == id);

  if (!item) {
    return res.status(404).json({ message: "Items not found" });
  }
  res.json(item);
});

// POST / new item
app.post("/api/items", (req, res) => {
  const { name, price, description, image, category } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name and Price are required" });
  }

  const newItem = {
    id: items.length + 1,
    name,
    price: parseFloat(price),
    description,
    image: image || "https://via.placeholder.com/800",
    category,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});

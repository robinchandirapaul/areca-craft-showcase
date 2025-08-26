import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import productsImage from "@/assets/products-collection.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Disposable Plates",
      description: "Various sizes of round and square plates perfect for any occasion",
      sizes: ["6 inch", "8 inch", "10 inch", "12 inch"],
      price: "From $12.99",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"]
    },
    {
      title: "Bowls & Containers",
      description: "Deep bowls and containers for soups, salads, and storage",
      sizes: ["Small (150ml)", "Medium (300ml)", "Large (500ml)", "Extra Large (750ml)"],
      price: "From $15.99",
      features: ["Deep design", "Stackable", "Freezer safe"]
    },
    {
      title: "Cups & Glasses",
      description: "Eco-friendly cups for hot and cold beverages",
      sizes: ["4 oz", "6 oz", "8 oz", "12 oz"],
      price: "From $9.99",
      features: ["Heat resistant", "Comfortable grip", "Biodegradable"]
    },
    {
      title: "Serving Trays",
      description: "Large trays perfect for parties and catering",
      sizes: ["Medium (12x8 inch)", "Large (16x12 inch)", "XL (20x14 inch)"],
      price: "From $24.99",
      features: ["Heavy duty", "Elegant design", "Party ready"]
    },
    {
      title: "Cutlery Set",
      description: "Complete cutlery set made from bamboo and areca leaves",
      sizes: ["Individual sets", "Family packs", "Bulk orders"],
      price: "From $8.99",
      features: ["Smooth finish", "Splinter-free", "Reusable"]
    },
    {
      title: "Gift Sets",
      description: "Beautifully packaged sets perfect for gifting",
      sizes: ["Starter pack", "Family set", "Premium collection"],
      price: "From $29.99",
      features: ["Eco packaging", "Gift ready", "Variety included"]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Product Range
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our complete collection of sustainable areca leaf products. 
            From everyday dining to special occasions, we have the perfect eco-friendly solution.
          </p>
        </div>
        
        {/* Hero Product Image */}
        <div className="relative rounded-lg overflow-hidden shadow-xl mb-12">
          <img
            src={productsImage}
            alt="Areca leaf products collection"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nature-primary/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-2">Complete Collection</h3>
            <p className="text-primary-foreground/90">All products available for bulk orders</p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center justify-between">
                  {product.title}
                  <Badge variant="secondary" className="bg-sage-green text-foreground">
                    Eco-Friendly
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {product.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Available Sizes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, idx) => (
                      <Badge key={idx} variant="outline">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-leaf-green rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-lg font-bold text-nature-primary">
                    {product.price}
                  </span>
                  <Button variant="nature" size="sm">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bulk Orders Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <Card className="bg-gradient-to-r from-secondary to-sage-green/20 border-sage-green">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Bulk Orders & Custom Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Planning an event, running a restaurant, or need large quantities? 
              We offer competitive pricing for bulk orders and can customize products to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Request Quote
              </Button>
              <Button variant="outline" size="lg">
                Download Catalog
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quality Assurance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Quality You Can Trust
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-leaf-green">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Food Safe</h3>
              <p className="text-muted-foreground">
                All products are food-grade certified and safe for direct contact with food items.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-leaf-green">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Tested Quality</h3>
              <p className="text-muted-foreground">
                Rigorous quality control ensures consistent durability and performance across all products.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-leaf-green">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Eco Certified</h3>
              <p className="text-muted-foreground">
                Certified biodegradable and compostable by international environmental standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
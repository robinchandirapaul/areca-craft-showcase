import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import productsHero from "@/assets/products-hero.jpg";
import productsImage from "@/assets/products-collection.jpg";
import plateSizes from "@/assets/plate-sizes.jpg";
import bowlSizes from "@/assets/bowl-sizes.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Disposable Plates",
      description: "Various sizes of round and square plates perfect for any occasion",
      sizes: ["6 inch", "8 inch", "10 inch", "12 inch"],
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: plateSizes
    },
    {
      title: "Bowls & Containers",
      description: "Deep bowls and containers for soups, salads, and storage",
      sizes: ["Small (150ml)", "Medium (300ml)", "Large (500ml)", "Extra Large (750ml)"],
      features: ["Deep design", "Stackable", "Freezer safe"],
      image: bowlSizes
    },
    {
      title: "Cups & Glasses",
      description: "Eco-friendly cups for hot and cold beverages",
      sizes: ["4 oz", "6 oz", "8 oz", "12 oz"],
      features: ["Heat resistant", "Comfortable grip", "Biodegradable"]
    },
    {
      title: "Serving Trays",
      description: "Large trays perfect for parties and catering",
      sizes: ["Medium (12x8 inch)", "Large (16x12 inch)", "XL (20x14 inch)"],
      features: ["Heavy duty", "Elegant design", "Party ready"]
    },
    {
      title: "Cutlery Set",
      description: "Complete cutlery set made from bamboo and areca leaves",
      sizes: ["Individual sets", "Family packs", "Bulk quantities"],
      features: ["Smooth finish", "Splinter-free", "Reusable"]
    },
    {
      title: "Gift Sets",
      description: "Beautifully packaged sets perfect for gifting",
      sizes: ["Starter pack", "Family set", "Premium collection"],
      features: ["Eco packaging", "Gift ready", "Variety included"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${productsHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-nature-primary/80 to-leaf-green/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Product Range
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Discover our complete collection of sustainable areca leaf products. 
              From everyday dining to special occasions, we have the perfect eco-friendly solution.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        {/* Product Collection Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative rounded-lg overflow-hidden shadow-xl mb-12">
            <img
              src={productsImage}
              alt="Areca leaf products collection"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nature-primary/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-2">Complete Collection</h3>
              <p className="text-primary-foreground/90">Available in multiple sizes and styles</p>
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
                  {product.image && (
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={`${product.title} sizes`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
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
                  
                  <div className="pt-4">
                    <Button asChild variant="nature" size="sm" className="w-full">
                      <Link to="/contact">Get Information</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Information Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <Card className="bg-gradient-to-r from-secondary to-sage-green/20 border-sage-green">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Product Information & Custom Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Need detailed specifications, bulk quantities, or custom solutions? 
                We provide comprehensive product information and can customize products to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Request Information</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Download Specifications
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
    </div>
  );
};

export default Products;
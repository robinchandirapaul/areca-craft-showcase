import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsHero from "@/assets/products-hero.jpg";
import productsImage from "@/assets/dine-on-mine-products.png";
import sixSquare from "@/assets/6-Square.png";
import eightSquare from "@/assets/8-Square.png";
import tenSquare from "@/assets/10-Square.png";
import sixShallowRound from "@/assets/6-Shallow-Round.png";
import eightShallowRound from "@/assets/8-Shallow-Round.png";
import tenShallowRound from "@/assets/10-Shallow-Round.png";
import sixHeartBowl from "@/assets/6-Heart-Bowl.png";
import fiveDeepBowl from "@/assets/5-Deep-Square-(Soup-Bowl).png";
import sevenDeepRountBowl from "@/assets/7-Deep-Round-(Salad-Bowl).png";
import sixfiveRectangleBowl from "@/assets/12x7-Rectangle-Bowl.png";
import ninesixRectangleBowl from "@/assets/12x7-Rectangle-Bowl.png";
import twelvesevenRectangleBowl from "@/assets/12x7-Rectangle-Bowl.png";
import fourSquareBowl from "@/assets/4-Square-Bowl.png";
import fourShallowRoundBowl from "@/assets/70ml-sauce-bowl.png";
import fiveShallowRoundBowl from "@/assets/5-Round-Bowl.png";
import twentyfiveml from "@/assets/25ml-sauce-bowl.png";
import sixteenInchSiali from "@/assets/16inch-siali.png";
import fourteenInchSiali from "@/assets/14inch-siali.png";
import thirteenInchSiali from "@/assets/13inch-siali.png";
import twelveInchSiali from "@/assets/12inch-siali.png";
import tenInchSiali from "@/assets/10inch-siali.png";
import eightInchSiali from "@/assets/8inch-siali.png";
// import bowlSizes from "@/assets/bowl-sizes.png";

type ProductCategory = {
  title: string;
  description: string;
  sizes: string[];
  noOfBoxes: string;
  noOfPiecesPerBox?: string;
  cubicMeterPerBox?: string;
  totalCubicMeter?: string;
  quantity: string;
  features: string[];
  image?: string;
  boxSize?: string | string[];
};

const Products = () => {
  const productCategories: ProductCategory[] = [
    {
      title: "6\" Square",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "6\" Square",
      ],
      noOfBoxes: "50",
      noOfPiecesPerBox: "500 pcs",
      cubicMeterPerBox: "0.058",
      totalCubicMeter: "2.89",
      quantity: "25000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: sixSquare,
      boxSize: "40*38*38"
    },
    {
      title: "8\" Square",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "8\" Square",
      ],
      noOfBoxes: "50",
      noOfPiecesPerBox: "300 pcs",
      cubicMeterPerBox: "0.064",
      totalCubicMeter: "3.18",
      quantity: "15000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: eightSquare,
      boxSize: "42*42*38"
    },
    {
      title: "10\" Square",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "10\" Square",
      ],
      noOfBoxes: "50",
      noOfPiecesPerBox: "300 pcs",
      cubicMeterPerBox: "0.089",
      totalCubicMeter: "4.46",
      quantity: "15000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: tenSquare,
      boxSize: "52*52*36"
    },
    {
      title: "6\" Shallow round",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "6\" Shallow round",
      ],
      noOfBoxes: "30",
      noOfPiecesPerBox: "500 pcs",
      cubicMeterPerBox: "0.058",
      totalCubicMeter: "1.73",
      quantity: "15000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: sixShallowRound,
      boxSize: "40*38*38"
    },
    {
      title: "8\" Shallow round",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "8\" Shallow round",
      ],
      noOfBoxes: "30",
      noOfPiecesPerBox: "300 pcs",
      cubicMeterPerBox: "0.064",
      totalCubicMeter: "1.91",
      quantity: "9000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: eightShallowRound,
      boxSize: "42*42*36"
    },
    {
      title: "10\" Shallow round",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "10\" Shallow round",
      ],
      noOfBoxes: "30",
      noOfPiecesPerBox: "300 pcs",
      cubicMeterPerBox: "0.089",
      totalCubicMeter: "2.68",
      quantity: "9000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: tenShallowRound,
      boxSize: "52*52*35"
    },
    {
      title: "6\" Heart bowl",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "6\" Heart bowl",
      ],
      noOfBoxes: "10",
      noOfPiecesPerBox: "500 pcs",
      cubicMeterPerBox: "0.058",
      totalCubicMeter: "0.58",
      quantity: "5000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: sixHeartBowl,
      boxSize: "40*38*38"
    },
    {
      title: "5.5\" Deep square (soup bowl)",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "5.5\" Deep square bowl",
      ],
      noOfBoxes: "10",
      noOfPiecesPerBox: "300 pcs",
      cubicMeterPerBox: "0.050",
      totalCubicMeter: "0.50",
      quantity: "3000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: fiveDeepBowl,
      boxSize: "43*38*30.5"
    },
    {
      title: "7\" Deep round (salad bowl)",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "7\" Deep round bowl",
      ],
      noOfBoxes: "10",
      noOfPiecesPerBox: "300 pcs",
      cubicMeterPerBox: "0.059",
      totalCubicMeter: "0.59",
      quantity: "3000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: sevenDeepRountBowl,
      boxSize: "57*54.5*19"
    },
    {
      title: "6\"*5\" Rectangle bowl",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "6\"*5\" Rectangle bowl",
      ],
      noOfBoxes: "10",
      noOfPiecesPerBox: "300 pcs",
      cubicMeterPerBox: "0.043",
      totalCubicMeter: "0.43",
      quantity: "3000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: sixfiveRectangleBowl,
      boxSize: "58.25*38.75*19"
    },
    {
      title: "9\"*6\" Rectangle bowl",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "9\"*6\" Rectangle bowl",
      ],
      noOfBoxes: "10",
      noOfPiecesPerBox: "300 pcs",
      cubicMeterPerBox: "0.049",
      totalCubicMeter: "0.49",
      quantity: "3000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: ninesixRectangleBowl,
      boxSize: "48*38*27"
    },
    {
      title: "12\"*7\" Rectangle bowl",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "12\"*7\" Rectangle bowl",
      ],
      noOfBoxes: "10",
      noOfPiecesPerBox: "200 pcs",
      cubicMeterPerBox: "0.048",
      totalCubicMeter: "0.48",
      quantity: "2000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: twelvesevenRectangleBowl,
      boxSize: "38*38*33"
    },
    {
      title: "4\" Square",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "4\" Square",
      ],
      noOfBoxes: "10",
      noOfPiecesPerBox: "1000 pcs",
      cubicMeterPerBox: "0.069",
      totalCubicMeter: "0.69",
      quantity: "10000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: fourSquareBowl,
      boxSize: "56.5*43*28.5"
    },
    {
      title: "4\" Shallow round bowl",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "4\" Shallow round bowl",
      ],
      noOfBoxes: "10",
      noOfPiecesPerBox: "1000 pcs",
      cubicMeterPerBox: "0.069",
      totalCubicMeter: "0.69",
      quantity: "10000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: fourShallowRoundBowl,
      boxSize: "56.5*43*28.5"
    },
    {
      title: "25ml Sauce Bow",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "25ml Sauce Bowl",
      ],
      noOfBoxes: "50",
      noOfPiecesPerBox: "1000 pcs",
      cubicMeterPerBox: "0.015",
      totalCubicMeter: "0.75",
      quantity: "50000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: fourShallowRoundBowl,
      boxSize: "32*26*17.5"
    },
    {
      title: "40ml Sauce Bow",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "40ml Sauce Bowl",
      ],
      noOfBoxes: "50",
      noOfPiecesPerBox: "1000 pcs",
      cubicMeterPerBox: "0.024",
      totalCubicMeter: "1.20",
      quantity: "50000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: fourShallowRoundBowl,
      boxSize: "34.4*28.5*24.5"
    },
    {
      title: "50ml Sauce Bow",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "50ml Sauce Bowl",
      ],
      noOfBoxes: "50",
      noOfPiecesPerBox: "1000 pcs",
      cubicMeterPerBox: "0.032",
      totalCubicMeter: "1.60",
      quantity: "50000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: fourShallowRoundBowl,
      boxSize: "41*35*22.5"
    },
    {
      title: "70ml Sauce Bowl",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "70ml Sauce Bowl"
      ],
      noOfBoxes: "50",
      noOfPiecesPerBox: "1000 pcs",
      cubicMeterPerBox: "0.033",
      totalCubicMeter: "1.65",
      quantity: "50000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: fourShallowRoundBowl,
      boxSize: "35*28.5*33.5"
    },
    {
      title: "5\" Shallow round bowl",
      description: "Various sizes of square, round, and rectangle plates perfect for any occasion",
      sizes: [
        "5\" Shallow round bowl",
      ],
      noOfBoxes: "10",
      noOfPiecesPerBox: "900 pcs",
      cubicMeterPerBox: "0.069",
      totalCubicMeter: "0.69",
      quantity: "9000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: twentyfiveml,
      boxSize: "56.5*43*28.5"
    }
  ];

  const arecaProductCategories = productCategories;
  const sialiProductCategories: ProductCategory[] = [
    {
      title: "16\" Round Plate",
      description: "Ideal for full-course meals and thali-style serving. Designed for maximum capacity and stability in buffet setups.",
      sizes: ["16\" Round Plate"],
      noOfBoxes: "20",
      quantity: "4000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: sixteenInchSiali,
    },
    {
      title: "14\" Round Plate",
      description: "Perfect for large meal portions and heavy servings. Suitable for events, catering, and premium dining use.",
      sizes: ["14\" Round Plate"],
      noOfBoxes: "20",
      quantity: "5000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: fourteenInchSiali,
    },
    {
      title: "13\" Round Plate",
      description: "Balanced size for complete meals with multiple items. A versatile choice for functions and gatherings.",
      sizes: ["13\" Round Plate"],
      noOfBoxes: "25",
      quantity: "7500",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: thirteenInchSiali,
    },
    {
      title: "12\" Round Plate",
      description: "Best suited for main course servings like biryani, rice meals, and combo dishes. Strong and reliable for buffet use.",
      sizes: ["12\" Round Plate"],
      noOfBoxes: "30",
      quantity: "9000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: twelveInchSiali,
    },
    {
      title: "10\" Round Plate",
      description: "Ideal for standard meal portions and everyday serving. Widely used for breakfasts, and quick service setups.",
      sizes: ["10\" Round Plate"],
      noOfBoxes: "30",
      quantity: "12000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: tenInchSiali,
    },
    {
      title: "8\" Round Plate",
      description: "Perfect for snacks, starters, desserts, and light servings. Compact, sturdy, and convenient to handle.",
      sizes: ["8\" Round Plate"],
      noOfBoxes: "40",
      quantity: "20000",
      features: ["Leak-proof", "Microwave safe", "Oil resistant"],
      image: eightInchSiali,
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") === "siali" ? "siali" : "areca";
  const [activeTab, setActiveTab] = useState<"areca" | "siali">(initialTab);

  useEffect(() => {
    const queryTab = searchParams.get("tab");
    if (queryTab === "areca" || queryTab === "siali") {
      setActiveTab(queryTab);
    }
  }, [searchParams]);

  const onTabChange = (value: string) => {
    const nextTab = value === "siali" ? "siali" : "areca";
    setActiveTab(nextTab);
    setSearchParams({ tab: nextTab });
  };

  const renderProductGrid = (products: typeof productCategories) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <Card key={`${product.title}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
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

            <p className="text-muted-foreground">{product.description}</p>

            {/* <div className="flex flex-row gap-6">
              <div className="w-1/2">
                <h4 className="font-semibold text-foreground mb-2">Available Sizes:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, idx) => (
                    <Badge key={idx} variant="outline">
                      {size}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="w-1/2">
                <h4 className="font-semibold text-foreground mb-2">No of boxes:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{product.noOfBoxes}</Badge>
                </div>
              </div>
            </div> */}

            {(product.noOfPiecesPerBox || product.cubicMeterPerBox) && (
              <div className="flex flex-row gap-6">
                {product.noOfPiecesPerBox && (
                  <div className="w-1/2">
                    <h4 className="font-semibold text-foreground mb-2">No of pieces per box:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{product.noOfPiecesPerBox}</Badge>
                    </div>
                  </div>
                )}

                {product.cubicMeterPerBox && (
                  <div className={product.noOfPiecesPerBox ? "w-1/2" : "w-full"}>
                    <h4 className="font-semibold text-foreground mb-2">Cubic meter per box:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{product.cubicMeterPerBox}</Badge>
                    </div>
                  </div>
                )}
              </div>
            )}

            {product.boxSize && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">Box Sizes:</h4>
                <div className="flex flex-wrap gap-2">
                  {(() => {
                    const boxSizes = Array.isArray(product.boxSize)
                      ? product.boxSize
                      : [product.boxSize];
                    return boxSizes.map((size, idx) => (
                      <Badge key={idx} variant="outline">
                        {size}
                      </Badge>
                    ));
                  })()}
                </div>
              </div>
            )}

            <div className="pt-4">
              <Button asChild variant="nature" size="sm" className="w-full">
                <Link to="/contact">Get Information</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

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
          <Tabs value={activeTab} onValueChange={onTabChange} className="space-y-4">
            <TabsList>
              <TabsTrigger value="areca">Areca Plates</TabsTrigger>
              <TabsTrigger value="siali">Siali Plates</TabsTrigger>
            </TabsList>
            <TabsContent value="areca">
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-2">
                  Areca leaf plates are made from the leaves of the Areca palm tree, offering a natural and biodegradable alternative to plastic disposables.
                  Known for their strength, flexibility, and eco-friendly properties, these plates are perfect for serving food while being completely compostable.
                </p>
              </div>
              {renderProductGrid(arecaProductCategories)}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">Key Features</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">✓</span>
                      <span><strong>100% Natural & Chemical-Free:</strong> Pure areca leaf material, safe for food contact</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">✓</span>
                      <span><strong>Strength & Flexibility:</strong> Durable yet flexible for everyday dining and serving</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">✓</span>
                      <span><strong>Heat & Leak Resistant:</strong> Ideal for hot and liquid foods without compromise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">✓</span>
                      <span><strong>Fully Biodegradable:</strong> Completely compostable in 30-45 days naturally</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">Perfect For</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">★</span>
                      <span><strong>Everyday Dining:</strong> Ideal for daily meals and gatherings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">★</span>
                      <span><strong>Natural Presentation:</strong> Beautiful, eco-conscious appearance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">★</span>
                      <span><strong>Lightweight & Durable:</strong> Easy to handle yet sturdy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">★</span>
                      <span><strong>Eco-Friendly Choice:</strong> Sustainable alternative to plastic</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="siali">
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-2">
                  Siali leaf plates are crafted from carefully selected siali leaves, finely stitched and reinforced with high-quality corrugated 3-ply sheets. Using precision molding, we ensure a uniform structure, superior finish, and dependable sturdiness—perfectly suited for professional catering and buffet applications.
                </p>
              </div>
              {renderProductGrid(sialiProductCategories)}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">Premium Features</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">✓</span>
                      <span><strong>100% Natural & Chemical-Free:</strong> Pure siali leaf material with superior safety standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">✓</span>
                      <span><strong>High Strength & Stability:</strong> Reinforced backing for excellent load-bearing capacity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">✓</span>
                      <span><strong>Heat & Leak Resistant:</strong> Perfect for serving hot and semi-liquid foods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">✓</span>
                      <span><strong>Fully Biodegradable:</strong> Naturally decomposes supporting sustainable waste management</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">Designed for Performance</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">★</span>
                      <span><strong>Buffet-Ready Durability:</strong> Built to handle professional catering demands</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">★</span>
                      <span><strong>Refined Natural Aesthetic:</strong> Premium presentation for events and dining</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">★</span>
                      <span><strong>Consistent Quality Finish:</strong> Precision-pressed for professional appearance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-leaf-green mr-3">★</span>
                      <span><strong>Custom Solutions:</strong> Available in custom shapes and sizes per requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
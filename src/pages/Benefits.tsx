import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Leaf,
  Droplets,
  Thermometer,
  Shield,
  Clock,
  Recycle,
  Heart,
  Globe
} from "lucide-react";
import benefitsHero from "@/assets/benefits-hero.jpg";

const Benefits = () => {
  const environmentalBenefits = [
    {
      icon: <Leaf className="h-8 w-8 text-leaf-green" />,
      title: "100% Biodegradable",
      description: "Completely decomposes within 30-45 days in composting conditions, leaving no harmful residues.",
      impact: "Zero waste footprint"
    },
    {
      icon: <Recycle className="h-8 w-8 text-leaf-green" />,
      title: "Chemical-Free Production",
      description: "Made using only water, heat, and pressure - no chemicals, dyes, or artificial additives.",
      impact: "Safe for soil & water"
    },
    {
      icon: <Globe className="h-8 w-8 text-leaf-green" />,
      title: "Carbon Negative",
      description: "Production process absorbs more CO2 than it produces, contributing to climate change mitigation.",
      impact: "Reduces carbon footprint"
    }
  ];

  const practicalBenefits = [
    {
      icon: <Shield className="h-8 w-8 text-earth-brown" />,
      title: "Food Safe & Hygienic",
      description: "Naturally antimicrobial properties, FDA approved for direct food contact.",
      details: ["No chemical leaching", "Safe for all food types", "Naturally sterile"]
    },
    {
      icon: <Thermometer className="h-8 w-8 text-earth-brown" />,
      title: "Heat & Cold Resistant",
      description: "Withstands temperatures from -20°C to 120°C without deformation.",
      details: ["Microwave safe", "Freezer friendly", "Oven compatible up to 120°C"]
    },
    {
      icon: <Droplets className="h-8 w-8 text-earth-brown" />,
      title: "Leak-Proof & Durable",
      description: "Natural leaf structure provides excellent barrier properties.",
      details: ["Oil resistant", "Moisture proof", "Won't break or tear easily"]
    },
    {
      icon: <Clock className="h-8 w-8 text-earth-brown" />,
      title: "Long Shelf Life",
      description: "Maintains quality for 12+ months when stored properly.",
      details: ["No expiration concerns", "Stackable storage", "Lightweight design"]
    }
  ];

  const healthBenefits = [
    {
      title: "Chemical-Free Dining",
      description: "No plastic chemicals, BPA, or artificial coatings that can leach into food.",
      icon: "🚫"
    },
    {
      title: "Natural Antimicrobial",
      description: "Areca leaves have natural antimicrobial properties that help keep food fresh.",
      icon: "🛡️"
    },
    {
      title: "Allergen-Free",
      description: "Safe for people with plastic, paper, or chemical sensitivities.",
      icon: "✅"
    }
  ];

  const comparisonData = [
    {
      feature: "Biodegradability",
      plastic: "500+ years",
      paper: "2-6 weeks",
      areca: "30-45 days",
      arecaWins: true
    },
    {
      feature: "Production Impact",
      plastic: "High pollution",
      paper: "Deforestation",
      areca: "Zero waste",
      arecaWins: true
    },
    {
      feature: "Heat Resistance",
      plastic: "Limited",
      paper: "Poor",
      areca: "Excellent",
      arecaWins: true
    },
    {
      feature: "Chemical Safety",
      plastic: "BPA concerns",
      paper: "Bleach/dyes",
      areca: "100% natural",
      arecaWins: true
    },
    {
      feature: "Durability",
      plastic: "High",
      paper: "Low",
      areca: "High",
      arecaWins: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${benefitsHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-nature-primary/80 to-leaf-green/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Why Choose Our Leaf Products?
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Discover the comprehensive benefits of switching to areca and siali leaf products -
              for your health, your business, and our planet.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        {/* Environmental Benefits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Environmental Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {environmentalBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-leaf-green/20">
                <CardContent className="p-0 text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {benefit.description}
                  </p>
                  <Badge variant="outline" className="bg-leaf-green/10 text-leaf-green border-leaf-green">
                    {benefit.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practical Benefits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Practical Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practicalBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center space-x-3">
                    {benefit.icon}
                    <CardTitle className="text-xl text-foreground">
                      {benefit.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-earth-brown rounded-full mr-3" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Health Benefits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-gradient-to-r from-secondary/50 to-sage-green/10 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Health & Safety Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {healthBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            How We Compare
          </h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                      <th className="text-center p-4 font-semibold text-foreground">Plastic</th>
                      <th className="text-center p-4 font-semibold text-foreground">Paper</th>
                      <th className="text-center p-4 font-semibold text-foreground bg-leaf-green/20">Areca & Siali Leaf</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-4 font-medium text-foreground">{row.feature}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.plastic}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.paper}</td>
                        <td className="p-4 text-center bg-leaf-green/10">
                          <span className="font-semibold text-leaf-green">{row.areca}</span>
                          {row.arecaWins && <span className="ml-2">🏆</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Economic Benefits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <Card className="bg-gradient-to-r from-nature-primary to-leaf-green text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <Heart className="h-12 w-12 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">
                Economic & Social Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">For Your Business</h3>
                  <ul className="text-primary-foreground/90 space-y-2">
                    <li>• Cost-effective solutions</li>
                    <li>• Enhanced brand image</li>
                    <li>• Customer loyalty boost</li>
                    <li>• Regulatory compliance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">For Communities</h3>
                  <ul className="text-primary-foreground/90 space-y-2">
                    <li>• Direct farmer income</li>
                    <li>• Rural employment creation</li>
                    <li>• Sustainable agriculture support</li>
                    <li>• Zero-waste circular economy</li>
                  </ul>
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary-foreground text-nature-primary hover:bg-primary-foreground/90">
                <Link to="/products">Explore Our Products</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Quick Facts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
              <div className="text-3xl font-bold text-leaf-green mb-2">30-45</div>
              <p className="text-sm text-muted-foreground">Days to biodegrade</p>
            </div>
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
              <div className="text-3xl font-bold text-leaf-green mb-2">0</div>
              <p className="text-sm text-muted-foreground">Chemicals used</p>
            </div>
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
              <div className="text-3xl font-bold text-leaf-green mb-2">120°C</div>
              <p className="text-sm text-muted-foreground">Max temperature</p>
            </div>
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
              <div className="text-3xl font-bold text-leaf-green mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Natural & safe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
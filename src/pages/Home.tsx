import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Leaf, Recycle, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-areca-products.jpg";
import leavesImage from "@/assets/areca-leaves-natural.jpg";

const Home = () => {
  const features = [
    {
      icon: <Leaf className="h-12 w-12 text-leaf-green" />,
      title: "100% Natural",
      description: "Made from fallen areca palm leaves, completely natural and biodegradable."
    },
    {
      icon: <Recycle className="h-12 w-12 text-leaf-green" />,
      title: "Eco-Friendly",
      description: "Zero waste production process with minimal environmental impact."
    },
    {
      icon: <Award className="h-12 w-12 text-leaf-green" />,
      title: "Premium Quality",
      description: "Durable, leak-proof, and suitable for both hot and cold foods."
    },
    {
      icon: <Users className="h-12 w-12 text-leaf-green" />,
      title: "Sustainable Living",
      description: "Supporting local communities and promoting sustainable practices."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-nature-primary/80 to-leaf-green/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Sustainable <span className="text-sage-green">Areca Leaf</span> Products
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Eco-friendly disposable tableware made from naturally fallen areca palm leaves. 
              Beautiful, durable, and completely biodegradable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/products">Shop Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-nature-primary">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Areca Leaf Products?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our products combine sustainability with functionality, offering the perfect 
              alternative to plastic and paper disposables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4 p-0">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Nature, For Nature
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Areca leaves naturally fall from palm trees throughout the year. Instead of 
                letting them decompose on the ground, we collect these leaves and transform 
                them into beautiful, functional tableware.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our production process is completely chemical-free, using only water, heat, 
                and pressure to shape the leaves into various products. This ensures that 
                our products are safe for food contact and completely biodegradable.
              </p>
              <Button asChild variant="nature" size="lg">
                <Link to="/about">Read Our Story</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={leavesImage}
                alt="Natural areca leaves"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nature-primary to-leaf-green">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make the Switch?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of conscious consumers who have chosen sustainable alternatives. 
            Your planet will thank you.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-nature-primary hover:bg-primary-foreground/90">
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
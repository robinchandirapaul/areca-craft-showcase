import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Globe, Users, Leaf } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import leavesImage from "@/assets/areca-leaves-natural.jpg";

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-leaf-green" />,
      title: "Environmental Stewardship",
      description: "We believe in protecting our planet through sustainable practices and eco-friendly products that make a real difference."
    },
    {
      icon: <Heart className="h-8 w-8 text-leaf-green" />,
      title: "Community Impact",
      description: "Supporting local farming communities by creating value from agricultural waste and providing sustainable livelihoods."
    },
    {
      icon: <Globe className="h-8 w-8 text-leaf-green" />,
      title: "Global Responsibility",
      description: "Contributing to a cleaner world by offering alternatives to plastic and promoting circular economy principles."
    },
    {
      icon: <Users className="h-8 w-8 text-leaf-green" />,
      title: "Customer Partnership",
      description: "Working together with our customers to make sustainable choices accessible, affordable, and attractive."
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a vision to create sustainable alternatives to plastic disposables using natural materials."
    },
    {
      year: "2019",
      title: "First Production",
      description: "Launched our first line of areca leaf plates, working directly with local farmers in South India."
    },
    {
      year: "2021",
      title: "Product Expansion",
      description: "Expanded our range to include bowls, cups, and serving trays, reaching 1000+ customers."
    },
    {
      year: "2023",
      title: "International Growth",
      description: "Began exporting to 15 countries and achieved carbon-neutral production certification."
    },
    {
      year: "2024",
      title: "Innovation Forward",
      description: "Launched custom solutions and expanded services, serving restaurants, hotels, and event planners globally."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-nature-primary/80 to-leaf-green/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Born from a passion for environmental conservation and a commitment to sustainable living, 
              EcoLeaf transforms natural waste into beautiful, functional products.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To revolutionize the disposable tableware industry by providing 100% natural, 
                biodegradable alternatives that don't compromise on quality or aesthetics.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Every year, millions of areca palm leaves fall naturally and are often burned as waste. 
                We saw an opportunity to transform this agricultural byproduct into something valuable 
                and environmentally beneficial.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our chemical-free manufacturing process ensures that every product is safe for food contact 
                while maintaining the natural properties that make areca leaves so special.
              </p>
              <Button asChild variant="nature" size="lg">
                <Link to="/products">See Our Products</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={leavesImage}
                alt="Natural areca leaves in their environment"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-sage-green text-foreground p-4 rounded-lg shadow-lg">
                <p className="font-semibold">100% Natural</p>
                <p className="text-sm">Chemical-free process</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sage-green/30 hidden lg:block" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className="p-6">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="bg-leaf-green text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-leaf-green rounded-full border-4 border-background shadow-lg" />
                  
                  <div className="w-full lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-nature-secondary to-sage-green/20 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Impact So Far
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-leaf-green mb-2">2M+</div>
                <p className="text-muted-foreground">Products Manufactured</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-leaf-green mb-2">500+</div>
                <p className="text-muted-foreground">Farmers Supported</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-leaf-green mb-2">50T</div>
                <p className="text-muted-foreground">Plastic Waste Prevented</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Together with our customers and partners, we're making a measurable difference 
              in reducing plastic waste and supporting sustainable livelihoods.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Join Our Mission</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
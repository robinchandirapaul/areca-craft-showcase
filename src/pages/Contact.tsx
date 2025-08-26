import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  Building,
  Users
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@ecoleaf.com", "sales@ecoleaf.com"],
      action: "Send Email"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      action: "Call Now"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["123 Green Street", "Eco City, EC 12345"],
      action: "Get Directions"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-4PM"],
      action: "Schedule Call"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "bulk", label: "Bulk Orders" },
    { value: "wholesale", label: "Wholesale Partnership" },
    { value: "custom", label: "Custom Solutions" },
    { value: "support", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to make the switch to sustainable tableware? Have questions about our products? 
            We're here to help you every step of the way.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl text-foreground flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-leaf-green" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us more about your requirements, questions, or how we can help you..."
                    className="min-h-[150px]"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0 text-center">
                    <div className="flex justify-center mb-4 text-leaf-green">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact Options */}
            <Card className="p-6 bg-gradient-to-r from-secondary/50 to-sage-green/10">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Building className="h-5 w-5 mr-2 text-leaf-green" />
                  Business Inquiries
                </h3>
                <p className="text-muted-foreground mb-4">
                  For bulk orders, wholesale partnerships, or custom solutions:
                </p>
                <div className="space-y-2">
                  <Button variant="nature" size="sm" className="w-full">
                    Request Bulk Quote
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Download Product Catalog
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-leaf-green/10 to-nature-secondary/20">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-leaf-green" />
                  Customer Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Need help with an existing order or have product questions?
                </p>
                <div className="space-y-2">
                  <Button variant="hero" size="sm" className="w-full">
                    Live Chat Support
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Track Your Order
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="p-6 border-dashed border-2 border-leaf-green/30">
              <CardContent className="p-0 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-muted-foreground mb-4">
                  Find quick answers to common questions about our products and services.
                </p>
                <Button variant="outline" size="sm">
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time Promise */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-nature-primary to-leaf-green text-primary-foreground">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Our Response Promise</h3>
              <p className="text-lg text-primary-foreground/90 mb-6">
                We understand that your time is valuable. That's why we commit to responding 
                to all inquiries within 24 hours during business days.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">&lt; 2 hrs</div>
                  <p className="text-sm text-primary-foreground/80">Urgent inquiries</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">&lt; 24 hrs</div>
                  <p className="text-sm text-primary-foreground/80">General questions</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">&lt; 48 hrs</div>
                  <p className="text-sm text-primary-foreground/80">Custom quotes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
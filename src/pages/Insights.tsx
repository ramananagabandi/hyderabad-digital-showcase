import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Lightbulb } from "lucide-react";

const Insights = () => {
  const featuredArticle = {
    title: "The Future of Digital Transformation in Indian Enterprises",
    excerpt: "Exploring how Indian companies are leveraging cutting-edge technologies to drive innovation and compete in the global market.",
    author: "COFOMO Tech Research Team",
    date: "July 25, 2025",
    readTime: "8 min read",
    category: "Digital Transformation",
    image: "/api/placeholder/800/400"
  };

  const articles = [
    {
      title: "AI and Machine Learning: Transforming Business Operations",
      excerpt: "How artificial intelligence is revolutionizing the way businesses operate and make decisions.",
      author: "Dr. Priya Sharma",
      date: "July 22, 2025",
      readTime: "6 min read",
      category: "Artificial Intelligence",
      trending: true
    },
    {
      title: "Cloud Migration Strategies for Enterprise Success",
      excerpt: "Best practices and strategies for successful cloud migration in large organizations.",
      author: "Rajesh Kumar",
      date: "July 20, 2025",
      readTime: "7 min read",
      category: "Cloud Computing"
    },
    {
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Essential security measures for protecting digital assets in a distributed workforce.",
      author: "Anita Desai",
      date: "July 18, 2025",
      readTime: "5 min read",
      category: "Security"
    },
    {
      title: "The Rise of Low-Code Development Platforms",
      excerpt: "How low-code solutions are democratizing application development.",
      author: "Vikram Singh",
      date: "July 15, 2025",
      readTime: "4 min read",
      category: "Development"
    },
    {
      title: "Data Analytics: Driving Business Intelligence",
      excerpt: "Leveraging data analytics to gain actionable insights and drive business growth.",
      author: "Meera Patel",
      date: "July 12, 2025",
      readTime: "6 min read",
      category: "Data Analytics"
    },
    {
      title: "Agile Methodology: Accelerating Project Delivery",
      excerpt: "How agile practices are transforming project management and delivery timelines.",
      author: "Arjun Reddy",
      date: "July 10, 2025",
      readTime: "5 min read",
      category: "Project Management"
    }
  ];

  const categories = [
    "All", "Digital Transformation", "Artificial Intelligence", "Cloud Computing", 
    "Security", "Development", "Data Analytics", "Project Management"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-accent pt-24 pb-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Insights & Expertise
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay ahead with our latest thoughts on technology trends, best practices, and industry innovations
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "secondary"} 
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Insight</h2>
            <p className="text-muted-foreground">Our latest deep-dive analysis</p>
          </div>
          
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Featured Article Image</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="default" className="bg-primary text-white">
                    {featuredArticle.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredArticle.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    By {featuredArticle.author}
                  </p>
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Insights</h2>
            <p className="text-muted-foreground">Expert perspectives on technology and innovation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    {article.trending && (
                      <Badge variant="default" className="bg-accent text-white text-xs">
                        Trending
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">
                        By {article.author}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 border border-primary/10">
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated with Our Insights
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest technology insights, best practices, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
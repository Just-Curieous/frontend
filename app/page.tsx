
import { ScrollText, Microscope, ChartColumn, Rocket, Settings2, Telescope, BrainCircuit } from 'lucide-react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { getAllPosts } from '@/lib/blog';
import BlogPageClient from './blog/BlogPageClient';
import LogoGrid from '@/components/LogoGrid';

export default function LandingPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-stone-600">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Trusted by Section */}
      <LogoGrid />

      {/* Projects Section */}
      <section id="projects">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <BrainCircuit className="w-8 h-8" />,
                title: "Curie: A Research Experimentation Agent",
                description: "The first AI-agent framework designed for automated and rigorous scientific experimentation.",
                link: "https://github.com/Just-Curieous/Curie"
              },
              {
                icon: <Telescope className="w-8 h-8" />,
                title: "Are you Scooped?",
                description: "Analyze your research ideas to see if similar work already exists.",
                link: "https://demo.just-curieous.com/login.html"
              }
            ].map((feature, index) => (
              
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <a href={feature.link}>
                <div className="text-orange-400 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Features
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Automated Experimentation",
                description: "From hypothesis formulation and experimental execution to analysis of results."
              },
              {
                icon: <ChartColumn className="w-8 h-8" />,
                title: "Rigor Enhancement",
                description: "Built-in verification modules enforce methodical procedure, agent reliability and reproducibility."
              },
              {
                icon: <Microscope className="w-8 h-8" />,
                title: "Broad Applicability",
                description: "Supports ML Engineering, system analysis, and general scientific discovery."
              },
              {
                icon: <Settings2 className="w-8 h-8" />,
                title: "Highly Customizable",
                description: "Supports integration with custom starter code and arbitrary datasets."
              },
              {
                icon: <ScrollText className="w-8 h-8" />,
                title: "Automatic, Insightful Reporting",
                description: "Experimental processes and outcomes are clearly documented with insightful figures."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="text-orange-400 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-200 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      

      {/* Blog Section */}
      <section id="blog" className="py-15 px-4 sm:px-6 lg:px-8">
        <BlogPageClient posts={posts} />     
      </section>

      {/* Research Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Research
        </h2>
        <section className=" max-w-7xl mx-auto py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <article className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-3">
                <p className="text-white text-sm mb-2">
                  26 Feb 2025
                </p>
                <div className="flex items-center text-white mb-2">
                  <h3 className="text-xl font-bold text-white mb-2 hover:text-orange-400 transition-colors">
                    <a href="https://arxiv.org/abs/2502.16069">
                      Curie: Toward Rigorous and Automated Scientific Experimentation with AI Agents
                    </a>
                  </h3>
                </div>
                <p className="text-white text-sm">
                  Patrick Tser Jern Kon, Jiachen Liu, Qiuyi Ding, Yiming Qiu, Zhenning Yang, Yibo Huang, Jayanth Srinivasa, Myungjin Lee, Mosharaf Chowdhury, Ang Chen
                </p>
              </div>
                    
          </article>

          <article className="mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">

            <div className="p-3">
              <p className="text-white text-sm mb-2">
                2 Jun 2025
              </p>
              <div className="flex items-center text-white mb-2">
                <h3 className="text-xl font-bold text-white mb-2 hover:text-orange-400 transition-colors">
                  <a href="https://arxiv.org/abs/2505.24785">
                    EXP-Bench: Can AI Conduct AI Research Experiments?
                  </a>
                </h3>
              </div>
              <p className="text-white text-sm">
                Patrick Tser Jern Kon, Jiachen Liu, Xinyi Zhu, Qiuyi Ding, Jingjia Peng, Jiarong Xing, Yibo Huang, Yiming Qiu, Jayanth Srinivasa, Myungjin Lee, Mosharaf Chowdhury, Matei Zaharia, Ang Chen
              </p>
            </div>
                    
          </article>
        </section>

      {/* Demo Video Section
      

      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            See Curie In Action
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-3xl p-2">
              <div className="bg-black rounded-2xl overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src={"https://www.youtube.com/embed/Qn_T5mm2OP4"}
                    title="Product Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}


      {/* Footer */}
      <Footer />
    </div>
  );
}
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Research() {

    return(
        <div className="min-h-screen bg-stone-600">
            {/* Navigation */}
            <Navigation />

            {/* Hero Section */}
            <section className="pt-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                       Our Research
                    </h1>
                </div>
            </section>

            {/* Research Section */}
            <section className=" mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <article className="max-w-xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-2 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">

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

            <Footer />
        </div>
    );
}
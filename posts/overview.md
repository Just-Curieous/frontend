---
layout: home
title: Curie - Move Scientific Research at the Speed of Thought
tags: [overview, machine-learning, research]
---
<!-- bundle exec jekyll serve -->

<div style="text-align: center;">
<h2 style="font-size: 1.15em;">Toward Rigorous and Automated Scientific Experimentation with AI Agents</h2>
</div>


<div style="text-align: center; margin-bottom: 2em;">


  <div style="margin-bottom: 2em;">
    <a href="https://arxiv.org/abs/2502.16069" style="margin: 0 10px; padding: 8px 15px; background-color: #f8f9fa; border-radius: 5px; text-decoration: none; color: #2c3e50;">📄 Paper</a>
    <a href="https://github.com/Just-Curieous/Curie" style="margin: 0 10px; padding: 8px 15px; background-color: #f8f9fa; border-radius: 5px; text-decoration: none; color: #2c3e50;">💻 Github</a>
    <a href="http://demo.just-curieous.com:5000/" style="margin: 0 10px; padding: 8px 15px; background-color: #f8f9fa; border-radius: 5px; text-decoration: none; color: #2c3e50;">🎮 Demo</a>

  </div>
</div>


<div style="text-align: center">

<p style="font-size: 0.8em;">
<a href="https://www.cs-pk.com/">Patrick Tser Jern Kon</a><sup>*</sup>, <a href="https://websites.umich.edu/~amberljc/">Jiachen Liu</a><sup>*</sup> (<sup>*</sup> Equal Contribution) <br>
Qiuyi Ding, <a href="https://www.linkedin.com/in/jingjia-peng/">Jingjia Peng</a>, Xinyi Zhu, 
<a href="https://yimingqiu.me/">Yiming Qiu</a>, <a href="https://zyang37.github.io/">Zhenning Yang</a>, <a href="https://huangyibo.github.io/">Yibo Huang</a>, <a href="https://scholar.google.com/citations?user=HtNfeKYAAAAJ&hl=en">Jayanth Srinivasa</a>,<br>
<a href="https://www.linkedin.com/in/myungjin-lee-5308136/">Myungjin Lee</a>, <a href="https://www.mosharaf.com/">Mosharaf Chowdhury</a>, <a href="https://web.eecs.umich.edu/~chenang/">Ang Chen</a> <br>
University of Michigan, Cisco Systems
</p>
</div>

As researchers, this is our daily routine: we dive deep into literature, absorb diverse perspectives, and let these insights fuel our creativity. One moment, you might stumble upon an idea:
- Maybe configuring the ML model architecture differently could boost performance on your dataset,
- Perhaps tuning the LLM reasoning structure might improve a model’s output quality,
- Probably adjusting the atomic composition of a material could make it more efficient for battery storage?

These sparks of intuition are the lifeblood of research. Yet, transforming them into verified knowledge requires something far less glamorous: rigorous, often tedious **scientific experimentation**. Designing the experiment, executing it, collecting results, analyzing data, and refining your hypothesis—it’s a cycle of trial and error that can consume days, months, even years.

<div style="text-align: center;">
    <img src="../blog/overview.png" alt="Curie Overview" style="border-radius: 12px; max-width: 100%; height: auto;">
    <p style="font-size: 0.8em; margin-top: 10px;">
        Figure 1. Curie overview.
    </p>
</div>


## The Challenge: Why Rigor Matters
However, the problem is, unlike tasks such as trip planning or general problem-solving, scientific progress demands rigor. If science isn’t rigorous, it’s reckless.


Experimentation is the backbone of scientific progress, demanding reliability, methodical control, and interpretability to transform curiosity into verifiable knowledge. Without rigor, we risk unreliable results, irreproducible findings, and ultimately, a lack of trust in AI-driven discoveries.

## Introducing Curie: Rigor-Embedded AI Experimentation
We're thrilled to introduce Curie, an AI agent framework designed to bring rigor to automated experimentation. Curie isn't just designed to automate experiments as shown in Figure 1; it's built to empower researchers to reproduce existing work, extend findings, and even challenge established conclusions, fostering a more dynamic and rigorous scientific process, as shown in Figure 2.

<div class="figure-container" style="text-align: center; max-width: 100%; margin: 0 auto;">
    <img src="../blog/case-study.png" alt="Case Study" style="border-radius: 12px; width: 100%; height: auto; display: block;">
    <p style="font-size: 0.8em; margin-top: 10px;">
        Figure 2. Case study. Curie tries to reprodcuce, extend and challenge the Large Language Monkeys paper[1].
    </p>
</div>

## How Curie Works: The Rigor Engine
At the heart of Curie lies our innovative Experimental Rigor Engine, designed to maintain agent creativity while ensuring methodological soundness. As shown in Figure 3, this engine is composed of three key modules:
- **Intra-Agent Rigor Module**: Focuses on reliability within individual agents by enforcing a set of extensible rigor policies. This includes ensuring that experiment plans align with objectives and that setups are reproducible; minimizing the risk of errors.
- **Inter-Agent Rigor Module**: Maintains methodical control over agent coordination, ensuring correct task transitions and efficient task scheduling. This module orchestrates the workflow between agents, ensuring that the experimental process adheres to a logical sequence.
- **Experiment Knowledge Module**: Enhances interpretability by maintaining well-structured documentation, enabling seamless collaboration and efficient experiment management. This module addresses the limitations of LLMs in knowledge management by providing a structured and verifiable record of the experimental process.

<div style="text-align: center; max-width: 800px; margin: 0 auto; padding: 15px;">
    <img src="../blog/workflow.png" alt="Curie Workflow" style="border-radius: 12px; width: 100%; height: auto; display: block; margin: 0 auto;">
    <p style="font-size: 0.8em; margin-top: 10px;">
        Figure 3. High-level Curie workflow with an example task in LLM reasoning.
    </p>
</div>

## Real-World Validation: The Curie Benchmark
To evaluate Curie's capabilities, we've developed a novel experimental benchmark comprising 46 tasks across four computer science domains. These tasks are derived directly from influential research papers and widely adopted open-source projects, ensuring that they reflect real-world challenges and practical significance. The evaluation shows that Curie significantly outperforms existing AI agent frameworks. When compared to the strongest baseline, Curie achieves a remarkable 3.4x improvement in correctly answering research questions through experimentation. This substantial leap forward underscores Curie's ability to automate complex and rigorous experimentation, marking a major step toward accelerating scientific research and enhancing the reliability of AI-driven discovery.



<pre><code class="language-latex">
@misc{kon2025curierigorousautomatedscientific,
      title={Curie: Toward Rigorous and Automated Scientific Experimentation with AI Agents}, 
      author={Patrick Tser Jern Kon and Jiachen Liu and Qiuyi Ding and Yiming Qiu and Zhenning Yang and Yibo Huang and Jayanth Srinivasa and Myungjin Lee and Mosharaf Chowdhury and Ang Chen},
      year={2025},
      eprint={2502.16069},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
}
</code></pre>

*[1] Large Language Monkeys: Scaling Inference Compute with Repeated Sampling. arXiv:2407.21787*

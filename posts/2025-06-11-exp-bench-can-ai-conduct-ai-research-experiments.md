---
layout: post
title: "Can AI Conduct AI Research Experiments?"
date: 2025-06-11
tags: [machine-learning, research]
---


<div style="text-align: center">


<p style="font-size: 0.8em; color: white; margin-bottom: 2em;">
  <a href="https://www.cs-pk.com/">Patrick Tser Jern Kon</a><sup>*</sup>, 
  <a href="https://websites.umich.edu/~amberljc/">Jiachen Liu</a><sup>*</sup> (Equal Contribution<sup>*</sup>)<br>
  Xinyi Zhu,
  Qiuyi Ding, 
  <a href="https://www.linkedin.com/in/jingjia-peng/">Jingjia Peng</a> (University of Michigan),  
  <a href="https://jxing.me/">Jiarong Xing</a> (UC Berkeley & Rice University), 
  <a href="https://huangyibo.github.io/">Yibo Huang</a> (University of Michigan), 
  <a href="https://yimingqiu.me/">Yiming Qiu</a> (UC Berkeley & University of Michigan), 
  <a href="https://scholar.google.com/citations?user=HtNfeKYAAAAJ&hl=en">Jayanth Srinivasa</a>,
  <a href="https://www.linkedin.com/in/myungjin-lee-5308136/">Myungjin Lee</a> (Cisco Research), <br>
  <a href="https://www.mosharaf.com/">Mosharaf Chowdhury</a> (University of Michigan), 
  <a href="https://stanford.edu/~matei/">Matei Zaharia</a> (UC Berkeley), 
  <a href="https://web.eecs.umich.edu/~chenang/">Ang Chen</a> (University of Michigan)
</p>
</div>

<div style="text-align: center; margin-bottom: 2em;">
  <div style="margin-bottom: 2em;">
    <a href="https://github.com/Just-Curieous/Curie/tree/main/benchmark/exp_bench" style="margin: 0 10px; padding: 8px 15px; background-color: #f8f9fa; border-radius: 5px; text-decoration: none; color: #2c3e50;">📊 Dataset</a>
    <a href="https://arxiv.org/abs/2505.24785" style="margin: 0 10px; padding: 8px 15px; background-color: #f8f9fa; border-radius: 5px; text-decoration: none; color: #2c3e50;">📄 Paper</a>
    <a href="https://github.com/Just-Curieous/Curie" style="margin: 0 10px; padding: 8px 15px; background-color: #f8f9fa; border-radius: 5px; text-decoration: none; color: #2c3e50;">💻 Github</a>
  </div>
</div>


AI for Science is rapidly advancing, with promising early work on scientific automation—such as DeepMind's [AlphaEvolve](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) and others highlighted in this Nature [paper](https://www.nature.com/articles/s41586-023-06221-2).
A particularly exciting frontier is **the automation of AI research experimentation**—the process of designing, executing, and analyzing experiments to advance AI itself. Unlike fields requiring physical experimentation, AI research is largely digital—well-suited for LLM-based automation. 


  <div style="padding: 20px; border-radius: 8px; margin: 2em 0;">
    <p style="margin-bottom: 1em;">Ideally, we want to provide an AI agent with a research goal—such as reproducing a result, validating a new hypothesis, or testing an ablation— along with the specific context and have the agent:</p>
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="margin-bottom: 0.5em;">• Formulate hypotheses, design experiments,</li>
      <li style="margin-bottom: 0.5em;">• Interpret the associated codebase and identify how to modify it,</li>
      <li style="margin-bottom: 0.5em;">• Configure and execute experiments under the right conditions,</li>
      <li style="margin-bottom: 0.5em;">• Analyze results and iteratively refine its approach based on findings</li>
    </ul>
  </div>

<div style="text-align: center; max-width: 800px; margin: 0 auto; padding: 15px;">
    <img src="../blog/exp-bench-overview.png" alt="EXP-Bench Overview" style="width: 100%; height: auto; display: block; margin: 0 auto;">
    <p style="font-size: 0.8em; margin-top: 10px; color: white;">
        Figure 1. EXP-Bench evaluates AI agents on research experiment tasks extracted semi-autonomously from peer-reviewed AI papers.
    </p>
</div>
Achieving this vision requires benchmarks that evaluate agents in real-world research scenarios. But how do we define those scenarios in a way that’s representative, reproducible, and gradable?



Intuitively, peer-reviewed AI papers (e.g., in NeurIPS) along with their open-source codebases, offer a rich source of completed experiments that could, in theory, be repurposed to evaluate AI capabilities in research automation. In practice, however, extracting these tasks is difficult. Papers often present a polished narrative that omits intermediate steps, while critical details—such as the precise conditions under which results hold—are scattered across dense text, supplementary materials, and sprawling repositories.



## Our Contribution: EXP-Bench

To address this challenge, we introduce **EXP-Bench**, a new benchmark designed to make the ever-expanding landscape of published research more accessible for evaluating AI agents in **conducting end-to-end AI research experiments**—from hypothesis to experimental setup to conclusion, as shown in Figure 1. We develop a semi-automated pipeline (Figure 2) that uses multimodal and agentic approaches to reconstruct experiments from fragmented and dense sources (e.g., coding agents identify setups by conditioning on ground-truth outcomes and leveraging the full codebase—reducing the task to a constrained search), while interleaving these steps with lightweight human validation to ensure correctness.

Using this approach, we distilled *461 experiments from NeurIPS and ICLR papers*—spanning domains such as vision, RL, and computational biology—resulting in over 12,000 gradable subtasks.

 

<div style="text-align: center; max-width: 800px; margin: 0 auto; padding: 15px;">
    <img src="../blog/exp-construction.png" alt="EXP-Bench Construction" style="width: 100%; height: auto; display: block; margin: 0 auto;">
    <p style="font-size: 0.8em; margin-top: 10px; color: white;">
        Figure 2. Our semi-automated pipeline for constructing EXP-Bench from published papers.
    </p>
    <p style="font-size: 0.8em; margin-top: 15px; color: white;"> 
            See Figure 3 for an example AI research task extracted through this pipeline.
    </p>

</div>
<div style="text-align: center; max-width: 800px; margin: 0 auto; padding: 0 15px;"> 
    <img src="../blog/exp-bench-example.png" alt="EXP-Bench Example" style="width: 100%; height: auto; display: block; margin: 0 auto;">
    <p style="font-size: 0.8em; margin-top: 10px; color: white;">
        Figure 3. One AI research task example from ICLR 2024 MogaNet [1].
    </p>
</div>

## What EXP-Bench Reveals About Today's AI Agents

We tested leading agents, including *OpenHands w/ Claude Sonnet 3.7*, and found that while they can earn partial credit for individual steps like experiment design or coding (~20-35% success), their ability to *complete a full, executable experiment* is nearly non-existent—a mere 0.5% success rate. 
  <div style="padding: 20px; border-radius: 8px; margin: 2em 0;">
    <p style="margin-bottom: 1em;">Our analysis pinpointed several critical weaknesses:</p>
    <ol style="padding-left: 20px;">
      <li style="margin-bottom: 0.5em;"><em>Limited Long-Horizon Planning and Reasoning</em></li>
      <li style="margin-bottom: 0.5em;"><em>Inability to Handle Open-Ended and Ambiguous Tasks (35.9%)</em></li>
      <li style="margin-bottom: 0.5em;"><em>Difficulty with Environment Setup (41.3%) and Code Debugging (29.8%)</em></li>
    </ol>
  </div>

These results highlight just how far we still are from our goal of automation of research experimentation. By identifying these bottlenecks and providing realistic step-by-step experiment procedures, EXP-Bench serves as a vital tool for future AI agents to improve their ability to conduct AI research experiments.

## Looking Forward

This work is, we hope, a small step toward our broader goal of designing agents capable of automating scientific research. We see EXP-Bench as a launchpad for the next wave of AI research copilots.

That said, much work remains. While EXP-Bench currently focuses on machine learning papers, it does not yet address domains that require interaction with the physical world or support tasks involving true scientific invention. Expanding to those areas—and capturing the creativity, uncertainty, and iteration of real-world discovery—remains an open and exciting challenge.



## Explore Our Work

  <div style="display: flex; justify-content: center; gap: 20px; margin: 2em 0;">
    <a href="https://arxiv.org/abs/2505.24785" style="padding: 10px 20px; background-color: #f8f9fa; color: #2c3e50; text-decoration: none; border-radius: 5px;">📑 Full paper</a>
    <a href="https://github.com/Just-Curieous/Curie/tree/main/benchmark/exp_bench" style="padding: 10px 20px; background-color: #f8f9fa; color: #2c3e50; text-decoration: none; border-radius: 5px;">🗃️ Open-sourced dataset</a>
  </div>

```latex
@article{kon2025expbenchaiconductai,
      title={EXP-Bench: Can AI Conduct AI Research Experiments?}, 
      author={Patrick Tser Jern Kon and Jiachen Liu and Xinyi Zhu and Qiuyi Ding and Jingjia Peng and Jiarong Xing and Yibo Huang and Yiming Qiu and Jayanth Srinivasa and Myungjin Lee and Mosharaf Chowdhury and Matei Zaharia and Ang Chen},
      journal={arXiv preprint 2505.24785}
      year={2025},
}
```
*[1] MogaNet: Multi-order Gated Aggregation Network. ICLR 2024*

